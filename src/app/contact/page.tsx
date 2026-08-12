import type { Metadata } from "next";
import {
  AiOutlineMail as EnvelopeIcon,
  AiOutlinePhone as PhoneIcon,
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
} from "react-icons/ai";
import { FaSquareXTwitter as XIcon } from "react-icons/fa6";

import IconLink from "@/components/IconLink";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Todd Goates | Contact",
  description: "Different ways to get in touch with Todd Goates",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-purple-600 uppercase dark:text-purple-300">
              Say hello
            </p>
            <h2 className="text-5xl font-black text-balance sm:text-6xl">
              Let’s make something cool.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2">
              <p className="mb-8 text-lg">
                Want to collaborate together on project? Feel free to get in
                touch by email or text or fill out the form below... or connect
                with me on social media... or come to my house and say hi. Just
                kidding, please don't do that.
              </p>
              <ContactForm />
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-5 rounded-4xl border border-purple-100 bg-white/80 p-7 shadow-lg dark:border-white/10 dark:bg-white/5">
                <IconLink href="mailto:todd@toddgoates.com">
                  <EnvelopeIcon /> todd@toddgoates.com
                </IconLink>
                <IconLink href="tel:18013199420">
                  <PhoneIcon /> 801 319 9420
                </IconLink>
                <IconLink
                  href="https://twitter.com/toddgoates"
                  target="_blank"
                  rel="noreferrer"
                >
                  <XIcon /> X
                </IconLink>
                <IconLink
                  href="https://github.com/toddgoates"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon /> GitHub
                </IconLink>
                <IconLink
                  href="https://www.linkedin.com/in/toddgoates"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon /> LinkedIn
                </IconLink>
              </div>
            </div>
          </div>
        </>
      </Section>
    </>
  );
}
