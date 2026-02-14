import { Flag } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-linear-to-br from-amber-50 to-orange-50 py-20 text-center">
        <h1 className="text-5xl font-black text-brand-dark">Our Story</h1>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl shadow-lg text-center">
            <Flag className="w-16 h-16 text-brand-orange mx-auto mb-4" />
            <h3 className="text-2xl font-black">Authenticity</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
