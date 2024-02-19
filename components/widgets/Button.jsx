import { Link } from "react-router-dom";

const Button = ({ to, children, size = "md", variant = "full", className = "", ...rest }) => {
  const getSize = (size) => {
    switch (size) {
      case "xs":
        return "px-2 py-[14px]";
      case "sm":
        return "px-5 py-[8px]";
      case "md": 
        return "px-14 py-[14px]";
      case "lg":
        return "px-16 py-[14px]";
      case "fill":
        return "w-full h-full";
      default:
        return "px-14 py-[14px]";
      }
  };
  const Button = () => (
    <button
      className={`${getSize(size)} ${
        variant === "full"
          ? "bg-[#D6A217] text-white max-w-[800px]"
          : "bg-[#D6A217] text-white"
      } ${className} flex justify-around text-[12px] text-center items-center font-serif font-[600] cursor-pointer rounded-full
          transition-all duration-300 ease-in-out`}
      {...rest}
    >
      {children}
    </button>
  );

  if (to !== undefined)
    return (
      <Link to={to}>
        <Button />
      </Link>
    );

  return <Button />;
};

export default Button;
