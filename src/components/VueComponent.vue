<script setup lang="ts">
import { isOpen } from "../store/test.store";
import { useStore } from "@nanostores/vue";

const $isOpen = useStore(isOpen);
</script>

<template>
  <div>
    <div>Vue Component - {{ $isOpen }}</div>
    <button @click="() => isOpen.set(!$isOpen)">Change State!</button>
  </div>
</template>
