export default function validateName(name) {
   let validity = true;
   let errorMessage = '';

   if (name === '') {
      validity = false;
      errorMessage = "Can't be blank";
   } else if (/^([A-Za-z]+\s?)+$/.test(name) === false) {
      validity = false;
      errorMessage = "Wrong format, letters only";
   }
   return [validity, errorMessage];
}