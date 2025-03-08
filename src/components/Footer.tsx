
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Contractly. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-600 text-sm">
              Secured by blockchain technology
            </p>
            <div className="mx-2">•</div>
            <p className="text-gray-600 text-sm flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> by Contractly Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
