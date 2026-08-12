import ButtonLink from "@/components/ButtonLink";
import Jumbotron from "@/components/Jumbotron";
import TypeWriter from "@/components/TypeWriter";
import { getWords } from "@/lib/data";

export default function HomePage() {
  const words = getWords();

  return (
    <Jumbotron>
      <div className="rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-purple-700 shadow-sm backdrop-blur dark:border-purple-300/20 dark:bg-white/5 dark:text-purple-300">
        Full-stack developer · Utah
      </div>
      <h2 className="text-balance text-6xl font-black leading-[0.95] text-slate-900 dark:text-white sm:text-7xl lg:text-8xl">
        Hey, I’m Todd<span className="text-orange-500">!</span>
      </h2>
      <h3 className="flex flex-wrap items-center justify-center gap-2 text-2xl font-bold text-slate-700 dark:text-slate-200 sm:text-4xl">
        <span>I am a</span>
        <TypeWriter words={words} />
      </h3>
      <p className="max-w-xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
        I love to build cool stuff with code
      </p>
      <ButtonLink href="/about" prefetch>
        Learn More
      </ButtonLink>
    </Jumbotron>
  );
}
