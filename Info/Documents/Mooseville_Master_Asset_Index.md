# Mooseville Master Asset Index

Purpose: Single production index that links all building, costume, and prop requirements into one implementation checklist.

## Source Files

- Lore Canon: Documents/Mooseville_Lore_Book.md
- Systems Design: Documents/Mooseville_Game_Design_Companion.md
- Building Specs: Documents/Mooseville_Building_Creation_Catalog.md
- Costume Specs: Documents/Mooseville_Costume_Creation_Catalog.md
- Prop Specs: Documents/Mooseville_Prop_Accessory_Catalog.md
- Prompt Library: Documents/Mooseville_AI_Generator_Prompt_Export.md
- Milestone Roadmap CSV: Documents/Mooseville_Milestone_Roadmap.csv
- Milestone Roadmap Guide: Documents/Mooseville_Milestone_Roadmap_README.md

## Asset Pipeline Structure

- Tier A: Town-critical core assets required for first playable loop.
- Tier B: Growth assets required for economy and role progression.
- Tier C: Identity assets required for social depth and visual variety.
- Tier D: Expansion assets required for late-game and narrative arcs.

## Master Building Index

### A. Businesses (12)

| ID | Building | Gameplay Function | Linked Role Family | Priority Tier |
| --- | --- | --- | --- | --- |
| BIZ-01 | Antler Almanac Co-op | Farm planning, seed exchange, seasonal advisories | Grower | A |
| BIZ-02 | Rack and Rafter Works | Construction, repairs, mill expansion | Builder | A |
| BIZ-03 | Hoof n Buff Shine Stand | Hoof care and style buffs | Groomer | C |
| BIZ-04 | Tine and Trim Mane House | Mane and antler styling | Barber-Stylist | C |
| BIZ-05 | Hide and Hem Clothhouse | Clothing, role uniforms, textiles | Tailor-Weaver | B |
| BIZ-06 | Velvet Tine Bakehouse | Specialty pies, cakes, event foods | Baker | B |
| BIZ-07 | Muck and Measure Market Hall | Trade, contracts, specialty sales | Trader | A |
| BIZ-08 | Carved Coin Lodge | Mucks treasury, minting, civic accounting | Treasurer | B |
| BIZ-09 | Tine and Twine Outfitters | Exploration tools and gear | Outfitter-Toolwright | B |
| BIZ-10 | Pinecone Press Archive | Maps, records, document study | Archivist-Mapkeeper | B |
| BIZ-11 | Lick and Leaf Remedies | Herbal support and recovery | Herbalist-Caregiver | C |
| BIZ-12 | Green Vial Commons | Free Moose Water distribution and purity | Water Keeper | A |

### B. Core Infrastructure (12)

| ID | Infrastructure | Gameplay Function | Priority Tier |
| --- | --- | --- | --- |
| INF-01 | Town Hall of Tines | Governance, job assignment, civic decisions | B |
| INF-02 | Commons Kitchen and Free Table | Free staple food distribution | A |
| INF-03 | Sawmill Yard | Logs to boards at scale | A |
| INF-04 | Quarry Works | Rock extraction and stone shaping | A |
| INF-05 | Brick Kiln Complex | Clay to brick production | B |
| INF-06 | Smelter and Forge Hall | Iron and nail production | B |
| INF-07 | Granary and Seed Vault | Food and seed security | A |
| INF-08 | Barn and Pack Stable | Utility logistics and harness storage | B |
| INF-09 | Reservoir and Irrigation Gatehouse | Water control for farms and town | A |
| INF-10 | Roadworks Depot | Path and bridge maintenance | B |
| INF-11 | Watchtower and Storm Bell | Hazard alerts and weather warning | C |
| INF-12 | Clinic and Recovery Lodge | Injury and regression recovery | C |

### C. Expansion Infrastructure (4)

| ID | Expansion Asset | Gameplay Function | Priority Tier |
| --- | --- | --- | --- |
| EXP-01 | Festival Grounds Pavilion | Event content and social mini-games | D |
| EXP-02 | Integration Housing Court | New citizen intake and settlement | C |
| EXP-03 | Expedition Gatepost | Search team launch and return logistics | D |
| EXP-04 | Craft Mentor Schoolhouse | NPC training and skill progression | C |

## Master Costume Index

### A. Relaxing Styles (6)

