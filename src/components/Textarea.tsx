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
      className={`w-full rounded-2xl border border-purple-100 bg-white px-4 py-3.5 shadow-sm transition placeholder:text-slate-400 hover:border-purple-200 focus:border-purple-400 dark:border-white/10 dark:bg-white/5 ${textareaClass}`}
      rows={rows}
      required={required}
    ></textarea>
  );
}
