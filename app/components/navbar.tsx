import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/public">Public</Link>
      <Link to="/private">Private</Link>
    </nav>
  );
};