| ID | Style | Use Case | Priority Tier |
| --- | --- | --- | --- |
| CST-R01 | Hearthglow Loungewear | Home and evening social scenes | B |
| CST-R02 | Riverbank Leisure Set | Day-off exploration and social scenes | B |
| CST-R03 | Meadow Picnic Set | Festivals and public leisure | C |
| CST-R04 | Rainy Lodge Comfort Set | Storm-day indoor scenes | C |
| CST-R05 | Moonwatch Night Set | Night events and glowwatch | C |
| CST-R06 | Trail Camp Rest Set | Post-quest rest scenes | B |

### B. Role Uniform Sets (24)

Rule: Each of the 12 roles has Style A and Style B, each with male and female fit variants.

| ID Range | Role | Required Sets |
| --- | --- | --- |
| CST-01A to CST-01B | Grower | 2 styles |
| CST-02A to CST-02B | Builder | 2 styles |
| CST-03A to CST-03B | Groomer | 2 styles |
| CST-04A to CST-04B | Barber-Stylist | 2 styles |
| CST-05A to CST-05B | Tailor-Weaver | 2 styles |
| CST-06A to CST-06B | Baker | 2 styles |
| CST-07A to CST-07B | Trader | 2 styles |
| CST-08A to CST-08B | Treasurer | 2 styles |
| CST-09A to CST-09B | Outfitter-Toolwright | 2 styles |
| CST-10A to CST-10B | Archivist-Mapkeeper | 2 styles |
| CST-11A to CST-11B | Herbalist-Caregiver | 2 styles |
| CST-12A to CST-12B | Water Keeper | 2 styles |

### C. Main Player Variation Sets (9)

| ID | Set | Track | Priority Tier |
| --- | --- | --- | --- |
| CST-PF1 | Early Fieldhand | Farming | A |
| CST-PF2 | Seasoned Grower | Farming | B |
| CST-PF3 | Harvest Captain | Farming | C |
| CST-PT1 | Apprentice Mentor | Teaching | B |
| CST-PT2 | Foremoose Instructor | Teaching | C |
| CST-PT3 | High Steward Tutor | Teaching | D |
| CST-PQ1 | Scout Runner | Questing | A |
| CST-PQ2 | Valley Ranger | Questing | B |
| CST-PQ3 | Campaign Commander | Questing | C |

## Master Prop and Accessory Index

### A. Universal Wearables

| ID Range | Pack | Core Contents | Priority Tier |
| --- | --- | --- | --- |
| ACC-U01 to ACC-U08 | Universal Accessory Set | Belts, satchels, mantles, wraps, badges, clasps | A |

### B. Role Kits (12)

| ID | Role Kit | Includes | Priority Tier |
| --- | --- | --- | --- |
| PRP-R01 | Grower Kit | Wearables, hand tools, grow station props | A |
| PRP-R02 | Builder Kit | Rigging, hammers, framing and fastener props | A |
| PRP-R03 | Groomer Kit | Shine tools and service station props | C |
| PRP-R04 | Barber-Stylist Kit | Grooming tools and style stations | C |
| PRP-R05 | Tailor-Weaver Kit | Loom and pattern tools | B |
| PRP-R06 | Baker Kit | Baking tools and pastry station props | B |
| PRP-R07 | Trader Kit | Ledger and price tools | B |
| PRP-R08 | Treasurer Kit | Stamp and accounting tools | B |
| PRP-R09 | Outfitter-Toolwright Kit | Expedition and repair tools | B |
| PRP-R10 | Archivist-Mapkeeper Kit | Map and document tools | B |
| PRP-R11 | Herbalist-Caregiver Kit | Remedy tools and care props | C |
| PRP-R12 | Water Keeper Kit | Purity and distribution tools | A |

### C. Main Player Accessory Sets (3)

| ID | Set | Includes | Priority Tier |
| --- | --- | --- | --- |
| PRP-P01 | Farming Set | Seed satchel, weather hood, field tools | A |
| PRP-P02 | Teaching Set | Lesson folio, insignia tabs, mentor tools | B |
| PRP-P03 | Questing Set | Expedition pack, route gear, signal kit | A |

### D. Environment Prop Packs

| ID Range | Pack Group | Scope | Priority Tier |
| --- | --- | --- | --- |
| ENV-BIZ-01 to ENV-BIZ-12 | Business Front Prop Packs | Exterior and interior props per business | B |
| ENV-INF-01 to ENV-INF-12 | Core Infrastructure Prop Packs | Function-critical town systems | A |
| ENV-FST-01 to ENV-FST-05 | Festival and Quest Reward Props | Seasonal and milestone reward objects | C |

