<script setup lang="ts">
import { useLoadingStore } from "~/stores/loading.store";

useSeoMeta({
  //Композабл useSeoMeta позволяет определить SEO-мета-теги вашего сайта в виде плоского объекта с полной поддержкой TypeScript.
  title: "Login | CRM System",
});

const emailRef = ref("");
const passwordRef = ref("");
const nameRef = ref("");

const isLoadingStore = useLoadingStore();
const router = useRouter();
const login = async () => {
  isLoadingStore.setLoading(true);
  await account.createEmailSession(emailRef.value, passwordRef.value);
}
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <div class="bg-background p-7 basis-[40%] shadow-lg">
      <form class="flex flex-col gap-4">
        <UiInput type="email" placeholder="Email" v-model="emailRef" />
        <UiInput type="password" placeholder="Password" v-model="passwordRef" />
        <UiInput type="name" placeholder="Name" v-model="nameRef" />
        <div class="flex gap-4 justify-around">
          <UiButton
            type="button"
            class="transition-colors hover:bg-primary hover:text-primary-foreground"
            >Login</UiButton
          >
          <UiButton
            type="button"
            class="transition-colors hover:bg-primary hover:text-primary-foreground"
            >Register</UiButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
