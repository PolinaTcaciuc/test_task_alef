<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from './components/the/TheFooter.vue'
import TheHeader from './components/the/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>
