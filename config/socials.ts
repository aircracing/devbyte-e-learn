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
    username: "@skillforge",
    icon: Icons.gitHub,
    link: "https://github.com",
  },
  {
    name: "LinkedIn",
    username: "SkillForge",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com",
  },
  {
    name: "Twitter",
    username: "@skillforge",
    icon: Icons.twitter,
    link: "https://twitter.com",
  },
  {
    name: "Gmail",
    username: "@skillforge",
    icon: Icons.gmail,
    link: "mailto:akidev.98@gmail.com",
  },
];
