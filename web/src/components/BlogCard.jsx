import {
  Card,
  Text,
  Badge,
  Group,
  Box,
  BackgroundImage,
  Stack,
  Title,
  useMantineTheme,
  useComputedColorScheme,
} from "@mantine/core";

import { useColorScheme, useMediaQuery } from "@mantine/hooks";
import removeMarkdown from "markdown-to-text";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  function extractFirstLine(blog) {
    const start = blog.blog_markdown.indexOf("##");
    if (start === -1) return null;

    const end = blog.blog_markdown.indexOf("\n", start);
    if (end === -1) return null;

    const what = [blog.blog_markdown.slice(start + 2, end).trim()];
    return what;
  }

  const title = extractFirstLine(blog);
  const content = removeMarkdown(blog.blog_markdown);
  const smallSizeMath = useMediaQuery("(max-width:480px)");

  const allImage = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.webp",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.webp",
    "18.webp",
    "19.webp",
    "20.webp",
    "21.webp",
    "22.webp",
    "23.webp",
    "24.jpg",
  ];

  const randomImage = allImage[Math.floor(Math.random() * allImage.length)];

  const navigate = useNavigate();
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();
  return (
    <Card
      maw={600}
      style={{ cursor: "pointer" }}
      bg={colorScheme === "dark" ? "#0f1523" : theme.colors.gray[0]}
      padding="lg"
      radius="md"
      onClick={() => navigate(`/blog/${blog.$id}`)}
    >
      <Group style={{ flexWrap: "nowrap", alignItems: "flex-start" }}>
        <Stack gap={0}>
          <Group mb={"xs"} gap={"xs"} align="center">
            <Badge
              variant="light"
              color={colorScheme === "dark" ? "#f1beb5" : theme.colors.gray[6]}
              style={{ fontFamily: "Afacad Flux" }}
            >
              {blog?.books?.book_name}
            </Badge>
            <Text
              size="xs"
              fw={600}
              c={colorScheme === "dark" ? "#f1beb5" : theme.colors.gray[6]}
              style={{ fontFamily: "Cirular medium" }}
            >
              {blog.books?.author || "Unknown"}
            </Text>
          </Group>
          <Title
            lineClamp={smallSizeMath ? 3 : 1}
            fw={600}
            style={{
              fontFamily: "DM Sans, sans-serif",
              lineHeight: 1.1,
            }}
            mb={"xs"}
            c={colorScheme === "dark" ? "#f1beb5" : theme.colors.gray[9]}
            order={3}
          >
            {title}
          </Title>
          {smallSizeMath && (
            <Text
              lineClamp={2}
              c={colorScheme === "dark" ? "rgb(182, 141, 133)" : theme.colors.gray[5]}
              order={3}
              size="md"
              style={{ fontFamily: "Cirular medium" }}
            >
              {content}
            </Text>
          )}

          {!smallSizeMath && (
            <Text
              c={colorScheme === "dark" ? "rgb(182, 141, 133)" : theme.colors.gray[5]}
              lineClamp={4}
              style={{ fontFamily: "Cirular medium" }}
            >
              {content}
            </Text>
          )}
        </Stack>
        <Box maw={300}>
          <BackgroundImage
            p={40}
            src={`/images_4_blogs/${randomImage}`}
            radius="md"
          ></BackgroundImage>
        </Box>
      </Group>
    </Card>
  );
}
export default BlogCard;
