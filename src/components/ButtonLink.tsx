import Link from "next/link";

type ButtonLinkProps = {
  containerClass?: string;
  href: string;
  prefetch?: boolean;
  children: React.ReactNode;
  buttonClass?: string;
  external?: boolean;
  outlined?: boolean;
};

export default function ButtonLink({
  containerClass = "",
  href,
  prefetch = false,
  buttonClass = "",
  external = false,
  outlined = false,
  children,
}: ButtonLinkProps) {
  return (
    <div className={containerClass}>
      {external ? (
        <a
          href={href}
          className={`inline-flex rounded-full border-2 border-orange-500 px-6 py-3 text-base font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
            outlined
              ? "text-orange-500 hover:border-orange-600 hover:text-orange-600 dark:border-orange-400 dark:bg-transparent dark:text-orange-400 dark:hover:border-orange-300 dark:hover:text-orange-300"
              : "bg-orange-500 text-white hover:bg-orange-600 dark:border-orange-400 dark:bg-orange-300 dark:text-gray-800 dark:hover:bg-orange-400"
          } ${buttonClass}`}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link
          href={href}
          prefetch={prefetch}
          className={`inline-flex rounded-full border-2 border-orange-500 px-6 py-3 text-base font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
            outlined
              ? "text-orange-500 hover:border-orange-600 hover:text-orange-600 dark:border-orange-400 dark:bg-transparent dark:text-orange-400 dark:hover:border-orange-300 dark:hover:text-orange-300"
              : "bg-orange-500 text-white hover:bg-orange-600 dark:border-orange-400 dark:bg-orange-300 dark:text-gray-800 dark:hover:bg-orange-400"
          } ${buttonClass}`}
        >
          {children}
        </Link>
      )}
    </div>
  );
}
