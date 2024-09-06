<script setup>
import { computed } from 'vue';
import TableHeader from '@/components/modules/table/components/TableHeader.vue';

import { generateCoupon } from '@/services/common';
import { useMainStore } from '@/stores';

const mainStore = useMainStore();
const showTable = () => {
  mainStore.setIsShowTable(!mainStore.isShowTable);
}

const cellsNumbers = computed(() => {
  return mainStore.randomCellsNumber.length ? mainStore.randomCellsNumber : 10;
});

</script>

<template>
  <div :class="['wrapper-table table-coupon', { 'wrapper-table--is-collapse': mainStore.isShowTable }]">
    <TableHeader text="купон(12)" is-eye :arrow-down="!mainStore.isShowTable" @click="showTable" />

    <!-- Table -->
    <div :class="['table', { 'table--is-collapse': mainStore.isShowTable }]">
      <div class="thead">
        <div class="row">
          <div class="cell">Шары</div>
          <div class="cell">Ставка</div>
          <div class="cell">X</div>
          <div class="cell">Выйгрыш</div>
        </div>
      </div>

      <div :class="['table-box', { 'table-box--is-collapse': mainStore.isShowTable }]">
        <div class="tbody">
          <div v-for="(coupon, idx) in cellsNumbers" :key="idx" class="row">
            <div class="cell-number">
              <span v-for="(ball, index) in coupon.balls" :key="index" class="number bgi">
                {{ ball }}
              </span>
            </div>
            <div class="cell">{{ coupon.bet }}</div>
            <div class="cell">{{ coupon.x_bet }}</div>
            <div class="cell">{{ coupon.total }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tfooter">
      <div class="row">
        <span class="cell">Итого</span>
        <span class="cell">1</span>
        <span class="cell">2</span>
        <span class="cell">3</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bgi {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}

.table {
  position: relative;
  top: -23px;
  width: calc(100% - 2px);
  margin-left: 1px;
  font-family: "Arial Narrow";
  border-left: 1px solid #DADADA;
  border-right: 1px solid #DADADA;
  font-size: 16px;
  font-weight: 600;

  .thead {
    .row {
      display: flex;
      .cell {
        position: relative;
        text-align: left;
        border-left: 1px solid #F5F9F7;
        &:first-child {
          width: 244px;
          padding-left: 10px;
        }
        &:nth-of-type(2) {
          text-align: center;
          width: 60px;
        }
        &:nth-of-type(3) {
          text-align: center;
          width: 30px;
        }
        &:nth-of-type(4) {
          text-align: center;
          width: 70px;
        }
      }
    }
  }

  .tbody {
    position: relative;
    .row {
      display: flex;
      height: 21px;
      .cell {
        border-left: 1px solid #fff;
        padding-left: 10px;
        &:nth-of-type(2) {
          width: 60px;
        }
        &:nth-of-type(3) {
          width: 30px;
        }
        &:nth-of-type(4) {
          width: 75px;
        }
      }
    }
  }

  .row {
    text-align: left;
    background-color: #9DCAB2;

    &:nth-of-type(2n + 1) {
      background-color: #C9E5D7;
    }

    .cell-number {
      display: flex;
      width: 244px;
      align-items: start;
      justify-content: flex-start;
      padding: 0 5px;
    }

    .number {
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/zone-lock2.png');
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 18px;
      font-size: 12px;
      margin-right: 2px;
      color: #fff;
      letter-spacing: 0.1px;
    }
  }
}

.table {
  overflow: scroll;
  height: 236px;
  transition: all 0.3s;

  &--is-collapse {
    height: 153px;
  }
}

.tfooter {
  position: relative;
  display: flex;
  align-items: center;
  top: -36px;
  left: -2px;
  width: 101%;
  height: 23px;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/bet-bot.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .row {
    display: flex;
    .cell {
      font-size: 17px;
      font-weight: bold;
      &:nth-of-type(1) {
        text-align: right;
        width: 250px;
        padding-right: 10px;
      }
      &:nth-of-type(2) {
        width: 57px;
        text-align: left;
        padding-left: 8px;
      }
      &:nth-of-type(3) {
        width: 31px;
      }
      &:nth-of-type(4) {
        width: 52px;
        text-align: left;
        padding-left: 10px;
      }
    }
  }
}

.table-box {
  height: 220px;
  overflow: scroll;
  transition: all 0.3s;
  &--is-collapse {
    height: 127px;
  }
}

.wrapper-table {
  position: absolute;
  bottom: 0;
  height: 289px;
  overflow: hidden;
  transition: all 0.3s;

  &--is-collapse {
    height: 203px;
  }
}

</style>
