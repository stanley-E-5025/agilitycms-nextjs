import React from "react";
import { FaTwitter, FaInstagram, FaSlack, FaYoutube } from "react-icons/fa";

/**
 * This footer is not part of the content in the CMS, feel free to remove this for production use.
 */

const SiteFooter = () => {
  // set up Agility CMS Socials
  const socials = [
    {
      title: "Twitter",
      url: "https://www.twitter.com/agilitycms",
      icon: (
        <FaTwitter className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/agilitycms",
      icon: (
        <FaInstagram className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "Slack",
      url: "https://join.slack.com/t/agilitycms-community/shared_invite/zt-99qlv1hw-tpPOJ99V21Y2omtA_uTcJw",
      icon: (
        <FaSlack className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/channel/UCzKjErx94RLTbJctcrIgsDQ",
      icon: (
        <FaYoutube className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
  ];

  return <footer className=" footer"></footer>;
};

export default SiteFooter;
