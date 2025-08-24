// - BUG FIXING - //
function addQueenToAll(queen) {
    allQueens.push(queen);

    const card = queenCardTemplate.content.cloneNode(true).children[0];
    const cardImage = card.querySelector("[data-image]");
    const header = card.querySelector("[data-header]");
    let image = document.createElement("img");
    image.src = queen.image;
    image.setAttribute("style", `border-color: black; width: 105px; height: 105px;`);
    cardImage.appendChild(image);
    header.textContent = queen._name;
    card.setAttribute("id", queen._name);

    queenCardContainer.appendChild(card);

    showingQueens.push({ name: queen._name, element: card });
}

function downloadTR() {
    let table = document.getElementById("trackRecord");

    html2canvas(table, { useCORS: true, allowTaint: false }).then((canvas) => {
        let img = canvas.toDataURL("image/png");
        let a = document.createElement('a');
        a.setAttribute("href", img);
        a.setAttribute("download", "TrackRecord.png");
        a.click();
        a.remove();
    });
}

// - UK 7 CAST - //
let BonesUK7 = new Queen("Bones", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ad/BonesDRUK7CastMug.jpg", true);
let BonnieAnnClydeUK7 = new Queen("Bonnie Ann Clyde", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3d/BonnieAnnClydeDRUK7CastMug.jpg", true);
let CatrinFeelingsUK7 = new Queen("Catrin Feelings", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/57/CatrinFeelingsDRUK7CastMug.jpg", true);
let ChaiTGrandeUK7 = new Queen("Chai T. Grande", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/4c/ChaiTGrandeDRUK7CastMug.jpg", true);
let ElleVosqueUK7 = new Queen("Elle Vosque", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1f/ElleVosqueDRUK7CastMug.jpg", true);
let NyongbellaUK7 = new Queen("Nyongbella", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/02/NyongbellaDRUK7CastMug.jpg", true);
let PaigeThreeUK7 = new Queen("Paige Three", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3f/PaigeThreeDRUK7CastMug.jpg", true);
let PastyUK7 = new Queen("Pasty", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/bf/PastyDRUK7CastMug.jpg", true);
let SallyTMUK7 = new Queen("Sally TM", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/ba/SallyTMDRUK7CastMug.jpg", true);
let SilllexaDictionUK7 = new Queen("Silllexa Diction", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/cb/SilllexaDictionDRUK7CastMug.jpg", true);
let TayrisMongardiUK7 = new Queen("Tayris Mongardi", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e9/TayrisMongardiDRUK7CastMug.jpg", true);
let ViolaUK7 = new Queen("Viola", 7, 7, 7, 7, 7, 7, 7, "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7d/ViolaDRUK7CastMug.jpg", true);

let UK7_Cast = [BonesUK7, BonnieAnnClydeUK7, CatrinFeelingsUK7, ChaiTGrandeUK7, ElleVosqueUK7, NyongbellaUK7, PaigeThreeUK7, PastyUK7, SallyTMUK7, SilllexaDictionUK7, TayrisMongardiUK7, ViolaUK7];

// - SEASON 17 STAT UPDATES //
onya._actingStat = 14;
onya._comedyStat = 12;
onya._danceStat = 10;
onya._designStat = 7;
onya._improvStat = 12;
onya._runwayStat = 9;
onya._lipsyncStat = 10;

samStar._actingStat = 11;
samStar._comedyStat = 11;
samStar._danceStat = 10;
samStar._designStat = 13;
samStar._improvStat = 10;
samStar._runwayStat = 13;
samStar._lipsyncStat = 11;

suzie._actingStat = 13;
suzie._comedyStat = 9;
suzie._danceStat = 11;
suzie._designStat = 8;
suzie._improvStat = 8;
suzie._runwayStat = 10;
suzie._lipsyncStat = 10;

jewels._actingStat = 7;
jewels._comedyStat = 8;
jewels._danceStat = 12;
jewels._designStat = 11;
jewels._improvStat = 9;
jewels._runwayStat = 13;
jewels._lipsyncStat = 12;

crystalE._actingStat = 8;
crystalE._comedyStat = 6;
crystalE._danceStat = 10;
crystalE._designStat = 10;
crystalE._improvStat = 6;
crystalE._runwayStat = 13;
crystalE._lipsyncStat = 10;

lexi._actingStat = 7;
lexi._comedyStat = 6;
lexi._danceStat = 10;
lexi._designStat = 9;
lexi._improvStat = 6;
lexi._runwayStat = 13;
lexi._lipsyncStat = 12;

acacia._actingStat = 9;
acacia._comedyStat = 8;
acacia._danceStat = 6;
acacia._designStat = 6;
acacia._improvStat = 8;
acacia._runwayStat = 8;
acacia._lipsyncStat = 8;

lydia._actingStat = 5;
lydia._comedyStat = 10;
lydia._danceStat = 7;
lydia._designStat = 8;
lydia._improvStat = 7;
lydia._runwayStat = 12;
lydia._lipsyncStat = 11;

hormona._actingStat = 9;
hormona._comedyStat = 6;
hormona._danceStat = 6;
hormona._designStat = 8;
hormona._improvStat = 6;
hormona._runwayStat = 8;
hormona._lipsyncStat = 7;

kori._actingStat = 6;
kori._comedyStat = 8;
kori._danceStat = 8;
kori._designStat = 5;
kori._improvStat = 8;
kori._runwayStat = 7;
kori._lipsyncStat = 12;

lana._actingStat = 8;
lana._comedyStat = 7;
lana._danceStat = 8;
lana._designStat = 7;
lana._improvStat = 5;
lana._runwayStat = 10;
lana._lipsyncStat = 11;

arrietty._actingStat = 4;
arrietty._comedyStat = 4;
arrietty._danceStat = 5;
arrietty._designStat = 15;
arrietty._improvStat = 4;
arrietty._runwayStat = 15;
arrietty._lipsyncStat = 5;

joella._actingStat = 5;
joella._comedyStat = 4;
joella._danceStat = 5;
joella._designStat = 5;
joella._improvStat = 4;
joella._runwayStat = 6;
joella._lipsyncStat = 6;

lucky._actingStat = 4;
lucky._comedyStat = 4;
lucky._danceStat = 5;
lucky._designStat = 4;
lucky._improvStat = 4;
lucky._runwayStat = 8;
lucky._lipsyncStat = 5;

// - SLAYSIAN ROYALE IMAGES + CAST + SCREEN + STATS - //
arizona.customqueen = true;
arizona.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/95/ArizonaBrandyDRPHSR1CastMug.jpg";
bernie.customqueen = true;
bernie.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/48/BernieDRPHSR1CastMug.jpg";
brigiding.customqueen = true;
brigiding.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/44/BrigidingDRPHSR1CastMug.jpg";
ivory.customqueen = true;
ivory.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/08/IvoryGlazeDRPHSR1CastMug.jpg";
khianna.customqueen = true;
khianna.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6c/KhiannaDRPHSR1CastMug.jpg";
kittyS.customqueen = true;
kittyS.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7b/KittySpaceDRPHSR1CastMug.jpg";
yoko.customqueen = true;
yoko.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/13/MadameYokoDRPHSR1CastMug.jpg";
siam.customqueen = true;
siam.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dc/SiamPhusriDRPHSR1CastMug.jpg";
suki.customqueen = true;
suki.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7c/SukiDollDRPHSR1CastMug.jpg";
sumting.customqueen = true;
sumting.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/4f/SumTingWongDRPHSR1CastMug.jpg";
vinas.customqueen = true;
vinas.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/64/ViñasDeLuxeDRPHSR1CastMug.jpg";
yuhua.customqueen = true;
yuhua.image = "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a3/YuhuaDRPHSR1CastMug.jpg";

let SLAYSIAN_Cast = [arizona, bernie, brigiding, ivory, khianna, kittyS, yoko, siam, suki, sumting, vinas, yuhua]; 

// - ALL STARS 11 - //
let AS10_Cast = [akeria, dawn, lucky, morgan, morphine, mystique, april, auraMayari, crystal, salina, silky, vivacious, hershii, jasmineK, joey, kennedy, samStar, shuga]

// - PAGE EXCLUSIVE - //
document.addEventListener("DOMContentLoaded", () => {
    const optionsBox = document.querySelector(".options");

    if (optionsBox) {
        const chocolateSection = optionsBox.querySelector("#chocolateBar")?.closest("div.aoitem");
        
        if (chocolateSection) {
            const badunkOption = document.createElement("p");
            badunkOption.innerHTML = `<input type="checkbox" id="tank2"> Badunkadunk Tank`;

            const choosable = chocolateSection.querySelector("#chocolateBarChoosable")?.parentElement;
            if (choosable) {
                choosable.insertAdjacentElement("afterend", badunkOption);
            } else {
                chocolateSection.appendChild(badunkOption);
            }
        }
    }
});

if (window.location.pathname.endsWith("index.html")) {
	UK7_Cast .forEach(q => addQueenToAll(q));
}

if (window.location.pathname.endsWith("predef.html")) {
    // --- Philippines: Slaysian Royale ---
    const philippinesDiv = Array.from(document.querySelectorAll("div.content-tab")).find(div =>
        div.querySelector("h2 img[src*='PhilippinesFlag']")
    );

    if (philippinesDiv) {
        const newHeader = document.createElement("h2");
        newHeader.innerHTML = `
            <img src="image/flags/StarFlag.webp" class="countryFlag">
            <img src="image/flags/PhilippinesFlag.webp" class="countryFlag">
            Drag Race Philippines: Slaysian Royale
            <img src="image/flags/PhilippinesFlag.webp" class="countryFlag">
            <img src="image/flags/StarFlag.webp" class="countryFlag">
        `;

        const newSeasons = document.createElement("div");
        newSeasons.className = "content-seasons";
        newSeasons.style.gridTemplateAreas = "'a'";
        newSeasons.style.gridTemplateColumns = "1fr";

        const newSeason = document.createElement("div");
        newSeason.className = "content-season";
        newSeason.innerHTML = `
            <h3 class="content-season-title">PH Slaysian Royale</h3>
            <button onclick="predefCast(SLAYSIAN_Cast, 'all-stars', 'LFTC')">Simulate</button>
            <div class="content-season_overlay" aria-hidden="true" id="phslaysian"
                style="background: linear-gradient(-10deg, rgba(247, 25, 154, 0.6) 15%, rgba(235, 13, 187, 0.6) 100%) 
                center center / cover no-repeat, 
                url('https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/19/DRPHSR1Logo2.jpg');">
            </div>
        `;

        newSeasons.appendChild(newSeason);
        philippinesDiv.appendChild(newHeader);
        philippinesDiv.appendChild(newSeasons);
    }

    // --- UK: Season 7 ---
    const ukDiv = Array.from(document.querySelectorAll("div.content-tab")).find(div =>
        div.querySelector("h2 img[src*='UKFlag']")
    );

    if (ukDiv) {
        const ukSeasons = ukDiv.querySelector(".content-seasons");

        if (ukSeasons) {
            const newSeason = document.createElement("div");
            newSeason.className = "content-season";
            newSeason.innerHTML = `
                <h3 class="content-season-title">UK Season 7</h3>
                <button onclick="predefCast(UK7_Cast, 'regular', 'teams', 'par-premiere')">Simulate</button>
                <div class="content-season_overlay" aria-hidden="true" id="ukseason7" 
                    style="background: linear-gradient(-10deg, rgba(247, 25, 154, 0.6) 15%, rgba(235, 13, 187, 0.6) 100%) 
                    center center / cover no-repeat, 
                    url('https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/22/RDRUK7.jpg');">
                </div>
            `;

            ukSeasons.appendChild(newSeason);
        }
    }

	// --- AS: Season 10 ---
	const asDiv = Array.from(document.querySelectorAll("div.content-tab")).find(div => {
	    const h2 = div.querySelector("h2");
	    const img = h2?.querySelector("img[src*='StarFlag']");
	    return img && h2.textContent.includes("All Stars");
	});

	if (asDiv) {
		const asSeasons = asDiv.querySelector(".content-seasons");

		if (asSeasons) {
			const newSeason = document.createElement("div");
            newSeason.className = "content-season";
            newSeason.innerHTML = `
                <h3 class="content-season-title">ALL STARS SEASON 11</h3>
                <button onclick="predefCast(AS10_Cast, 'all-stars', 'LFTC')">Simulate</button>
                <div class="content-season_overlay" aria-hidden="true" id="asseason10" 
                    style="background: linear-gradient(-10deg, rgba(247, 25, 154, 0.6) 15%, rgba(235, 13, 187, 0.6) 100%) 
                    center center / cover no-repeat, 
                    url('https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0e/RDRAScomingsoon.png');">
                </div>
            `;

            asSeasons.appendChild(newSeason);
		}
	}
}
