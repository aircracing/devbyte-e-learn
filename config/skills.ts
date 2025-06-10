import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;

  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React Native",

    icon: Icons.react,
  },
  {
    name: "Javascript",

    icon: Icons.javascript,
  },
  {
    name: "Typescript",

    icon: Icons.typescript,
  },

  {
    name: "Redux",

    icon: Icons.redux,
  },
  {
    name: "Socket.io",

    icon: Icons.socketio,
  },

  {
    name: "MySQL",

    icon: Icons.mysql,
  },
  {
    name: "GraphQL",

    icon: Icons.graphql,
  },

  {
    name: "HTML 5",

    icon: Icons.html5,
  },
  {
    name: "CSS 3",

    icon: Icons.css3,
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
