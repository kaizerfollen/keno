/**
 * случайное число
 */

export const randomNumbers = (sizeLength) => {
  const numbers = Array.from({ length: sizeLength }, () => Math.floor(Math.random() * 80) + 1);
  console.log('Generated numbers:', numbers);
  return numbers;
};

/**
 * генерация случаынъ данных в таблице
 *
 */
export  const generationData = (rows, ballsLength = 20) => {
  return Array.from({ length: rows }, () => ({
    game: Math.floor(Math.random() * 1000000), // Генерируем случайное число для game
    balls: randomNumbers(ballsLength), // Генерируем массив случайных чисел для balls
  }));
};

/**
 * 
 * генерация случайного купона
 */
export const generateCoupon = (numCoupons) => {
  return Array.from({ length: numCoupons }, () => ({
      balls: randomNumbers(10), // Генерируем массив balls длиной 10
      bet: Math.floor(Math.random() * 10) + 1, // Случайное значение для bet от 1 до 10
      x_bet: Math.floor(Math.random() * 5) + 1, // Случайное значение для x_bet от 1 до 5
      total: Math.floor(Math.random() * 4) + 1 // Случайное значение для total от 1 до 1000
  }));
};


/**
 * Рандомный красный и синий цвет
 * 
 */
export const getRandomIndices = (count, max) => {
  const indices = new Set();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * max));
  }
  return Array.from(indices);
}

/**
 * Массив с данными о ячейках
 */
export const dataCells = Array.from({ length: 80 }, (_, index) => ({
  id: index + 1,
  isActive: false,
  isBlue: false,
  isRed: false,
  isRandom: false,
  isWin: false,
}));

const blueIndices = getRandomIndices(6, 80);
const redIndices = getRandomIndices(6, 80);

blueIndices.forEach(index => {
  dataCells[index].isBlue = true;
});

redIndices.forEach(index => {
  dataCells[index].isRed = true;
});