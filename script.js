function whatIsInTheDisplay(){
    return document.getElementById('output').innerText;
}
function clearDisplay(){
    document.getElementById('output').innerText=0;
}
function whichOperator(passedString){
    if(passedString=='+' || passedString=='-' || passedString=='*' || passedString=='/'){
        return 1;
    }
    else if(passedString=='.'){
        return 2;
    }
    else if(passedString>='0' && passedString<='9'){
        return 3;
    }
    else{
        return 0;
    }
}
function clearingIfGurbage(){
    if(document.getElementById('output').innerText.indexOf('Invalid')>=0  || document.getElementById('output').innerText.indexOf('undefined')>=0){
        clearDisplay();
        return true;
    }
    return false;
}
function calculate(leftOperand , operator , rightOperand){
    if(operator=='+'){
        return leftOperand+rightOperand;
    }
    else if(operator=='-'){
        return leftOperand-rightOperand;
    }
    else if(operator=='*'){
        return leftOperand*rightOperand;
    }
    else if(operator=='/'){
        return leftOperand/rightOperand;
    }
    else{
        return "Invalid";
    }
}
function resultOfTheDisplay(){
    if(whatIsInTheDisplay()=='0'){
        return;
    }
    else{
        var stringOfTheDisplay = whatIsInTheDisplay();
        var subUnitArray = '';
        var mainUnitArray = new Array();
        for (let i = 0; i < stringOfTheDisplay.length; i++) {
            if(i != stringOfTheDisplay.length - 1){
                if(whichOperator(stringOfTheDisplay[i])==0){
                    return 'Invalid Input : Unknown And Undefined ' + stringOfTheDisplay[i] + ' Symbols Are Used!';
                }
                else if(whichOperator(stringOfTheDisplay[i])==1){
                    if(whichOperator(stringOfTheDisplay[i+1])==1){
                        return 'Invalid Input : Operators Can Not Be Adjacent';

                    }
                    else if(whichOperator(stringOfTheDisplay[i+1])==2){
                        return 'Invalid Input : Fraction Sign And Operator Can Not Be Adjacent';

                    }
                    else if(whichOperator(stringOfTheDisplay[i+1])==0){
                        return 'Invalid Input : Unknown And Undefined ' + stringOfTheDisplay[i+1] + ' Symbols Are Used!';

                    }
                    else{
                        mainUnitArray.push(stringOfTheDisplay[i]);
                    }
                }
                else if(whichOperator(stringOfTheDisplay[i])==2){
                    if(whichOperator(stringOfTheDisplay[i+1])==2){
                        return 'Invalid Input : Fraction Signs Can Not Be Adjacent';

                    }
                    else if(whichOperator(stringOfTheDisplay[i+1])==1){
                        return 'Invalid Input : Fraction Sign And Operator Can Not Be Adjacent';

                    }
                    else if(whichOperator(stringOfTheDisplay[i+1])==0){
                        return 'Invalid Input : Unknown And Undefined ' + stringOfTheDisplay[i+1] + ' Symbols Are Used!';

                    }
                    else{
                        subUnitArray+=stringOfTheDisplay[i];
                    }
                }
                else{
                    subUnitArray+=stringOfTheDisplay[i];
                    if(whichOperator(stringOfTheDisplay[i+1])==0){
                        return 'Invalid Input : Unknown And Undefined ' + stringOfTheDisplay[i+1] + ' Symbols Are Used!';

                    }
                    else if(whichOperator(stringOfTheDisplay[i+1])==1){
                        var number = parseFloat(subUnitArray);
                        mainUnitArray.push(number);
                        subUnitArray='';
                    }
                }
            }
            else{
                if(whichOperator(stringOfTheDisplay[i])==3){
                    subUnitArray+=stringOfTheDisplay[i];
                    var number = parseFloat(subUnitArray);
                    mainUnitArray.push(number);
                    subUnitArray='';
                }
                else{
                    return 'Invalid Input : The Last Element Should Be A Number Not ' + stringOfTheDisplay[i];
                }
            }
        }
        if(mainUnitArray.length>1){
            if(mainUnitArray[0]=="-" && typeof(mainUnitArray[1])=='number'){
                mainUnitArray[1]*=(-1);
                mainUnitArray.shift();
            }
        }
        for(let i=0;i<mainUnitArray.length;i++){
            if(whichOperator(mainUnitArray[i])==1 && (mainUnitArray[i]=='*' || mainUnitArray[i]=='/')){
                if(i-1>=0 && i+1<mainUnitArray.length){
                    if(typeof(mainUnitArray[i-1])=='number' && typeof(mainUnitArray[i+1])=='number'){
                        var resultOfTheThree = calculate(mainUnitArray[i-1],mainUnitArray[i],mainUnitArray[i+1]);
                        if(isNaN(resultOfTheThree)){
                            return 'Invalid Input';
                        }
                        else{
                            mainUnitArray[i-1]=resultOfTheThree;
                            mainUnitArray.splice(i,2);
                            i--;
                        }
                    }
                    else{
                        return 'Invalid Input';

                    }
                }
                else{
                    return 'Invalid Input';
                }
            }
        }
        for(let i=0;i<mainUnitArray.length;i++){
            if(whichOperator(mainUnitArray[i])==1 && (mainUnitArray[i]=='+' || mainUnitArray[i]=='-')){
                if(i-1>=0 && i+1<mainUnitArray.length){
                    if(typeof(mainUnitArray[i-1])=='number' && typeof(mainUnitArray[i+1])=='number'){
                        var resultOfTheThree = calculate(mainUnitArray[i-1],mainUnitArray[i],mainUnitArray[i+1]);
                        if(resultOfTheThree=="Invalid"){
                            return 'Invalid Input';
    
                        }
                        else{
                            mainUnitArray[i-1]=resultOfTheThree;
                            mainUnitArray.splice(i,2);
                            i--;
                        }
                    }
                    else{
                        return 'Invalid Input';
                    }
                }
                else{
                    return 'Invalid Input';
                }
            }
        }
    } 
    return mainUnitArray[0];
}
function removingLastEnteredElementFromDisplay(){
    var stringOfTheDisplay = document.getElementById('output').innerText;
    stringOfTheDisplay = stringOfTheDisplay.substring(0,stringOfTheDisplay.length-1);
    if(stringOfTheDisplay==''){
        stringOfTheDisplay = '0';
    }
    document.getElementById('output').innerText=stringOfTheDisplay;
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
    clearingIfGurbage();
    var clickedButton = document.getElementById(idOfTheClickedButton);
    var clickedButtonValue = clickedButton.value;
    if(clickedButtonValue=='AC'){
        clearDisplay();
    }
    else if(clickedButtonValue=='<'){
        removingLastEnteredElementFromDisplay();
    }
    else if(clickedButtonValue=='='){
        if(clearingIfGurbage()){
            return;
        }
        var result = resultOfTheDisplay();
        if(isNaN(result)){
            document.getElementById('output').innerText = result;
            return;
        }
        var resultString = ''+result;
        var howManyDecimalPointsOfResultString;
        if(resultString.indexOf(".")>=0){
            howManyDecimalPointsOfResultString = resultString.length - resultString.indexOf('.');
        }
        if(howManyDecimalPointsOfResultString > 4){
            result = result.toFixed(4);
        }
        document.getElementById('output').innerText = result;
    }
    else{
        addingToTheDisplay(clickedButtonValue);
    }
}
document.getElementById('button-AC').addEventListener('click',function(){
    clickingButtons('button-AC');
})
document.getElementById('button-<').addEventListener('click',function(){
    clickingButtons('button-<');
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