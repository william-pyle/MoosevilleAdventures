Got you—let’s bundle the whole Mooseville look into one tight, usable package.

---

# 🧱 Mooseville material library

### Core presets by asset type

| Asset type | Roughness | Metallic | Normal strength | Notes |
|-----------|-----------|----------|-----------------|-------|
| **Moose/characters** | 0.65–0.85 | 0.0 | 0.05–0.1 | Soft skin/fur, no pores |
| **Eyes** | 0.1–0.2 | 0.0 | 0.0 | Fake spec highlight, very glossy |
| **Hair** | 0.45–0.6 | 0.0 | 0.05 | Broad stylized highlight band |
| **Clothing** | 0.6–0.8 | 0.0 | 0.05–0.1 | Simple fabric tint, no weave detail |
| **Wood props** | 0.65–0.8 | 0.0 | 0.1–0.15 | Faint plank lines only |
| **Rocks** | 0.75–0.9 | 0.0 | 0.1 | Rounded, soft shading |
| **Ground** | 0.7–0.85 | 0.0 | 0.05 | Painterly color zones, no noise |
| **Water** | 0.05–0.15 | 0.0 | 0.0–0.05 | Fresnel, subtle distortion |
| **Gold accents** | 0.25–0.4 | 0.15–0.25 | 0.05 | Soft “toy” metal, not realistic |
| **UI planes** | 0.8–1.0 | 0.0 | 0.0 | Pure flat color, no shading |

**Albedo:** flat or very soft gradients using the Mooseville palette.  
**AO:** soft, 0.2–0.35 intensity, small radius.

---

# 🌤 Mooseville lighting profile

### Global look

- **Overall:** bright, low‑contrast, pastel outdoor adventure.
- **Shadows:** soft, never pitch‑black.
- **Bloom:** subtle but present.

### Suggested values (engine‑agnostic)

- **Key light (sun):**  
  - Color: warm, e.g. `#FFE8C9`  
  - Intensity: medium–high  
  - Shadows: soft, slightly blurred

- **Fill light (sky):**  
  - Color: cool pastel blue, e.g. `#CFEAFF`  
  - Intensity: low  
  - No shadows

- **Rim light (optional):**  
  - Color: slightly warm or neutral  
  - Intensity: low  
  - Only to help silhouettes pop

- **Environment / skybox:**  
  - Bright blue sky with soft clouds  
  - No dramatic HDR contrast

- **Post‑processing:**  
  - **Bloom:** 0.1–0.25  
  - **Contrast:** slightly reduced  
  - **Saturation:** +5–10%  
  - **Vignette:** off or extremely subtle  
  - **Color grading:** gentle pastel lift in midtones

---

# 🎬 Mooseville rendering bible (short version)

### Visual principles

- **Soft, not sharp:** no harsh edges, no gritty detail.
- **Pastel, not neon:** colors are bright but slightly milky.
- **Simple, not noisy:** one idea per asset; avoid micro‑detail.
- **Readable silhouettes:** shapes must be clear at a glance.
- **Consistent outlines:** same outline color and thickness rules everywhere.

### Do

- **Do** use large, clean color blocks.  
- **Do** exaggerate curves and round corners.  
- **Do** keep texture resolution modest but crisp (e.g. 512–1024 for most props).  
- **Do** use color/value contrast more than texture detail.

### Don’t

- **Don’t** use photo textures or scanned materials.  
- **Don’t** use high‑frequency noise in normals or albedo.  
- **Don’t** push specular/metallic into realistic territory.  
- **Don’t** let shadows go near‑black.

---

# 🧩 Mooseville asset pipeline guide

### Naming conventions

Use a clean, predictable pattern:

- **Meshes:**  
  - `SM_Mooseville_[Category]_[Name]_v01`  
  - e.g. `SM_Mooseville_Prop_HayBale_v01`

- **Materials:**  
  - `M_Mooseville_[Category]_[Name]`  
  - e.g. `M_Mooseville_Char_MooseBody`

- **Material instances:**  
  - `MI_Mooseville_[Category]_[Name]`  

- **Textures:**  
  - `T_Mooseville_[Name]_D` (albedo)  
  - `T_Mooseville_[Name]_N` (normal)  
  - `T_Mooseville_[Name]_RMA` (rough/metal/AO if packed)

### LOD strategy

- **Characters:** LOD0–LOD3  
  - LOD1: −30% tris  
  - LOD2: −60%  
  - LOD3: silhouette only

- **Props:** LOD0–LOD2  
  - LOD1: −40%  
  - LOD2: −70%

- **Buildings:** LOD0–LOD3  
  - LODs mostly remove small trim and interior detail.

### Texture sizes (guideline)

- **Hero characters:** 2× 2048 (body, head)  
- **Standard characters:** 1024–2048  
- **Hero props / landmarks:** 1024–2048  
- **Regular props:** 512–1024  
- **Small props / clutter:** 256–512  
- **UI:** 512–1024 per icon set, vector where possible

### Authoring rules

- **UVs:**  
  - Avoid tiny islands; prioritize big, clean shells.  
  - Minimize seams on visible faces.

- **Pivot placement:**  
  - Props: logical interaction point or base center.  
  - Doors/gates: hinge.  
  - Characters: feet at origin.

- **Collision:**  
  - Use simple primitives; no complex per‑poly collision.  
  - Keep gameplay collision slightly more generous than visuals.

---

If you want, next step could be a **50‑asset Mooseville starter list** where I assign: name, category, LOD target, texture size, and a ready‑to‑paste prompt line for each.