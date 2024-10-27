<script lang="ts" setup>
const props = defineProps<{
  labelText: string;
}>();
</script>

<template>
  <div>
    <label class="text-xs">
      {{ labelText }}
    </label>
    <div class="">
      <slot />
    </div>
  </div>
</template>
