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
        <div id="agency-portal-952399d7-54d5-4b3e-a7b5-3b4cd925b1b8"></div>
        <Script id="agency-portal-embed" strategy="afterInteractive">
          {`
(function() {
  var EMBED_ID = 'agency-portal-952399d7-54d5-4b3e-a7b5-3b4cd925b1b8';
  var IFRAME_SRC = 'https://tourbots.ai/embed/agency-portal?agency=952399d7-54d5-4b3e-a7b5-3b4cd925b1b8&showHeader=true&autoHeight=1';
  var ALLOWED_ORIGIN = 'https://tourbots.ai';
  var WIDTH = '100%';
  var INITIAL_HEIGHT = '900px';

  // Inject the iframe if the container is present and not already mounted. Kept
  // idempotent so it is safe to call repeatedly (see the MutationObserver below,
  // which re-mounts after single-page-app navigation recreates the container).
  function mount() {
    var container = document.getElementById(EMBED_ID);
    if (!container || container.querySelector('iframe')) return;
    var iframe = document.createElement('iframe');
    iframe.src = IFRAME_SRC;
    iframe.width = WIDTH;
    iframe.height = INITIAL_HEIGHT;
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    iframe.scrolling = 'no';
    iframe.style.width = WIDTH;
    iframe.style.border = '0';
    container.appendChild(iframe);
  }

  // Bind the resize listener + observer only once per page load, even if the
  // snippet is evaluated more than once. Re-running mount() stays safe.
  if (window.__tourbotsPortalEmbeds && window.__tourbotsPortalEmbeds[EMBED_ID]) {
    mount();
    return;
  }
  window.__tourbotsPortalEmbeds = window.__tourbotsPortalEmbeds || {};
  window.__tourbotsPortalEmbeds[EMBED_ID] = true;

  // Auto-resize: the portal posts its live content height so the iframe fits
  // with no inner scrollbar. Look the iframe up per message so we always target
  // the current one (SPA navigation can replace it).
  window.addEventListener('message', function(event) {
    if (event.origin !== ALLOWED_ORIGIN) return;
    var data = event.data;
    if (!data || data.type !== 'tourbots-portal-resize') return;
    var container = document.getElementById(EMBED_ID);
    var iframe = container && container.querySelector('iframe');
    if (!iframe || event.source !== iframe.contentWindow) return;
    var height = parseInt(data.height, 10);
    if (height > 0) {
      iframe.style.height = height + 'px';
      iframe.setAttribute('height', String(height));
    }
  });

  mount();

  // Re-mount after client-side navigation. In a single-page app the container
  // <div> is unmounted when navigating away and recreated (empty) on return,
  // but this script only runs once — so watch the DOM and re-inject when the
  // container reappears without an iframe. Debounced to one frame; the mount()
  // guard makes the steady state a cheap no-op.
  if (typeof MutationObserver !== 'undefined') {
    var scheduled = false;
    new MutationObserver(function() {
      if (scheduled) return;
      scheduled = true;
      var run = function() { scheduled = false; mount(); };
      if (window.requestAnimationFrame) window.requestAnimationFrame(run);
      else setTimeout(run, 0);
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
          `}
        </Script>
      </section>
    </main>
  );
}
