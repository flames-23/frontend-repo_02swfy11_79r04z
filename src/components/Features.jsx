import { Image, Sparkles, Repeat } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Text → Thumbnail',
    desc: 'Describe your video and let AI design a click-worthy thumbnail with layout, colors, and typography.',
  },
  {
    icon: Image,
    title: 'Image → Thumbnail',
    desc: 'Upload an image or screenshot; we enhance composition, add titles, and on-brand styling automatically.',
  },
  {
    icon: Repeat,
    title: 'Recreate Thumbnail',
    desc: 'Drop a reference thumbnail; we analyze and recreate the style with your content and branding.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0b0b0b] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,157,35,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Powerful AI, simple workflow</h2>
          <p className="mt-3 text-zinc-400">Everything you need to produce high-converting thumbnails fast.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl shadow-black/40 hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff9d23]/15 text-[#ff9d23] ring-1 ring-[#ff9d23]/30">
                <Icon />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
