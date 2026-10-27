// Globale Variablen & Konfiguration
let startX = 0;
let endX = 33;
let startY = 0;
let endY = 49;
let aktuellesKuerzel = null;
let dynamischeZusatzInfos = {};

let infoTextStandard = "Cartograms distort the shape of geographic regions so that the area directly represents a data variable. A common example is to scale each country in the world proportionally to its population or GDP. This can be achieved using circles, squares, or distorted maps created by manipulating the original map.              One square = 400 km²";

let namenUebersetzung = {
    'm': 'Sea', 'l': 'Neighboring State', 'A': 'Schleswig-Holstein', 'B': 'Berlin',
    'C': 'Mecklenburg-Vorpommern', 'D': 'Niedersachsen', 'E': 'Hamburg',
    'F': 'Bremen', 'G': 'Brandenburg', 'H': 'Sachsen-Anhalt', 'I': 'Sachsen',
    'J': 'Thüringen', 'K': 'Hessen', 'L': 'Rhineland-Palatine',
    'M': 'Nordrhein-Westfalen', 'N': 'Saarland', 'O': 'Baden-Württemberg',
    'P': 'Bavaria'
};
