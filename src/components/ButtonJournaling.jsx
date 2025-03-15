import { Link } from "react-router-dom";

const ButtonJournaling = () => {
  return (
    <Link to="/journaling">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md absolute bottom-3 left-8/12 cursor-pointer ml-20">
        Go to Journaling
      </button>
    </Link>
  );
};

export default ButtonJournaling;
