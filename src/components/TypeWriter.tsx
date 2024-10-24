"use client";

import Typist from "react-typist-component";

import type { Word } from "@/lib/types";

export default function TypeWriter(props: { words: Array<Word> }) {
  const { words } = props;

  return (
    <span className="bg-purple-500 p-1 font-bold text-white">
      <Typist
        typingDelay={150}
        finishDelay={500}
        cursor={<span className="ml-1 h-1 bg-white">|</span>}
      >
        {words.map((word, index) => (
          <div key={word.id}>
            <span>{word.description}</span>
            <Typist.Delay ms={500} />
            {index + 1 === words.length ? (
              <span></span>
            ) : (
              <Typist.Backspace count={word.description.length} />
            )}
          </div>
        ))}
      </Typist>
    </span>
  );
}
