function getNum(num) {
    var result = document.getElementById("result")

    result.value += num;    
}

function clrResult() {
    var result = document.getElementById("result")
    
    result.value = ''
}

function reslt() {
    var result = document.getElementById("result")
    
    result.value = eval(result.value)
}
function back() {
    var result = document.getElementById("result")

    result.value =  (result.value).substring(0,(result.value).length - 1)
}