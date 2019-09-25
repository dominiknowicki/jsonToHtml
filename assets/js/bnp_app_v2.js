const notAllowedEntryDatepicker = () => document.querySelectorAll('[name*="pbDatepicker"]').forEach(
    item => {
        item.autocomplete="off";
        item.addEventListener('input', () => item.value = '');
    }
);

document.addEventListener('DOMContentLoaded', function(){
  // Zablokowano mozliwosc dodawania daty przy wpisywaniu z klawiatury
  notAllowedEntryDatepicker();

  document.querySelectorAll('.text-only').forEach(item => item.addEventListener('input', (e) => {
    var inputVal = e.target.value;
    e.target.value = capitalizeFirstLetter(inputVal.replace(/[^a-zA-Z\ \.\-]+/g, ''));
  }));
  
  document.querySelectorAll('.text-number-only').forEach(item => item.addEventListener('input', (e) => {
    var inputVal = e.target.value;
    e.target.value = capitalizeFirstLetter(inputVal.replace(/[^a-zA-Z0-9\ \.\-\/]+/g, ''));
  }));
  
  const capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  document.querySelectorAll('.number-only').forEach(item => item.addEventListener('input', (e) => {
    var inputVal = e.target.value;
    e.target.value = inputVal.replace(/[^0-9\.\,]+/g, '');
  }));
  
  document.querySelectorAll('.digit-only').forEach(item => item.addEventListener('input', (e) => {
    var inputVal = e.target.value;
    e.target.value = inputVal.replace(/[^0-9]+/g, '');
  }));
  
});