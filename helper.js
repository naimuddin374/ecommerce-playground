

export const shortText = (str, len = 50) => {
   if (str !== null && str?.length >= len) {
      let result = str.substring(0, len);
      if (str.length > len) {
         result += '...'
      }
      return result;
   } else {
      return str;
   }
}