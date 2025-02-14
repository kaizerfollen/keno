<script setup>
import { defineProps } from 'vue';
import { useMainStore } from '@/stores';

const mainStore = useMainStore();

const props = defineProps({
  numberCell: {
    type: [Number, String],
    default: 27,
  },
  cell: {
    type: Object,
    default: () => ({}),
  },
})

</script>

<template>
  <div class="cell-number">
    <div :class="
      ['button',
        { 'button--active': props.cell.isActive },
        { 'button--red-text': props.cell.isRed && mainStore.isEye },
        { 'button--blue-text': props.cell.isBlue && mainStore.isEye },
        { 'button--random': props.cell.isCoupon },
        { 'button--is-win': props.cell.isWin },
      ]"
    >
      {{ props.cell.id }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 68px;
  height: 54px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/zone.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  cursor: pointer;
  font-family: 'Arial Narrow';
  transition: all 0.3s;

  &--is-win {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/zone-action.png');
    animation: flip 1s linear forwards;
  }

  &--red-text {
    color: #FF5150;
  }

  &--blue-text {
    color: #42A0FF;
  }

  &--random {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/zone-lock.png');
  }

  &:hover {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/zone-selected.png');
  }

  &--active {
    animation: swing 3s linear infinite;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/zone-selected.png');
  }
}

@keyframes flip {
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

@keyframes swing {
  0%, 100% {
    transform: rotate(-10deg);
  }
  10% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  30% {
    transform: rotate(10deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-10deg);
  }
  90% {
    transform: rotate(10deg);
  }
}
</style>