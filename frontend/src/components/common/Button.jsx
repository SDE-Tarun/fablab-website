const Button = ({
  children,
  onClick,
  type = "button",
  className = ""
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-6 py-3 rounded-lg font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;