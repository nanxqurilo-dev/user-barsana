"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";

export default function LoginTrigger({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={`grid size-10 place-items-center rounded-full border-0 bg-transparent text-[#173b2b] transition hover:bg-[#e9eddf] ${className}`} type="button" onClick={() => setOpen(true)} aria-label="Open login">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="3.5" /><path d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6" /></svg>
      </button>
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
