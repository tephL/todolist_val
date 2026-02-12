// Add visible class to trigger pulse animation after rise up completes
setTimeout(() => {
    document.querySelector('.bouquet-container').classList.add('visible');
}, 4500);

// Prevent zoom on mobile


// for the event of clicking no
const no_btn = document.getElementById("no_btn");
const no_content = document.getElementById("no_content");

no_content.addEventListener("click", e => {
    console.log("clicked no");
    
    let _cryImg = document.createElement("img");
    _cryImg.classList.add("cry_img");
    _cryImg.src = "cry.png";
    
    no_btn.innerHTML = '';

    no_btn.appendChild(_cryImg);
});

const yes_btn = document.getElementById("yes_btn");
const yes_content = document.getElementById("yes_content");
const letter = document.querySelector(".letter");

let click_amt = 0;

yes_content.addEventListener("click", e => {
    if(click_amt == 0){
        e.target.textContent = "Three more :)";
    } else if (click_amt == 1){
        e.target.textContent = "Two more :)";
    } else if(click_amt == 2){
        e.target.textContent = "One more :)";
    } else if(click_amt ==3){
        e.target.textContent = "A thousand more !!!";
    } else{
        e.target.textContent = "just kidding hehe";
        setTimeout( () => {
            setTimeout(() => {
                let letter = document.getElementById("lettercontainer");
                letter.classList.remove("letter");
                letter.classList.add("letterout");

                setTimeout(() => {
                    letter.innerHTML = '';
                    letter.classList.remove("letterout");
                    letter.classList.add("letter");
                    // creating content div
                    let _newlettercontent = document.createElement("div");
                    _newlettercontent.classList.add("letter-content");
                    letter.appendChild(_newlettercontent);

                    // content div contents
                    let _newh4 = document.createElement("h4");
                    _newh4.textContent = "This Valentines, we will...";
                    _newlettercontent.appendChild(_newh4);

                    let _newP = document.createElement('p');
                    _newP.textContent = 'Lick each other :P,';
                    _newP.style.paddingTop = '10px';
                    _newP.style.textAlign = 'center';
                    _newlettercontent.appendChild(_newP);

                    let _newP2 = document.createElement('p');
                    _newP2.textContent = 'Kiss and Cuddle,';
                    _newP2.style.textAlign = 'center';
                    _newP2.style.paddingTop = '10px';
                    _newlettercontent.appendChild(_newP2);

                    let _newP3 = document.createElement('p');
                    _newP3.textContent = 'Have a coffee date,';
                    _newP3.style.textAlign = 'center';
                    _newP3.style.paddingTop = '10px';
                    _newlettercontent.appendChild(_newP3);
                    
                    let _newP4 = document.createElement('p');
                    _newP4.textContent = 'Have a very cute painting date!';
                    _newP4.style.textAlign = 'center';
                    _newP4.style.paddingTop = '10px';
                    _newlettercontent.appendChild(_newP4);

                    // signature
                    let _signature = document.createElement("div");
                    _signature.classList.add("signature");
                    _signature.style.marginTop = '30px';
                    
                    let _sig1 = document.createElement("p");
                    _sig1.textContent = 'I love you baby';
                    _sig1.id = 'ily';
                    _signature.appendChild(_sig1);

                    let _sig2 = document.createElement("p");
                    _sig2.textContent = '~ Stephen';
                    _signature.appendChild(_sig2);

                    _newlettercontent.appendChild(_signature);
                }, 3000);
            }, 100);   

        }, 100);
    }
    click_amt += 1;
});
