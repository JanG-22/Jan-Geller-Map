// Standard-Text ausgeben
class LegendStandard {
    set() {
        let textGroup = document.getElementById('legende-text-group');
        textGroup.innerHTML = '';
        let textX = 35.8;
        let startYText = 9.5;
        let zeilenAbstand = 1.3;
        let maxZeichen = 24;
        let writer = new SVGTextWriter();

        writer.write(textGroup, textX, startYText, "Was ist ein", "legende-titel", 1.2);
        writer.write(textGroup, textX, startYText + 1.4, "Kartogramm?", "legende-titel", 1.2);

        startYText += 4.0;
        let woerter = infoTextStandard.split(' ');
        let aktuelleZeile = "";
        for (let i = 0; i < woerter.length; i++) {
            let testZeile = aktuelleZeile + woerter[i] + " ";
            if (testZeile.length > maxZeichen && aktuelleZeile.length > 0) {
                writer.write(textGroup, textX, startYText, aktuelleZeile.trim(), "", 1.0);
                startYText += zeilenAbstand;
                aktuelleZeile = woerter[i] + " ";
            } else {
                aktuelleZeile = testZeile;
            }
        }
        if (aktuelleZeile.length > 0) {
            writer.write(textGroup, textX, startYText, aktuelleZeile.trim(), "", 1.0);
        }
    }
}
