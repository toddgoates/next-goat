import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-gray-200 py-5 text-gray-700 dark:border-none dark:bg-slate-800 dark:text-gray-50">
      <Container>
        <div className="text-center">
          &copy; 2012-{new Date().getFullYear()} | Todd Goates
        </div>
      </Container>
    </footer>
  );
}
