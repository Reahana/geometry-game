document.getElementById('rectangleCalBtn').addEventListener('click',function(){
    
    const w =getInputValue1('rectangle-w');
    const l = getInputValue2('rectangle-l')
    const area =  w * l;
    const show = document.getElementById('areaOfRectangle');
    show.innerText = "2. Rectangle "+ area + "cm"
})