import {
  SiHtml5,
  SiCsswizardry,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiPython,
  SiTensorflow,
  SiNativescript,
  SiDart,
  SiFlutter,
  SiSolidity,
  SiBlender,
  SiNuxtdotjs,
  SiVuedotjs,
  SiRust,
  SiAmazonwebservices,
  SiAmazonroute53,
  SiAmazonec2,
  SiAmazons3,
  SiNeovim,
} from "react-icons/si";
import { GiFeather } from "react-icons/gi";

export type SelectorProps =
  | "HTML"
  | "CSS"
  | "Javascript"
  | "Nodejs"
  | "Typescript"
  | "Express"
  | "MongoDB"
  | "PostgreSQL"
  | "React"
  | "React Native"
  | "Redux"
  | "Tailwindcss"
  | "Python"
  | "Tensorflow"
  | "AWS"
  | "EC2"
  | "S3"
  | "Route53"
  | "Feathers.js"
  | "Rust"
  | "NativeScript"
  | "Dart"
  | "Flutter"
  | "Solidity"
  | "Blender"
  | "Nuxt"
  | "Vue"
  | "Neovim";

const selector = ({
  props,
  size = 18,
  showName = true,
  bgTransparent = false,
}: {
  props: SelectorProps;
  size?: number;
  showName?: boolean;
  bgTransparent?: boolean;
}) => {
  const name = props;
  const icon = (name: string) => {
    switch (name) {
      case "HTML":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-red-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-red-400">
              <SiHtml5 size={size} color="red-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "CSS":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-sky-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-sky-400">
              <SiCsswizardry size={size} color="sky-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Javascript":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-yellow-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-yellow-400">
              <SiJavascript size={size} color="yellow-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Nodejs":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-green-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-green-400">
              <SiNodedotjs size={size} color="green-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Typescript":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-sky-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-sky-400">
              <SiTypescript size={size} color="sky-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Express":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-black"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-white">
              <SiExpress size={size} color="white" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "MongoDB":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-emerald-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-emerald-400">
              <SiMongodb size={size} color="emerald-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "PostgreSQL":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-blue-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-blue-400">
              <SiPostgresql size={size} color="blue-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "React":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-cyan-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 ">
              <SiReact size={size} color="cyan-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "React Native":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-cyan-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 ">
              <SiReact size={size} color="cyan-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Redux":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-violet-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-violet-400">
              <SiRedux size={size} color="violet-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Tailwindcss":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-cyan-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 ">
              <SiTailwindcss size={size} color="cyan-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Python":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-blue-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-blue-400">
              <SiPython size={size} color="blue-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Tensorflow":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-orange-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-orange-400">
              <SiTensorflow size={size} color="orange-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "AWS":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-orange-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-orange-400">
              <SiAmazonwebservices size={size} color="orange-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "EC2":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-orange-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-orange-400">
              <SiAmazonec2 size={size} color="orange-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "S3":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-orange-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-orange-400">
              <SiAmazons3 size={size} color="orange-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Route53":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-orange-900"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-orange-400">
              <SiAmazonroute53 size={size} color="orange-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Feathers.js":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-stone-200"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-orange-400">
              <GiFeather size={size} color="orange-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Rust":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-transparent"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-orange-400">
              <SiRust size={size} color="orange-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "NativeScript":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-stone-200"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-sky-400">
              <SiNativescript size={size} color="sky-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Dart":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-transparent"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-sky-600">
              <SiDart size={size} color="sky-700" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Flutter":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-transparent"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-sky-600">
              <SiFlutter size={size} color="sky-700" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Solidity":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-transparent"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-gray-500">
              <SiSolidity size={size} color="gray-700" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Blender":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-transparent"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-orange-400">
              <SiBlender size={size} color="orange-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Nuxt":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl bg-stone-200"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-emerald-400">
              <SiNuxtdotjs size={size} color="emerald-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Vue":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-emerald-400">
              <SiVuedotjs size={size} color="emerald-400" />
              {showName ? name : null}
            </div>
          </div>
        );
      case "Neovim":
        return (
          <div className={bgTransparent ? "" : "rounded-3xl"}>
            <div className="w-[140px] font-sans m-2 py-1 gap-2 flex justify-center items-center text-emerald-400">
              <SiNeovim size={size} color="emerald-400" />
              {showName ? name : null}
            </div>
          </div>
        );
    }
  };

  return <>{icon(name)}</>;
};

export default selector;
