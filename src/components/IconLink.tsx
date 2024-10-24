type IconLinkProps = {
  as?: "a" | "button";
  children: React.ReactNode;
  [x: string]: any;
};

const VALID_TAGS = ["a", "button"];

export default function IconLink({
  as: Tag = "a",
  children,
  ...props
}: IconLinkProps) {
  if (!VALID_TAGS.includes(Tag)) {
    throw new Error(`Unrecognized tag: ${Tag}. Expected: ${VALID_TAGS}`);
  }

  return (
    <Tag
      className="ml-4 inline-flex items-center gap-1 align-bottom text-purple-500 transition-colors duration-300 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
      {...props}
    >
      {children}
    </Tag>
  );
}
