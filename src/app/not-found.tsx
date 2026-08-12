import Link from "next/link";

import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-9rem)] items-center overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,.18),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(251,146,60,.18),transparent_30%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,.2),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(251,146,60,.12),transparent_32%)]"
      />

      <Container extraSpace>
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-purple-600 dark:text-purple-300">
              Well, this is awkward
            </p>
            <h1 className="text-balance text-7xl font-black leading-[0.85] text-slate-900 dark:text-white sm:text-8xl lg:text-9xl">
              4<span className="text-purple-500">0</span>
              <span className="text-orange-500">4</span>
            </h1>
            <h2 className="mt-7 text-balance text-3xl font-black sm:text-4xl">
              The page you were looking for ran away.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:mx-0">
              Here's a cute cat you can stare at for a bit while you decide what
              to do next.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <ButtonLink href="/" prefetch>
                Take me home
              </ButtonLink>
              <Link
                href="/projects"
                prefetch
                className="rounded-full px-3 py-2 font-bold text-purple-600 transition-colors hover:text-purple-800 dark:text-purple-300 dark:hover:text-purple-200"
              >
                Browse my projects →
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-purple-500 to-orange-400 opacity-80"
            />
            <div className="relative -rotate-2 overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-[0_30px_80px_-30px_rgba(88,28,135,.65)] transition-transform duration-500 hover:rotate-0 dark:border-[#2c2540] dark:bg-[#2c2540]">
              <img
                src="/images/computer-cat.jpg"
                alt="A gray and white ragdoll cat sitting on a chair in front of a laptop"
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="px-5 py-4 text-center text-sm font-bold text-slate-500 dark:text-slate-300">
                Lead investigator, currently unavailable.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
