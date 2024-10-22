<script setup lang="ts">
const isLoadingStore = useLoadingStore();
const store = useAuthStore();
const router = useRouter();

onMounted(async () => {
  try {
    const user = await account.get();
    if (user) store.set(user);
  } catch (error) {
    router.push("/login");
  } finally {
    isLoadingStore.setLoading(false);
  }
});
</script>

<template>
  <LayoutLoader v-if="isLoadingStore.loading" />
  <section v-else :class="{ grid: store.isAuth }" style="min-height: 100vh">
    <LayoutSidebar v-if="store.isAuth" />
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
