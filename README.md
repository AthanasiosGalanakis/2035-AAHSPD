# Social Democracy: An Alternative History (2028)

A card-based political game about the SPD, set in Germany from November 2028. It is a mod of [Social Democracy: An Alternate History](https://github.com/aucchen/social_democracy_alternate_history) by Autumn Chen, rebuilt for modern German politics.

## Included Libraries

[jquery v1.11.1](https://releases.jquery.com/)

[d3.js v7](https://d3js.org)

[d3-parliament](https://github.com/geoffreybr/d3-parliament)

## Building the game

1. Run `npm install` in this folder (this installs [dendrynexus](https://github.com/aucchen/dendrynexus)).

2. Run `npm run dendrynexus make-html -- --pretty`.

3. Copy `out/game.json` into `out/html/` and open `out/html/index.html` through a local web server.

To update dendrynexus in `package-lock.json`, run `npm install --upgrade https://github.com/aucchen/dendrynexus`
