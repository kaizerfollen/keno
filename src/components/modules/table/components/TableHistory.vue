<script setup>
import { ref } from 'vue';

import TableHeader from '@/components/modules/table/components/TableHeader.vue';
import { generationData } from '@/services/common';
import { useMainStore } from '@/stores';

const mainStore = useMainStore();

const MAX_ROW_TABLE = 5;

const isShowTable = ref(false);

const showTable = () => {
  isShowTable.value = !isShowTable.value;
  mainStore.setIsShowTable(isShowTable.value);
};
</script>

<template>
  <div :class="['wrapper-table', { 'wrapper-table--is-show': mainStore.isShowTable }]">
    <TableHeader text="история" @click="showTable" :arrow-down="mainStore.isShowTable" />
    <table class="table">
      <thead class="thead">
        <tr class="row">
          <td class="cell">
            #
          </td>
          <td class="cell">Шары</td>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr class="row" v-for="(row, idx) in generationData(MAX_ROW_TABLE)" :key="idx">
          <td class="cell">
            {{ row.game }}
          </td>
          <td class="cell">
            <span v-for="(numb, index) in row.balls" :key="index + 1" class="number">{{ numb }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-table {
  height: 80px;
  overflow: hidden;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: all 0.3s ease;

  position: absolute;
  top: 0;

  &--is-show {
    height: 170px;
  }
}

.table {
  position: relative;
  top: -26px;
  width: calc(100% - 1px);
  margin-left: 0.1px;
  font-family: "Arial Narrow";
  border-left: 1px solid #DADADA;
  border-right: 1px solid #DADADA;
  font-size: 16px;
  font-weight: 600;

  .thead {
    .row {
      background-color: #EBF4EF;
      box-shadow: inset -1px -1px 7px rgba(0, 0, 0, 0.3);
    }
  }
  .row {
    display: flex;
    align-items: center;
    height: 22px;
    .cell {
      .number {
        text-align: center;
        display: inline-block;
        width: 14px;
        font-size: 16px;
        margin-right: 3px;
        letter-spacing: 0.1px;
      }
      &:nth-of-type(1) {
        width: 70px;
      }
      &:nth-of-type(2) {
        display: flex;
        text-align: left;
      }
    }
  }
  .tbody {
    position: relative;
    .row {
      background-color: #9DCAB2;
      &:nth-of-type(2n + 1) {
        background-color: #C9E5D7;
      } 
    }
    &:before {
      content: '';
      width: 1px;
      background-color: #E3F1EA;
      height: 100%;
      position: absolute;
      left: 63px;
    }
  }
}
</style>
