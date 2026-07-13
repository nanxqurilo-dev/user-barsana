"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

const promises = [
  { icon: "✦", title: "Purely made", text: "One honest ingredient" },
  { icon: "♧", title: "Rooted in care", text: "Tradition in every drop" },
  { icon: "♡", title: "Family first", text: "Made for your kitchen" },
];

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [phone, setPhone] = useState("");
  const [offers, setOffers] = useState(true);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  function requestOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    setError("");
    setStep("otp");
  }

  function verifyOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\d{6}$/.test(otp)) {
      setError("Enter the 6-digit OTP sent to your mobile.");
      return;
    }
    setError("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#102017]/70 p-4 backdrop-blur-[3px] max-sm:p-0" role="presentation" onMouseDown={(event) => {if (event.target === event.currentTarget) onClose();}}>
      <section className="relative my-auto grid w-full max-w-[1100px] grid-cols-[1.4fr_0.85fr] overflow-hidden rounded-[26px] bg-[#f3c75b] shadow-[0_35px_100px_rgba(0,0,0,0.38)] max-lg:max-w-[820px] max-lg:grid-cols-1 max-sm:min-h-[100dvh] max-sm:rounded-none" role="dialog" aria-modal="true" aria-labelledby="login-title">
        <button ref={closeButtonRef} className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-[#29472b]/15 bg-white/70 text-2xl leading-none text-[#29472b] transition hover:rotate-90 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29472b]" type="button" onClick={onClose} aria-label="Close login">×</button>

        <div className="relative overflow-hidden px-12 py-11 max-lg:hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:radial-gradient(#5e4917_0.7px,transparent_0.7px)] [background-size:9px_9px]" />
          <div className="pointer-events-none absolute -bottom-10 -left-20 size-[330px] rounded-full border border-white/25 shadow-[0_0_0_55px_rgba(255,255,255,0.07),0_0_0_110px_rgba(255,255,255,0.04)]" />
          <Image className="pointer-events-none absolute -bottom-3 -left-28 z-[1] h-auto w-[490px] opacity-40" src="/image/oil-info-branch.png" alt="" width={1983} height={793} aria-hidden="true" />

          <div className="relative z-10 flex h-full min-h-[505px] flex-col items-center text-center">
            <div className="flex items-center">
              <Image className="size-[105px] rounded-full bg-[#fff9de] object-contain mix-blend-multiply" src="/image/logo png.png" alt="Barsana" width={105} height={105} />
              <div className="flex flex-col items-start">
                <strong className="font-serif text-[36px] uppercase tracking-[0.06em] text-[#4a2b17]">Barsana</strong>
                <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.24em] text-[#78582b]">Pure by tradition</span>
              </div>
            </div>
            <h2 id="login-title" className="mt-7 font-serif text-[35px] font-medium leading-tight text-[#234225]">Welcome to the<br /><em className="font-normal text-[#82590e]">Barsana family.</em></h2>
            <p className="mt-3 max-w-[490px] text-xs leading-5 text-[#53623e]">Sign in to keep your cart close, receive order updates, and make every visit a little easier.</p>

            <div className="mt-auto grid w-full grid-cols-3 gap-4 pt-10">
              {promises.map((promise) => <div className="rounded-[20px] border border-white/25 bg-[#856621]/15 px-4 py-6 backdrop-blur-sm" key={promise.title}><span className="mx-auto grid size-10 place-items-center rounded-full bg-[#fff7d5] text-xl text-[#b87e10] shadow-sm">{promise.icon}</span><strong className="mt-3 block font-serif text-[15px] text-[#2c492b]">{promise.title}</strong><small className="mt-1 block text-[9px] leading-4 text-[#61704e]">{promise.text}</small></div>)}
            </div>
          </div>
        </div>

        <div className="m-5 ml-0 flex min-h-[540px] flex-col rounded-[20px] bg-[#fffdf7] px-9 py-10 max-lg:m-4 max-lg:min-h-0 max-lg:px-8 max-sm:m-0 max-sm:min-h-[100dvh] max-sm:justify-center max-sm:rounded-none max-sm:px-5">
          <div className="mb-8 hidden items-center max-lg:flex">
            <Image className="size-16 object-contain mix-blend-multiply" src="/image/logo png.png" alt="Barsana" width={64} height={64} />
            <div><strong className="block font-serif text-2xl uppercase tracking-[0.06em] text-[#4a2b17]">Barsana</strong><span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#87662e]">Pure by tradition</span></div>
          </div>

          <div className="my-auto">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#9a7018]">{step === "phone" ? "Member login" : "Secure verification"}</p>
            <h3 className="mt-2 font-serif text-[30px] font-semibold leading-tight text-[#244225]">{step === "phone" ? "Login with mobile" : "Enter your OTP"}</h3>
            <p className="mt-2 text-[11px] leading-5 text-[#7b8478]">{step === "phone" ? "We’ll send a one-time password to verify your number." : <>A 6-digit code was sent to +91 {phone}.</>}</p>

            {step === "phone" ? (
              <form className="mt-7" onSubmit={requestOtp} noValidate>
                <label className="mb-2 block text-[10px] font-bold text-[#40563d]" htmlFor="login-phone">Mobile number</label>
                <div className={`flex h-14 overflow-hidden rounded-xl border bg-white shadow-sm transition focus-within:border-[#52723f] focus-within:ring-2 focus-within:ring-[#52723f]/15 ${error ? "border-red-400" : "border-[#ccd2c7]"}`}>
                  <span className="flex items-center gap-2 border-r border-[#d8ddd3] px-3 text-xs font-bold text-[#4c5e48]"><span>🇮🇳</span>+91</span>
                  <input id="login-phone" className="min-w-0 flex-1 border-0 bg-transparent px-4 text-sm text-[#233c28] outline-none placeholder:text-[#a2aaa0]" type="tel" inputMode="numeric" autoComplete="tel" maxLength={10} value={phone} onChange={(event) => {setPhone(event.target.value.replace(/\D/g, "")); setError("");}} placeholder="Enter mobile number" autoFocus />
                </div>
                {error && <p className="mt-2 text-[10px] font-semibold text-red-600" role="alert">{error}</p>}

                <label className="mt-4 flex cursor-pointer items-start gap-2 text-[10px] leading-4 text-[#7a8677]"><input className="mt-0.5 size-4 accent-[#355a35]" type="checkbox" checked={offers} onChange={(event) => setOffers(event.target.checked)} /><span>Notify me about order updates, recipes, and occasional Barsana offers.</span></label>
                <button className="mt-6 h-13 w-full rounded-xl bg-[#244826] text-[11px] font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_12px_25px_rgba(36,72,38,0.2)] transition hover:bg-[#315d33] active:scale-[0.99]" type="submit">SEND OTP →</button>
              </form>
            ) : (
              <form className="mt-7" onSubmit={verifyOtp} noValidate>
                <label className="mb-2 block text-[10px] font-bold text-[#40563d]" htmlFor="login-otp">One-time password</label>
                <input id="login-otp" className={`h-14 w-full rounded-xl border bg-white px-4 text-center text-xl font-bold tracking-[0.5em] text-[#29442b] outline-none transition focus:border-[#52723f] focus:ring-2 focus:ring-[#52723f]/15 ${error ? "border-red-400" : "border-[#ccd2c7]"}`} type="text" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={otp} onChange={(event) => {setOtp(event.target.value.replace(/\D/g, "")); setError("");}} placeholder="••••••" autoFocus />
                {error && <p className="mt-2 text-[10px] font-semibold text-red-600" role="alert">{error}</p>}
                <button className="mt-6 h-13 w-full rounded-xl bg-[#244826] text-[11px] font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#315d33]" type="submit">VERIFY & LOGIN</button>
                <div className="mt-4 flex items-center justify-between text-[9px] font-bold text-[#61715d]"><button className="border-0 bg-transparent hover:underline" type="button" onClick={() => {setStep("phone"); setOtp(""); setError("");}}>← CHANGE NUMBER</button><button className="border-0 bg-transparent text-[#9a7018] hover:underline" type="button">RESEND OTP</button></div>
              </form>
            )}
          </div>

          <p className="mt-9 text-center text-[8px] leading-4 text-[#929991]">By continuing, you agree to Barsana’s <a className="font-bold underline" href="#home">Terms</a> and <a className="font-bold underline" href="#home">Privacy Policy</a>.</p>
        </div>
      </section>
    </div>
  );
}
