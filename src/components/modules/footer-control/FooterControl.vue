<script setup>
import { ref, watch } from 'vue';
import { useMainStore } from '@/stores';
const mainStore = useMainStore()

import CentralControl from '@/components/modules/footer-control/components/CentralControl.vue';
import BottomControl from '@/components/modules/footer-control/components/BottomControl.vue';
import MyBet from '@/components/modules/footer-control/components/MyBet.vue';

const isShowMyBet = ref(false);
const isShowCoef = ref(false);

const showMyBet = () => {
  isShowMyBet.value = !isShowMyBet.value;
};

const showCoef = () => {
  if (mainStore.activeScreen === 'game') {
    mainStore.setActiveScreen('coef');
    return;
  }
  if (mainStore.activeScreen === 'coef') {
    mainStore.setActiveScreen('game');
    return;
  }

  mainStore.setActiveScreen('coef');

};

watch(() => mainStore.activeScreen, (newVal) => {
  console.log(newVal);
  isShowCoef.value = newVal;
})

</script>

<template>
  <div class="control">
    <div class="footer-control">
      <div class="menu bgi" @click="showMyBet"></div>
      <div :class="['info', 'bgi', { 'info--active': mainStore.activeScreen === 'coef' }] " @click="showCoef"></div>
      <div class="cancel-wrapper">
        <div class="cancel bgi"></div>
        <span class="text">Отменить</span>
      </div>
      <div class="bet">
        <div class="arrow-left bgi"></div>
        <div class="bet-text">
          <span class="number">1</span>
          <span class="text">ставка</span>
        </div>
        <div class="arrow-right bgi"></div>
      </div>
      <div class="center-control">
        <CentralControl />
      </div>
    </div>
    <MyBet :class="['my-bet', {'my-bet--active': isShowMyBet}]" @show-my-bet="isShowMyBet = false" />
    <BottomControl />
  </div>
</template>

<style lang="scss" scoped>
.bgi {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.footer-control {
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/footer.png');
  height: 70px;
  cursor: pointer;

  .bet {
    display: flex;
    align-items: center;
    color: #fff;
    margin: 0 30px;
    .bet-text {
      display: flex;
      flex-direction: column;
      .number {
        font-weight: bold;
        font-family: "Myriad Pro Cond";
        font-size: 29px;
      }
      .text {
        font-family: "Arial Narrow";
        font-size: 12px;
      }
    }
  }

  .menu {
    width: 40px;
    height: 20px;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-menu2-min.png');
    &:hover {
      opacity: 0.5;
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-menu2-selected-min.png');
    }
  }

  .info {
    width: 40px;
    height: 40px;
    margin-left: 40px;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-info.png');
    transition: all 0.3s;
    &:hover {
      opacity: 0.4;
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-info-mode-selected.png');
    }
    &--active {
      opacity: 0.4;
      // background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-info-mode-selected.png');
    }
  }

  .cancel-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40px;
    height: 40px;
    margin-left: 40px;
    .cancel {
      width: 40px;
      height: 40px;
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-undo.png');
      &:hover {
        background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-undo-mode-selected.png');
      }
    }
    .text {
      font-family: "Arial Narrow";
      font-size: 12px;
      color: #fff;
    }
  }

  .arrow-left {
    width: 40px;
    height: 40px;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/arrow.png');
    &:hover {
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/arrow-selected.png');
    }
  }

  .arrow-right {
    width: 40px;
    height: 40px;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/arrow.png');
    transform: translateY(-2px) rotate(180deg);
    &:hover {
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/arrow-selected.png');
    }
  }
}

.my-bet {
  width: 0;
  overflow: hidden;
  transition: width 0.3s ease;

  &--active {
    width: 100px;
    // transform: translateX(100%); /* Показываем на экране */
  }
}

</style>
