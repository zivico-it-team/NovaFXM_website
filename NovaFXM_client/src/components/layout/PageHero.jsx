import React from "react";

/**
 * Shared opening section for the public trading pages. Keeping the introduction
 * in one component prevents the Platform, Accounts, Payments and Promotions
 * pages from drifting into different layouts.
 */
export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt,
  actionLabel,
  onAction,
}) {
  return (
    <section className="page-hero relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
      <img
        src={image}
        alt={imageAlt}
        className="page-hero-image absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#03160b]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(1,104,50,0.42),transparent_65%)]" />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-black/15 px-4 py-2 text-xs font-semibold tracking-wide text-[#F4D35E] backdrop-blur-sm sm:px-5">
          <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
          {eyebrow}
        </span>
        <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          {title}
          {accent ? <span className="block text-[#F4D35E]">{accent}</span> : null}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
          {description}
        </p>
        {actionLabel ? (
          <button
            type="button"
            onClick={onAction}
            className="button-shine mt-8 rounded-full bg-[#014421] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-[#01351a]"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </section>
  );
}
