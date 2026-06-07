# Mooseville Adventures Game Design Companion

This document translates world lore into implementable design systems.

## Sync Rule
Use this file and the lore book together:

- Narrative source: Documents/Mooseville_Lore_Book.md
- Systems source: Documents/Mooseville_Game_Design_Companion.md

When lore changes behavior, update this file.
When systems add permanent canon, mirror it in the lore file.

## Core Design Pillars

- Explorer, farmer, and city builder are one continuous gameplay loop.
- Moose Water and basic food are always free.
- Contribution drives progression through mucks, reputation, and town level.
- Jobs are identity: each role has clothing, duties, and social status.
- All businesses and services are moose-themed adaptations, never human imitation.

## Economy Overview

### Currency

- Name: Mucks
- Form: Carved wooden coins with antler stamps and seasonal markings
- Learning origin: Concept learned from Sacred Documents, redesigned for Mooseville culture

### Earn Sources

- City work orders
- Main and side quests
- Festival events
- Selling crafted specialty goods
- Exploration deliveries and mapped route reports

### Spend Sources

- Clothing and style sets
- Home upgrades
- Cosmetic station services
- Optional efficiency tools and decor
- Specialty crafted foods and celebration goods

### Free Essentials Policy

- Moose Water: free forever
- Basic food staples: free forever
- Rationale: no citizen loses identity or health due to poverty

## Citizen Jobs and Identity System

### Assignment Rules

- New citizens can request a preferred job.
- Council may assign based on urgent town needs.
- Role changes are possible after probation quests.

### Identity Effects

Each job grants:

- Title used in dialogue and UI
- Daily routines and work perks
- Role outfit and seasonal variants
- Social affinity with related businesses

### Universal Duty

All citizens, regardless of role, must contribute to:

- Shared farming cycles
- Gathering rotations
- Emergency weather response

## City Progression and Population Growth

- Each recruited citizen contributes Town Growth Points.
- Town levels unlock:
  - New homes and district plots
  - New building upgrade tiers
  - New clothing sets and textile patterns
  - New civic and trade features
- Some citizens unlock hybrid skill trees based on origin district.

## Construction Resource Economy

City buildings and homes always require physical materials. A project can only begin when required resources are delivered by either:

- Individual citizens gathering and crafting manually
- Community businesses producing at scale

### Core Construction Resources

- Logs
- Boards
- Rock
- Stone
- Brick
- Clay
- Iron
- Nails

### Processing Chain Rules

- Trees -> Logs via cutting
- Logs -> Boards via hand chopping (slow) or mill processing (fast, bulk)
- Rock -> Stone via shaping benches
- Clay -> Brick via kiln firing
- Iron ore -> Iron bars via smelter
- Iron bars -> Nails via forge

### Throughput Model

- Individual production: always available, low throughput, no business dependency
- Business production: unlock-gated, high throughput, requires staffing and upkeep

Design intent: solo effort can keep the town alive, but community infrastructure is required to grow the town efficiently.

### Build Contribution Model

- Projects can receive mixed deliveries from citizens and businesses.
- Contribution is tracked by material type and source.
- Completing a build grants mucks, role affinity, and Town Growth Points.
- Emergency builds prioritize material use over cosmetics.

### Full Resource Families and Refinement Paths

Use these as the baseline resources required for most farming and city-building progression.

| Family | Raw Resource | Refined Resource | Advanced Resource | Primary Use |
| --- | --- | --- | --- | --- |
| Timber | Trees | Logs | Boards, Beams | Homes, storefronts, bridges |
| Masonry | Rock | Stone Blocks | Cut Stone, Pavers | Foundations, roads, walls |
| Ceramics | Clay | Bricks | Glazed Brick, Drain Pipe | Kilns, chimneys, sanitation |
| Metal | Iron Ore | Iron Bars | Nails, Hinges, Tools | Structural fasteners, tools |
| Fuel | Deadwood, Peat | Charcoal | Coke Blend | Smelting, high-heat crafting |
| Fiber | Flax, Reeds | Thread, Rope | Heavy Cloth, Sailcloth | Clothing, nets, utility wraps |
| Resin | Pine Sap | Pitch | Sealant, Waterproof Coating | Roofs, water casks, bridges |
| Glass | Silica Sand | Glass Panes | Vials, Lenses | Moose Water handling, archive optics |
| Lime | Limestone | Quicklime | Mortar, Plaster | Masonry bonding, interiors |
| Food Craft | Grain, Fruit, Dairy | Flour, Jam, Curd | Pies, Cakes, Festival Trays | Trade goods and event rewards |

