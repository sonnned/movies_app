import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const navbarItems = [
  {
    id: 0,
    name: 'Home',
  },
  {
    id: 1,
    name: 'TV Shows',
  },
  {
    id: 2,
    name: 'Movies',
  },
  {
    id: 3,
    name: 'New & Popular',
  },
  {
    id: 4,
    name: 'My List',
  },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState<number>(0);
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);

  const handleIsActive = (id: number) => {
    setIsActive(id);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  const handleToogleMenu = () => {
    setToogleMenu(!toogleMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <nav
        className={`flex flex-row items-center justify-between px-4 md:px-16 py-6 transition duration-500 ${
          showBackground ? 'bg-black' : ''
        }`}
      >
        <ul className="list-none text-white hidden lg:flex flex-row gap-7">
          {navbarItems.map((item) => (
            <Link
              to="/"
              key={item.id + 1}
            >
              <li
                className={`${
                  isActive == item.id
                    ? 'text-white cursor-default'
                    : 'text-gray-200 cursor-pointer transition hover:text-gray-300'
                }`}
                onClick={() => handleIsActive(item.id)}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <ul className="list-none text-white flex lg:hidden flex-row gap-7">
          <ChevronDownIcon
            className={`w-6 h-6 text-white transition ${
              toogleMenu ? 'rotate-180' : 'rotate-0'
            }`}
            onClick={() => handleToogleMenu()}
          />
          <div
            className={`${
              toogleMenu
                ? 'absolute w-56 top-20 left-4 flex flex-col gap-4 border-2 border-gray-800 p-5 bg-gray-900 rounded-md transition'
                : 'hidden'
            }`}
          >
            {navbarItems.map((item) => (
              <Link
                to="/"
                key={item.id + 1}
              >
                <li
                  className={`${
                    isActive == item.id
                      ? 'text-white underline'
                      : 'text-gray-200 transition hover:underline'
                  }`}
                  onClick={() => handleIsActive(item.id)}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </div>
        </ul>
        <div className="w-8 lg:w-12 h-8 lg:h-12 rounded-md overflow-hidden">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt="Avatar logo"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
