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
      type="submit"
      className={`px-3 py-2 text-lg font-semibold border-2 border-orange-500 rounded-lg text-white bg-orange-500 hover:bg-orange-600 dark:bg-orange-300 dark:text-gray-800 dark:border-orange-400 dark:hover:bg-orange-400 transition-colors duration-300 ${buttonClass}`}
      disabled={pending}
    >
      {pending ? submittingText : children}
    </button>
  );
}
