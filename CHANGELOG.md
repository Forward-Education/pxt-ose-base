# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), but without change categorization.

## [1.2.0] - 11/18/2026

- Add `opensciedModules.compareToThreshold` so every threshold block compares the same way. Over and under both include the threshold value (over >=, under <=). The dropdown shows this as "over (≥)" and "under (≤)".
- Add `opensciedEnums.TemperatureUnit` (°C / °F) for temperature blocks.

## [1.1.1] - 06/16/2026

- This is de facto 1.0.0
- Add `ose-servo-base` package with a shared servo client for the OpenSciEd servo modules.
- Add `opensciedEnums.OverUnder` (over / under) for threshold blocks.
- Add `opensciedEnums.ClockwiseCounterclockwise` (↻ / ↺) for the dial.

[1.2.0]: https://github.com/Forward-Education/pxt-ose-base/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/Forward-Education/pxt-ose-base/releases/tag/v0.0.0...v1.1.1
