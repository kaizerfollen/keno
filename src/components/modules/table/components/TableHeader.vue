<script setup>
import { ref } from 'vue';
import { useMainStore } from '@/stores';

const mainStore = useMainStore();

const isOnEye = ref(false)

const toggleEye = (event) => {
  event.stopPropagation();
  isOnEye.value = !isOnEye.value
  mainStore.setIsEye(isOnEye.value)
}

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  isEye: {
    type: Boolean,
    default: false,
  },
  arrowDown: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="table-header">
    <div class="top">
      <spa class="text">{{ props.text }}</spa>
      <div v-if="isEye" class="eye">
        <img v-if="mainStore.isEye" class="img" @click="toggleEye" src="https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/eye-icon-min.png" alt="" />
        <img v-else class="img" @click="toggleEye" src="https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/eye-closed-icon-min.png" alt="" />
      </div>

      <img
        :class="['arrow', { 'arrow--is-down': props.arrowDown }, {'arrow--is-down-second-table': !props.arrowDown }]"
        src="https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/expand.png" alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  height: 60px;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/table-header.png');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .eye {
      display: flex;
      align-items: center;
      .img {
        margin-top: 7px;
        width: 30px;
        height: 20px;
      }
    }
  }
  .text {
    margin-top: 7px;
    font-size: 24px;
    font-family: 'Calibri';
    font-weight: 500;
    margin-left: 10px;
    text-transform: uppercase;
  }
  .arrow {
    width: auto;
    height: 15px;
    margin-right: 10px;
  }
  .bottom {
    width: calc(100% - 5px);
    margin: 0 auto;
    border-left: 1px solid #DADADA;
    border-right: 1px solid #DADADA;
  }
}

.arrow {
  transition: all 0.3s;

  &--is-down {
    transform: rotate(90deg);
  }
  &--is-down-second-table {
    transform: rotate(0deg);
  }
}
</style>
