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
    <div class="flex flex-col gap-3 my-4">
      <div v-for="comment in card?.comments" class="flex gap-2">
        <Icon size="20px" name="material-symbols:mode-comment" />
        <p class=" basis-[90%] border rounded-lg px-3 text-xs">{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>
