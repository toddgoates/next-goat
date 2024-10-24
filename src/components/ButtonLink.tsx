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
          className={`rounded-lg border-2 border-orange-500 px-3 py-2 text-lg font-semibold transition-colors duration-300 ${
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
          className={`rounded-lg border-2 border-orange-500 px-3 py-2 text-lg font-semibold transition-colors duration-300 ${
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
