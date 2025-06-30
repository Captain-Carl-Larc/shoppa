function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-4 py-2 flex justify-between">
      <div className="font-bold text-lg">Shoppa Tasks</div>
      <div className="space-x-4">
        <a href="/" className="text-blue-600 hover:underline">
          Home
        </a>
        <a href="/tasks" className="text-blue-600 hover:underline">
          Tasks
        </a>
        <a href="/explore" className="text-blue-600 hover:underline">
          Explore
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
