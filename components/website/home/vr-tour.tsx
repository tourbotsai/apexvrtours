export function VrTour() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-600 text-white text-sm font-semibold tracking-wide px-5 py-2 mb-4 rounded-sm">
            EXPERIENCE IT YOURSELF
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Step inside a sample virtual tour
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate the space just like you were there — walk through rooms, view the
            dollhouse, and explore every detail. This is exactly what your customers will
            experience online, around the clock.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src="https://tourbots.ai/embed/tour/8ba11f8b-4db1-40bc-a3db-4b04e6405e02?id=tour-8ba11f8b-4db1-40bc-a3db-4b04e6405e02-1780089410970&tourId=ae65cfc6-d845-4132-8621-a5dca0bf9d96&showTitle=false&showChat=true"
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
