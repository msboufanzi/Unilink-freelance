import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    // {
    //   name: "Github",
    //   icon: <FiGithub />,
    //   link: "https://www.github.com/",
    // },
    // {
    //   name: "Youtube",
    //   icon: <FiYoutube />,
    //   link: "https://www.youtube.com/",
    // },
    // {
    //   name: "LinkedIn",
    //   icon: <FiLinkedin />,
    //   link: "https://www.linkedin.com/in/msboufanz/",
    // },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/unilink.uir?igsh=eHc0bWthbDBsNGdx",
    },
    // {
    //   name: "Twitter",
    //   icon: <FiTwitter />,
    //   link: "https://twitter.com/",
    // },
  ];
  return (
    <footer className="w-full md:px-20 py-6 md:py-8 h-max border-t border-gray-200 bg-gray-100">
      <div className="mt-2 flex flex-col-reverse gap-5 md:flex-row md:justify-between ">
        <div className="flex items-center justify-center gap-4">
          <span>
            {/* <i className="text-2xl md:text-3xl font-bold">Unlink</i>
            <b className="text-green-500 text-4xl">K</b> */}
              <img src="/lg.png" alt="Logo" className="w-25 h-14" />
          </span>
          <p className="text-gray-400"> &copy; Unilink Global Inc. 2025</p>
        </div>
        <ul className="flex gap-5  place-self-center">
          {socialLinks.map(({ icon, link, name }) => (
            <li
              key={name}
              className="text-xl text-[#404145] hover:text-[#baf452] transition-all"
            >
              <Link href={link}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center mt-4 font-medium">
        Made With Sleepless Nights! 🌙
      </p>
    </footer>
  );
};

export default Footer;
