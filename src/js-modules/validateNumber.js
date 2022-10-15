export default function validateNumber(number) {
   let validity = true;
   let errorMessage = '';

   if (number === '') {
      validity = false;
      errorMessage = "Can't be blank";
   } else if (/[A-Za-z]/.test(number)) {
      validity = false;
      errorMessage = "Wrong format, numbers only";
   } else if (/^([0-9]{4}\s?){4}$/.test(number) === false) {
      validity = false;
      errorMessage = "Wrong format, missing numbers";
   }
   return [validity, errorMessage];
}