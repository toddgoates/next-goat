type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
  labelClass?: string;
};

export default function Label({
  children,
  htmlFor,
  labelClass = "",
}: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`mb-1 block text-lg ${labelClass}`}>
      {children}
    </label>
  );
}
