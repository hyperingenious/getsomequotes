// import { dark_theme } from "@/app/config/useTheme";
import useTheme from "@/app/config/useTheme";
import { Stack, Skeleton, Card, Group } from "@mantine/core";

function LoadingSkeleton({ colorScheme }) {
  const [dark_theme] = useTheme();
  return Array.from({ length: 8 }, (_, i) => (
    <Card
      key={i - 2828}
      p="xs"
      h={57}
      radius={30}
      bg={colorScheme !== "light" ? dark_theme.nav_link_dark_color : undefined}
    >
      <Group align="center" justify="flex-start" gap="xs">
        <Skeleton h={32} radius="xl" w={32} />
        <Stack gap={5}>
          <Skeleton h={12} radius="sm" w={150} />
          <Group gap={4}>
            <Skeleton h={8} radius="xs" w={45} />
            <Skeleton h={8} radius="xs" w={45} />
          </Group>
        </Stack>
      </Group>
    </Card>
  ));
}

export default LoadingSkeleton;
