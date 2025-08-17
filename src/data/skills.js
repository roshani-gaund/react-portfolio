import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb, SiTailwindcss, SiBootstrap } from "react-icons/si";


export const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNode className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> }
];
