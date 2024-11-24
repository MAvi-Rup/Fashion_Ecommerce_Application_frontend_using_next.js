"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Deals", href: "/deals" },
    { name: "What's New", href: "/whats-new" },
  ];

  return (
    <nav className="border-b border-gray-100 py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/images/menu.png"
              width={24}
              height={24}
              alt="Menu"
              className="h-6 w-6"
            />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              height={40}
              width={120}
              alt="We5ive Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-[200px] lg:w-[300px] focus:outline-none focus:border-purple-400"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Image
                    src="/images/search-01.png"
                    width={20}
                    height={20}
                    alt="Search"
                    className="h-5 w-5"
                  />
                </div>
              </div>
            </div>

            {/* Cart Icon */}
            <button className="relative">
              <Image
                src="/images/shopping.png"
                width={24}
                height={24}
                alt="Cart"
                className="h-6 w-6"
              />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* User Profile Icon */}
            <button>
              <Image
                src="/images/user.png"
                width={24}
                height={24}
                alt="Profile"
                className="h-6 w-6"
              />
            </button>

            {/* Mobile Search Icon */}
            <button className="md:hidden">
              <Image
                src="/images/search-01.png"
                width={24}
                height={24}
                alt="Search"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-100 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
