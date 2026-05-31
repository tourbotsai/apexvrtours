export function VrTourTwo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See a second tour
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Here&rsquo;s another space to explore — step inside, move between rooms and view
            the dollhouse. Try the AI chatbot too: ask it a question or tell it where you&rsquo;d
            like to go, and watch it take you there.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src="https://tours.hoteltours.ai/embed/tour/f415692a-cea6-4aad-ac0f-405f6a056395?id=tour-f415692a-cea6-4aad-ac0f-405f6a056395-1780193050619&tourId=7b43ef9c-2373-4f2f-9189-929505e25494&showTitle=false&showChat=true"
              width="100%"
              height="600"
              className="w-full h-[600px] border-0"
              frameBorder={0}
              allowFullScreen
              title="Apex VR Tours second sample virtual tour"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
