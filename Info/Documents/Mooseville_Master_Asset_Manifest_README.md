# Mooseville Master Asset Manifest README

File:
- Documents/Mooseville_Master_Asset_Manifest.csv

## Excel Import Steps

1. Open Excel.
2. Choose Data -> From Text/CSV.
3. Select Mooseville_Master_Asset_Manifest.csv.
4. Confirm delimiter is comma.
5. Load as table.

## Suggested Tracking Columns

- Status: Planned, In Progress, Blocked, Review, Complete
- Owner: assignee name or team
- Batch: 1 to 4 pipeline batches
- PriorityTier: A to D

## Recommended Views

- Filter Category = Building for environment sprint planning.
- Filter Category = Costume for character sprint planning.
- Filter Category = Prop for support asset planning.
- Filter Status != Complete for active backlog view.

## Notes

- Asset IDs map directly to the master index in Documents/Mooseville_Master_Asset_Index.md.
- SourceFile and SourceSection point to the detailed design spec for each row.
