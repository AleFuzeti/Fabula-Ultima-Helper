const heroicSkillsData = [
// CORE RULEBOOK
  {
    name: "Arcane Echoes",
    requirement: ["Arcanist"],
    description: "When you successfully perform a Check to fill or erase one or more sections of a Clock, if the domains of one or more Arcana you have bound are applicable to the Check in question, you may fill or erase an additional section of that Clock.",
    description2: "The Game Master has final say on whether a given domain applies or not.",
    book: "Core Rulebook",    
  },
  {
    name: "Revelation",
    requirement: ["Arcanist"],
    description: "You make contact with an unknown Arcanum and bind it to your soul. This Arcanum must be something you design together with the rest of the group; as long as you live, no one else in your world will be able to bind that Arcanum.",
    description2: "Once per scene while you are merged with an Arcanum, you may use an action and spend 2 Fabula Points to trigger that Arcanum's dismiss effect (if any) without dismissing them. Doing so does not trigger the Arcane Circle Skill.",
    book: "Core Rulebook",
  },
  {
    name: "Chimeric Mastery",
    requirement: ["Chimerist"],
    description: "Choose two creature Species among construct, demon, elemental, and undead. You can now use spell mimic to learn spells from creatures of the chosen Species. This Heroic Skill may be acquired up to twice, each time selecting two Species from the list above. Whenever you acquire this Skill, you also increase your upper limit for memorized Chimerist spells by 2.",
    description2: "This Heroic Skill may be acquired up to twice, each time selecting two Species from the list above. Whenever you acquire this Skill, you also increase your upper limit for memorized Chimerist spells by 2.",
    book: "Core Rulebook",
  },
  {
    name: "Powerful Spell",
    requirement: ["Chimerist", "Elementalist", "Entropist", "Spiritist"],
    description: "When you cast a spell that deals damage to one or more creatures, that spell deals 5 extra damage to each creature.",
    description2: "The amount of extra damage increases to 10 if you are level 40 or higher.",
    book: "Core Rulebook",
  },
  { 
    name: "Adversity",
    requirement: ["Darkblade"],
    description: "As long as you are suffering from one or more status effects, you gain a +1 bonus on all Checks for every status effect you are suffering from, and you deal 2 extra damage for every status effect you are suffering from (be it with attacks, spells, Arcana, items or any other method).",
    book: "Core Rulebook",
  },
  {
    name: "Heartbreaker",
    requirement: ["Darkblade"],
    description: "When you hit a creature with an attack, if that attack only targeted that creature and you have a Bond towards them, you may choose to spend half of your current Hit Points, rounded down. If you do, the attack deals extra damage equal to 【10 multiplied by the strength of your Bond towards the target】.",
    description2: "You may use this Skill only on your turn during a conflict, and only once per turn.",
    book: "Core Rulebook",
  },
  {
    name: "Volcano",
    requirement: ["Elementalist"],
    description: "You learn the ultimate Elementalist spell: Volcano.",
    description2: "40 MP, Special, Instantaneous",
    description3: "You channel the fury of the planet into a powerful wave of fire and magma. Choose one option: one creature you can see suffers 50 fire damage; or you choose any number of creatures you can see, and each of them suffers 30 fire damage. These amounts increase by 5 if you are level 20 or higher, or by 10 if you are level 40 or higher.",
    description4: "Damage dealt by this spell ignores Resistances and Immunities.",
    book: "Core Rulebook",
  },
  {
    name: "Comet",
    requirement: ["Entropist"],
    description: "You learn the ultimate Entropist spell: Comet.",
    description2: "50 MP, Special, Instantaneous",
    description3: "You rip open a large portal to the Cosmos, calling down astral debris from the gaping void. Choose one option: you deal 60 damage to one enemy you can see; or you deal 40 damage to every enemy you can see. This damage increases by 5 if you are level 20 or higher, or by 10 if you are level 40 or higher.",
    description4: "Damage dealt by this spell has no type (thus ignoring damage Affinities).",
    book: "Core Rulebook",
  },
  {
    name: "Monkey Grip",
    requirement: ["Fury"],
    other: "Mastered Fury",
    description: "You may equip two-handed weapons belonging to the flail, heavy, spear, or sword Categories in a single hand slot.",
    description2: "This allows you, for instance, to enjoy the benefits of two-weapon fighting while wielding a pair of two-handed weapons, or to equip a two-handed weapon in your main hand slot and a shield in your off-hand slot.",
    book: "Core Rulebook",
  },

  {
    name: "Powerful Strike",
    requirement: ["Fury", "Weaponmaster"],
    description: "When you hit one or more creatures with a melee attack, that attack deals 5 extra damage to each creature.",
    description2: "The amount of extra damage increases to 10 if you are level 40 or higher.",
    book: "Core Rulebook",
  },
  {
    name: "Rampart",
    requirement: ["Guardian"],
    description: "During the first round of each conflict scene, you have Resistance to all damage types and cannot suffer status effects.",
    description2: "These benefits only last until the end of the first round.",
    book: "Core Rulebook",
  },
  {
    name: "Unbreakable",
    requirement: ["Guardian"],
    description: "Once per scene when you are about to be reduced to 0 Hit Points, you may instead choose to withstand the pain and be reduced to exactly 1 Hit Point.",
    book: "Core Rulebook",
  },
  {
    name: "Mathemagic",
    requirement: ["Loremaster"],
    description: "When you cast a spell with a target of 'One creature', you may double the spell's total MP cost.",
    description2: "If you do, choose an Attribute (Dexterity, Insight, Might, or Willpower) and a die size (d6, d8, d10 or d12). The spell now targets all creatures present on the scene whose current Attribute die size matches your choice, regardless of whether they are friends or foes (you might even end up targeting yourself). The effects of the spell are fully applied to every target.",
    description3: "If the spell is an offensive spell, it follows the normal rules: you perform a single Magic Check and confront it with the Magic Defense of each target to determine who is hit by the spell.",
    book: "Core Rulebook",
  },
  {
    name: "Predictable!",
    requirement: ["Loremaster"],
    description: "During a conflict, you may use an action and spend 20 Mind Points to anticipate the upcoming moves of a creature you can see, as long as you know two or more of that creature's Traits. If you do so, choose one type of action among the following: Attack, Guard, Objective, Spell, or Skill. Until the start of your next turn, the creature must spend 20 Mind Points whenever they wish to perform that action. If they can't, they must perform a different action.",
    book: "Core Rulebook",
  },
  {
    name: "Disarming Rhetoric",
    requirement: ["Orator"],
    description: "During a conflict scene, you may use an action and choose a soldier-rank creature that can hear and understand you (the Game Master must tell you who is a valid target). If that creature is shaken or in Crisis, you may spend an amount of Mind Points equal to 【20 + half that creature's level】 to have them peacefully leave the conflict.",
    book: "Core Rulebook",
  },
  {
    name: "Repetition",
    requirement: ["Orator"],
    description: "Once per turn during a conflict, after you use the Condemn Skill or the Encourage Skill, you may immediately perform that same Skill again (on the same target or a different one). You must still pay the Mind Point cost for the second use of the Skill.",
    book: "Core Rulebook",
  },
  {
    name: "Pillage",
    requirement: ["Rogue"],
    other: "Acquired the Soul Steal Skill.",
    description: "When you use the Soul Steal Skill, you may target any number of creatures at the same time (you perform a single Check and compare it to the Magic Defense of each creature you are attempting to steal from).",
    book: "Core Rulebook",
  },
  {
    name: "Vanish",
    requirement: ["Rogue"],
    description: "When you hit one or more creatures with an attack, you may spend 1 Fabula Point. If you do, each of those creatures will be unable to perform any action that requires them to be able to see you until the start of your next turn.",
    book: "Core Rulebook",
  },
  {
    name: "Perfect Aim",
    requirement: ["Sharpshooter"],
    other: "Acquired the Warning Shot Skill.",
    description: "When you hit one or more creatures with a ranged attack and choose to deal no damage in order to gain the benefits of the Warning Shot Skill, you may choose two options instead of one (for instance, you could inflict both shaken and slow on each creature, or inflict a status effect on each creature while also recovering 20 Mind Points).",
    book: "Core Rulebook",
  },
  {
    name: "Powerful Shot",
    requirement: ["Sharpshooter"],
    description: "When you hit one or more creatures with a ranged attack, that attack deals 5 extra damage to each creature.",
    description2: "The amount of extra damage increases to 10 if you are level 40 or higher.",
    book: "Core Rulebook",
  },
  {
    name: "Hope",
    requirement: ["Spiritist"],
    description: "You learn the ultimate Spiritist spell: Hope.",
    description2: "40 MP, Special, Instantaneous",
    description3: "You rekindle the flames of courage and hope within a defeated hero. Choose a Player Character who surrendered but is still present on the scene: that Player Character immediately regains consciousness and recovers an amount of Hit Points equal to their Crisis score. Note that this spell will not undo the consequences of the character's surrender and is of no use if the character left the scene as part of their surrender — such as if they were captured and dragged away, or if they were trapped in a parallel dimension, and so on.",
    description4: "A Player Character may only be affected by this spell once per scene; if a character is brought back into the conflict by this spell and is subsequently reduced to 0 Hit Points again, they must sacrifice themselves or surrender as per the normal rules (including a new consequence and 2 more Fabula Points if they surrender).",
    book: "Core Rulebook",
  },
  {
    name: "Deep Pockets",
    requirement: ["Tinkerer"],
    description: "When you spend Inventory Points, you spend 1 less Inventory Point (minimum 1).",
    book: "Core Rulebook",
  },
  {
    name: "Upgrade",
    requirement: ["Tinkerer"],
    description: "Once per rest, you may choose one option: add a Quality to a single weapon, armor, or shield that doesn't have one; or replace the current Quality of a single weapon, armor, or shield with a different Quality.",
    description2: "When you use this Skill, you must select a Quality from the default list for that item type as long as the cost modifier associated with that ability is +1000 zenit or lower. Then, you must spend an amount of zenit equal to twice the cost modifier of the chosen ability. The modified item will be ready at the end of the rest; you may only modify one item per rest.",
    description3: "The default list of weapon abilities can be found on page 269, while the default list of armor and shield abilities can be found on page 280.",
    book: "Core Rulebook",
  },
  {
    name: "Heroic Companion",
    requirement: ["Wayfarer"],
    other: "Have the Faithful Companion Skill",
    description: "Your bond with your companion grows stronger. You gain the following benefits:",
    description2: "- The companion's maximum Hit Points increase by 10.",
    description3: "- Choose one of the companion's Attributes: Dexterity, Insight, Might, or Willpower. The chosen Attribute is permanently increased by one die size (up to a maximum size of d12).",
    description4: "- The companion gains an additional Skill. When you reach level 40, or if you have already reached it, the companion gains an additional Skill. Make sure to discuss your Skill choices with the Game Master and the other Players.",
    book: "Core Rulebook",
  },
  {
    name: "Status Immunity",
    requirement: ["Wayfarer"],
    description: "You become completely immune to a single status effect of your choice.",
    book: "Core Rulebook",
  },
  {
    name: "Tempest Strike",
    requirement: ["Weaponmaster"],
    description: "When you perform a melee attack with the multi property, if you choose to target only one creature, the attack deals 5 extra damage if the attack had multi (2), or 10 extra damage if the attack had multi (3 or higher).",
    book: "Core Rulebook",
  },









// Playtest 08-09-23
{
  name: "Revelation (Rework)",
  requirement: ["Arcanist"],
  description: "You make contact with a previously unknown Arcanum, which you design together with the rest of your group, and bind that Arcanum to your soul (feel free to make it a bit stronger than normal, since it was obtained through a Heroic Skill). For as long as you live, no one else in your world will be able to bind that Arcanum.",
  description2: "When you summon an Arcanum, if you are in Crisis and choose both options of the Quick Summoning Skill, you only suffer the first penalty (the dismiss effect of the summoned Arcanum will be available for this summoning).", 
  book: "Playtest 08-09-23",
},
{
  name: "Adversity (Rework)",
  requirement: ["Darkblade"],
  description: "As long as you are suffering from one or more status effects, you gain a +1 bonus on all Checks you perform for every status effect you are suffering from (up to a maximum of +3), and you also deal 2 extra damage for every status effect you are suffering from (be it with attacks, spells, Arcana, items, or any other method; up to a maximum of 6 extra damage).",
  book: "Playtest 08-09-23",
},
{
  name: "Ultimagic",
  requirement: ["Elementalist"],
  description: "You learn the ultimate Elementalist spell: Ultimagic.",
  description2: "40 MP, Special, Instantaneous",
  description3: "Choose one option: you deal 50 damage of the type you have chosen to one enemy you can see; or you deal 30 damage of the type you have chosen to every enemy you can see. This damage increases by 5 if you are level 20 or higher, or by 10 if you are level 40 or higher.",
  description4: "Damage dealt by this spell ignores Immunities and Resistances.",
  book: "Playtest 08-09-23",
},
{
  name: "Comet (Rework)",
  requirement: ["Entropist"],
  description: "You learn the ultimate Entropist spell: Comet.",
  description2: "50 MP, Special, Instantaneous",
  description3: "You rip open a large portal to the Cosmos, calling down astral debris from the gaping void. Choose one option: you deal 60 damage to one enemy you can see; or you deal 40 damage to every enemy you can see. This damage increases by 5 if you are level 20 or higher, or by 10 if you are level 40 or higher.",
  description4: "Damage dealt by this spell has no type (thus ignoring damage Affinities).",
  book: "Playtest 08-09-23",
},
{
  name: "Monkey Grip (Rework)",
  requirement: ["Fury"],
  other: "Mastered Fury",
  description: "You may now equip two-handed weapons belonging to the firearm, flail, heavy, spear, and sword Categories within a single hand slot.",
  description2: "Additionally, the first attack you perform with a two-handed weapon during each turn deals 5 extra damage, and its damage ignores Resistances.",
  book: "Playtest 08-09-23",
},
{
  name: "Rampart (Rework)",
  requirement: ["Guardian"],
  description: "Once per conflict scene, at the beginning of a round, if you have a martial armor or a shield equipped, you may spend 20 Mind Points.",
  description2: "If you do, you and every ally present on the scene have Resistance to all damage types and cannot suffer status effects until the end of the round.",
  description3: "This does not let you recover from preexisting status effects.",
  book: "Playtest 08-09-23",
},
{
  name: "Mathemagic (Rework)",
  requirement: ["Loremaster"],
  description: "When you cast a spell with a target of 'One creature', you may choose an Attribute (Dexterity, Insight, Might, or Willpower) and a die size (d6, d8, d10, or d12).",
  description2: "If you do, the spell's target becomes 'Every creature present on the scene whose current die size in that Attribute matches your choice' and its total Mind Point cost is doubled.",
  description3: "Additionally, all mentions of 'the target' in the spell's text are replaced with 'each target'; or they are replaced with 'one or more targets' if the spell is Anomaly, Dispel, Mercy, or Mirror.",
  description4: "When the spell ends on one or more of its targets, it automatically ends on all its targets. If you cast an offensive spell this way, you perform a single Magic Check and confront it with the Magic Defense of each target.",
  description5: "Note: this version of Mathemagic assumes you are using reworked Acceleration.",
  book: "Playtest 08-09-23",
},
{
  name: "Upgrade (Rework)",
  requirement: ["Tinkerer"],
  description: "When you rest, you may choose any number of armors, shields, and/or weapons among those owned by your group. For each item chosen this way, you may either add a Quality to it (if it doesn't have one) or replace its current Quality with a different one.",
  description2: "These Qualities must come from the list of default Qualities available for items of that type, and must have an associated cost modifier of +1000 zenit or lower. At the end of the rest, you must pay an amount of zenit equal to the total sum of those cost modifiers, reduced by 【your Skill Level in Visionary, multiplied by 100】. If you do, the items will be modified according to your choices.",
  description3: "The default list of weapon abilities can be found on page 269, while the default list of armor and shield abilities can be found on page 280.",
  book: "Playtest 08-09-23",
},
{
  name: "Fast Learner",
  requirement: ["Wayfarer"],
  description: "Once per conflict scene when another Player Character you can see performs the Skill or Spell action to cast a spell or activate a Skill or Heroic Skill, if you have not learned or acquired that spell or Skill, you can temporarily learn or acquire that spell or Skill until the end of the scene.",
  description2: "If you acquire a Skill this way, you are treated as having 1 Skill Level in it, and you do not gain any of the additional benefits you would normally acquire when gaining that Skill through character progression: for instance, you would not create a new companion by temporarily acquiring the Faithful Companion Skill, nor would you learn any volumes, keys, or tones by temporarily acquiring the Magichant Skill.",
  book: "Playtest 08-09-23",
},
{
  name: "Tempest Strike (Rework)",
  requirement: ["Weaponmaster"],
  description: "When you perform a melee attack with the multi property, you gain a bonus to your Accuracy Check equal to the value of that multi property, and the attack deals 5 extra damage. If the attack targets only one creature, it deals another 5 extra damage.",
  book: "Playtest 08-09-23",
},








// HIGH FANTASY ATLAS  

  {
    name: "Grand Summoning",
    requirement: ["Arcanist"],
    other: "Level 30 or higher",
    description: "When you summon an Arcanum, you may decide to spend 1 Fabula Point and spend half of your current Hit Points (rounded down) to shape your lifeforce into a full manifestation of their power. If you do, the Arcanum manifests as a soldier-rank creature of the demon Species under your control (they count as an ally and have their own independent turn during conflicts - if you use this Skill during a conflict scene, the Arcanum joins the scene at the end of the current round). You also do not gain any of the merge benefits you would normally enjoy when summoning that Arcanum. The summoned creature has the following profile:",
    description2: "- Level is equal to your level (thus gaining the bonuses to Checks and damage listed under steps 8 on page 303 of the Core Rulebook). - A d10 in one Attribute of your choice, and a d8 in all other Attributes. - Maximum Hit Points equal to 【twice the creature's base Might die size, plus half of your maximum Hit Points】. - The creature has no Mind Points. - Resistance to two damage types of your choice. - The creature receives all the merge benefits the Arcanum would normally grant you when summoned (damage Affinities, immunity to status effects, increased Attribute sizes, etc.). - If a merge benefit would cause the Arcanum to be dismissed, this will cause the summoned creature to vanish unless you spend 20 Mind Points. - A melee basic attack whose Accuracy Check relies on two different Attributes of your choice and deals 【HR + 8】physical damage. - Choose two different options: the attack is a ranged attack; or it deals 4 extra damage; or it deals damage of a type other than physical; or the Accuracy Check relies on a single Attribute. - The creature may perform the Skill action to produce one of the dismiss effects normally granted by that Arcanum, but doing so will cause the summoned creature to vanish unless you spend 20 Mind Points. ", 
    description3: "The following rules apply when you Grand Summon an Arcanum:", 
    description4: "- The creature is always summoned at full Hit Points, with no status effects. - The creature vanishes if it reaches 0 Hit Points, if you die, lose consciousness or leave the scene, or if you summon or Grand Summon an Arcanum again. - The creature also vanishes when a scene ends, or if you simply command them to do so (this will not trigger the corresponding Arcanum's dismiss effect).",
    description5: "Take note of all choices made for Attributes and basic attack during the first time Summon a given Arcanum: these choices will remain unchanged whenever you Grand Summon that same Arcanum again in the future.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Fast Rituals",
    requirement: ["Chimerist", "Elementalist", "Entropist", "Spiritist"],
    description: "When you initiate a Ritual during a conflict scene, its Ritual Clock is created with two fewer sections than normal, to a minimum of four sections.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Magic Guard",
    requirement: ["Chimerist", "Elementalist", "Entropist", "Spiritist"],
    description: "When you perform the Guard action, if you choose not to provide cover to another creature, you gain the following benefit until the start of your next turn:",
    description2: "When a creature you can see casts a spell, after that creature pays for the spell's MP cost, you may spend an amount of Mind Points equal to 【10 + the spell's total MP cost】 in order to completely stop the casting of the spell and negate its effects (the spell isn't cast, but the creature is still considered to have spent their action).",
    book: "High Fantasy Atlas",
  },
  {
    name: "Pulverizing Strike",
    requirement: ["Darkblade, Fury, Weaponmaster"],
    description: "After you hit a creature with Breach, if you attacked with a melee weapon that belongs to the heavy Category, you may have the attack deal damage equal to your High Roll (HR) instead of dealing no damage. Any source of extra damage, including the extra damage from the third option of the Breach Skill itself, still applies — ignore the damage dealt by the weapon.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Bimagus",
    requirement: ["Elementalist", "Entropist", "Spiritist"],
    other: "Level 30 or higher",
    description: "Once per turn during a conflict, if you have an arcane weapon equipped, you may use an action and spend 20 to 50 Mind Points to perform the Spell action for free twice, casting two spells without needing to pay their MP costs. If you do, the two spells must have a combined total MP cost equal to or lower than 【20 + the amount of MP you spent to use this Skill】, and the second spell must have a total MP cost that is equal to or lower than half the total MP cost of the first spell.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Bend Magic",
    requirement: ["Elementalist", "Entropist", "Invoker", "Symbolist"],
    other: "Acquired the Invocation Skill.",
    description: "After an enemy you can see hits or misses you with an offensive spell, if the Result of their Magic Check was an even number, you may immediately use the Invocation Skill for free (after the spell has been fully resolved) to perform an invocation you have access to against that enemy, without spending Mind Points. This invocation must not be a 'hex', and it may target only that enemy.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Rising Tide",
    requirement: ["Fury", "Weaponmaster"],
    description: "When you perform a melee attack using a weapon that belongs to the brawling Category, if you have no martial armor and no shields equipped, you gain 1 Bravery Point.",
    description2: "Your melee attacks using weapons that belong to the brawling Category deal extra damage equal to your current Bravery Points.",
    description3: "At the end of each scene, or if you have 5 or more Bravery Points at the end of your turn, you must spend all your accumulated Bravery Points and recover 10 Hit Points and Mind Points.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Swirling Swarm",
    requirement: ["Dancer", "Fury", "Sharpshooter"],
    description: "When you perform a ranged attack using a weapon that belongs to the thrown Category, if you have no martial armor and no shields equipped, you gain 1 Momentum Point.",
    description2: "You may never have more than 5 Momentum Points.",
    description3: "Your ranged attacks using weapons that belong to the thrown Category deal extra damage equal to your current Momentum Points.",
    description4: "When a creature hits you with an attack targeting your Defense, you must spend all your accumulated Momentum Points and increase your Defense score by an equal amount against that attack (this may turn the hit into a miss).",
    description5: "You also lose all Momentum Points at the end of each scene.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Hoplite",
    requirement: ["Commander", "Guardian"],
    description: "As long as you have a weapon equipped in your main hand slot and a shield equipped in your off-hand slot, your attacks with that weapon deal 5 extra damage and you gain a +1 bonus to Defense.",
    description2: "This Skill cannot be combined with custom weapons with the defence boost customization, nor with the Dual Shieldbearer Skill.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Blade Adept",
    requirement: ["Rogue", "Weaponmaster"],
    description: "While you have one or more melee dagger weapons equipped, you gain a +1 bonus to Defense and Magic Defense, and you treat those weapons as also belonging to the brawling, sword, and thrown Categories for the purpose of Skills and effects.",
    description2: "Additionally, your attacks with weapons that belong to the dagger Category may target creatures that cannot normally be targeted by melee attacks, as long as they are within your reach.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Arcane Mark",
    requirement: ["Sharpshooter", "Weaponmaster", "Symbolist"],
    description: "When you hit one or more creatures with an attack using a weapon that belongs to the arcane Category, the attack deals 5 extra damage and you may choose one of those creatures. If the next offensive spell you cast during this scene only targets the chosen creature, its Magic Check will trigger a critical success if both dice show the same number (and the Check is not a fumble).",
    book: "High Fantasy Atlas",
  },
  {
    name: "Bullet Break",
    requirement: ["Sharpshooter"],
    description: "After you negate a ranged attack with the Crossfire Skill, if the Result of the Accuracy Check was an even number, you may perform a free attack against the attacker with a ranged firearm weapon you have equipped. This attack must have that enemy as its only target; treat your High Roll as 0 when calculating damage dealt by it.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Double Arrow",
    requirement: ["Commander", "Sharpshooter"],
    description: "When you perform the Attack action with a ranged weapon that belongs to the bow Category, if you have no other weapon equipped, you may perform two separate attacks instead of one (against the same target or against different targets). If you do, both attacks follow the rules for two-weapon fighting: each attack loses the multi property and cannot gain it, and you treat the High Roll of each Accuracy Check as being equal to 0 when determining damage.",
    description2: "Note that this Heroic Skill does not stack with a custom weapon's quick customization (using Twin Arrows with a quick bow doesn't allow more than two attacks, in short).",
    book: "High Fantasy Atlas",
  },
  {
    name: "Fleeting Moment",
    requirement: ["Weaponmaster"],
    other: "Acquired the Counterattack Skill",
    description: "When you perform a Counterattack using a melee weapon that belongs to the sword Category, you may add your High Roll to the damage dealt by the attack (you do not have to treat it as being 0).",
    book: "High Fantasy Atlas",
  },
  {
    name: "Iron Forest",
    requirement: ["Commander", "Weaponmaster"],
    description: "After you hit one or more creatures with a melee attack using a weapon that belongs to the spear Category, if you have no other weapon equipped, you may spend 20 Mind Points and choose one of those creatures. If you do so, the attack deals half the normal amount of damage to each of its targets, and you choose one type of action among the following: Attack, Guard, Objective, Spell, or Skill. From now on, the chosen creature must spend 10 Mind Points whenever they wish to perform that type of action. If they can't, they must perform a different type of action. This effect lasts until the start of your next turn, or until you use this Skill again.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Spider's Web",
    requirement: ["Weaponmaster"],
    description: "When you perform the Attack action with a melee weapon that belongs to the flail Category, if you have no other weapon equipped, you may perform two separate attacks instead of one (against the same target or against different targets). If you do, both attacks follow the rules for two-weapon fighting: each attack loses the multi property and cannot gain it, and you treat the High Roll of each Accuracy Check as being equal to 0 when determining damage.",
    description2: "Note that this Heroic Skill does not stack with a custom weapon's quick customization (using Spider's Web with a quick flail doesn't allow more than two attacks, in short).",
    book: "High Fantasy Atlas",
  },
  {
    name: "Triple Slash",
    requirement: ["Dancer", "Weaponmaster"],
    description: "As long as you have a one-handed melee weapon that belongs to the dagger or sword Categories equipped in each of your normal hand slots, you may treat your armor slot as if it were a second off-hand slot. You may only use this special slot to equip a one-handed melee weapon that belongs to the dagger or sword Categories — note that the Monkey Grip Skill does not turn two-handed weapons into one-handed weapons, and thus cannot be used in combination with Triple Slash.",
    description2: "When you perform the Attack action while you have three daggers and/or swords equipped, you may attack once with each weapon. This follows the normal rules for two-weapon fighting: each of the three attacks loses the multi property and cannot gain it, and you treat the High Roll (HR) of each Accuracy Check as being equal to 0 when determining damage.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Power Chord",
    requirement: ["Chanter"],
    description: "When you sing a verse with medium or high volume, you may double the verse's cost in Mind Points, or spend 1 Fabula Point. If you do, you and every ally that is able to hear you gain the following benefit until the start of your next turn: your Accuracy Checks trigger a critical success when both dice show the same number (as long as the Check is not a fumble).",
    book: "High Fantasy Atlas",
  },
  {
    name: "Theme Song",
    requirement: ["Chanter"],
    description: "When you acquire this Skill, you obtain a theme song — give it a name and assign it a key from the ones you have learned (you can also choose a real-world song for this).",
    description2: "Once per conflict scene after you sing a verse in your theme song's key, you may start your theme song — if it's a real song, it's a great idea to play it in the background!",
    description3: "While singing your theme song, you gain the following benefits:",
    description4: "- You gain Resistance to 【theme song's key type】 damage. - When you deal 【theme song's key type】 damage, you deal 5 extra damage and the type of that damage cannot be changed. - The MP cost for singing verses in the same key as your theme song is halved. This benefit applies to you and to any of your allies who are able to sing verses.",
    description5: "The theme song lasts until the end of the scene or until you leave the scene, die, or fall unconscious. The theme song also ends as soon as you sing a verse in a key other than the theme song's, if your turn ends and you have not sung any verse, or if another character starts their theme song.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Ceaseless Battlefield",
    requirement: ["Commander"],
    description: "The MP costs for your Bishop's Edict, Charging Cavalry and King's Castle are halved.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Tabula Rasa",
    requirement: ["Commander"],
    description: "After you use Bishop's Edict or King's Castle Skills, if you are in Crisis, you may have every enemy creature present on the scene lose 10 Hit Points. This amount increases to 20 Hit Points if you are level 20 or higher, or 30 Hit Points if you are level 40 or higher.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Paso Doble",
    requirement: ["Dancer"],
    other: "Acquired the Follow My Lead Skill.",
    description: "While you are in Crisis, you ignore the MP cost for your Follow My Lead Skill.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Showstopper",
    requirement: ["Dancer"],
    description: "At the start of your turn during a conflict, if you have no martial armor equipped, you may spend 1 Fabula Point to immediately perform up to three different dances among those you know, in the order you prefer and without paying their MP cost. If you do, you cannot perform dances in any way until the end of your next turn.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Clean Slate",
    requirement: ["Symbolist"],
    description: "You may use an action and spend up to 30 Mind Points to choose one creature you can see for every 5 MP spent this way. Each creature chosen this way recovers from all status effects and is no longer affected by any spells with a duration of 'Scene' that were affecting them.",
    book: "High Fantasy Atlas",
  },
  {
    name: "Ritual Seals",
    requirement: ["Symbolist"],
    description: "When you perform a Ritual outside a conflict scene, if that Ritual has a total cost equal to or lower than 60 Mind Points, you may stop the process immediately before the Magic Check and store the Ritual's effect inside a Ritual seal placed on a surface you can touch. If you do, name a condition — this can be anything from 'when I enter Crisis' to 'as soon as I snap my fingers'. When that condition is met, the seal vanishes and the Ritual is unleashed at the seal's location: you perform the Magic Check and resolve the effects as normal (even if you are unconscious or not present on the scene).",
    description2: "You may only have one Ritual seal active at the same time — if you die or create a new Ritual seal, the one you previously created will vanish.",
    book: "High Fantasy Atlas",
  },







// TECHNO FANTASY ATLAS
  {
    name: "Mimeoclepsis",
    requirement: ["Chimerist", "Mutant"],
    other: "Acquired both the Genoclepsis and Spell Mimic Skills.",
    description: "When you use the Genoclepsis Skill on an NPC, if that NPC's Species is among those you can learn spells from with the Spell Mimic Skill, the Game Master must reveal all spells known by that NPC.",
    description2: "Then, if that NPC knows one or more spells, you may learn one of those spells as a Chimerist spell of your own.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Dreamslice",
    requirement: ["Darkblade", "Esper"],
    description: "When you hit one or more creatures with an attack from your Shadow Strike Skill using a weapon that belongs to the sword Category, each of those creatures loses an amount of Mind Points equal to 【the number you rolled on your Might die for Shadow Strike】.",
    description2: "Then, if 【the number you rolled on your Might die for Shadow Strike】 was 8 or higher, you may choose one creature hit by the attack. If that creature is your focus or you have a Bond towards them, that creature will perform one fewer action during their next turn (to a minimum of zero actions).",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Make it or Break it",
    requirement: ["Darkblade", "Fury"],
    description: "When you attack with a weapon, you may declare “make it or break it!” before the Accuracy Check. If you do, the Check's High Roll is doubled when determining damage, and you apply the following penalties if the result is an even number:",
    description2: "If the weapon you used is transforming, it immediately changes form and it cannot change form again until the end of the scene.",
    description3: "If the weapon you used is not transforming, or if it is a transforming weapon that cannot change form (see above), it is placed inside your backpack and cannot be equipped until the end of the scene; however, you may immediately perform the Equipment action for free.",
    description4: "This Heroic Skill does not apply to attacks with unarmed strikes, improvised weapons, weapon modules, or Twin Shields.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Arcane Soldier",
    requirement: ["Elementalist", "Sharpshooter", "Weaponmaster"],
    other: "Know at least two offensive spells.",
    description: "You may use an action to perform a free attack with a weapon you have equipped. This attack must target a single enemy. If the attack is successful, treat your High Roll as 0 when determining damage dealt by it. After the attack has been resolved, if it was successful, you may immediately perform the Spell action for free: the spell you cast this way must be an offensive spell with a total MP cost equal to or lower than 20, and it may only target the enemy you attacked (you must still spend the appropriate Mind Points and perform the Magic Check). Treat your Magic Check’s High Roll as 0 when determining damage or other effects caused by this spell.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Bullet Time",
    requirement: ["Entropist", "Rogue"],
    other: "Acquired the Dodge and Stolen Time Skills.",
    description: "You gain a bonus to your Initiative modifier equal to 【your SL in Dodge + your SL in Stolen Time】.",
    description2: "As long as you have no shields and no martial armor equipped, all damage you suffer is reduced by an amount equal to 【your SL in Dodge】 (applied before damage Affinities) and you deal extra damage equal to 【your SL in Stolen Time】.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Quick Scan",
    requirement: ["Loremaster"],
    description: "When you perform the Study action during a conflict, you may examine the profiles of all enemies you can see. If you do, you perform a single 【INS + INS】 Open Check and apply the result separately to each enemy (see Core Rulebook, page 319). However, if you have acquired the Flash of Insight Skill, this Check cannot trigger it.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Hit The Nerve",
    requirement: ["Chanter", "Orator"],
    other: "Acquired the Condemn Skill.",
    description: "When you successfully use the Condemn Skill against an enemy you know one or more Traits of, you recover an amount of Mind Points equal to half the amount of MP lost by the target, and you may have them suffer enraged instead of the normal status effects.",
    description2: "Additionally, when you perform an Opposed Check against an enraged creature, or an Accuracy Check or Magic Check for an attack or offensive spell that includes one or more enraged creatures among its targets, you trigger a critical success when both dice show the same number (as long as the Check is not a fumble).",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Decoy Bait",
    requirement: ["Sharpshooter"],
    other: "Acquired the Hawkeye Skill.",
    description: "When you use your Hawkeye Skill and choose the first option, if no decoy bait is present on the scene, you may spend 10 Mind Points. If you do, you create a decoy bait with Hit Points equal to half your level + (your SL in Hawkeye, multiplied by 5).",
    description2: "When an enemy who can see your decoy bait deals damage to one or more creatures, your decoy bait automatically suffers damage in place of one of those creatures, chosen randomly (your decoy bait is always treated as having neutral Affinity towards all damage types, and cannot gain any other Affinity).",
    description3: "When an enemy reduces your decoy bait to 0 Hit Points, your decoy bait is automatically destroyed and you roll 1d10. If the number rolled is equal to or lower than 3 + your SL in Hawkeye, you may immediately perform a free attack with a bow or firearm weapon you have equipped. This attack may only target that enemy, gains a bonus equal to your SL in Hawkeye to its Accuracy Check, and its damage ignores Immunities and Resistances.",
    description4: "Your decoy bait cannot recover Hit Points and is automatically destroyed at the end of the scene. Make sure to describe what it looks like!",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Nebulization",
    requirement: ["Tinkerer"],
    other: "Advanced advanced Alchemy benefit from the Gadget Skill",
    description: "When you create a potion, you gain 1 Nebulization Point, or 2 Nebulization Points if that potion was created via the Alchemy benefit of the Gadget Skill.",
    description2: "Potions and elemental shards you create deal extra damage equal to twice your current Nebulization Points.",
    description3: "Potions you create that restore Hit Points and/or Mind Points restore additional HP and/or MP equal to 【your current Nebulization Points, multiplied by 5】.",
    description4: "You may never have more than 5 Nebulization Points, and you lose all of them at the end of each scene.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Quantum Magicannon",
    requirement: ["Tinkerer"],
    other: "Advanced advanced Magitech benefit from the Gadget Skill",
    description: "Your attacks with the magicannon deal 5 extra damage.",
    description2: "When you perform the Attack action with your magicannon, you may choose one option: destroy the magicannon and immediately create and equip a new one for free (ignore the IP cost), using this newly equipped magicannon for your attack; or the attack gains multi (3); or you perform two separate attacks instead of one, following the rules for two-weapon fighting (see Core Rulebook, page 69).",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Brainwave Discharge",
    requirement: ["Esper"],
    description: "While your Brainwave Clock is full, you may use an action to erase all of its sections. If you do, you may choose one option: you deal 20 physical damage to every enemy that is present on the scene, or you deal 30 physical damage to a single enemy you can see. This amount increases by 10 if you are level 20 or higher, or by 20 if you are level 40 or higher.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Psychic Field",
    requirement: ["Esper"],
    description: "Your gifts with event 'When you deal damage' can also be used 'When an ally who is able to hear you deals damage'.",
    description2: "Your psychic shield gift, if you have acquired it, has its effect changed to 'You and every ally who is able to hear you may treat your Defense and Magic Defense scores as being equal to 【your current Willpower die size + (the number of filled sections in your Brainwave Clock, multiplied by 2)】 against that Check (you may still use your normal scores if better).",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Greater Akromorphosis",
    requirement: ["Mutant"],
    other: "Acquired the Akromorphosis Skill.",
    description: "You gain the following benefits based on the current Category of your unarmed strikes.",
    description2: "Arcane, brawling, dagger, thrown: your attacks with unarmed strikes treat the Defense of each target as being equal to their current Insight die size.",
    description3: "Bow, sword: your attacks with unarmed strikes that target two or more creatures deal 5 extra damage.",
    description4: "Firearm, heavy: your unarmed strikes deal 5 extra damage to constructs, and 5 extra damage to non-construct creatures who have at least one shield and/or martial armor equipped.",
    description5: "Flail, spear: you gain a +2 bonus to Defense, and your attacks with unarmed strikes may target flying creatures.",
    description6: "If your unarmed strikes are treated as belonging to more than one Category (for instance due to the Blade Adept Heroic Skill; see High Fantasy Atlas, page 154), you gain all the benefits of the corresponding Categories.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Greater Ecdysis",
    requirement: ["Mutant"],
    description: "When you use the Ecdysis Skill, you may also choose one or both options: you recover from all status effects, and/or if you are affected by one or more spells with a duration of 'Scene', you are no longer affected by any of those spells.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Greater Theriomorphosis",
    requirement: ["Mutant"],
    description: "When you use the Theriomorphosis Skill on your turn during a conflict, if this did not happen through the Genoclepsis Skill, you may manifest the effects of up to three therioforms from those you have learned (instead of two). Then, you may immediately perform an additional action. This additional action cannot be used for the Theriomorphosis Skill.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Dynamic Synchronization",
    requirement: ["Pilot"],
    description: "At the start of your turn during a conflict, if you are driving your personal vehicle, you may choose one option: you synchronize with another Player Character who is present on the scene and driving their own personal vehicle, or you synchronize with another Player Character who is a passenger on your personal vehicle. Describe how the two of you join forces! You and the chosen character both receive the following benefits as long as the synchronization remains active:",
    description2: "- When you perform a Check, you may use the current Attribute die sizes of the other PC in place of yours (for one or both dice).",
    description3: "- When you deal damage, deal extra damage equal to 【the strength of your Bond towards the other PC, plus the strength of their Bond towards you】.",
    description4: "- You may use an action to perform a free attack with one enabled or disabled weapon module present on the personal vehicle the other PC is currently on.",
    description5: "- When your turn ends, if the other PC has yet to take their turn during this round, they may take their turn immediately after yours.",
    description6: "This synchronization lasts until the end of the scene, or until you or the other Player Character die, fall unconscious, leave the scene, synchronize with someone else, or are no longer aboard a personal vehicle.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Overload Burst",
    requirement: ["Pilot"],
    other: "Acquired the Compression Tech Skill.",
    description: "Choose a damage type from bolt, dark, fire, ice, and light.",
    description2: "When you are reduced to 0 Hit Points for the first time during a scene, if you are driving your personal vehicle, you may choose to be reduced to exactly 1 Hit Point instead. If you do, you and any passengers leave your personal vehicle, which disappears from the game world. Then, you may deal an amount of damage equal to your Crisis score to a single creature you can see. This damage is of the type you have chosen from the list above. If your personal vehicle disappears from the game world this way, the next use of your Compression Tech Skill has an additional cost of 1 Fabula Point.",
    book: "Techno Fantasy Atlas",
  },
  {
    name: "Steel Witch",
    requirement: ["Pilot"],
    description: "After you cast the first spell of your turn during a conflict, if you are driving your personal vehicle, you may choose one option (after the spell has been resolved): choose one enabled module and disable it, then choose one disabled module and enable it; or the next spell you cast before the end of this scene that deals damage deals 5 extra damage; or the next spell you cast before the end of this scene that restores Hit Points to one or more creatures restores 10 additional Hit Points to each of those creatures.",
    book: "Techno Fantasy Atlas",
  },





//

  {
    name: "Auramancer's Refraction",
    requirement: ["Arcanist", "Spiritist"],
    other: "Have learned the Aura spell and/or the Barrier spell.",
    description: "Choose a damage type among air, bolt, earth, fire, ice, and light.",
    description2: "When an enemy you can see deals damage to one or more creatures who are affected by an Aura and/or Barrier spell you cast, the damage suffered by each of those creatures is reduced by an amount equal to 【half your level in the Spiritist Class】or to 【your level, divided by 10】 (use whichever value is higher; this reduction is applied before damage Affinities). Then, you may deal an amount of damage of the chosen type equal to 【half your level】 to that enemy. If you do, you cannot deal damage this way until the start of your next turn.",
    book: "Natural Fantasy Atlas",
  },
  {
    name : "Chimeric Soul",
    requirement: ["Chimerist", "Mutant"],
    other: "Acquired the Spell Mimic Skill.",
    description: "When you cast one of your Chimerist spells, you gain a benefit based on the Species of the creature you originally learned that spell from. Choose one option: you gain Resistance to both damage types associated with that Species; or when you deal damage of a type associated with that Species, you deal 5 extra damage. The chosen benefit lasts until the end of the scene, or until you cast a Chimerist spell again.",
    description2: "The damage types associated to each Species are beast (air, ice), construct (earth, poison), demon (fire, ice), elemental (air, bolt), monster (bolt, fire), plant (earth, light), and undead (dark, poison).",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Fitcast",
    requirement: ["Chimerist", "Darkblade", "Esper", "Fury", "Wayfarer"],
    description: "When you perform a Magic Check for a spell or Ritual, you may replace one of the Attributes with Might (such as 【MIG + MIG】 for a Chimerism Ritual).",
    description2: "As long as the Accuracy formula of a weapon you have equipped includes Might, you may treat that weapon as also belonging to the arcane Category for the purpose of Skills and effects that require it.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Brambleheart",
    requirement: ["Darkblade", "Floralist"],
    other: "Acquired the Chloromancy Skill.",
    description: "You are Resistant to light damage and poison damage.",
    description2: "After you lose Hit Points, if you are in Crisis and a magiseed is present in your garden, you may fill 1 section of your Growth Clock.",
    description3: "Additionally, when you use the Shadow Strike Skill, you may have your attack deal poison damage instead of dark damage (the damage type still cannot be changed). If you do, your Shadow Strike deals extra damage equal to 【twice the number of filled sections in your Growth Clock】.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Cleansing Moonlight",
    requirement: ["Entropist", "Spiritist"],
    description: "When you hit one or more creatures with an offensive spell, if you have an arcane weapon equipped and the High Roll of your Magic Check is 8 or higher, you may have each of those creatures no longer be affected by all spells with a duration of 'Scene' that are currently affecting them.",
    description2: "When you cast a spell targeting one or more allies, if you have an arcane weapon equipped, you may choose one status effect among dazed, enraged, poisoned, shaken, slow, and weak: if you do, each target recovers from the chosen status effect.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Brave Bash",
    requirement: ["Commander", "Fury", "Guardian", "Pilot", "Weaponmaster"],
    description: "When you use the Bone Crusher Skill, if your attack targets only one creature and you have a shield equipped, you may challenge that creature until the end of your next turn.",
    description2: "The challenge also ends if that creature is challenged by someone else, or if you challenge another creature.",
    description3: "The creature you are challenging must include you among the targets of their attacks and offensive spells, if able; additionally, once per turn, when you deal damage to the creature you are challenging with a free attack using a one-handed melee weapon or a custom weapon belonging to the dagger or sword Category, you may deal 5 extra damage to that creature.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Power Nap",
    requirement: ["Guardian", "Merchant", "Wayfarer"],
    description: "On your turn during a conflict, you may use an action to recover an amount of Hit Points and Mind Points equal to 【20 + half your level】 and also recover from all status effects.",
    description2: "If you do, your turn ends immediately, you lose the ability to hear and see, and your Defense and Magic Defense scores become equal to 5 and cannot be modified in any way.",
    description3: "These penalties last until the start of your next turn, until after you lose Hit Points, or until after you are hit by an attack or offensive spell.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Wise Counsel",
    requirement: ["Commander", "Loremaster", "Orator"],
    description: "When you perform a Support Check, if the leader of the Group Check can hear and understand you, you may use 【INS + INS】【, INS + WLP】, or 【WLP + WLP】 instead of the normal Attributes required by the Support Check.",
    description2: "Additionally, when you use the teamwork option (see Core Rulebook, page 76) to support another Player Character's Check during their turn in a conflict scene, you may spend 10 Mind Points. If you do, choose up to two of the following benefits:",
    description3: "- That character recovers 20 Mind Points. - That character recovers from dazed, enraged and shaken.",
    description4: "At the end of that character's turn, choose one option: perform a free attack with a weapon you have equipped; or perform the Spell action for free, casting a spell whose total MP cost is equal to or lower than 20.",
    description5: "If that character succeeds on their Check and the Check allows them to fill or erase one or more sections of a Clock, they may fill or erase 1 additional section of it.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Skillful Dosage",
    requirement: ["Gourmet", "Loremaster", "Merchant", "Tinkerer"],
    description: "Potions and delicacies you create, as well as spells you cast, can now cause creatures to recover Hit Points and Mind Points beyond their maximum HP and MP scores. This cannot cause a creature's current HP and/or MP to go above 150% of the respective maximum scores; at the end of each scene, if the current Hit Points and/or Mind Points of a creature are still above their maximum scores, they become equal to the maximum score.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Greater Chloromancy",
    requirement: ["Floralist"],
    description: "Once per turn when a magiseed leaves your garden, if that magiseed has one or more 'at the end of your turn' effects, you may spend 20 Mind Points. If you do, reproduce one of those effects (you may also choose an effect that doesn't match the current sections of your Growth Clock).",
    description2: "Additionally, if you have acquired the Verdant Sway Skill, your Rituals can now also influence and control soldier-Rank creatures belonging to the plant Species (but you are still unable to create them).",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Green Thumb",
    requirement: ["Floralist"],
    description: "When you fill 1 or more sections of your Growth Clock, you may choose one option: you fill 1 additional section of your Growth Clock; or you fill 1 fewer section of your Growth Clock (to a minimum of 0 sections filled). If you do, you cannot use this effect again until after your Growth Clock has become completely empty.",
    description2: "Additionally, damage dealt by your magiseeds ignores Resistances.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "All you can Eat",
    requirement: ["Gourmet"],
    description: "Once per scene when you use the Cooking Skill, you may combine four ingredients into a delicacy (thus ignoring the normal limit of three ingredients). Other than that, the delicacy follows the normal rules.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Specialty of the House",
    requirement: ["Gourmet"],
    description: "When you acquire this Heroic Skill, choose three different tastes among bitter, salty, sour, sweet, and umami. Then, choose three different effects among the following:",
    description2: "- You deal 20 (choose one: dark, light) damage to each of this delicacy's targets. This amount increases to 30 damage if you are level 30 or higher. Choose the type of this effect when you acquire this Heroic Skill. - During the next turn of each of this delicacy's targets, all damage they deal becomes (choose one: dark, light) and its type cannot change. Choose the type of this effect when you acquire this Heroic Skill.",
    description3: "- For each of this delicacy's targets, if they are affected by one or more spells with a duration of 'Scene', instead they are no longer affected by any of those spells.",
    description4: "- Choose yourself or an ally you can see. For each of this delicacy's targets, the next time that target performs an attack or cast an offensive spell (r) before the end of this scene, they must include the chosen creature among the targets of that attack or spell (if able).",
    description5: "- Each of this delicacy's targets suffers enraged. - Each of this delicacy's targets suffers poisoned. - Each of this delicacy's targets recovers 30 Hit Points and 30 Mind Points, or 40 Hit Points and 40 Mind Points if you are level 30 or higher. - Each of this delicacy's targets recovers from a single status of their choice. - Each of this delicacy's targets recovers from dazed, enraged, and shaken. - Each of this delicacy's targets recovers from poisoned, slow, and weak.",
    description6: "When you create a delicacy using exactly 3 ingredients during a conflict, if each ingredient matches a different taste among those chosen when you acquired this Heroic Skill, you may ignore all of that delicacy's normal effects. If you do, you may instead apply one, two, or all the effects you chose when you acquired this Heroic Skill.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Inner Wellspring",
    requirement: ["Invoker"],
    description: "When you acquire this Heroic Skill and whenever you rest, you may choose one wellspring: air, earth, fire, lightning, or water. If you do, you gain the following benefits until your next rest:",
    description2: "- You always treat the chosen wellspring as being available during each scene, in addition to whatever wellsprings are already available.",
    description3: "- You may perform Rituals of the Elementalism discipline, but only if those Rituals manipulate the element of the chosen wellspring.",
    description4: "- You gain Resistance to the damage type corresponding to the chosen wellspring.",
    description5: "- When you deal damage, you may change its type to the one corresponding to the chosen wellspring. If you do, that damage ignores Resistances.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Strength of Five Wellsprings",
    requirement: ["Invoker"],
    description: "After you perform an invocation during a conflict, you and up to one ally you can see increase one of your Attributes' die sizes by one (up to a maximum of d12). This increase lasts until the end of the scene or until you use this Skill again, and the Attribute is based on the wellspring you invoked: air (Insight), earth (one Attribute of your choice), fire (Dexterity), lightning (Might), or water (Willpower).",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "For a Better Future",
    requirement: ["Merchant"],
    other: "Acquired the Real Treasure and Winds of Trade Skills.",
    description: "When you need to spend one or more Fabula Points, if you are not spending them to alter the story (see Core Rulebook, page 98), you may spend that many Trade Points instead. Describe which memories of your trades and journeys give you strength!",
    description2: "Additionally, when you gain two or more Trade Points through the Real Treasure or Winds of Trade Skills, you may choose to gain exactly 1 Trade Point instead. If you do, choose a settlement within 1 travel day of your position and increase its prosperity by an amount equal to 【your Skill Level in Winds of Trade + your Skill Level in Real Treasure】; a settlement's prosperity starts at 0 and has no upper limit.",
    description3: "The chart below indicates the effects of your donations on the settlement and on anything within 1 travel day of it.",
    description4: "10 or more: When you or an ally need to pay a cost in zenit, whatever the reason, that cost is halved.",
    description5: "15 or more: People gladly accommodate you and your allies: while in this area, you can always rest freely, without spending zenit. Furthermore, any travel rolls made in this area never use a die greater than d8.",
    description6: "20 or more: When a Villain in this area spends Ultima Points, they must spend twice as many Ultima Points.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Cheer Up!",
    requirement: ["Chanter", "Esper", "Orator"],
    other: "Acquired the My Trust in You Skill.",
    description: "When you use My Trust in You on another Player Character, that character chooses Dexterity, Insight, Might, or Willpower: they treat the chosen Attribute as being increased by one die size (up to a maximum of d12) until the end of the scene or until you use My Trust in You on them again.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Ephemeral Tranquility",
    requirement: ["Dancer", "Esper", "Rogue", "Spiritist", "Symbolist"],
    description: "When you cast the Hallucination or Torpor spells, you may apply both status effects to each target hit by the spell.",
    description2: "During a conflict, you may use an action and spend up to 20 Mind Points. For every 10 Mind Points spent this way, you may choose a different enemy you can see who is suffering from two or more status effects. Every enemy chosen this way recovers from all status effects and loses an amount of Hit Points equal to 【half your level + (the number of status effects that enemy recovered from this way, multiplied by 10)】.",
    description3: "Then, you recover 20 Mind Points for each of those enemies that entered Crisis or was reduced to 0 Hit Points by this effect.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Side by Side",
    requirement: ["Wayfarer"],
    other: "Acquired the Faithful Companion Skill.",
    description: "When your companion deals damage, they deal 5 extra damage.",
    description2: "When your companion performs a Check, you may spend 1 Fabula Point and invoke one of your companion's Traits in order to let them reroll one or both dice (as per the rules on page 46 of the Core Rulebook).",
    description3: "After you use the Faithful Companion Skill to have your companion perform an action during your turn, you may choose one option (after the companion's action has been resolved): you and your companion each recover 10 Mind Points; or the first time you or your companion perform a Check before the end of your next turn, that Check gains a bonus equal to 【your Skill Level in Faithful Companion】.",
    book: "Natural Fantasy Atlas",
  },
  {
    name: "Silent Hunter",
    requirement: ["Rogue", "Sharpshooter", "Weaponmaster"],
    other: "Acquired the High Speed Skill.",
    description: "When you use the High Speed Skill to perform a free attack with a weapon belonging to the bow, spear, or thrown Category, the attack deals extra damage equal to 【your Skill Level in the High Speed Skill, multiplied by 5】.",
    description2: "Additionally, when you attack one or more creatures with a weapon that belongs to the bow, spear, or thrown Category, those creatures cannot perform free attacks until the end of the current turn.",
    book: "Natural Fantasy Atlas",
  },






// Bonus 1
{
  name: "Birth of The Cruel",
  requirement: ["Necromancer"],
  description: "When a non-Villain NPC you can see that belongs to the beast, humanoid, monster, or plant Species dies, you may spend 2 Grave Points and reduce your maximum Hit Points and Mind Points by an amount equal to that NPC's level. If you do, their corpse becomes a Minion who obeys your telepathic commands:",
  description2: "- Its Species becomes undead and it receives all undead rules (see page 305 of the Core Rulebook). The new Affinities to dark, light, and poison damage overwrite any preexisting Affinity, but the original Species' rules are otherwise maintained.",
  description3: "- Its Rank becomes soldier; if the original creature was an élite or champion, the GM must reduce the Minion's HP and MP accordingly (Skills are maintained).",
  description4: "- The newly created Minion is a completely new creature and has full HP, full MP, and no status effects. It retains the original creature's equipment.",
  description5: "- Your Minion takes its own turn during conflicts, and the Game Master must count it as an additional Player Character when designing a conflict. - When you rest, your Minion also gains the full benefits of resting. - If your Minion is reduced to 0 Hit Points, if you are more than 1 travel day away from it, or if you die or fall unconscious, your Minion is immediately destroyed.",
  description6: "- You may also destroy your Minion at any time; if you want to create a new Minion, you must first destroy the current one. - If your Minion is destroyed, your maximum HP and MP scores return to normal.",
  book: "Fabula Bonus 1",
},
{
  name: "Harvester of Sorrow",
  requirement: ["Necromancer", "Entropist"],
  other: "Acquired both the Drain Spirit and Drain Vigor Spells.",
  description: "When you cast the Drain Spirit or Drain Vigor spells, the amount of Mind Points or Hit Points you recover is equal to the MP or HP loss suffered by the target, respectively (instead of being halved).",
  description2: "Additionally, your Drain Spirit causes the target to lose 【HR + 20】 Mind Points if you are level 20 or higher, or 【HR + 25】 Mind Points if you are level 40 or higher, instead of the normal 【HR + 15】.",
  book: "Fabula Bonus 1",
},
{
  name: "Pulse of the Maggots",
  requirement: ["Necromancer"],
  description: "As long as you have at least 1 Grave Point, you gain Immunity to dark and poison damage, Resistance to physical damage, and Vulnerability to light damage. These Affinities overwrite any other Affinity for those damage types, and cannot be altered in any way as long as you have at least 1 Grave Point.",
  book: "Fabula Bonus 1",
},





// Bonus 3
{
  name: "Black & White",
  requirement: ["Ace of Cards", "Darkblade", "Entropist", "Spiritist"],
  other: "Acquired the Magic Cards Skill.",
  description: "When you resolve the Double Trouble effect, you may have all of its damage become light or dark (instead of being of a type matching the suits of the resolved cards).",
  description2: "Additionally, as long as there is a joker in your discard pile, all damage dealt by your Blinding Flush, Double Trouble, and Magic Flush effects ignores Immunities and Resistances.",
  book: "Fabula Bonus 3",
},
{
  name: "Card Vanguard",
  requirement: ["Ace of Cards"],
  other: "Acquired the Magic Cards Skill.",
  description: "During a conflict, if you have two or fewer vanguard cards in play, you can use an action to choose 1 card from your hand and place it face down as a vanguard card; if you do, draw 1 card from your deck.", 
  description2: "When you suffer damage, if you have one or more vanguard cards in play, you may reveal one of them and place it on top of your discard pile: if you do and that card is a joker or its suit matches the type of the damage you suffered, you instead suffer no damage and regain an equal amount of Mind Points.",
  description3: "At the end of each conflict, if you have one or more vanguard cards in play, shuffle them back into your deck.",
  book: "Fabula Bonus 3",
},
{
  name: "Duel Master",
  requirement: ["Ace of Cards", "Fury", "Rogue", "Sharpshooter", "Weaponmaster"],
  other: "Acquired the Magic Cards Skill.",
  description: "When you resolve the Magic Pair effect, if you attack with a weapon belonging to the arcane or thrown Category, you deal extra damage equal to the common value of the resolved cards and regain an amount of Mind Points equal to twice the common value of the resolved cards.",
  description2: "For instance, resolving a pair of 5s will allow you to deal 5 extra damage and regain 10 Mind Points.",
  book: "Fabula Bonus 3",
},
{
  name: "Forbidden Rite",
  requirement: ["Ace of Cards", "Arcanist"],
  other: "Acquired 3 Skill Levels in the Magic Cards Skill.",
  description: "As long as there are one or more cards in your discard pile, you have Resistance to the damage type matching the suit of the card on top of your discard pile (if that card is a joker, you have Resistance to all four damage types: air, earth, fire, and ice).",
  description2: "You also add the following effect to your list of sets:",
  description4: "Forbidden Monarch: 4 cards of the same value, none of which is a joker + 1 joker",
  description5: "You deal 777 damage to each enemy present on the scene; the type of this damage is light if the common value of the 4 cards is even, or dark if that total is odd.",
  description6: "If there is a joker in your discard pile, the damage dealt by this effect ignores Immunities and Resistances.",
  book: "Fabula Bonus 3",
},









// HALLOWEEN 2024
  {
    name: "Anatomist",
    requirement: ["Fury", "Loremaster", "Sharpshooter", "Weaponmaster"],
    other: "Acquired the Knowledge is Power Skill.",
    description: "Whenever you acquire this Heroic Skill, choose two Species among beast, construct, demon, elemental, monster, plant, and undead.",
    description2: "When you deal damage to a creature belonging to the humanoid Species or to a Species you have chosen for this Heroic Skill, you may choose one option: you deal 5 extra damage to that creature; or that creature becomes reeling until the end of the scene. When a reeling creature recovers Hit Points and/or Mind Points, instead that creature recovers half the normal amount of HP and/or MP and is no longer reeling.",
    description3: "This Heroic Skill can be acquired up to three times.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Arcane Sacrifice",
    requirement: ["Arcanist", "Guardian"],
    description: "Once per scene, when you and/or one or more allies you can see are reduced to 0 Hit Points, if you are merged with an Arcanum, you may instead be reduced to exactly 1 Hit Point. If you do, you must immediately dismiss that Arcanum (without applying any dismiss effect), and cannot summon them again until the end of the scene.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Broken Wing Tactic",
    requirement: ["Commander", "Guardian"],
    description: "After an enemy you can see performs an Accuracy Check or a Magic Check for an offensive spell (r) on their turn during a conflict, you may grant them a +3 bonus to the Result of the Check. If you do, choose one option: you and every ally who is able to hear you gain Resistance to all damage types until the end of this turn; or you and every ally who is able to hear you deal 5 extra damage until the end of this turn. Once you use this Skill, you cannot use it again until the start of your next turn.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Flow of Yin and Yang",
    requirement: ["Dancer", "Elementalist", "Esper", "Invoker"],
    description: "When you deal dark, earth, ice, or physical damage for the first time during a turn, you gain 1 Yin Point and, if you have at least 1 Yang Point, you deal 5 extra damage.",
    description2: "When you deal air, bolt, fire, or light damage for the first time during a turn, you gain 1 Yang Point and, if you have at least 1 Yin Point, you deal 5 extra damage.",
    description3: "At the end of your turn, if you have 3 or more Yin and/or Yang points and have at least 1 point of each type, you lose all Yin and Yang Points and perform one of the following effects based on the points you lost (perform both in case of a tie):",
    description4: "- Yin majority: every enemy present on the scene loses an amount of Mind Points equal to 【half your level】.",
    description5: "- Yang majority: one creature you can see that is present on the scene recovers an amount of Mind Points equal to 【your level】.",
    description6: "You may gain and use Yin and Yang Points only during conflicts, and you lose all your Yin and Yang Points at the end of each scene.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Hunter's Trick",
    requirement: ["Sharpshooter", "Weaponmaster"],
    description: "When you transform a transforming custom weapon on your turn, choose one option: if you have not performed any attacks during this turn, the next attack you perform with this weapon during this turn deals 5 extra damage; or if you hit one or more creatures with an attack using this weapon during this turn, you recover 5 Hit Points and 5 Mind Points.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Great Cauldron's Secret",
    requirement: ["Tinkerer"],
    other: "Advanced advanced Alchemy benefit from the Gadget Skill",
    description: "When you create a potion via alchemy, you may treat the die assigned to target as showing a value of 13 or 17 (even if that die shows a different number).",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Impaler Dragon",
    requirement: ["Commander", "Darkblade"],
    other: "Acquired the Charging Cavalry and Shadow Strike Skills.",
    description: "When you use the Shadow Strike Skill, you may treat your High Roll as being equal to 0 when determining damage dealt by this attack. If you do, after the attack from Shadow Strike is resolved, you may immediately perform the Charging Cavalry Skill for free (paying the appropriate MP cost).",
    book: "Haloween Bonus 2024",
  },
  {
    name: "It Lives!",
    requirement: ["Tinkerer", "Wayfarer"],
    other: "Acquired the Faithful Companion (construct Species) and Visionary Skills.",
    description: "Your companion's Affinity towards bolt damage becomes Absorption, and their maximum Hit Point score is increased by an amount equal to 【twice your Skill Level in Visionary】.",
    description2: "When your companion deals damage, if they have no weapons equipped, they deal extra damage equal to 【your Skill Level in Visionary】.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Like an Open Book",
    requirement: ["Esper", "Loremaster", "Rogue"],
    other: "Acquired the Soul Steal Skill.",
    description: "After you successfully use the Soul Steal Skill against one or more enemies, you may choose one of them. If you do, you immediately perform the Study action for free against that enemy: treat the Result and High Roll of this Open Check as being equal to the Result and High Roll of the Check you performed for Soul Steal (do not roll dice for this Open Check).",
    description2: "When you deal damage to an elite or champion-rank enemy, if you stole that enemy's soul treasure during this scene, you deal extra damage equal to 【your Skill Level in Soul Steal】 to that enemy.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Nether Slash",
    requirement: ["Darkblade", "Elementalist", "Pilot"],
    other: "Acquired the Shadow Strike Skill.",
    description: "When you use the Shadow Strike Skill, you may choose fire or ice. If you do, all damage dealt by this attack becomes of the chosen type instead of dark (its damage type cannot change, as usual), and you gain Resistance to the damage type you did not choose until the start of your next turn.",
    description2: "When you perform a free attack with a melee weapon as part of the Shadow Strike Skill, the attack may target enemies that can only be targeted by a ranged attack.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Ofuda Mastery",
    requirement: ["Arcanist", "Merchant", "Symbolist", "Spiritist"],
    other: "Acquired the Symbolism Skill.",
    description: "When you use the Symbolism Skill during a conflict, you may spend 20 Mind Points to ignore the Skill's normal cost in Inventory Points.",
    description2: "When you perform a free attack with a melee weapon as part of the Symbolism Skill the attack may target enemies that can only be targeted by a ranged attack.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Phagomagus",
    requirement: ["Chimerist", "Entropist", "Gourmet", "Mutant"],
    description: "When you cast the Dispel spell, its MP cost becomes '10 x T' and its target becomes 'Up to three creatures'.",
    description2: "When you cause one or more enemies to no longer be affected by one or more spells with a duration of 'Scene', choose one option: you recover 20 Mind Points for each spell whose effects ended on at least one of those enemies this way; or for each spell whose effects ended on at least one of those enemies this way, apply a copy of that spell on yourself (if a spell allowed for choices upon casting it, you must retain the same choices that were made for this casting of the spell). This copying effect does not require actions, Mind Points, or Checks, and is not treated as 'casting a spell'.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Symbiotic Roots",
    requirement: ["Chimerist", "Floralist", "Mutant", "Wayfarer"],
    other: "Acquired the Faithful Companion (construct Species) Skill.",
    description: "When you recover Hit Points, you may choose to recover only half of that amount; if you do, your companion recovers that many Hit Points.",
    description2: "At the end of your turn during a conflict, if your companion's current Hit Points are equal to or higher than their maximum Hit Points and your companion has not performed actions or attacks during this turn, you may have your companion perform a free attack with one of their basic attacks.",
    book: "Haloween Bonus 2024",
  },
  {
    name: "Witchvoice",
    requirement: ["Chanter", "Orator"],
    description: "After one or more enemies suffer one or more status effects due to a verse you chant, you may choose one of them. If you do, you immediately perform the Study action for free against that enemy: treat the Result and High Roll of this Open Check as being equal to the Result and High Roll of the Check you performed for the verse.",
    description2: "When you deal damage to an elite or champion-rank enemy, if you stole that enemy's soul treasure during this scene, you deal extra damage equal to 【your Skill Level in Soul Steal】 to that enemy.",
    book: "Haloween Bonus 2024",
  },

  // TAILS HEROIC SKILLS
  
  {
    name: "Arcane Fighter",
    requirement: [
      "Arcanist", "Chimerist", "Elementalist", "Entropist", "Spiritist", "Weaponmaster"
    ],
    description: "While you are merged with an Arcanum, if you have up to two melee arcane weapons equipped, you gain the following benefits for melee arcane weapons until you dismiss that Arcanum:",
    description2: "They each may be treated as also belonging to an extra Category for the purpose of Skills and effects that require it, chosen among flail, heavy, spear or sword;",
    description3: "Your attacks with them deal 5 extra damage;",
    description4: "Your attacks with them target Magical Defense instead of Defense;",
    description5: "Your attacks with them are able to target flying creatures.",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Balanced",
    requirement: [
      "All Classes"
    ],
    other: "Acquired the Jack of All Trades profile (d8 base die size on all Attributes).",
    description: "When you rest, you may choose one option:",
    description2: "Choose one Attribute among Dexterity, Insight, Might or Willpower. Until you rest again, you treat the base die size of the chosen Attribute as if it were one die size higher (up to a maximum of d12). Then, update your Defense score, Magic Defense score, Maximum Hit Points and Crisis score, and Maximum Mind Points accordingly.",
    description3: "Choose two different Attributes among Dexterity, Insight, Might or Willpower. Until you rest again, you gain a +1 bonus for Checks that involve each Attribute you chose (for example, if you chose Insight and Willpower, you gain a +1 bonus on Checks that use only one of those Attributes, or a +2 bonus on Checks that use both).",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Blade and Sorcery",
    requirement: [
      "Chimerist", "Darkblade", "Elementalist", "Sharpshooter", "Weaponmaster"
    ],
    description: "At the start of a conflict scene, choose a Stance to be in among Weapon Stance or Spell Stance.",
    description2: "When you deal damage to one or more enemies with an attack, if you are in Weapon Stance, you recover 10 Mind Points and change to Spell Stance.",
    description3: "When you deal damage to one or more enemies with an offensive spell, if you are in Spell Stance, you deal 5 extra damage and change to Weapon Stance.",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Bleeding Heart",
    requirement: [
      "Darkblade", "Spiritist"
    ],
    description: "When you spend Hit Points through the Vismagus Skill, choose one ally you can see. That ally may recover a number of Mind Points equal to half as many Hit Points you spent this way.",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Bonsai",
    requirement: [
      "Florist"
    ],
    description: "After you rest, you may spend 20 Mind Points and choose one magiseed you discovered whose first effect applies when its Growth Clock has 0 sections filled. If you do, you may benefit from this magiseed’s first effect until you enter a conflict or you use this Skill again.",
    description2: "At the start of a conflict, you may use the Chloromancy Skill to immediately plant the chosen magiseed for free, ignoring the Skill’s cost in Mind Points.",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Chronomancer (V1)",
    requirement: [
      "Dancer", "Entropist"
    ],
    description: "During a conflict, when you perform a dance, an Entropist spell, or the Stolen Time Skill, you gain 1 Chrono Point.",
    description2: "When you reach 5 Chrono Points, you immediately lose all Chrono Points and choose one option: A Player Character you can see recovers 20 Hit Points, 20 Mind Points and 3 Inventory Points, or a creature you can see loses 25 Hit Points and 25 Mind Points.",
    description3: "You lose all Chrono Points at the end of the scene.",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Chronomancer (V2)",
    requirement: [
      "Entropist"
    ],
    other: "Must have learned the Acceleration and/or Stop spells",
    description: "When you hit one or more creatures with the Stop spell, you may deal 【HR+5】 dark damage to each of them. This damage increases by 5 if you are Level 20 or higher, or by 10 if you are Level 40 or higher.",
    description2: "Additionally, during a conflict and once per turn, a creature under the effects of your Acceleration spell may spend one use of this spell’s effect and choose up to two different options: recover 25 Hit Points, or recover 25 Mind Points, or recover 2 Inventory Points, or recover from one Status Effect of their choice.",
    description3: "The author had two different ideas for the Chronomancer Heroic Skills. It is recommended that a Player Character should be able to learn only one of them.",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Companion Garden",
    requirement: [
      "Florist", "Wayfarer"
    ],
    description: "When you plant a magiseed, you may plant it on your companion. If you do, as long as your companion has a magiseed planted on them, its attacks and spells deal extra damage equal to 【2 + your Growth Clock】, and all damage it suffers is reduced by 【2 + your Growth Clock】 (applied before damage Affinities).",
    description2: "If your companion falls to 0 Hit Points, you remove the magiseed from your garden and erase all sections of your Growth Clock (triggering effects like the Tree of Life Skill normally).",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Dark Aura",
    requirement: [
      "Darkblade", "Guardian"
    ],
    description: "When you enter Crisis, choose one ally you can see. Until you are no longer in Crisis, that ally gains Resistance to the same damage types as you.",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Deep Connection",
    requirement: [
      "Darkblade", "Esper", "Spiritist"
    ],
    description: "At the start of a conflict, choose one ally you have a Bond with a strength of 3 towards. You and that ally become connected until the end of the scene.",
    description2: "Connected creatures may use each other’s Mind Points to pay the Mind Point costs of spells, Skills and other effects.",
    description3: "A creature cannot be connected to more than one other creature. If a connected creature leaves the scene, falls unconscious, or dies, the connection between the two creatures ends. Similarly, if you no longer have a Bond with a strength of 3 towards that creature, the connection ends.",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Defensive Wardancer",
    requirement: [
      "Guardian", "Dancer"
    ],
    other: "Must have acquired the Wardancer Skill",
    description: "After you perform a dance, you may ignore the effects of the Wardancer Skill. If you do, choose one of the following effects:",
    description2: "Nimble Step: You increase your Defense score by 【your SL in Wardancer】 until the start of your next turn or until a creature misses you with an attack. When a creature misses you with an attack, that creature suffers 【5 + your SL in Wardancer】 physical damage.",
    description3: "Spell Bend: You increase your Magic Defense score by 【your SL in Wardancer】 until the start of your next turn or until a creature misses you with an offensive spell. When a creature misses you with an offensive spell, you recover a number of Mind Points equal to 【5 + your SL in Wardancer】.",
    book: "Tails Custom Heroic Skills"
  },
  {
    name: "Dragon Dance",
    requirement: [
      "Dancer"
    ],
    description: "Choose one dance you know among the following: Angel, bat, golem, griffin, myrmidon, phoenix or yeti.",
    description2: "That dance now allows you to gain both of its effects at the same time, the Resistance becomes Immunity, and the damage type ignores Resistances and Immunities.",
    book: "Tails Custom Heroic Skills"
  },



// all classes
  { 
    name:"Ambidextrous",
    requirement: ["All Classes"],
    description: "You may apply the benefits of two-weapon fighting (page 69) to weapons belonging to different categories, even if one is a melee weapon and the other is a ranged weapon (such as a dagger and a firearm, for instance).",
    description2: "As long as you have exactly two weapons equipped and they share no categories with each other, you gain a +2 bonus to Defense and the second attack you perform during each of your turns deals 5 extra damage.",
    book: "Core Rulebook",
  },
  {
    name:"Extra Hp",
    requirement: ["All Classes"],
    description: "Permanently increase your maximum Hit Points by 10. The amount of additional HP increases to 20 if you are level 40 or higher.",
    book: "Core Rulebook",
  },
  {
    name:"Extra Mp",
    requirement: ["All Classes"],
    description: "Permanently increase your maximum Mind Points by 10. The amount of additional MP increases to 20 if you are level 40 or higher.",
    book: "Core Rulebook",
  },
  {
    name:"Extra Ip",
    requirement: ["All Classes"],
    description: "Permanently increase your maximum Inventory Points by 4.",
    book: "Core Rulebook",
  },
  {
    name:"Extra Spells",
    requirement: ["All Classes"],
    description: "When you acquire this Skill, learn any two spells from one of the following lists: Elementalist, Entropist, or Spiritist. Both spells chosen this way must come from the same list, and they follow the standard rules for casting spells of that Class.",
    book: "Core Rulebook",
  },

  // HEROIC STYLES SKILLS
  {
    name:"Agile Defender Style V1",
    requirement: ["All Classes"],
    other: "have Skill Level 2 or higher in Dodge (see Rogue)",
    description: "As long as you have no shields and no martial armor equipped, you gain all of the following benefits:",
    description2: "You may ignore the MP cost of the Provoke Skill (see Fury).",
    description3: "You may ignore the MP cost of the Peacock Dance (see Dancer).",
    description4: "You may use the Protect Skill (see Guardian) even if you have not acquired it.",
    description5: "Your Magic Defense score is increased by 【your Skill Level in Dodge】.",
    description6: "Additionally, your maximum Hit Points and Crisis score are now calculated based on your base Dexterity die size, instead of your base Might die size.",
    book: "Playtest 08-09-23",
  },
  {
    name:"Agile Defender Style V2",
    requirement: ["All Classes"],
    other: "have Skill Level 2 or higher in Dodge (see Rogue).",
    description: "As long as you have no shields and no martial armor equipped, you gain all of the following benefits:",
    description2: "You may use the Protect Skill (see Guardian) even if you have not acquired it.",
    description3: "Your Magic Defense score is increased by 【your Skill Level in Dodge】.",
    description4: "You treat your maximum Hit Points as increased by 10, or by 20 if you are level 30 or higher.",
    book: "Playtest 05-12-24",
  },
  {
    name:"Agile Defender Style V3",
    requirement: ["All Classes"],
    other: "have Skill Level 2 or higher in Dodge (see Rogue), and must have a Dexterity base die size of d10 or higher.",
    description: "As long as you have no shields and no martial armor equipped, you gain all of the following benefits:",
    description3: "You treat your Skill Level in Dodge as being increased by 2 (to a maximum of 5).",
    description4: "You may use the Protect Skill (see Guardian) even if you have not acquired it.",
    description5: "When you use the Protect Skill during another creature's turn, damage you suffer is reduced by an amount equal to 【your current Dexterity die size】 until the end of that turn (before applying Affinities).",
    book: "Playtest 23-01-25",
  },
  {
    name:"Blast Gladiator Style",
    requirement: ["All Classes"],
    other: "have acquired the Bone Crusher Skill (see Weaponmaster)",
    description: "Choose one damage type among air, bolt, dark, earth, fire, ice, light, physical, and poison.",
    description2: "When you use the Bone Crusher Skill on one or more creatures, you may have each of those creatures become imbued until the end of the scene.",
    description3: "After one or more imbued creatures lose Hit Points, each of those creatures stops being imbued and you deal an amount of damage of the chosen type equal to 【2 + (twice your Skill Level in Bone Crusher)】 to them. The type of this damage cannot be changed; this effect deals 5 extra damage if you are level 20 or higher, or 10 extra damage if you are level 40 or higher; it also deals an additional 5 extra damage if you have a brawling or firearm weapon equipped, or if you have a weapon module (see Pilot) equipped.",
    book: "Playtest 03-12-23",
  },
  {
    name:"Bullet Deflection Style",
    requirement: ["All Classes"],
    other: "have a Dexterity base die size of d10 or higher and/or an Insight base die size of d10 or higher",
    description: "After a creature you can see performs a ranged attack, you may spend an amount of Mind Points equal to 【5 + the Result of their Accuracy Check】 in order to have the attack fail automatically against all targets. If you do and the Result of that Accuracy Check is an even number, you may have one enemy you can see lose an amount of Hit Points equal to that Check's High Roll.",
    description2: "You can only use this Skill if you have a weapon of the sword Category equipped, and it has no effect if the Accuracy Check was a critical success.",
    book: "Playtest 10-06-24",
  },
  {
    name:"Charged Punch Style",
    requirement: ["All Classes"],
    other: "have acquired the Withstand Skill (see Fury)",
    description: "When you perform the Guard action and activate the Withstand Skill, you may choose one brawling weapon you have equipped. If you do, choose one option: double the High Roll when determining damage of the next attack you perform with the chosen weapon before the end of your next turn; or if the next attack you perform with the chosen weapon before the end of your next turn would have its High Roll treated as being equal to 0 when determining damage, instead you may use its normal value.",
    book: "Playtest 10-10-23",
  },
  {
    name:"Collector Style",
    requirement: ["All Classes"],
    other: "be able to equip martial melee weapons, and/or be able to equip martial ranged weapons.",
    description: "Your backpack can contain any number of weapons.",
    description2: "At the end of your turn during a conflict scene, you may perform the Equipment action for free.",
    description3: "When you attack with a weapon during a conflict, if this is the first time you attack with that weapon during this conflict, you gain a +5 bonus to your Accuracy Check and the attack deals 5 extra damage (the two forms of a transforming custom weapon are still considered 'the same weapon' for the sake of this effect). This benefit does not apply to unarmed strikes, magicannon (see Tinkerer) and twin shields (see Guardian), but it does apply as usual to weapon modules (see Pilot).",
    book: "Playtest 11-08-24",
  },
  {
    name:"Detonation Style",
    requirement: ["All Classes"],
    other: "have acquired the basic Alchemy benefit from the Gadget Skill (see Tinkerer)",
    description: "When you use your Alchemy to create a potion, you can always select effects 3 to 8 (you can treat those effects as if they had 'Any' in the 'Die' column of the table). If the potion is advanced or superior, its damage ignores Resistances.",
    description2: "When you succeed on a Check to advance or turn back a Clock, if your approach relied on explosives, gunpowder or pyrotechnics, you may fill or erase 1 additional section of that Clock.",
    book: "Playtest 08-09-23",
  },
  {
    name:"Duelist Style",
    requirement: ["All Classes"],
    other: "be able to equip martial melee weapons.",
    description: "As long as you have a one-handed melee weapon equipped in your main hand slot, if that weapon is not an unarmed strike and you have an unarmed strike equipped in your off-hand slot, you gain the following benefits:",
    description2: "When you deal damage with a weapon that is not an unarmed strike, you may double your Accuracy Check's High Roll when determining the attack's damage. If you do, you cannot use this option again until the beginning of your next turn.",
    description3: "During conflicts, you ignore the MP cost of the following Skills: Bladestorm, Breach, Condemn, Encourage, and Provoke (see Fury, Orator, and Weaponmaster).",
    description4: "These benefits do not apply to weapon modules (see Pilot).",
    book: "Playtest 07-11-24",
  },
  {
    name:"Dark Blessing Style",
    requirement: ["All Classes"],
    other: "have acquired the Shadow Strike Skill (see Darkblade)",
    description: "When you lose Hit Points due to your Shadow Strike Skill, if doing so does not reduce you to 0 Hit Points, every ally present on the scene recovers an equal amount of Hit Points. This amount increases by 5 Hit Points if you are level 20 or higher, or by 10 Hit Points if you are level 40 or higher.",
    book: "Playtest 11-08-24",
  },
  {
    name:"Fūma Shuriken Style",
    requirement: ["All Classes"],
    other: "have acquired the Barrage Skill (see Sharpshooter)",
    description: "During a conflict, you may use an action to perform a free attack with a two-handed thrown weapon. If you do, you deal 5 extra damage and the attack targets all enemies present on the scene.",
    book: "Playtest 08-09-23",
  },
  {
    name:"Gunbreaker Style",
    requirement: ["All Classes"],
    other: "have acquired both the Sharpshooter and Weaponmaster Classes",
    description: "As long as you have transforming custom weapon equipped, if one of that weapon's forms is melee and the other is ranged, you may use the Bone Crusher, Breach, and Counterattack Skills (see Weaponmaster) with its ranged form, and you may use the Crossfire, Hawkeye, and Warning Shot Skills (see Sharpshooter) with its melee form. Additionally, both forms are also treated as belonging to the firearm Category for the sake of allowing use of the Hawkeye Skill.",
    description2: "When you perform the Bone Crusher or Breach Skill with a ranged weapon, or when you perform the Hawkeye or Warning Shot Skill with a melee weapon, your Skill Level in them is treated as being increased by 2 (to a maximum of SL 6).",
    book: "Playtest 09-09-24",
  },
  {
    name:"Gunslinger Style",
    requirement: ["All Classes"],
    other: "have Skill Level 2 or higher in Ranged Weapon Mastery (see Sharpshooter)",
    description: "You may use an action to perform up to three consecutive free attacks with a one-handed firearm weapon equipped in your main hand slot (against the same target or different targets). If you do, all attacks performed this way follow the rules for two-weapon fighting: they lose the multi property and cannot gain it, and you treat the High Roll of each Accuracy Check as being equal to 0 when determining damage. Additionally, if any attack made this way misses, you lose your rhythm and cannot perform the remaining attacks.",
    description2: "You may use this Skill only if you have a one-handed firearm weapon equipped in your main hand slot, if that weapon is not a weapon module (see Pilot) whose text says 'A personal vehicle with this module enabled cannot have any other weapon modules enabled', and if your off-hand slot is empty or contains an unarmed strike.",
    book: "Playtest 06-05-24",
  },
  {
    name:"Heightened Element Style",
    requirement: ["All Classes"],
    other: "have learned two or more spells that deal damage",
    description: "When you deal damage with a spell, you may change that damage's type to the one you have chosen; and as long as a spell you cast deals damage of the chosen type, that spell deals 5 extra damage and all its damage ignores Resistances.",
    book: "Playtest 08-09-23",
  },
  {
    name:"Hidden Weapon Style",
    requirement: ["All Classes"],
    other: "have acquired the Cheap Shot Skill (see Rogue)",
    description: "After one or more enemies you can see lose Hit Points due to damage dealt by one of your allies, if at least one of them is Vulnerable to the type of damage dealt by your ally, you may choose one of those enemies. If you do, that enemy loses an amount of Hit Points equal to 【half your level + (twice your Skill Level in Cheap Shot)】 and also suffer the chosen status effect.",
    description2: "Once you use this Skill during a conflict, you may not use it again until the beginning of your next turn.",
    book: "Playtest 08-02-24",
  },
  {
    name:"Humble Style",
    requirement: ["All Classes"],
    other: "have a Willpower base die size of d8 or higher",
    description: "When you acquire this Heroic Skill, choose two different Attributes among Dexterity, Insight, Might, and Willpower: when you perform an Accuracy Check with a non-martial weapon, you may replace the required Attributes with those you have chosen.",
    description2: "As long as you have two or fewer weapons equipped, your attacks with non-martial weapons deal 5 extra damage and you may also treat those weapons as belonging to the spear and sword Categories for the sake of Skills that require it; this benefit does not apply to unarmed strikes, weapon modules (see Pilot), twin shields (see Guardian), and magicannon (see Tinkerer).",
    description3: "As long as the only weapon you have equipped is a staff, you apply all of the above benefits but may also treat that staff as belonging to the brawling and heavy Categories for the sake of Skills that require it, and your attacks with it deal an additional 5 extra damage.",
    description4: "Additionally, when you perform an attack using an improvised weapon, you deal 5 extra damage and may have that weapon not be destroyed after the attack.",
    book: "Playtest 10-06-24",
  },
  {
    name:"Iaidō Style",
    requirement: ["All Classes"],
    other: "have Skill Level 2 or higher in Melee Weapon Mastery (see Weaponmaster)",
    description: "When you join a conflict and/or when you enter Crisis for the first time during a conflict, if you have exactly one weapon equipped and that weapon is a two-handed sword or a weapon module (see Pilot) that belongs to the sword Category, you may enter a iaidō stance.",
    description2: "When an enemy you can see begins their turn, if you are in your iaidō stance, you may exit it. If you do, you perform a free attack with a weapon belonging to the sword Category you have equipped; this attack must include that enemy among its targets. When you perform an attack with a weapon belonging to the sword Category, if you are in your iaidō stance, you may exit it. If you do, the attack deals extra damage equal to 【your Skill Level in Melee Weapon Mastery, multiplied by 5】 and  you choose up to one option: fill or erase 1 section of a Clock if the attack hits all its targets; or the attack can target creatures that cannot be targeted by melee attacks; or each creature hit by the attack cannot perform free attacks until the end of the current turn.",
    description3: "You automatically exit iaidō stance as soon as you no longer have the same sword weapon equipped or have more than one weapon equipped.",
    book: "Playtest 10-06-24",
  },
  {
    name:"Investigator Style",
    requirement: ["All Classes"],
    other: "have acquired the Flash of Insight Skill (see Loremaster)",
    description: "When you perform a Check to examine a creature, item or location during a conflict scene, you may memorize the High Roll of that Check.",
    description2: "When a source deals damage to one or more creatures you can see, you may forget one of your memorized High Rolls to choose one option: that source deals extra damage to each creature equal to the forgotten High Roll; or reduce damage dealt by that source to each creature by an amount equal to the forgotten High Roll (before applying Affinities).",
    description3: "You automatically forget all memorized High Rolls at the end of each scene.",
    book: "Playtest 08-09-23",
  },
  {
    name:"Palm And Step Style",
    requirement: ["All Classes"],
    other: "have acquired the Dodge Skill (see Rogue) and/or the Indomitable Spirit Skill (see Fury)",
    description: "As long as you have no martial items equipped, you may use an action to perform up to three consecutive free attacks with an unarmed strike you have equipped (against the same target or against different targets). If you do, each attack receives a bonus equal to 【your Skill Level in Dodge + your Skill Level in Indomitable Spirit】 to the Accuracy Check, loses the multi property and cannot gain it, and deals damage equal to 【4 + (twice your Skill Level in Dodge) + (twice your Skill Level in Indomitable Spirit) + your current Bravery Points (see the Rising Tide Heroic Skill)】 instead of the normal amount of damage it would deal (this value cannot be modified by sources of extra damage, multiplications, subtractions, or divisions; however, Affinities will apply to any Hit Point loss it causes as normal).",
    book: "Playtest 07-11-24",
  },
  {
    name:"Piercing Sorcery Style",
    requirement: ["All Classes"],
    other: "have acquired the Cataclysm Skill (see Elementalist)",
    description: "Once per turn, when you use the Cataclysm Skill to empower an offensive spell with a target of 'Up to three creatures', if that spell targets only one creature, you may double the extra damage granted by Cataclysm. If you do, you may choose up to two options: damage dealt by the spell ignores Resistances; or if the target of the spell is flying, you force them to land immediately; or the target of the spell suffers dazed; or the target of the spell cannot perform the Guard action during their next turn.",
    book: "Playtest 07-03-24",
  },
  { 
    name:"Prophetic Defender Style",
    requirement: ["All Classes"],
    other: "have learned the Divination spell (see Entropist)",
    description: "When a source causes one or more allies present on the scene to lose Hit Points, if you are currently affected by your Divination spell, you may expend one of the forced rerolls granted by the spell. If you do, you suffer all those Hit Point losses in place of those allies, as separate instances (you cannot choose to suffer only some of them); additionally, each of these Hit Point losses is reduced by 5 (example: if a source causes you and two of your allies to lose 20 Hit Points each, using this Skill would have you lose 15 Hit Points, then 15 Hit Points, and finally another 15 Hit Points). If your Divination spell has no forced rerolls remaining after you use this Skill, you may choose one option: recover 10 Mind Points; or recover 5 Hit Points.",
    book: "Playtest 10-06-24",
  },
  {
    name:"Punishing Style",
    requirement: ["All Classes"],
    other: "have acquired the Counterattack Skill (see Weaponmaster)",
    description: "When you perform the Guard action, if you did not perform the Guard action on your previous turn during this scene, choose one option among ranged attacks and offensive spells (r). You gain the following benefits until the start of your next turn:",
    description2: "You may use the Counterattack Skill even when the Result of the enemy's Accuracy Check is an odd number, and it also applies against what you have chosen.",
    description3: "When you perform a free attack with Counterattack, if the triggering attack or spell hit you, you deal 5 extra damage.",
    book: "Playtest 09-09-24",
  },
  {
    name:"Ranger Style",
    requirement: ["All Classes"],
    other: "have acquired the Resourceful Skill (see Wayfarer)",
    description: "At the start of a conflict scene, you may spend 20 Mind Points to reveal you set traps in the surrounding area and choose a status effect among dazed, shaken, slow, and weak: if you do, every enemy present on the scene suffers the chosen status effect, then every enemy present on the scene whose current Insight die size is equal to or lower than yours loses an amount of Hit Points and Mind Points equal to 【your Skill Level in Resourceful, multiplied by 5】. These amounts increase by 5 if you are level 20 or higher, or by 10 if you are level 40 or higher.",
    description2: "Additionally, your attacks with bows deal extra damage equal to 【1 + your Skill Level in Resourceful】 as long as you have no martial armor equipped.",
    book: "Playtest 08-04-24",
  },
  {
    name:"Reaper Style",
    requirement: ["All Classes"],
    other: "have acquired the High Speed Skill (see Rogue) and/or the Stolen Time Skill (see Entropist)",
    description: "You gain a +5 bonus to your Accuracy Checks and Magic Checks for attacks and offensive spells (r) that include one or more enemies in Crisis among the targets.",
    description2: "After you reduce one or more enemies to 0 Hit Points, if at least one of them is defeated this way, you recover from all status effects and may choose one option: perform a free attack with a weapon you have equipped, and that attack deals 5 extra damage; or immediately perform the Spell action for free, casting an offensive spell (r) with a total MP cost equal to or lower than 10 without paying its MP cost. This attack or spell must target a single enemy; once you use this Skill during a conflict, you may not use it again until the beginning of your next turn.",
    book: "Playtest 10-06-24",
  },
  {
    name:"Scorpion Tail Style",
    requirement: ["All Classes"],
    other: "have a Dexterity base die size of d10 or higher",
    description: "Your attacks with weapons belonging to the flail Category may target flying creatures and deal 5 extra damage as long as it is not your turn.",
    description2: "After a creature you can see performs a ranged attack, you may spend an amount of Mind Points equal to 【5 + the total Result of their Accuracy Check】 in order to have the attack fail automatically against all targets. You can only use this Skill if you have a weapon belonging to the flail Category equipped, and it has no effect if the Accuracy Check was a critical success.",
    book: "Playtest 03-12-23",
  },
  {
    name:"Skyspear Style",
    requirement: ["All Classes"],
    other: "have learned the Soaring Strike spell (see Elementalist)",
    description: "You unlock the hidden art of aerial spear combat, learning the Skyjump spell.",
    description2: "Skyjump | 10 MP | Target: Self | Duration: Scene",
    description3: "You become one with the speed and strength of wind. Until this spell ends, your melee attacks can target creatures that can only be targeted by ranged attacks, and no other creature present on the scene is able to see you.",
    description4: "On your turn, if you are under the effects of this spell and able to perform the Spell action, you must use your first available action to perform the Spell action and cast the Soaring Strike spell, ignoring its MP cost. If you do and the weapon used belongs to the spear Category, the free attack granted by Soaring Strike gains multi (2) and deals another 10 extra damage. This spell ends after the free attack is resolved.",
    description5: "You may only cast this spell if you have a spear weapon equipped, and only if you have also learned the Soaring Strike spell.",
    book: "Playtest 07-03-24",
  },
  {
    name:"Thaumaturge Style",
    requirement: ["All Classes"],
    other: "have acquired the Healing Power Skill, and must have learned the Cleanse and/or Heal spells (see Spiritist)",
    description: "As long as you have one or more brawling weapons equipped, you may treat them as also belonging to the arcane Category for the purpose of Skills and effects that require it.",
    description2: "You may use an action to perform a free attack with an arcane weapon you have equipped; this attack must target a single enemy. If the attack is successful, treat your High Roll (HR) as 0 when determining damage dealt by it; after the attack has been resolved, if it was successful, you may immediately perform the Spell action for free, casting an offensive spell (r) with a total MP cost equal to or lower than 10 without paying its MP cost. This spell must target a single enemy.",
    book: "Playtest 08-09-23",
  },
  {
    name: "Vortex Warrior Style",
    requirement: ["All Classes"],
    other: "have a Dexterity base die size of d10 or higher, and/or a Might base die size of d10 or higher",
    description: "When you perform the Attack action with a melee weapon that belongs to the heavy or sword Category, if you have no other weapon equipped, you may perform two separate attacks instead of one. If you do, both attacks follow the rules for two-weapon fighting: each attack loses the multi property and cannot gain it, and you treat the High Roll of each Accuracy Check as being equal to 0 when determining damage. Additionally, both attacks performed this way must target the same creature; if the first attack is successful, the second attack's Accuracy Check will trigger a critical success if both dice show the same number (and the Check is not a fumble).",
    description2: "Note that this Heroic Skill does not stack with a custom weapon's quick customization (you will still only perform two attacks).",
    book: "Playtest 08-11-23",
  }



];

export default heroicSkillsData;
