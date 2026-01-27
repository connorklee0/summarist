import { RiFontSize } from "react-icons/ri";
import { useFontSize } from "@/app/context/FontSizeContext";

const FontChange = () => {
  const { fontSize, setFontSize } = useFontSize();

  const sizes = [
    { value: "text-sm", icon: "text-md" },
    { value: "text-base", icon: "text-xl" },
    { value: "text-lg", icon: "text-2xl" },
    { value: "text-xl", icon: "text-3xl" },
  ];
  return (
    <div className="flex sidebar--item__font-change gap-2">
      {sizes.map((size, index) => (
        <button
          key={index}
          onClick={() => setFontSize(size.value)}
          className={`${fontSize === size.value ? "font-change--active" : ""}`}
        >
          <RiFontSize className={size.icon} />
        </button>
      ))}
    </div>
  );
};

export default FontChange;
