<script setup lang="ts">
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";

useSeoMeta({
  title: "Home | CRM System",
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const { isPending, isError, data, error } = useKanbanQuery();
console.log(data.value);

</script>

<template>
  <div>
    <h1 class="text-4xl p-5">CRM System</h1>
    <div class="flex p-5">
      <UiCard draggable="true">
        <UiCardHeader>
          <UiCardTitle>Card Title</UiCardTitle>
          <UiCardDescription>Card Description</UiCardDescription>
        </UiCardHeader>
        <UiCardContent> Card Content </UiCardContent>
        <UiCardFooter> Card Footer </UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>
