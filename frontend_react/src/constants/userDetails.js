import {
  BsTwitter,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import myProfile from "../assets/myProfile.png";
import myLogo from "../assets/myLogo.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import netCore from "../assets/netCore.png";

export const socialMediaAccounts = [
  { icon: <BsWhatsapp />, link: "https://wa.me/00967773225233" },
  { icon: <BsTwitter />, link: "Twitter" },
  { icon: <BsInstagram />, link: "Instagram" },
  { icon: <BsTwitterX />, link: "TwitterX" },
  { icon: <BsFacebook />, link: "FacebookF" },
  { icon: <BsYoutube />, link: "Youtube" },
];
export const socialMediaShares = [
  { icon: <BsWhatsapp />, url: "https://wa.me/00967773225233" },

  { icon: <BsTwitter />, url: "Twitter" },

  { icon: <BsInstagram />, url: "Instagram" },
];
export const pageHeader = {
  title: "Abdul Qader",
  favIcon: myProfile,
  keywords: [],
  description: "",
};
export const copyrights = ["@2024 Qadoor", "All rights reserved"];
export const generalDetails = {
  profile: myProfile,
  logo: myLogo,
  name: "AbdulQader",
  tags: ["Web Developer", "Freelancer"],
};
export const contacts = {
  email: "abdul2001sh@gmail.com",
  mobile: "+967 773225233",
  whatsapp: "00967773225233",
};
export const mainSkillsCircles = [redux, react, netCore];
const userDetails = {
  socialMediaAccounts,
  generalDetails,
  mainSkillsCircles,
  contacts,
  pageHeader,
  copyrights,
  socialMediaShares,
};
export default userDetails;
