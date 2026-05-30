"use client";

export const AboutHero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
            ABOUT US
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Helping UK businesses bring their spaces to life
          </h1>
          <p className="text-xl text-gray-600">
            Founded in 2018, Apex VR Tours has produced over 1,200 immersive Matterport
            tours for hotels, venues, restaurants and retailers nationwide. We combine the
            latest 3D capture technology with a genuinely personal, end-to-end service.
          </p>
        </div>
      </div>
    </section>
  );
};
