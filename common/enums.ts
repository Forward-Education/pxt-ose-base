// If an enum could conceivably be reusable put it here.
// Else keep it with it's associated module.

namespace opensciedEnums {
    export const enum OverUnder {
        //% block="over (≥)"
        Over,
        //% block="under (≤)"
        Under,
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
