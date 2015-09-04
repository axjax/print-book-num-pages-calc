AMOUNT_SHEETS_BOOKLET = 4;
LENGH_LINE_LIM = 32;


function BasicNumbersMatrix(){
    r = [4];
    r[4] = [[16,1,14,3,12,5,10,7], [8,9,6,11,4,13,2,15]];
    return r;
}

function goClick(){//point in
    iteration = +this.id;
    startPage = document.forms["options"].startPage.value;
    finishPage = document.forms["options"].finishPage.value;
    this.disabled = true;
    printProcess(iteration,startPage,finishPage);
    return false;
}

function printProcess(iteration,startPage,finishPage){
    amountBuclets = Math.floor((finishPage - startPage)/(AMOUNT_SHEETS_BOOKLET*4));
    if (amountBuclets < (iteration/2))
        return false;

    numbersPages = calcNumbersPages(startPage,iteration,AMOUNT_SHEETS_BOOKLET);
    prntInterations(numbersPages);
}


function calcNumbersPages(startPage,iteration,AMOUNT_SHEETS_BOOKLET){
    basicNumbersMatrix = new BasicNumbersMatrix();
    numsPages = '';
    basicNumbersMatrix[AMOUNT_SHEETS_BOOKLET][iteration%2].forEach(function(v){
        v += (+startPage - 1)+(4*AMOUNT_SHEETS_BOOKLET*Math.floor(iteration/2));
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


    cuts = splitNumsPages(numsPages,LENGH_LINE_LIM);
    cuts.forEach(function(v){
        makeTextNumPages(iterationsInterface,v)
    });


    iterationsInterface.appendChild(buttonNextIteration);

    iterationsInterface.appendChild(document.createElement('br'));
    //container.innerHTML('x');
    document.getElementById(iteration + 1).onclick = goClick;
}
function splitNumsPages(numsString,lim){
    numbers = numsString.split(',');
    amountCuts = Math.ceil(numsString.length/lim);
    lenghtCuts = numbers.length/amountCuts;
    cuts =  [];
    for (var i = 0; i < amountCuts; i++)
        cuts[i] = '';
    numbers.forEach(function(v,i){
        if ((i + 1)%lenghtCuts == 0)
            cuts[Math.floor(i/lenghtCuts)] += v;
        else
            cuts[Math.floor(i/lenghtCuts)] += v + ', ';
    });
    return cuts;
}

function makeTextNumPages(container,text){
    id = 'numbers'+document.getElementsByClassName('numbers').length;
    textNumbersPages = document.createElement("input");
    textNumbersPages.type = 'text';
    textNumbersPages.className = 'numbers';
    textNumbersPages.id = id;
    textNumbersPages.value = text;
    textNumbersPages.size = LENGH_LINE_LIM;
    textNumbersPages.onclick = textNumbersPages.onfocus = function(){this.select(true); return false;};
    t = container.appendChild(textNumbersPages);

    console.log(t);
}

document.getElementById('0').onclick = goClick;



