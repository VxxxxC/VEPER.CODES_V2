import { Skeleton, Stack } from "@chakra-ui/react";
import { useColorMode } from "@chakra/components/ui/color-mode";

const SkeletonLoad = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack p={5} width="full">
      <Skeleton
        width="200px"
        height="200px"
        bg={colorMode === "light" ? "gray.300" : "gray.700"}
        variant="pulse"
      />
    </Stack>
  );
};

export default SkeletonLoad;
