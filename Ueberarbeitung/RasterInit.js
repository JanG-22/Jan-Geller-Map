// Raster erzeugen
class RasterInit {
    init() {
        let container = document.getElementById('raster-container');
        container.innerHTML = '';
        for (let y = startY; y <= endY; y++) {
            for (let x = startX; x <= endX; x++) {
                let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("x", x);
                rect.setAttribute("y", y);
                rect.setAttribute("width", "1");
                rect.setAttribute("height", "1");
                rect.setAttribute("id", "cell-" + x + "-" + y);
                rect.classList.add("raster-kaestchen");

                rect.addEventListener('click', function () {
                    new FilterReset().reset();
                    new LegendUpdater().update("Leeres Kästchen", "-", x, y);
                });

                container.appendChild(rect);
            }
        }
    }
}