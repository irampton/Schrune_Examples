class CUI_PJ_002BH {
    constructor() {
        this.pins = [, , ,
            { name: "3", pad: 3, net: "" }
        ];
        this.pins.VIN = { name: "VIN", pad: 1, net: "" };
        this.pins.GND = { name: "GND", pad: 2, net: "" };
    }

    info = {
        partNumber: "PJ-002BH",
        manufacture: "CUI",
        footprint: "./",
        symbol: "./",
        model: "./",
        LCSC: "C22359705",
        designatorPrefix: "DC"
    };

    pins = [];
}

module.exports = CUI_PJ_002BH