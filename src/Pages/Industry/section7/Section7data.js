import html from "../../../Components/Assets/svg/html.svg";
import css from "../../../Components/Assets/svg/css-3 logo.svg";
import javascript from "../../../Components/Assets/svg/javascript logo.svg";
import php from "../../../Components/Assets/svg/php2 logo.svg";
import python from "../../../Components/Assets/svg/python-4 logo.svg";
import adobe from "../../../Components/Assets/svg/adobe-xd logo.svg";
import figma from "../../../Components/Assets/svg/Figma logo.svg";
import ubuntu from "../../../Components/Assets/svg/Ubuntu logo.svg";
import bash from "../../../Components/Assets/svg/Bash logo.svg";
import aws from "../../../Components/Assets/svg/aws logo.svg";
import laravel from "../../../Components/Assets/svg/Laravel logo.svg";
import reactjs from "../../../Components/Assets/svg/React logo.svg";
import django from "../../../Components/Assets/svg/Django logo.svg";

const sectionData = [
  {
    id: 1,
    title: "Frontend Development",
    icons: [html, css, javascript],
    description:
      "This track deals with the aspect of your application that the users interact with. A front-end developer will be able to correctly interpret a given design to the user interface.",
  },

  {
    id: 2,
    title: "Backend Development",
    icons: [php, python, javascript],
    description:
      "This track deals with the aspect of the application the user does not directly interact with. It allows the frontend function either by running some back-end code or connecting to the database.",
  },

  {
    id: 3,
    title: "Product Design",
    icons: [adobe, figma],
    description:
      "This track deals with creating a graphic plan for an application. You will learn to convert project documentation into viewable and understandable graphic design for the developers to work with.",
  },

  {
    id: 4,
    title: "DevOps",
    icons: [ubuntu, bash, aws],
    description:
      "The DevOps track is an extension of the backend track. It involves tools that’ll allow the participant to deploy solutions for public use.",
  },

  {
    id: 5,
    title: "Fullstack Development",
    icons: [html,
    css,
    javascript,
    python],
    description:
      "A combination of frontend, backend, and DevOps. This track will only be available to participants who have the time to dedicate to the training.",
  },

  {
    id: 6,
    title: "Frameworks",
    icons: [laravel,
    reactjs,
    django],
    description:
      "During the program we will be exploring several useful frameworks to give you an edge in the industry and help you develop complex applications much faster.",
  },
];

export default sectionData;
