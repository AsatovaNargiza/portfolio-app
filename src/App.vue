<script setup>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
