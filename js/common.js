function getInputValue1(inputId1){
    const inputField1 = document.getElementById(inputId1)
    const inputField1Value = parseFloat(inputField1.value);
    inputField1.value ='' ;
    return inputField1Value ; 
}
function getInputValue2(inputId2){
    const inputField2 = document.getElementById(inputId2)
    const inputField2Value = parseFloat(inputField2.value);
    inputField2.value ='' ;
    return inputField2Value ; 
}