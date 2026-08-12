type InputProps = {
  type?: "text" | "email" | "number" | "tel";
  name: string;
  inputClass?: string;
  required?: boolean;
  props?: any;
};

export default function Input({
  type = "text",
  name,
  inputClass = "",
  required = false,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`w-full rounded-2xl border border-purple-100 bg-white px-4 py-3.5 shadow-xs transition placeholder:text-slate-400 hover:border-purple-200 focus:border-purple-400 dark:border-white/10 dark:bg-white/5 ${inputClass}`}
      required={required}
      {...props}
    />
  );
}
