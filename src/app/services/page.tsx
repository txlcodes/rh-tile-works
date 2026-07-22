import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site, services, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: site.pageMeta.services.title,
  description: site.pageMeta.services.description,
};

const DETAILS: Record<string, string[]> = {
  "Bathroom Tile Installation": [
    "Floors, walls & tub decks",
    "Full remodels or single-room updates",
    "Waterproofing where it matters",
    "Upfront price before we start",
  ],
  "Kitchen Backsplash": [
    "Precise cuts around outlets & cabinets",
    "Clean, straight grout lines",
    "Subway, mosaic & large-format tile",
    "Same-week scheduling",
  ],
  "Flooring Tile": [
    "Porcelain, ceramic & stone-look tile",
    "Kitchens, entryways & basements",
    "Level, square installation",
    "Remodels & new construction",
  ],
  "Shower & Tub Surrounds": [
    "Full shower & tub surrounds",
    "Waterproofed & properly sloped",
    "Niches, benches & custom details",
    "Residential & commercial",
  ],
  "Tile Repair & Regrouting": [
    "Cracked or loose tile replacement",
    "Full or partial regrouting",
    "Matched tile & grout color",
    "No job too small",
  ],
  "Commercial Tile Work": [
    "Offices, restaurants & retail spaces",
    "Scheduled around business hours",
    "Durable, high-traffic materials",
    "Free estimates on any size job",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our services"
        title="Tile installation & repair — done right."
        desc="From a full bathroom remodel to a single cracked tile — skilled installers who know the details, and give you a straight answer before we start."
      />

      <section className="container-x py-16 md:py-20">
        <div className="space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden rounded-lg md:h-80">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <div>
                  <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-bark">{s.desc}</p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {(DETAILS[s.title] || []).map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm font-semibold text-char">
                        <Check size={16} className="mt-0.5 shrink-0 text-ember" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-grad mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-white shadow-lg shadow-ember/25 transition-transform hover:scale-[1.03]"
                  >
                    <MessageCircle size={15} /> Ask about {s.title.toLowerCase()}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <span className="kicker">How it works</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
From your message to a finished space.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div>
                  <span className="font-display text-5xl font-bold text-sand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
