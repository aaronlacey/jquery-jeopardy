///////////////////////////////////////////////////////////////////
//Variable Declarations
///////////////////////////////////////////////////////////////////
let container = document.querySelector("#container");
let gridItem = document.querySelectorAll("#container .grid-item");
let question = document.querySelector('#question');
let formAnswer = document.querySelector('form');
let inputText = document.querySelector('#inputText');
let scoreHeader = document.querySelector('h2');
let score = 0;
let points = 0;


///////////////////////////////////////////////////////////////////
//Fetching Jeopardy Data
///////////////////////////////////////////////////////////////////
//JSON data fetch
let readJeopardyData = async () => {
    let newJGItem;
    let clicked = false;
    //fetching data
    let rawJeopardyData = await fetch ('jeopardy.json');
    let data = await rawJeopardyData.json()
    //Grouping data by value
    let groupedData = _.groupBy(data,"value");
    console.log(groupedData);

    ///////////////////////////////////////////////////////////////////
    //Event listerners for clicking grid items
    ///////////////////////////////////////////////////////////////////
    for(let i = 0; i < gridItem.length; i++){
        let random = 0;
        //Clicking $100 values
        if(gridItem[i].className === "grid-item one-hundred"){
            gridItem[i].addEventListener('click', function(){
                gridItem[i].style.backgroundColor = "grey";
                clicked = true;
                if(clicked = true && gridItem[i].classList.contains("one-hundred")){
                    random = getRandomNumber(groupedData.$100.length);
                    newJGItem = groupedData.$100[random];
                    console.log(newJGItem)
                    question.innerText = newJGItem.question;
                    gridItem[i].classList.replace("one-hundred","selected")                    
                }


            })
        }
        //Clicking $200 values
        else if(gridItem[i].className === "grid-item two-hundred"){
            gridItem[i].addEventListener('click', function(){
                gridItem[i].style.backgroundColor = "grey";
                clicked = true;
                if(clicked = true && gridItem[i].classList.contains("two-hundred")){
                    random = getRandomNumber(groupedData.$200.length);
                    newJGItem = groupedData.$200[random];
                    console.log(newJGItem)
                    question.innerText = newJGItem.question;
                    gridItem[i].classList.replace("two-hundred","selected")                    
                }                
            })
        }
        //Clicking $400 values
        else if(gridItem[i].className === "grid-item four-hundred"){
            gridItem[i].addEventListener('click', function(){
                gridItem[i].style.backgroundColor = "grey";
                clicked = true;
                if(clicked = true && gridItem[i].classList.contains("four-hundred")){
                    random = getRandomNumber(groupedData.$400.length);
                    newJGItem = groupedData.$400[random];
                    console.log(newJGItem)
                    question.innerText = newJGItem.question;
                    gridItem[i].classList.replace("four-hundred","selected")                    
                } 
            })
        }
        //Clicking $600 values
        else if(gridItem[i].className === "grid-item six-hundred"){
            gridItem[i].addEventListener('click', function(){
                gridItem[i].style.backgroundColor = "grey";
                clicked = true;
                if(clicked = true && gridItem[i].classList.contains("six-hundred")){
                    random = getRandomNumber(groupedData.$600.length);
                    newJGItem = groupedData.$600[random];
                    console.log(newJGItem)
                    question.innerText = newJGItem.question;
                    gridItem[i].classList.replace("six-hundred","selected")                    
                } 
            })
        }
        //Clicking $800 values
        else if(gridItem[i].className === "grid-item eight-hundred"){
            gridItem[i].addEventListener('click', function(){
                gridItem[i].style.backgroundColor = "grey";
                clicked = true;
                if(clicked = true && gridItem[i].classList.contains("eight-hundred")){
                    random = getRandomNumber(groupedData.$800.length);
                    newJGItem = groupedData.$800[random];
                    console.log(newJGItem)
                    question.innerText = newJGItem.question;
                    gridItem[i].classList.replace("eight-hundred","selected")                    
                } 
            })
        }
    } 

    ///////////////////////////////////////////////////////////////////
    //Answer submission
    ///////////////////////////////////////////////////////////////////
    formAnswer.addEventListener('submit',function(event){
        event.preventDefault();
        if(newJGItem.value === "$100"){
            points = 100;
        }
        else if(newJGItem.value === "$200"){
            points = 200;
        }
        else if(newJGItem.value === "$400"){
            points = 400;
        }
        else if(newJGItem.value === "$600"){
            points = 600;
        }
        else if(newJGItem.value === "$800"){
            points = 800;
        }

        if(inputText.value === newJGItem.answer){
            score = score + points;
            console.log(`Points Earned: $${points}`);
            question.innerText = "Correct!";
        }
        else{
            question.innerText = `Incorrect. Correct answer was "${newJGItem.answer}".`;
            console.log(`Points Missed: $${points}`);
        }

        console.log(`Score: $${score}`);
        scoreHeader.innerText = `Your Score: $${score}`;
        inputText.value = '';
    });
}    

readJeopardyData();

//Random number generator function
const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}