### Baseline Conversion Recipes

- 1 Tree -> 4 Logs
- 1 Log -> 2 Boards by hand chopping
- 1 Log -> 4 Boards via Sawmill Line I
- 3 Rock -> 2 Stone Blocks
- 3 Clay -> 2 Bricks
- 4 Iron Ore + 1 Charcoal -> 2 Iron Bars
- 1 Iron Bar -> 8 Nails
- 3 Flax -> 2 Thread
- 2 Thread -> 1 Cloth Bolt
- 2 Pine Sap -> 1 Pitch
- 2 Sand + 1 Charcoal -> 1 Glass Pane
- 1 Glass Pane -> 2 Vials
- 2 Limestone -> 1 Quicklime
- 1 Quicklime + 1 Sand + 1 Water -> 2 Mortar

### Manual vs Industrial Throughput

- Manual mode: no unlock required, low output, stamina-heavy, always available.
- Industrial mode: requires business unlock plus staffed role, high output, maintenance cost in mucks and fuel.

This keeps progression readable: survival through effort, expansion through infrastructure.

## Quest Campaign to Systems Mapping

### Campaign I: The Fading Glow Crisis

- System unlock: Water diagnostics
- Risk state: Regression meter for impacted citizens
- Win condition: Identify spring diversion source

### Campaign II: The Green Water Expedition

- System unlock: Enrichment Station
- Resource unlock: Moose Water supply management
- Win condition: Restore affected Moosians and stabilize town water

### Campaign III: Strangers from the Far Side

- System unlock: Integration district and diplomacy tracks
- Reward unlock: New styles, dyes, and craft variants
- Win condition: Successful aid and optional citizenship integration

### Campaign IV: The Wide Valley Choice

- System unlock: Repeatable recruitment expeditions
- Ethical lock: Voluntary join-or-return choice required
- Win condition: Recruit by consent and maintain town trust

## Business District Blueprint (12 Moose-Themed Businesses)

1. Antler Almanac Co-op
- Type: Farm planning and seed exchange
- Core loop: Seasonal crop forecasting and seed quality upgrades
- Job family: Growers, irrigation planners

2. Rack and Rafter Works
- Type: Construction and civic upgrades
- Core loop: Building projects, repair contracts, bridge reinforcement, and mill throughput expansion
- Job family: Builders, structural crews

3. Hoof n Buff Shine Stand
- Type: Hoof care and polish service
- Core loop: Style buffs, confidence bonuses, pre-festival prep
- Job family: Groomers, polish crafters

4. Tine and Trim Mane House
- Type: Barber and grooming hall
- Core loop: Mane and antler styling, social reputation modifiers
- Job family: Barbers, ceremonial stylists

5. Hide and Hem Clothhouse
- Type: Textile and clothing atelier
- Core loop: Role outfits, seasonal variants, dye crafting
- Job family: Tailors, weavers

6. Velvet Tine Bakehouse
- Type: Bakery and specialty desserts
- Core loop: Craft pies, cakes, event foods for sale and quests
- Job family: Bakers, celebration cooks
- Note: Basic staples remain free through communal kitchens

7. Muck and Measure Market Hall
- Type: General trade and vendor stalls
- Core loop: Buy/sell specialty goods and rotating contracts
- Job family: Traders, quartermasters

8. Carved Coin Lodge
- Type: Mucks minting, storage, and civic treasury
- Core loop: Currency balancing, town grants, milestone payouts
- Job family: Treasurers, record keepers

9. Tine and Twine Outfitters
- Type: Field gear and utility supplies
- Core loop: Tool upgrades, pack systems, exploration kits
- Job family: Outfitters, toolwrights

10. Pinecone Press Archive
- Type: Document study and map copying
- Core loop: Lore decoding, map upgrades, symbol research quests
- Job family: Archivists, map-keepers

11. Lick and Leaf Remedies
- Type: Herbal care and recovery support
- Core loop: Nonessential tonics, recovery aids, stamina blends
- Job family: Herbalists, care workers
- Note: Moose Water remains free and is distributed separately

12. Green Vial Commons
- Type: Free Moose Water distribution and hydration station
- Core loop: Daily vial access, purity checks, civic health tracking
- Job family: Water keepers, purity stewards
- Note: No sales allowed at this business by law

## Phase 1 Implementation Sheet

Use this as the initial production plan for early access balancing.

