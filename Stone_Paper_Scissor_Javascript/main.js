var your_score=0;
var opp_score=0;
var you;
var opp;

var choices=["stone","paper","scissor"];

window.onload = function()
{
    for(let i=0;i<3;i++)
    {
        let choice=document.createElement("img");
        choice.id=choices[i];
        choice.src=choices[i]+".png";
        choice.addEventListener("click",selectChoice);
        document.getElementById("choices").append(choice);

    }
}
function selectChoice()
{
    you=this.id;
    document.getElementById("your-choice").src=you + ".png";

    opp=choices[Math.floor(Math.random()*3)];
    document.getElementById("opponent-choice").src=opp+".png";
if(you==opp)
{your_score+=1;
opp_score+=1;}
else
{
    if(you=="stone")
    {
        if(opp=="scissor")
        your_score+=1;
        else if(opp=="paper")
        opp_score+=1;

    }
    else if(you=="paper")
    {
        if(opp=="scissor")
        opp_score+=1;
        else if(opp=="stone")
        your_score+=1;

    }
    else
    {
        if(opp=="stone")
        opp_score+=1;
        else if(opp=="paper")
        your_score+=1;
    }
}
document.getElementById("your-score").innerText = your_score;
document.getElementById("opponent-score").innerText = opp_score;
}