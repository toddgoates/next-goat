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
      className={`px-3 py-2 text-lg font-semibold border-2 border-orange-500 rounded-lg text-white bg-orange-500 hover:bg-orange-600 ${buttonClass}`}
      disabled={pending}
    >
      {pending ? submittingText : children}
    </button>
  );
}
