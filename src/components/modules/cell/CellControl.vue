<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  textBtn: {
    type: String,
    default: 'Игра',
  },
  isActive: {
    type: Boolean,
    default: false,
  }
})

</script>

<template>
  <div :class="['cell-control', { 'cell-control--is-active': props.isActive }]">
    <span class="text">{{ props.textBtn }}</span>
  </div>
</template>

<style lang="scss" scoped>
.cell-control {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: serif;
  width: 100px;
  height: 50px;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab.png');
  background-size: contain;
  background-repeat: repeat;
  background-position: center center;
  transform: rotate(270deg);
  cursor: pointer;
  .text {
    text-transform: uppercase;
    font-family: 'Arial Narrow';
    font-weight: 600;
  }

  &:hover {
    // box-shadow: 0px 0px 7px 5px #fff inset;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab-selected.png');
  }

  &--is-active {
    color: #fff;
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab-pressed.png');
    &:hover {
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab-pressed.png');
    }
  }

}
// .cell-control {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   height: 100%;
//   // background: linear-gradient(90deg, #eee7e7 0%, #b2aeae 49%, #eee7e7 100%);
//   // background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab.png');
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center center;
//   border-radius: 5px;
//   color: #292929;
//   text-align: center;
//   color: black;
//   cursor: pointer;
//   text-transform: uppercase;
//   &:after {
//     content: '';
//     position: absolute;
//     left: 0;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 0;
//     background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab.png');
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center center;
//     transform: rotate(360deg);
//   }
//   .text {
//     position: relative;
//     z-index: 1;
//     transform: rotate(270deg);
//     color: #292929;
//     font-size: 14px;
//     font-weight: 600;
//   }

//   &--active {
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center center;
//     background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab-pressed.png');

//     // background: rgba(0,0,0, 0.5);
//     // border: 1px solid #000;
//     .text {
//       color: #fff;
//     }
//     // &:hover {
//     //   box-shadow: none;
//     // }
//   }
// }
</style>