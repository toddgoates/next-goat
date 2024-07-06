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
          className={`px-3 py-2 text-lg font-semibold border-2 border-orange-500 rounded-lg ${
            outlined
              ? "text-orange-500 hover:text-orange-600 hover:border-orange-600"
              : "text-white bg-orange-500 hover:bg-orange-600"
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
          className={`px-3 py-2 text-lg font-semibold border-2 border-orange-500 rounded-lg ${
            outlined
              ? "text-orange-500 hover:text-orange-600 hover:border-orange-600"
              : "text-white bg-orange-500 hover:bg-orange-600"
          } ${buttonClass}`}
        >
          {children}
        </Link>
      )}
    </div>
  );
}
