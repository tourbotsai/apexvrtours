export function VrTour() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Step inside a sample virtual tour
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore the tour just like you were there — walk through rooms and view the
            dollhouse. Try the AI chatbot too: ask it a question, or tell it to show you the
            cardio area, and watch it take you there.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src="https://tourbots.ai/embed/tour/952399d7-54d5-4b3e-a7b5-3b4cd925b1b8?id=tour-952399d7-54d5-4b3e-a7b5-3b4cd925b1b8-1780259185538&tourId=3a35b31f-6e60-49a1-9fbc-1c9a31575b86&showTitle=false&showChat=true"
              width="100%"
              height="600"
              className="w-full h-[600px] border-0"
              frameBorder={0}
              allowFullScreen
              title="Apex VR Tours sample virtual tour"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
