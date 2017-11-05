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
                'description': "For one turn, increases the user's evasion and their chances to be targeted by enemies. However, it also makes the user take 2.5x damage. When the user evades an attack, their evasion and chance to be targeted are decreased.",
                'buff': 'agg def',
                'buff target': 'self'
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
                'description': "When the user dodges an attack, they will counterattack the attack source with their equipped weapon. Each time the user counterattacks, the chance of Sylphid activating again on that turn is decreased by 40%.",
                'damage': 'counter',
                'damage target': 'physical'
            }
        },
        "Phantom Duelist": {
            'Ray of Light': {
                'requirements': {},
                'description': "When the user dodges an attack, their chance to be targeted and defense are increased. When the user is damaged, Ray of Light's effects are reset.<br/><br/>Ray of Light uses a stack system--each dodge adds one stack of target/defense bonus to the user. There is a maximum amount of stacks that is determined by skill level.",
                'buff': 'def agg',
                'buff target': 'self'
            },
            'Lightweight': {
                'requirements': {},
                'description': "Increases the user's evasion based on how many of their equipment slots are empty."
            },
            'Phantom Swords': {
                'requirements': {},
                'description': "Reduces one row of enemies' accuracy for a set amount of turns.",
                'debuff': 'acc',
                'debuff target': 'row'
            },
            'Lure': {
                'requirements': {
                    'Phantom Swords': 3
                },
                'description': "For one turn, when the caster dodges an attack, all other party members in their row will counterattack the attack source.<br/><br/>Any modifiers to an attacker's normal attacks are applied for Lure. For example, if the attacker has at least one level in Rapier Mastery, and has a Blaze Oil effect, Lure counterattacks will be stab+fire.",
                'damage': 'counter',
                'damage target': 'enemy'
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
                "description": "For one turn, increases all party members' evasion. Each time a party member dodges an attack, the bonus provided by Divine Gust is decreased.",
                "buff": "eva",
                "buff target": "party"
            },
            "Deft Thrust": {
                'requirements': {
                    "Optic Thrust": 2
                },
                "description": "Deals melee STR-based stab damage to one enemy. For the rest of the turn, the user's evasion and chance to be targeted are increased.",
                'damage': 'physical',
                'damage target': 'enemy',
                'buff': 'eva agg',
                'buff target': 'self'
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
                'description': "Reduces physical (cut/stab/bash) damage taken by the user for one turn. When the user takes damage while Healing Guard is active, their HP is restored. The restoration is a static amount plus a percentage of the user's maximum HP. Requires Shield.",
                'healing': 'conditional',
                'healing target': 'single'
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
                'description': "Reduces physical (cut/stab/bash) damage taken by one row for one turn. When Counter Guard activates, the caster will counter with their equipped weapon, with a damage bonus. Each time Counter Guard counterattacks at levels 1-9, the chance of it attacking again on that same turn is decreased. At level 10, Counter Guard will always counterattack. The base chance of counterattacks is 100%. <b>Counter Guard only activates once per attack<b>.<br />Any modifiers to the user's normal attacks are applied for Counter Guard. For example, if the user has a Blaze Oil effect, Counter Guard counterattacks will be bash+fire.<br />Has standard priority. Counterattacks have a base accuracy of 102% at all levels.",
                'damage': 'ranged',
                'damage target': 'counter'
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
                "description": "Deals ranged STR-based bash damage to one enemy.<br />Has absolute priority and a base accuracy of 112% at all levels.",
                "damage": "ranged",
                "damage target": "enemy"
            },
            "Curse Cannon": {
                'requirements': {
                    "Barrage Wall": 3
                },
                "description": "Deals ranged STR-based bash damage to one enemy. Attempts to inflict curse on the target.<br />Has a 60% speed modifier and a base accuracy of 92% at all levels.",
                "damage": "ranged",
                "damage target": "enemy",
                "ailment": "cursed"
            },
            "Hypno Cannon": {
                'requirements': {
                    "Barrage Wall": 3
                },
                "description": "Deals ranged STR-based bash damage to one enemy. Attempts to inflict sleep on the target.<br />Has a 60% speed modifier and a base accuracy of 92% at all levels.",
                "damage": "ranged",
                "damage target": "enemy",
                "ailment": "sleep",
            },
            "Buster Cannon": {
                "requirements": {
                    "Rapid Cannon": 3,
                    "Curse Cannon": 3,
                    "Hypno Cannon": 3
                },
                "description": "On the next turn's end, deals ranged bash+fire damage to one enemy. Damage is doubled when attacking a front row enemy while the caster is in the front row, multiplied by 1.5x when attacking a front row enemy while the caster is in the back row or vice versa, and is not increased when attacking a back row enemy while the user is in the back.<br /><br />The user cannot select another action on the turn where Buster Cannon activates. If the user is incapacitated or their arms become bound, Buster Cannon will not activate.<br /><br />The initial cast has a 90% speed modifier at all levels. The actual hit has a base accuracy of 92% at all levels.",
                "damage": "ranged fire",
                "damage target": "enemy"
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
        "Base": {
            "Brawl Mastery": {
                'requirements': {},
                'description': "Increases damage dealt with cesti.",
            },
            "Phys ATK Up": {
                'requirements': {},
                'description': "Passively increases physical (cut/stab/bash) damage.",
            },
            "Concussion": {
                'requirements': {},
                'description': "Deals melee STR-based bash damage to one enemy. Attempts to bind the target's head.<br/>Has a 90% speed modifier and a base accuracy of 102% at all levels.",
                'damage': 'physical',
                'damage target': 'enemy',
                'bind': 'head'
            },
            "Arm Crusher": {
                'requirements': {},
                'description': "Deals melee STR-based bash damage to one enemy. Attempts to bind the target's arms.<br/>Has a 90% speed modifier and a base accuracy of 102% at all levels.",
                'damage': 'physical',
                'damage target': 'enemy',
                'bind': 'arm'
            },
            "Low Blow": {
                'requirements': {},
                'description': "Deals melee STR-based bash damage to one enemy. Attempts to bind the target's legs.<br/>Has a 90% speed modifier and a base accuracy of 102% at all levels.",
                'damage': 'physical',
                'damage target': 'enemy',
                'bind': 'leg'
            },
            "One-Two Punch": {
                'requirements': {
                    "Concussion": 3,
                    "Arm Crusher": 3,
                    "Low Blow": 3,
                },
                'description': "Deals melee STR-based bash damage to one enemy. The user has a chance to follow up the initial One-Two Punch hit with Concussion, Arm Crusher, and Low Blow, if the target does not have the body part for that respective skill bound. If the target's arms are bound, for example, Concussion and Low Blow can activate, but Arm Crusher cannot. If the target is completely bound, One-Two Punch will only deal its initial damage.<br /><br />The skills are rolled for in this order: Concussion, Arm Crusher, Low Blow. Each skill is rolled for individually--failing to roll for Concussion, for example, means that Arm Crusher and Low Blow can still activate.<br />Has a 90% speed modifier and a base accuracy of 102% at all levels.",
                'damage': 'physical',
                'damage target': 'enemy',
                'bind': 'head arm leg'
            },
            "Blood Wrath": {
                'requirements': {},
                'description': "When the user loses HP, they have a chance to attack an enemy with their equipped weapon.<br />Blood Wrath can activate on self-inflicted HP loss, such as Overexertion.<br />Any modifiers to the user's normal attacks are applied for Blood Wrath. For example, if the user has a Blaze Oil effect, Blood Wrath attacks will be bash+fire.<br />Blood Wrath attacks have a base accuracy of 102% at all levels.",
            },
            "Overexertion": {
                'requirements': {
                    "Blood Wrath": 1
                },
                'description': "Places a buff on one party member that increases their cut/stab/bash damage, at the cost of losing a percentage of their current HP whenever they act, for 4 turns.<br />Has a 40% speed modifier at all levels.",
                'buff': 'atk',
                'buff target': 'single'
            },
            "Thunder Fist": {
                'requirements': {},
                'description': "Deals melee STR-based bash+volt damage to one enemy. If the target is not killed by Thunder Fist, the user suffers backlash damage--a percentage of their current HP.",
                'damage': 'physical volt',
                'damage target': 'enemy'
            },
            "Devils Fist": {
                'requirements': {
                    'Thunder Fist': 2
                },
                'description': "Consumes a percentage of the user's current HP to deal melee STR-based bash damage to one enemy, with splash damage.<br /><br />Has an 80% speed modifier and no base accuracy modifier at all levels.",
                'damage': 'physical',
                'damage target': 'enemy'
            }
        },
        "Barrage Brawler": {
            "Double Punch": {
                'requirements': {},
                'description': "When using Concussion, Arm Crusher, Low Blow, or Corkscrew on their own (not as follow-ups from One-Two Punch or Leading Blow), if the skill fails to inflict its ailment/bind, the user has a chance to use the skill again. Will not activate if the target already has the applicable disable"
            },
            "Status ATK Up": {
                'requirements': {},
                'description': "Increases the user's chance of inflicting ailments, binds, and stuns."
            },
            "Corkscrew": {
                'requirements': {},
                'description': "Deals melee STR-based bash damage to one enemy. Attempts to inflict paralysis on the target.",
                "ailment": "paralyzed",
                "damage": "melee",
                "damage target": "enemy"
            },
            "Leading Blow": {
                'requirements': {
                    "Corkscrew": 2,
                    "One-Two Punch": 5
                },
                'description': "Deals melee STR-based bash damage to one enemy. If the target has an ailment and/or binds, follows up with the following skills: Concussion for head bind, Arm Crusher for arm bind, Low Blow for leg bind, and Corkscrew for any ailment. The follow-up skills have a multiplier applied to their damage.<br /><br />Has a 90% speed modifier and a base accuracy of 97% at all levels.",
                'damage': 'physical',
                'damage target': 'enemy'
            },
            "Speed Up": {
                'requirements': {},
                'description': "Increases the user's action speed, accuracy, and evasion."
            },
            "Lash Out": {
                'requirements': {
                    "Speed Up": 5
                },
                'description': "Deals multiple instances of melee STR-based bash damage to random enemies. Can hit the same target multiple times. The amount of attacks Lash Out deals is equal to the number of times the user hit an enemy on the last turn. As an example, if the user used One-Two Punch and activated all three follow-ups, Lash Out would hit four times.<br /><br />Has an 80% speed modifier and a base accuracy of 87% at all levels.",
                'damage': 'physical',
                'damage target': 'multi'
            },
            "Cross Counter": {
                'requirements': {
                    "Overexertion": 5
                },
                'description': "For one turn, when an ally in the same row as the user first takes STR-based damage, the user will deal melee STR-based bash damage to the attacker. Attempts to bind whichever body part was used to attack the damage receiver. If the source was a normal physical attack, Cross Counter (most likely) will attempt to bind the source's arms. Only activates once per turn.<br/><br/>Initial prep has standard priority and a 1500% speed modifier at all levels. Counterattacks have a base accuracy of 147% at all levels.",
                'damage': 'physical',
                'damage target': 'counter'
            },
            "Breather": {
                'requirements': {},
                'description': "Can only be used if the user is afflicted with an ailment or bind. Removes all binds and ailments from the user. Increases the user's damage on the next turn.",
                'buff': 'atk',
                'target': 'self'
            },
            "Fault Blocker": {
                'requirements': {},
                'description': "Reduces the chance of being afflicted with ailments and binds for party members in the user's row for a set amount of turns.",
                'buff': 'bind',
                'buff target': 'row'
            },
            "Clinch": {
                'requirements': {
                    "Breather": 3,
                    "Fault Blocker": 3
                },
                'description': "Attempts to bind the head, arms, and legs of both one enemy and the user. Each bind is rolled for individually.<br/><br/>Has an 80% speed modifier at all levels.",
                'bind': 'head arm leg'
            }
        },
        "Impact Brawler": {
            "Fortitude": {
                'requirements':{},
                'description': "Increases the user's damage when their current HP is below a certain percentage of their maximum HP."
            },
            "HP Up": {
                'requirements':{},
                'description': "Increases the user's maximum HP."
            },
            "Vajra Stance": {
                'requirements':{},
                'description': "Increases the user's row's defense against physical (cut/stab/bash) attacks for a set amount of turns.<br /><br />Has a 70% speed modifier at all levels.",
                'buff': 'def',
                'buff target': 'row'
            },
            "Soul Crusher": {
                'requirements':{},
                'description': "Deals melee STR-based bash damage to all enemies. Heals the user for a percentage of the damage dealt.<br/><br/>Has an 80% speed modifier and a base accuracy of 92% at all levels.",
                'damage': 'physical',
                'damage target': 'aoe'
            },
            "Abyssal Killer": {
                'requirements':{
                    'Vajra Stance': 5,
                    'Soul Crusher': 5
                },
                'description': "For one turn, the user will endure mortal damage once. If the user endured a fatal hit through usage of Abyssal Killer, their damage on the next turn is increased by the value listed here multiplied by the square root of the square root of the percentage of the user's max HP the endured hit would've overkilled them by.<br/><br/>Has a 200% speed modifier at all levels.",
                'buff': 'atk',
                'buff target': 'self'
            },
            "Titan Killer": {
                'requirements':{},
                'description': "Deals melee STR-based bash damage to one enemy. Damage is increased if the target has a higher percentage of their max HP than the user does--ie. if the user has 50% of their max HP and the target has 80%, the damage is amplified.<br/><br/>Has a 150% speed modifier and a base accuracy of 97% at all levels.",
                'damage': 'physical',
                'damage target': 'enemy'
            },
            "Deaths Edge": {
                'requirements':{
                    'Overexertion': 3
                },
                'description': "Deals melee STR-based bash damage to one enemy. Damage is affected in some way by how low the party's HP is.<br/><br/>The specific formula by which Death's Edge damage scales is very complicated--as such, all I will mention is that both the party's current average percentage of HP remaining, as well as the raw amount of HP missing, are both taken into account by Death's Edge.<br/>Has a 20% speed modifier and a base accuracy of 147% at all levels.",
                'damage': 'physical',
                'damage target': 'enemy'
            },
            "Heavenly Aid": {
                'requirements':{
                    'Titan Killer': 3,
                    "Deaths Edge": 3
                },
                'description': "Increases the user's damage on the next turn based on how much HP they recover on the turn that Heavenly Aid is casted. If the user does not recover any HP, Heavenly Aid has no effect. The final charge amount is approximately the value listed here multiplied by the percentage of their max HP the user recovered last turn.<br/><br/>Has a 200% speed modifier at all levels.",
                'buff': 'atk',
                'buff target': 'self'
            },
            "Satans Fist": {
                'requirements':{
                    'Devils Fist': 3
                },
                'description': "Consumes a percentage of the user's current HP to deal melee STR-based bash damage to one row of enemies.<br/><br/>Has an 80% speed modifier and a base accuracy of 97% at all levels.",
                'damage': 'physical',
                'damage target': 'row'
            },
            "Status DEF Up": {
                'requirements':{},
                'description': "Reduces the user's chance of being afflicted with ailments and binds."
            }
        }
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