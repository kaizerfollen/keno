<script setup>

</script>

<template>
<div class="history-row">
  <div class="history-row__header">
    <span>KENO 4MIN</span>
    <span>#802158 06.09.2024 04:56</span>
  </div>
  <div class="history-row__content">
    <div v-for="(ball, idx) in 20" :key="idx" class="ball">{{ ball }}</div>
  </div>
  <div class="history-row__footer">
    <div class="left">
      <span class="coef">Qt. <span class="bold">20</span></span>
      <span class="bet">Ставка <span class="bold">20</span></span>
    </div>
    <div class="right">
      Выйгрыш <span class="bold">0</span>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.ball {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 32px;
  height: 32px;
  background-image: url('https://static1.flg10.bet/History_project/img/ball-keno.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.history-row {
  border-radius: 5px;
  &__header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    background-color: #d2d0cc;
    padding: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &__content {
    display: flex;
    background-color: #fff;
    padding: 10px;
    gap: 2px;
    justify-content: space-around;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-weight: bold;
    background-color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    .left, .right {

      .bet {
        font-size: 16px;
        margin-left: 10px;
      }
      .bold {
        font-size: 18px;
        font-weight: bold;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
    }

  }
}
</style>
