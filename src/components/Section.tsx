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
      className={`py-12 ${background} ${color} dark:bg-gray-700 dark:text-gray-50`}
    >
      <Container extraSpace>{children}</Container>
    </section>
  );
}
