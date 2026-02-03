<script setup>
  import { Badge } from "@/Common/ui/badge";
  import { Card, CardContent, CardHeader } from "@/Common/ui/card";
  import { Theme } from "@/Modules/Theme";
  import { ClipboardCheck, Layers, ListChecks } from "lucide-vue-next";
</script>
<template>
  <Card class="w-full">
    <CardHeader class="flex gap-6 items-center">
      <div class="logo-icon bg-(--milk-white) dark:bg-(--light-purple)">
        <ClipboardCheck class="h-10 w-10" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="text-3xl">
          <p>
            <span class="font-bold">Test Framework</span>&nbsp;<span class="opacity-80">Checklist</span>
          </p>
        </div>
        <p class="text-xl"> Интерактивная оценка здоровья и зрелости вашего тестового фреймворка </p>
      </div>
    </CardHeader>
    <CardContent class="flex gap-3 items-center">
      <Badge class="text-base p-4 bg-(--milk-white) dark:bg-(--light-purple) text-black dark:text-white">
        <ListChecks :size="16" /> 50 критериев
      </Badge>
      <Badge class="text-base p-4 bg-(--milk-white) dark:bg-(--light-purple) text-black dark:text-white">
        <Layers :size="16" /> 5 категорий
      </Badge>
      <Theme />
    </CardContent>
  </Card>
</template>

<style scoped>
  .logo-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    animation: puls 2s ease-in-out infinite;
  }

  @keyframes puls {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }
</style>
