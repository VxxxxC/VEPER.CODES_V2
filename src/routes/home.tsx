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
import {
  Box,
  Button,
  Center,
  Flex,
  Table,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra/components/ui/color-mode";
import HomeWelcomeMsg from "@components/HomeWelcomeMsg";
import { Link } from "react-router";

const Home = () => {
  const btn = (value: string) => {
    localStorage.setItem("page", value);
  };

  const { colorMode } = useColorMode();
  return (
    <>
      <HomeWelcomeMsg />
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
                <Box className="my-2 text-sm">
                  Codes / Subcultures / Indie Music
                </Box>
              </div>
              <img
                className="w-60 h-60 border border-opacity-10 border-white rounded-3xl object-cover"
                src="https://user-images.githubusercontent.com/80626616/210180624-83262f27-2550-4a30-92c8-7a9cddbb3359.jpg"
              />
            </Flex>
            <Center paddingY={2}>
              <Link to="/projects">
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
              </Link>
            </Center>
          </Box>
          <Box>
            <Box paddingY={5} className="flex flex-col items-start">
              <Box textStyle="header" className="text-xl font-black mt-10">
                Bio
                <div className="mb-2 h-1 bg-gray-600"></div>
              </Box>
            </Box>
            <Box textStyle="body" className="overflow-x-auto">
              {/* FIXME NEED TO FIX FOR THE TABLE WIDTH  */}
              <Table.Root
                color={colorMode === "light" ? "pink.600" : "pink.300"}
                size="lg"
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
                          <Link to="/works">
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
                          </Link>
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
              <Box textStyle="header" className="text-xl font-black mt-10">
                Tech I Use
                <div className="mb-2 h-1 bg-gray-600"></div>
              </Box>
            </Box>
            <Box
              textStyle="body"
              padding={5}
              bg={colorMode === "light" ? "gray.300" : "gray.800"}
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
                textStyle="body"
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
                textStyle="body"
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
            <fieldset className="currentLearn font-black text-lg text-orange-500 border-4 border-teal-400 dark:border-cyan-500">
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
              <Box textStyle="header" className="text-xl font-black mt-10">
                <IoHeartOutline size={30} />
                <div className="mb-2 h-1 bg-gray-600"></div>
              </Box>
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
              <Box textStyle="header" className="text-xl font-black mt-10">
                Connect
                <div className="h-1 bg-gray-600"></div>
              </Box>
            </Box>
            <Box className="flex flex-col items-start">
              <ChakraLink
                href="https://github.com/vxxxxc"
                target="_blank"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                rounded="lg"
                p={2}
                _hover={{
                  bg: colorMode === "light" ? "teal.400" : "cyan.900",
                }}
                color={colorMode === "light" ? "cyan.900" : "teal.400"}
              >
                <IoLogoGithub size={30} />
                GitHub
              </ChakraLink>
              <ChakraLink
                href="https://www.instagram.com/vepercodes/"
                target="_blank"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                rounded="lg"
                p={2}
                _hover={{
                  bg: colorMode === "light" ? "teal.400" : "cyan.900",
                }}
                color={colorMode === "light" ? "cyan.900" : "teal.400"}
              >
                <IoLogoInstagram size={30} />
                Instagram
              </ChakraLink>

              <ChakraLink
                href="https://www.linkedin.com/in/veper-ho/"
                target="_blank"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                rounded="lg"
                p={2}
                _hover={{
                  bg: colorMode === "light" ? "teal.400" : "cyan.900",
                }}
                color={colorMode === "light" ? "cyan.900" : "teal.400"}
              >
                <IoLogoLinkedin size={30} />
                LinkedIn
              </ChakraLink>
            </Box>
          </Box>
        </Box>
      </MotionDiv>
    </>
  );
};

export default Home;
