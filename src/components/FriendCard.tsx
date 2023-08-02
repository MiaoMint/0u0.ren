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
  description: string;
}) {
  return (
    <a
      href={href}
      className="inline-block flex-shrink-0 mr-2"
      title={description}
      target="_blank"
    >
      <Card className="flex flex-col items-center">
        {icon && (
          <img src={icon} className="w-8 h-8 object-contain rounded-full " />
        )}
        <div>{title}</div>
      </Card>
    </a>
  );
}
