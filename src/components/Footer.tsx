import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-white/70 py-8 text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-[#211b31] dark:text-slate-300">
      <Container>
        <div className="text-center tracking-wide">
          &copy; 2012-{new Date().getFullYear()} | Todd Goates
        </div>
      </Container>
    </footer>
  );
}
