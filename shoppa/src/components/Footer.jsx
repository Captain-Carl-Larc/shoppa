function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center py-4 mt-auto">
      <span className="text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Shoppa Tasks. All rights reserved.
      </span>
    </footer>
  );
}
export default Footer;
