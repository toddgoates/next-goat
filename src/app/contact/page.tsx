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
          <h2 className="mb-12 text-center text-4xl">Get in touch</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2">
              <p className="mb-8 text-lg">
                Want to collaborate together on project? Feel free to get in
                touch by email or text or fill out the form below... or connect
                with me on social media... or don't. It's your choice.
              </p>
              <ContactForm />
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-4 bg-white p-5 shadow-lg dark:bg-slate-800">
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
