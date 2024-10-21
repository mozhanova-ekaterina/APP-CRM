<script setup lang="ts">
useSeoMeta({
  //Композабл useSeoMeta позволяет определить SEO-мета-теги вашего сайта в виде плоского объекта с полной поддержкой TypeScript.
  title: "Login | CRM System",
});

const emailRef = ref("");
const passwordRef = ref("");
const nameRef = ref("");
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <div class="bg-background p-7 basis-[40%] shadow-lg">
      <form class="flex flex-col gap-4">
        <UiInput type="email" placeholder="Email" v-model="emailRef" />
        <UiInput type="password" placeholder="Password" v-model="passwordRef" />
        <UiInput type="name" placeholder="Name" v-model="nameRef" />
        <div class="flex gap-4">
          <UiButton class="bg-primary text-primary-foreground" type="button"
            >Login</UiButton
          >
          <UiButton class="bg-primary text-primary-foreground" type="button"
            >Register</UiButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
