import { ImSpinner2 } from "react-icons/im";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen m-auto">
      <ImSpinner2 className="w-16 h-16 animate-spin" />
    </div>
  );
}
