// Info Parser
class ClassInformation {
    parse(text) {
        let zeilen = text.trim().split('\n');
        let infoMap = {};

        for (let i = 0; i < zeilen.length; i++) {
            let zeile = zeilen[i].trim();

            if (!zeile || zeile.toLowerCase().includes('kuerzel,info')) {
                continue;
            }

            let kommaIndex = zeile.indexOf(',');
            if (kommaIndex !== -1) {
                let kuerzel = zeile.substring(0, kommaIndex).trim();
                let infoText = zeile.substring(kommaIndex + 1).trim();
                infoMap[kuerzel] = infoText;
            }
        }
        return infoMap;
    }
}