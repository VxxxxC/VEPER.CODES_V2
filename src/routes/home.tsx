import Selector from "@components/TechIcons";
import MotionDiv from "@components/MotionDiv";
import {
  IoLogoGithub,
  IoHeartOutline,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./home.css";
import { Box, Button, Center, Flex, Table } from "@chakra-ui/react";
import { useColorMode } from "@chakra/components/ui/color-mode";

const Home = () => {
  const btn = (value: string) => {
    localStorage.setItem("page", value);
  };

  const { colorMode } = useColorMode();
  return (
    <>
      <MotionDiv title="Home">
        <Box
          id="bio"
          gapY={5}
          aria-label="bio"
          display="flex"
          flexDir="column"
          width="full"
        >
          <Box>
            <Flex
              direction={{ base: "column", lg: "row" }}
              justifyContent={{ base: "center", lg: "space-between" }}
              alignItems={{ base: "center" }}
              gapX={{ lg: 5 }}
              gapY={{ base: 5 }}
            >
              <div className="inline-flex flex-col items-center justify-center whitespace-nowrap">
                <div className="my-2 text-4xl font-bold">Veper Ho</div>
                <div className="my-2 text-sm">
                  Codes / Subcultures / Indie Music
                </div>
              </div>
              <img
                className="w-60 h-60 border border-opacity-10 border-white rounded-3xl object-cover"
                src="https://user-images.githubusercontent.com/80626616/210180624-83262f27-2550-4a30-92c8-7a9cddbb3359.jpg"
              />
            </Flex>
            <Center paddingY={2}>
              <a href="/project">
                <Button
                  size="xl"
                  variant="surface"
                  colorPalette="cyan"
                  rounded="sm"
                  onClick={() => btn("Project")}
                >
                  <div className="flex justify-center items-center gap-4">
                    <p>Portfolio</p>
                    <MdKeyboardArrowRight size={22} />
                  </div>
                </Button>
              </a>
            </Center>
          </Box>
          <Box>
            <Box paddingY={5} className="flex flex-col items-start">
              <h1 className="text-xl font-black mt-10">
                Bio
                <div className="mb-2 h-1 bg-gray-600"></div>
              </h1>
            </Box>
            <Box className="overflow-x-scroll">
              {/* FIXME NEED TO FIX FOR THE TABLE WIDTH  */}
              <Table.Root
                color={colorMode === "light" ? "pink.600" : "pink.300"}
                size="sm"
                variant="outline"
                showColumnBorder
              >
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>2021</Table.Cell>
                    <Table.Cell>
                      Say goodbye to my 12 years career in aviation engineering
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>2021 - 2022</Table.Cell>
                    <Table.Cell>Career Transition</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>2022</Table.Cell>
                    <Table.Cell>
                      Graduated AI & Programming Micro Master course at Tecky
                      Academy
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>FEB 2023 - OCT 2024</Table.Cell>
                    <Table.Cell>
                      <Flex>
                        <Center>
                          <a href="/works/#boxs">
                            <Button
                              size="xl"
                              variant="surface"
                              colorPalette="orange"
                              rounded="sm"
                              onClick={() => btn("Works")}
                            >
                              <div className="flex justify-center items-center gap-4">
                                <p>Frontend Developer at BOXS Limited</p>
                                <MdKeyboardArrowRight size={52} />
                              </div>
                            </Button>
                          </a>
                        </Center>
                      </Flex>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>
          </Box>

          <Box>
            <Box paddingY={5} className="flex flex-col items-start">
              <h1 className="text-xl font-black mt-10">
                Tech I Use
                <div className="mb-2 h-1 bg-gray-600"></div>
              </h1>
            </Box>
            <Box
              padding={5}
              bg={
                colorMode === "light"
                  ? "oklch(70.5% 0.015 286.067)"
                  : "oklch(27.4% 0.006 286.033)"
              }
              className="p-5 rounded-lg flex flex-col items-start"
            >
              <li>RESTful API</li>
              <li>AJAX</li>
              <li>Git</li>
              <li>AWS EC2/S3/Cloudfront</li>
              <li>Nginx</li>
              <li>Docker</li>
              <li>DevOps & CI/CD</li>
            </Box>
            <fieldset className="border border-zinc-500">
              <legend>Frontend</legend>
              <Flex
                padding={2}
                direction={{ base: "column" }}
                justifyContent={{ base: "start" }}
                alignItems={{ base: "center", lg: "start" }}
                gapY={5}
              >
                <p>Typescript</p>
                <p>React.js</p>
                <p>React-Native</p>
                <p>Redux</p>
                <p>Redux-Thunk</p>
                <p>Vue.js</p>
                <p>Tailwindcss</p>
              </Flex>
            </fieldset>
            <fieldset className="border border-zinc-500">
              <legend>Backend</legend>
              <Flex
                padding={2}
                direction={{ base: "column" }}
                justifyContent={{ base: "start" }}
                alignItems={{ base: "center", lg: "start" }}
                gapY={5}
              >
                <p>Node.js</p>
                <p>Express.js</p>
                <p>PostgreSQL</p>
                <p>MongoDB</p>
              </Flex>
            </fieldset>
            <fieldset className="font-black text-lg text-orange-500 border-4 border-teal-400 dark:border-cyan-500">
              <legend>Currently Learning</legend>
              <Flex
                padding={2}
                direction={{ base: "column", lg: "row" }}
                justifyContent={{ base: "start" }}
                alignItems={{ base: "center" }}
                gapY={5}
              >
                <Selector props="Blender" size={30} />
                <Selector props="Rust" size={30} />
                <Selector props="Solidity" size={30} />
              </Flex>
            </fieldset>
          </Box>

          <Box>
            <Box paddingY={5} className="flex flex-col items-start">
              <h1 className="text-xl font-black mt-10">
                <IoHeartOutline size={30} />
                <div className="mb-2 h-1 bg-gray-600"></div>
              </h1>
            </Box>
            <Box className="text-md font-bold my-2 flex flex-col items-start">
              <p>indie music</p>
              <p>psychology / philosophy</p>
              <p>climbing 🧗</p>
              <p>coffee ☕️</p>
            </Box>
          </Box>

          <Box>
            <Box paddingY={5} className="flex flex-col items-start">
              <h1 className="text-xl font-black mt-10">
                Connect
                <div className="h-1 bg-gray-600"></div>
              </h1>
            </Box>
            <Box className="flex flex-col items-start">
              <a
                className="py-2 px-8 flex justify-center items-center gap-4 rounded-xl font-vr font-bold text-cyan-900 hover:bg-teal-400 dark:text-teal-400 dark:hover:bg-cyan-900"
                href="https://github.com/vxxxxc"
                target="_blank"
              >
                <IoLogoGithub size={30} />
                GitHub
              </a>
              <a
                className="py-2 px-8 flex justify-center items-center gap-4 rounded-xl font-vr font-bold text-cyan-900 hover:bg-teal-400 dark:text-teal-400 dark:hover:bg-cyan-900"
                href="https://www.instagram.com/vepercodes/"
                target="_blank"
              >
                <IoLogoInstagram size={30} />
                Instagram
              </a>

              <a
                className="py-2 px-8 flex justify-center items-center gap-4 rounded-xl font-vr font-bold text-cyan-900 hover:bg-teal-400 dark:text-teal-400 dark:hover:bg-cyan-900"
                href="https://www.linkedin.com/in/veper-ho/"
                target="_blank"
              >
                <IoLogoLinkedin size={30} />
                LinkedIn
              </a>
            </Box>
          </Box>
        </Box>
      </MotionDiv>
    </>
  );
};

export default Home;
