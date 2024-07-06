"use client";

import Typist from "react-typist-component";

import type { Words } from "@/lib/types";

export default function TypeWriter(props: { words: Array<Words> }) {
  const { words } = props;

  return (
    <span className="p-1 font-bold text-white bg-purple-500">
      <Typist
        typingDelay={150}
        finishDelay={500}
        cursor={<span className="h-1 ml-1 bg-white">|</span>}
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
