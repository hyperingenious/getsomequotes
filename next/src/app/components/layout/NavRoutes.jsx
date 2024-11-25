import { House, UploadSimple } from "@phosphor-icons/react";
import { Group, Stack, Text } from "@mantine/core";
import { cardShadows } from "@/app/utils/shadows";
import useTheme from "@/app/config/useTheme";
// import { dark_theme } from "@/app/config/useTheme";

const NavRoutes = ({ router, toggle, pathname, colorScheme }) => {
  const [dark_theme] = useTheme();
  const routes = [
    { path: "/home", label: "Home", Icon: House },
    { path: "/uploaded", label: "Uploaded", Icon: UploadSimple },
  ];

  return (
    <Stack gap={0}>
      {routes.map((route) => (
        <Group
          key={route.path}
          gap="xs"
          align="center"
          p="sm"
          onClick={() => {
            router.push(route.path);
            toggle();
          }}
          style={{
            cursor: "pointer",
            boxShadow: pathname === route.path ? cardShadows.md : "none",
            borderRadius: "8px",
            background: pathname === route.path && colorScheme !== "light" ? dark_theme.nav_link_dark_color : "none",
          }}
        >
          <route.Icon color={colorScheme !== "light" ? dark_theme.main_text_color : "black"} size={16} />
          <Text size="xs" c={colorScheme !== "light" ? dark_theme.main_text_color : "black"}>
            {route.label}
          </Text>
        </Group>
      ))}
    </Stack>
  );
};

export default NavRoutes;
