export default function validateCvc(cvc) {
   let validity = true;
   let errorMessage = '';

   if (cvc === '') {
      validity = false;
      errorMessage = "Can't be blank";
   } else if (/\d{3}/.test(cvc) === false) {
      validity = false;
      errorMessage = "Missing numbers";
   }
   return [validity, errorMessage];
}