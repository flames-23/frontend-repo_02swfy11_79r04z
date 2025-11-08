import { Star, Check, ChevronDown, Twitter, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

// Reviews
const testimonials = [
  {
    name: 'Alex Carter',
    role: 'YouTube Creator',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop',
    quote:
      'Swapped my designer backlog for ThumbnailGPT. CTR up 38% in two weeks — it pays for itself.',
  },
  {
    name: 'Priya Shah',
    role: 'Agency Owner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    quote:
      'The recreate tool is unreal. Matching competitor styles for A/B tests is now a 2-minute job.',
  },
  {
    name: 'Marco Liu',
    role: 'Gaming Channel',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2d?q=80&w=400&auto=format&fit=crop',
    quote:
      'Image → Thumbnail nails the composition every time. My workflow is night and day.',
  },
];

// Pricing
const plans = [
  {
    name: 'Starter',
    monthly: 9,
    yearly: 84,
    popular: false,
    features: ['40 thumbnails / mo', 'Basic styles', 'Export JPG/PNG', 'Email support'],
  },
  {
    name: 'Pro',
    monthly: 19,
    yearly: 180,
    popular: true,
    features: ['150 thumbnails / mo', 'Advanced styles', 'Background removal', 'Priority support'],
  },
  {
    name: 'Studio',
    monthly: 39,
    yearly: 372,
    popular: false,
    features: ['Unlimited thumbnails', 'Brand kits', 'Team collaboration', 'API access'],
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-[#0b0b0b] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by creators</h2>
          <p className="mt-3 text-zinc-400">Real results from channels and agencies of all sizes.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl shadow-black/40">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
              <div className="mt-4 flex text-[#ff9d23]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#ff9d23" className="text-[#ff9d23]" />
                ))}
              </div>
              <p className="mt-3 text-zinc-300 text-sm">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative bg-[#0b0b0b] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-zinc-400">Choose a plan that scales with your channel.</p>

          <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 text-sm rounded-full ${!yearly ? 'bg-[#ff9d23] text-black' : 'text-zinc-300'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 text-sm rounded-full ${yearly ? 'bg-[#ff9d23] text-black' : 'text-zinc-300'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const price = yearly ? p.yearly : p.monthly;
            const suffix = yearly ? '/yr' : '/mo';
            return (
              <div
                key={p.name}
                className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl shadow-black/40 hover:-translate-y-0.5 transition-all ${
                  p.popular ? 'ring-2 ring-[#ff9d23]/60' : ''
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#ff9d23] px-3 py-1 text-xs font-semibold text-black shadow">
                    Most popular
                  </span>
                )}
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">${price}</span>
                  <span className="text-zinc-400 text-sm">{suffix}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check size={16} className="text-[#ff9d23]" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#get-started"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium ${
                    p.popular
                      ? 'bg-[#ff9d23] text-black shadow-lg shadow-amber-500/30'
                      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  Choose {p.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const items = [
    {
      q: 'Can I use my own brand fonts and colors?',
      a: 'Yes. Create a brand kit to apply your fonts, colors, and logo to every thumbnail automatically.',
    },
    {
      q: 'Do you support batch generation?',
      a: 'Absolutely. Upload a CSV or connect via API to generate thumbnails in bulk for entire content calendars.',
    },
    {
      q: 'What export options are available?',
      a: 'Export in JPG/PNG up to 4K, including safe margins for YouTube UI overlays.',
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-[#0b0b0b] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">FAQ</h2>
        <div className="mt-8 space-y-3">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-white font-medium">{item.q}</span>
                  <ChevronDown
                    className={`text-[#ff9d23] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-zinc-300">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#0b0b0b] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl shadow-black/40 md:grid-cols-2">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to boost your CTR?</h3>
            <p className="mt-2 text-zinc-300">Join thousands of creators using ThumbnailGPT to craft standout thumbnails.</p>
            <div className="mt-6 flex gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-[#ff9d23] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 hover:brightness-95">
                Get Started Free
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                See Pricing
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-[#ff9d23] to-amber-600 ring-1 ring-amber-300/30 shadow-lg shadow-amber-500/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#ff9d23] to-amber-600 ring-1 ring-amber-300/30 shadow-lg shadow-amber-500/20" />
              <span className="font-semibold text-white tracking-tight text-lg">ThumbnailGPT</span>
            </div>
            <p className="mt-3 text-sm text-zinc-400 max-w-sm">
              AI that crafts scroll-stopping thumbnails. Faster creation, higher click-through.
            </p>
            <div className="mt-4 flex gap-3 text-zinc-300">
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} ThumbnailGPT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
