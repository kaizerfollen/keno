<script setup>
import { computed, watch, ref } from 'vue';

import CellNumber from '@/components/modules/cell/CellNumber.vue';
import ControlButtons from '@/components/modules/ControlButtons.vue';
import TableBoard from '@/components/modules/table/TableBoard.vue';
import FooterControl from '@/components/modules/footer-control/FooterControl.vue';
import StatScreen from '@/components/modules/game-screen/StatScreen.vue';
import VideoScreen from '@/components/modules/game-screen/VideoScreen.vue';
import CoefScreen from '@/components/modules/game-screen/CoefScreen.vue';
import HistoryScreen from '@/components/modules/game-screen/HistoryScreen.vue';

import { useMainStore } from '@/stores';
const mainStore = useMainStore();

const addCell = (cell) => {
  mainStore.setActiveCell(cell);
  const audio = new Audio('https://bet1000.de/FLG.Space/release/libs/FLGUtils/resources/audio/firstChip.mp3');
  audio.play();
};
const filterCell = computed(() => {
  return mainStore.getDataCells;
});

watch(() => mainStore.getRandomNumbers, (newValue) => {
  setTimeout(() => {
    mainStore.setIsWinCell(newValue)
  }, 2000)
})

const isWinVisible = ref(filterCell.value.map(() => false));

filterCell.value.forEach((cell, idx) => {
  watch(() => cell.isWin, (newVal) => {
    if (newVal) {
      setTimeout(() => {
        isWinVisible.value[idx] = true;
      }, 4000);
    } else {
      isWinVisible.value[idx] = false;
    }
  });
});

</script>

<template>
  <div class="game-screen">
    <div class="game-screen__game-board">
      <div class="board-screen">
        <div :class="['screen','cells', { 'screen-active': mainStore.activeScreen === 'game' }]">
          <CellNumber
            v-for="(cell, idx) in filterCell"
            :key="idx"
            :cell="cell"
            :number-cell="cell.id"
            :is-win-visible="isWinVisible[idx]"
            @click="addCell(cell)"
          />
        </div>
        <div :class="['screen', 'stat', { 'screen-active': mainStore.activeScreen === 'stat' }]">
          <StatScreen :is-active="mainStore.activeScreen === 'stat'" />
        </div>
        <div :class="['screen', 'stat', { 'screen-active': mainStore.activeScreen === 'video' }]">
          <VideoScreen />
        </div>
        <div :class="['screen', 'stat', { 'screen-active': mainStore.activeScreen === 'coef' }]">
          <CoefScreen />
        </div>
        <div :class="['screen', 'stat', { 'screen-active': mainStore.activeScreen === 'history' }]">
          <HistoryScreen />
        </div>
      </div>

      <div class="controls">
        <ControlButtons />
      </div>
      <div class="stat-board">
        <div class="stat-board__header">
          <img src="https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/jackpotNG/JackPot.png" alt="" />
          <span class="number">8 201</span>
          <div class="boxes">
            <div v-for="(box, idx) in 5" :key="idx" class="green-box">
            </div>
          </div>
        </div>
        <TableBoard />
      </div>
    </div>
    <div class="game-screen__footer">
      <FooterControl />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-screen {
  width: 100%;
  position: relative;
  background: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/bg-green.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  &__game-board {
    padding: 0 20px;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 0.1fr 1fr;

    .board-screen {
      width: 680px;
      height: 438px;
    }

    .cells {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(8, 0.1fr);
    }

    .controls {
      width: 70px;
      padding: 0 14px;
    }

    .stat-board {
      margin-left: 23px;

      &__header {
        display: flex;
        align-items: flex-end;
        margin-bottom: 20px;

        .number {
          margin-left: 12px;
          font-size: 36px;
          color: #D6D6D6;
          font-weight: bold;
        }
      }
    }
  }

  .boxes {
    position: absolute;
    top: 10px;
    display: flex;
    align-items: end;
    bottom: -7px;
  }

  .green-box {
    background-color: #03FF00;
    width: 14px;
    height: 5px;
    margin-right: 3px;
  }
}

.stat-board {
  &__header {
    position: relative;
  }
}
.screen {
  transition: transform 0.3s, opacity 0.3s;
  transform: rotateX(90deg);
  opacity: 0;
  position: absolute;
}

.screen-active {
  opacity: 1;
  transform: translateX(0);
}
</style>