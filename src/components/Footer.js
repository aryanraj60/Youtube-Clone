import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-black rounded-lg shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a className="flex items-center mb-4 sm:mb-0">
          <img
            src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
            className="mr-3 h-8"
            alt="Youtube Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Tube
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a
              href="https://twitter.com/aryanraj_60"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aryanraj60"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aryan-rajput-3a0760204/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 ~ Aryan Raj . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
