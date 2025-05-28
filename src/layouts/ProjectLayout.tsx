import Selector from "@components/TechIcons";
import { SiAndroid, SiIos } from "react-icons/si";

export type mobileType = "iOS" | "Android";

export type projectPropsType =
  | {
      title: string;
      img: string[];
      desc: string;
      feat: string[];
      techIcons: string[];
      platform?: false;
    }
  | {
      title: string;
      img: string[];
      desc: string;
      feat: string[];
      techIcons: string[];
      platform: true;
      mobile: mobileType;
    };

const ProjectLayout = ({ props }: { props: projectPropsType }) => {
  return (
    <>
      <main className="w-[450px] mobile:w-[100%] mobile:flex mobile:flex-col">
        <div
          id="imageContainer"
          className="mobile:flex-col mobile:items-center flex justify-center"
        >
          {props.img.map((item) => {
            return (
              <img
                id="image"
                className="my-4 rounded-lg hover:object-scale-down object-contain h-[720px] w-[400px]"
                src={item}
              />
            );
          })}
        </div>
        <div id="title" className="my-4 text-2xl">
          {props.title}
        </div>

        <div className="flex flex-col items-start">
          {props.platform && props.mobile ? (
            <div className="flex items-center">
              <div className="border border-amber-300 dark:border-amber-800 px-2 font-bold text-amber-300 bg-amber-700 dark:text-amber-700 dark:bg-amber-300">
                Platform
              </div>
              <a
                className="mx-2 p-2 rounded-full bg-white text-black hover:bg-black hover:text-white duration-700"
                href="https://apps.apple.com/app/id1659625087"
                target="_blank"
              >
                {props.mobile === "iOS" ? (
                  <SiIos size={30} />
                ) : (
                  <SiAndroid size={30} />
                )}
              </a>
            </div>
          ) : null}{" "}
          <div className="flex my-4 gap-2 justify-evenly items-center">
            <div className="border border-teal-400 px-1 text-teal-300 bg-teal-800 dark:text-teal-800 dark:bg-teal-300">
              Desc
            </div>
            <div id="desc" className="text-sm font-sans">
              {props.desc}
            </div>
          </div>
          <div className="flex my-4 gap-2 justify-evenly items-center">
            <div className="border border-sky-400 px-1 text-cyan-300 bg-sky-800 dark:text-cyan-800 dark:bg-sky-300">
              Feat
            </div>
            <div
              id="features"
              className="p-4 flex flex-wrap gap-4 text-sm font-sans"
            >
              {props.feat.map((item) => {
                return <li>{item}</li>;
              })}
            </div>
          </div>
        </div>

        <div id="stack" className="flex flex-wrap justify-around py-8 text-sm">
          {props.techIcons.map((item) => {
            return <Selector props={item} />;
          })}
        </div>
      </main>
    </>
  );
};

export default ProjectLayout;
