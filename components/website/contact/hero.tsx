"use client";

export const ContactHero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Request a quote for your space
          </h1>
          <p className="text-xl text-gray-600">
            Tell us a little about your property — the type of space, rough size and
            location — and we&rsquo;ll come back with a tailored, fixed quote. Most tours
            can be booked in within a week.
          </p>
        </div>
      </div>
    </section>
  );
};
