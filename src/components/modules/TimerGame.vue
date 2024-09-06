<script setup>
import { ref, computed, onMounted, onUnmounted, watch, defineEmits } from 'vue';
import { useMainStore } from '@/stores';
const mainStore = useMainStore();

const emit = defineEmits(['set-progress'])
const totalTime = ref(10); // 120 sec
const timeLeft = ref(totalTime.value);
let timerInterval = null;
let timerTimeout = null;

const minutes = computed(() => Math.floor(timeLeft.value / 60).toString().padStart(2, '0'));
const seconds = computed(() => (timeLeft.value % 60).toString().padStart(2, '0'));

const startTimer = () => {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1;
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }, 1000);
};

const progress = computed(() => ((totalTime.value - timeLeft.value) / totalTime.value) * 100);

watch(() => progress.value, (newValue) => {
  emit('set-progress', newValue);
  mainStore.setProgress(newValue);
  if (newValue === 100) {
    mainStore.setStep(2);
  }
});


watch(() => mainStore.currentStep, (newValue) => {
  if (newValue === 2) {
    timerTimeout = setTimeout(() => {
      mainStore.setStep(3);
    }, 2000)
  }
})

const resetTimer = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft.value = totalTime.value;
};

onMounted(() => {
  mainStore.initializeAudio();
  startTimer();
  // 1 start
  mainStore.setStep(1);
})

onUnmounted(() => {
  clearInterval(timerInterval);
  clearInterval(timerTimeout);
});
</script>

<<template>
  <p> {{ minutes }}:{{ seconds }}</p>
  <!-- <button @click="startTimer">Старт</button>
  <button @click="resetTimer">Сброс</button> -->
</template>

<style lang="scss" scoped>

</style>