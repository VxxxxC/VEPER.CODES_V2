import { Box, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MotionDiv from "@components/MotionDiv";
import posts from "./posts";
import "../blog.css";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <MotionDiv title="Not Found">
        <Box
          width="full"
          display="flex"
          flexDir="column"
          alignItems="center"
          gapY={4}
        >
          <Text textStyle="header">Post not found</Text>
          <Link to="/blog">Back to Blog</Link>
        </Box>
      </MotionDiv>
    );
  }

  return (
    <MotionDiv title={post.title}>
      <Box width="full" display="flex" flexDir="column" gapY={4}>
        <Box>
          <Text textStyle="header" fontSize="2xl">
            {post.title}
          </Text>
          <Text color="gray.500">{post.date}</Text>
        </Box>
        <Box height="2px" width="full" bgColor="cyan.500" />
        <Box className="markdown-body" textStyle="body">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </Box>
      </Box>
    </MotionDiv>
  );
}
