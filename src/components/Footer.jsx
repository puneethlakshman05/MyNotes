import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-slate-200 mt-auto px-4 sm:px-6 py-3 sm:py-4 border-t flex flex-col sm:flex-row justify-between items-center text-sm sm:text-md md:text-lg lg:text-lg text-slate-700 w-screen max-w-[400px] sm:max-w-[880px] mx-auto sm:ml-12 md:ml-48 relative z-0 lg:w-[830px]">
      <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} NoteIt. All rights reserved.</p>
      <div className="flex gap-3 sm:gap-4">
        <a href="mailto:puneethlaksh05@gmail.com" className="hover:text-indigo-600 text-base sm:text-lg md:text-xl lg:text-2xl transition-transform hover:scale-105">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/puneethlakshmanveligonda/" target="_blank" rel="noreferrer" className="hover:text-indigo-600 text-base sm:text-lg md:text-xl lg:text-2xltransition-transform hover:scale-105">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/puneethlakshman05" target="_blank" rel="noreferrer" className="hover:text-indigo-600 text-base sm:text-lg md:text-xl lg:text-2xl transition-transform hover:scale-105">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-indigo-600 text-base sm:text-lg md:text-xl lg:text-2xl transition-transform hover:scale-105">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
};