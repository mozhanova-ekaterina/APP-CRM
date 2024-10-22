<script setup lang="ts">
const router = useRouter();
const store = useAuthStore();

const logout = async () => {
  await account.deleteSession("current");
  store.clear();
  await router.push("/login");
};
</script>
<template>
  <aside class="px-5 py-8 bg-sidebar h-full w-full relative shadow-lg">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="logo.svg" alt="Logo" width="100px" class="mx-auto" />
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon @click="logout" name="line-md:logout" size="20px" />
    </button>
    <LayoutMenu />
  </aside>
</template>
