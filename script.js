const gridCont = document.querySelector('.grid-container');
const height = 544;

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row-container');

    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('box');
        row.appendChild(div);
    }

    gridCont.appendChild(row);
}

let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#05BFDB";
    });
});

const clrBtn = document.querySelector('.clear-button');

clrBtn.addEventListener('click', () => {
    boxes.forEach(box => {
        box.style.backgroundColor = "#0A4D68";
    });
});

const chgBtn = document.querySelector('.new-grid-button');

chgBtn.addEventListener('click', () => {
    let newBoxes = prompt("Input new rows there should be (under 100).");

    if (newBoxes > 100) {
        newBoxes = 100;
    }

    else if (newBoxes < 0) {
        newBoxes = 1;
    }

    boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.remove();
    });

    for (let i = 0; i < newBoxes; i++) {
        const row = document.createElement('div');
        row.classList.add('row-container');
    
        for (let j = 0; j < newBoxes; j++) {
            const div = document.createElement('div');
            div.classList.add('box');
            
            if (newBoxes >= 16) {
                div.style.height = ((height/newBoxes) + -4) + "px";
            }

            else {
                div.style.height = ((height/newBoxes) + -4) + "px";
                div.style.width = (height/newBoxes) + "px";
            }

            row.appendChild(div);
        }
        
        row.style.height = height/newBoxes + "px";
        gridCont.appendChild(row);
    }

    boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#05BFDB";
        });
    });
});