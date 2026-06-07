Absolutely, Jason — here is your **Mooseville Shader Style Guide**, engineered directly from the visual cues in your open Barbie Horse Trails tabs (soft GI, pastel lighting, smooth surfaces, gentle bloom, minimal roughness variation) and tuned to your Mooseville aesthetic (clean silhouettes, thick outlines, whimsical charm).

This guide is written like a real art‑direction document you’d hand to a technical artist or shader dev.

---

# 🎨 **MOOSEVILLE SHADER STYLE GUIDE**  
### *(Materials • Roughness • Outlines • Lighting)*  
### *Optimized for Unreal Engine, Unity, or any PBR‑lite workflow*

---

# 🌟 1. **Material Philosophy (The Mooseville Look)**
Mooseville materials should feel:

- **Soft, smooth, and friendly**  
- **Pastel‑lit**, not saturated  
- **Low‑detail**, no gritty realism  
- **Bright and readable** from a distance  
- **Consistent** across characters, props, and terrain  

This matches the Barbie Horse Trails screenshots you have open — the world is bright, clean, and approachable.

---

# 🧱 2. **Base Material Settings (Global Defaults)**

### **Albedo**
- Use **flat or lightly‑gradient colors**  
- Avoid high‑frequency detail  
- No photo textures  
- Use **pastel tones** from your Mooseville palette  

### **Metallic**
- **0.0** for almost everything  
- Only gold accents (UI, collectibles, trim) should go above **0.1–0.2**

### **Roughness**
- Keep roughness **high and stable**  
- Recommended range: **0.55 – 0.85**  
- This gives the soft, velvety look seen in Barbie Horse Trails  
- Avoid glossy reflections except for:
  - water  
  - magical VFX  
  - gold accents  

### **Normal Maps**
- Use **extremely subtle** normals  
- Strength: **0.05 – 0.15**  
- Only for:
  - wood grain hints  
  - fabric weave hints  
  - stone bevels  
- Never use noisy normals  

### **Ambient Occlusion**
- Keep AO **very soft**  
- Radius: **small**  
- Intensity: **0.2 – 0.35**  
- AO should never create harsh shadows  

---

# 🐴 3. **Character Shader Settings (Moose, NPCs, Animals)**

### **Surface**
- Smooth, stylized skin/fur  
- No micro‑detail  
- No pores  
- No fur cards  

### **Specular**
- Very soft highlight  
- Specular: **0.2 – 0.35**  
- Roughness: **0.65 – 0.85**  

### **Eyes**
- Slightly higher gloss  
- Roughness: **0.1 – 0.2**  
- Add a **fake highlight** for charm  

### **Hair**
- Solid color with a **single broad highlight band**  
- No strand detail  
- Roughness: **0.45 – 0.6**  

### **Outlines**
- Thickness: **1.5–3 px** depending on distance  
- Color: **#1A1A1A** (your Mooseville outline standard)  

---

# 🌲 4. **Environment Shader Settings (Trees, Rocks, Terrain)**

### **Trees**
- Leaf clusters use **flat color + soft gradient**  
- No leaf textures  
- Trunks: smooth, rounded, minimal detail  

### **Rocks**
- Rounded shapes  
- Very soft normals  
- Roughness: **0.75–0.9**  
- Pastel gray‑brown palette  

### **Grass**
- Flat color cards  
- Slight color variation (±5–8%)  
- No wind noise textures — use **simple sine‑based sway**  

### **Ground**
- Painterly, soft, low‑contrast  
- No photo dirt  
- Use **color zones** instead of texture detail  

---

# 🏡 5. **Building Shader Settings (Barns, Cabins, Shops)**

### **Wood**
- Smooth, stylized  
- Very faint plank lines  
- Roughness: **0.65–0.8**  

### **Roofs**
- Flat color with subtle shading  
- No shingles unless stylized as big, simple shapes  

### **Windows**
- Soft reflection  
- Roughness: **0.1–0.25**  
- No real transparency needed — fake it with gradients  

---

# ✨ 6. **VFX Shader Settings (Sparkles, Dust, Magic)**

### **Sparkles**
- Additive blending  
- Soft pastel colors  
- Bloom‑friendly  
- No hard edges  

### **Dust Trails**
- Alpha‑blended  
- Soft falloff  
- Pastel browns  

### **Water Ripples**
- Soft Fresnel  
- Roughness: **0.05–0.15**  
- Gentle distortion, no harsh refraction  

### **Magic / Collectible Glow**
- Additive + bloom  
- Colors: pastel gold, pink, or blue  
- Soft radial gradients  

---

# 🎛️ 7. **Outline Shader (Critical for Mooseville Identity)**

### **Thickness**
- Characters: **2–3 px**  
- Props: **1.5–2 px**  
- Buildings: **1–1.5 px**  
- Terrain: **0–1 px** (optional)  

### **Color**
- Always **#1A1A1A**  
- Never pure black  

### **Style**
- Consistent thickness  
- No jitter  
- No sketchy lines  

This keeps Mooseville readable and cohesive.

---

# 🌤️ 8. **Lighting Style (The Barbie‑Mooseville Hybrid Look)**

### **Key Light**
- Warm sunlight  
- Color: **#FFE8C9**  
- Intensity: **moderate**  
- Soft shadows  

### **Fill Light**
- Cool pastel blue  
- Color: **#CFEAFF**  
- Low intensity  

### **Rim Light**
- Very soft  
- Helps silhouettes pop  

### **Global Illumination**
- Bright, clean, family‑friendly  
- No harsh contrast  

### **Bloom**
- Soft, subtle  
- Strength: **0.1–0.25**  

### **Color Grading**
- Slight pastel lift  
- Mild saturation boost  
- No heavy contrast  

---

# 🧩 9. **Shader Summary (One‑Page Quick Reference)**

| Category | Key Settings |
|---------|--------------|
| **Materials** | Smooth, pastel, minimal detail |
| **Roughness** | 0.55–0.85 (high/soft) |
| **Metallic** | 0.0 (except gold accents) |
| **Normals** | Very subtle (0.05–0.15 strength) |
| **Outlines** | Thick, clean, #1A1A1A |
| **Lighting** | Warm sun, cool fill, soft bloom |
| **VFX** | Additive, pastel, soft gradients |
| **Terrain** | Painterly, low‑contrast, rounded shapes |

---

# If you want, I can now generate:
- **A Mooseville Material Library** (preset values for each asset type)  
- **A Mooseville Lighting Profile** (Unreal/Unity settings)  
- **A Mooseville Rendering Bible** (full art direction document)  
- **A Mooseville Asset Pipeline Guide** (naming, LODs, texture sizes)  

Just tell me what you want next.