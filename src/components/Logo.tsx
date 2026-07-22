import Image from "next/image";
import { site } from "@/lib/site";

export default function Logo({
  dark = false,
  className = "h-20 w-auto md:h-[6rem]",
}: {
  dark?: boolean;
  className?: string;
}) {
  if (site.logo.mode === "image") {
    return (
      <Image
        src="/images/logo.png"
        alt={`${site.name} — ${site.city}`}
        width={1440}
        height={754}
        priority
        className={`${className} rounded-lg shadow-md`}
      />
    );
  }

  // wordmark fallback — used when the client has no vector logo file
  const main = dark ? "text-linen" : "text-soot";
  const sub = dark ? "text-sand/80" : "text-bark";
  const rule = dark ? "bg-linen/70" : "bg-soot/70";

  const Rule = () => (
    <span className="flex w-full items-center gap-1.5" aria-hidden>
      <span className="h-1 w-1 rounded-full bg-ember" />
      <span className={`h-px flex-1 ${rule}`} />
      <span className="h-1 w-1 rounded-full bg-ember" />
    </span>
  );

  return (
    <span
      className="inline-flex w-fit flex-col items-center gap-1"
      aria-label={`${site.name} — ${site.city}`}
    >
      <Rule />
      <span
        className={`whitespace-nowrap font-display text-xl font-bold uppercase tracking-[0.18em] leading-none md:text-2xl ${main}`}
      >
        {site.name}
      </span>
      <Rule />
      <span
        className={`whitespace-nowrap text-[0.58rem] font-semibold uppercase tracking-[0.22em] ${sub}`}
      >
        {site.logo.tagline}
      </span>
    </span>
  );
}
