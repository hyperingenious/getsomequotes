import { Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { Spectral } from "next/font/google";
import useTheme from "../config/useTheme";

const spectral = Spectral({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const TitleComponent = ({ children, order = 1, style = {} }) => {
  const [dark_theme] = useTheme();
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();
  const color = colorScheme !== "light" ? dark_theme.main_text_color : theme.colors.gray[9];
  return (
    <Title c={color} style={{ ...style }} className={spectral.className} fw={500} order={order}>
      {children}
    </Title>
  );
};

export default TitleComponent;
