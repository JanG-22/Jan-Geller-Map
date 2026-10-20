// App Initialisierung & Event Handling
class AppInit {
    init() {
        document.addEventListener("DOMContentLoaded", function () {
            new RasterInit().init();
            new LegendStandard().set();

            document.getElementById('reset-button').addEventListener('click', function () {
                new FilterReset().reset();
                new LegendStandard().set();
            });
        });

        document.getElementById('csvUpload').addEventListener('change', function (event) {
            let datei = event.target.files[0];
            if (!datei) return;
            let reader = new FileReader();
            reader.onload = function (e) {
                let datenMap = new MapParser().parse(e.target.result);
                new RasterUpdater().update(datenMap);
            };
            reader.readAsText(datei);
        });

        document.getElementById('infoCsvUpload').addEventListener('change', function (event) {
            let datei = event.target.files[0];
            if (!datei) return;
            let reader = new FileReader();
            reader.onload = function (e) {
                let infoObj = new ClassInformation();
                dynamischeZusatzInfos = infoObj.parse(e.target.result);
                if (aktuellesKuerzel) {
                    let name = namenUebersetzung[aktuellesKuerzel] || "Unbekannt";
                    new LegendUpdater().update(name, aktuellesKuerzel, "?", "?");
                }
            };
            reader.readAsText(datei);
        });
    }
}