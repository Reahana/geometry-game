
document.getElementById('triangleCalBtn').addEventListener('click',function(){
    const b =getInputValue1('triangle-b');
    const h = getInputValue2('triangle-h')
    const area = 0.5 * b * h;
    const show = document.getElementById('areaOfTriangle');
    show.innerText = "1. Triangle "+ area + "cm"
  
})