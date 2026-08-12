type JumbotronProps = {
  children: React.ReactNode;
  background?: string;
  backgroundImage?: string;
};

export default function Jumbotron({
  children,
  background = "#fbf8ff",
  backgroundImage = `radial-gradient(circle at 18% 22%, rgba(168,85,247,.22), transparent 28%), radial-gradient(circle at 84% 72%, rgba(251,146,60,.2), transparent 30%)`,
}: JumbotronProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-9rem)] overflow-hidden px-6 py-20 dark:bg-[#171421]">
      <div
        aria-hidden="true"
        className="absolute inset-0 dark:hidden"
        style={{ background, backgroundImage }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(168,85,247,.25), transparent 30%), radial-gradient(circle at 84% 72%, rgba(251,146,60,.16), transparent 32%)",
        }}
      />
      <div className="relative z-10 m-auto flex max-w-4xl flex-col items-center gap-8 text-center before:absolute before:-top-16 before:-left-12 before:-z-10 before:size-28 before:rotate-12 before:rounded-4xl before:border-2 before:border-purple-300/50 after:absolute after:-right-12 after:-bottom-16 after:-z-10 after:size-24 after:rounded-full after:border-2 after:border-orange-300/60 sm:gap-10">
        {children}
      </div>
    </section>
  );
}
