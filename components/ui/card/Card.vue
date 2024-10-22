<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg animate bg-card text-card-foreground border transition-shadow hover:shadow-lg',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>

<style scoped>
.animate {
  animation: show 0.2s ease-in-out;
}

@keyframes show {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
</style>
