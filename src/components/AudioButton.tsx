"use client";

import { useRef } from "react";
import { AiOutlinePlayCircle as PlayIcon } from "react-icons/ai";

import IconLink from "./IconLink";

type AudioButtonProps = {
  src: string;
  description: string;
};

export default function AudioButton({ src, description }: AudioButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  function playSound() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <>
      <IconLink as="button" onClick={playSound}>
        <PlayIcon />
        {description}
      </IconLink>
      <audio ref={audioRef} src={src}>
        Sorry, looks like your browser doesn't support audio
      </audio>
    </>
  );
}
