console.log("****WELCOME TO KBC****")

function question(){
    Question = ["1.How Many Continentes Are There?",
        "2.What Is The Capital Of India?",
        "3.Navgurukul Mei Kaun Se Course Padhey Jata Hai?"
    ]
    return Question
}
var Question_list=question()

function option(){
    option=[
        ["Four", "Nine", "seven", "Eight"],
        ["Chandigarh", "Bhopal", "chennai", "Delhi"],
        ["Software engineering", "Counseling", "Tourism", "Agriculture"]
    ]
    return option
}
var option_list=option()

function solution(){
    solution = [3, 4, 1]
    return solution
}
solution_list=solution()

function answer(){
    answer=["3.seven", "4.eight", "2.bhopal", "4.delhi", "1.software engineering", "3.tourism"]
    return answer
}
Ans=answer()
var i=0
var r=1
var y=0
var count=0
while (i<Question_list.length) {
    i1=Question_list[i]
    console.log(i1)
    var j=0
    var k=i
    while (j<option_list[i].length){
        var l=option_list[k][j]
        console.log(j+1,l)
        j=j+1
    }
    let readlineSync=require("readline-sync");
    Lifeline1=readlineSync.question("Do You Want 5050 Lifeline : ")
    if (Lifeline1=="yes") {
        console.log("50-50")
        if (count==0) {
            console.log(Ans[y+i])
            console.log(Ans[y+r])
            let readlineSync=require("readline-sync");
            n = readlineSync.questionInt("Enter Your Answer : ")
            if (n==solution_list[i]){
                console.log("right")
            } else{
                console.log("wrong")
                break
            }
            count+=1
        } else{
            console.log("You Already Used Lifeline")
            let readlineSync=require("readline-sync");
            m=readlineSync.questionInt("Enter Your Answer : ")
            if (m==solution_list[i]){
                console.log("right")
            } else{
                console.log("wrong")
            }
        }
    } else if (Lifeline1=="no"){
        let readlineSync=require("readline-sync");
        u=readlineSync.questionInt("Choose The Answer : ")
        if (u==solution_list[i]){
            console.log("Your Answer Is Correct")
        }else{
            console.log("Your Answer Is Wrong")
        }
    } else{
        console.log("error")
    }
    i=i+1
    r+=1
    y+=1
}