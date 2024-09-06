<script setup>
import { ref, computed } from 'vue';
import TimerGame from '@/components/modules/TimerGame.vue';

const progress = ref(null)
const setProgress = (value) => {
  progress.value = value;
};
const isFinished = computed(() => {
  return progress.value === 100;
})
</script>

<template>
  <div class="loader-indicator">
    <div :class="['progress-bar', { 'progress-bar--is-finished': isFinished }]" :style="{ width: `${progress}%`, height: '20px' }"></div>
    <p :class="['loader-indicator__text', { 'animated-text': progress >= 45 }]">ДЕЛАЙТЕ ВАШИ СТАВКИ</p>
    <TimerGame :class="['loader-indicator__timer', { 'animated-text': progress >= 90 }]" @set-progress="setProgress" />
  </div>
</template>

<style lang="scss" scoped>
.loader-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 16px;
  background-color: #000;
  .progress-bar {
    position: absolute;
    left: 0;
    width: 0;
    background-color: #05A551;
    transition: all 1s linear;
    &--is-finished {
      background-color: #BF372D;
    }
  }
  &__text {
    position: absolute;
    z-index: 1;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0.1px;
    color: #fff;
    font-weight: 500;
    transition: all 1s linear;
    font-weight: 500;
  }
  &__timer {
    position: absolute;
    top: 0;
    z-index: 1;
    right: 30px;
    color: #fff;
  }
  .text-white {
    color: #000;
  }
}

.animated-text {
  color: #000;
  background: linear-gradient(#04f07a00, #f4f3f300) no-repeat 0 0;
  background-size: 100% 100%;
  animation: stripes 1s linear 1 forwards;
}

@keyframes stripes {
  to {
    background-size: 0% 100%;
  }
}
</style>