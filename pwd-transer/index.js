window.addEventListener('load', function(){
  var btnToSave = document.querySelector('#btnToSave');
  var btnToUse = document.querySelector('#btnToUse');
  var pwdTransForm = function(input, type){
    var a1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", ".", "@", "/"],
        a2 = ["X", "Y", "U", "m", "V", "x", "P", "Q", "F", "M", "o", "N", "q", "b", "L", "t", "K", "g", "y", "h", "l", "A", "z", "s", "E", "f", "i", "d", "w", "n", "k", "D", "u", "e", "p", "j", "c", "G", "J", "C", "v", "a", "r", "O", "?", "I", "T", "S", "R", "#", "W", "Z", "7", "9", "5", "^", "2", "4", "1", "6", "0", "3", "B", "H", "8", "&"],
        inArr = input.split(''),
        arr = {},
        o = [];
    var re = new RegExp(',', 'g');
    if (type === 'save') {
      for (let i in a1) {
        arr[a1[i]] = a2[i];
      }
    } else if (type === 'use') {
      for (let i in a1) {
        arr[a2[i]] = a1[i];
      }
    }
    for (let j in inArr) {
      o[j] = arr[inArr[j]];
    }
    return o.join().replace(re, '');
  };
  var btnClick = function(type){
    var input = document.getElementById('pwd').value,
        output = document.getElementById('output');
    output.innerHTML = pwdTransForm(input, type);
  };
  btnToSave.addEventListener('click', function(){ btnClick('save'); });
  btnToUse.addEventListener('click', function(){ btnClick('use'); });
});
