function showTab(tabId, btnId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    let tab = document.getElementById(tabId)
    let button = document.getElementById(btnId);

    buttons.forEach(btn => {
        btn.classList.remove('active')
    });
    button.classList.toggle('active')

    tabs.forEach(t => {
        t.classList.remove('active')
    });
    tab.classList.toggle('active')
}


let calculateAB = document.getElementById("calculateAB");
let abResult = document.getElementById("AB");
let error1 = document.getElementById("error1");

calculateAB.addEventListener("click", function () {
    let a1 = parseFloat(document.getElementById("a1").value);
    let b1 = parseFloat(document.getElementById("b1").value);

    if (b1 !== 0) {
        error1.style.display = 'none';
        abResult.innerText = a1 / b1;
    } else {
        error1.style.display = 'block';
        abResult.innerText = 0;
    }
});

let calculateABCD = document.getElementById("calculateABCD");
let abcdResult = document.getElementById("ABCD");
let error2 = document.getElementById("error2");
let letter = document.getElementById("letter");

calculateABCD.addEventListener("click", function () {
    let a2 = document.getElementById("a2").value;
    let b2 = document.getElementById("b2").value;
    let c2 = document.getElementById("c2").value;
    let d2 = document.getElementById("d2").value;
    let result2 = 0;
    let result3 = 0;
//DLA AB
    if (b2 != 0) {
        error1.style.display = 'none';
        result2 = a2/b2

    }
    else{
    }
//DLA CD
    if (d2 != 0) {
        error2.style.display = 'none';
        result3 = c2/d2

    }
    else{
    }

    if (b2 == 0) {
        letter.innerText = "B";
        abcdResult.innerText = 0;
    }
    if (d2 == 0) {
        letter.innerText = "D";
        abcdResult.innerText = 0;
    }
    if(b2 == 0 && d2 == 0){
        letter.innerText = "B i D"
    }

    if(b2 != 0 && d2 != 0){
        error2.style.display = 'none';
        abcdRes = result2+result3;
        abcdResult.innerText = abcdRes;

        if (abcdRes == 0) {
        abcdResult.innerText = 0;
    }
    }
    else{
        error2.style.display = 'block';
        abcdResult.innerText = 0;
    }
});

let calculate64 = document.getElementById("calculate64");
let ab64Result = document.getElementById("ab64");
let error = document.getElementById("error");

calculate64.addEventListener("click", function () {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    
    if (b !== 4) {
        error.style.display = 'none';
        ab64Result.innerText = (a + 6) / (b - 4);
    } else {
        error.style.display = 'block';
        ab64Result.innerText = 0;
    }
});

let yesNo = document.getElementById("yes-no");
let para = document.getElementById("para");

yesNo.addEventListener("click", function () {
    let liczba = parseInt(document.getElementById("liczba").value);
    
    if (liczba % 2 === 0) {
        para.innerText = 'Liczba jest parzysta';
    } else {
        para.innerText = 'Liczba jest nieparzysta';
    }

    if (liczba === 1488) {
        para.innerText = 'Пасхалко';
    }
});

let calculateDzielna = document.getElementById("calculatePodzielna");
let podzielnaResult = 0;

calculateDzielna.addEventListener("click", function () {
    let aDzielic = parseFloat(document.getElementById("aDzielic").value);
    let bDzielic = parseFloat(document.getElementById("bDzielic").value);
    let error3 = document.getElementById("error3");
    let PodzielnaOutput = document.getElementById("podzielna");

    podzielnaResult = aDzielic % bDzielic;
    
    if (podzielnaResult === 0) {
        PodzielnaOutput.innerText = "Jest podzielna"
    }
    else{
        PodzielnaOutput.innerText = "Jest nie podzielna"
    }
});

let checkNumberButton = document.getElementById("checkNumber");
let resultCheck = document.getElementById("resultCheck");

checkNumberButton.addEventListener("click", function () {
    let numCheck = parseFloat(document.getElementById("numCheck").value);
    
    if (numCheck > 0) {
        resultCheck.innerText = 'Liczba jest dodatnia';
    } else if (numCheck < 0) {
        resultCheck.innerText = 'Liczba jest ujemna';
    } else {
        resultCheck.innerText = 'Liczba jest równa 0';
    }
});

let znajdz = document.getElementById("znajdz");
let najwieksza = document.getElementById("Najwout");

znajdz.addEventListener("click", function () {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let theBox = document.getElementById("thebox");  
    let najw = Math.max(num1, num2, num3);
    function deleteFun() {
        let button = document.createElement('button');
        button.id = "delete"
        button.textContent = "DELETE"
        theBox.appendChild(button)
        let del = document.getElementById('delete')
        del.addEventListener('click', function(){
            document.body.innerHTML = `<center>
    <hr>
    <br><br>
    <br><br>
    <legend style="color: white;">
        <p>Этого человека я мудрее, потому что мы с ним, пожалуй, оба ничего в совершенстве не знаем, но он, не зная, думает, что что-то знает, а я коли уж не знаю, то и не думаю, что знаю.</p>
        <p>На такую-то малость, думается мне, я буду мудрее, чем он, раз я, не зная чего-то, и не воображаю, что знаю ЭТУ вещь</p>
        <br>
        <br>
        <p>Сократ</p>
    </legend>
</center>`
        });
    }
    if(num1 == 911){
        deleteFun()
    }
    else{
        najwieksza.innerText = "Największa liczba to: " + najw;
    }
    num1 = num2 = num3 = 0
});
let sortButton = document.getElementById("sort");
let sortOut = document.getElementById("sortOut");
sortButton.addEventListener("click", function () {
    let num1 = parseFloat(document.getElementById("liczba1").value);
    let num2 = parseFloat(document.getElementById("liczba2").value);
    let num3 = parseFloat(document.getElementById("liczba3").value);
    let max, mid , min
    ///////////1////////////////
    // max = Math.max(num1, num2, num3)
    // min = Math.min(num1, num2, num3)
    // if(max == num1 && min == num2){
    //     mid = num3
    // }
    // else if(max == num2 && min == num3){
    //     mid = num1
    // }
    // else if(max == num3 && min == num1 ){
    //     mid = num2
    // }
    // else{
    //     sortOut.innerText = "Капец"
    // }
    // if (num1 == num2 && num2 == num3) {
    //     sortOut.innerText = "Wprowadzone liczby są równe"
    // }
    // else{
    //     sortOut.innerText = `Min: ${min}, Mid: ${mid}, Max: ${max}`;
    // }
    // num1 = num2 = num3 = max = mid = min = 0
    ///////////////////2///////////////////////////////
    // БОЖЕ АХАХАХАХАХАХАХАХАХАХАХАХААХХ
    // mid = num1 + num2 + num3 - max - min;
    // sortOut.innerText = `Min: ${min}, Mid: ${mid}, Max: ${max}`;
    //Мудро
    if(num1 >= num2 && num1 >= num3){
        max = num1
        if (num2 >= num3) {
            mid = num2
            min = num3
        }
        else{
            mid = num3
            min = num2
        }
    }
    else if(num2 >= num1 && num2 >= num3){
        max = num2
        if (num1 >= num3) {
            mid = num1
            min = num3
        }
        else{
            mid = num3
            min = num1
        }
    }
    else{
        max = num3
        if (num1 >= num2) {
            mid = num1
            min = num2
        } 
        else {
            mid = num2
            min = num1
        }
    }
    sortOut.innerText = `Min: ${min}, Mid: ${mid}, Max: ${max}`;
});
