// If an enum could conceivably be reusable put it here.
// Else keep it with it's associated module.

namespace opensciedEnums {
    export const enum OverUnder {
        //% block="over"
        Over,
        //% block="at or over"
        AtOrOver,
        //% block="under"
        Under,
        //% block="at or under"
        AtOrUnder,
    }

    export const enum TemperatureUnit {
        //% block="°C"
        Celsius,
        //% block="°F"
        Fahrenheit,
    }

    export const enum ClockwiseCounterclockwise {
        //% block="↻"
        Clockwise,
        //% block="↺"
        Counterclockwise,
    }
}
