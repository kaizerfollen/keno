<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HistoryRow from '@/components/modules/HistoryRow.vue';
import { useMainStore } from '@/stores';
const mainStore = useMainStore()

const currentTime = ref('');

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

const isLoader = ref(true);

const closeScreen = () => {
  mainStore.setActiveScreen('game');
};

const repeatLoader = () => {
  isLoader.value = true;
  setTimeout(() => {
    isLoader.value = false
  }, 3000)
}

onMounted(() => {
  setTimeout(() => {
    isLoader.value = false
  }, 3000)
  updateTime();
  const interval = setInterval(updateTime, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div class="stat-screen">
    <div class="header">
      <div class="header-left">
        <img :class="['img', {'img--repeat': isLoader }]" src="@/assets/images/repeat.png" alt="" @click="repeatLoader" />
        <span class="time">{{ currentTime }}</span>
      </div>
      <div class="header-right">
        <img class="img-close" src="@/assets/images/image.png" alt="" @click="closeScreen" />
      </div>
    </div>
    <img v-if="isLoader" class="loader" src="@/assets/images/loader.svg" alt="" />
    <div v-else class="content">
      <ul>
        <li v-for="item in 10" :key="item" class="item">
          <HistoryRow />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stat-screen {
  width: 680px;
  height: 438px;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #191e21;
    height: 75px;
  }
  .header-left {
    display: flex;
    align-items: center;
  }
  .img {
    width: 55px;
    height: 55px;
    transition: all 0.3s;
    cursor: pointer;
    &--repeat {
      animation: rotate360 1s forwards;
    }
  }
  .img-close {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    cursor: pointer;
  }
  .time {
    color: #fff;
    font-weight: 600;
    margin-left: 10px;
  }
  .content {
    background: #2F3133;
    height: 360px;
    overflow-y: scroll;
    .item {
      padding: 10px;
      border-radius: 5px;
    }
  }
}

@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
