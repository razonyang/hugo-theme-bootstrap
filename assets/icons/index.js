import { config, dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faAlipay,
  faArtstation,
  faBitbucket,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNd,
  faCreativeCommonsSa,
  faCreativeCommonsZero,
  faDiscord,
  faDiscourse,
  faDocker,
  faFacebookF,
  faFacebookSquare,
  faGithub,
  faGitlab,
  faInstagram,
  faItchIo,
  faKaggle,
  faLastfm,
  faLinkedinIn,
  faMastodon,
  faMediumM,
  faPatreon,
  faPaypal,
  faPinterest,
  faQq,
  faQuora,
  faReddit,
  faStackOverflow,
  faTelegramPlane,
  faTiktok,
  faTumblr,
  faTwitter,
  faWeibo,
  faWeixin,
  faXing,
  faYoutube,
  faZhihu,
} from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faAdjust,
  faArrowsAltV,
  faBars,
  faBuilding,
  faCheckCircle,
  faChevronCircleDown,
  faChevronDown,
  faCode,
  faCoffee,
  faCog,
  faColumns,
  faComments,
  faCopy,
  faCopyright,
  faEdit,
  faEllipsisH,
  faEnvelope,
  faExclamationCircle,
  faExclamationTriangle,
  faExpand,
  faExpandAlt,
  faExternalLinkSquareAlt,
  faEyeDropper,
  faFileAlt,
  faFileArchive,
  faFolder,
  faFont,
  faGlobe,
  faHistory,
  faHome,
  faInfoCircle,
  faLanguage,
  faLink,
  faList,
  faListAlt,
  faMapMarkerAlt,
  faMoon,
  faPalette,
  faPlayCircle,
  faQuestion,
  faQuestionCircle,
  faRedoAlt,
  faReply,
  faRocket,
  faRss,
  faSearch,
  faShareAlt,
  faSkullCrossbones,
  faSpinner,
  faSun,
  faTags,
  faThLarge,
  faThumbtack,
  faTimes,
  faTv,
  faUndo,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { default as customIcons } from "./custom";
import { faBilibili, faLiberapay, faOffline, faTipeee, faXTwitter } from "./icons";

let icons = [
  // Solid Icons
  faAdjust,
  faArrowsAltV,
  faBars,
  faBuilding,
  faCheckCircle,
  faChevronDown,
  faChevronCircleDown,
  faCode,
  faCoffee,
  faCog,
  faComments,
  faColumns,
  faCopy,
  faCopyright,
  faEdit,
  faEllipsisH,
  faEnvelope,
  faExclamationCircle,
  faExclamationTriangle,
  faExpand,
  faExpandAlt,
  faEyeDropper,
  faFont,
  faFileAlt,
  faFileArchive,
  faFolder,
  faHistory,
  faHome,
  faInfoCircle,
  faPlayCircle,
  faLanguage,
  faLink,
  faList,
  faListAlt,
  faMapMarkerAlt,
  faPalette,
  faQuestion,
  faQuestionCircle,
  faRedoAlt,
  faReply,
  faRocket,
  faRss,
  faSearch,
  faShareAlt,
  faSkullCrossbones,
  faGlobe,
  faSpinner,
  faTags,
  faThLarge,
  faThumbtack,
  faTimes,
  faTv,
  faUndo,
  faUser,
  faExternalLinkSquareAlt,
  faSun,
  faMoon,

  // Regular Icons
  faStar,

  // Brands
  faAlipay,
  faArtstation,
  faBitbucket,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNd,
  faCreativeCommonsSa,
  faCreativeCommonsZero,
  faDiscord,
  faDiscourse,
  faDocker,
  faFacebookF,
  faFacebookSquare,
  faGithub,
  faGitlab,
  faInstagram,
  faItchIo,
  faKaggle,
  faLastfm,
  faLinkedinIn,
  faMastodon,
  faMediumM,
  faPaypal,
  faPatreon,
  faPinterest,
  faQq,
  faQuora,
  faReddit,
  faStackOverflow,
  faTelegramPlane,
  faTiktok,
  faTumblr,
  faTwitter,
  faXing,
  faYoutube,
  faWeibo,
  faWeixin,
  faZhihu,

  // Custom Icons
  faBilibili,
  faLiberapay,
  faOffline,
  faTipeee,
  faXTwitter,
];

config.searchPseudoElements = false; // This option will become a performance killer, especially in search page, it tooks a long time to render.
library.add(...icons.concat(customIcons));
dom.watch();
