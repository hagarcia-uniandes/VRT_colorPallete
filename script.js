var nRandomColors = 5;

function randomPalette() {
    
    var r, g, b;
    r = getRandomInt(0, 255);
    g = getRandomInt(0, 255);
    b = getRandomInt(0, 255);

    var interval = 1 / nRandomColors;

    //console.log(`Random RGB: R = ${r} G = ${g} B = ${b}`);
    var hsl = rgbToHsl(r, g, b);
    var randomColors = [];

    for (var i = 0; i < nRandomColors; i++) {
        hsl[0] = getNextHue(hsl[0], interval);
        var rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
        var hex = rgbToHex(rgb[0], rgb[1], rgb[2]).toUpperCase();
        //console.log(`${i + 1}   RGB: R = ${rgb[0]} G = ${rgb[1]} B = ${rgb[2]}`);
        //console.log(`   HEX: ${hex}`);
        randomColors.push(hex);
    }

    generateRules(randomColors);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getNextHue(h, distance) {
    h = h + distance;
    h = h > 1 ? h - 1 : h;
    return h;
}

function generateRules(randomColors) {
    var rules = [
        `.website-background{ color: ${randomColors[0]};}`,
        `.element-text{ color: ${randomColors[1]};}`,
        `.element-border{ border-color: ${randomColors[2]};}`,
        `.element-background{ background-color: ${randomColors[3]};}`,
        `.header{ color: ${randomColors[4]};}`
    ];
    for (var i = 0; i < nRandomColors; i++) {
        $(`#color${i + 1}`).css('background-color', randomColors[i]);
    }
    $("textarea#css-rules").val(rules.join('\r\n\n'));
}

function cleanPalette() {
    var randomColors = [
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF'
    ];
    generateRules(randomColors);
}