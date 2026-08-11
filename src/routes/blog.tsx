import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router";
import MotionDiv from "@components/MotionDiv";
import posts from "./blog/posts";

const getExcerpt = (markdown: string): string => {
  const firstParagraph = markdown
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block.length > 0 && !block.startsWith("#"));
  return firstParagraph ? firstParagraph.replace(/[*_`[\]#>]/g, "") : "";
};

export default function Blog() {
  return (
    <MotionDiv title="Blog" description="Blog posts by VEPER.CODES">
      <Text textStyle="header">Blog</Text>
      <Box height="2px" width="full" bgColor="cyan.500" marginBottom={6} />
      <Box width="full" display="flex" flexDir="column" gap={6}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            style={{ textDecoration: "none" }}
          >
            <Box
              as="article"
              width="full"
              padding={6}
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="flex-start"
              gapY={3}
              overflow="hidden"
              rounded="2xl"
              borderWidth="1px"
              boxShadow="lg"
              bg="rgba(1, 20, 35, 0.8)"
              borderColor="transparent"
              transition="border-color 0.3s ease-in-out"
              _hover={{
                borderColor: "rgba(238, 238, 225, 0.6)",
              }}
            >
              <Text
                textStyle="header"
                textAlign="left"
                lineClamp={2}
                color="#EEEEE1"
              >
                {post.title}
              </Text>
              <Text
                textStyle="body"
                textAlign="left"
                lineClamp={4}
                color="rgba(238, 238, 225, 0.8)"
              >
                {getExcerpt(post.content)}
              </Text>
            </Box>
          </Link>
        ))}
      </Box>
    </MotionDiv>
  );
}
