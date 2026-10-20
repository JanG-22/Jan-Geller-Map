// Text-Knoten bauen
class SvgTextWriter {
    write(parent, x, y, textInhalt, extraKlasse, groesse) {
        let textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textNode.setAttribute("x", x);
        textNode.setAttribute("y", y);
        textNode.setAttribute("font-size", groesse);
        textNode.classList.add("legende-text");
        if (extraKlasse) textNode.classList.add(extraKlasse);
        textNode.textContent = textInhalt;
        parent.appendChild(textNode);
    }
}