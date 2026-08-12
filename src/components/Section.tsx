import Container from "./Container";

type SectionProps = {
  background?: string;
  color?: string;
  children: React.ReactElement;
};

export default function Section({
  background = "",
  color = "",
  children,
}: SectionProps) {
  return (
    <section
      className={`relative py-20 sm:py-24 ${background} ${color} dark:bg-[#171421] dark:text-slate-100`}
    >
      <Container extraSpace>{children}</Container>
    </section>
  );
}
