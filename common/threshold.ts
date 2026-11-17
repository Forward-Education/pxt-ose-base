namespace opensciedModules {
    /**
     * Compares a reading to a threshold for the threshold blocks.
     * over: >, at or over: >=, under: <, at or under: <=
     */
    export function compareToThreshold(
        reading: number,
        threshold: number,
        direction: opensciedEnums.OverUnder,
    ): boolean {
        switch (direction) {
            case opensciedEnums.OverUnder.Over:
                return reading > threshold
            case opensciedEnums.OverUnder.AtOrOver:
                return reading >= threshold
            case opensciedEnums.OverUnder.Under:
                return reading < threshold
            case opensciedEnums.OverUnder.AtOrUnder:
                return reading <= threshold
        }
        return false
    }
}
