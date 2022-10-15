export default function formatNumber(number) {
   const filterNum = number.match(/\w/g);
   if (filterNum !== null) {
      const arr = filterNum.join('')
      .split('');
      const newArr = [];
      for (let i = 0; i < arr.length && i < 16; i++) {
         if (i%4 === 0) {
            newArr.push([]);
         }
         const subArray = Math.floor(i/4);
         newArr[subArray].push(arr[i]);
      }
      const formattedNumber = newArr.map(item => item.join(''))
      .join(' ')
      return formattedNumber;
   } else {
      return '';
   }
}