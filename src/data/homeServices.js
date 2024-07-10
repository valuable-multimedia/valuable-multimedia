import { FaFileCode } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { SiAdobeindesign } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";

const homeServices = [
  {
    name: "Instagram",
    name2: "ads",
    slug: "/services/instagram-ads",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    name2: "ads",
    slug: "/services/facebook-ads",
    icon: <FaMeta />,
  },
  {
    name: "PPC",
    name2: "(google ads)",
    slug: "/services/google-ads",
    icon: <SiGoogleads />,
  },
  {
    name: "social media",
    name2: "marketing",
    slug: "/services/social-media-marketing",
    icon: <GrAnnounce />,
  },
  {
    name: "seacrh engine",
    name2: "optimization (SEO)",
    slug: "/services/seo",
    icon: <TbSeo />,
  },

  {
    name: "UI UX",
    name2: "designing",
    slug: "/services/ui-ux-designing",
    icon: <SiAdobeindesign />,
  },
  {
    name: "website",
    name2: "development",
    slug: "/services/website-development",
    icon: <FaFileCode />,
  },
];

export default homeServices;
