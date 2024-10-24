type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <p className="rounded-lg border border-purple-800 bg-white p-1 text-xs text-purple-800 dark:bg-purple-300 dark:text-purple-900">
      {children}
    </p>
  );
}
