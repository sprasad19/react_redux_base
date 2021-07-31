export const get_random = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };


 export function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }