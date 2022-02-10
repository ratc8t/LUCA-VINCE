document.getElementById("SubmitBtn").addEventListener("click",click);
var elem = document.getElementById("funFacts");
var nameValue;
var i = 0;
var interval_timer;

let facts = ["Fortune cookies did not originate in China",
             "Every single panda living in the world belong to china",
            "One in five people in the world is chinese"];



function click()
{
    nameValue = document.getElementById("InputFirst").value;
    sessionStorage.setItem("Name",nameValue);
    window.location.href = "../index.html";
}


function changeFact(fact)
{
    elem.innerHTML = fact;
}

interval_timer = setInterval(function(){
    if(i == 3)
    {
        i = 0;
    }

    changeFact(facts[i]);
    i++;
}, 5000);

function stop_timer(){
    clearInterval(interval_timer);
}