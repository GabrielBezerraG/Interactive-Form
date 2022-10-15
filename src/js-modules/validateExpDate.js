export default function validateExpDate(date) {
   let validity = true;
   let errorMessage = '';

   if (date === '') {
      validity = false;
      errorMessage = "Can't be blank";
   }
   return [validity, errorMessage];
}