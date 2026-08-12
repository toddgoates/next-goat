import { useFormStatus } from "react-dom";

type ButtonProps = {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  buttonClass?: string;
  submittingText?: string | null;
};

export default function Button({
  children,
  type,
  buttonClass = "",
  submittingText = null,
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      className={`rounded-full border-2 border-orange-500 bg-orange-500 px-6 py-3 text-base font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg disabled:opacity-60 dark:border-orange-400 dark:bg-orange-300 dark:text-gray-900 dark:hover:bg-orange-400 ${buttonClass}`}
      disabled={pending}
    >
      {pending ? submittingText : children}
    </button>
  );
}
