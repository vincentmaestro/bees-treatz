import { ComboNavigation } from "@/app/components/menu-navigation";
import { client } from "@/sanity";
import { SanityDocument } from "next-sanity";
import ComboBuilder from "@/app/components/combo-builder";
import { notFound } from "next/navigation";

interface ComboResponse {
  name: string;
}

async function getCombos() {
    const query = `*[
        _type == "combos"]{
        name,
        mains[]{
        ...
        },
        boxes[]{
        ...
        },
        add_ons[]{
        ...
        },
    }`;

    return await client.fetch<SanityDocument<ComboResponse>[]>(
        query,
        {},
        {
            next: {
                revalidate: 1
            }
        }
    );
}

export default async function ComboPage({ params }: {
    params: Promise<{ comboName: string }>
}) {
  const { comboName } = await params;
    const combos = await getCombos();
    const combo = combos.find(c => c.name.toLowerCase() === `${comboName} combo`);

    if(!combo)
      return(notFound());

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow text-white py-16 text-center">
        <h1 className="text-5xl font-black mb-4">{combo.name}</h1>
        <p className="text-xl">Pick what you want - build to your taste!</p>
      </section>

      <ComboNavigation />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <ComboBuilder combo={combo} />
      </div>
    </div>
  );
}
