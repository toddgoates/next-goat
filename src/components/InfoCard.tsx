import { FaExternalLinkAlt as LinkIcon } from "react-icons/fa";

type InfoCardProps = {
  image: string;
  imageInvertable?: boolean;
  title: string;
  subtitle: string;
  dates: string;
  link: string;
};

export default function InfoCard({
  image,
  imageInvertable = false,
  title,
  subtitle,
  dates,
  link,
}: InfoCardProps) {
  return (
    <li className="mb-4 grid grid-cols-4 items-start gap-4 rounded-2xl border border-purple-100 bg-white/80 p-5 shadow-xs transition duration-300 hover:-translate-y-0.5 hover:shadow-lg md:items-center dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
      <div className="col-span-1">
        <img
          src={`images/${image}`}
          alt={`Logo for ${title}`}
          className={`w-20 ${imageInvertable ? "dark:invert" : ""}`}
        />
      </div>
      <div className="col-span-3 space-y-4 md:space-y-2">
        <a href={link} target="_blank" rel="noreferrer">
          <h4 className="flex items-center gap-2 text-xl font-bold">
            {title}
            <LinkIcon className="size-3" />
          </h4>
        </a>
        <div className="flex items-center justify-between">
          <p>{subtitle}</p>
          <p className="text-gray-700 dark:text-gray-100">{dates}</p>
        </div>
      </div>
    </li>
  );
}
