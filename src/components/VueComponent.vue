<script setup lang="ts">
import { isOpen } from "../store/test.store";
import { useStore } from "@nanostores/vue";

const $isOpen = useStore(isOpen);
</script>

<template>
  <div>
    <div class="text-red-500">Vue Component - {{ $isOpen }}</div>
    <button @click="() => isOpen.set(!$isOpen)">Change State!</button>
  </div>
</template>
