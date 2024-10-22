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
const authStore = useAuthStore();
const router = useRouter();

const register = async () => {
  isLoadingStore.setLoading(true);
  await account.create(
    ID.unique(),
    emailRef.value,
    passwordRef.value,
    nameRef.value
  );
  await login();

  isLoadingStore.setLoading(false);
};
const login = async () => {
  isLoadingStore.setLoading(true);
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value);
  const response = await account.get();
  if (response) {
    authStore.set({
      name: response.name,
      email: response.email,
      status: true,
    });
  }

  emailRef.value = "";
  passwordRef.value = "";
  nameRef.value = "";

  await router.push("/");
  isLoadingStore.setLoading(false);
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-background p-7 basis-[40%] shadow-lg">
      <form class="flex flex-col gap-4">
        <UiInput type="email" placeholder="Email" v-model="emailRef" />
        <UiInput type="password" placeholder="Password" v-model="passwordRef" />
        <UiInput type="name" placeholder="Name" v-model="nameRef" />
        <div class="flex gap-4 justify-center">
          <UiButton
            type="button"
            class="transition-colors hover:bg-primary hover:text-primary-foreground"
            @click="login"
            >Login</UiButton
          >
          <UiButton
            type="button"
            class="transition-colors hover:bg-primary hover:text-primary-foreground"
            @click="register"
            >Register</UiButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
