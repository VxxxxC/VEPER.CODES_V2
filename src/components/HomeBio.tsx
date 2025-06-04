import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Table,
  Timeline,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra/components/ui/color-mode";
import { CgArrowsExchange } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa6";
import {
  MdKeyboardArrowRight,
  MdOutlineWavingHand,
  MdWorkOutline,
} from "react-icons/md";
import { Link } from "react-router";

const HomeBio = () => {
  const btn = (value: string) => {
    localStorage.setItem("page", value);
  };

  const { colorMode } = useColorMode();
  return (
    <>
      <Box className="flex flex-col items-start">
        <Box textStyle="header" className="text-xl font-black mt-10">
          Bio
          <div className="mb-2 h-1 bg-gray-600"></div>
        </Box>
      </Box>
      {/* NOTE: NON-MOBILE VIEW */}
      <Box display={{ base: "none", lg: "block" }}>
        <Box textStyle="body" className="overflow-x-auto">
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

      {/* NOTE: MOBILE VIEW  */}
      <Box display={{ base: "block", lg: "none" }}>
        <Timeline.Root size="xl" colorPalette="pink">
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Icon size="md">
                  <MdOutlineWavingHand />
                </Icon>
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title textStyle="body">
                Say goodbye to my 12 years career in aviation engineering
              </Timeline.Title>
              <Timeline.Description>2021</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Icon size="md">
                  <CgArrowsExchange />
                </Icon>
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title textStyle="body">
                Career Transition
              </Timeline.Title>
              <Timeline.Description>2021 - 2022</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Icon size="md">
                  <FaUserGraduate />
                </Icon>
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title textStyle="body">
                Graduated AI & Programming Micro Master course at Tecky Academy
              </Timeline.Title>
              <Timeline.Description>2022</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Icon size="md">
                  <MdWorkOutline />
                </Icon>
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title textStyle="body">
                <Link to="/works">
                  <Button
                    size="sm"
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
              </Timeline.Title>
              <Timeline.Description>FEB 2023 - OCT 2024</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Box>
    </>
  );
};

export default HomeBio;
