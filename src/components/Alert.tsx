import {
  AiOutlineCheck as SuccessIcon,
  AiFillInfoCircle as InfoIcon,
  AiOutlineWarning as WarningIcon,
  AiFillCloseCircle as ErrorIcon,
} from "react-icons/ai";

type AlertProps = {
  type: "success" | "info" | "warning" | "error";
  noIcon?: boolean;
  children: React.ReactNode;
};

export default function Alert({
  type = "info",
  noIcon = false,
  children,
}: AlertProps) {
  let theme = "";
  let icon = null;

  switch (type) {
    case "success":
      theme = "bg-purple-200 text-purple-800 border-purple-800";
      icon = <SuccessIcon className="size-6" />;
      break;
    case "info":
      theme = "bg-indigo-200 text-indigo-800 border-indigo-800";
      icon = <InfoIcon className="size-6" />;
      break;
    case "warning":
      theme = "bg-orange-200 text-orange-800 border-orange-800";
      icon = <WarningIcon className="size-6" />;
      break;
    case "error":
      theme = "bg-red-200 text-red-800 border-red-800";
      icon = <ErrorIcon className="size-6" />;
      break;
  }

  return (
    <div
      role="alert"
      className={`flex items-center gap-2 border-l-4 p-5 ${theme}`}
    >
      {!noIcon && icon}
      {children}
    </div>
  );
}
