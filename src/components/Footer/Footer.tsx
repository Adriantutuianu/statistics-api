import "./footer.css";
import { Link } from "react-router-dom";

// Functional component for the footer
const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  // Render footer component
  return (
    <footer className="footer py-6 relative">
      <div className="container mx-auto text-center">
        <Link to="/" className=" hover:text-gray-500 hover:underline">
          &copy; {currentYear} Adrian Tut - World Statistics
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-500 opacity-75"></div>
    </footer>
  );
};

export default Footer;
