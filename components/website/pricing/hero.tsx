"use client";

export const PricingHero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
            SIMPLE, TRANSPARENT PRICING
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricing built around your space
          </h1>
          <p className="text-xl text-gray-600">
            Every space is different, so our packages scale with the size and complexity of
            your property. The guide prices below are a starting point — get in touch for a
            tailored, fixed quote with no surprise travel fees.
          </p>
        </div>
      </div>
    </section>
  );
};
