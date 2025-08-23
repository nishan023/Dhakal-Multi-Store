import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaViber, FaComments } from 'react-icons/fa';

const FloatingSocialBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = e => {
      if (isOpen && !e.target.closest('.social-float')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="social-float fixed bottom-6 right-6 z-50">
      <button
        className={`main-button w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg transition-transform duration-300 ${
          isOpen ? 'transform rotate-180' : ''
        }`}
        onClick={e => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <FaComments className="w-6 h-6" />
      </button>

      <div
        className={`social-icons-menu flex flex-col gap-3 absolute bottom-full right-0 mb-4 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 pointer-events-none transform translate-y-4'
        }`}
      >
        <a
          href="https://www.facebook.com/bishnu.prasad.dhakal.2025"
          className="social-icon w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
        >
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/nissandhakal11"
          className="social-icon w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-md hover:bg-sky-600 transition-colors"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/nissan_dhakal/"
          className="social-icon w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-md hover:bg-pink-700 transition-colors"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/+9779840524753"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md hover:bg-green-600 transition-colors"
        >
            <FaWhatsapp className="w-5 h-5" />
        </a>
        <a
          href="viber://chat?number=+9779840524753"
          className="social-icon w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-md hover:bg-purple-700 transition-colors"
        >
          <FaViber className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default FloatingSocialBar;
