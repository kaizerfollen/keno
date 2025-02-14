import { defineStore } from 'pinia';
import { dataCells, getRandomIndices, randomNumbers } from '@/services/common';
import AudioButtonClick from '@/assets/audio/buttonClick.mp3';
import AudioBallCollision from '@/assets/audio/ballCollision.mp3';

const BALLS_LENGTH = 20;

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      isShowTable: false,
      dataCells: dataCells,
      steps: [1, 2, 3],
      isEye: false,
      randomCount: 1,
      randomCellsNumber: Array(10).fill({ balls: '', bet: '', x_bet: '', total: '' }),
      activeScreen: 'game',
      isShowCoef: false,
      indicatorProgress: 0,
      currentStep: 1,
      randomNumbers: randomNumbers(BALLS_LENGTH),
    };
  },

  getters: {
    getDataCells: (state) => {
      return state.dataCells;
    },
    getIsShowTable: (state) => {
      return state.isShowTable;
    },

    getRandomNumbers: (state) => {
      return state.randomNumbers;
    },
  },

  actions: {
    initializeAudio() {
      this.audio = new Audio(AudioBallCollision);
    },
    setRandomNumbers() {
      this.randomNumbers = randomNumbers(BALLS_LENGTH);;
    },
    setStep(payload) {
      this.currentStep = this.steps.find(step => step === payload);
    },
    setProgress(payload) {
      this.indicatorProgress = payload;
    },

    setActiveScreen(payload) {
      this.activeScreen = payload;
      const audio = new Audio(AudioButtonClick);
      audio.play();
    },

    setIsShowTable(payload) {
      this.isShowTable = payload;
    },

    setActiveCell(payload) {
      this.dataCells = this.dataCells.map(cell =>
        cell.id === payload.id ? { ...cell, isActive: !cell.isActive } : cell
      );
    },

    async setIsWinCell(payload) {
      this.dataCells.forEach(cell => {
        cell.isWin = false;
      });

      const audio = new Audio(AudioBallCollision);
    
      for (const number of payload) {
        const cell = this.dataCells.find(cell => cell.id === number);
        if (cell) {
          cell.isWin = true;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        audio.play();
      }
    },

    setIsEye(payload) {
      this.isEye = payload;
    },

    setRandomCount() {
      if (this.randomCount <= 9) {
        this.randomCount += 1;
      } else {
        this.randomCount = 1
      }
    },

    setRandomBetNumber() {
      const randomIndices = getRandomIndices(this.randomCount, this.dataCells.length);

      randomIndices.forEach(index => {
        this.dataCells[index].isCoupon = true;
      });

      // Создаём объект с новыми данными
      const newEntry = {
        balls: randomIndices.map(idx => this.dataCells[idx].id),
        bet: Math.floor(Math.random() * 10) + 1,
        x_bet: Math.floor(Math.random() * 5) + 1,
        total: Math.floor(Math.random() * 4) + 1,
      };

      // Добавляем новый объект в randomCellsNumber
      this.randomCellsNumber = [
        ...this.randomCellsNumber.filter(entry => entry.balls.length > 0),
        newEntry,
        ...Array(10).fill({ balls: [], bet: '', x_bet: '', total: '' }),
      ].slice(0, 10);
    },

    setShowCoef(payload) {
      this.isShowCoef = payload;
    },

    addBet() {
      const filtersCells = this.dataCells.filter(el => el.isActive)

      filtersCells.forEach(index => {
        this.dataCells[index.id - 1].isCoupon = true;
      });

      // Создаём объект с новыми данными
      const newEntry = {
        balls: filtersCells.map(idx => this.dataCells[idx.id - 1].id),
        bet: Math.floor(Math.random() * 10) + 1,
        x_bet: Math.floor(Math.random() * 5) + 1,
        total: Math.floor(Math.random() * 4) + 1,
      };

      // Добавляем новый объект в randomCellsNumber
      this.randomCellsNumber = [
        ...this.randomCellsNumber.filter(entry => entry.balls.length > 0),
        newEntry,
        ...Array(10).fill({ balls: [], bet: '', x_bet: '', total: '' }),
      ].slice(0, 10);

      filtersCells.forEach(index => {
        this.dataCells = this.dataCells.map(cell =>
          cell.id === index.id ? { ...cell, isActive: !cell.isActive } : cell
        );
      });
    }
  },
});
