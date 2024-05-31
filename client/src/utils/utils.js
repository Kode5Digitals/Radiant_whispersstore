
// export function Capitalize(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }
export function Capitalize(word) {
    if (typeof word !== 'string' || word.length === 0) {
      return ''  // Return an empty string if the input is not a valid string
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
export function Truncate(string, limit) {
    let dots = "...";
    if (string.length > limit) {
        string = string.substring(0, limit) + dots;
    }
    return string;
}
export function formatAmount(amount) {
    return amount.toLocaleString();
  }
  export function  formatPrice (price)  {
    return price.toLocaleString('en-NG')
    
  }
  