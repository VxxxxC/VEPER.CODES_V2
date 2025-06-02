import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import SkeletonLoad from "@components/skeletonLoading";
import Selector, { type SelectorProps } from "@components/TechIcons";
import { Suspense } from "react";
import { SiAndroid, SiIos } from "react-icons/si";
import { lazy } from "react";
import MotionDiv from "@components/MotionDiv.tsx";

export type mobileType = "iOS" | "Android" | "Duo";

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
      link?: string;
    };

const LazyContentImage = lazy(() => import("./ProjectContentImage.tsx"));

const ProjectLayout = ({ props }: { props: projectPropsType }) => {
  return (
    <>
      <MotionDiv>
        <Container
          width="100%"
          base={{ display: "flex", flexDirection: "column" }}
          lg={{ display: "block", textAlign: "center" }}
        >
          {/* <Box
            marginY={2}
            id="title"
            textStyle="body"
            textAlign="left"
            textDecoration="underline"
            textUnderlineOffset="5px"
            textDecorationThickness="1px"
          >
            {props.title}
          </Box> */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            justifyContent="start"
            gapY={{ base: 5 }}
            gapX={{ lg: 5 }}
            id="imageContainer"
          >
            {props.img.map((item, index) => {
              return (
                <Suspense key={index} fallback={<SkeletonLoad />}>
                  <LazyContentImage image={item} />
                </Suspense>
              );
            })}
          </Flex>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            gapY={10}
            marginY={10}
          >
            <Box display="block" spaceY={2}>
              {props.platform && props.mobile ? (
                <>
                  <Box
                    width="max-content"
                    rounded="sm"
                    paddingX={2}
                    className="border border-amber-300 dark:border-amber-800 px-2 font-bold text-amber-300 bg-amber-700 dark:text-amber-700 dark:bg-amber-300"
                  >
                    Platform
                  </Box>

                  <Box width="max-content" display="flex">
                    {props.mobile === "iOS" ? (
                      <Icon
                        className="rounded-full bg-white text-black"
                        p={1}
                        size="2xl"
                        color="gray.800"
                      >
                        <SiIos />
                      </Icon>
                    ) : props.mobile === "Android" ? (
                      <Icon
                        className="rounded-full bg-white text-black"
                        p={1}
                        size="2xl"
                        color="gray.800"
                      >
                        <SiAndroid size={30} />
                      </Icon>
                    ) : (
                      <Box display="flex" direction="row" gapX={2}>
                        <Icon
                          className="rounded-full bg-white text-black"
                          p={1}
                          size="2xl"
                          color="gray.800"
                        >
                          <SiIos />
                        </Icon>
                        <Icon
                          className="rounded-full bg-white text-black"
                          p={1}
                          size="2xl"
                          color="gray.800"
                        >
                          <SiAndroid size={30} />
                        </Icon>
                      </Box>
                    )}
                  </Box>
                </>
              ) : null}
            </Box>
            <Box display="block" spaceY={2}>
              <Box
                width="max-content"
                paddingX={2}
                rounded="sm"
                className="border border-teal-400 px-1 text-teal-300 bg-teal-800 dark:text-teal-800 dark:bg-teal-300"
              >
                Desc
              </Box>
              <div id="desc" className="text-sm font-sans">
                {props.desc}
              </div>
            </Box>
            <Box width="full" className="flex my-4 gap-x-10 items-center">
              <fieldset className="h-full w-full overflow-auto scroll-smooth text-left p-5 rounded-lg">
                <legend className="px-2 text-base font-medium">Features</legend>
                <Box
                  textStyle="body"
                  paddingX={5}
                  display="flex"
                  flexDirection="column"
                  gapY={3}
                >
                  {props.feat.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </Box>
              </fieldset>
            </Box>
            <fieldset className="w-full flex flex-col items-center justify-center text-left p-5 rounded-lg">
              <legend className="px-2 text-base font-medium">
                Tech Stack and Framework
              </legend>
              <Box
                textStyle="body"
                padding={1}
                display="grid"
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  lg: "repeat(2,1fr)",
                }}
                gap={5}
              >
                {props.techIcons.map((item, index) => {
                  return <Selector key={index} props={item as SelectorProps} />;
                })}
              </Box>
            </fieldset>
          </Box>
        </Container>
      </MotionDiv>
    </>
  );
};

export default ProjectLayout;
