<script setup>
import { ref, onMounted } from 'vue';
import HeaderScreen from '@/components/modules/HeaderScreen.vue';
import BallsIndicator from '@/components/modules/BallsIndicator.vue';
import GameScreen from '@/components/modules/GameScreen.vue';

const isLoader = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoader.value = false;
  }, 2000); // Simulating loading time. Replace with your own logic. 2 seconds here for demo purposes.
})
</script>

<template>
  <div class="main-screen">
    <HeaderScreen />
    <div class="wrapper">
      <img v-if="isLoader" class="loader" src="https://static1.flg10.bet/FLG.Space/release/images/loading.svg" alt="" />
      <template v-else>
        <BallsIndicator />
        <GameScreen />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-screen {
  width: 1234px;
  height: 729px;
  margin: 0 auto;
  // background: #000;
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .wrapper {
    height: 691px;
    background-color: #000;
  }
}
</style>