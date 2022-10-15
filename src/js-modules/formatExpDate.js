export default function formatExpDate(date) {
   const filterDate = date.match(/\d{1,2}/);
   if (filterDate !== null) {
     const newDate = filterDate.join('');
     return newDate;
   } else {
      return '';
   }
}