import { clsx } from "clsx";
import Card from "./Card";

export default function ({
  icon,
  href,
  title,
  description,
  oneLine,
}: {
  icon?: string;
  href: string;
  title: string;
  description: string;
  oneLine?: boolean;
}) {
  return (
    <a href={href} title={`View ${title}`} target="_blank">
      <Card>
        <div>
          <h4 className="font-bold flex items-center">
            {icon && (
              <img src={icon} className="w-4 h-4 inline mr-2 object-contain rounded" />
            )}
            {title}
          </h4>
          <p
            className={clsx("text-gray-500 dark:text-gray-300 text-sm", {
              "line-clamp-1": oneLine,
            })}
          >
            {description}
          </p>
        </div>
      </Card>
    </a>
  );
}
