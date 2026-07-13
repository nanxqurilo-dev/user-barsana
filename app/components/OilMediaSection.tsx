"use client";

import Image from "next/image";
import { useState } from "react";

// Replace this ID later with the final Barsana YouTube video ID.
const TEMPORARY_YOUTUBE_VIDEO_ID = "avof93b4rbg";

export default function OilMediaSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-[#fff0a7] px-[5%] py-24 text-[#294523] max-lg:py-20 max-sm:px-4 max-sm:py-16" aria-labelledby="media-section-title">
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-20 [background-image:radial-gradient(#987718_0.65px,transparent_0.65px)] [background-size:11px_11px]" />
      <div className="pointer-events-none absolute -right-28 -top-28 -z-10 size-[390px] rounded-full border border-[#d6ab23]/30 shadow-[0_0_0_55px_rgba(223,177,38,0.08),0_0_0_110px_rgba(223,177,38,0.05)] max-sm:size-[260px]" />

      <Image
        className="pointer-events-none absolute -bottom-12 -left-24 -z-10 h-auto w-[510px] -rotate-6 opacity-55 max-lg:w-[400px] max-sm:-bottom-4 max-sm:-left-24 max-sm:w-[300px]"
        src="/image/oil-info-branch.png"
        alt=""
        width={1983}
        height={793}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1550px] grid-cols-[0.86fr_1.3fr] items-center gap-[7%] max-lg:grid-cols-1 max-lg:gap-12">
        <div className="relative z-10 max-w-[620px] max-lg:max-w-[760px]">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-extrabold tracking-[0.18em] text-[#947019]">
            <span className="h-px w-9 bg-current" />
            BARSANA FIELD NOTES
          </div>
          <h2 id="media-section-title" className="m-0 font-serif text-[clamp(40px,4.6vw,66px)] font-medium leading-[1.04] tracking-[-0.035em] text-[#244321]">
            See the care behind<br /><em className="font-normal text-[#aa7413]">every golden drop.</em>
          </h2>
          <p className="mt-7 max-w-[590px] text-[15px] leading-7 text-[#53634c] max-sm:text-[13px] max-sm:leading-6">
            Good mustard oil begins long before it reaches the kitchen. It starts with carefully chosen seeds, patient pressing, natural settling, and thoughtful packing. This short film space is created to share that journey openly with every Barsana family.
          </p>
          <p className="mt-4 max-w-[570px] text-[13px] leading-6 text-[#68745f] max-sm:text-xs">
            The current film is a temporary process video. Your final farm, production, or brand story can be placed here later by changing one video ID inside this component.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
            <span className="rounded-xl border border-[#897029]/20 bg-white/55 px-4 py-4 text-[10px] font-bold leading-4 text-[#40543a] backdrop-blur-sm"><b className="mb-1 block font-serif text-xl text-[#b47c14]">01</b>Selected seeds</span>
            <span className="rounded-xl border border-[#897029]/20 bg-white/55 px-4 py-4 text-[10px] font-bold leading-4 text-[#40543a] backdrop-blur-sm"><b className="mb-1 block font-serif text-xl text-[#b47c14]">02</b>Slow pressing</span>
            <span className="rounded-xl border border-[#897029]/20 bg-white/55 px-4 py-4 text-[10px] font-bold leading-4 text-[#40543a] backdrop-blur-sm"><b className="mb-1 block font-serif text-xl text-[#b47c14]">03</b>Careful packing</span>
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-[22px] border-[5px] border-white/70 bg-[#18381f] shadow-[0_28px_60px_rgba(63,47,10,0.25)] max-sm:rounded-[14px] max-sm:border-[3px]">
            {isPlaying ? (
              <iframe
                className="absolute inset-0 size-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${TEMPORARY_YOUTUBE_VIDEO_ID}?autoplay=1&controls=1&cc_load_policy=1&fs=1&playsinline=1&rel=0&modestbranding=1`}
                title="Temporary mustard oil process video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                className="group absolute inset-0 size-full overflow-hidden text-left focus-visible:outline-4 focus-visible:outline-offset-[-6px] focus-visible:outline-[#f2bc24]"
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play mustard oil process video"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,#e9ad1b_0,transparent_34%),linear-gradient(125deg,#132f1b_0%,#275631_55%,#987118_100%)]" />
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_0.8px,transparent_0.8px)] [background-size:9px_9px]" />
                <div className="absolute -bottom-24 -right-7 size-[430px] rounded-full border border-[#f5c437]/35 shadow-[0_0_0_55px_rgba(245,196,55,0.07),0_0_0_110px_rgba(245,196,55,0.05)] max-sm:size-[280px]" />
                <Image className="absolute bottom-[-23%] right-[7%] h-[115%] w-auto object-contain drop-shadow-[18px_20px_17px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-[1.025]" src="/image/5l-front.png" alt="Barsana 5 litre mustard oil jar" width={1024} height={1536} />

                <div className="absolute inset-y-0 left-0 flex w-[57%] flex-col justify-between p-[7%] text-white max-sm:w-[65%]">
                  <span className="w-fit rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[8px] font-extrabold tracking-[0.15em] backdrop-blur-sm">WATCH THE PROCESS</span>
                  <div>
                    <p className="mb-3 font-serif text-[clamp(22px,3vw,45px)] font-medium leading-[1.05]">From mustard seed<br />to family table.</p>
                    <span className="text-[9px] font-bold tracking-[0.1em] text-[#f4d57d]">TEMPORARY FILM · PLAY VIDEO</span>
                  </div>
                </div>

                <span className="absolute left-1/2 top-1/2 grid size-[78px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#e9b11d] text-[#17341d] shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ffd763] max-sm:size-[58px]" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-current max-sm:size-5"><path d="M8 5v14l11-7L8 5Z" /></svg>
                </span>
              </button>
            )}
          </div>

          <div className="mx-auto flex w-[92%] items-center justify-between rounded-b-2xl bg-[#25482b] px-5 py-3 text-[9px] font-bold tracking-[0.08em] text-[#dbe6d6] max-sm:w-[94%] max-sm:px-3 max-sm:text-[7px]">
            <span>{isPlaying ? "YOUTUBE PLAYER · CONTROLS ENABLED" : "CLICK TO PLAY"}</span>
            <button className="border-0 bg-transparent text-[#f2c34b] underline-offset-4 hover:underline" type="button" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "CLOSE VIDEO" : "PLAY INSIDE PAGE"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
