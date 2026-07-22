import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ArrowRight,
  Droplets,
  ShowerHead,
  Gauge,
  Wrench,
  Snowflake,
  Flame,
  Boxes,
  Store,
  Handshake,
  Warehouse,
  ShieldCheck,
  Check,
  MapPin,
  Quote,
  X,
  Clock,
  Navigation,
  CalendarClock,
  PackageCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import StatCounter from "@/components/StatCounter";
import WaterParticles from "@/components/WaterParticles";
import {
  site,
  mapTitle,
  mapEmbedSrc,
  serviceStrip,
  painPoints,
  valueProps,
  expectBullets,
  services,
  steps,
  trustBadges,
  testimonials,
  areas,
  faqs,
  reasons,
  gallery,
} from "@/lib/site";

// Shared by both the hero icon strip and the value-prop cards — any icon key
// works in either section, so a site.ts author never has to check which map has what.
const ICON_MAP = {
  droplets: Droplets,
  showerhead: ShowerHead,
  gauge: Gauge,
  wrench: Wrench,
  snowflake: Snowflake,
  flame: Flame,
  warehouse: Warehouse,
  boxes: Boxes,
  store: Store,
  handshake: Handshake,
} as const;
const STRIP_ICON = ICON_MAP;
const VALUE_ICON = ICON_MAP;

