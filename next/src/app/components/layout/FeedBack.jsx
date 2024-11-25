// import useTheme, { dark_theme } from "@/app/config/useTheme";
import useTheme from "@/app/config/useTheme";
import { ActionIcon, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { QuestionMark } from "@phosphor-icons/react";

function FeedBack() {
  const [dark_theme] = useTheme();
  const colorScheme = useComputedColorScheme();
  const theme = useMantineTheme();
  return (
    <ActionIcon
      variant="outline"
      color={colorScheme !== "light" ? dark_theme.main_text_color : "dark"}
      size={"lg"}
      radius="xl"
      aria-label="Settings"
    >
      <QuestionMark
        size={16}
        weight="bold"
        color={colorScheme !== "light" ? dark_theme.main_text_color : theme.colors.dark[8]}
      />
    </ActionIcon>
  );
}

export default FeedBack;
