type TextareaProps = {
  name: string;
  textareaClass?: string;
  rows?: number;
  required?: boolean;
};

export default function Textarea({
  name,
  textareaClass = "",
  rows = 10,
  required = false,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      id={name}
      className={`w-full rounded-sm border border-gray-400 bg-gray-200 p-2 dark:border-gray-500 dark:bg-gray-800 ${textareaClass}`}
      rows={rows}
      required={required}
    ></textarea>
  );
}
