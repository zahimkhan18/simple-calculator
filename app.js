function addvalue(num) {
  var inputfeild = document.getElementById("inputfeild");
  inputfeild.value += num;
}

function result() {
  var inputfeild = document.getElementById("inputfeild");
  inputfeild.value = eval(inputfeild.value);
}
function AllClearValue() {
  var inputfeild = document.getElementById("inputfeild");
  inputfeild.value = "";
}
function SingleClearValue() {
  var inputfeild = document.getElementById("inputfeild");
  inputfeild.value = inputfeild.value.slice(0, -1);
}
