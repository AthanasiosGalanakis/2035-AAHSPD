// Hover cards for the status page.
// To change a card, edit its title or text below. Keep the text between the double quotes;
// if you need a double quote inside the text, write \" instead.
// To add a card: add an entry here, then use
//   {!<span class="ideology-tooltip-wrap" data-tip="KEY" tabindex="0">Label</span>!}
// in a .dry file, where KEY is the name of the entry.
var TOOLTIPS = {
    // Parties
    linke: {
        title: "Die Linke",
        text: "Democratic socialists to the left of the SPD. Led by Schwerdtner and van Aken."
    },
    greens: {
        title: "Bündnis 90/Die Grünen",
        text: "Ecological, socially liberal and pro-European. Led by Brantner and Banaszak."
    },
    spd: {
        title: "Sozialdemokratische Partei Deutschlands",
        text: "Centre-left social democrats. Your party."
    },
    cducsu: {
        title: "Union (CDU/CSU)",
        text: "Centre-right Christian democrats and their Bavarian sister party. Led by Merz."
    },
    cdu: {
        title: "Christlich Demokratische Union",
        text: "Centre-right Christian democrats, active outside Bavaria. Led by Merz."
    },
    csu: {
        title: "Christlich-Soziale Union",
        text: "Bavarian conservatives, now running separately from the CDU. Led by Söder."
    },
    fdp: {
        title: "Freie Demokratische Partei",
        text: "Pro-market classical liberals. Led by Dürr."
    },
    bsw: {
        title: "Bündnis Sahra Wagenknecht",
        text: "Left on economics, conservative on migration and culture. Led by Wagenknecht."
    },
    afd: {
        title: "Alternative für Deutschland",
        text: "Far-right nationalists opposed to immigration. Led by Weidel and Chrupalla."
    },

    // SPD factions
    left: {
        title: "Parlamentarische Linke",
        text: "The left wing of the SPD, close to the Jusos. Wants redistribution, a looser debt brake and cooperation with the Greens and Die Linke."
    },
    center: {
        title: "Netzwerk Berlin",
        text: "The pragmatic camp around the party leadership, between the left and right wings."
    },
    labor: {
        title: "AfA",
        text: "The trade union wing. Wants secure jobs, higher wages and benefits for organized workers."
    },
    reformist: {
        title: "Seeheimer Kreis",
        text: "The conservative wing. Pragmatic participants in government who favour fiscal discipline and coalitions with the centre."
    }
};

// You should not need to change anything below this line.
(function () {
    function fill(el) {
        var wrap = el.closest ? el.closest("[data-tip]") : null;
        if (!wrap || wrap.querySelector(".ideology-tooltip-tip")) return;
        var card = TOOLTIPS[wrap.getAttribute("data-tip")];
        if (!card) return;
        var tip = document.createElement("span");
        tip.className = "ideology-tooltip-tip";
        var title = document.createElement("strong");
        title.className = "ideology-tooltip-title";
        title.textContent = card.title;
        var text = document.createElement("span");
        text.className = "ideology-tooltip-description";
        text.textContent = card.text;
        tip.appendChild(title);
        tip.appendChild(text);
        wrap.appendChild(tip);
    }
    document.addEventListener("mouseover", function (e) { fill(e.target); });
    document.addEventListener("focusin", function (e) { fill(e.target); });
})();
