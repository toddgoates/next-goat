type AlertProps = {
  type: "success" | "info" | "warning" | "error";
  children: React.ReactNode;
};

export default function Alert({ type = "info", children }: AlertProps) {
  let theme = "";

  switch (type) {
    case "success":
      theme = "bg-purple-200 text-purple-800 border-purple-800";
      break;
    case "info":
      theme = "bg-indigo-200 text-indigo-800 border-indigo-800";
      break;
    case "warning":
      theme = "bg-orange-200 text-orange-800 border-orange-800";
      break;
    case "error":
      theme = "bg-red-200 text-red-800 border-red-800";
      break;
  }

  return (
    <div role="alert" className={`p-5 border-l-4 ${theme}`}>
      {children}
    </div>
  );
}
