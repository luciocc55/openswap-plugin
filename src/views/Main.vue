<script setup lang="ts">import { useGlobalStore } from '../stores/global';

const globalStore = useGlobalStore()
console.log(globalStore.$id)
</script>

<template>
  <h3>Home</h3>
</template>



