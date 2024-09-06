<script setup>

</script>

<template>
  <div class="bottom-control">
    <div class="mute">
      <img v-if="true" class="img" src="https://static1.flg10.bet/FLG.Space/release/libs/FLGUtils/resources/audio/sound_icon.png" alt="sound" />
      <img v-else class="img" src="https://static1.flg10.bet/FLG.Space/release/libs/FLGUtils/resources/audio/mute_icon.png" alt="mute">
    </div>
    <span class="text">автоигра</span>
    <div class="balance">
      <span>Баланс: 8 342 343.54</span>
      <div class="currency">
        <span class="text">KZT</span>
        <span class="text">(тенге)</span>
      </div>
    </div>
    <span class="bet">Ставка: 0.00</span>
    <span class="win">Макс. Выйгрыш: 0.00</span>
  </div>
</template>

<style lang="scss">
.bottom-control {
  display: flex;
  align-items: center;
  background-color: #151515;
  color: #B8B8B8;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  padding-left: 10px;

  .text {
    text-transform: uppercase;
    cursor: pointer;
  }

  .img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  
  .mute {
    margin-right: 10px;
    opacity: 0.7;
    cursor: pointer;
  }

  .balance {
    display: flex;
    padding-left: 250px;
    .currency {
      display: flex;
      flex-direction: column;
      .text {
        padding-left: 5px;
        font-size: 6px;
      }
    }
  }
  .bet {
    padding-left: 70px;
  }
  .win {
    padding-left: 70px;
  }
}
</style>
