/*
 Create a team using the given data also assign the captain and vice-captain

 min 1 and max 3 wicket-kipper 
 min 1 and max 5 batsman 
 min 1 and max 3 all-rounder 
 min 1 and max 5 bowler
*/

function createTeam(team1, team2, captain, vice_captain) {

    let new_team;
    let tot_wk = [], tot_bat = [], tot_ar = [], tot_bowl = [];
    let bat_count, bowl_count, wk_count, ar_count;
    let wk = [], bat = [], ar = [], bowl = [];
    let cap, vc;

    while (bat_count + bowl_count + wk_count + ar_count !== 11) {
        bat_count = Math.floor((Math.random() * 5) + 1);
        bowl_count = Math.floor((Math.random() * 5) + 1);
        wk_count = Math.floor((Math.random() * 3) + 1);
        ar_count = Math.floor((Math.random() * 3) + 1);
    }

    for (let i = 0; i < team1.wk.length; i++) {
        tot_wk.push(team1.wk[i]);
    }
    for (let i = 0; i < team2.wk.length; i++) {
        tot_wk.push(team2.wk[i]);
    }
    for (let i = 0; i < team1.bat.length; i++) {
        tot_bat.push(team1.bat[i]);
    }
    for (let i = 0; i < team2.bat.length; i++) {
        tot_bat.push(team2.bat[i]);
    }
    for (let i = 0; i < team1.ar.length; i++) {
        tot_ar.push(team1.ar[i]);
    }
    for (let i = 0; i < team2.ar.length; i++) {
        tot_ar.push(team2.ar[i]);
    }
    for (let i = 0; i < team1.bowl.length; i++) {
        tot_bowl.push(team1.bowl[i]);
    }
    for (let i = 0; i < team2.bowl.length; i++) {
        tot_bowl.push(team2.bowl[i]);
    }

    let k = 0;

    while (k != wk_count) {
        let freq = {}

        let index = Math.floor(Math.random() * (tot_wk.length - 1))

        if (!freq[index]) {
            freq[index] = 1;
            wk.push(tot_wk[index])
            k++;
        }

    }

    let l = 0;

    while (l != bat_count) {
        let freq = {}

        let index = Math.floor(Math.random() * (tot_bat.length - 1))

        if (!freq[index]) {
            freq[index] = 1;
            bat.push(tot_bat[index])
            l++;
        }

    }

    let m = 0;

    while (m != ar_count) {
        let freq = {}

        let index = Math.floor(Math.random() * (tot_ar.length - 1))

        if (!freq[index]) {
            freq[index] = 1;
            ar.push(tot_ar[index])
            m++;
        }

    }

    let n = 0;

    while (n != bowl_count) {
        let freq = {}

        let index = Math.floor(Math.random() * (tot_bowl.length - 1))

        if (!freq[index]) {
            freq[index] = 1;
            bowl.push(tot_bowl[index])
            n++;
        }

    }

    if (captain === "bat") {

        let index = Math.floor(Math.random() * (bat.length - 1))

        cap = bat[index]

    } else if (captain === "bowl") {

        let index = Math.floor(Math.random() * (bowl.length - 1))

        cap = bowl[index]

    } else if (captain === "ar") {

        let index = Math.floor(Math.random() * (ar.length - 1))

        cap = ar[index]

    } else if (captain === "wk") {

        let index = Math.floor(Math.random() * (wk.length - 1))

        cap = wk[index]

    }

    if (vice_captain === "bat") {

        let index;

        index = Math.floor(Math.random() * (bat.length - 1));

        if (cap === bat[index]) {

            index = Math.floor(Math.random() * (bat.length - 1));

        } else {
            vc = bat[index]
        }

    } else if (vice_captain === "bowl") {

        let index;

        index = Math.floor(Math.random() * (bowl.length - 1));

        if (cap === bowl[index]) {

            index = Math.floor(Math.random() * (bowl.length - 1));

        } else {
            vc = bowl[index]
        }

    } else if (vice_captain === "ar") {

        let index;

        index = Math.floor(Math.random() * (ar.length - 1));

        if (cap === ar[index]) {

            index = Math.floor(Math.random() * (ar.length - 1));

        } else {
            vc = ar[index]
        }

    } else if (vice_captain === "wk") {

        let index;

        index = Math.floor(Math.random() * (wk.length - 1));

        if (cap === wk[index]) {

            index = Math.floor(Math.random() * (wk.length - 1));

        } else {
            vc = wk[index]
        }

    }

    return new_team = {
        "wk": wk,
        "bat": bat,
        "ar": ar,
        "bowl": bowl,
        "cap": cap,
        "vc": vc
    }

}

let team = createTeam({
    "wk": ["Quinton De kock", "Heinrich Klaasen"],
    "bat": ["Rassie Van Der-Dussen", "David Miller", "Reeza Hendricks", "Temba Bavuma"],
    "ar": ["Marco Jansen", "Aiden Markram", "Andile Phehlukwayo"],
    "bowl": ["Kagiso Rabada", "Keshav Maharaj", "Gerald Coetzee", "Lungi Ngidi", "Tabraiz Shamsi", "Lizaad Williams"]
},
    {
        "wk": ["Mushfiqur Rahim", "Litton Das"],
        "bat": ["Mahmudullah", "Najmul Hossain-Shanto", "Tanzid Hasan", "Tawhid Hridoy"],
        "ar": ["Mehidy Hasan-Miraz", "Shakib Al Hasan", "Mahedi Hasan"],
        "bowl": ["Mustafizur Rahman", "Shoriful-Islam", "Hasan Mahmud", "Nasum Ahmed", "Taskin Ahmed", "Tanzim Sakib"]
    }, "bat", "bat");

console.log("Your Team", team);