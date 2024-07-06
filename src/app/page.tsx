import ButtonLink from "@/components/ButtonLink";
import Jumbotron from "@/components/Jumbotron";
import TypeWriter from "@/components/TypeWriter";
import { getWords } from "@/lib/data";

export default function HomePage() {
  const words = getWords();

  return (
    <Jumbotron>
      <h2 className="text-6xl">Hey, I'm Todd!</h2>
      <h3 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl">
        <span>I'm a</span>
        <TypeWriter words={words} />
      </h3>
      <p className="text-lg">I love to build cool stuff with code</p>
      <ButtonLink href="/about">Learn More</ButtonLink>
    </Jumbotron>
  );
}
