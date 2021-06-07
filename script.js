function gethistory(){
    return document.getElementById("history-val").innerText;
}

function printhistory(num){
    document.getElementById("history-val").innerText=num;
}

function printresult(num){
    if(num == ""){
        document.getElementById("result").innerText = num;
    }
    else{
    document.getElementById("result").innerText=getformatednum(num);
    }
}

function getformatednum(num){
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function getresult(){
    return document.getElementById("result").innerText;
}

function revformatednum(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");

for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){

        if(this.id == "clear"){
            printresult("");
            printhistory("");
        }
        else if(this.id =="backspace"){
            var output = revformatednum(getresult()).toString(); //remove the coma
            if(output){
                output = output.substr(0,output.length-1);   
                printresult(output);
            }
        }
        else{
            var output = getresult();
            var history = gethistory();
            if(output =="" && history != ""){
                if(isNaN(history[history.length-1])){           //
                    history = history.substr(0,history.length-1);   //

                }

            }
            if (output != "" || history != "") {                                     //
                output = output == "" ? output : output = revformatednum(output);   //
                history = history + output;                         //
                if(this.id == "="){
                    var result = eval(history);
                    printresult(result);
                    printhistory("");
                }
                else{
                    history = history + this.id;
                    printhistory(history);
                    printresult("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");

for(var i=0; i<number.length; i++){
    number[i].addEventListener('click',function(){
       
        var output = revformatednum(getresult());  //to get on display value before this click
        if(output !=NaN){
            output = output + this.id;
            printresult(output);
        }
    });
}