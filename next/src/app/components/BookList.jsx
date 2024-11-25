import {
  Group,
  Text,
  Card,
  Stack,
  Menu,
  Loader,
  useMantineTheme,
  useComputedColorScheme,
  BackgroundImage,
} from "@mantine/core";
import { cardShadows } from "../utils/shadows";
import { DotsThreeVertical, Sparkle, Trash } from "@phosphor-icons/react";
import { useMediaQuery } from "@mantine/hooks";
import { Poppins } from "next/font/google";
import useTheme from "../config/useTheme";
// import { dark_theme } from "../config/useTheme";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function BookList({
  data,
  openGenerateBookModal,
  openDeleteBookModal,
  setGenerateBookId,
  setDeleteBookId,
  isGeneratingBook,
}) {
  const [dark_theme] = useTheme();
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();
  const smallSizeMath = useMediaQuery("(max-width:480px)");
  const rows = data.map((item) => (
    <Card
      shadow={cardShadows.md}
      key={item.$id}
      w={"100%"}
      bg={colorScheme !== "light" ? dark_theme.nav_link_dark_color : theme.colors.gray[2]}
      mx={"md"}
      padding="sm"
      maw={480}
      miw={300}
      radius="md"
    >
      <Group wrap="nowrap" align="flex-start" justify="space-between">
        <Group wrap="nowrap" align="flex-start">
          <BackgroundImage
            style={{
              boxShadow: cardShadows.xs,
            }}
            src={item.book_image}
            radius="md"
            h={38}
            w={38}
            fit="contain"
          />
          <Stack gap={0}>
            <Text
              c={colorScheme !== "light" ? dark_theme.main_text_color : theme.colors.dark[9]}
              w={smallSizeMath ? 200 : 300}
              fw={400}
              className={poppins.className}
              style={{ lineHeight: 1.1 }}
              truncate={"end"}
              size="md"
            >
              {item.book_name || "Untitled"}
            </Text>
            <Text
              className={poppins.className}
              fw={500}
              c={colorScheme !== "light" ? dark_theme.main_text_color : theme.colors.dark[9]}
              size="sm"
              truncate={"end"}
            >
              By: {item?.author || "unkown"}
            </Text>
            <Group gap={"xs"} align="center">
              <Text size="xs" c={colorScheme !== "light" ? dark_theme.main_text_color : theme.colors.dark[9]}>
                Oct 28, 2024, {isGeneratingBook.bookId !== item.$id && `${item.blogs.length} Extracts`}
              </Text>
              {isGeneratingBook.isGenerating && isGeneratingBook.bookId === item.$id && (
                <Loader
                  color={colorScheme !== "light" ? dark_theme.main_text_color : theme.colors.dark[9]}
                  type="dots"
                  size={"xs"}
                />
              )}
            </Group>
          </Stack>
        </Group>
        <Stack justify="space-between">
          <Menu
            styles={{
              dropdown: {
                background: `${colorScheme !== "light" ? dark_theme.app_bg_dark_color : undefined}`,
              },
            }}
            radius={"md"}
            width={150}
          >
            <Menu.Target>
              <DotsThreeVertical color={colorScheme !== "light" ? dark_theme.main_text_color : undefined} size={22} />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label c={colorScheme !== "light" ? dark_theme.main_text_color : undefined} size={22}>
                Book Options
              </Menu.Label>
              <Menu.Item
                onClick={() => {
                  setGenerateBookId(item.$id);
                  openGenerateBookModal();
                }}
                c={colorScheme !== "light" ? dark_theme.main_text_color : undefined}
                leftSection={
                  <Sparkle
                    color={colorScheme !== "light" ? dark_theme.main_text_color : undefined}
                    size={16}
                    weight="fill"
                  />
                }
              >
                Generate
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  setDeleteBookId(item.$id);
                  openDeleteBookModal();
                }}
                color="red"
                leftSection={<Trash size={16} />}
              >
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Stack>
      </Group>
    </Card>
  ));
  return <>{rows}</>;
}
// Older version

// <Table.Tr key={item.$id}>
//   <Table.Td>
//     <Group gap="sm">
//       <Text fz="sm" w={200} truncate={"end"} fw={500}>
//         {item?.book_name || "Untitled"}
//       </Text>
//     </Group>
//   </Table.Td>
//   <Table.Td>
//     <Badge
//       color={"blue"}
//       px={"0"}
//       py={"sm"}
//       styles={{
//         label: {
//           textTransform: "none",
//           display: "flex",
//           alignItems: "center",
//         },
//       }}
//       maw={100}
//       variant="light"
//     >
//       <CopyButton value={item.pdf_link} />
//       <Text fz="xs" truncate={"end"}>
//         {item.pdf_link}
//       </Text>
//     </Badge>
//   </Table.Td>
//   <Table.Td>
//     <Text fz="sm">{item.blogs.length}</Text>
//   </Table.Td>
//   <Table.Td>
//     <Group gap={"xs"} justify="flex-end">
//       <Button
//         loading={
//           isGeneratingBook.isGenerating &&
//           isGeneratingBook.bookId === item.$id
//         }
//         onClick={() => {
//           setGenerateBookId(item.$id);
//           openGenerateBookModal();
//         }}
//         variant="filled"
//         color="rgba(0, 0, 0, 1)"
//         size="xs"
//       >
//         Generate
//       </Button>
//       <Button
//         onClick={() => {
//           setDeleteBookId(item.$id);
//           openDeleteBookModal();
//         }}
//         variant="outline"
//         color="rgba(0, 0, 0, 1)"
//         size="xs"
//       >
//         Delete
//       </Button>
//     </Group>
//   </Table.Td>
// </Table.Tr>
