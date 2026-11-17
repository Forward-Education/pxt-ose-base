namespace opensciedModules {
    /**
     * Compares a reading to a threshold for the threshold blocks.
     * Over and under both include the threshold value: over is >=, under is <=.
     */
    export function compareToThreshold(
        reading: number,
        threshold: number,
        direction: opensciedEnums.OverUnder,
    ): boolean {
        switch (direction) {
            case opensciedEnums.OverUnder.Over:
                return reading >= threshold
            case opensciedEnums.OverUnder.Under:
                return reading <= threshold
        }
        return false
    }
}