const STATS = [
  { value: 14, suffix: "", label: "Towns We Serve" },
  { value: 6, suffix: "", label: "Tile Services, One Crew" },
  { value: 1, suffix: "", label: "Upfront Price, No Surprises" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO (split: content + red form card) ============ */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/bathroom-tile.jpg"
          alt="Modern tiled bathroom with walk-in shower"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soot/95 via-soot/90 to-soot/70" />
        <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-md bg-ember/20 px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-glow ring-1 ring-ember/40">
              <Wrench size={13} /> Worcester&apos;s Tile Installation Crew
            </span>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] text-linen sm:text-5xl lg:text-[3.4rem]">
              Ready for New Tile? Message a{" "}
              <span className="text-grad">Real Tile Installer</span>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-sand/85">
              Skilled tile installers who show up, scope it right, and give you the price before
              they cut a single tile. Bathrooms, kitchens, floors and commercial spaces for
              homeowners and businesses across Worcester County.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-sand/85">
              A dated bathroom, a cracked backsplash, a floor that needs replacing — message the
              job in and we&apos;ll get it done.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grad btn-shine inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-xl shadow-ember/30 transition-transform hover:scale-[1.03]"
              >
                <MessageCircle size={18} /> Message Us on Facebook
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-7 py-4 font-bold uppercase tracking-wide text-linen backdrop-blur transition-colors hover:border-glow hover:text-glow"
              >
                Our Tile Services <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={140}>
            <div className="card-lift relative h-[19rem] overflow-hidden rounded-lg shadow-2xl shadow-black/40 ring-1 ring-white/10 md:h-[23rem]">
              <Image
                src="/images/kitchen-backsplash.jpg"
                alt="Finished kitchen with tiled backsplash"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-soot/90 to-transparent p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-linen">
                  Working across Worcester County
                </p>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-xl font-bold text-glow"
                >
                  Message us on Facebook
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ RED SERVICE STRIP ============ */}
      <section className="bg-grad">
        <div className="container-x grid grid-cols-2 gap-px lg:grid-cols-4">
          {serviceStrip.map((s, i) => {
            const Icon = STRIP_ICON[s.icon as keyof typeof STRIP_ICON];
            return (
              <Reveal key={s.label} variant="up" delay={i * 90}>
                <Link
                  href="/services"
                  className="group flex flex-col items-center gap-3 px-4 py-8 text-center text-white transition-colors hover:bg-white/10"
                >
                  <Icon size={40} strokeWidth={1.4} className="transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="text-[0.95rem] font-bold uppercase tracking-wide">
                    {s.label}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ PROBLEM / SOLUTION + VALUE GRID ============ */}
      <section className="container-x py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Tired of Tile Jobs That Never{" "}
              <span className="text-ember">Get Scheduled?</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              Whether you need a full remodel or just one tile fixed, the last thing you need is
              another runaround. We hear the same frustrations across Worcester and Worcester
              County:
            </p>
            <ul className="mt-6 space-y-3">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[0.95rem] text-char">
                  <X size={18} className="mt-0.5 shrink-0 text-ember" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-soot">
              That&apos;s exactly why Worcester County homeowners and businesses message RH Tile
              Works.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {valueProps.map((v, i) => {
              const Icon = VALUE_ICON[v.icon as keyof typeof VALUE_ICON];
              return (
                <Reveal key={v.title} variant="scale" delay={i * 90}>
                  <div className="card-lift h-full rounded-lg border border-sand bg-cream p-6 text-center">
                    <span className="bg-grad mx-auto grid h-14 w-14 place-items-center rounded-full text-white shadow-lg shadow-ember/25">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-4 text-base font-bold uppercase tracking-wide">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bark">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ INTEGRITY BLOCK ============ */}
      <section className="bg-linen py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              A Tile Crew Built for the Details, <span className="text-ember">Not Just the Big Jobs</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              We take on the full remodels and the small repairs alike, and we treat every job
              with the same care. No rushed cuts, no crooked lines — just tight, level tile and
              straight answers.
            </p>
            <p className="mt-4 font-semibold text-soot">Here&apos;s what you can expect:</p>
            <ul className="mt-4 space-y-3">
              {expectBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 font-semibold text-char">
                  <Check size={18} className="mt-0.5 shrink-0 text-ember" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grad btn-shine mt-7 inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
            >
              <MessageCircle size={17} /> Message Us Now
            </a>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="card-lift relative h-[24rem] overflow-hidden rounded-lg shadow-xl md:h-[28rem]">
              <Image
                src="/images/shower-surround.jpg"
                alt="Traditional tiled bathroom with clawfoot tub"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WELCOME (black, overlapping images + Three.js particles) ============ */}
      <section className="relative overflow-hidden bg-soot py-20 md:py-24">
        <WaterParticles className="z-0 opacity-70" />
        <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="relative">
              <div className="relative h-[24rem] w-full overflow-hidden rounded-lg shadow-2xl md:h-[26rem]">
                <Image
                  src="/images/tile-repair.jpg"
                  alt="RH Tile Works installer patching and prepping a room for tile"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="floaty absolute -bottom-8 right-4 h-40 w-56 overflow-hidden rounded-lg border-4 border-soot shadow-2xl md:right-0 md:h-48 md:w-64">
                <Image
                  src="/images/flooring-tile.jpg"
                  alt="Finished tile flooring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-glow">
              Welcome To
            </span>
            <h2 className="mt-2 text-3xl font-bold text-linen md:text-4xl">
              RH Tile Works
            </h2>
            <p className="mt-5 leading-relaxed text-sand/80">
              For homeowners and businesses across Worcester and Worcester County, RH Tile Works
              is the crew that gets the job done — skilled tile installers for bathrooms,
              kitchens, floors and commercial spaces, with upfront pricing and no surprises once
              the work starts.
            </p>
            <p className="mt-4 leading-relaxed text-sand/80">
              Just need a repair instead? We handle cracked tile, loose corners and tired grout
              lines too. Message us your project and a few photos — we&apos;ll confirm the scope
              and get you scheduled.
            </p>
            <Link
              href="/contact"
              className="bg-grad btn-shine mt-7 inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
            >
              Get in Touch <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ WHAT WE DO (image cards + label bars) ============ */}
      <section className="container-x py-20 md:py-24">
        <Reveal className="text-center">
          <span className="kicker justify-center">What we do</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Repairs, Installs &amp; Supply — Under One Roof</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="scale" delay={(i % 3) * 90}>
              <Link
                href="/services"
                className="card-lift group block overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-soot/70 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between gap-2 bg-cream px-5 py-4">
                  <span className="text-[1.05rem] font-bold uppercase tracking-wide text-soot group-hover:text-ember">
                    {s.title}
                  </span>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-ember transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ GALLERY STRIP ============ */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="kicker justify-center">Gallery</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A Look at Our Work</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.slice(0, 4).map((g, i) => (
              <Reveal key={g.img} variant="scale" delay={(i % 4) * 80}>
                <figure className="card-lift group overflow-hidden rounded-lg border border-sand bg-linen shadow-sm">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={g.img}
                      alt={g.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-3 text-sm font-bold text-char">{g.title}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS (5 steps) ============ */}
      <section className="bg-linen py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="kicker justify-center">How it works</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From Your List to Loaded Up
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-bark">
              Five simple steps — no wandering aisles, no wasted trips, just the right parts in
              your truck and back to the job.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} variant="up" delay={i * 90}>
                <div className="card-lift relative h-full rounded-lg border border-sand bg-cream p-6">
                  <span className="bg-grad grid h-12 w-12 place-items-center rounded-full font-display text-xl font-bold text-white shadow-lg shadow-ember/25">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-[0.95rem] font-bold uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RED STATS BAND (zigzag top) ============ */}
      <section className="relative">
        <div className="zigzag-top h-5 w-full bg-grad" />
        <div className="bg-grad">
          <div className="container-x py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-3">
              {STATS.map((st, i) => (
                <Reveal key={st.label} variant="scale" delay={i * 120} className="text-center">
                  <div className="font-display text-6xl font-bold text-white md:text-7xl">
                    <StatCounter value={st.value} suffix={st.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/90">
                    {st.label}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 border-t border-white/20 pt-10 text-center">
              <h2 className="text-2xl font-bold uppercase text-white md:text-3xl">
                Serving Worcester &amp; Worcester County
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85">
                Based right in Worcester, we install and repair tile for homeowners and
                businesses across Worcester and the surrounding Worcester County communities:
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-md bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TRUST BADGE STRIP ============ */}
      <section className="border-b border-sand bg-cream py-10">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {trustBadges.map((b) => (
                <div
                  key={b}
                  className="flex flex-col items-center gap-2 text-center text-char"
                >
                  <ShieldCheck size={26} className="text-ember" />
                  <span className="text-[0.82rem] font-bold uppercase tracking-wide leading-tight">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ OUR PROMISE (reasons) ============ */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="kicker justify-center">Our promise</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              What Every Customer Can Count On
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <div className="card-lift h-full rounded-lg border border-sand bg-linen p-6">
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPANY OVERVIEW + IMAGE ============ */}
      <section className="container-x py-20 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              <span className="text-ember">Worcester &amp; Worcester County&apos;s</span> Tile
              Installation &amp; Repair Source
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              RH Tile Works is the kind of crew customers recommend without hesitation — not
              because we talk big, but because we show up, quote it straight, and do the work
              right. Skilled tile installers for full remodels and the repairs behind them.
            </p>
            <p className="mt-4 leading-relaxed text-bark">
              Whether it&apos;s a full bathroom remodel, a new kitchen backsplash, or a single
              tile for a commercial build-out, we take the time to get it right the first time.
              Residential and commercial, big job and small repair — one crew that stands behind
              what it does.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grad btn-shine inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
              >
                <MessageCircle size={17} /> Message Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border-2 border-ember px-7 py-4 font-bold uppercase tracking-wide text-ember transition-colors hover:bg-ember hover:text-white"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="card-lift relative h-[26rem] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/commercial-tile.jpg"
                alt="Commercial interior under tile renovation"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-lg bg-soot/85 p-4 backdrop-blur">
                <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-linen">{site.address}</p>
                  <p className="text-xs text-sand/70">Local store &amp; supply · will-call ready</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-soot py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-glow">
              What customers say
            </span>
            <h2 className="mt-2 text-3xl font-bold text-linen md:text-4xl">
              Pros &amp; Homeowners Keep Coming Back
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} variant="up" delay={i * 110}>
                <figure className="card-lift h-full rounded-lg bg-white/[0.04] p-7 ring-1 ring-white/10">
                  <Quote className="text-glow" size={26} />
                  <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-sand/90">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="font-bold text-linen">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.14em] text-sand/60">{t.area}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISIT COUNTER + GOOGLE MAP ============ */}
      <section className="bg-linen py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="kicker justify-center">Find us</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Working Across Worcester, MA</h2>
            <p className="mx-auto mt-3 max-w-2xl text-bark">
              Based in Worcester and serving the surrounding towns. Message us your project and
              we&apos;ll schedule a time to come take a look.
            </p>
          </Reveal>

          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal variant="left">
              <div className="flex h-full flex-col gap-4">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift flex items-start gap-4 rounded-lg border border-sand bg-cream p-5"
                >
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      Service Area
                    </p>
                    <p className="mt-0.5 font-bold text-soot">{site.address}</p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-ember">
                      <Navigation size={13} /> Get Directions
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-lg border border-sand bg-cream p-5">
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      Hours
                    </p>
                    <p className="mt-0.5 font-semibold text-soot">{site.hours}</p>
                  </div>
                </div>

                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift flex items-start gap-4 rounded-lg border border-sand bg-cream p-5"
                >
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                    <MessageCircle size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      Message Us
                    </p>
                    <p className="mt-0.5 font-bold text-soot">On Facebook</p>
                  </div>
                </a>

                <div className="rounded-lg border border-sand bg-cream p-5">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                    <CalendarClock size={14} className="text-ember" /> What to expect
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-char">
                    {[
                      "Free, no-pressure estimates",
                      "A crew who actually knows tile",
                      "Same-week scheduling for most jobs",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <PackageCheck size={14} className="mt-0.5 shrink-0 text-ember" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div className="h-full min-h-[26rem] overflow-hidden rounded-lg border border-sand shadow-xl">
                <iframe
                  title={mapTitle()}
                  src={mapEmbedSrc()}
                  className="h-full min-h-[26rem] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ over dark texture ============ */}
      <section className="relative">
        <Image
          src="/images/tile-repair.jpg"
          alt="Tile installer at work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-soot/85" />
        <div className="container-x relative py-20 md:py-24">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold uppercase text-linen md:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 4) * 70}>
                <details className="group rounded-lg border border-white/15 bg-white/95 p-5 open:shadow-xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-soot [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-grad text-white transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-bark">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
