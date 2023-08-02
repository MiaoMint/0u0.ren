import clsx from "clsx";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "px-3 py-1 bg-gray-100 rounded-lg w-fit mb-5 text-gray-400  hover:text-black active:scale-95 transition-all",
        "dark:bg-black dark:bg-opacity-10 dark:text-gray-200 hover:dark:text-white",
      )}
    >
      {children}
    </div>
  );
}
