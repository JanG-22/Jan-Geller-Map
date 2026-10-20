// Karten Parser
class MapParser {
    parse(text) {
        let zeilen = text.split('\n');
        let datenMap = {};
        let y = 0;
        for (let i = 0; i < zeilen.length; i++) {
            let zeile = zeilen[i].trim();
            
            if (!zeile || zeile.includes('matrix_zeile') || zeile.startsWith('y,')) {
                continue;
            }
            
            zeile = zeile.replace(/\s+/g, '');
            
            for (let x = 0; x < zeile.length; x++) {
                datenMap[x + ',' + y] = zeile[x];
            }
            y++;
        }
        return datenMap;
    }
}