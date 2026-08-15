const texts = [
    "Iman Bil Ghaibi, Taqwa bishidqin wa ikhlash",
    "Suci Kang Kahesti, Luhur Kang Ginayuh, Gedhe Cobane, Akeh Pangorbanane, Rumpil Margane, Abot Sanggane, Adoh Jeru Lembut Kang Tinebo, Ning Sampurno Wusanane",
    "Urip ndunyo iki ora angel, sak uger ukril yo gempil, sing angel tur abot kuwi nek ora mekoleh pitulungaNe Gusti Allah gelem sabar lan ikhlas merangi nefsu lan watak akune dewe-dewe.",
    "Ngendi-ngendi sing abot mungguh nefsu, ya kuwi sing utomo",
    "Kullu syai’in bilaa Huwa Bathilun"
];

const texts2 = [
    "Web Developer Junior",
    "Godot Developer Junior",
    "Roblox Studio Developer Junior",
    "Flask Developer Junior",

]
/*============PERTAMA============*/ 
const typingText1 = document.getElementById("dhawuh-guru");

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        typingText1.textContent += texts[textIndex][charIndex];
        charIndex++;

        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1500);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingText1.textContent =
            texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 5);
    } else {
        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }

        setTimeout(typeText, 300);
    }
}

/*============KEDUA============*/ 
const typingText2 = document.getElementById("TypingText2");

let textIndex2 = 0;
let charIndex2 = 0;

function typeText2() {
    if (charIndex2 < texts2[textIndex2].length) {
        typingText2.textContent += texts2[textIndex2][charIndex2];
        charIndex2++;

        setTimeout(typeText2, 100);
    } else {
        setTimeout(deleteText2, 1500);
    }
}

function deleteText2() {
    if (charIndex2 > 0) {
        typingText2.textContent =
            texts2[textIndex2].substring(0, charIndex2 - 1);

        charIndex2--;

        setTimeout(deleteText2, 5);
    } else {
        textIndex2++;

        if (textIndex2 >= texts2.length) {
            textIndex2 = 0;
        }

        setTimeout(typeText2, 300);
    }
}


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

typeText()
typeText2();