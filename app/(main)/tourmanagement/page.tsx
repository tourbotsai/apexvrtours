import Script from "next/script";

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
        <div id="agency-portal-f415692a-cea6-4aad-ac0f-405f6a056395"></div>
        <Script id="agency-portal-embed" strategy="afterInteractive">
          {`
(function() {
  var container = document.getElementById('agency-portal-f415692a-cea6-4aad-ac0f-405f6a056395');
  if (!container) return;
  var iframe = document.createElement('iframe');
  iframe.src = 'https://tourbots.ai/embed/agency-portal?agency=f415692a-cea6-4aad-ac0f-405f6a056395&showHeader=true&autoHeight=1';
  iframe.width = '100%';
  iframe.height = '900px';
  iframe.frameBorder = '0';
  iframe.allowFullscreen = true;
  iframe.scrolling = 'no';
  iframe.style.width = '100%';
  iframe.style.border = '0';
  container.appendChild(iframe);
  window.addEventListener('message', function(event) {
    if (event.origin !== 'https://tourbots.ai') return;
    if (event.source !== iframe.contentWindow) return;
    var data = event.data;
    if (!data || data.type !== 'tourbots-portal-resize') return;
    var height = parseInt(data.height, 10);
    if (height > 0) {
      iframe.style.height = height + 'px';
      iframe.setAttribute('height', String(height));
    }
  });
})();
          `}
        </Script>
      </section>
    </main>
  );
}
