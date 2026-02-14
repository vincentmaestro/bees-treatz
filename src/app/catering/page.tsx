import { Cake } from 'lucide-react';

export default function CateringPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow text-white py-20 text-center">
        <h1 className="text-5xl font-black mb-4">Events & Catering</h1>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl shadow-xl text-center">
            <Cake className="w-16 h-16 text-brand-orange mx-auto mb-4" />
            <h3 className="text-2xl font-black">Birthday Parties</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