## Resource Pipeline Asset Requirements

These assets are required to support production-chain gameplay.

### Raw to Refined Chain Visual Assets

- Trees, stumps, log piles
- Sawn board stacks, beam bundles
- Quarry rock nodes, stone blocks, cut pavers
- Clay pits, wet clay bins, brick stacks
- Iron ore nodes, iron bars, nail trays
- Fuel props: charcoal piles, peat bundles, kiln fuel bins
- Fiber props: flax bundles, thread spools, cloth bolts
- Resin props: sap buckets, pitch barrels, sealant pots
- Glass props: sand bins, panes, vial racks
- Lime props: limestone chunks, mortar tubs, plaster buckets

### Chain Stations Required

- Sawmill station modules
- Stone shaping bench modules
- Brick kiln modules
- Smelter and forge modules
- Fiber processing and loom modules
- Glass and vial bench modules
- Mortar mixing modules

## Milestone Unlock Crosswalk

| Milestone | Unlock Focus | Required Asset Families |
| --- | --- | --- |
| M1 Town Level 2 | Board bulk processing | INF-03, PRP-R02, ENV-INF-03 |
| M2 Town Level 3 | Stone roads and foundations | INF-04, INF-10, chain stone props |
| M3 Town Level 4 | Water diagnostics and purity | BIZ-12, PRP-R12, gauge props |
| M4 Town Level 5 | Brickworks growth | INF-05, clay and brick chain props |
| M5 Town Level 6 | Iron hardware scaling | INF-06, iron and nail chain props |
| M6 Town Level 7 | Role identity expansion | CST role sets B, ACC universal variants |
| M7 Town Level 8 | Integration district growth | EXP-02, new home variants, social props |
| M8 Town Level 9 | Mentor network | EXP-04, teaching sets, training props |
| M9 Town Level 10 | Valley expedition expansion | EXP-03, PRP-P03, route marker props |

## Production Batches (Recommended)

Batch 1: First Playable Town
- BIZ-01, BIZ-02, BIZ-12
- INF-02, INF-03, INF-07, INF-09
- CST-PF1, CST-PQ1, ACC-U base set
- PRP-R01, PRP-R02, PRP-R12

Batch 2: Economy and Build Scaling
- BIZ-07, BIZ-08, BIZ-09, BIZ-10
- INF-04, INF-05, INF-06, INF-10
- Resource chain props for stone, brick, iron, nails

Batch 3: Identity and Social Depth
- BIZ-05, BIZ-06, BIZ-03, BIZ-04, BIZ-11
- CST-R01 to CST-R06
- Full CST role sets A and first half of B
- Business interior prop packs

Batch 4: Expansion and Late Progression
- INF-01, INF-08, INF-11, INF-12
- EXP-01 to EXP-04
- CST-PT2, CST-PT3, CST-PQ2, CST-PQ3
- Festival reward prop packs

## Naming and Folder Schema

Top-level folders:
- Assets/Buildings/Businesses
- Assets/Buildings/Infrastructure
- Assets/Buildings/Expansion
- Assets/Characters/Costumes/Relax
- Assets/Characters/Costumes/Roles
- Assets/Characters/Costumes/Player
- Assets/Props/Accessories
- Assets/Props/Business
- Assets/Props/Infrastructure
- Assets/Props/ResourceChain
- Assets/Props/FestivalRewards

Naming format:
- Building: BLD_{ID}_{Name}_{Tier}
- Costume: CST_{ID}_{RoleOrTrack}_{Variant}
- Prop: PRP_{ID}_{Pack}_{Variant}
- Environment pack: ENV_{Group}_{ID}_{Variant}

Example names:
- BLD_BIZ-02_RackAndRafterWorks_A
- CST_CST-04A_Barber_StyleA
- PRP_PRP-R10_ArchivistKit_A
- ENV_INF_03_SawmillPack_A

## Final Delivery Checklist

- Every building in BIZ, INF, and EXP has base mesh and upgrade variant plan.
- Every role has two costume styles and both male and female fit variants.
- Main player has farming, teaching, and questing progression sets.
- Universal and role props are mapped to related costume and building families.
- Resource pipeline props cover full raw-to-refined chains.
- Milestone crosswalk aligns with quest unlock plan and town progression.
