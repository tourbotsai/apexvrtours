export const metadata = {
  title: "Tour Management | Apex VR Tours",
  description:
    "Client portal for Apex VR Tours customers. Log in to view your virtual tour, edit settings, customise your AI chatbot and review analytics.",
};

export default function TourManagementPage() {
  return (
    <main>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
              CLIENT PORTAL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tour Management
            </h1>
            <p className="text-xl text-gray-600">
              Log in to manage your virtual tour in one place — view it live, edit your
              settings, customise your AI chatbot and review visitor analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-gray-50">
        <iframe
          src="https://tourbots.ai/embed/agency-portal?agency=f415692a-cea6-4aad-ac0f-405f6a056395&showHeader=true"
          width="100%"
          height="900"
          className="block w-full h-[900px] border-0"
          frameBorder={0}
          allowFullScreen
          title="Apex VR Tours client management portal"
        />
      </section>
    </main>
  );
}
