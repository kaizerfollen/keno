<script setup>
import { useMainStore } from '@/stores';
const mainStore = useMainStore()

const randowBetNumber = () => {
  mainStore.setRandomBetNumber();
  playAudioClick()
};

const playAudioClick = () => {
  const audio = new Audio('https://bet1000.de/FLG.Space/release/libs/FLGUtils/resources/audio/buttonClick.mp3');

  audio.play()
};
</script>

<template>
  <div class="central-control">
    <div class="btn autoplay bgi" @click="playAudioClick">
      <span>автоигра</span>
    </div>
    <div class="btn-circle bgi"></div>
    <div class="btn random bgi" @click="randowBetNumber">
      <span>случайно</span>
    </div>
    <div class="random-bow bgi" @click="mainStore.setRandomCount">{{ mainStore.randomCount }}</div>
    <div class="rebet-wrapper">
      <div class="rebet">
        <div class="rebet-img bgi"></div>
        <span class="text">Повторить</span>
      </div>
      <div class="rebetx2">
        <div class="rebetx2-img bgi"></div>
        <span class="text">Повтор x2</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bgi {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.central-control {
  position: relative;
  display: flex;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  width: 220px;
  font-family: "Arial Narrow";
  text-transform: uppercase;
}

.autoplay {
  padding-right: 20px;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/autoplay.png');
  &:hover {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/autoplay-selected.png');
  }
  &:active {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/autoplay-pressed.png');
  }
}

.btn-circle {
  position: absolute;
  top: 20px;
  left: 33%;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 100px;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/plus.png');
  &:hover {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/plus-selected.png');
  }
  &:active {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/plus-pressed.png');
  }
}

.random {
  width: 175px;
  padding-left: 20px;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/random.png');
  &:hover {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/random-selected.png');
  }
  &:active {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/random-pressed.png');
  }
}

.random-bow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-family: "Arial Narrow";
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/random-num.png');
  width: 45px;
  height: 70px;
  &:hover {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/random-num-selected.png');
  }
  &:active {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/random-num-pressed.png');
  }
}

.rebet-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
}

.rebet {
  width: 4%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .text {
    font-size: 12px;
    color: #fff;
    font-family: "Arial Narrow";
  }

  .rebet-img {
    width: 37px;
    height: 37px;
    font-family: "Arial Narrow";
    font-size: 12px;
    color: #fff;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-rebet-min.png');
    &:hover {
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-rebet-mode-selected-min.png');
    }
  }
}

.rebetx2 {
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 40px;

  .text {
    font-size: 12px;
    color: #fff;
    font-family: "Arial Narrow";
  }

  .rebetx2-img {
    width: 52px;
    height: 30px;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-rebetx2-min.png');
    &:hover {
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-rebetx2-mode-selected-min.png');
    }
  }
}

</style>
