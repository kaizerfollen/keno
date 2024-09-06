<script setup>
import { ref } from 'vue';

import RepeatIcon from '@/components/icons/RepeatIcon.vue';
import SizeBigScreenIcon from '@/components/icons/SizeBigScreenIcon.vue';
import SizeScreenIcon from '@/components/icons/SizeScreenIcon.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';

const isChangesize = ref(false);

const changeSize = () => {
  isChangesize.value = !isChangesize.value;
  const body = document.querySelector('#app');
  
  if (isChangesize.value) {
    body.style.transform = 'scale(1.2)';
  } else {
    body.style.transform = 'scale(1)';
  }
};

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}
</script>

<template>
  <div class="header-screen">
    <div class="header-screen__title">
      <p class="title">Keno 4 min vs1</p>
    </div>
    <div class="header-screen__demo-account">
      <p class="description">Вы играете на демо счет</p>
      <RepeatIcon />
    </div>
    <div class="header-screen__control">
      <SizeScreenIcon @click="toggleFullscreen" />
      <SizeBigScreenIcon @click="changeSize" />
      <a href="https://bet1000.de/home/games/all">
        <CloseIcon />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-screen {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, .5);
  &__title {
    .title {
      font-size: 24px;
      font-weight: 500;
      color: #d5b577;
    }
  }
  &__demo-account {
    display: flex;
    align-items: center;
    .description {
      font-size: 14px;
      margin-right: 10px;
      color: #d5b577;
      cursor: pointer;
    }
    &:hover {
      .description {
        color: #e2e2e2;
      }
    }
  }
  &__control {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    align-items: center;
  }
}
</style>