| Town Level | Unlock | Prerequisite Quest | First Build Cost | First Upgrade Effect |
| --- | --- | --- | --- | --- |
| 1 | Green Vial Commons | Campaign II complete | 20 Logs, 10 Boards, 8 Stone, 4 Iron, 16 Nails | Moose Water distribution radius +25% |
| 1 | Antler Almanac Co-op | Tutorial complete | 24 Logs, 12 Boards, 10 Stone, 6 Clay, 12 Nails | Crop forecast accuracy +10% |
| 2 | Rack and Rafter Works | Splitbend Builder's Fair intro | 35 Logs, 24 Boards, 16 Stone, 10 Iron, 30 Nails | Unlock Sawmill Line I (Boards in bulk) |
| 2 | Muck and Measure Market Hall | First trade contract | 28 Logs, 16 Boards, 14 Stone, 8 Brick, 20 Nails | Vendor slot +1 |
| 3 | Carved Coin Lodge | Earn 500 total mucks | 22 Logs, 14 Boards, 18 Stone, 12 Iron, 28 Nails | Work-order payout +8% |
| 3 | Tine and Twine Outfitters | Complete 3 exploration deliveries | 26 Logs, 18 Boards, 14 Stone, 8 Iron, 24 Nails | Tool durability +10% |
| 4 | Hide and Hem Clothhouse | Integrate 1 new citizen | 20 Logs, 14 Boards, 12 Stone, 10 Clay, 18 Nails | Role outfit recipes +4 |
| 4 | Pinecone Press Archive | Archive Night Vigil complete | 18 Logs, 12 Boards, 16 Stone, 12 Brick, 16 Nails | Map reveal radius +12% |
| 5 | Velvet Tine Bakehouse | Build Communal Oven | 24 Logs, 14 Boards, 10 Stone, 14 Brick, 18 Nails | Specialty food sell value +12% |
| 5 | Hoof n Buff Shine Stand | Mane and Antler Week complete | 14 Logs, 10 Boards, 8 Stone, 4 Iron, 12 Nails | Social confidence buff duration +15% |
| 6 | Tine and Trim Mane House | Reach Town Trust Rank 2 | 18 Logs, 12 Boards, 10 Stone, 6 Iron, 14 Nails | Reputation gain from style events +15% |
| 6 | Lick and Leaf Remedies | Restore 6 regressed Moosians | 16 Logs, 10 Boards, 10 Stone, 10 Clay, 12 Nails | Recovery item potency +10% |

## Home and District Unlocks (Phase 1)

| Town Level | Unlock | Build Cost (per unit) | Unlock Effect |
| --- | --- | --- | --- |
| 1 | Starter Burrow Home | 12 Logs, 8 Boards, 6 Stone, 10 Nails | +1 housing slot |
| 2 | Shared Loft Home | 14 Logs, 10 Boards, 8 Stone, 12 Nails | +2 housing slots |
| 3 | Workshop Cottage | 16 Logs, 12 Boards, 10 Stone, 6 Iron, 14 Nails | Enables role bonus at home |
| 4 | Family Hearth House | 18 Logs, 14 Boards, 12 Stone, 8 Brick, 16 Nails | +3 housing slots, morale +3 |
| 5 | District Plot Alpha | 30 Logs, 20 Boards, 18 Stone, 12 Brick, 10 Iron, 30 Nails | Unlocks second neighborhood lane |
| 6 | District Plot Beta | 34 Logs, 24 Boards, 20 Stone, 16 Brick, 12 Iron, 36 Nails | Unlocks civic expansion permits |

## Cooperative Production Roles (Phase 1)

- Woodcutters gather logs in field zones.
- Mill crews process logs into boards at scale.
- Quarry crews extract rock and shape stone.
- Clay crews gather wet clay and feed kiln lines.
- Smelters refine iron and support forge output.
- Forgers convert iron to nails and fittings.

If any role is understaffed, construction queues slow down and upgrade timers increase.

## Skill Progression Framework

The player and NPC workforce level independently but interact through teaching.

### Player Mastery Ranks

| Player Level | Rank | New Capabilities |
| --- | --- | --- |
| 1 to 4 | Trailhand | Manual gathering, basic handcraft, starter builds |
| 5 to 9 | Crew Lead | Assign work orders, supervise one production line, teach novice NPC skills |
| 10 to 14 | Foremoose | Approve medium civic builds, unlock advanced recipes, train NPCs to Journeymoose |
| 15 to 19 | Master Builder | Launch district-scale projects, certify specialists, unlock efficiency blueprints |
| 20+ | High Steward | Teach elite specializations, unlock grand infrastructure and townwide policy upgrades |

