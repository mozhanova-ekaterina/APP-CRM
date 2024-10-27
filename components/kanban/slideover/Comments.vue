<script lang="ts" setup>
import type { IDeal } from "~/types/deals.types";
import { useComments } from "./useComments";
import { useCreateComment } from "./useCreateComment";

const { data, refetch, isPending } = useComments();
const { writeComment, commentRef } = useCreateComment({ refetch });

const card = data as unknown as IDeal;
</script>

<template>
  <div class="border-t mt-2 pt-2">
    <UiInput
      placeholder="Write comment"
      v-model="commentRef"
      @keyup.enter="writeComment"
      class="bg-transparent"
    />
    <ul class="flex flex-col gap-3 my-4">
      <li v-for="comment in card?.comments" class="flex gap-2">
        <Icon name="material-symbols:mode-comment" />
        <p class="border rounded-lg px-3 text-xs text-wrap">{{ comment.text }}</p>
      </li>
    </ul>
  </div>
</template>
