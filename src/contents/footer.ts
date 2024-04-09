import { IconType } from 'react-icons';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

type FooterLinks = {
  name: string;
  href: string;
}[];

export const footerLinks: FooterLinks = [
  {
    name: 'Shop',
    href: '/',
  },
  {
    name: 'Course',
    href: '/',
  },
];

type SocialMediaLinks = {
  name: string;
  href: string;
  icons: IconType;
}[];

export const socialMediaLinks: SocialMediaLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icons: FaInstagram,
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/',
    icons: FaYoutube,
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com/',
    icons: FaTwitter,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icons: FaFacebook,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icons: FaLinkedin,
  },
];
