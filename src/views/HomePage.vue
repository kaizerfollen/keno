<script setup>
import MainScreen from '@/components/MainScreen.vue';

</script>

<template>
  <div class="page-container">
    <MainScreen />
  </div>

</template>

<style lang="scss" scoped>
.page-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>