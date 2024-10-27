<script lang="ts" setup>
import dayjs from 'dayjs';

const store = useDealSlideStore();
</script>

<template>
  <h1 class="text-xl border-b mb-2">About Deal</h1>
  <KanbanSlideoverLabel label-text="Name">{{
    store.card?.name
  }}</KanbanSlideoverLabel>
  <KanbanSlideoverLabel label-text="Price">{{
    convertCurrency(store.card?.price)
  }}</KanbanSlideoverLabel>
  <KanbanSlideoverLabel label-text="Status">{{
    store.card?.status
  }}</KanbanSlideoverLabel>
  <KanbanSlideoverLabel v-if="store.card?.companyName" label-text="Customer">{{
    store.card?.companyName
  }}</KanbanSlideoverLabel>
  <KanbanSlideoverLabel label-text="Date"
    >{{ dayjs(store.card?.$createdAt).format("DD MMMM YYYY") }}
  </KanbanSlideoverLabel>
</template>
