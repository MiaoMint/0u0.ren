import { siteConfig } from "../config";
import FriendCard from "./FriendCard";

export default function Friends() {
  return (
    <div className="max-h-[200px] w-full overflow-auto flex flex-wrap flex-col">
      {siteConfig.friends
        .sort(() => 0.5 - Math.random())
        .map((friend) => (
          <FriendCard
            key={friend.link}
            title={friend.title}
            href={friend.link}
            icon={friend.icon}
            description={friend.description}
          />
        ))}
    </div>
  );
}
