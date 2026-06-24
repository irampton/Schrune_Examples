BOOMELE_2_54_2_3P = require("./parts/BOOMELE_2_54_2_3P/BOOMELE_2_54_2_3P");
CUI_PJ_002BH = require("./parts/CUI_PJ_002BH/CUI_PJ_002BH");

function top() {
    const netList = new Set(["V+", "GND", "pwm_cool", "pwm_warm"]);
    // Basic Setup
    const v = {
        "h": "V+",
        "l": "GND",
        voltage: undefined
    };
    v.voltage = "20V +/- 25%";
    const pwm_cool = "pwm_cool";
    const pwm_warm = "pwm_warm";

    // I/O
    const header_1 = new BOOMELE_2_54_2_3P();
    const header_2 = new BOOMELE_2_54_2_3P();
    const header_3 = new BOOMELE_2_54_2_3P();
    const dc_input = new CUI_PJ_002BH();

    header_1.pins[1].net = v.h;
    header_1.pins[5].net = v.h;
    header_1.pins[3].net = pwm_cool;
    header_1.pins[4].net = pwm_warm;
    header_1.pins[2].net = v.l;
    header_1.pins[6].net = v.l

    header_2.pins[1].net = v.h;
    header_2.pins[5].net = v.h;
    header_2.pins[3].net = pwm_cool;
    header_2.pins[4].net = pwm_warm;
    header_2.pins[2].net = v.l;
    header_2.pins[6].net = v.l

    header_3.pins[1].net = v.h;
    header_3.pins[5].net = v.h;
    header_3.pins[3].net = pwm_cool;
    header_3.pins[4].net = pwm_warm;
    header_3.pins[2].net = v.l;
    header_3.pins[6].net = v.l

    dc_input.pins.VIN.net = v.h;
    dc_input.pins.GND.net = v.l;
    dc_input.pins[3].net = v.l;

    return {
        netList,
        components: [
            header_1,
            header_2,
            header_3,
            dc_input
        ],
        nets: {
            v: v,
            pwm_cool: pwm_cool,
            pwm_warm: pwm_warm
        }
    }
}