"use client";
import { Button, Divider, Group, Modal, Text, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { Warning } from "@phosphor-icons/react";
import { deleteBookAndDataCompletely } from "../../appwrite/deleteBookAndDataCompletely";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
// import { dark_theme } from "../config/useTheme";
import { cardShadows } from "../utils/shadows";
import useTheme from "../config/useTheme";

function BookListDeleteModal({ isOpened, close, bookId }) {
  const queryClient = useQueryClient();
  const theme = useMantineTheme();
  const [dark_theme] = useTheme();

  // status can be idle, pending, success, error
  const { mutateAsync: deleteBook, status } = useMutation({
    mutationFn: deleteBookAndDataCompletely,
    onSuccess: () => {
      close();
      toast.success("Deleted Successfully", {
        style: {
          backgroundColor: colorScheme !== "light" ? dark_theme.card_bg_dark_color : "black",
          color: "white",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["book"] });
    },
    onError: () => {
      close();
      toast.error("Rate limit exceeded", {
        style: {
          backgroundColor: colorScheme !== "light" ? dark_theme.card_bg_dark_color : "black",
          color: "white",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["book"] });
    },
    onError: () => {
      close();
      toast.error("Rate limit exceeded", {
        style: {
          backgroundColor: colorScheme !== "light" ? dark_theme.card_bg_dark_color : "black",
          color: "white",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["book"] });
    },
    onError: () => {
      close();
      toast.error("Rate limit exceeded", {
        style: {
          backgroundColor: colorScheme !== "light" ? dark_theme.card_bg_dark_color : "black",
          color: "white",
        },
      });
    },
  });
  const colorScheme = useComputedColorScheme();
  return (
    <Modal
      radius={"xl"}
      styles={{
        header: {
          display: "none",
        },
        body: {
          padding: "1.5rem",
          paddingBottom: "1rem",
          background: colorScheme !== "light" ? dark_theme.app_bg_dark_color : "white",
          paddingRight: "1.5rem",
          paddingLeft: "1.5rem",
        },
      }}
      centered
      opened={isOpened}
      onClose={close}
      title="Authentication"
    >
      <Group gap={"xs"} wrap="nowrap">
        <Warning
          color={colorScheme !== "light" ? dark_theme.secondary_text_color : "black"}
          size={42}
          weight={colorScheme !== "light" ? "fill" : "light"}
        />
        <Title order={4} fw={500} c={colorScheme !== "light" ? dark_theme.main_text_color : "dimmed"}>
          Delete Content?
        </Title>
      </Group>
      <Divider my={"sm"} />
      <Text fz={"sm"} c={colorScheme !== "light" ? dark_theme.secondary_text_color : "dimmed"}>
        Are you sure you want to delete this content?
      </Text>
      <Group gap={"sm"} justify="flex-end" mt="md" mb="xs">
        <Button
          onClick={close}
          disabled={status == "pending"}
          variant="transparent"
          c={colorScheme !== "light" ? dark_theme.secondary_text_color : theme.colors.dark[9]}
          color={colorScheme !== "light" ? dark_theme.card_bg_dark_color : "black"}
          size="md"
        >
          Cancel
        </Button>
        <Button
          style={{ boxShadow: cardShadows.md }}
          loading={status == "pending"}
          loaderProps={{ type: "oval" }}
          onClick={async () => await deleteBook(bookId)}
          color={colorScheme !== "light" ? dark_theme.nav_link_dark_color : "black"}
          c={colorScheme !== "light" ? dark_theme.secondary_text_color : theme.colors.gray[0]}
          size="sm"
        >
          Delete
        </Button>
      </Group>
    </Modal>
  );
}
export default BookListDeleteModal;
