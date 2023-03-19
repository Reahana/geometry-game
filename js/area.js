//Triangle
document.getElementById('triangleCalBtn').addEventListener('click',function(){
    const b =getInputValue1('triangle-b');
    const h = getInputValue2('triangle-h')
    const area = (0.5 * b * h).toFixed(2);
    const show = document.getElementById('areaOfTriangle');
    show.innerText = "1. Triangle "+ area + "cm"
  
})
//Rectangle
document.getElementById('rectangleCalBtn').addEventListener('click',function(){
    
    const w =getInputValue1('rectangle-w');
    const l = getInputValue2('rectangle-l')
    const area =  (w * l).toFixed(2);
    const show = document.getElementById('areaOfRectangle');
    show.innerText = "2. Rectangle "+ area + "cm"
})
//Parallelogram
document.getElementById('parallelogramCalBtn').addEventListener('click',function(){
    const b=10;
    const h=12;
    const area =  (b * h).toFixed(2);
    const show = document.getElementById('areaOfParallelogram');
    show.innerText = "3. Parallelogram "+ area + "cm"
  
})
//Rhombus
document.getElementById('rhombusCalBtn').addEventListener('click',function(){
    const d1=16;
    const d2 =8;
    const area = (0.5* d1 * d2).toFixed(2);
    const show = document.getElementById('areaOfRhombus');
    show.innerText = "4. Rhombus "+ area + "cm"
  
})
//Pentagon
document.getElementById('pentagonCalBtn').addEventListener('click',function(){
    const p=6;
    const b=10;
    const area = (0.5* p * b).toFixed(2);
    const show = document.getElementById('areaOfPentagon');
    show.innerText = "5. Pentagon "+ area + "cm"
  
})
//Ellipse
document.getElementById('ellipseCalBtn').addEventListener('click',function(){
    const pi = 3.14
    const a=10;
    const b =4;
    const area = (pi* a * b).toFixed(2);
    const show = document.getElementById('areaOfEllipse');
    show.innerText = "6. Ellipse "+ area + "cm"
  
})