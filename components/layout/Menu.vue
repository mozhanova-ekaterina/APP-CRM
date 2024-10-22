<script lang="ts" setup>
  import { MENU_DATA } from "./menu.data";
</script>

<template>
  <div class="flex flex-col ">
    <NuxtLink
      class="hover:text-primary hover:bg-foreground py-1 px-2 rounded-md transition-colors flex items-center gap-2"
      v-for="item in MENU_DATA" :key="item.name" :to="item.url">
      <Icon :name="item.icon" size="20px" />
      <span>{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>