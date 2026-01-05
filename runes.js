// LootFiend Rune Data
// 36 runes across 15 skills (2-3 runes per skill)
// Used by lootfiend-synergy-v6.html and rune codex

let RUNES = [
  // ============================================
  // BASIC SKILLS
  // ============================================

  // --- Frost Projectile ---
  {
    skill: 'Frost Projectile',
    name: 'Ice Armor',
    blueEffect: 'Final Dmgâ†“ +5%',
    purpleEffect: 'Gains 1 stack of Ice Armor, +2.5% Final Dmgâ†“ per stack for 20s (max 6 stacks)',
    orange1Effect: 'HoH +30%',
    orange2Effect: 'Each stack increased to 4% Final Dmgâ†“, max 8 stacks',
    newElement: null,
    addsStatus: null,
    keyStats: 'Final Dmgâ†“ +5%, HoH +30%',
    provides: ['ice', 'hoh', 'sustain', 'final-dmg-down'],
    wants: []
  },
  {
    skill: 'Frost Projectile',
    name: 'Icicle',
    blueEffect: 'Haste +10%',
    purpleEffect: 'When hitting Chilled targets, 20% chance to inflict Imprison for 1.5s',
    orange1Effect: 'Dmg +30%',
    orange2Effect: 'When Imprison triggers, summons ice spikes dealing 5x 50% ATK',
    newElement: null,
    addsStatus: 'Imprison',
    keyStats: 'Haste +10%, Dmg +30%',
    provides: ['ice', 'imprison', 'haste', 'control'],
    wants: ['chill']
  },

  // --- Flame Wave ---
  {
    skill: 'Flame Wave',
    name: 'Scorch',
    blueEffect: 'Using Flame Wave restores +2 Mana',
    purpleEffect: 'Each hit grants 1 Scorch stack, +2.5% Ele Dmg per stack for 20s (max 8 stacks)',
    orange1Effect: 'Haste +10%',
    orange2Effect: 'Each stack increased to 4% Ele Dmg, max 12 stacks',
    newElement: null,
    addsStatus: 'Scorch',
    keyStats: 'Haste +10%, Ele Dmg stacking',
    provides: ['fire', 'ele-dmg', 'haste', 'mp-regen', 'scorch'],
    wants: []
  },
  {
    skill: 'Flame Wave',
    name: 'Explosion',
    blueEffect: 'Dmg +30%',
    purpleEffect: 'Applies 2 stacks of Vulnerable on hit',
    orange1Effect: 'DoT +20%',
    orange2Effect: 'On hitting Burning targets, 30% chance to explode for 180% ATK + 3 Vulnerable',
    newElement: null,
    addsStatus: 'Vulnerable',
    keyStats: 'Dmg +30%, DoT +20%',
    provides: ['fire', 'vulnerable', 'dot', 'control', 'clone-synergy'],
    wants: ['burning']
  },

  // --- Lightning Whip ---
  {
    skill: 'Lightning Whip',
    name: 'Numb',
    blueEffect: 'Crit Chance +10%',
    purpleEffect: 'Crit Chance vs Shocked targets +20%, +0.3% per Shock stack',
    orange1Effect: 'Crit Chance +5%',
    orange2Effect: 'On crit, 20% chance to Stun for 0.5s',
    newElement: null,
    addsStatus: 'Stun',
    keyStats: 'Crit Chance +15%',
    provides: ['lightning', 'crit', 'stun', 'control'],
    wants: ['shock']
  },
  {
    skill: 'Lightning Whip',
    name: 'Energize',
    blueEffect: 'Ele Dmg +5%',
    purpleEffect: 'On hitting Electrocuted targets, 30% chance to recover 3 MP (+1% per Electrocution stack)',
    orange1Effect: 'MP Regen +5%',
    orange2Effect: 'MP recovered increased to 5, +2% chance per Electrocution stack',
    newElement: null,
    addsStatus: null,
    keyStats: 'Ele Dmg +5%, MP Regen +5%',
    provides: ['lightning', 'ele-dmg', 'mp-regen'],
    wants: ['electrocution']
  },

  // ============================================
  // CORE SKILLS
  // ============================================

  // --- Fireball ---
  {
    skill: 'Fireball',
    name: 'Iceflame',
    blueEffect: 'HoH +30%',
    purpleEffect: 'Launches 5 ice shards instead, each applies Chill + 1 Iceflame Burning',
    orange1Effect: 'Additional Damage +30%',
    orange2Effect: 'Hitting Chilled/Imprisoned/Frozen targets grants Ice Crystal stacks. At 30, summons Ice Crystal Flower (10 shards)',
    newElement: 'Ice',
    addsStatus: 'Chill, Burning',
    keyStats: 'HoH +30%, Add Dmg +30%',
    provides: ['ice', 'chill', 'burning', 'hoh', 'add-dmg', 'multi-hit', 'sustain'],
    wants: ['control']
  },
  {
    skill: 'Fireball',
    name: 'Pyroblast',
    blueEffect: 'Crit Chance +5%',
    purpleEffect: 'Launches lava fireball, 120% ATK + 3 Burning stacks (5s duration)',
    orange1Effect: 'Crit Dmg +45%',
    orange2Effect: 'On hit, 50% chance to add lava bomb that explodes for 200% ATK',
    newElement: null,
    addsStatus: null,
    keyStats: 'Crit Chance +5%, Crit Dmg +45%',
    provides: ['fire', 'crit', 'crit-dmg', 'burning', 'burst'],
    wants: []
  },
  {
    skill: 'Fireball',
    name: 'Jolt',
    blueEffect: 'Dmg +30%',
    purpleEffect: 'Conjures lightning spear, 200% ATK + 2 Electrocution stacks',
    orange1Effect: 'Crit Chance +10%',
    orange2Effect: 'On hit, 25% chance to summon Thunder God\'s Spear for 500% ATK + 0.5s Stun',
    newElement: 'Lightning',
    addsStatus: 'Electrocution',
    keyStats: 'Dmg +30%, Crit Chance +10%',
    provides: ['lightning', 'electrocution', 'crit', 'stun', 'burst'],
    wants: []
  },

  // --- Lightning Punch ---
  {
    skill: 'Lightning Punch',
    name: 'Ice Sword',
    blueEffect: 'Dmg +30%',
    purpleEffect: 'Slashes with frost sword, 500% ATK + Chill',
    orange1Effect: 'Final Dmg +5%',
    orange2Effect: 'On crit, Freezes for 0.5s. If immune to Freeze, deals double damage instead',
    newElement: 'Ice',
    addsStatus: 'Chill, Freeze',
    keyStats: 'Dmg +30%, Final Dmg +5%',
    provides: ['ice', 'chill', 'freeze', 'final-dmg', 'burst', 'control'],
    wants: ['crit']
  },
  {
    skill: 'Lightning Punch',
    name: 'Flame Bow',
    blueEffect: 'DoT +20%',
    purpleEffect: 'Shoots flame arrow, 200% ATK + 3 Burning stacks',
    orange1Effect: 'Crit Chance +10%',
    orange2Effect: '30% chance to launch fire dragon, 350% ATK + 20 Burning stacks',
    newElement: 'Fire',
    addsStatus: 'Burning',
    keyStats: 'DoT +20%, Crit Chance +10%',
    provides: ['fire', 'burning', 'dot', 'crit'],
    wants: []
  },
  {
    skill: 'Lightning Punch',
    name: 'Thunder Punch',
    blueEffect: 'Crit Chance +5%',
    purpleEffect: 'Damage increased to 300% ATK, applies 3 Electrocution. On crit vs Electrocuted, 50% chance for 100% ATK explosion',
    orange1Effect: 'Additional Damage Chance +15%',
    orange2Effect: '30% chance for continuous blast, 200% ATK',
    newElement: null,
    addsStatus: 'Electrocution',
    keyStats: 'Crit Chance +5%, Add Dmg Chance +15%',
    provides: ['lightning', 'electrocution', 'crit', 'add-dmg'],
    wants: ['electrocution']
  },

  // --- Ice Ray ---
  {
    skill: 'Ice Ray',
    name: 'Rimebite',
    blueEffect: 'Additional Damage +45%',
    purpleEffect: 'Damage interval reduced to 0.3s',
    orange1Effect: 'Additional Damage Chance +10%',
    orange2Effect: 'Each hit applies 1 Frostbite stack',
    newElement: null,
    addsStatus: 'Frostbite',
    keyStats: 'Add Dmg +45%, Add Dmg Chance +10%',
    provides: ['ice', 'add-dmg', 'multi-hit', 'frostbite'],
    wants: ['hoh']
  },
  {
    skill: 'Ice Ray',
    name: 'Pyresight',
    blueEffect: 'DoT +20%',
    purpleEffect: 'Summons Hellish Eye sweep, 300% ATK + 3 Burning. No longer channels',
    orange1Effect: 'MP Cost -8',
    orange2Effect: 'Leaves burning area for 3s, 40% ATK + 1 Burning per 0.7s',
    newElement: 'Fire',
    addsStatus: 'Burning',
    keyStats: 'DoT +20%, MP Cost -8',
    provides: ['fire', 'burning', 'dot', 'aoe'],
    wants: []
  },
  {
    skill: 'Ice Ray',
    name: 'Ionization',
    blueEffect: 'Dmg +30%',
    purpleEffect: 'Channels EM beam instead, 100% ATK per tick + 1 Shock stack',
    orange1Effect: 'Additional Damage Chance +15%',
    orange2Effect: 'Each hit grants +5% Energy Charge, +5% more on Additional Damage',
    newElement: 'Lightning',
    addsStatus: 'Shock',
    keyStats: 'Dmg +30%, Add Dmg Chance +15%',
    provides: ['lightning', 'shock', 'multi-hit', 'add-dmg', 'energy-charge'],
    wants: []
  },

  // ============================================
  // BASIC CONTROL SKILLS
  // ============================================

  // --- Concussion ---
  {
    skill: 'Concussion',
    name: 'Imprison',
    blueEffect: 'Final Dmg +5%',
    purpleEffect: 'Increased range and knockback, applies 5 Vulnerable stacks',
    orange1Effect: 'Crit Chance +5%',
    orange2Effect: 'Applies 10 Vulnerable stacks + 90% MSPD slow for 1.5s',
    newElement: null,
    addsStatus: 'Vulnerable',
    keyStats: 'Final Dmg +5%, Crit Chance +5%',
    provides: ['vulnerable', 'final-dmg', 'crit', 'control', 'knockback'],
    wants: []
  },
  {
    skill: 'Concussion',
    name: 'Echo',
    blueEffect: 'Base CD -2s',
    purpleEffect: 'On hit, recovers 15 MP (+2 MP per additional enemy)',
    orange1Effect: 'MP Regen +5%',
    orange2Effect: 'Knocks back 2 more times, each dealing 50% ATK',
    newElement: null,
    addsStatus: null,
    keyStats: 'CD -2s, MP Regen +5%',
    provides: ['cd-reduction', 'mp-regen', 'control', 'knockback'],
    wants: []
  },

  // --- Flash ---
  {
    skill: 'Flash',
    name: 'Backstab',
    blueEffect: 'MP Regen +5%',
    purpleEffect: 'Teleports behind furthest target, gains Robust for 3s',
    orange1Effect: 'Healing Received +20%',
    orange2Effect: '3s after first Flash, auto-casts again if enemies nearby',
    newElement: null,
    addsStatus: 'Robust',
    keyStats: 'MP Regen +5%, Healing +20%',
    provides: ['mp-regen', 'sustain', 'robust', 'mobility'],
    wants: []
  },
  {
    skill: 'Flash',
    name: 'Stunt',
    blueEffect: 'Base CD -2s',
    purpleEffect: 'Leaves behind a Stunt decoy with 30% max HP for 5s',
    orange1Effect: 'HoH +30%',
    orange2Effect: 'Teleports to furthest target, doubles HP recovered',
    newElement: null,
    addsStatus: null,
    keyStats: 'CD -2s, HoH +30%',
    provides: ['cd-reduction', 'hoh', 'sustain', 'decoy'],
    wants: []
  },

  // --- Gravity Field ---
  {
    skill: 'Gravity Field',
    name: 'Black Hole',
    blueEffect: 'Final Dmg +5%',
    purpleEffect: 'Deals 10% ATK/s and pulls enemies to center',
    orange1Effect: 'Skill Dmg +100%',
    orange2Effect: 'Damage increased to 20% ATK, applies 2 Vulnerable per hit',
    newElement: null,
    addsStatus: 'Vulnerable',
    keyStats: 'Final Dmg +5%, Skill Dmg +100%',
    provides: ['vulnerable', 'final-dmg', 'control', 'aoe', 'pull'],
    wants: []
  },
  {
    skill: 'Gravity Field',
    name: 'Domain',
    blueEffect: 'Final Dmgâ†“ +5%',
    purpleEffect: 'Centers on and follows character, doubled range',
    orange1Effect: 'Evasion +5%',
    orange2Effect: 'Also grants +20% Haste to allies in range',
    newElement: null,
    addsStatus: null,
    keyStats: 'Final Dmgâ†“ +5%, Evasion +5%',
    provides: ['final-dmg-down', 'evasion', 'haste', 'sustain', 'support'],
    wants: []
  },

  // ============================================
  // ELEMENTAL CONTROL SKILLS
  // ============================================

  // --- Lightning Orb ---
  {
    skill: 'Lightning Orb',
    name: 'Electrolysis',
    blueEffect: 'Dmg +30%',
    purpleEffect: 'Throws large orb, 200% ATK + 3 Electrocution on landing',
    orange1Effect: 'Crit Chance +5%',
    orange2Effect: 'Damage increased to 250% ATK, 5 Electrocution + 1s Stun',
    newElement: null,
    addsStatus: 'Electrocution, Stun',
    keyStats: 'Dmg +30%, Crit Chance +5%',
    provides: ['lightning', 'electrocution', 'stun', 'crit', 'burst', 'control'],
    wants: []
  },
  {
    skill: 'Lightning Orb',
    name: 'Frozen',
    blueEffect: 'Base CD -2s',
    purpleEffect: 'Launches rotating ice orb, 150% ATK per 0.5s to nearby enemies',
    orange1Effect: 'Final Dmgâ†“ +5%',
    orange2Effect: 'Explodes at destination, 250% ATK + 1.5s Imprison',
    newElement: 'Ice',
    addsStatus: 'Imprison',
    keyStats: 'CD -2s, Final Dmgâ†“ +5%',
    provides: ['ice', 'imprison', 'cd-reduction', 'final-dmg-down', 'multi-hit', 'control'],
    wants: []
  },

  // --- Frost Shield ---
  {
    skill: 'Frost Shield',
    name: 'Shattered Ice',
    blueEffect: 'Shield Strength +10%',
    purpleEffect: 'Applies Frost Shield to all allies',
    orange1Effect: 'Final Dmgâ†“ +5%',
    orange2Effect: 'When shield ends, Freezes surrounding enemies for 1s',
    newElement: null,
    addsStatus: 'Freeze',
    keyStats: 'Shield +10%, Final Dmgâ†“ +5%',
    provides: ['ice', 'shield', 'freeze', 'final-dmg-down', 'sustain', 'support', 'control'],
    wants: []
  },
  {
    skill: 'Frost Shield',
    name: 'Molten Fire',
    blueEffect: 'Base CD -3s',
    purpleEffect: 'No longer shields. Deals 50% ATK/s + 1 Burning for 5s. Gains Robust',
    orange1Effect: 'Ele Dmg +5%',
    orange2Effect: 'Duration extended to 8s, +15% Ele Dmg during effect',
    newElement: 'Fire',
    addsStatus: 'Burning, Robust',
    keyStats: 'CD -3s, Ele Dmg +20%',
    provides: ['fire', 'burning', 'robust', 'ele-dmg', 'cd-reduction', 'dot'],
    wants: []
  },

  // --- Infernal Bloom ---
  {
    skill: 'Infernal Bloom',
    name: 'Fire Core',
    blueEffect: 'Final Dmg +5%',
    purpleEffect: 'Summons Fire Core for 8s',
    orange1Effect: 'DoT +20%',
    orange2Effect: 'On summon, sends flame wave 250% ATK + knockback + 5 Burning',
    newElement: null,
    addsStatus: 'Burning',
    keyStats: 'Final Dmg +5%, DoT +20%',
    provides: ['fire', 'burning', 'final-dmg', 'dot', 'summon', 'knockback'],
    wants: []
  },
  {
    skill: 'Infernal Bloom',
    name: 'Electric Eel',
    blueEffect: 'Base CD -2s',
    purpleEffect: 'Summons Electric Eel companion for 10s',
    orange1Effect: 'Final Dmg +5%',
    orange2Effect: 'Duration 15s, max 3 summons',
    newElement: 'Lightning',
    addsStatus: null,
    keyStats: 'CD -2s, Final Dmg +5%',
    provides: ['lightning', 'cd-reduction', 'final-dmg', 'summon', 'shock'],
    wants: []
  },

  // ============================================
  // ULTIMATE SKILLS
  // ============================================

  // --- Hail ---
  {
    skill: 'Hail',
    name: 'Glacial',
    blueEffect: 'HoH +30%',
    purpleEffect: 'Duration +1s, 10% chance to Imprison for 1s',
    orange1Effect: 'Additional Damage Chance +10%',
    orange2Effect: 'Deals 50% ATK 5x per second instead of 2x',
    newElement: null,
    addsStatus: 'Imprison',
    keyStats: 'HoH +30%, Add Dmg Chance +10%',
    provides: ['ice', 'hoh', 'imprison', 'add-dmg', 'multi-hit', 'sustain', 'control'],
    wants: []
  },
  {
    skill: 'Hail',
    name: 'Skyfire',
    blueEffect: 'Base CD -5s',
    purpleEffect: 'Becomes meteor, 200% ATK + 8 Burning stacks',
    orange1Effect: 'DoT +20%',
    orange2Effect: 'Leaves burning area 3s, 80% ATK/s + 3 Burning',
    newElement: 'Fire',
    addsStatus: 'Burning',
    keyStats: 'CD -5s, DoT +20%',
    provides: ['fire', 'burning', 'cd-reduction', 'dot', 'aoe'],
    wants: []
  },
  {
    skill: 'Hail',
    name: 'Meteor',
    blueEffect: 'Dmg +30%',
    purpleEffect: 'Summons electric meteors, 300% ATK + 3 Electrocution + 0.7s Stun',
    orange1Effect: 'Crit Chance +5%',
    orange2Effect: '+1 additional meteor, 350% ATK + 5 Electrocution',
    newElement: 'Lightning',
    addsStatus: 'Electrocution, Stun',
    keyStats: 'Dmg +30%, Crit Chance +5%',
    provides: ['lightning', 'electrocution', 'stun', 'crit', 'burst', 'control'],
    wants: []
  },

  // --- Doppelganger ---
  {
    skill: 'Doppelganger',
    name: 'Ice Soul',
    blueEffect: 'Final Dmgâ†“ +5%',
    purpleEffect: 'Summons Ice Clone with 70% HP for 12s',
    orange1Effect: 'Additional Damage +30%',
    orange2Effect: 'Ice Clone has 50% HP ice shield. On break, Freezes surrounding enemies',
    newElement: 'Ice',
    addsStatus: 'Freeze',
    keyStats: 'Final Dmgâ†“ +5%, Add Dmg +30%',
    provides: ['ice', 'freeze', 'final-dmg-down', 'add-dmg', 'clone', 'sustain', 'control'],
    wants: []
  },
  {
    skill: 'Doppelganger',
    name: 'Ember',
    blueEffect: 'Ele Dmg +5%',
    purpleEffect: 'Summons Fire Clone with 70% HP for 12s',
    orange1Effect: 'Base CD -10s',
    orange2Effect: 'On death, explodes for 800% ATK + knockback + 20 Burning',
    newElement: 'Fire',
    addsStatus: 'Burning',
    keyStats: 'Ele Dmg +5%, CD -10s',
    provides: ['fire', 'burning', 'ele-dmg', 'cd-reduction', 'clone', 'burst', 'knockback'],
    wants: []
  },
  {
    skill: 'Doppelganger',
    name: 'Thunderbolt',
    blueEffect: 'MP Regen +5%',
    purpleEffect: 'Summons Lightning Clone with 70% HP for 12s',
    orange1Effect: 'Final Dmg +5%',
    orange2Effect: '50% chance for enhanced orb, lightning bolts 100% ATK 5x + 3 Electrocution',
    newElement: 'Lightning',
    addsStatus: 'Electrocution',
    keyStats: 'MP Regen +5%, Final Dmg +5%',
    provides: ['lightning', 'electrocution', 'mp-regen', 'final-dmg', 'clone'],
    wants: []
  },

  // --- Aether Form ---
  {
    skill: 'Aether Form',
    name: 'Cryo',
    blueEffect: 'MP Regen +5%',
    purpleEffect: 'Transforms into Ice form, 10% chance to cast Ice Thorn',
    orange1Effect: 'Final Dmgâ†“ +5%',
    orange2Effect: 'Ele Dmg +15%, cast chance 15%, casts once on transform',
    newElement: 'Ice',
    addsStatus: null,
    keyStats: 'MP Regen +5%, Final Dmgâ†“ +5%',
    provides: ['ice', 'mp-regen', 'final-dmg-down', 'ele-dmg', 'sustain', 'transform'],
    wants: []
  },
  {
    skill: 'Aether Form',
    name: 'Wildfire',
    blueEffect: 'DoT +20%',
    purpleEffect: 'Transforms into Fire form, 10% chance to cast Wildfire Spread',
    orange1Effect: 'Final Dmg +5%',
    orange2Effect: 'Ele Dmg +15%, cast chance 15%, casts once on transform',
    newElement: 'Fire',
    addsStatus: null,
    keyStats: 'DoT +20%, Final Dmg +5%',
    provides: ['fire', 'dot', 'final-dmg', 'ele-dmg', 'transform'],
    wants: []
  },
  {
    skill: 'Aether Form',
    name: 'Thunder',
    blueEffect: 'Crit Chance +5%',
    purpleEffect: 'Transforms into Lightning form, 10% chance to cast Thunderstorm',
    orange1Effect: 'HoH +30%',
    orange2Effect: 'Ele Dmg +15%, cast chance 15%, casts once on transform',
    newElement: 'Lightning',
    addsStatus: null,
    keyStats: 'Crit Chance +5%, HoH +30%',
    provides: ['lightning', 'crit', 'hoh', 'ele-dmg', 'sustain', 'transform'],
    wants: []
  }
];

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RUNES };
}
