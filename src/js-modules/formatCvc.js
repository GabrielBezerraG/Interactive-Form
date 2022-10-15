export default function formatCvc(cvc) {
   const filterCvc = cvc.match(/\d{1,3}/);
   if (filterCvc !== null) {
      const newCvc = filterCvc.join('')
      return newCvc;
   } else {
      return '';
   }
}