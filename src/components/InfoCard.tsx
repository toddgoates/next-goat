import { AiOutlineLink as LinkIcon } from "react-icons/ai";

type InfoCardProps = {
  image: string;
  title: string;
  subtitle: string;
  dates: string;
  link: string;
};

export default function InfoCard({
  image,
  title,
  subtitle,
  dates,
  link,
}: InfoCardProps) {
  return (
    <li className="mb-4 grid grid-cols-4 items-center gap-2 bg-gray-50 p-5 shadow-lg dark:bg-slate-800 dark:text-gray-50">
      <div className="col-span-1">
        <img
          src={`images/${image}`}
          alt={`Logo for ${title}`}
          className="w-20"
        />
      </div>
      <div className="col-span-3">
        <h4 className="flex items-center gap-1 text-xl font-semibold">
          {title}
          <a href={link} target="_blank" rel="noreferrer">
            <LinkIcon />
          </a>
        </h4>
        <div className="flex items-center justify-between">
          <p>{subtitle}</p>
          <p className="text-gray-700 dark:text-gray-100">{dates}</p>
        </div>
      </div>
    </li>
  );
}
