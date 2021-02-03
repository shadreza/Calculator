function whatIsInTheDisplay(){
    return document.getElementById('output').innerText;
}
function clearDisplay(){
    document.getElementById('output').innerText=0;
}
function isOperator(passedString){
    if(passedString=='+' || passedString=='-' || passedString=='*' || passedString=='/'){
        return true;
    }
    else{
        return false;
    }
}
function resultOfTheDisplay(){
    if(whatIsInTheDisplay()=='0'){
        return;
    }
    else{
        var stringOfTheDisplay = whatIsInTheDisplay();
        var subUnitArray = new Array();
        var mainUnitArray = new Array();
        for (let i = 0; i < stringOfTheDisplay.length; i++) {
            const iteratedValue = stringOfTheDisplay[i];
            subUnitArray.push(iteratedValue);
            if(i!=stringOfTheDisplay.length-1 && isOperator(iteratedValue) && isOperator(stringOfTheDisplay[i+1])){
                
            }
        }
    }
}
function addingToTheDisplay(passedString){
    if(passedString=='0' && whatIsInTheDisplay()=='0'){
        return;
    }
    else{
        if(whatIsInTheDisplay()=='0'){
            if(passedString>='0' && passedString<='9'){
                document.getElementById('output').innerText = passedString;
            }
            else{
                if(passedString == '-'){
                    document.getElementById('output').innerText = passedString;
                }
                else{
                    document.getElementById('output').innerText = whatIsInTheDisplay() +  passedString;
                }
            }
        }
        else{
            document.getElementById('output').innerText = whatIsInTheDisplay() +  passedString;
        }
    }
}
function clickingButtons(idOfTheClickedButton){
    var clickedButton = document.getElementById(idOfTheClickedButton);
    var clickedButtonValue = clickedButton.value;
    if(clickedButtonValue=='AC'){
        clearDisplay();
    }
    else if(clickedButtonValue=='='){
        resultOfTheDisplay();
    }
    else{
        addingToTheDisplay(clickedButtonValue);
    }
}
document.getElementById('button-AC').addEventListener('click',function(){
    clickingButtons('button-AC');
})
document.getElementById('button-%').addEventListener('click',function(){
    clickingButtons('button-%');
})
document.getElementById('button-/').addEventListener('click',function(){
    clickingButtons('button-/');
})
document.getElementById('button-7').addEventListener('click',function(){
    clickingButtons('button-7');
})
document.getElementById('button-8').addEventListener('click',function(){
    clickingButtons('button-8');
})
document.getElementById('button-9').addEventListener('click',function(){
    clickingButtons('button-9');
})
document.getElementById('button-*').addEventListener('click',function(){
    clickingButtons('button-*');
})
document.getElementById('button-4').addEventListener('click',function(){
    clickingButtons('button-4');
})
document.getElementById('button-5').addEventListener('click',function(){
    clickingButtons('button-5');
})
document.getElementById('button-6').addEventListener('click',function(){
    clickingButtons('button-6');
})
document.getElementById('button--').addEventListener('click',function(){
    clickingButtons('button--');
})
document.getElementById('button-1').addEventListener('click',function(){
    clickingButtons('button-1');
})
document.getElementById('button-2').addEventListener('click',function(){
    clickingButtons('button-2');
})
document.getElementById('button-3').addEventListener('click',function(){
    clickingButtons('button-3');
})
document.getElementById('button-+').addEventListener('click',function(){
    clickingButtons('button-+');
})
document.getElementById('button-0').addEventListener('click',function(){
    clickingButtons('button-0');
})
document.getElementById('button-.').addEventListener('click',function(){
    clickingButtons('button-.');
})
document.getElementById('button-=').addEventListener('click',function(){
    clickingButtons('button-=');
})
