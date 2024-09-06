<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

import BallSphere from '@/components/modules/BallSphere.vue';
import LoaderIndicator from '@/components/modules/LoaderIndicator.vue';
import { useMainStore } from '@/stores';
const mainStore = useMainStore();

const KENO_WORDS = ref(['K', 'E', 'N', 'O']);
const IMG_KENO = ref(
  [
    'https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/gmNames/K.png',
    'https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/gmNames/E.png',
    'https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/gmNames/N.png',
    'https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/gmNames/O.png',
  ],
);

const isAnimationDone = ref(false);

const intervalTime = 3000;

const animationDuration = 0.5 * KENO_WORDS.value.length * 1000;
const totalDuration = intervalTime + animationDuration;

const resetAnimation = () => {
  isAnimationDone.value = true;

  setTimeout(() => {
    isAnimationDone.value = false;
  }, intervalTime);
};

const intervalId = setInterval(resetAnimation, totalDuration);

const balls = computed(() => {
  return mainStore.getRandomNumbers;
});

onMounted(() => {
  resetAnimation();
});

watch(() => mainStore.currentStep, (newValue) => {
  if (newValue === 2) {
    mainStore.setRandomNumbers();
  };
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  };
});

</script>

<template>
  <div class="balls-indicator">
    <div class="balls-indicator-top">
      <div class="balls-indicator-top__title">
        <div class="wrapper">
          <img
            v-for="(img, idx) in IMG_KENO"
            :key="idx"
            :src="img"
            :class="['character', { 'character--animation': isAnimationDone }]"
          />

          <img
            src="https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/gmNames/4min.png"
            :class="['minutes-label', { 'character--animation': isAnimationDone }]"
          />
            <!-- <span class="minutes">4</span>
            <span class="label">min</span> -->
        </div>
        <div class="number">#800194</div>
      </div>
      <div class="balls-indicator-top__balls">
        <BallSphere
          v-for="(ball, idx) in balls"
          :key="idx"
          :ball-number="ball"
          :style="{ animationDelay: mainStore.currentStep === 3 ? `${idx * 1}s` : {} }"
          :class="[
            'move-ball',
            {'move-ball': mainStore.currentStep === 1 },
            {'move-ball-back': mainStore.currentStep === 2},
          ]"
        />
      </div>
    </div>

    <div class="balls-indicator__loader">
      <LoaderIndicator />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.balls-indicator {
  // background: repeating-linear-gradient(0deg,#2C2B2B,#2C2B2B 5%,#000 5%,#292828 10%);
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/header.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 12px;

  &__loader {
    padding-top: 12px;
  }
}

.balls-indicator-top {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  align-items: center;
  padding-left: 12px;
  gap: 8px;

  &__title {
    .wrapper {
      display: flex;
      align-items: center;

      .character {
        font-size: 24px;
        width: 22px;
        height: 22px;
        font-weight: 800;
        background: -webkit-linear-gradient(90deg, rgba(243,207,143,1) 0%, rgba(235,162,36,1) 35%, rgba(255,208,47,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        &--animation {
          animation: rotate 0.4s ease forwards;

          &:nth-child(1) {
            animation-delay: 0s;
          }
          &:nth-child(2) {
            animation-delay: 0.4s;
          }
          &:nth-child(3) {
            animation-delay: 0.8s;
          }
          &:nth-child(4) {
            animation-delay: 1.2s;
          }
          &:nth-child(5) {
            animation-delay: 1.6s;
          }
        }
      }

      .minutes-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
        background: linear-gradient(90deg, rgba(243,207,143,1) 0%, rgba(235,162,36,1) 35%, rgba(255,208,47,1) 100%);
        color: #000;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 800;
        height: 28px;
        width: 28px;

        .minutes {
          display: block;
          font-size: 12px;
          font-weight: 800;
        }
        .label {
          font-size: 8px;
        }

        &--animation {
          animation-delay: 2s;
          animation: rotate 0.5s ease-in-out forwards;
        }
      }
    }

    .number {
      margin-top: 6px;
      font-weight: bold;
      color: #FA9B00;
    }
  }

  &__balls {
    display: flex;
    align-items: center;
    height: 52px;
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    background: linear-gradient(180deg, rgb(0 0 0) 0%, rgb(23 19 19) 100%);
    overflow: hidden;
  }
}

// движение шара
.move-ball {
  transform: translateX(1103px) rotate(0deg);
  opacity: 0;
  animation: moveAndSpin 1s both linear;
}

@keyframes moveAndSpin {
  to {
    transform: translateX(0) rotate(-360deg);
    opacity: 1;
  }
}

// назад
.move-ball-back {
  transform: translateX(0) rotate(0deg);
  opacity: 1;
  animation: moveAndSpinBack 1s both linear;
}

@keyframes moveAndSpinBack {
  to {
    transform: translateX(1103px) rotate(360deg);
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

</style>