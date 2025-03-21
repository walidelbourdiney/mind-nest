import { Link } from "react-router-dom";

const ButtonJournaling = () => {
  return (
    <Link to="/journaling">
      <button className="bg-[var(--color-primary)] text-[var(--color-accent)] px-6 py-3 rounded-md  cursor-pointer  shadow-md hover:bg-[var(--color-secondary)] transition hover:text-black">
        Write Your Heart Out
      </button>
    </Link>
  );
};

export default ButtonJournaling;
