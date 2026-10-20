// Info-Text ausgeben
class LegendUpdater {
    update(name, kuerzel, x, y) {
        let textGroup = document.getElementById('legende-text-group');
        textGroup.innerHTML = '';
        let textX = 35.8;
        let startYText = 9.5;
        let zeilenAbstand = 1.5;
        let maxZeichen = 30;
        let writer = new SvgTextWriter();

        writer.write(textGroup, textX, startYText, "INFO:", "legende-titel", 1.3);
        let schriftGroesse = name.length > 15 ? 0.9 : 1.1;
        writer.write(textGroup, textX, startYText + 2.5, name, "legende-titel", schriftGroesse);

        let zusatzInfo = dynamischeZusatzInfos[kuerzel];
        if (zusatzInfo) {
            startYText += 5.0;
            let woerter = zusatzInfo.split(' ');
            let aktuelleZeile = "";
            for (let i = 0; i < woerter.length; i++) {
                let testZeile = aktuelleZeile + woerter[i] + " ";
                if (testZeile.length > maxZeichen && aktuelleZeile.length > 0) {
                    writer.write(textGroup, textX, startYText, aktuelleZeile.trim(), "", 0.9);
                    startYText += zeilenAbstand;
                    aktuelleZeile = woerter[i] + " ";
                } else {
                    aktuelleZeile = testZeile;
                }
            }
            if (aktuelleZeile.length > 0) {
                writer.write(textGroup, textX, startYText, aktuelleZeile.trim(), "", 0.9);
            }
        }
    }
}