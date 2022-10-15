export default function formatName(name) {
   const filterName = name.match(/[A-Za-z]+\s?/g);
   if (filterName !== null) {
      const formattedName = filterName.join('')
      .toUpperCase();
      return formattedName;
   } else {
      return '';
   }
}