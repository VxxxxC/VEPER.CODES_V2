import { useState } from "react";
import { Text, Accordion, Box, Center, Icon, Image } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { useColorMode } from "@chakra/components/ui/color-mode";

export type DemoImgContent = {
  name: string;
  img: string;
};

export type DemoDropdownType =
  | {
      title: string;
      content: DemoImgContent[];
      isVideo?: false;
    }
  | {
      title: string;
      content: string[];
      isVideo: true;
    };

const DemoDropdownSelector = ({ props }: { props: DemoDropdownType[] }) => {
  const { colorMode } = useColorMode();
  const [dropdown, setDropdown] = useState<string[]>([props[0].title]);

  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Accordion.Root
        width="full"
        value={dropdown}
        onValueChange={(e) => setDropdown(e.value)}
        collapsible
        lazyMount
      >
        {props.map((item, index) => (
          <Accordion.Item key={index} value={item.title}>
            <Accordion.ItemTrigger>
              <Box
                paddingX={5}
                paddingY={1}
                display="flex"
                width="full"
                height="full"
                justifyContent="space-between"
                cursor="pointer"
                _hover={{
                  bg: colorMode === "light" ? "gray.300" : "gray.800",
                  rounded: "lg",
                  border: "deeppink",
                }}
              >
                <Text>{item.title}</Text>
                <Box>
                  <Icon size="sm">
                    <FaAngleDown />
                  </Icon>
                </Box>
              </Box>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <Center>
                  {item.isVideo ? (
                    item.content.map((vid) => {
                      return (
                        <video controls>
                          <source src={vid as string} type="video/mp4" />
                        </video>
                      );
                    })
                  ) : (
                    <Box display="flex" flexDir="column" height="full" gapY={5}>
                      {item.content.map(
                        (
                          {
                            name,
                            img,
                          }: {
                            name: DemoImgContent["name"];
                            img: DemoImgContent["img"];
                          },
                          index,
                        ) => (
                          <Box
                            onClick={() => openNewWindow(img)}
                            key={index}
                            rounded="lg"
                            _hover={{ scale: 1.02 }}
                            transition="all 0.3s ease-in-out"
                            touchAction="auto"
                            m={2}
                            p={2}
                          >
                            <Text px={2} textStyle="sm" color="pink.solid">
                              {name}
                            </Text>

                            <Image rounded="md" fit="contain" src={img} />
                          </Box>
                        ),
                      )}
                    </Box>
                  )}
                </Center>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
};
export default DemoDropdownSelector;
