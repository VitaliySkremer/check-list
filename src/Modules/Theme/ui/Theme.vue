<script setup>
import { Button } from "@/Common/ui/button";
import { useColorMode } from "@vueuse/core";
import { Moon, Sun } from "lucide-vue-next";

const mode = useColorMode();

const handleToggleTheme = () => {
  mode.value = mode.value === "light" ? "dark" : "light";
};
</script>
<template>
  <Button size="icon-lg" aria-label="Submit" variant="outline" @click="handleToggleTheme">
    <Moon class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Sun class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  </Button>
</template>
<style scoped></style>
