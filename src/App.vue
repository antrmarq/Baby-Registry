<template>
  <TopHeader class="sticky top-0 z-40"></TopHeader>
  <HomePage class="h-full p-4"></HomePage>
</template>

<script>
import HomePage from './components/HomePage.vue'
import TopHeader from './components/TopHeader.vue'
export default {
  name: 'App',
  components: {
    HomePage,
    TopHeader
  }
}
</script>
