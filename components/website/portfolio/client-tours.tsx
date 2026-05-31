interface ClientTour {
  client: string;
  type: string;
  src: string;
}

export const ClientTours = () => {
  const tours: ClientTour[] = [
    {
      client: "Unique Gym",
      type: "Leisure & Fitness",
      src: "https://tours.venuetours.ai/embed/tour/952399d7-54d5-4b3e-a7b5-3b4cd925b1b8?id=tour-952399d7-54d5-4b3e-a7b5-3b4cd925b1b8-1780261953014&tourId=956619b0-7eb6-4a69-b8b2-93bba2df4486&showTitle=false&showChat=true",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {tours.map((tour, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <div className="mb-5 text-center">
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-sm mb-3">
                  {tour.type}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {tour.client}
                </h2>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  src={tour.src}
                  width="100%"
                  height="600"
                  className="w-full h-[600px] border-0"
                  frameBorder={0}
                  allowFullScreen
                  title={`${tour.client} virtual tour`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
