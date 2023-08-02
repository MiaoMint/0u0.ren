import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "p-2 rounded-lg border border-transparent hover:bg-gray-100 hover:border hover:border-gray-200 mb-3 transition-all",
        "dark:hover:bg-black dark:hover:bg-opacity-20  dark:hover:border-gray-800 dark:hover:text-white",
      )}
    >
      {children}
    </div>
  );
}
