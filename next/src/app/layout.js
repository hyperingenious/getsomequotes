"use client";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "./globals.css";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { SunDim, Moon, SignOut } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import BottomBar from "./components/BottomBar";
import Logo from "./components/Logo";
import NotSignedIn from "./components/NotSignedIn";
import { cardShadows } from "./utils/shadows";
import { usePathname, useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  AppShell,
  Avatar,
  Center,
  createTheme,
  Group,
  MantineProvider,
  SegmentedControl,
  Stack,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { ClerkProvider, SignedIn, SignedOut, SignOutButton, useUser } from "@clerk/nextjs";
import useTheme from "./config/useTheme";
import FeedBack from "./components/layout/FeedBack";
import UserCard from "./components/layout/UserCard";
import NavRoutes from "./components/layout/NavRoutes";

// Theme Toggle Button
const ThemeToggleButton = () => {
  const colorScheme = useComputedColorScheme();
  const [dark_theme] = useTheme();
  const [value, setValue] = useState(colorScheme);
  const { setColorScheme } = useMantineColorScheme();
  console.log(colorScheme);

  return (
    <SegmentedControl
      radius={"xl"}
      size="xs"
      onChange={(val) => {
        if (val === "light") {
          setValue("light");
          setColorScheme("light");
        }
        if (val === "dark-cyan") {
          setValue("dark-cyan");
          setColorScheme("dark-cyan");
        }
        if (val === "dark-red") {
          setValue("dark-red");
          setColorScheme("dark-red");
        }
      }}
      bg={colorScheme !== "light" ? dark_theme.ultra_special_dark : undefined}
      value={value}
      withItemsBorders={false}
      w={99}
      styles={{
        indicator: {
          background: colorScheme !== "light" && dark_theme.nav_link_dark_color,
          boxShadow: cardShadows.md,
        },
        label: { padding: "calc(0.375rem) calc(0.375rem)" },
      }}
      data={[
        {
          value: "light",
          label: (
            <Center>
              <SunDim
                // color={
                //   colorScheme === "dark-cyan" || "dark-red"
                //     ? value === "light"
                //       ? dark_theme.main_text_color
                //       : dark_theme.secondary_text_color
                //     : undefined
                // }
                size={16}
              />
            </Center>
          ),
        },
        {
          value: "dark-cyan",
          label: (
            <Center p={0}>
              <Moon
                weight={value === "dark-cyan" ? "fill" : undefined}
                color={
                  colorScheme === "dark-cyan"
                    ? value === "dark-cyan"
                      ? dark_theme.main_text_color
                      : dark_theme.secondary_text_color
                    : undefined
                }
                size={16}
              />
            </Center>
          ),
        },
        {
          value: "dark-red",
          label: (
            <Center p={0}>
              <Moon
                weight={value === "dark-red" ? "fill" : undefined}
                color={
                  colorScheme === "dark-red"
                    ? value === "dark-red"
                      ? dark_theme.main_text_color
                      : dark_theme.secondary_text_color
                    : undefined
                }
                size={16}
              />
            </Center>
          ),
        },
      ]}
    />
  );
};

function Shell({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const isBlogPage = pathname.includes("/blog/");
  const smallScreen = useMediaQuery("(max-width: 450px)");
  const smallSizeMath = useMediaQuery("(max-width:480px)");
  const navSizeScreen = useMediaQuery("(max-width:767px)");
  const [dark_theme] = useTheme();

  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();
  const [opened, { toggle }] = useDisclosure();
  const { user } = useUser();

  return (
    <>
      <SignedOut>
        <NotSignedIn />
      </SignedOut>
      <SignedIn>
        <AppShell
          bg={colorScheme !== "light" ? dark_theme.app_bg_dark_color : theme.colors.gray[0]}
          padding="md"
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
        >
          <Toaster position="bottom-center" reverseOrder={false} />

          {/* Header */}
          <AppShell.Header bg={colorScheme !== "light" ? dark_theme.app_bg_dark_color : theme.colors.gray[0]}>
            <Group justify={"space-between"} h="100%" px="md">
              {navSizeScreen && <Avatar src={user?.imageUrl} onClick={toggle} alt={user?.fullName} size={"32"} />}
              <Logo />
              {navSizeScreen && <ThemeToggleButton />}
              {!navSizeScreen && <FeedBack />}
            </Group>
          </AppShell.Header>

          {/* Navbar */}
          <AppShell.Navbar p="md" bg={colorScheme !== "light" ? dark_theme.app_bg_dark_color : theme.colors.gray[0]}>
            <Stack gap={0} h="100%" justify="space-between">
              <Stack gap={0}>
                <UserCard
                  colorScheme={colorScheme}
                  fullName={user?.fullName}
                  emailAddress={user?.emailAddresses[0].emailAddress}
                  imageUrl={user?.imageUrl}
                  color={colorScheme !== "light" ? dark_theme.app_bg_dark_color : theme.colors.gray[0]}
                />
                <NavRoutes router={router} toggle={toggle} pathname={pathname} colorScheme={colorScheme} />
              </Stack>
              <Group justify="space-between" gap={0}>
                <SignOutButton>
                  <Group
                    gap="xs"
                    align="center"
                    p="sm"
                    justify="center"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Text size="sm" c={colorScheme !== "light" ? dark_theme.main_text_color : "red"} fw={500}>
                      Sign out
                    </Text>
                    <SignOut
                      weight="bold"
                      color={colorScheme !== "light" ? dark_theme.main_text_color : "#fa5252"}
                      size={16}
                    />
                  </Group>
                </SignOutButton>
                {!navSizeScreen && <ThemeToggleButton />}
                {navSizeScreen && <FeedBack />}
              </Group>
            </Stack>
          </AppShell.Navbar>

          {/* Main Content */}
          <AppShell.Main style={{ paddingInline: smallSizeMath ? 0 : undefined }}>{children}</AppShell.Main>

          {/* Bottom Navigation for SmaScreens */}
          {smallScreen && !isBlogPage && !opened && <BottomBar />}
        </AppShell>
      </SignedIn>
    </>
  );
}

function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") router.push("/home");
  }, [pathname, router]);

  const def_theme = createTheme({
    fontFamily: "Verdana, sans-serif",
    fontFamilyMonospace: "Monaco, Courier, monospace",
    headings: { fontFamily: "Greycliff CF, sans-serif" },
  });

  const queryClient = new QueryClient();
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <head>
            <meta name="twitter:image" content="twitter-image.png" />
            <meta name="twitter:image:type" content="image/png" />
            <meta name="twitter:image:width" content="1200" />
            <meta name="twitter:image:height" content="630" />

            <meta property="og:image" content="opengraph-image.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="description" content="Turn your favorite books into short blogs without losing exact lines." />
            <title>Purple Night</title>
          </head>

          <body>
            <MantineProvider theme={def_theme} defaultColorScheme="light">
              <Shell>{children}</Shell>
            </MantineProvider>
          </body>
        </html>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
export default RootLayout;
