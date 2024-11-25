import { BackgroundImage, Badge, Card, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { Poppins } from "next/font/google";
import { cardShadows } from "@/app/utils/shadows";
import { useRouter } from "next/navigation";
import useTheme from "@/app/config/useTheme";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function BookCards({ $id, author, book_image, book_name, blogs, colorScheme, toggle }) {
  const [dark_theme] = useTheme();
  const router = useRouter();

  const blogIds = blogs.map((obj) => obj.$id).join("/");

  const url = `/specifics/${blogIds}`;
  const extracts = blogs.length;

  const theme = useMantineTheme();

  return (
    <Card
      onClick={() => {
        router.push(url);
        toggle();
      }}
      style={{ cursor: "pointer" }}
      key={$id}
      p="xs"
      shadow="sm"
      radius="30"
      bg={colorScheme !== "light" ? dark_theme.nav_link_dark_color : undefined}
    >
      <Group justify="flex-start" wrap="nowrap" gap="xs">
        <BackgroundImage
          style={{ boxShadow: cardShadows.xs }}
          src={book_image}
          radius="xl"
          h={36}
          w={36}
          fit="contain"
        />
        <Stack gap={0}>
          <Text
            w={200}
            truncate
            c={colorScheme !== "light" ? dark_theme.main_text_color : "dark"}
            className={poppins.className}
            fw={600}
            size="sm"
          >
            {book_name}
          </Text>
          <Group gap="xs" wrap="nowrap">
            <Text
              w={115}
              truncate
              c={colorScheme !== "light" ? dark_theme.secondary_text_color : theme.colors.gray[8]}
              className={poppins.className}
              size="xs"
            >
              By {author}
            </Text>
            <Badge
              color={colorScheme !== "light" ? dark_theme.main_text_color : theme.colors.gray[6]}
              variant="light"
              fw={500}
              size="xs"
              className={poppins.className}
              style={{ boxShadow: cardShadows.xs }}
            >
              {extracts} Extracts
            </Badge>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
}
export default BookCards;
