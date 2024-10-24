import ButtonLink from "@/components/ButtonLink";
import Jumbotron from "@/components/Jumbotron";
import TypeWriter from "@/components/TypeWriter";
import { getWords } from "@/lib/data";

export default function HomePage() {
  const words = getWords();

  return (
    <Jumbotron>
      <h2 className="text-6xl dark:text-gray-50">Hey, I'm Todd!</h2>
      <h3 className="flex items-center justify-center gap-2 text-2xl dark:text-gray-50 sm:text-3xl">
        <span>I am a</span>
        <TypeWriter words={words} />
      </h3>
      <p className="text-lg dark:text-gray-50">
        I love to build cool stuff with code
      </p>
      <ButtonLink href="/about" prefetch>
        Learn More
      </ButtonLink>
    </Jumbotron>
  );
}
