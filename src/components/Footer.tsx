import { Link } from 'react-router-dom';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className="h-20 w-full flex items-center justify-center sm:justify-start bg-zinc-800 px-4 sm:px-16 gap-5">
      <div className="flex items-center justify-center">
        <Link
          to="https://github.com/sonnned"
          target="_blank"
        >
          <img
            src={github}
            alt="github"
            className="w-12 h-12 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="https://www.linkedin.com/in/alejandro-garcia-fullstack/"
          target="_blank"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="w-12 h-12 cursor-pointer"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
