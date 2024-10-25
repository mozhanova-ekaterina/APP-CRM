<script setup lang="ts">
import dayjs from "dayjs";
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";

useSeoMeta({
  title: "Home | CRM System",
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const { isPending, data, refetch } = useKanbanQuery();
</script>

<template>
  <div class="min-h-screen">
    <h1 class="text-4xl p-5">CRM System</h1>
    <div v-if="isPending">Loading...</div>
    <div v-else class="grid grid-cols-5 gap-2">
      <div class="" v-for="column in data" :key="column.id">
        <h2 class="text-center p-2 mb-3 text-primary border-b">
          {{ column.name }}
        </h2>
        <div class="flex flex-col gap-2">
          <UiCard draggable="true" v-for="card in column.items" :key="card.id">
            <UiCardHeader>
              <UiCardTitle class="border-b pb-2">{{ card.name }}</UiCardTitle>
              <UiCardDescription class="text-xs">{{ convertCurrency(card.price) }}</UiCardDescription>
            </UiCardHeader>
            <UiCardContent class=" font-bold"> {{ card.companyName }} </UiCardContent>
            <!-- три варианта вывода даты -->
            <!-- <UiCardFooter class="text-xs italic"> {{ new Intl.DateTimeFormat('en-US').format(new Date(card.$createdAt)) }} </UiCardFooter> -->
            <!-- <UiCardFooter class="text-xs italic"> {{ new Date(card.$createdAt).toLocaleDateString('en-US', {dateStyle: 'long'}) }} </UiCardFooter> -->
            <UiCardFooter class="text-xs italic"> {{ dayjs(card.$createdAt).format('DD MMMM YYYY') }} </UiCardFooter>
          </UiCard>
        </div>
      </div>
    </div>
  </div>
</template>
