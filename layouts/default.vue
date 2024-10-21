<template>
  <section class="grid" style="min-height: 100vh;">
    <LayoutSidebar />
    <div class="bg-card px-3">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 6fr;
}
</style>