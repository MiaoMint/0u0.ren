import Card from "./Card";

export default function FriendCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon?: string;
  title: string;
  description?: string;
}) {
  return (
    <a
      href={href}
      className="inline-block flex-shrink-0 mr-2"
      title={description}
      target="_blank"
    >
      <Card className="flex items-center">
        {icon && (
          <img
            src={icon}
            className="w-6 h-6 object-contain rounded-full mr-2"
            alt={title}
            referrerPolicy="no-referrer"
          />
        )}
        <div>{title}</div>
      </Card>
    </a>
  );
}
