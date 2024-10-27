<script lang="ts" setup>
const store = useDealSlideStore();
</script>

<template>
  <div v-if="store.isOpen"
    class="absolute right-0 top-0 bottom-0 bg-card shadow-2xl p-5 z-10 min-w-[350px] max-w-[400px] h-full animate overflow-hidden"
  >
    <KanbanSlideoverHeader />
    <KanbanSlideoverComments />
    <UiButton @click="store.clear()">Close</UiButton>
  </div>
</template>

<style scoped>
.animate {
  animation: showUp 0.3s ease-in-out;
}

@keyframes showUp {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
