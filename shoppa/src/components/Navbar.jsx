import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-4 py-2 flex justify-between">
      <div className="font-bold text-lg">Shoppa Tasks</div>
      <div className="space-x-4 flex items-center">
        <a href="/" className="text-blue-600 hover:underline">
          Home
        </a>
        <a href="/tasks" className="text-blue-600 hover:underline">
          Tasks
        </a>
        <a href="/explore" className="text-blue-600 hover:underline">
          Explore
        </a>
        <button
          onClick={toggleTheme}
          className="ml-4 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