### NPC Job Proficiency Tiers

| Tier | Description | Unlock Method |
| --- | --- | --- |
| Novice | Basic task execution with low efficiency | Job assignment complete |
| Worker | Reliable output and basic tool use | Complete role tutorial quest |
| Journeymoose | Handles refined production and station upkeep | Taught by player at Crew Lead or higher |
| Specialist | Unlocks advanced recipes and quality boosts | Taught by player at Foremoose or higher + role trial |
| Mentor | Can train other NPCs within same role | Taught by player at Master Builder or higher + civic exam |

### Teaching and Certification Rules

- The player must meet rank requirement to teach the next NPC tier.
- Teaching consumes time blocks and training materials.
- Certified NPC mentors reduce player micromanagement.
- Critical jobs (Water Keeper, Smelter, Archivist) require certification for tier 3 and above.

## Milestone Quest Unlock Framework

Quests unlock at town milestones so progression feels civic, not random.

| Milestone | Trigger | Unlock Questline | Primary Reward |
| --- | --- | --- | --- |
| M1 | Town Level 2 | Millwright Beginnings | Sawmill Line I and board bulk processing |
| M2 | Town Level 3 + 20 citizens | Stone and Story | Masonry bench upgrades and road paving |
| M3 | Town Level 4 + Campaign I complete | Glowwatch Protocol | Water diagnostics board and purity alerts |
| M4 | Town Level 5 + 2 districts | Kiln of the Commons | Brickworks upgrades and sanitation pipes |
| M5 | Town Level 6 + Campaign II complete | Forge of Antlers | Nail and hinge mass crafting |
| M6 | Town Level 7 + 3 Specialist NPCs | Threads of Identity | Advanced role outfits and cloth bonuses |
| M7 | Town Level 8 + Campaign III complete | New Hooves, New Homes | Integration housing tier and hybrid crafts |
| M8 | Town Level 9 + 6 Mentors | The Teaching Charter | NPC-to-NPC training network |
| M9 | Town Level 10 + Campaign IV active | Valley Steward Accord | Multi-route expeditions and grand civic projects |

### Quest Unlock Timing Rule

- Story quests unlock by campaign completion.
- Infrastructure quests unlock by town level and staffing thresholds.
- Training quests unlock by player rank and NPC tier gaps.

## Player Leadership and NPC Growth Loop

Primary player progression must support both building and teaching.

Core loop:

1. Player levels through exploration, builds, and quest completion.
2. New player rank unlocks new build permissions and teach permissions.
3. Player trains NPCs in assigned roles.
4. NPC proficiency raises production throughput and build quality.
5. Improved town output unlocks higher milestones and quest arcs.

This creates a two-axis progression model: personal mastery and community mastery.

## Job Outfit Matrix (Initial)

- Grower: Field vest, seed satchel, mud gait wraps
- Builder: Reinforced over-vest, tool sling, shoulder guards
- Groomer: Apron harness, polish pouch belt, clean-cuff wraps
- Barber: Fine shears harness, antler cloth drape, mirror brooch
- Tailor: Thread sash, pin cuff, measured hem cloak
- Baker: Flour apron, oven mitt wraps, recipe folio strap
- Trader: Ledger vest, coin pouch belt, route sash
- Treasurer: Stamp mantle, locked satchel, tally cuffs
- Outfitter: Utility rig, rope belt, weather shell
- Archivist: Page cape, symbol satchel, lens cord
- Herbalist: Leaf wrap tunic, vial bandolier, drying pouch
- Water Keeper: Purity mantle, glass vial belt, glow-mark armband

## Reward Design Rules

- Clothing and upgrades can be purchased with mucks.
- Clothing and upgrades can also be granted as quest rewards.
- Main campaigns should always award one permanent town system unlock.
- Festival rewards should rotate between cosmetics, recipes, and civic buffs.

## Governance and Social Rules

- New citizens must be offered role request before assignment.
- Assignments should prioritize care, farming, and water stability first.
- No citizen can be denied basic food or Moose Water.
- Recruitment quests must include informed consent and safe return options.

## Implementation Backlog Seeds

- Add Town Growth Point formulas by citizen type.
- Define business upgrade tiers II to IV for all 12 businesses.
- Build role-switch questline with costs and cooldown.
- Add citizen satisfaction model tied to role fit and housing quality.
- Add market simulation for specialty item demand by season.
- Add balancing pass for manual vs industrial throughput ratios.
- Add XP curves for player rank and NPC proficiency tiers.
