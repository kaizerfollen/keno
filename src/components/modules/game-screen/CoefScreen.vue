<script setup>
const leftSide = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const tables = [
  {
    key: 1,
    value: ['','','','','','','7','8','9','10']
  },
  {
    key: 2,
    value: ['3.5','1','','','','','','','','']
  },
  {
    key: 3,
    value: ['','10','2','1','1','','','','',''],
  },
  {
    key: 4,
    value: ['','','50','10','3','2','2','','',''],
  },
  {
    key: 5,
    value: ['','','','100','20','15','4','5','1',''],
  },
  {
    key: 6,
    value: ['','','','','150','60','20','15','10','5'],
  },
  {
    key: 7,
    value: ['','','','','','500','80','50','25','30'],
  },
  {
    key: 8,
    value: ['','','','','','','1000','200','125','100'],
  },
  {
    key: 9,
    value: ['','','','','','','','2000','1000','300'],
  },
  {
    key: 10,
    value: ['','','','','','','','','5000','2000'],
  },
  {
    key: 11,
    value: ['','','','','','','','','','10000'],
  },
]
</script>

<template>
<div class="coef-screen">
  <div class="stat">
    <span class="text">рейтинг выпадения шаров за последние 10 раундов</span>
    <div class="img"></div>
    <div class="top-text">
      <span class="title">выбрано шаров</span>
      <div class="numbers">
        <div v-for="(numb, idx) in 10" :key="idx" class="numb">{{ numb }}</div>
      </div>
    </div>
    <div class="left-text">
      <span class="title">выбрано шаров</span>
      <div class="numbers">
        <div v-for="(numb, idx) in leftSide" :key="idx" class="numb">{{ numb }}</div>
      </div>
    </div>
    <div class="table">
      <div v-for="(cell, idx) in tables" :key="idx" class="tr">
        <div v-for="(td, item) in cell.value" :key="item" class="td">{{ td }}</div>
      </div>
    </div>
  </div>
</div>
</template>


<style lang="scss" scoped>
.coef-screen {
  width: 680px;
  height: 438px;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .stat {
    height: 438px;
    position: relative;
  }

  .img {
    background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/table_coefficients_green.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: absolute;
    bottom: 17px;
    left: 11px;
    width: 656px;
    height: 377px;
  }

  .text {
    display: inline-block;
    margin-top: 15px;
    font-weight: 600;
    color: #ffffff;
    font-size: 20px;
    text-transform: uppercase;
  }

  .top-text {
    position: absolute;
    z-index: 1;
    width: 100%;
    color: #313131;
    font-weight: 600;
    font-size: 18px;
    top: 48px;
    left: 35px;

    .title {
      text-transform: uppercase;
    }
    .numbers {
      position: relative;
      display: grid;
      width: 88%;
      left: 36px;
      top: 14px;
      grid-template-columns: 39px 42px 41px 61px 60px 61px 71px 70px 71px 79px;
      .numb {

      }
    }
  }

  .left-text {
    display: flex;
    position: absolute;
    z-index: 1;
    color: #313131;
    font-weight: 600;

    .title {
      position: absolute;
      width: 163px;
      color: #313131;
      font-weight: 600;
      top: 210px;
      left: -62px;
      transform: rotate(-90deg);
      text-transform: uppercase;
    }

    .numbers {
      position: relative;
      display: grid;
      align-items: center;
      grid-template-rows: 28px 28px 30px 28px 26px 32px 26px 31px 28px 31px 26px;
      top: 69px;
      left: 37px;
    }
  }

  .table {
    width: 88%;
    left: 70px;
    top: 23%;
    height: 73%;
    position: absolute;
    color: #ffffff;
    font-size: 12px;
    .tr {
      display: grid;
      height: 29px;
      align-items: center;
      font-weight: 600;
      color: #fff;
      font-size: 14px;
      grid-template-rows: 28px 28px 30px 28px 26px 32px 26px 31px 28px 31px 26px;
      grid-template-columns: 39px 42px 41px 61px 60px 61px 71px 70px 71px 79px;
    }
  }
}
</style>
