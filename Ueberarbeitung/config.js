// Globale Variablen & Konfiguration
let startX = 0;
let endX = 33;
let startY = 0;
let endY = 49;
let aktuellesKuerzel = null;
let dynamischeZusatzInfos = {};

let infoTextStandard = "Kartogramme verzerren die Form geografischer Regionen, sodass das Gebiet direkt eine Datenvariable kodiert. Ein häufiges Beispiel ist, jedes Land der Welt proportional zur Bevölkerung oder zum BIP zu messen. Kann durch Kreise, Quadrate oder verzerrte Karten durch Manipulation der Anfangskarte erreicht werden.              Ein Kästchen = 400 km²";

let namenUebersetzung = {
    'm': 'Meer', 'l': 'Nachbarland', 'A': 'Schleswig-Holstein', 'B': 'Berlin',
    'C': 'Mecklenburg-Vorpommern', 'D': 'Niedersachsen', 'E': 'Hamburg',
    'F': 'Bremen', 'G': 'Brandenburg', 'H': 'Sachsen-Anhalt', 'I': 'Sachsen',
    'J': 'Thüringen', 'K': 'Hessen', 'L': 'Rheinland-Pfalz',
    'M': 'Nordrhein-Westfalen', 'N': 'Saarland', 'O': 'Baden-Württemberg',
    'P': 'Bayern'
};