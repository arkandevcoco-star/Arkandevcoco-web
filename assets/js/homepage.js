const texts = [
    "Iman Bil Ghaibi, Taqwa bishidqin wa ikhlash",
    "Suci Kang Kahesti, Luhur Kang Ginayuh, Gedhe Cobane, Akeh Pangorbanane, Rumpil Margane, Abot Sanggane, Adoh Jeru Lembut Kang Tinebo, Ning Sampurno Wusanane",
    "Urip ndunyo iki ora angel, sak uger ukril yo gempil, sing angel tur abot kuwi nek ora mekoleh pitulungaNe Gusti Allah gelem sabar lan ikhlas merangi nefsu lan watak akune dewe-dewe.",
    "Ngendi-ngendi sing abot mungguh nefsu, ya kuwi sing utomo",
    "Kullu syai’in bilaa Huwa Bathilun"
];

const typingText = document.getElementById("dhawuh-guru");

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex][charIndex];
        charIndex++;

        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1500);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingText.textContent =
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

typeText();