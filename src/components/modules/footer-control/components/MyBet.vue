<script setup>
import { ref } from 'vue';
import { useMainStore } from '@/stores';

const mainStore = useMainStore();
const isEye = ref(false);

const setEye = () => {
  isEye.value = !isEye.value;
  mainStore.setIsEye(isEye.value);
}

</script>

<template>
  <div class="my-bet">
    <div class="wrapper">
      <div :class="['eye', 'bgi', {'eye--active': mainStore.isEye }]" @click="setEye"></div>
      <div class="bet">
        <div class="img bgi"></div>
        <span class="text">Мои ставки</span>
      </div>
      <div class="close bgi" @click="$emit('show-my-bet', false)"></div>
    </div>
  </div>
</template>

<style lang="scss" scoed>
.bgi {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.my-bet {
  width: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);

  .wrapper {
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 30px;
  }

  .eye {
    width: 100%;
    height: 100%;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-eye-min.png');
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      opacity: 0.5;
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-eye-mode-selected2-min.png');
    }
    &--active {
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-eye-closed-min.png');
      &:hover {
        background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-eye-closed-mode-selected-min.png');
      }
    }
  }

  .bet {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 52px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
    .img {
      width: 30px;
      height: 30px;
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-my-bets.png');
      margin-bottom: 10px;
      transition: all 0.3s;
      &:hover {
        background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-my-bets-selected.png');
      }
    }
    .text {
      font-size: 8px;
      font-weight: 600;
      color: #fff;
    }
  }

  .close {
    margin-top: 57px;
    margin-left: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-cross-min.png');
    transition: all 0.3s;
    &:hover {
      opacity: 0.5;
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/btn-cross-selected-min.png');
    }
  }
}
</style>
