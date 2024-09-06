<script setup>
import { ref, watch, onBeforeUnmount, defineProps } from 'vue';

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  }
})

const numbers = ref([22, 54, 26, 13, 23, 34]);
const animatedValues = ref(Array(numbers.value.length).fill(0));
const intervals = [];

const animateNumber = (idx, endValue) => {
  let startValue = 0;
  const duration = 1000;
  const stepTime = Math.abs(Math.floor(duration / endValue));
  const interval = setInterval(() => {
    startValue += 1;
    if (startValue > endValue) {
      clearInterval(interval);
      startValue = endValue;
    }
    animatedValues.value[idx] = startValue;
  }, stepTime);
  intervals.push(interval);
};

const startAnimation = () => {
  numbers.value.forEach((number, idx) => {
    animateNumber(idx, number);
  });
};

watch(() => props.isActive, (newVal) => {
  if (newVal) {
    startAnimation();
  } else {
    intervals.forEach(clearInterval);
    animatedValues.value = Array(numbers.value.length).fill(0);
  }
});

onBeforeUnmount(() => {
  intervals.forEach(clearInterval);
});
</script>
<template>
  <div class="stat-screen">
    <div class="stat">
      <span class="text">рейтинг выпадения шаров за последние 10 раундов</span>
      <div class="img"></div>
      <div class="stat-fake">
        <div class="percent">
          <span
            v-for="(number, idx) in numbers"
            :style="{
              height: `${number}%`,
              animationDelay: `${idx * 0.3}s`,
              '--end-height': number + '%',
            }"
            :class="{ animated: isActive }"
            :key="idx"
          >
            {{ animatedValues[idx] }}%
          </span>
        </div>
        <div class="number">
          <span v-for="(number, idx) in [34, 44, 56, 58, 67, 69]" :key="idx">
            {{ number }}
          </span>
        </div>
      </div>
      <div class="stat-fake-cold">
        <div class="percent">
          <span
            v-for="(number, idx) in numbers"
            :style="{
              height: `${number}%`,
              animationDelay: `${idx * 0.3}s`,
              '--end-height': number + '%',
            }"
            :class="{ animated: isActive }"
            :key="idx"
          >
            {{ animatedValues[idx] }}%
          </span>
        </div>
        <div class="number">
          <span v-for="(number, idx) in [34, 44, 56, 58, 67, 69]" :key="idx">
            {{ number }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stat-screen {
  width: 680px;
  height: 438px;
  background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/tab-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  .stat {
    height: 438px;
    position: relative;
    .img {
      position: absolute;
      bottom: 17px;
      left: 11px;
      width: 656px;
      height: 377px;
      background-image: url('https://static1.flg10.bet/FLG.Space/release/games/Keno/resources/NG/hotcold-bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .text {
      display: inline-block;
      margin-top: 15px;
      font-weight: 600;
      color: #ffffff;
      font-size: 20px;
      text-transform: uppercase;
    }
  }

  .percent {
    position: relative;
    left: 69px;
    display: flex;
    align-items: flex-end;
    height: 123px;
    width: 595px;
    gap: 10px;
    font-size: 28px;
    color: #FE801B;
  
    span {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background-color: #C30001;
      width: 125px;
      font-family: "Arial Narrow";
      height: 0;
      transition: height 1s linear;
    }
    
    .animated {
      animation: growShrink 1s linear forwards;
    }
  }

  .number {
    font-size: 28px;
    color: #ffffff;
    width: 90%;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    left: 54%;
    transform: translate(-50%, 0%);
    top: 42%;
    font-weight: 600;
  }

  .stat-fake-cold {
    height: 110px;
    top: 81px;
    position: relative;
    .percent {
      height: 112px;
      width: 596px;
    }
    .number {
      top: 136px;
    }
  }
}
@keyframes growShrink {
  0% {
    height: 0;
  }
  50% {
    height: 80%;
  }
  70% {
    height: 70%;
  }
  100% {
    height: var(--end-height);
  }
}
</style>
