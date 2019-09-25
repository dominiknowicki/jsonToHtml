document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  let inputStr;
  let inputObj;
  let inputEl = $("#input-textarea");
  let outputContainerEl = $("#output-container");
  // let containerToAppendEl = $('<div class="container"></div>');
  

  fetch('./test1.json')
    .then(resp => inputEl.val(JSON.parse(resp)))
    .then(blob => {})
  .catch(() => alert('oh no!'));

  $.fileDownload('./test1.json')
    .done(function () { 
      alert('File download a success!'); 
    })
    .fail(function () { 
      alert('File download failed!'); 
    });

  $("#input-convert").click(function(){
    inputStr = inputEl.val().trim();
    console.log('inputStr', inputStr);
    inputObj = JSON.parse(inputStr);
    console.log('inputObj', inputObj); 
    // outputContainerEl.empty();
    let containerToAppendEl = $('<div class="container"></div>');
    outputContainerEl.html(fromObject("JSON", inputObj, containerToAppendEl));
  });
});

var labelFromArrayKey = function (key) {
  return '<div class="row">Array key: ' + key.toString() + '</div>';
}
var fromArray = function (inputObj, outputContainerEl) {
  console.log('isArray');
}

var labelFromObjectKey = function (key) {
  return '<div class="row">Object key: ' + key.toString() + '</div>';
}
var fromObject = function (key, inputObj, containerTempEl) {
  Object.keys(inputObj).forEach(function (key, index) {
    let value = inputObj[key];
    if (Array.isArray(value)) {
      containerTempEl.append(labelFromArrayKey(key));
      containerTempEl.append(fromArray(key, value, containerTempEl));
    } else if (typeof (value) === "object") {
      containerTempEl.append(labelFromObjectKey(key));
      containerTempEl.append(fromObject(key, value, containerTempEl));
    } else {
      containerTempEl.append(labelFromBasicKey(key));
      containerTempEl.append(fromBasic(key, value, containerTempEl));
    }
    
  });
  return containerTempEl;
}

var labelFromBasicKey = function (key) {
  return '<div class="row">Basic key:' + key.toString() +'</div>';
}
var fromBasic = function (inputObj, outputContainerEl) {
  return '<div class="row">Basic value:' + inputObj.toString() + '</div>';
}