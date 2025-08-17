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
      className={`w-full rounded-sm border border-gray-400 bg-gray-200 p-2 dark:border-gray-500 dark:bg-gray-800 ${inputClass}`}
      required={required}
      {...props}
    />
  );
}
