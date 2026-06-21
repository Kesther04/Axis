import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Bus } from "lucide-react";
import Navbar from "../components/Navbar";

/**
 * ComingSoon
 *
 * Placeholder screen for AxisConnect routes that haven't shipped yet.
 * Matches the live site's light navy/orange brand and rounded,
 * friendly tone, so it reads as part of the same product rather than
 * a generic maintenance page.
 *
 * Usage: drop this in for any route under construction, wrapped by
 * the existing <Navbar /> and <Footer />, e.g.
 *
 *   <Navbar />
 *   <ComingSoon />
 *   <Footer />
 */

const ComingSoon = () => {
  // Animated dots, mirrors a status line ticking without a real countdown.
  const [dotIndex, setDotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar/>
    <main className="relative flex w-full h-screen items-center justify-center overflow-hidden bg-white px-6 py-24">
      {/* Soft tinted shapes, kept subtle and off to the side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-orange-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-primary blur-3xl"
      />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-xl rounded-3xl border border-slate-100 bg-[#F8FAFC] p-8 shadow-sm sm:p-12"
      >
        {/* Status pill */}
        <div className="mb-8 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">
              On the way
            </span>
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Axis &middot; New route
          </span>
        </div>

        {/* Route line: two stops connected by a dashed path, bus-route motif */}
        <div className="mb-9 flex items-center gap-3">
          <div className="flex flex-col items-center">
            <MapPin className="h-4 w-4 text-[#0F1B3D]/70" />
            <span className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
              Here
            </span>
          </div>

          <div className="relative flex-1">
            <div className="h-px w-full border-t-2 border-dashed border-slate-200" />
            <Bus className="absolute -top-2.5 left-1/2 h-5 w-5 -translate-x-1/2 text-orange-500" />
          </div>

          <div className="flex flex-col items-center">
            <div className="h-2.5 w-2.5 rounded-full border-2 border-orange-400 bg-white" />
            <span className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
              This page
            </span>
          </div>
        </div>

        {/* Core message */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#0F1B3D] sm:text-4xl">
          This route isn&rsquo;t live yet
          <span className="inline-block w-7 text-left text-orange-500">
            {".".repeat(dotIndex)}
          </span>
        </h1>

        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-500">
          We&rsquo;re still building this part of AxisConnect. Check back
          soon, or head back to keep planning your trip on the pages that are
          already up and running.
        </p>

        {/* Back home action, matches the site's pill-button style */}
        <div className="mt-9">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F1B3D]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F1B3D]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>
        </div>
      </motion.section>
    </main>
    </>
  );
};

export default ComingSoon;