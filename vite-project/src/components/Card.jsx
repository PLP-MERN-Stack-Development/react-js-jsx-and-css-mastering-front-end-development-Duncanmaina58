function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-4">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}

export default Card;
// 