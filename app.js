// Animate each letter of the big text with a staggered effect

const createLetter = (text, index) => {
    const letter = document.createElement("span");
    letter.innerHTML = text;
    letter.classList.add("bigtext-letter");
    letter.style.animationDelay = `${index * 130}ms`;
    return letter;
}

const addLetter = (text, index) => bigtext.appendChild(createLetter(text, index));

const createBigtext = text => text.split("").map(addLetter);

window.addEventListener("load", () => {
    const bigtext = document.getElementById("bigtext");
    createBigtext("Iniyan");
}); 