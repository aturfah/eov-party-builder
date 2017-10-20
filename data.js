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
            },
            'Chain Freeze': {
                'requirements': {},
                'description': 'Targets one enemy. When that enemy takes stab or ice damage, the caster will follow up with another attack. The element is either cut or stab, depending on if the user knows Rapier Mastery, and ice depending on the skill. Each time Chain Flame activates, the chance of it activating again on that turn is decreased. The base activation chance is 100%.<br/>Has standard priority. Has a base accuracy of 99% at all levels.',
            },
            'Chain Shock': {
                'requirements': {},
                'description': 'Targets one enemy. When that enemy takes stab or volt damage, the caster will follow up with another attack. The element is either cut or stab, depending on if the user knows Rapier Mastery, and volt depending on the skill. Each time Chain Shock activates, the chance of it activating again on that turn is decreased. The base activation chance is 100%.<br/>Has standard priority. Has a base accuracy of 99% at all levels.',
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
                } ,
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
                'description': 'Deals melee STR-based stab damage to one enemy. Attempts to inflict blind on the target.'
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
                "description": "Deals melee STR-based stab damage to one enemy. For the rest of the turn, the user's evasion and chance to be targeted are increased."
            },
            "Revenge Thrust": {
                'requirements': {
                    'Deft Thrust': 5
                },
                "description": "Deals melee STR-based stab+volt damage to one enemy. The damage starts at a base value, and is then multiplied by the amount of times the user has dodged an attack since the last use of Revenge Thrust.<br/> There is a maximum amount of times Revenge Thrust can have its damage multiplied."
            },
            "Counter Boost": {
                'requirements': {
                    'Sylphid': 5
                },
                "description": "Gives a chance to add extra hits when Sylphid activates. Each extra hit is rolled for individually."
            }
        },
        "Chain Duelist": {}
    },
    "dragoon": {
        "specializations": [
            "Shield Bearer",
            "Cannon Bearer"
        ],
        "Base": {},
        "Shield Bearer": {},
        "Cannon Bearer": {}
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