# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Next]
### Added
- Filter by account in "Transactions Summary" and "Dividend Income Summary".
### Changed
- "Sector Summary" show `N/A` when no yield instead of blank.
- Improve "Portfolio" formulas to reduce stuck "Loading...".
- Fix "Dividend Income Summary" total accumulated graph calculation.

## [1.0.1] - 2020-05-28
### Added
- Fix bug on dividend estimated calculation.

## [1.0.0] - 2020-05-28
### Removed
- Forward dividend - Removed in favor of Dividend Yield (%). Forward dividend may be confusing to some when dealing with multiple currencies.