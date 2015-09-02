amountSheetsBooklet = 4;


function BasicNumbersMatrix(){
    r = [4];
    r[4] = [[16,1,14,3,12,5,10,7], [8,9,6,11,4,13,2,15]];
    return r;
}



function printProcess(iteration){
    if (iteration == undefined) iteration = 0;
    basicNumbersMatrix = new BasicNumbersMatrix();

    startPage = document.forms["options"].startPage.value;
    finishPage = document.forms["options"].finishPage.value;
    amountBuclets = Math.floor((finishPage - startPage)/(amountSheetsBooklet*4));
    if (amountBuclets > iteration)
        prntInterations(startPage,iteration,amountSheetsBooklet,basicNumbersMatrix);

    console.log(basicNumbersMatrix[amountSheetsBooklet][iteration%2]);
    //alert(amountBuclets);
    return false;
}
function prntInterations(startPage,iteration,amountSheetsBooklet,basicNumbersMatrix){
    t = '';
    basicNumbersMatrix[amountSheetsBooklet][iteration%2].forEach(function(v){
        v += (+startPage - 1)+(4*amountSheetsBooklet*Math.floor(iteration%2));
        if (t == '')
            t = v;
        else
            t += ', ' + v;
    })
        t += '  <button name="start" onclick="printProcess('+(++iteration)+')">готово</button>'

    iterationsInterface = document.getElementById("iterationsInterface").innerHTML = t;

   // iterationsInterface.innerText = ;
}



