<script setup>
import CellControl from '@/components/modules/cell/CellControl.vue';
import { useMainStore } from '@/stores';
const mainStore = useMainStore();

const controlBtns = [
  {
    text: 'статист',
    key: 'stat',
    id: 1,
  },
  {
    text: 'история',
    key: 'history',
    id: 2,
  },
  {
    text: 'видео',
    key: 'video',
    id: 3,
  },
  {
    text: 'игра',
    key: 'game',
    id: 4,
  }
].reverse()
</script>

<template>
  <div class="control-buttons">
    <CellControl
      v-for="cell in controlBtns"
      :key="cell.id"
      :text-btn="cell.text"
      :is-active="cell.key === mainStore.activeScreen"
      @click="mainStore.setActiveScreen(cell.key)"
    />
  </div>
</template>

<style lang="scss" scoped>
.control-buttons {
  display: grid;
  height: 100%;
  grid-template-rows: repeat(4, 109px);
  justify-content: center;
  align-items: center;
}
</style>
