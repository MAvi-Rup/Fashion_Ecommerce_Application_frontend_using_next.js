import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1D1D1D] w-full mt-8 overflow-hidden">
      {/* Main Footer */}
      <footer className="container mx-auto py-10 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Left Section: Logo */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center">
              <Image
                src="/images/logo22.png"
                alt="We5ive Logo"
                width={250}
                height={50}
              />
            </div>
          </div>

          {/* Right Section: Newsletter */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-white text-lg font-semibold">
              Sign Up For Our Newsletter!
            </h3>
            <p className="text-white text-sm max-w-lg">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white text-[#1D1D1D] px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#7E53D4] text-white px-6 py-2 rounded-r-md hover:bg-[#5a31b1]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="flex flex-col flex-wrap md:flex-row justify-between mt-10  border-gray-700 pt-8">
          {/* Contact Us */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0 flex flex-col items-start">
            <h4 className="text-white text-base font-semibold">Contact Us</h4>
            <p className="text-white text-sm mt-1">support@we5ive.com</p>
          </div>

          {/* About Us */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0 flex flex-col items-start">
            <h4 className="text-white text-base font-semibold">About Us</h4>
            <p className="text-white text-sm mt-1">Contact Us</p>
          </div>

          {/* Privacy Policy */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0 flex flex-col items-start">
            <h4 className="text-white text-base font-semibold">
              Privacy Policy
            </h4>
            <p className="text-white text-sm mt-1">Terms & Condition</p>
          </div>

          {/* Social Links */}
          <div className="w-1/2 md:w-auto flex flex-col items-start">
            <h4 className="text-white text-base font-semibold">Social Links</h4>
            <div className="flex space-x-4 mt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#7E53D4] text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#7E53D4] text-lg"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#7E53D4] text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#7E53D4] text-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#7E53D4] py-4">
        <div className="container mx-auto text-center text-white text-sm">
          © 2024 | We5ive
        </div>
      </div>
    </div>
  );
};

export default Footer;
