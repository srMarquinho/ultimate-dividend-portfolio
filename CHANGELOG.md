# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2]
### Changed
- Fix formula when calculating Cash Flow in "Transactions Summary".

## [1.1.1]
### Changed
- Fix bug when calculating sold out stocks.
- Fix float precision issues.

## [1.1.0]
### Added
- Filter by account in "Transactions".
- Filter by account in "Dividend Income Summary".
### Changed
- Fixed transactions calculation when sold all stocks and bought again.
- "Sector Summary" show `N/A` when no yield instead of blank.
- Improve "Portfolio" formulas to reduce stuck "Loading...".
- Fix "Dividend Income Summary" "Total Accumulated" graph calculation when multiple income in the same day.

## [1.0.1] - 2020-05-28
### Added
- Fix bug on dividend estimated calculation.

## [1.0.0] - 2020-05-28
### Removed
- Forward dividend - Removed in favor of Dividend Yield (%). Forward dividend may be confusing to some when dealing with multiple currencies.