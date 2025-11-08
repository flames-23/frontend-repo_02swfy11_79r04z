import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full bg-[#0b0b0b] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,0)_0%,rgba(17,17,17,0.5)_55%,rgba(17,17,17,0.85)_85%,rgba(17,17,17,1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#ff9d23]" />
              New: AI Thumbnail Generator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,157,35,0.25)]">
              Create Scroll-Stopping Thumbnails in Seconds
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg max-w-xl">
              ThumbnailGPT uses cutting-edge AI to transform ideas, images, or references into high-performing YouTube thumbnails with a sleek, modern aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-[#ff9d23] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 hover:brightness-95">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                See Demo
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-1 text-[#ff9d23]">★★★★★</div>
              <p className="text-xs text-zinc-400">Trusted by creators and agencies</p>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-2xl shadow-black/50">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 to-black">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1232&auto=format&fit=crop"
                  alt="Thumbnail generator preview"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
