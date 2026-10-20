// Element-Hervorhebung
class FilterApplier {
    apply(zielKuerzel) {                                                    // durch apply wird immer alles überprüft
        let alleKaestchen = document.querySelectorAll('.raster-kaestchen'); // sucht SVG Elemente mit klasse .raster-kaestchen
        for (let rect of alleKaestchen) {                                   // jedes rect wird rausgesuht
            if (rect.classList.contains(zielKuerzel)) {                     // hat aktuelles Kästchen passendes Kürzel?
                rect.classList.remove('ausgegraut');                        // wenn ja, ausgrauung entfernen
            } else {
                rect.classList.add('ausgegraut');                           // wenn nein, dann ausgrauen
            }
        }
    }
}