var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your username? ');
var score = 0;
console.log("Hello, ",userName);
console.log("Let's get started with the quiz from the popular sitcom - The Office!!");


questions = [
    {
        question: "Who is the main character of The Office? ",
        answer: "Michael Scott",
        options: ["Michael Scott", "Jake Peralta", "Monica Gellar"]
    },
    {
        question: "Who does Jim have a crush on in season 1? ",
        answer: "Pam",
        options: ["Rose", "Angela", "Pam"]

    },
    {
        question: "Which is the branch managed by Michael Scott? ",
        answer: "Scranton",
        options: ["Scranton", "Stanford", "Dalton"]

    }
]

function play(question, answer, options)
{
    index = readlineSync.keyInSelect(options, question)
    if(options[index]==answer)
    {   
        console.log("That is correct!!!")
        score+=1
    }
}

for(i=0;i<questions.length;i++)
{
    curr = questions[i]
    play(curr.question, curr.answer, curr.options)
}

console.log("Your final score is: ", score)
if(score==questions.length)
{
    console.log("Congratulations, you are a super fan!")
}
