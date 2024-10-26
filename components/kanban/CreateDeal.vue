<script lang="ts" setup>
import { useMutation } from "@tanstack/vue-query";
import { COLLECTION_DEALS, DB_ID } from "~/app.constants";
import type { IDeal } from "~/types/deals.types";

//pick объединяет два типа из IDeal
interface IDealFormState extends Pick<IDeal, "name" | "price"> {
  customer: {
    name: string;
    email: string;
  };
  status: string;
}

const isOpenForm = ref(false);
const props = defineProps<{
  status: string;
  refetch: () => void;
}>();

const { handleSubmit, defineField, handleReset } = useForm<IDealFormState>({
  initialValues: {
    name: "",
    price: 0,
    customer: {
      name: "",
      email: "",
    },
    status: props.status,
  },
});

const [name, nameAttrs] = defineField("name");
const [customerEmail, customerEmailAttrs] = defineField("customer.email");
const [customerName, customerNameAttrs] = defineField("customer.name");
const [price, priceAttrs] = defineField("price");

const { mutate, isPending } = useMutation({
  mutationKey: ["create a new deal"],
  mutationFn: (data: IDealFormState) =>
    DB.createDocument(DB_ID, COLLECTION_DEALS, ID.unique(), data),
  onSuccess: () => {
    props.refetch && props.refetch();
    handleReset();
  },
});
const onSubmit = handleSubmit((values) => {
  mutate(values);
});
</script>

<template>
  <div class="mb-2">
    <div class="text-center">
      <UiButton
        @click="isOpenForm = !isOpenForm"
        class="rounded-full mb-3 bg-transparent border hover:bg-foreground hover:text-primary w-[50px] h-[50px]"
      >
        <Icon name="ic:round-add" size="20px" />
      </UiButton>
    </div>

    <form
      @submit="onSubmit"
      v-if="isOpenForm"
      class="animate flex flex-col gap-2 mt-2"
    >
      <UiInput
        class="text-xs bg-transparent rounded-none"
        type="text"
        placeholder="Deal Name"
        v-model="name"
        :="nameAttrs"
      />
      <UiInput
        class="text-xs bg-transparent rounded-none"
        type="number"
        placeholder="Price"
        v-model="price"
        :="priceAttrs"
      />
      <UiInput
        class="text-xs bg-transparent rounded-none"
        type="text"
        placeholder="Email"
        v-model="customerEmail"
        :="customerEmailAttrs"
      />
      <UiInput
        class="text-xs bg-transparent rounded-none"
        type="text"
        placeholder="Company Name"
        v-model="customerName"
        :="customerNameAttrs"
      />
      <UiButton
        class="w-full hover:bg-foreground hover:text-primary"
        :disabled="isPending"
      >
        {{ isPending ? "Saving..." : "Save" }}
      </UiButton>
    </form>
    <!-- The novalidate attribute on the <form> element is meant to disable the native HTML form validation-->
  </div>
</template>

<style scoped>
.animate {
  animation: show 0.3s ease-in-out;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
