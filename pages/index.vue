<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import dayjs from "dayjs";
import { COLLECTION_DEALS, DB_ID } from "~/app.constants";
import { generateGradient } from "~/components/kanban/generateGradient";
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";
import type { EnumStatus } from "~/types/deals.types";

useSeoMeta({
  title: "Home | CRM System",
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const { isPending, data, refetch } = useKanbanQuery();
const dealStore = useDealSlideStore();
const slideStore = useDealSlideStore()

type TypeMutationVariables = {
  docId: string;
  status?: EnumStatus;
};

const { mutate } = useMutation({
  mutationKey: ["move card"],
  mutationFn: ({ docId, status }: TypeMutationVariables) =>
    DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, { status }),
  onSuccess: () => {
    refetch();
  },
});

function handleDragStart(card: ICard, column: IColumn) {
  dragCardRef.value = card;
  sourceColumnRef.value = column;
}

function handleDragOver(event: DragEvent) {
  event.preventDefault();
}

function handleDrop(targetColumn: IColumn) {
  if (dragCardRef.value && sourceColumnRef.value) {
    mutate({
      docId: dragCardRef.value.id,
      status: targetColumn.id,
    });
  }
}
</script>

<template>
  <KanbanSlideover />
  <div class="min-h-screen">
    <h1 class="text-4xl p-5">CRM System</h1>
    <div v-if="isPending">Loading...</div>
    <div v-else class="grid grid-cols-5 gap-2">
      <div
        @dragover="handleDragOver"
        @drop="() => handleDrop(column)"
        v-for="(column, index) in data"
        :key="column.id"
        class="h-full-screen"
      >
        <h2
          class="text-center rounded-lg p-1 mb-3"
          :style="generateGradient(index)"
        >
          {{ column.name }}
        </h2>
        <div></div>
        <KanbanCreateDeal :refetch="refetch" :status="column.id" />
        <div class="flex flex-col gap-2">
          <UiCard
            @dragstart="handleDragStart(card, column)"
            @dragover="handleDragOver"
            @drop="handleDrop(column)"
            draggable="true"
            v-for="card in column.items"
            :key="card.id"
          >
            <UiCardHeader @click="slideStore.set(card)">
              <UiCardTitle class="border-b pb-2">{{ card.name }}</UiCardTitle>
              <UiCardDescription class="text-xs">{{
                convertCurrency(card.price)
              }}</UiCardDescription>
            </UiCardHeader>
            <UiCardContent class="font-bold">
              {{ card.companyName }}
            </UiCardContent>
            <!-- три варианта вывода даты -->
            <!-- <UiCardFooter class="text-xs italic"> {{ new Intl.DateTimeFormat('en-US').format(new Date(card.$createdAt)) }} </UiCardFooter> -->
            <!-- <UiCardFooter class="text-xs italic"> {{ new Date(card.$createdAt).toLocaleDateString('en-US', {dateStyle: 'long'}) }} </UiCardFooter> -->
            <UiCardFooter class="text-xs italic">
              {{ dayjs(card.$createdAt).format("DD MMMM YYYY") }}
            </UiCardFooter>
          </UiCard>
        </div>
      </div>
    </div>
  </div>
</template>
