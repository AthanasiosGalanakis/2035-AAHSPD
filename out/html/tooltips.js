// Hover cards for parties and SPD factions.
//
// To change a card, edit its title or text below. Keep the text between the double quotes;
// if you need a double quote inside the text, write \" instead.
//
// logo: leave it as "" to show the grey "Logo" placeholder, or give an image path such as
//   logo: "img/logos/spd.png"
// (relative to out/html). Logos are shown at 86 x 73 pixels.
//
// To use a card somewhere new, put this in a .dry file, with KEY being the name of an entry below:
//   {!<span class="ideology-tooltip-wrap seat spd" data-tip="KEY" tabindex="0">Label</span>!}
// "seat spd" gives the party colour (see the .seat rules in game.css).
var TOOLTIPS = {
    // Parties
    linke: {
        title: "Die Linke",
        text: "Democratic socialist party to the left of the SPD. It is strongest in the East and in the big cities.",
        logo: ""
    },
    greens: {
        title: "Bündnis 90/Die Grünen",
        text: "Ecological and socially liberal party. It puts climate protection first and is firmly pro-European.",
        logo: ""
    },
    spd: {
        title: "Sozialdemokratische Partei Deutschlands",
        text: "Germany's oldest party and the voice of social democracy. This is your party.",
        logo: ""
    },
    cducsu: {
        title: "CDU/CSU (Unionsparteien)",
        text: "The Christian democratic CDU and its Bavarian sister party, the CSU. Together they are the main centre-right force.",
        logo: ""
    },
    cdu: {
        title: "Christlich Demokratische Union Deutschlands",
        text: "Centre-right Christian democratic party. Since the split it runs everywhere except Bavaria.",
        logo: ""
    },
    csu: {
        title: "Christlich-Soziale Union in Bayern",
        text: "Conservative Bavarian party. It now runs separately from the CDU.",
        logo: ""
    },
    fdp: {
        title: "Freie Demokratische Partei",
        text: "Liberal party that favours free markets, low taxes and civil liberties.",
        logo: ""
    },
    bsw: {
        title: "Bündnis Sahra Wagenknecht",
        text: "Left-wing on the economy, conservative on migration and culture. It is sceptical of military support for Ukraine.",
        logo: ""
    },
    afd: {
        title: "Alternative für Deutschland",
        text: "Right-wing populist and nationalist party. It opposes immigration and the EU in its current form.",
        logo: ""
    },

    // SPD factions
    left: {
        title: "Parlamentarische Linke",
        text: "The left wing of the SPD, close to the Jusos. It wants redistribution, a looser debt brake and cooperation with the Greens and Die Linke.",
        logo: ""
    },
    center: {
        title: "Netzwerk Berlin",
        text: "The pragmatic camp around the party leadership. It sits between the left and right wings and puts governing first.",
        logo: ""
    },
    labor: {
        title: "Arbeitsgemeinschaft für Arbeit (AfA)",
        text: "The trade union wing of the SPD. It fights for secure jobs, higher wages and benefits for organized workers.",
        logo: ""
    },
    reformist: {
        title: "Seeheimer Kreis",
        text: "The conservative wing of the SPD. It favours fiscal discipline and coalitions with the centre.",
        logo: ""
    }
};

// You should not need to change anything below this line.
(function () {
    function build(wrap, card) {
        var tip = document.createElement("span");
        tip.className = "ideology-tooltip-tip";
        var logo;
        if (card.logo) {
            logo = document.createElement("img");
            logo.className = "ideology-tooltip-image";
            logo.src = card.logo;
            logo.alt = "";
        } else {
            logo = document.createElement("span");
            logo.className = "ideology-tooltip-image ideology-tooltip-logo-placeholder";
            logo.textContent = "Logo";
        }
        var title = document.createElement("strong");
        title.className = "ideology-tooltip-title";
        title.textContent = card.title;
        var text = document.createElement("span");
        text.className = "ideology-tooltip-description";
        text.textContent = card.text;
        tip.appendChild(logo);
        tip.appendChild(title);
        tip.appendChild(text);
        wrap.appendChild(tip);
        return tip;
    }
    function show(el) {
        var wrap = el.closest ? el.closest("[data-tip]") : null;
        if (!wrap) return;
        var card = TOOLTIPS[wrap.getAttribute("data-tip")];
        if (!card) return;
        var tip = wrap.querySelector(".ideology-tooltip-tip") || build(wrap, card);
        // open the card below the name when there is no room above it
        var room = wrap.getBoundingClientRect().top;
        if (room < tip.offsetHeight + 16) {
            wrap.classList.add("tip-below");
        } else {
            wrap.classList.remove("tip-below");
        }
    }
    document.addEventListener("mouseover", function (e) { show(e.target); });
    document.addEventListener("focusin", function (e) { show(e.target); });
})();
