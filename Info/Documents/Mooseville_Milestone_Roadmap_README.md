# Mooseville Milestone Roadmap README

Files:
- Documents/Mooseville_Milestone_Roadmap.csv
- Documents/Mooseville_Master_Asset_Manifest.csv

## Purpose

Use this roadmap to track M1-M9 progression as a producer board with dependencies, sprint targets, and risk labels.

## Excel Setup

1. Open Excel.
2. Data -> From Text/CSV.
3. Import Mooseville_Milestone_Roadmap.csv.
4. Keep comma delimiter and load as table.

## Suggested Filters

- Status != Complete for active milestone board.
- RiskLevel = High for risk planning.
- TargetSprint = current sprint for execution focus.

## Dependency Tracking

- Dependencies column uses semicolon-separated milestone IDs.
- Milestones should not move to In Progress unless dependencies are Complete or Approved Exception.

## Integration with Asset Manifest

- RequiredAssetFamilies can be cross-referenced against AssetID values in Mooseville_Master_Asset_Manifest.csv.
- Use VLOOKUP or XLOOKUP in Excel to map asset completion percentages into milestone progress.

## Suggested Status Flow

Planned -> In Progress -> Blocked or Review -> Complete
