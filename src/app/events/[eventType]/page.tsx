import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { client } from '@/sanity';
import { SanityDocument } from 'next-sanity';
import GallerySection from '@/app/components/event-gallery';
import { notFound } from 'next/navigation';

async function getEvents(eventType: string) {
  const query = `*[
  _type == "${eventType}"]{
    name,
    description,
    images
  }
  `;

  return await client.fetch<SanityDocument[]>(
    query,
    {},
    {
      next: {
        revalidate: 1
      }
    }
  );
}

export default async function EventGalleryPage({ params }: {
  params: Promise<{ eventType: string }>
}) {
  const { eventType } = await params;
  const event = [
    'canapes',
    'cocktail-mocktails',
    'other-events'
  ]
    .find(e => e === eventType);

  if(!event)
    return(notFound());

  const eventData = await getEvents(event);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/events#rq" 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Request a quote now</span>
          </Link>
          <h1 className="text-4xl lg:text-5xl font-black drop-shadow-lg">Event Gallery</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {eventData.length ?
            eventData.map((event, idx) => (
              <GallerySection key={idx} event={event} index={idx} />
            )) :
            <p className='text-xl font-black text-brand-dark text-center mt-10 italic'>
              No events here yet...
            </p>
          }
        </div>
      </section>
    </div>
  );
}
