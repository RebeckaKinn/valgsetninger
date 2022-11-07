
let text1 = ``;
let text2 = ``; 
let text3 = ``; 
let textinfo = ``; 
let infoDiv = ``; 
let infoDiv2 = ``;

function updateview(){
    document.getElementById(`app`).innerHTML= /*HTML*/`
    <h1>Samsvarer teksten?</h1>
    <br/>
    <div>${infoDiv}</div><br/>
    <div>${infoDiv2}</div>
    <input id="textbox1" type="text" value="${text1}"/><br/>
    <input id="textbox2" type="text" value="${text2}"/><br/>
    <input id="textbox3" type="text" value="${text3}"/><br/>
    <button onclick="enteranswer()">Check!</button>
    `}

    function searchtext(){
        infoDiv = ``; 
        text1 = document.getElementById(`textbox1`).value; 
        text2 = document.getElementById(`textbox2`).value; 
        text3 = document.getElementById(`textbox3`).value; 
        if (text1 === text2) infoDiv += `Linje 1 og 2 er like!<br/>`;
        if (text1 !== text2) infoDiv += `Linje 1 og 2 er ikke like!<br/>`;
        if (text1 === text3) infoDiv += `Linje 1 og 3 er like!<br/>`;
        if (text1 !== text3) infoDiv += `Linje 1 og 3 er ikke like!<br/>`;
        if (text2 === text3) infoDiv += `Linje 2 og 3 er like!<br/>`; 
        if (text2 !== text3) infoDiv += `Linje 2 og 3 er ikke like!<br/>`; 
        console.log(text1)
        console.log(text2)
        console.log(text3)
        updateview()
    }
    
    function enteranswer(){
     searchtext(); 
     sortingtext(); 
     updateview()
    }

    function sortingtext(){
        infoDiv2 = `Alfabetisk høyeste: `;
        if (text1 <= text2 && text3 <= text1) infoDiv2 += text3;
        else if (text3 <= text1 && text1 >= text2) infoDiv2 += text2; 
        else infoDiv2 += text3; 
        updateview()
    }
    


    updateview()