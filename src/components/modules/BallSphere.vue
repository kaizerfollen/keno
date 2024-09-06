<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  ballNumber: {
    type: [String, Number],
    default: 27,
  },
})
</script>

<template>
  <div class="ball">
    <!-- <div class="ball-outside"> -->
      <!-- <div class="ball-inside">
        <div class="ball-number"> -->
    {{ props.ballNumber }}
        <!-- </div>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.ball {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 51px;
  height: 51px;
  font-size: 24px;
  font-weight: 600;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/ball.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-family: 'Arial Narrow';
  // background: linear-gradient(180deg, rgba(248,225,164,1) 0%, rgba(232,148,18,1) 54%, rgba(231,164,16,1) 100%);
  // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  // border-radius: 50%;
  margin-right: 1.5px;
  animation: 1s linear 0s normal none infinite running rotateBall;

  .ball-outside {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #fff;
  }

  .ball-inside {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background-color: #fff;
    color: #070707;
    font-weight: 600;
    &::after {
      content: '';
      width: 28px;
      height: 28px;
      position: absolute;
      background: linear-gradient(180deg, rgba(248,225,164,1) 0%, rgba(232,148,18,1) 54%, rgba(231,164,16,1) 100%);
      border-radius: 50%;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
      z-index: 0;
      background-clip: padding-box, border-box;
    }
    .ball-number  {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 24px;
      height: 24px;
      z-index: 1;
      border-radius: 50%;
      background-color: #E8E8E8;
    }
  }
}

@keyframes rotateBall {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
