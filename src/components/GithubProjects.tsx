import { useState, useEffect } from "react";
import Group from "./Group";
import ProjectCard from "./ProjectCard";
import Card from "./Card";

export default function GithubProjects({ github }: { github: string }) {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${github}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      })
      .catch((_) => {
        setError(true);
      });
  }, [github]);

  return (
    <Group>
      {error && (
        <div className="m-8 text-red-500 text-center">
          <p>{error}</p>
          <p>Try again later...</p>
        </div>
      )}

      {list.length === 0 &&
        !error &&
        Array.from(Array(20).keys()).map((item) => (
          <Card className="animate-pulse" key={item}>
            <div className="h-4 bg-gray-200 dark:bg-black dark:bg-opacity-30 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-black dark:bg-opacity-30 rounded w-3/4 mb-2"></div>
          </Card>
        ))}

      {list.map((item: any) => (
        <ProjectCard
          key={item.id}
          icon={
            item.language &&
            `https://skillicons.dev/icons?i=${item.language.toLowerCase()}&theme=light`
          }
          href={item.html_url}
          title={item.name}
          description={item.description}
          oneLine={true}
        />
      ))}
    </Group>
  );
}
