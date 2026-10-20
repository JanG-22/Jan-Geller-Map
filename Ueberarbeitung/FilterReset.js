// Filter löschen
class FilterReset {
    reset() {
        aktuellesKuerzel = null;                                                // aktuelle Variable für Kürzel wird geleert
        let alleKaestchen = document.querySelectorAll('.raster-kaestchen');     // sucht alle kaestchen im Dokument
        for (let rect of alleKaestchen) {                                       // geht jedes element einzelnd durch
            rect.classList.remove('ausgegraut');                                // alle verlieren ausgegraut
        }
    }
}