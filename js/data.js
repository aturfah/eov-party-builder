skill_data = {
    "fencer": {
        "specializations": [
            "Phantom Duelist",
            "Chain Duelist"
        ],
        "Base": {
            'Rapier Mastery': {
                'requirements': {},
                'description': 'Increases damage dealt using swords. Normal attacks deal stab damage instead of cut.',
            },
            'Chain Flame': {
                'requirements': {},
                'description': 'Targets one enemy. When that enemy takes stab or fire damage, the caster will follow up with another attack. The element is either cut or stab, depending on if the user knows Rapier Mastery, and fire depending on the skill. Each time Chain Flame activates, the chance of it activating again on that turn is decreased. The base activation chance is 100%.<br/>Has standard priority. Has a base accuracy of 99% at all levels.',
                'damage': 'physical fire',
                'damage target': 'enemy'
            },
            'Chain Freeze': {
                'requirements': {},
                'description': 'Targets one enemy. When that enemy takes stab or ice damage, the caster will follow up with another attack. The element is either cut or stab, depending on if the user knows Rapier Mastery, and ice depending on the skill. Each time Chain Flame activates, the chance of it activating again on that turn is decreased. The base activation chance is 100%.<br/>Has standard priority. Has a base accuracy of 99% at all levels.',
                'damage': 'physical ice',
                'damage target': 'enemy'
            },
            'Chain Shock': {
                'requirements': {},
                'description': 'Targets one enemy. When that enemy takes stab or volt damage, the caster will follow up with another attack. The element is either cut or stab, depending on if the user knows Rapier Mastery, and volt depending on the skill. Each time Chain Shock activates, the chance of it activating again on that turn is decreased. The base activation chance is 100%.<br/>Has standard priority. Has a base accuracy of 99% at all levels.',
                'damage': 'physical volt',
                'damage target': 'enemy'
            },
            'Chain Boost': {
                'requirements': {
                    'Chain Flame': 2,
                    'Chain Freeze': 2,
                    'Chain Shock': 2
                },
                'description': 'When using a Chain skill, each time the Chain skill activates, its damage is increased for the rest of the turn.',
            },
            'Chain Burst': {
                'requirements': {
                    'Chain Flame': 2,
                    'Chain Freeze': 2,
                    'Chain Shock': 2
                },
                'description': 'When an enemy is killed by a Chain skill, the caster will attack another enemy with an attack of the same element as the Chain skill.'
            },
            'Predict': {
                'requirements': {},
                'description': "For one turn, increases the user's evasion and their chances to be targeted by enemies. However, it also makes the user take 2.5x damage. When the user evades an attack, their evasion and chance to be targeted are decreased."
            },
            'Wind Curtain': {
                'requirements': {
                    'Predict': 3,
                },
                'description': 'Places a buff on one row that enables party members to dodge one physical attack. When an attack is dodged, the buff is dispelled.'
            },
            'Optic Thrust': {
                'requirements': {},
                'description': 'Deals melee STR-based stab damage to one enemy. Attempts to inflict blind on the target.',
                'damage': 'physical',
                'damage target': 'enemy',
                'ailment': 'blind'
            },
            'Sylphid': {
                'requirements': {},
                'description': "When the user dodges an attack, they will counterattack the attack source with their equipped weapon. Each time the user counterattacks, the chance of Sylphid activating again on that turn is decreased by 40%."
            }

        },
        "Phantom Duelist": {
            'Ray of Light': {
                'requirements': {},
                'description': "When the user dodges an attack, their chance to be targeted and defense are increased. When the user is damaged, Ray of Light's effects are reset.<br/><br/>Ray of Light uses a stack system--each dodge adds one stack of target/defense bonus to the user. There is a maximum amount of stacks that is determined by skill level."
            },
            'Lightweight': {
                'requirements': {},
                'description': "Increases the user's evasion based on how many of their equipment slots are empty."
            },
            'Phantom Swords': {
                'requirements': {},
                'description': "Reduces one row of enemies' accuracy for a set amount of turns."
            },
            'Lure': {
                'requirements': {
                    'Phantom Swords': 3
                },
                'description': "For one turn, when the caster dodges an attack, all other party members in their row will counterattack the attack source.<br/><br/>Any modifiers to an attacker's normal attacks are applied for Lure. For example, if the attacker has at least one level in Rapier Mastery, and has a Blaze Oil effect, Lure counterattacks will be stab+fire."
            },
            'Dodge Boon': {
                'requirements': {
                    'Phantom Swords': 3
                },
                'description': "When the user dodges an attack, their Union gauge is restored."
            },
            'Auto-Curtain': {
                'requirements': {
                    'Wind Curtain': 3
                },
                'description': "Gives the user a chance to automatically use Wind Curtain at the start of a battle."
            },
            "Divine Gust": {
                'requirements': {
                    "Auto-Curtain": 3
                },
                "description": "For one turn, increases all party members' evasion. Each time a party member dodges an attack, the bonus provided by Divine Gust is decreased."
            },
            "Deft Thrust": {
                'requirements': {
                    "Optic Thrust": 2
                },
                "description": "Deals melee STR-based stab damage to one enemy. For the rest of the turn, the user's evasion and chance to be targeted are increased.",
                'damage': 'physical',
                'damage target': 'enemy'
            },
            "Revenge Thrust": {
                'requirements': {
                    'Deft Thrust': 5
                },
                "description": "Deals melee STR-based stab+volt damage to one enemy. The damage starts at a base value, and is then multiplied by the amount of times the user has dodged an attack since the last use of Revenge Thrust.<br/> There is a maximum amount of times Revenge Thrust can have its damage multiplied.",
                'damage': 'physical volt',
                'damage target': 'enemy'
            },
            "Counter Boost": {
                'requirements': {
                    'Sylphid': 5
                },
                "description": "Gives a chance to add extra hits when Sylphid activates. Each extra hit is rolled for individually."
            }
        },
        "Chain Duelist": {
            "Sonic Blade": {
                'requirements': {
                    'Rapier Mastery': 3
                },
                'description': 'When performing normal attacks, the user has a chance to attack twice. The second attack is cut damage, and deals the same amount of damage as the first hit (not accounting for standard variance).'
            },
            "Phys ATK Up": {
                'requirements': {},
                'description': 'Passively increases physical damage.'
            },
            "Chain Killer": {
                'requirements': {
                    'Chain Boost': 3,
                    'Chain Burst': 3
                },
                'description': 'Targets one enemy. For one turn, when that enemy becomes afflicted with a status ailment, bind, or stun, the user will attack them with melee STR-based stab damage.'
            },
            "Chain All": {
                'requirements': {
                    'Chain Killer': 5
                },
                'description': 'Increases the maximum number of hits of the Chain skill used on the next turn, and the Chain skill used on the next turn will also target all enemies.',
                'damage': 'physical fire volt ice',
                'damage target': 'aoe'
            },
            "Chain Plus": {
                'requirements': {
                    'Chain Killer': 5
                },
                'description': 'For a set amount of turns, increases the damage and base activation chance of Chain skills.'
            },
            "Chain Double": {
                'requirements': {
                    'Chain Killer': 5
                },
                'description': 'Gives a chance for Chain attacks to hit twice when a Chain skill is activated.'
            },
            "Slyphscreen": {
                'requirements': {},
                'description': "Each time the user attacks an enemy, their defense and evasion are increased for the rest of that turn."
            },
            "Multi-Stab": {
                'requirements': {
                    'Optic Thrust': 3
                },
                'description': 'Deals a random amount of instances of melee STR-based stab damage to one row of enemies. Can hit the same enemy multiple times.',
                'damage': 'physical',
                'damage target': 'multi row'
            }, 
            "Resonance": {
                'requirements': {
                    'Multi-Stab': 5
                },
                'description': 'Deals melee STR-based stab damage to one enemy. The damage starts at a base value, and is then multiplied by the amount of times the user hit enemies last turn. Resonance can have its damage multiplied a maximum of 9 times.',
                'damage': 'physical',
                'damage target': 'enemy'
            }, 
            "Speed Up": {
                'requirements': {},
                'description': "Increases the user's action speed, accuracy, and evasion."
            }
        }
    },
    "dragoon": {
        "specializations": [
            "Shield Bearer",
            "Cannon Bearer"
        ],
        "Base": {
            "Shield Mastery": {
                'requirements': {},
                'description': "Decreases physical (cut/stab/bash) damage taken when the user has a shield equipped."
            },
            "Cannon Mastery": {
                'requirements': {},
                'description': "Increases damage dealt with cannons."
            },
            "Line Guard": {
                'requirements': {},
                'description': "Reduces physical (cut/stab/bash) damage taken by one row for one turn. Requires Shield."
            },
            "Mana Guard": {
                'requirements': {},
                'description': "Reduces elemental (fire/ice/volt) damage taken by all party members for one turn. Requires Shield."
            },
            "Healing Guard": {
                'requirements': {},
                'description': "Reduces physical (cut/stab/bash) damage taken by the user for one turn. When the user takes damage while Healing Guard is active, their HP is restored. The restoration is a static amount plus a percentage of the user's maximum HP. Requires Shield."
            },
            "Gunmount": {
                'requirements': {
                    'Line Guard': 2,
                    'Mana Guard': 2,
                    'Healing Guard': 2
                },
                'description': 'Can only be used on the turn after a shield skill was used. Deals ranged STR-based bash damage to one enemy. Replicates the effect of the shield skill used on the last turn.<br /><br /><b>BUG:</b> Gunmount will replicate any shield skill used on the last turn, including those not casted by the Gunmount user.',
                'damage': 'ranged',
                'damage target': 'enemy'
            },
            "Barrage Wall": {
                'requirements': {},
                'description': "Deals ranged STR-based bash damage to all enemies. Reduces hit targets' physical (cut/stab/bash) attack for a set amount of turns.",
                'damage': 'ranged',
                'damage target': 'aoe'
            },
            "Dragon Roar": {
                'requirements': {},
                'description': "Increases one ally's defense against physical (cut/stab/bash) attacks and chance of being targeted for a set amount of turns.",
                'buff': 'agg def',
                'buff target': 'single'
            },
            "Decoy Bunker": {
                'requirements': {},
                'description': 'Creates a Decoy Bunker in the summon row. The Decoy Bunker has 10 HP. In addition to having a DEF value, the Decoy Bunker also has a set vulnerability to all damage. The Decoy Bunker has an increased base chance of drawing enemy attacks.'
            },
            "Defense Form": {
                'requirements': {
                    'Decoy Bunker': 2
                },
                'description': "Increases all party members' defense against physical (cut/stab/bash) attacks for a set amount of turns.",
                'buff': 'def',
                'buff target': 'party'
            }
            
        },
        "Shield Bearer": {
            "HP Up": {
                'requirements': {},
                'description': "Increases the user's maximum HP."
            },
            "Recovery Guard": {
                'requirements': {
                    'Gunmount': 3
                },
                'description': "Reduces physical (cut/stab/bash) damage taken by one row for one turn. Party members under the effect of Recovery Guard also have a chance to have a set amount of binds removed when Recovery Guard activates.<br />If a party member has more binds than Recovery Guard removes, which binds are removed is random.<br />Has standard priority.",
            },
            "Counter Guard": {
                'requirements': {
                    'Gunmount': 3
                },
                'description': "Reduces physical (cut/stab/bash) damage taken by one row for one turn. When Counter Guard activates, the caster will counter with their equipped weapon, with a damage bonus. Each time Counter Guard counterattacks at levels 1-9, the chance of it attacking again on that same turn is decreased. At level 10, Counter Guard will always counterattack. The base chance of counterattacks is 100%. <b>Counter Guard only activates once per attack<b>.<br />Any modifiers to the user's normal attacks are applied for Counter Guard. For example, if the user has a Blaze Oil effect, Counter Guard counterattacks will be bash+fire.<br />Has standard priority. Counterattacks have a base accuracy of 102% at all levels."
            },
            "Divide Guard": {
                "requirements": {
                    'Gunmount': 3
                },
                'description': "argets one ally. The caster will take all damage for that ally for one turn. From levels 2-10, the caster takes reduced damage from attacks redirected by Divide Guard."
            },
            "Full Guard": {
                'requirements': {
                    "Recovery Guard": 3,
                    "Counter Guard": 3,
                    "Divide Guard": 3
                },
                'description': "Reduces all non-almighty damage to the party for one turn. After use, Full Guard goes on cooldown for a set amount of turns."
            },
            "Soul Guard": {
                'requirements': {
                    "Recovery Guard": 3,
                    "Counter Guard": 3,
                    "Divide Guard": 3
                },
                'description': "Reduces STR-based damage taken by one row for one turn. Party members under the effect of Soul Guard have a chance to survive fatal damage at 1 HP."
            },
            "Shield Throw": {
                'requirements': {},
                'description': "Deals ranged cut damage to one row of enemies. Shield Throw uses the user's equipped shield's DEF value multiplied by 3 as a replacement for weapon ATK.",
                'damage': 'ranged',
                'damage target': 'row'
            },
            "Auto-Roar": {
                'requirements': {
                    "Dragon Roar": 3
                },
                'description': "Gives the user a chance to use Dragon Roar on themselves at the start of battle"
            }, 
            "Dragon Force": {
                'requirements': {
                    'Auto-Roar': 3
                },
                'description': "Gives a chance for the user and any party members in their row to nullify physical (cut/stab/bash) damage."
            },
            "Auto-Bunker": {
                'requirements': {
                    "Defense Form": 3
                },
                "description": 'Gives the user a chance to use Decoy Bunker at the start of battle.'
            }
        },
        "Cannon Bearer": {
            "Gun Revenge": {
                'requirements': {},
                'description': "Increases the damage of artillery skills when either a shield skill activates, or when a Decoy Bunker or Decoy Turret is attacked. Gun Revenge's bonus is reset whenever it is applied."
            },
            "Phys Atk Up": {
                'requirements': {},
                "description": "Increases cut, stab, and bash damage."
            },
            "TP Up": {
                'requirements': {},
                "description": "Increases the user's maximum TP."
            },
            "Prep Artillery": {
                'requirements': {
                    'TP Up': 3
                },
                'description': "Increases the damage, accuracy, and speed of the artillery skill used on the next turn."
            },
            "Rapid Cannon": {
                'requirements': {
                    "Barrage Wall": 3
                },
                "description": "Deals ranged STR-based bash damage to one enemy.<br />Has absolute priority and a base accuracy of 112% at all levels."
            },
            "Curse Cannon": {
                'requirements': {
                    "Barrage Wall": 3
                },
                "description": "Deals ranged STR-based bash damage to one enemy. Attempts to inflict curse on the target.<br />Has a 60% speed modifier and a base accuracy of 92% at all levels."
            },
            "Hypno Cannon": {
                'requirements': {
                    "Barrage Wall": 3
                },
                "description": "Deals ranged STR-based bash damage to one enemy. Attempts to inflict sleep on the target.<br />Has a 60% speed modifier and a base accuracy of 92% at all levels."
            },
            "Buster Cannon": {
                "requirements": {
                    "Rapid Cannon": 3,
                    "Curse Cannon": 3,
                    "Hypno Cannon": 3
                },
                "description": "On the next turn's end, deals ranged bash+fire damage to one enemy. Damage is doubled when attacking a front row enemy while the caster is in the front row, multiplied by 1.5x when attacking a front row enemy while the caster is in the back row or vice versa, and is not increased when attacking a back row enemy while the user is in the back.<br /><br />The user cannot select another action on the turn where Buster Cannon activates. If the user is incapacitated or their arms become bound, Buster Cannon will not activate.<br /><br />The initial cast has a 90% speed modifier at all levels. The actual hit has a base accuracy of 92% at all levels."
            },
            "Decoy Turret": {
                "requirements": {
                    "Defense Form": 3
                },
                "description": "Creates a Decoy Turret in the summon row. The Decoy Turret has 10 HP. In addition to having a DEF value, the Decoy Turret also has a set vulnerability to all damage. The Decoy Bunker has an increased base chance of drawing enemy attacks. When the Decoy Turret is attacked, it will counterattack the source of damage. The counterattack is bash damage, and is based solely on the Decoy Turret's ATK value."
            },
            "Gun Support": {
                "requirements": {
                    "Decoy Turret": 3
                },
                "description": "When the user reduces damage they themselves take, or negates an attack entirely (ie. another Dragoon activating Dragon Force on them), they have a chance to create a Decoy Turret."
            }
        }
    },
    "pugilist": {
        "specializations": [
            "Barrage Brawler",
            "Impact Brawler"
        ],
        "Base": {},
        "Barrage Brawler": {},
        "Impact Brawler": {}
    },
    "harbringer": {
        "specializations": [
            "Deathbringer",
            "Deathguard"
        ],
        "Base": {},
        "Deathbringer": {},
        "Deathguard": {}
    },
    "warlock": {
        "specializations": [
            "Omnimancer",
            "Elemancer"
        ],
        "Base": {},
        "Omnimancer": {},
        "Elemancer": {}
    },
    "necromancer": {
        "specializations": [
            "Spirit Broker",
            "Spirit Evoker"
        ],
        "Base": {},
        "Spirit Broker": {},
        "Spirit Evoker": {}
    },
    "rover": {
        "specializations": [
            "Flying Falcon",
            "Hunting Hound"
        ],
        "Base": {},
        "Flying Falcon": {},
        "Hunting Hound": {}
    },
    "masurao": {
        "specializations": [
            "Blade Dancer",
            "Blade Master"
        ],
        "Base": {},
        "Blade Dancer": {},
        "Blade Master": {}
    },
    "shaman": {
        "specializations": [
            "Divine Punisher",
            "Divine Herald"
        ],
        "Base": {},
        "Divine Punisher": {},
        "Divine Herald": {}
    },
    "botanist": {
        "specializations": [
            "Merciful Healer",
            "Graced Poisoner"
        ],
        "Base": {},
        "Merciful Healer": {},
        "Graced Poisoner": {}
    }
}