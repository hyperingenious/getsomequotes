import Link from "next/link";
import { Avatar, Card, Group, Text, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { cardShadows } from "../utils/shadows";
import { Afacad_Flux, DM_Sans } from "next/font/google";
import useTheme from "../config/useTheme";
// } from "../config/useTheme";

const dm_sans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const afacad_flux = Afacad_Flux({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function SmallBlogCard({ blog, key, bookImage, author }) {
  const theme = useMantineTheme();
  const [dark_theme] = useTheme();
  const colorScheme = useComputedColorScheme();

  return (
    <Link key={key} href={`/blog/${blog.$id}`} style={{ textDecoration: "none" }}>
      <Card
        shadow={cardShadows.xs}
        bg={colorScheme !== "light" ? dark_theme.nav_link_dark_color : theme.colors.gray[2]}
        miw={300}
        mih={137}
        p="md"
        radius="lg"
      >
        <Title
          lineClamp={2}
          mih={43}
          fw={500}
          order={4}
          c={colorScheme !== "light" ? dark_theme.main_text_color : theme.colors.gray[9]}
          className={afacad_flux.className}
          style={{ lineHeight: 1.2 }}
        >
          {blog.blogTitle || "Surprise Blog It Has No Title"}
        </Title>
        <Text
          c={colorScheme !== "light" ? dark_theme.secondary_text_color : theme.colors.gray[6]}
          fw={500}
          mt={5}
          size="sm"
          lineClamp={2}
          className={dm_sans.className}
          style={{ lineHeight: 1.1 }}
        >
          {blog.blogContent}
        </Text>
        <Group gap={4} align="center" mt="xs">
          <Avatar size="xs" src={bookImage} alt="Author" />
          <Text c={colorScheme !== "light" ? dark_theme.secondary_text_color : theme.colors.gray[6]} size="sm">
            {author}
          </Text>
        </Group>
      </Card>
    </Link>
  );
}
export default SmallBlogCard;
