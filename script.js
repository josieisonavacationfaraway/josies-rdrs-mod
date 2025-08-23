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

// - SLAYSIAN ROYALE IMAGES + CAST + SCREEN - //
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

// - PAGE EXCLUSIVE - //
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
                <button onclick="predefCast(UK7_Cast, 'regular', 'teamsF', 'par-premiere')">Simulate</button>
                <div class="content-season_overlay" aria-hidden="true" id="ukseason7" 
                    style="background: linear-gradient(-10deg, rgba(247, 25, 154, 0.6) 15%, rgba(235, 13, 187, 0.6) 100%) 
                    center center / cover no-repeat, 
                    url('https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/22/RDRUK7.jpg');">
                </div>
            `;

            ukSeasons.appendChild(newSeason);
        }
    }
}
