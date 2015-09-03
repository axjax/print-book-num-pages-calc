amountSheetsBooklet = 4;


function BasicNumbersMatrix(){
    r = [4];
    r[4] = [[16,1,14,3,12,5,10,7], [8,9,6,11,4,13,2,15]];
    return r;
}

function goClick(){
    iteration = +this.id;
    startPage = document.forms["options"].startPage.value;
    finishPage = document.forms["options"].finishPage.value;
    this.disabled = true;
    printProcess(iteration,startPage,finishPage);
    return false;
}

function printProcess(iteration,startPage,finishPage){

    amountBuclets = Math.floor((finishPage - startPage)/(amountSheetsBooklet*4));
    if (amountBuclets < (iteration/2))
        return false;

    numbersPages = calcNumbersPages(startPage,iteration,amountSheetsBooklet);
    prntInterations(numbersPages);
}


function calcNumbersPages(startPage,iteration,amountSheetsBooklet){
    basicNumbersMatrix = new BasicNumbersMatrix();
    numsPages = '';
    basicNumbersMatrix[amountSheetsBooklet][iteration%2].forEach(function(v){
        v += (+startPage - 1)+(4*amountSheetsBooklet*Math.floor(iteration/2));
        if (numsPages == '')
            numsPages = v;
        else
            numsPages += ', ' + v;
    });
    return numsPages;
}

function prntInterations(numsPages){
    iterationsInterface = document.getElementById("iterationsInterface");

    buttonNextIteration = document.createElement("button");
    buttonNextIteration.innerHTML = "готово";
    buttonNextIteration.id = 1 + iteration;

    textNumbersPages = document.createElement("input");
    textNumbersPages.type = 'text';

    textNumbersPages.className = 'numbers';

    iterationsInterface.innerHTML += '<br>';
    iterationsInterface.appendChild(textNumbersPages);
    textNumbersPages = document.getElementsByClassName('numbers');
    textNumbersPages = textNumbersPages[textNumbersPages.length - 1];
    textNumbersPages.value = numsPages;
    textNumbersPages.focus();
    textNumbersPages.select();

    console.log(textNumbersPages);


    iterationsInterface.appendChild(buttonNextIteration);
    document.getElementById(iteration + 1).onclick = goClick;

}

document.getElementById('0').onclick = goClick;



