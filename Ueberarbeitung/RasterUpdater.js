// Raster-Klassen setzen
class RasterUpdater {
    update(csvDaten) {
        new LegendStandard().set();
        aktuellesKuerzel = null;
        for (let y = startY; y <= endY; y++) {
            for (let x = startX; x <= endX; x++) {
                let rect = document.getElementById("cell-" + x + "-" + y);
                if (!rect) continue;
                rect.className.baseVal = "raster-kaestchen";
                let kuerzel = csvDaten[x + ',' + y];

                if (kuerzel) {
                    rect.classList.add(kuerzel);
                    rect.onclick = function () {
                        if (aktuellesKuerzel === kuerzel) {
                            new FilterReset().reset();
                            new LegendStandard().set();
                        } else {
                            aktuellesKuerzel = kuerzel;
                            new FilterApplier().apply(kuerzel);
                            let name = namenUebersetzung[kuerzel] || "Unbekannt";
                            new LegendUpdater().update(name, kuerzel, x, y);
                        }
                    };
                } else {
                    rect.onclick = function () {
                        new FilterReset().reset();
                        new LegendUpdater().update("Leeres Kästchen", "-", x, y);
                    };
                }
            }
        }
    }
}