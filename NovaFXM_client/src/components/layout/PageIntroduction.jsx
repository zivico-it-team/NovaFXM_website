import React from "react";
import { Check } from "lucide-react";

// A consistent detail section placed directly below each public-page banner.
export default function PageIntroduction({ eyebrow, title, description, points, image, imageAlt }) {
  return (
    <section className="bg-[#f8f8f8] px-4 py-14 sm:px-6 sm:py-16 md:min-h-[620px] md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-gray-500">{eyebrow}</p>
          <h2 className="text-2xl font-bold leading-tight text-[#014421] md:text-4xl">{title}</h2>
          <div className="mb-8 mt-6 h-1 w-24 rounded-full bg-[#014421]" />
          <p className="text-sm leading-relaxed text-gray-600 sm:text-lg">{description}</p>
          <div className="mt-10 space-y-5 text-sm">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-md transition duration-300 hover:shadow-xl">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#014421]">
                  <Check size={16} strokeWidth={2.5} />
                </span>
                <span className="font-medium text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex min-h-[36svh] items-center justify-center sm:min-h-[48svh] md:min-h-[440px]">
          <img src={image} alt={imageAlt} className="relative z-10 w-full max-w-[380px] rounded-2xl object-contain shadow-[0_18px_42px_rgba(1,68,33,0.12)] sm:max-w-[540px] md:w-[540px] md:max-w-none" />
        </div>
      </div>
    </section>
  );
}
