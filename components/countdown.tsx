"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const haymDate = siteConfig.haym;
const startsAt = new Date(
  haymDate.start.year,
  haymDate.start.month - 1,
  haymDate.start.day,
).getTime();
const endsAt = new Date(
  haymDate.end.year,
  haymDate.end.month - 1,
  haymDate.end.day,
  23,
  59,
  59,
  999,
).getTime();

const units = [
  { label: "Days", length: 86_400_000 },
  { label: "Hours", length: 3_600_000 },
  { label: "Minutes", length: 60_000 },
  { label: "Seconds", length: 1_000 },
] as const;

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1_000);
    return () => window.clearInterval(interval);
  }, []);

  if (now !== null && now > endsAt) {
    return (
      <div className="countdown-state" aria-live="polite">
        <span className="countdown-state__mark" aria-hidden="true">✦</span>
        <p className="countdown-state__title">Until we gather again.</p>
        <p className="countdown-state__copy">HAYM 2027 has come to a close. Thank you for being part of it.</p>
      </div>
    );
  }

  if (now !== null && now >= startsAt) {
    return (
      <div className="countdown-state" aria-live="polite">
        <span className="countdown-state__mark" aria-hidden="true">✦</span>
        <p className="countdown-state__title">HAYM is underway.</p>
        <p className="countdown-state__copy">{haymDate.dateLabel} · We are glad you are here.</p>
      </div>
    );
  }

  const remaining = Math.max(0, (startsAt - (now ?? startsAt)) / 1_000);
  const values = [
    Math.floor(remaining / 86_400),
    Math.floor((remaining % 86_400) / 3_600),
    Math.floor((remaining % 3_600) / 60),
    Math.floor(remaining % 60),
  ];

  return (
    <div className="countdown" aria-label={"Countdown to HAYM, " + haymDate.dateLabel}>
      {units.map((unit, index) => (
        <div className="countdown__unit" key={unit.label}>
          <span className="countdown__value" aria-hidden="true">
            {now === null ? "––" : String(values[index]).padStart(2, "0")}
          </span>
          <span className="countdown__label">{unit.label}</span>
        </div>
      ))}
      <span className="sr-only" aria-live="polite">
        {now === null
          ? "Countdown loading."
          : values.map((value, index) => value + " " + units[index].label.toLowerCase()).join(", ") +
            " until HAYM."}
      </span>
    </div>
  );
}
