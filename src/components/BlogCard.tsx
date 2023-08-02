import Card from "./Card";

export default function BlogCard({
  title,
  description,
  href,
  cover,
}: {
  title: string;
  description: string;
  href: string;
  cover?: string;
}) {
  return (
    <a href={href} title={title}>
      <Card>
        <div className="flex items-center">
          {cover && (
            <img
              src={cover}
              className="w-28 h-28 rounded-lg hidden md:block mr-3 object-cover"
              alt={title}
            />
          )}
          <div>
            <h4 className=" font-bold break-all">{title}</h4>
            <p className="text-gray-500 dark:text-gray-300">{description}</p>
          </div>
        </div>
      </Card>
    </a>
  );
}
