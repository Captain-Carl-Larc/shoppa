function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded shadow p-4 transition-all duration-300 hover:scale-105 animate-fade-in ${className}`}
    >
      {children}
    </div>
  );
}
export default Card;
