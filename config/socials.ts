import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Devbyte E-learn",
    icon: Icons.gitHub,
    link: "https://github.com",
  },
  {
    name: "LinkedIn",
    username: "Devbyte E-learn",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com",
  },
  {
    name: "Twitter",
    username: "@Devbyte E-learn",
    icon: Icons.twitter,
    link: "https://twitter.com",
  },
  {
    name: "Gmail",
    username: "@Devbyte E-learn",
    icon: Icons.gmail,
    link: "mailto:akidev.98@gmail.com",
  },
];
