export default function BackButton() {
  const back = () => {
    if (window.history.length > 2) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <span
      onClick={back}
      className="mr-3 flex items-center text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="lucide lucide-arrow-left"
        viewBox="0 0 24 24"
      >
        <path d="M12 19l-7-7 7-7M19 12H5"></path>
      </svg>
    </span>
  );
}
