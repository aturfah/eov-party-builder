/*
"Skill Name": {
    'requirements': {},
    'description': "",
}
*/

skill_data = {
    "botanist": {
        "specializations": [
            "Graced Poisoner",
            "Merciful Healer"
        ],
        "Base": {
            "Herb Mastery": {
                "description": "Increases HP restored with herb skills.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Restore Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Restore Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Restore Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Restore Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Restore Increase": "19%"
                    },
                    {
                        "level": 6,
                        "Restore Increase": "20%"
                    },
                    {
                        "level": 7,
                        "Restore Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Restore Increase": "22%"
                    },
                    {
                        "level": 9,
                        "Restore Increase": "23%"
                    },
                    {
                        "level": 10,
                        "Restore Increase": "30%"
                    }
                ]
            },
            "Healing Herb": {
                "description": "Restores one party members HP.",
                "healing": "direct",
                "healing target": "single",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Healing Power": "100%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Healing Power": "115%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Healing Power": "130%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Healing Power": "145%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Healing Power": "210%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "Healing Power": "225%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "Healing Power": "240%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "Healing Power": "255%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "Healing Power": "270%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "8",
                        "Healing Power": "350%"
                    }
                ]
            },
            "Sweeping Herb": {
                "description": "Restores one rows HP.",
                "healing": "direct",
                "healing target": "row",
                "requirements": {
                    "Healing Herb": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Healing Power": "90%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Healing Power": "99%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Healing Power": "108%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Healing Power": "117%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Healing Power": "167%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Healing Power": "177%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Healing Power": "187%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Healing Power": "197%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Healing Power": "207%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Healing Power": "270%"
                    }
                ]
            },
            "Refreshing Herb": {
                "description": "Cures either one party member or one row of ailments.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Target": "Single"
                    },
                    {
                        "level": 2,
                        "TP Cost": "8",
                        "Target": "Single"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Target": "Single"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Target": "Single"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Target": "Row"
                    }
                ]
            },
            "Revival Herb": {
                "description": "Revives one dead ally.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Refreshing Herb": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "8",
                        "Revive Restore": "10"
                    },
                    {
                        "level": 2,
                        "TP Cost": "8",
                        "Revive Restore": "25"
                    },
                    {
                        "level": 3,
                        "TP Cost": "8",
                        "Revive Restore": "40"
                    },
                    {
                        "level": 4,
                        "TP Cost": "8",
                        "Revive Restore": "55"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Revive Restore": "125"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Revive Restore": "155"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Revive Restore": "185"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Revive Restore": "215"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Revive Restore": "245"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Revive Restore": "400"
                    }
                ]
            },
            "Antibodies": {
                "description": "Adds to the users chance to naturally recover from ailments and binds.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Added Chance": "15%"
                    },
                    {
                        "level": 2,
                        "Added Chance": "17%"
                    },
                    {
                        "level": 3,
                        "Added Chance": "19%"
                    },
                    {
                        "level": 4,
                        "Added Chance": "21%"
                    },
                    {
                        "level": 5,
                        "Added Chance": "28%"
                    },
                    {
                        "level": 6,
                        "Added Chance": "31%"
                    },
                    {
                        "level": 7,
                        "Added Chance": "34%"
                    },
                    {
                        "level": 8,
                        "Added Chance": "37%"
                    },
                    {
                        "level": 9,
                        "Added Chance": "40%"
                    },
                    {
                        "level": 10,
                        "Added Chance": "50%"
                    }
                ]
            },
            "Herb Foraging": {
                "description": "Restores each party members HP and TP when using a Take, Chop, or Mine point. The restore amount is a static amount plus a percentage of the party members maximum HP/TP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Static HP Restore": "5",
                        "% Max HP Restore": "15%",
                        "Static TP Restore": "2",
                        "% Max TP Restore": "1%"
                    },
                    {
                        "level": 2,
                        "Static HP Restore": "9",
                        "% Max HP Restore": "17%",
                        "Static TP Restore": "3",
                        "% Max TP Restore": "1%"
                    },
                    {
                        "level": 3,
                        "Static HP Restore": "13",
                        "% Max HP Restore": "19%",
                        "Static TP Restore": "4",
                        "% Max TP Restore": "1%"
                    },
                    {
                        "level": 4,
                        "Static HP Restore": "17",
                        "% Max HP Restore": "21%",
                        "Static TP Restore": "5",
                        "% Max TP Restore": "1%"
                    },
                    {
                        "level": 5,
                        "Static HP Restore": "37",
                        "% Max HP Restore": "29%",
                        "Static TP Restore": "7",
                        "% Max TP Restore": "3%"
                    },
                    {
                        "level": 6,
                        "Static HP Restore": "43",
                        "% Max HP Restore": "31%",
                        "Static TP Restore": "8",
                        "% Max TP Restore": "3%"
                    },
                    {
                        "level": 7,
                        "Static HP Restore": "49",
                        "% Max HP Restore": "33%",
                        "Static TP Restore": "9",
                        "% Max TP Restore": "3%"
                    },
                    {
                        "level": 8,
                        "Static HP Restore": "55",
                        "% Max HP Restore": "35%",
                        "Static TP Restore": "10",
                        "% Max TP Restore": "3%"
                    },
                    {
                        "level": 9,
                        "Static HP Restore": "61",
                        "% Max HP Restore": "37%",
                        "Static TP Restore": "11",
                        "% Max TP Restore": "3%"
                    },
                    {
                        "level": 10,
                        "Static HP Restore": "90",
                        "% Max HP Restore": "45%",
                        "Static TP Restore": "15",
                        "% Max TP Restore": "5%"
                    }
                ]
            },
            "Toxic Smoke": {
                "description": "Attempts to inflict poison on one row of enemies. Increases targeted enemies chance of being successfully poisoned for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Base Chance": "40%",
                        "Base Poison Damage": "40",
                        "Chance Multiplier": "1.19x",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Base Chance": "40%",
                        "Base Poison Damage": "60",
                        "Chance Multiplier": "1.22x",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Base Chance": "40%",
                        "Base Poison Damage": "80",
                        "Chance Multiplier": "1.25x",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Base Chance": "40%",
                        "Base Poison Damage": "100",
                        "Chance Multiplier": "1.28x",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Base Chance": "50%",
                        "Base Poison Damage": "100",
                        "Chance Multiplier": "1.28x",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Base Chance": "50%",
                        "Base Poison Damage": "145",
                        "Chance Multiplier": "1.31x",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Base Chance": "50%",
                        "Base Poison Damage": "190",
                        "Chance Multiplier": "1.34x",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Base Chance": "50%",
                        "Base Poison Damage": "235",
                        "Chance Multiplier": "1.37x",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Base Chance": "50%",
                        "Base Poison Damage": "280",
                        "Chance Multiplier": "1.4x",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Base Chance": "60%",
                        "Base Poison Damage": "280",
                        "Chance Multiplier": "1.4x",
                        "Duration": "6"
                    }
                ]
            },
            "Dark Smoke": {
                "description": "Attempts to inflict blind on one row of enemies. Increases targeted enemies chance of being successfully blinded for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Base Chance": "35%",
                        "Chance Multiplier": "1.19x",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Base Chance": "35%",
                        "Chance Multiplier": "1.22x",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Base Chance": "35%",
                        "Chance Multiplier": "1.25x",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Base Chance": "35%",
                        "Chance Multiplier": "1.28x",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.28x",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.31x",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.34x",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.37x",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.4x",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Base Chance": "55%",
                        "Chance Multiplier": "1.4x",
                        "Duration": "6"
                    }
                ]
            },
            "Smokeblight": {
                "description": "Reduces one row of enemies elemental defense for a set amount of turns. The defense decrease is amplified if an enemy has a Smoke debuff.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Toxic Smoke": 2,
                    "Dark Smoke": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "No Ailment Increase": "4%",
                        "Ailment Increase": "25%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "No Ailment Increase": "5%",
                        "Ailment Increase": "28%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "No Ailment Increase": "6%",
                        "Ailment Increase": "31%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "No Ailment Increase": "7%",
                        "Ailment Increase": "34%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "No Ailment Increase": "7%",
                        "Ailment Increase": "34%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "No Ailment Increase": "9%",
                        "Ailment Increase": "38%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "No Ailment Increase": "11%",
                        "Ailment Increase": "42%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "No Ailment Increase": "13%",
                        "Ailment Increase": "46%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "No Ailment Increase": "15%",
                        "Ailment Increase": "50%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "No Ailment Increase": "15%",
                        "Ailment Increase": "50%",
                        "Duration": "6"
                    }
                ]
            }
        },
        "Graced Poisoner": {
            "Smoke Boost": {
                "description": "Increases the speed of smoke skills, as well as reducing their TP costs. The TP cost reduction is performed by subtracting a static amount from the base cost, and then multiplying that by a percentage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Speed Multiplier": "1.1x",
                        "Static TP Reduction": "-1",
                        "% TP Cost Multiplier": "1x"
                    },
                    {
                        "level": 2,
                        "Speed Multiplier": "1.16x",
                        "Static TP Reduction": "-1",
                        "% TP Cost Multiplier": "1x"
                    },
                    {
                        "level": 3,
                        "Speed Multiplier": "1.22x",
                        "Static TP Reduction": "-1",
                        "% TP Cost Multiplier": "1x"
                    },
                    {
                        "level": 4,
                        "Speed Multiplier": "1.28x",
                        "Static TP Reduction": "-1",
                        "% TP Cost Multiplier": "1x"
                    },
                    {
                        "level": 5,
                        "Speed Multiplier": "1.28x",
                        "Static TP Reduction": "-2",
                        "% TP Cost Multiplier": "0.85x"
                    },
                    {
                        "level": 6,
                        "Speed Multiplier": "1.36x",
                        "Static TP Reduction": "-2",
                        "% TP Cost Multiplier": "0.85x"
                    },
                    {
                        "level": 7,
                        "Speed Multiplier": "1.44x",
                        "Static TP Reduction": "-2",
                        "% TP Cost Multiplier": "0.85x"
                    },
                    {
                        "level": 8,
                        "Speed Multiplier": "1.52x",
                        "Static TP Reduction": "-2",
                        "% TP Cost Multiplier": "0.85x"
                    },
                    {
                        "level": 9,
                        "Speed Multiplier": "1.6x",
                        "Static TP Reduction": "-2",
                        "% TP Cost Multiplier": "0.85x"
                    },
                    {
                        "level": 10,
                        "Speed Multiplier": "1.6x",
                        "Static TP Reduction": "-3",
                        "% TP Cost Multiplier": "0.7x"
                    }
                ]
            },
            "TP Up": {
                "description": "Increases the users maximum TP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max TP Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Max TP Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Max TP Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Max TP Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Max TP Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Max TP Increase": "19%"
                    },
                    {
                        "level": 7,
                        "Max TP Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Max TP Increase": "23%"
                    },
                    {
                        "level": 9,
                        "Max TP Increase": "25%"
                    },
                    {
                        "level": 10,
                        "Max TP Increase": "30%"
                    }
                ]
            },
            "Status ATK Up": {
                "description": "Increases the users chance of inflicting ailments, binds, and stuns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Base Chance Multiplier": "1.05x"
                    },
                    {
                        "level": 2,
                        "Base Chance Multiplier": "1.06x"
                    },
                    {
                        "level": 3,
                        "Base Chance Multiplier": "1.07x"
                    },
                    {
                        "level": 4,
                        "Base Chance Multiplier": "1.08x"
                    },
                    {
                        "level": 5,
                        "Base Chance Multiplier": "1.12x"
                    },
                    {
                        "level": 6,
                        "Base Chance Multiplier": "1.13x"
                    },
                    {
                        "level": 7,
                        "Base Chance Multiplier": "1.14x"
                    },
                    {
                        "level": 8,
                        "Base Chance Multiplier": "1.15x"
                    },
                    {
                        "level": 9,
                        "Base Chance Multiplier": "1.16x"
                    },
                    {
                        "level": 10,
                        "Base Chance Multiplier": "1.2x"
                    }
                ]
            },
            "Paralyze Smoke": {
                "description": "Attempts to inflict paralysis on one row of enemies. Increases targeted enemies chance of being successfully paralyzed for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Antibodies": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Base Chance": "35%",
                        "Chance Multiplier": "1.19x",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Base Chance": "35%",
                        "Chance Multiplier": "1.22x",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Base Chance": "35%",
                        "Chance Multiplier": "1.25x",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Base Chance": "35%",
                        "Chance Multiplier": "1.28x",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.28x",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.31x",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.34x",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.37x",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Base Chance": "44%",
                        "Chance Multiplier": "1.4x",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Base Chance": "55%",
                        "Chance Multiplier": "1.4x",
                        "Duration": "6"
                    }
                ]
            },
            "Chaos Smoke": {
                "description": "Attempts to inflict panic on one row of enemies. Increases targeted enemies chance of being successfully panicked for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Antibodies": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "9",
                        "Base Chance": "27%",
                        "Chance Multiplier": "1.19x",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "9",
                        "Base Chance": "27%",
                        "Chance Multiplier": "1.22x",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "9",
                        "Base Chance": "27%",
                        "Chance Multiplier": "1.25x",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "9",
                        "Base Chance": "27%",
                        "Chance Multiplier": "1.28x",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Base Chance": "33%",
                        "Chance Multiplier": "1.28x",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "15",
                        "Base Chance": "33%",
                        "Chance Multiplier": "1.31x",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "15",
                        "Base Chance": "33%",
                        "Chance Multiplier": "1.34x",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "15",
                        "Base Chance": "33%",
                        "Chance Multiplier": "1.37x",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "15",
                        "Base Chance": "33%",
                        "Chance Multiplier": "1.4x",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "21",
                        "Base Chance": "40%",
                        "Chance Multiplier": "1.4x",
                        "Duration": "6"
                    }
                ]
            },
            "Smoke Bomb": {
                "description": "Dispels one debuff from an enemy. Deals ranged INT-based fire damage to the target. Does nothing if the target does not have both an ailment and a debuff.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Paralyze Smoke": 3,
                    "Chaos Smoke": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "Damage": "600%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "20",
                        "Damage": "630%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "20",
                        "Damage": "660%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "20",
                        "Damage": "690%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "28",
                        "Damage": "940%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "28",
                        "Damage": "880%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "28",
                        "Damage": "920%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "28",
                        "Damage": "960%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "28",
                        "Damage": "1000%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "36",
                        "Damage": "1200%"
                    }
                ]
            },
            "Smokeflash": {
                "description": "Targets one enemy. If that enemy has a Smoke debuff, attempts to stun them.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Smokeblight": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Base Chance": "52%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Base Chance": "54%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Base Chance": "56%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Base Chance": "65%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "Base Chance": "67%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "Base Chance": "69%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "Base Chance": "71%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "Base Chance": "73%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "7",
                        "Base Chance": "85%"
                    }
                ]
            },
            "Smokestone": {
                "description": "Targets one enemy. If that enemy has a Smoke debuff, attempts to inflict petrification.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Smokeblight": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Base Chance": "45%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Base Chance": "46%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Base Chance": "47%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Base Chance": "48%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Base Chance": "54%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Base Chance": "56%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Base Chance": "58%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Base Chance": "60%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Base Chance": "62%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Base Chance": "75%"
                    }
                ]
            },
            "Passing Scent": {
                "description": "For a set amount of turns, gives a chance to attempt to inflict the last used smoke skills ailment to all enemies at the end of the turn. The specific chance is unknown, as its not in Passing Scents data.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Smokeflash": 3,
                    "Smokestone": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Duration": "6"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Duration": "6"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Duration": "6"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Duration": "6"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Duration": "8"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Duration": "8"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Duration": "8"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Duration": "8"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Duration": "8"
                    },
                    {
                        "level": 10,
                        "TP Cost": "9",
                        "Duration": "10"
                    }
                ]
            },
            "Auto-Smoke": {
                "description": "Gives the user a chance to use a random Smoke skill on the enemy front line at the start of battle. The chance to activate depends on how many Smoke skills the user knows.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Smokeflash": 3,
                    "Smokestone": 3
                },
                "table": [
                    {
                        "level": 1,
                        "1 Skill Chance": "7%",
                        "2 Skills Chance": "14%",
                        "3 Skills Chance": "24%",
                        "4 Skills Chance": "30%"
                    },
                    {
                        "level": 2,
                        "1 Skill Chance": "8%",
                        "2 Skills Chance": "16%",
                        "3 Skills Chance": "26%",
                        "4 Skills Chance": "33%"
                    },
                    {
                        "level": 3,
                        "1 Skill Chance": "9%",
                        "2 Skills Chance": "18%",
                        "3 Skills Chance": "28%",
                        "4 Skills Chance": "36%"
                    },
                    {
                        "level": 4,
                        "1 Skill Chance": "10%",
                        "2 Skills Chance": "20%",
                        "3 Skills Chance": "30%",
                        "4 Skills Chance": "39%"
                    },
                    {
                        "level": 5,
                        "1 Skill Chance": "15%",
                        "2 Skills Chance": "30%",
                        "3 Skills Chance": "45%",
                        "4 Skills Chance": "59%"
                    },
                    {
                        "level": 6,
                        "1 Skill Chance": "16%",
                        "2 Skills Chance": "32%",
                        "3 Skills Chance": "48%",
                        "4 Skills Chance": "63%"
                    },
                    {
                        "level": 7,
                        "1 Skill Chance": "17%",
                        "2 Skills Chance": "34%",
                        "3 Skills Chance": "51%",
                        "4 Skills Chance": "67%"
                    },
                    {
                        "level": 8,
                        "1 Skill Chance": "18%",
                        "2 Skills Chance": "36%",
                        "3 Skills Chance": "54%",
                        "4 Skills Chance": "71%"
                    },
                    {
                        "level": 9,
                        "1 Skill Chance": "19%",
                        "2 Skills Chance": "38%",
                        "3 Skills Chance": "57%",
                        "4 Skills Chance": "75%"
                    },
                    {
                        "level": 10,
                        "1 Skill Chance": "25%",
                        "2 Skills Chance": "50%",
                        "3 Skills Chance": "75%",
                        "4 Skills Chance": "100%"
                    }
                ]
            }
        },
        "Merciful Healer": {
            "Herb Boost": {
                "description": "Allows herb skills to set healed party members maximum HP to higher than the normal max for one turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max HP Increase": "1.1x"
                    },
                    {
                        "level": 2,
                        "Max HP Increase": "1.11x"
                    },
                    {
                        "level": 3,
                        "Max HP Increase": "1.12x"
                    },
                    {
                        "level": 4,
                        "Max HP Increase": "1.13x"
                    },
                    {
                        "level": 5,
                        "Max HP Increase": "1.19x"
                    },
                    {
                        "level": 6,
                        "Max HP Increase": "1.2x"
                    },
                    {
                        "level": 7,
                        "Max HP Increase": "1.21x"
                    },
                    {
                        "level": 8,
                        "Max HP Increase": "1.22x"
                    },
                    {
                        "level": 9,
                        "Max HP Increase": "1.23x"
                    },
                    {
                        "level": 10,
                        "Max HP Increase": "1.33x"
                    }
                ]
            },
            "HP Up": {
                "description": "Increases the users maximum HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max HP Increase": "5%"
                    },
                    {
                        "level": 2,
                        "Max HP Increase": "6%"
                    },
                    {
                        "level": 3,
                        "Max HP Increase": "7%"
                    },
                    {
                        "level": 4,
                        "Max HP Increase": "8%"
                    },
                    {
                        "level": 5,
                        "Max HP Increase": "12%"
                    },
                    {
                        "level": 6,
                        "Max HP Increase": "13%"
                    },
                    {
                        "level": 7,
                        "Max HP Increase": "14%"
                    },
                    {
                        "level": 8,
                        "Max HP Increase": "15%"
                    },
                    {
                        "level": 9,
                        "Max HP Increase": "16%"
                    },
                    {
                        "level": 10,
                        "Max HP Increase": "20%"
                    }
                ]
            },
            "Bountiful Herb": {
                "description": "Restores all party members HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Sweeping Herb": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "Healing Power": "80%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "15",
                        "Healing Power": "84%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "15",
                        "Healing Power": "88%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "15",
                        "Healing Power": "92%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "22",
                        "Healing Power": "142%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "22",
                        "Healing Power": "147%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "22",
                        "Healing Power": "152%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "22",
                        "Healing Power": "157%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "22",
                        "Healing Power": "162%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "30",
                        "Healing Power": "220%"
                    }
                ]
            },
            "Freeing Herb": {
                "description": "Cures either one party member or one row of binds. The amount of binds removed depends on the level of Freeing Herb.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Revival Herb": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Target": "Single",
                        "Binds Removed": "1"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Target": "Single",
                        "Binds Removed": "1"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Target": "Single",
                        "Binds Removed": "2"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Target": "Single",
                        "Binds Removed": "2"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Target": "Row",
                        "Binds Removed": "3"
                    }
                ]
            },
            "Auto-Resurrection": {
                "description": "When an ally dies, the user has a chance to immediately revive them.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Freeing Herb": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "2%",
                        "Revive Restore": "10"
                    },
                    {
                        "level": 2,
                        "Chance": "3%",
                        "Revive Restore": "16"
                    },
                    {
                        "level": 3,
                        "Chance": "4%",
                        "Revive Restore": "22"
                    },
                    {
                        "level": 4,
                        "Chance": "5%",
                        "Revive Restore": "28"
                    },
                    {
                        "level": 5,
                        "Chance": "8%",
                        "Revive Restore": "68"
                    },
                    {
                        "level": 6,
                        "Chance": "9%",
                        "Revive Restore": "76"
                    },
                    {
                        "level": 7,
                        "Chance": "10%",
                        "Revive Restore": "84"
                    },
                    {
                        "level": 8,
                        "Chance": "11%",
                        "Revive Restore": "92"
                    },
                    {
                        "level": 9,
                        "Chance": "12%",
                        "Revive Restore": "100"
                    },
                    {
                        "level": 10,
                        "Chance": "15%",
                        "Revive Restore": "150"
                    }
                ]
            },
            "Status DEF Up": {
                "description": "Reduces the users chance of being afflicted with ailments and binds.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance Multiplier": "0.92x"
                    },
                    {
                        "level": 2,
                        "Chance Multiplier": "0.90x"
                    },
                    {
                        "level": 3,
                        "Chance Multiplier": "0.88x"
                    },
                    {
                        "level": 4,
                        "Chance Multiplier": "0.86x"
                    },
                    {
                        "level": 5,
                        "Chance Multiplier": "0.82x"
                    },
                    {
                        "level": 6,
                        "Chance Multiplier": "0.8x"
                    },
                    {
                        "level": 7,
                        "Chance Multiplier": "0.78x"
                    },
                    {
                        "level": 8,
                        "Chance Multiplier": "0.76x"
                    },
                    {
                        "level": 9,
                        "Chance Multiplier": "0.74x"
                    },
                    {
                        "level": 10,
                        "Chance Multiplier": "0.7x"
                    }
                ]
            },
            "Shared Nostrum": {
                "description": "For a set amount of turns, reduces the action speed of and amount of HP restored by herb skills, in exchange for upgrading the target type of herb skills. Single-target skills become row-target, row-target skills become party-target. Party-target skills receive no benefits and only suffer the speed and restore decreases.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Herb Foraging": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "Restore/Speed Multiplier": "0.67x",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "20",
                        "Restore/Speed Multiplier": "0.71x",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "20",
                        "Restore/Speed Multiplier": "0.75x",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "20",
                        "Restore/Speed Multiplier": "0.79x",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "30",
                        "Restore/Speed Multiplier": "0.79x",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "30",
                        "Restore/Speed Multiplier": "0.83x",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "30",
                        "Restore/Speed Multiplier": "0.87x",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "30",
                        "Restore/Speed Multiplier": "0.91x",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "30",
                        "Restore/Speed Multiplier": "0.95x",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "40",
                        "Restore/Speed Multiplier": "0.95x",
                        "Duration": "6"
                    }
                ]
            },
            "Reflex Herb": {
                "description": "For one turn, when any party member takes damage, the user will heal them after the damage source has finished its turn. Each time Reflex Herb activates, the chance of it activating again on that turn is decreased. The base activation chance is 100%. The \"Max Chases\" limit shown in the table is per party member, not for the entire party.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Healing Power": "65%",
                        "Chance Decrease": "-50%",
                        "Max Chases": "2"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Healing Power": "72%",
                        "Chance Decrease": "-50%",
                        "Max Chases": "2"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Healing Power": "79%",
                        "Chance Decrease": "-50%",
                        "Max Chases": "2"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Healing Power": "86%",
                        "Chance Decrease": "-50%",
                        "Max Chases": "2"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Healing Power": "86%",
                        "Chance Decrease": "-25%",
                        "Max Chases": "3"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Healing Power": "97%",
                        "Chance Decrease": "-25%",
                        "Max Chases": "3"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Healing Power": "108%",
                        "Chance Decrease": "-25%",
                        "Max Chases": "3"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Healing Power": "119%",
                        "Chance Decrease": "-25%",
                        "Max Chases": "3"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Healing Power": "130%",
                        "Chance Decrease": "-25%",
                        "Max Chases": "3"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Healing Power": "130%",
                        "Chance Decrease": "-10%",
                        "Max Chases": "4"
                    }
                ]
            },
            "Delayed Herb": {
                "description": "At the start of the next turn, restores all party members HP. If the user is unable to act on the next turn, Delayed Herb will fail.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Healing Power": "60%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Healing Power": "64%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Healing Power": "68%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Healing Power": "72%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Healing Power": "112%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "15",
                        "Healing Power": "117%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "15",
                        "Healing Power": "122%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "15",
                        "Healing Power": "127%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "15",
                        "Healing Power": "132%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Healing Power": "180%"
                    }
                ]
            },
            "Lingering Scent": {
                "description": "For a set amount of turns, the effect of the last used herb skill will be repeated at the end of the turn. If the last used herb skill restores HP, the amount it heals is reduced.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Reflex Herb": 3,
                    "Delayed Herb": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Healing Multiplier": "0.15x",
                        "Duration": "6"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Healing Multiplier": "0.18x",
                        "Duration": "6"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Healing Multiplier": "0.21x",
                        "Duration": "6"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Healing Multiplier": "0.24x",
                        "Duration": "6"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Healing Multiplier": "0.24x",
                        "Duration": "8"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Healing Multiplier": "0.28x",
                        "Duration": "8"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Healing Multiplier": "0.32x",
                        "Duration": "8"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Healing Multiplier": "0.36x",
                        "Duration": "8"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Healing Multiplier": "0.4x",
                        "Duration": "8"
                    },
                    {
                        "level": 10,
                        "TP Cost": "9",
                        "Healing Multiplier": "0.4x",
                        "Duration": "10"
                    }
                ]
            }
        }
    },
    "dragoon": {
        "specializations": [
            "Cannon Bearer",
            "Shield Bearer"
        ],
        "Base": {
            "Shield Mastery": {
                "description": "Decreases physical (cut/stab/bash) damage taken when the user has a shield equipped.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Phys Def Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Phys Def Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Phys Def Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Phys Def Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Phys Def Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Phys Def Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Phys Def Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Phys Def Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Phys Def Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Phys Def Increase": "15%"
                    }
                ]
            },
            "Cannon Mastery": {
                "description": "Increases damage dealt with cannons.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "2%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "3%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "4%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "5%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "8%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "9%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "12%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "15%"
                    }
                ]
            },
            "Line Guard": {
                "description": "Reduces physical (cut/stab/bash) damage taken by one row for one turn.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage Reduction": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage Reduction": "32%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage Reduction": "34%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage Reduction": "36%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage Reduction": "41%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage Reduction": "42%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage Reduction": "43%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage Reduction": "44%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage Reduction": "45%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "11",
                        "Damage Reduction": "50%"
                    }
                ]
            },
            "Mana Guard": {
                "description": "Reduces elemental (fire/ice/volt) damage taken by all party members for one turn.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Damage Reduction": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Damage Reduction": "33%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Damage Reduction": "36%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Damage Reduction": "39%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Damage Reduction": "49%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Damage Reduction": "51%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Damage Reduction": "53%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Damage Reduction": "55%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Damage Reduction": "57%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Damage Reduction": "67%"
                    }
                ]
            },
            "Healing Guard": {
                "description": "Reduces physical (cut/stab/bash) damage taken by the user for one turn. When the user takes damage while Healing Guard is active, their HP is restored. The restoration is a static amount plus a percentage of the users maximum HP.",
                "healing": "conditional",
                "healing target": "self",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Damage Reduction": "20%",
                        "Static Heal": "16",
                        "% Max HP Heal": "5%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Damage Reduction": "22%",
                        "Static Heal": "18",
                        "% Max HP Heal": "5%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Damage Reduction": "24%",
                        "Static Heal": "20",
                        "% Max HP Heal": "5%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Damage Reduction": "26%",
                        "Static Heal": "22",
                        "% Max HP Heal": "5%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Damage Reduction": "26%",
                        "Static Heal": "25",
                        "% Max HP Heal": "7%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "Damage Reduction": "28%",
                        "Static Heal": "27",
                        "% Max HP Heal": "7%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "Damage Reduction": "30%",
                        "Static Heal": "29",
                        "% Max HP Heal": "7%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "Damage Reduction": "32%",
                        "Static Heal": "31",
                        "% Max HP Heal": "7%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "Damage Reduction": "34%",
                        "Static Heal": "33",
                        "% Max HP Heal": "7%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "7",
                        "Damage Reduction": "34%",
                        "Static Heal": "40",
                        "% Max HP Heal": "10%"
                    }
                ]
            },
            "Gunmount": {
                "description": "Can only be used on the turn after a shield skill was used. Deals ranged STR-based bash damage to one enemy. Replicates the effect of the shield skill used on the last turn.",
                "damage": "ranged",
                "damage target": "single",
                "requirements": {
                    "Line Guard": 2,
                    "Mana Guard": 2,
                    "Healing Guard": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "2",
                        "Damage": "110%",
                        "Speed Modifier": "120%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "2",
                        "Damage": "115%",
                        "Speed Modifier": "120%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "2",
                        "Damage": "120%",
                        "Speed Modifier": "120%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "2",
                        "Damage": "125%",
                        "Speed Modifier": "120%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Damage": "225%",
                        "Speed Modifier": "160%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Damage": "235%",
                        "Speed Modifier": "160%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Damage": "245%",
                        "Speed Modifier": "160%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Damage": "255%",
                        "Speed Modifier": "160%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Damage": "265%",
                        "Speed Modifier": "160%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Damage": "450%",
                        "Speed Modifier": "200%"
                    }
                ]
            },
            "Barrage Wall": {
                "description": "Deals ranged STR-based bash damage to all enemies. Reduces hit targets physical (cut/stab/bash) attack for a set amount of turns.",
                "damage": "ranged",
                "damage target": "aoe",
                "debuff": "atk",
                "debuff target": "aoe",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage": "100%",
                        "Attack Reduction": "10%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage": "106%",
                        "Attack Reduction": "10%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage": "112%",
                        "Attack Reduction": "10%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage": "118%",
                        "Attack Reduction": "10%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Damage": "118%",
                        "Attack Reduction": "15%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "15",
                        "Damage": "126%",
                        "Attack Reduction": "15%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "15",
                        "Damage": "134%",
                        "Attack Reduction": "15%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "15",
                        "Damage": "142%",
                        "Attack Reduction": "15%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "15",
                        "Damage": "150%",
                        "Attack Reduction": "15%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "22",
                        "Damage": "150%",
                        "Attack Reduction": "20%",
                        "Duration": "6"
                    }
                ]
            },
            "Dragon Roar": {
                "description": "Increases one allys defense against physical (cut/stab/bash) attacks and chance of being targeted for a set amount of turns.",
                "buff": "def agg",
                "buff target": "single",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Target Increase": "20%",
                        "Defense Increase": "3%",
                        "Duration": "4",
                        "Speed Modifier": "100%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Target Increase": "23%",
                        "Defense Increase": "4%",
                        "Duration": "4",
                        "Speed Modifier": "100%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Target Increase": "26%",
                        "Defense Increase": "5%",
                        "Duration": "4",
                        "Speed Modifier": "100%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Target Increase": "29%",
                        "Defense Increase": "6%",
                        "Duration": "4",
                        "Speed Modifier": "100%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Target Increase": "29%",
                        "Defense Increase": "6%",
                        "Duration": "5",
                        "Speed Modifier": "130%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Target Increase": "33%",
                        "Defense Increase": "7%",
                        "Duration": "5",
                        "Speed Modifier": "130%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Target Increase": "37%",
                        "Defense Increase": "8%",
                        "Duration": "5",
                        "Speed Modifier": "130%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Target Increase": "41%",
                        "Defense Increase": "9%",
                        "Duration": "5",
                        "Speed Modifier": "130%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Target Increase": "45%",
                        "Defense Increase": "10%",
                        "Duration": "5",
                        "Speed Modifier": "130%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "13",
                        "Target Increase": "45%",
                        "Defense Increase": "10%",
                        "Duration": "6",
                        "Speed Modifier": "160%"
                    }
                ]
            },
            "Decoy Bunker": {
                "description": "Creates a Decoy Bunker in the summon row. The Decoy Bunker has 10 HP. In addition to having a DEF value, the Decoy Bunker also has a set vulnerability to all damage. The Decoy Bunker has an increased base chance of drawing enemy attacks.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Decoy Bunker DEF": "35",
                        "Damage Taken": "6%",
                        "Target Chance": "200%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Decoy Bunker DEF": "55",
                        "Damage Taken": "6%",
                        "Target Chance": "200%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Decoy Bunker DEF": "75",
                        "Damage Taken": "6%",
                        "Target Chance": "200%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Decoy Bunker DEF": "95",
                        "Damage Taken": "6%",
                        "Target Chance": "200%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "6",
                        "Decoy Bunker DEF": "95",
                        "Damage Taken": "4%",
                        "Target Chance": "275%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "6",
                        "Decoy Bunker DEF": "135",
                        "Damage Taken": "4%",
                        "Target Chance": "275%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "6",
                        "Decoy Bunker DEF": "175",
                        "Damage Taken": "4%",
                        "Target Chance": "275%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "6",
                        "Decoy Bunker DEF": "215",
                        "Damage Taken": "4%",
                        "Target Chance": "275%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "6",
                        "Decoy Bunker DEF": "255",
                        "Damage Taken": "4%",
                        "Target Chance": "275%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "Decoy Bunker DEF": "255",
                        "Damage Taken": "1%",
                        "Target Chance": "350%"
                    }
                ]
            },
            "Defense Form": {
                "description": "Increases all party members defense against physical (cut/stab/bash) attacks for a set amount of turns.",
                "buff": "def",
                "buff target": "party",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Decoy Bunker": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Defense Increase": "20%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Defense Increase": "22%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Defense Increase": "24%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Defense Increase": "26%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Defense Increase": "26%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Defense Increase": "28%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Defense Increase": "30%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Defense Increase": "32%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Defense Increase": "34%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "Defense Increase": "34%",
                        "Duration": "6"
                    }
                ]
            }
        },
        "Cannon Bearer": {
            "Gun Revenge": {
                "description": "Increases the damage of artillery skills when either a shield skill activates, or when a Decoy Bunker or Decoy Turret is attacked. Gun Revenges bonus is reset whenever it is applied.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Bonus Per Stack": "10%",
                        "Max Stacks": "2",
                        "Max Damage Bonus": "20%"
                    },
                    {
                        "level": 2,
                        "Damage Bonus Per Stack": "10%",
                        "Max Stacks": "3",
                        "Max Damage Bonus": "30%"
                    },
                    {
                        "level": 3,
                        "Damage Bonus Per Stack": "10%",
                        "Max Stacks": "4",
                        "Max Damage Bonus": "40%"
                    },
                    {
                        "level": 4,
                        "Damage Bonus Per Stack": "10%",
                        "Max Stacks": "5",
                        "Max Damage Bonus": "50%"
                    },
                    {
                        "level": 5,
                        "Damage Bonus Per Stack": "13%",
                        "Max Stacks": "5",
                        "Max Damage Bonus": "65%"
                    },
                    {
                        "level": 6,
                        "Damage Bonus Per Stack": "13%",
                        "Max Stacks": "6",
                        "Max Damage Bonus": "78%"
                    },
                    {
                        "level": 7,
                        "Damage Bonus Per Stack": "13%",
                        "Max Stacks": "7",
                        "Max Damage Bonus": "91%"
                    },
                    {
                        "level": 8,
                        "Damage Bonus Per Stack": "13%",
                        "Max Stacks": "8",
                        "Max Damage Bonus": "104%"
                    },
                    {
                        "level": 9,
                        "Damage Bonus Per Stack": "13%",
                        "Max Stacks": "9",
                        "Max Damage Bonus": "117%"
                    },
                    {
                        "level": 10,
                        "Damage Bonus Per Stack": "17%",
                        "Max Stacks": "9",
                        "Max Damage Bonus": "153%"
                    }
                ]
            },
            "Phys ATK Up": {
                "description": "Increases cut, stab, and bash damage.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "15%"
                    }
                ]
            },
            "TP Up": {
                "description": "Increases the users maximum TP.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max TP Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Max TP Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Max TP Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Max TP Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Max TP Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Max TP Increase": "19%"
                    },
                    {
                        "level": 7,
                        "Max TP Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Max TP Increase": "23%"
                    },
                    {
                        "level": 9,
                        "Max TP Increase": "25%"
                    },
                    {
                        "level": 10,
                        "Max TP Increase": "30%"
                    }
                ]
            },
            "Prep Artillery": {
                "description": "Increases the damage, accuracy, and speed of the artillery skill used on the next turn.",
                "buff": "atk acc",
                "buff target": "self",
                "requirements": {
                    "TP Up": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage Multiplier": "2x",
                        "Acc Increase": "+20%",
                        "Speed Multiplier": "1.5x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage Multiplier": "2x",
                        "Acc Increase": "+24%",
                        "Speed Multiplier": "1.6x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage Multiplier": "2x",
                        "Acc Increase": "+28%",
                        "Speed Multiplier": "1.7x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage Multiplier": "2x",
                        "Acc Increase": "+32%",
                        "Speed Multiplier": "1.8x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Damage Multiplier": "2.25x",
                        "Acc Increase": "+32%",
                        "Speed Multiplier": "1.8x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "15",
                        "Damage Multiplier": "2.25x",
                        "Acc Increase": "+38%",
                        "Speed Multiplier": "2.1x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "15",
                        "Damage Multiplier": "2.25x",
                        "Acc Increase": "+44%",
                        "Speed Multiplier": "2.4x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "15",
                        "Damage Multiplier": "2.25x",
                        "Acc Increase": "+50%",
                        "Speed Multiplier": "2.7x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "15",
                        "Damage Multiplier": "2.25x",
                        "Acc Increase": "+56%",
                        "Speed Multiplier": "3x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Damage Multiplier": "2.5x",
                        "Acc Increase": "+56%",
                        "Speed Multiplier": "3x"
                    }
                ]
            },
            "Rapid Cannon": {
                "description": "Deals ranged STR-based bash damage to one enemy.",
                "damage": "ranged",
                "damage target": "enemy",
                "requirements": {
                    "Barrage Wall": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Damage": "130%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Damage": "135%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Damage": "140%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Damage": "145%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Damage": "210%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Damage": "220%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Damage": "230%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Damage": "240%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Damage": "250%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Damage": "400%"
                    }
                ]
            },
            "Curse Cannon": {
                "description": "Deals ranged STR-based bash damage to one enemy. Attempts to inflict curse on the target.",
                "damage": "ranged",
                "damage target": "enemy",
                "ailment": "cursed",
                "ailment target": "enemy",
                "requirements": {
                    "Barrage Wall": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "160%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "167%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "174%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "181%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Damage": "246%",
                        "Base Chance": "60%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Damage": "254%",
                        "Base Chance": "60%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Damage": "262%",
                        "Base Chance": "60%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Damage": "270%",
                        "Base Chance": "60%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage": "278%",
                        "Base Chance": "60%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Damage": "350%",
                        "Base Chance": "80%"
                    }
                ]
            },
            "Hypno Cannon": {
                "description": "Deals ranged STR-based bash damage to one enemy. Attempts to inflict sleep on the target.",
                "damage": "ranged",
                "damage target": "enemy",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "sleep",
                "ailment target": "single",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Barrage Wall": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "160%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "167%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "174%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "181%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Damage": "246%",
                        "Base Chance": "75%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Damage": "254%",
                        "Base Chance": "75%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Damage": "262%",
                        "Base Chance": "75%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Damage": "270%",
                        "Base Chance": "75%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage": "278%",
                        "Base Chance": "75%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Damage": "350%",
                        "Base Chance": "100%"
                    }
                ]
            },
            "Buster Cannon": {
                "description": "On the next turns end, deals ranged bash+fire damage to one enemy. Damage is doubled when attacking a front row enemy while the caster is in the front row, multiplied by 1.5x when attacking a front row enemy while the caster is in the back row or vice versa, and is not increased when attacking a back row enemy while the user is in the back.",
                "damage": "fire ranged",
                "damage target": "enemy",
                "requirements": {
                    "Rapid Cannon": 3,
                    "Curse Cannon": 3,
                    "Hypno Cannon": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "Base Damage": "260%",
                        "One Front One Back Damage": "390%",
                        "Both Front Damage": "520%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "20",
                        "Base Damage": "275%",
                        "One Front One Back Damage": "412%",
                        "Both Front Damage": "550%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "20",
                        "Base Damage": "290%",
                        "One Front One Back Damage": "435%",
                        "Both Front Damage": "580%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "20",
                        "Base Damage": "305%",
                        "One Front One Back Damage": "457%",
                        "Both Front Damage": "610%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "30",
                        "Base Damage": "365%",
                        "One Front One Back Damage": "547%",
                        "Both Front Damage": "730%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "30",
                        "Base Damage": "385%",
                        "One Front One Back Damage": "577%",
                        "Both Front Damage": "770%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "30",
                        "Base Damage": "405%",
                        "One Front One Back Damage": "607%",
                        "Both Front Damage": "810%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "30",
                        "Base Damage": "425%",
                        "One Front One Back Damage": "637%",
                        "Both Front Damage": "850%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "30",
                        "Base Damage": "445%",
                        "One Front One Back Damage": "667%",
                        "Both Front Damage": "890%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "40",
                        "Base Damage": "520%",
                        "One Front One Back Damage": "780%",
                        "Both Front Damage": "1040%"
                    }
                ]
            },
            "Decoy Turret": {
                "description": "Creates a Decoy Turret in the summon row. The Decoy Turret has 10 HP. In addition to having a DEF value, the Decoy Turret also has a set vulnerability to all damage. The Decoy Bunker has an increased base chance of drawing enemy attacks. When the Decoy Turret is attacked, it will counterattack the source of damage. The counterattack is bash damage, and is based solely on the Decoy Turrets ATK value.",
                "requirements": {
                    "Defense Form": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Decoy Turret ATK": "205",
                        "Decoy Turret DEF": "35",
                        "Damage Taken": "6%",
                        "Target Chance": "150%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Decoy Turret ATK": "230",
                        "Decoy Turret DEF": "55",
                        "Damage Taken": "6%",
                        "Target Chance": "150%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Decoy Turret ATK": "255",
                        "Decoy Turret DEF": "75",
                        "Damage Taken": "6%",
                        "Target Chance": "150%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Decoy Turret ATK": "280",
                        "Decoy Turret DEF": "95",
                        "Damage Taken": "6%",
                        "Target Chance": "150%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Decoy Turret ATK": "280",
                        "Decoy Turret DEF": "95",
                        "Damage Taken": "4%",
                        "Target Chance": "200%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Decoy Turret ATK": "335",
                        "Decoy Turret DEF": "135",
                        "Damage Taken": "4%",
                        "Target Chance": "200%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Decoy Turret ATK": "390",
                        "Decoy Turret DEF": "175",
                        "Damage Taken": "4%",
                        "Target Chance": "200%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Decoy Turret ATK": "445",
                        "Decoy Turret DEF": "215",
                        "Damage Taken": "4%",
                        "Target Chance": "200%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Decoy Turret ATK": "500",
                        "Decoy Turret DEF": "255",
                        "Damage Taken": "4%",
                        "Target Chance": "200%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Decoy Turret ATK": "500",
                        "Decoy Turret DEF": "255",
                        "Damage Taken": "1%",
                        "Target Chance": "250%"
                    }
                ]
            },
            "Gun Support": {
                "description": "When the user reduces damage they themselves take, or negates an attack entirely (ie. another Dragoon activating Dragon Force on them), they have a chance to create a Decoy Turret.",
                "requirements": {
                    "Decoy Turret": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "10%"
                    },
                    {
                        "level": 2,
                        "Chance": "11%"
                    },
                    {
                        "level": 3,
                        "Chance": "12%"
                    },
                    {
                        "level": 4,
                        "Chance": "13%"
                    },
                    {
                        "level": 5,
                        "Chance": "21%"
                    },
                    {
                        "level": 6,
                        "Chance": "22%"
                    },
                    {
                        "level": 7,
                        "Chance": "23%"
                    },
                    {
                        "level": 8,
                        "Chance": "24%"
                    },
                    {
                        "level": 9,
                        "Chance": "25%"
                    },
                    {
                        "level": 10,
                        "Chance": "34%"
                    }
                ]
            }
        },
        "Shield Bearer": {
            "HP Up": {
                "description": "Increases the users maximum HP.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max HP Increase": "5%"
                    },
                    {
                        "level": 2,
                        "Max HP Increase": "6%"
                    },
                    {
                        "level": 3,
                        "Max HP Increase": "7%"
                    },
                    {
                        "level": 4,
                        "Max HP Increase": "8%"
                    },
                    {
                        "level": 5,
                        "Max HP Increase": "12%"
                    },
                    {
                        "level": 6,
                        "Max HP Increase": "13%"
                    },
                    {
                        "level": 7,
                        "Max HP Increase": "14%"
                    },
                    {
                        "level": 8,
                        "Max HP Increase": "15%"
                    },
                    {
                        "level": 9,
                        "Max HP Increase": "16%"
                    },
                    {
                        "level": 10,
                        "Max HP Increase": "20%"
                    }
                ]
            },
            "Recovery Guard": {
                "description": "Reduces physical (cut/stab/bash) damage taken by one row for one turn. Party members under the effect of Recovery Guard also have a chance to have a set amount of binds removed when Recovery Guard activates.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Gunmount": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage Reduction": "13%",
                        "Removal Chance": "50%",
                        "Binds Removed": "1"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage Reduction": "16%",
                        "Removal Chance": "56%",
                        "Binds Removed": "1"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage Reduction": "19%",
                        "Removal Chance": "56%",
                        "Binds Removed": "1"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage Reduction": "22%",
                        "Removal Chance": "59%",
                        "Binds Removed": "1"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Damage Reduction": "22%",
                        "Removal Chance": "78%",
                        "Binds Removed": "2"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Damage Reduction": "24%",
                        "Removal Chance": "80%",
                        "Binds Removed": "2"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Damage Reduction": "26%",
                        "Removal Chance": "82%",
                        "Binds Removed": "2"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Damage Reduction": "28%",
                        "Removal Chance": "84%",
                        "Binds Removed": "2"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Damage Reduction": "30%",
                        "Removal Chance": "86%",
                        "Binds Removed": "2"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Damage Reduction": "30%",
                        "Removal Chance": "100%",
                        "Binds Removed": "3"
                    }
                ]
            },
            "Counter Guard": {
                "description": "None",
                "damage": "counter",
                "damage target": "enemy",
                "requirements": {
                    "Gunmount": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "8",
                        "Damage Reduction": "20%",
                        "Damage": "200%",
                        "Chance Reduction": "-25%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "8",
                        "Damage Reduction": "22%",
                        "Damage": "205%",
                        "Chance Reduction": "-25%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "8",
                        "Damage Reduction": "24%",
                        "Damage": "210%",
                        "Chance Reduction": "-25%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "8",
                        "Damage Reduction": "26%",
                        "Damage": "215%",
                        "Chance Reduction": "-25%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Damage Reduction": "26%",
                        "Damage": "245%",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Damage Reduction": "28%",
                        "Damage": "250%",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Damage Reduction": "30%",
                        "Damage": "255%",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Damage Reduction": "32%",
                        "Damage": "260%",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage Reduction": "34%",
                        "Damage": "265%",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Damage Reduction": "34%",
                        "Damage": "300%",
                        "Chance Reduction": "0%"
                    }
                ]
            },
            "Divide Guard": {
                "description": "Targets one ally. The caster will take all damage for that ally for one turn. From levels 2-10, the caster takes reduced damage from attacks redirected by Divide Guard.",
                "requirements": {
                    "Gunmount": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage Reduction": "0%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage Reduction": "3%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage Reduction": "6%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage Reduction": "9%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage Reduction": "16%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage Reduction": "18%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage Reduction": "20%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage Reduction": "22%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage Reduction": "24%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Damage Reduction": "30%"
                    }
                ]
            },
            "Full Guard": {
                "description": "Reduces all non-almighty damage to the party for one turn. After use, Full Guard goes on cooldown for a set amount of turns.",
                "requirements": {
                    "Recovery Guard": 3,
                    "Counter Guard": 3,
                    "Divide Guard": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "25",
                        "Damage Reduction": "25%",
                        "Cooldown": "7"
                    },
                    {
                        "level": 2,
                        "TP Cost": "25",
                        "Damage Reduction": "26%",
                        "Cooldown": "7"
                    },
                    {
                        "level": 3,
                        "TP Cost": "25",
                        "Damage Reduction": "27%",
                        "Cooldown": "7"
                    },
                    {
                        "level": 4,
                        "TP Cost": "25",
                        "Damage Reduction": "28%",
                        "Cooldown": "7"
                    },
                    {
                        "level": 5,
                        "TP Cost": "35",
                        "Damage Reduction": "36%",
                        "Cooldown": "6"
                    },
                    {
                        "level": 6,
                        "TP Cost": "35",
                        "Damage Reduction": "37%",
                        "Cooldown": "6"
                    },
                    {
                        "level": 7,
                        "TP Cost": "35",
                        "Damage Reduction": "38%",
                        "Cooldown": "6"
                    },
                    {
                        "level": 8,
                        "TP Cost": "35",
                        "Damage Reduction": "39%",
                        "Cooldown": "6"
                    },
                    {
                        "level": 9,
                        "TP Cost": "35",
                        "Damage Reduction": "40%",
                        "Cooldown": "6"
                    },
                    {
                        "level": 10,
                        "TP Cost": "50",
                        "Damage Reduction": "50%",
                        "Cooldown": "5"
                    }
                ]
            },
            "Soul Guard": {
                "description": "Reduces STR-based damage taken by one row for one turn. Party members under the effect of Soul Guard have a chance to survive fatal damage at 1 HP.",
                "requirements": {
                    "Recovery Guard": 3,
                    "Counter Guard": 3,
                    "Divide Guard": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage Reduction": "13%",
                        "Endure Chance": "34%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage Reduction": "16%",
                        "Endure Chance": "35%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage Reduction": "19%",
                        "Endure Chance": "36%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage Reduction": "22%",
                        "Endure Chance": "37%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Damage Reduction": "22%",
                        "Endure Chance": "44%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "16",
                        "Damage Reduction": "24%",
                        "Endure Chance": "46%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Damage Reduction": "26%",
                        "Endure Chance": "48%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "16",
                        "Damage Reduction": "28%",
                        "Endure Chance": "50%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "16",
                        "Damage Reduction": "30%",
                        "Endure Chance": "52%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "23",
                        "Damage Reduction": "30%",
                        "Endure Chance": "66%"
                    }
                ]
            },
            "Shield Throw": {
                "description": "Deals ranged cut damage to one row of enemies. Shield Throw uses the users equipped shields DEF value multiplied by 3 as a replacement for weapon ATK.",
                "damage": "ranged",
                "damage target": "row",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "200%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "215%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "230%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "245%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Damage": "315%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "15",
                        "Damage": "335%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "15",
                        "Damage": "355%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "15",
                        "Damage": "375%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "15",
                        "Damage": "395%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "25",
                        "Damage": "500%"
                    }
                ]
            },
            "Auto-Roar": {
                "description": "Gives the user a chance to use Dragon Roar on themselves at the start of battle.",
                "requirements": {
                    "Dragon Roar": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "35%"
                    },
                    {
                        "level": 2,
                        "Chance": "40%"
                    },
                    {
                        "level": 3,
                        "Chance": "45%"
                    },
                    {
                        "level": 4,
                        "Chance": "50%"
                    },
                    {
                        "level": 5,
                        "Chance": "67%"
                    }
                ]
            },
            "Dragon Force": {
                "description": "Gives a chance for the user and any party members in their row to nullify physical (cut/stab/bash) damage.",
                "requirements": {
                    "Auto-Roar": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "4%"
                    },
                    {
                        "level": 2,
                        "Chance": "5%"
                    },
                    {
                        "level": 3,
                        "Chance": "6%"
                    },
                    {
                        "level": 4,
                        "Chance": "7%"
                    },
                    {
                        "level": 5,
                        "Chance": "9%"
                    },
                    {
                        "level": 6,
                        "Chance": "10%"
                    },
                    {
                        "level": 7,
                        "Chance": "11%"
                    },
                    {
                        "level": 8,
                        "Chance": "12%"
                    },
                    {
                        "level": 9,
                        "Chance": "13%"
                    },
                    {
                        "level": 10,
                        "Chance": "15%"
                    }
                ]
            },
            "Auto-Bunker": {
                "description": "Gives the user a chance to use Decoy Bunker at the start of battle.",
                "requirements": {
                    "Decoy Bunker": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "35%"
                    },
                    {
                        "level": 2,
                        "Chance": "40%"
                    },
                    {
                        "level": 3,
                        "Chance": "45%"
                    },
                    {
                        "level": 4,
                        "Chance": "50%"
                    },
                    {
                        "level": 5,
                        "Chance": "67%"
                    }
                ]
            }
        }
    },
    "fencer": {
        "specializations": [
            "Chain Duelist",
            "Phantom Duelist"
        ],
        "Base": {
            "Rapier Mastery": {
                "description": "Increases damage dealt using swords. Normal attacks deal stab damage instead of cut.",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "2%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "3%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "4%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "5%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "8%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "9%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "12%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "15%"
                    }
                ]
            },
            "Chain Flame": {
                "description": "Targets one enemy. When that enemy takes either stab or fire/ice/volt damage, the caster will follow up with another attack. The element is either cut or stab, depending on if the user knows Rapier Mastery, and fire, ice, or volt, depending on the skill. Each time Chain Flame/Freeze/Shock activates, the chance of it activating again on that turn is decreased. The base activation chance is 100%.",
                "damage": "fire physical",
                "damage target": "enemy",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage": "150%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage": "156%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage": "162%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage": "168%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage": "168%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage": "176%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage": "184%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage": "192%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage": "200%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Damage": "200%",
                        "Maximum Chains": "5",
                        "Chance Reduction": "-10%"
                    }
                ]
            },
            "Chain Freeze": {
                "description": "Targets one enemy. When that enemy takes either stab or fire/ice/volt damage, the caster will follow up with another attack. The element is either cut or stab, depending on if the user knows Rapier Mastery, and fire, ice, or volt, depending on the skill. Each time Chain Flame/Freeze/Shock activates, the chance of it activating again on that turn is decreased. The base activation chance is 100%.",
                "damage": "physical ice",
                "damage target": "enemy",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage": "150%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage": "156%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage": "162%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage": "168%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage": "168%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage": "176%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage": "184%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage": "192%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage": "200%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Damage": "200%",
                        "Maximum Chains": "5",
                        "Chance Reduction": "-10%"
                    }
                ]
            },
            "Chain Shock": {
                "description": "Targets one enemy. When that enemy takes either stab or fire/ice/volt damage, the caster will follow up with another attack. The element is either cut or stab, depending on if the user knows Rapier Mastery, and fire, ice, or volt, depending on the skill. Each time Chain Flame/Freeze/Shock activates, the chance of it activating again on that turn is decreased. The base activation chance is 100%.",
                "damage": "physical volt",
                "damage target": "enemy",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage": "150%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage": "156%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage": "162%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage": "168%",
                        "Maximum Chains": "3",
                        "Chance Reduction": "-22%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage": "168%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage": "176%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage": "184%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage": "192%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage": "200%",
                        "Maximum Chains": "4",
                        "Chance Reduction": "-15%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Damage": "200%",
                        "Maximum Chains": "5",
                        "Chance Reduction": "-10%"
                    }
                ]
            },
            "Chain Boost": {
                "description": "When using a Chain skill, each time the Chain skill activates, its damage is increased for the rest of the turn.",
                "requirements": {
                    "Chain Flame": 2,
                    "Chain Freeze": 2,
                    "Chain Shock": 2
                },
                "table": [
                    {
                        "level": 1,
                        "Increase Per Chain": "+5%"
                    },
                    {
                        "level": 2,
                        "Increase Per Chain": "+6%"
                    },
                    {
                        "level": 3,
                        "Increase Per Chain": "+7%"
                    },
                    {
                        "level": 4,
                        "Increase Per Chain": "+8%"
                    },
                    {
                        "level": 5,
                        "Increase Per Chain": "+12%"
                    },
                    {
                        "level": 6,
                        "Increase Per Chain": "+13%"
                    },
                    {
                        "level": 7,
                        "Increase Per Chain": "+14%"
                    },
                    {
                        "level": 8,
                        "Increase Per Chain": "+15%"
                    },
                    {
                        "level": 9,
                        "Increase Per Chain": "+16%"
                    },
                    {
                        "level": 10,
                        "Increase Per Chain": "+20%"
                    }
                ]
            },
            "Chain Burst": {
                "description": "When an enemy is killed by a Chain skill, the caster will attack another enemy with an attack of the same element as the Chain skill.",
                "requirements": {
                    "Chain Flame": 2,
                    "Chain Freeze": 2,
                    "Chain Shock": 2
                },
                "table": [
                    {
                        "level": 1,
                        "Damage": "150%",
                        "Max Attacks": "1"
                    },
                    {
                        "level": 2,
                        "Damage": "168%",
                        "Max Attacks": "1"
                    },
                    {
                        "level": 3,
                        "Damage": "186%",
                        "Max Attacks": "1"
                    },
                    {
                        "level": 4,
                        "Damage": "204%",
                        "Max Attacks": "1"
                    },
                    {
                        "level": 5,
                        "Damage": "204%",
                        "Max Attacks": "2"
                    },
                    {
                        "level": 6,
                        "Damage": "228%",
                        "Max Attacks": "2"
                    },
                    {
                        "level": 7,
                        "Damage": "252%",
                        "Max Attacks": "2"
                    },
                    {
                        "level": 8,
                        "Damage": "276%",
                        "Max Attacks": "2"
                    },
                    {
                        "level": 9,
                        "Damage": "300%",
                        "Max Attacks": "2"
                    },
                    {
                        "level": 10,
                        "Damage": "300%",
                        "Max Attacks": "3"
                    }
                ]
            },
            "Predict": {
                "description": "For one turn, increases the users evasion and their chances to be targeted by enemies. However, it also makes the user take 2.5x damage. When the user evades an attack, their evasion and chance to be targeted are decreased.",
                "buff": "agg eva",
                "buff target": "self",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Evasion/Target Increase": "+100%",
                        "Evasion Decrease": "-80%",
                        "Target Decrease": "-60%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Evasion/Target Increase": "+112%",
                        "Evasion Decrease": "-80%",
                        "Target Decrease": "-60%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Evasion/Target Increase": "+124%",
                        "Evasion Decrease": "-80%",
                        "Target Decrease": "-60%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Evasion/Target Increase": "+136%",
                        "Evasion Decrease": "-80%",
                        "Target Decrease": "-60%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Evasion/Target Increase": "+136%",
                        "Evasion Decrease": "-65%",
                        "Target Decrease": "-50%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Evasion/Target Increase": "+152%",
                        "Evasion Decrease": "-65%",
                        "Target Decrease": "-50%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Evasion/Target Increase": "+168%",
                        "Evasion Decrease": "-65%",
                        "Target Decrease": "-50%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Evasion/Target Increase": "+184%",
                        "Evasion Decrease": "-65%",
                        "Target Decrease": "-50%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Evasion/Target Increase": "+200%",
                        "Evasion Decrease": "-65%",
                        "Target Decrease": "-50%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Evasion/Target Increase": "+200%",
                        "Evasion Decrease": "-50%",
                        "Target Decrease": "-40%"
                    }
                ]
            },
            "Wind Curtain": {
                "description": "Places a buff on one row that enables party members to dodge one physical attack. When an attack is dodged, the buff is dispelled.",
                "buff": "",
                "buff target": "row",
                "requirements": {
                    "Predict": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "Duration": "2",
                        "Speed Modifier": "40%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "18",
                        "Duration": "2",
                        "Speed Modifier": "40%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "16",
                        "Duration": "2",
                        "Speed Modifier": "40%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "14",
                        "Duration": "2",
                        "Speed Modifier": "40%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "30",
                        "Duration": "3",
                        "Speed Modifier": "120%"
                    }
                ]
            },
            "Optic Thrust": {
                "description": "Deals melee STR-based stab damage to one enemy. Attempts to inflict blind on the target.",
                "damage": "physical",
                "damage target": "enemy",
                "ailment": "blind",
                "ailment target": "enemy",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage": "150%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage": "160%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage": "170%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage": "180%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Damage": "210%",
                        "Base Chance": "65%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Damage": "220%",
                        "Base Chance": "65%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Damage": "230%",
                        "Base Chance": "65%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Damage": "240%",
                        "Base Chance": "65%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Damage": "250%",
                        "Base Chance": "65%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Damage": "280%",
                        "Base Chance": "80%"
                    }
                ]
            },
            "Sylphid": {
                "description": "When the user dodges an attack, they will counterattack the attack source with their equipped weapon. Each time the user counterattacks, the chance of Sylphid activating again on that turn is decreased by 40%.",
                "damage": "counter",
                "damage target": "enemy",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage": "50%",
                        "Base Chance": "60%",
                        "Max Counterattacks": "2"
                    },
                    {
                        "level": 2,
                        "Damage": "53%",
                        "Base Chance": "65%",
                        "Max Counterattacks": "2"
                    },
                    {
                        "level": 3,
                        "Damage": "56%",
                        "Base Chance": "70%",
                        "Max Counterattacks": "2"
                    },
                    {
                        "level": 4,
                        "Damage": "59%",
                        "Base Chance": "75%",
                        "Max Counterattacks": "2"
                    },
                    {
                        "level": 5,
                        "Damage": "59%",
                        "Base Chance": "100%",
                        "Max Counterattacks": "3"
                    },
                    {
                        "level": 6,
                        "Damage": "63%",
                        "Base Chance": "105%",
                        "Max Counterattacks": "3"
                    },
                    {
                        "level": 7,
                        "Damage": "67%",
                        "Base Chance": "110%",
                        "Max Counterattacks": "3"
                    },
                    {
                        "level": 8,
                        "Damage": "71%",
                        "Base Chance": "115%",
                        "Max Counterattacks": "3"
                    },
                    {
                        "level": 9,
                        "Damage": "75%",
                        "Base Chance": "120%",
                        "Max Counterattacks": "3"
                    },
                    {
                        "level": 10,
                        "Damage": "75%",
                        "Base Chance": "150%",
                        "Max Counterattacks": "4"
                    }
                ]
            }
        },
        "Chain Duelist": {
            "Sonic Blade": {
                "description": "When performing normal attacks, the user has a chance to attack twice. The second attack is cut damage, and deals the same amount of damage as the first hit (not accounting for standard variance).",
                "requirements": {
                    "Rapier Mastery": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "18%"
                    },
                    {
                        "level": 2,
                        "Chance": "19%"
                    },
                    {
                        "level": 3,
                        "Chance": "20%"
                    },
                    {
                        "level": 4,
                        "Chance": "21%"
                    },
                    {
                        "level": 5,
                        "Chance": "28%"
                    },
                    {
                        "level": 6,
                        "Chance": "29%"
                    },
                    {
                        "level": 7,
                        "Chance": "30%"
                    },
                    {
                        "level": 8,
                        "Chance": "31%"
                    },
                    {
                        "level": 9,
                        "Chance": "32%"
                    },
                    {
                        "level": 10,
                        "Chance": "40%"
                    }
                ]
            },
            "Phys ATK Up": {
                "description": "Passively increases physical damage.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Attack Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Attack Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Attack Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Attack Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Attack Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Attack Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Attack Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Attack Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Attack Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Attack Increase": "15%"
                    }
                ]
            },
            "Chain Killer": {
                "description": "Targets one enemy. For one turn, when that enemy becomes afflicted with a status ailment, bind, or stun, the user will attack them with melee STR-based stab damage.",
                "requirements": {
                    "Chain Boost": 3,
                    "Chain Burst": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage": "400%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage": "420%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage": "440%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage": "460%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage": "560%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage": "585%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage": "610%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage": "635%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage": "660%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Damage": "800%"
                    }
                ]
            },
            "Chain All": {
                "description": "Increases the maximum number of hits of the Chain skill used on the next turn, and the Chain skill used on the next turn will also target all enemies.",
                "requirements": {
                    "Chain Killer": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Added Hits": "0"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Added Hits": "1"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Added Hits": "2"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Added Hits": "3"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Added Hits": "9"
                    }
                ]
            },
            "Chain Plus": {
                "description": "For a set amount of turns, increases the damage and base activation chance of Chain skills.",
                "requirements": {
                    "Chain Killer": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Damage Increase": "+25%",
                        "Chance Increase": "+41%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Damage Increase": "+28%",
                        "Chance Increase": "+46%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Damage Increase": "+31%",
                        "Chance Increase": "+51%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Damage Increase": "+34%",
                        "Chance Increase": "+56%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Damage Increase": "+34%",
                        "Chance Increase": "+56%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Damage Increase": "+38%",
                        "Chance Increase": "+62%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Damage Increase": "+42%",
                        "Chance Increase": "+68%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Damage Increase": "+46%",
                        "Chance Increase": "+74%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Damage Increase": "+50%",
                        "Chance Increase": "+80%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Damage Increase": "+50%",
                        "Chance Increase": "+80%",
                        "Duration": "6"
                    }
                ]
            },
            "Chain Double": {
                "description": "Gives a chance for Chain attacks to hit twice when a Chain skill is activated.",
                "requirements": {
                    "Chain Killer": 5
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "10%"
                    },
                    {
                        "level": 2,
                        "Chance": "12%"
                    },
                    {
                        "level": 3,
                        "Chance": "14%"
                    },
                    {
                        "level": 4,
                        "Chance": "16%"
                    },
                    {
                        "level": 5,
                        "Chance": "23%"
                    },
                    {
                        "level": 6,
                        "Chance": "25%"
                    },
                    {
                        "level": 7,
                        "Chance": "27%"
                    },
                    {
                        "level": 8,
                        "Chance": "29%"
                    },
                    {
                        "level": 9,
                        "Chance": "31%"
                    },
                    {
                        "level": 10,
                        "Chance": "40%"
                    }
                ]
            },
            "Sylphscreen": {
                "description": "Each time the user attacks an enemy, their defense and evasion are increased for the rest of that turn.",
                "buff": "def eva",
                "buff target": "self",
                "table": [
                    {
                        "level": 1,
                        "Defense Per Attack": "+2%",
                        "Evasion Per Attack": "+2.5%"
                    },
                    {
                        "level": 2,
                        "Defense Per Attack": "+2%",
                        "Evasion Per Attack": "+3%"
                    },
                    {
                        "level": 3,
                        "Defense Per Attack": "+2%",
                        "Evasion Per Attack": "+3.5%"
                    },
                    {
                        "level": 4,
                        "Defense Per Attack": "+2%",
                        "Evasion Per Attack": "+4%"
                    },
                    {
                        "level": 5,
                        "Defense Per Attack": "+4%",
                        "Evasion Per Attack": "+4%"
                    },
                    {
                        "level": 6,
                        "Defense Per Attack": "+4%",
                        "Evasion Per Attack": "+4.5%"
                    },
                    {
                        "level": 7,
                        "Defense Per Attack": "+4%",
                        "Evasion Per Attack": "+5%"
                    },
                    {
                        "level": 8,
                        "Defense Per Attack": "+4%",
                        "Evasion Per Attack": "+5.5%"
                    },
                    {
                        "level": 9,
                        "Defense Per Attack": "+4%",
                        "Evasion Per Attack": "+6%"
                    },
                    {
                        "level": 10,
                        "Defense Per Attack": "+6%",
                        "Evasion Per Attack": "+6%"
                    }
                ]
            },
            "Multi-Stab": {
                "description": "Deals a random amount of instances of melee STR-based stab damage to one row of enemies. Can hit the same enemy multiple times.",
                "damage": "physical",
                "damage target": "row",
                "requirements": {
                    "Optic Thrust": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "12",
                        "Damage Per Hit": "125%",
                        "Min Hits": "1",
                        "Max Hits": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "12",
                        "Damage Per Hit": "131%",
                        "Min Hits": "1",
                        "Max Hits": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "12",
                        "Damage Per Hit": "37%",
                        "Min Hits": "1",
                        "Max Hits": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "12",
                        "Damage Per Hit": "143%",
                        "Min Hits": "1",
                        "Max Hits": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "17",
                        "Damage Per Hit": "143%",
                        "Min Hits": "2",
                        "Max Hits": "4"
                    },
                    {
                        "level": 6,
                        "TP Cost": "17",
                        "Damage Per Hit": "151%",
                        "Min Hits": "2",
                        "Max Hits": "4"
                    },
                    {
                        "level": 7,
                        "TP Cost": "17",
                        "Damage Per Hit": "159%",
                        "Min Hits": "2",
                        "Max Hits": "4"
                    },
                    {
                        "level": 8,
                        "TP Cost": "17",
                        "Damage Per Hit": "167%",
                        "Min Hits": "2",
                        "Max Hits": "4"
                    },
                    {
                        "level": 9,
                        "TP Cost": "17",
                        "Damage Per Hit": "175%",
                        "Min Hits": "2",
                        "Max Hits": "4"
                    },
                    {
                        "level": 10,
                        "TP Cost": "23",
                        "Damage Per Hit": "175%",
                        "Min Hits": "2",
                        "Max Hits": "5"
                    }
                ]
            },
            "Resonance": {
                "description": "Deals melee STR-based stab damage to one enemy. The damage starts at a base value, and is then multiplied by the amount of times the user hit enemies last turn. Resonance can have its damage multiplied a maximum of 9 times.",
                "damage": "melee",
                "damage target": "enemy",
                "requirements": {
                    "Deft Thrust": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Base Damage": "175%",
                        "Max Damage": "1575%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Base Damage": "179%",
                        "Max Damage": "1611%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Base Damage": "183%",
                        "Max Damage": "1647%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Base Damage": "187%",
                        "Max Damage": "1683%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Base Damage": "207%",
                        "Max Damage": "1863%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Base Damage": "211%",
                        "Max Damage": "1899%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Base Damage": "215%",
                        "Max Damage": "1935%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Base Damage": "219%",
                        "Max Damage": "1971%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Base Damage": "223%",
                        "Max Damage": "2007%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "13",
                        "Base Damage": "250%",
                        "Max Damage": "2250%"
                    }
                ]
            },
            "Speed Up": {
                "description": "Increases the users action speed, accuracy, and evasion.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Speed Multiplier": "1.11x",
                        "Acc/Evade Increase": "+2.4%"
                    },
                    {
                        "level": 2,
                        "Speed Multiplier": "1.14x",
                        "Acc/Evade Increase": "+2.8%"
                    },
                    {
                        "level": 3,
                        "Speed Multiplier": "1.17x",
                        "Acc/Evade Increase": "+3.2%"
                    },
                    {
                        "level": 4,
                        "Speed Multiplier": "1.2x",
                        "Acc/Evade Increase": "+3.6%"
                    },
                    {
                        "level": 5,
                        "Speed Multiplier": "1.24x",
                        "Acc/Evade Increase": "+5.2%"
                    },
                    {
                        "level": 6,
                        "Speed Multiplier": "1.27x",
                        "Acc/Evade Increase": "+5.8%"
                    },
                    {
                        "level": 7,
                        "Speed Multiplier": "1.3x",
                        "Acc/Evade Increase": "+6.4%"
                    },
                    {
                        "level": 8,
                        "Speed Multiplier": "1.33x",
                        "Acc/Evade Increase": "+7%"
                    },
                    {
                        "level": 9,
                        "Speed Multiplier": "1.36x",
                        "Acc/Evade Increase": "+7.6%"
                    },
                    {
                        "level": 10,
                        "Speed Multiplier": "1.4x",
                        "Acc/Evade Increase": "+10%"
                    }
                ]
            }
        },
        "Phantom Duelist": {
            "Ray of Light": {
                "description": "When the user dodges an attack, their chance to be targeted and defense are increased. When the user is damaged, Ray of Lights effects are reset.",
                "buff": "agg def",
                "buff target": "self",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Target Bonus Per Stack": "+3%",
                        "Defense Bonus Per Stack": "+4%",
                        "Maximum Stacks": "2",
                        "Maximum Target Bonus": "+6%",
                        "Maximum Defense Bonus": "+8%"
                    },
                    {
                        "level": 2,
                        "Target Bonus Per Stack": "+3%",
                        "Defense Bonus Per Stack": "+4%",
                        "Maximum Stacks": "3",
                        "Maximum Target Bonus": "+9%",
                        "Maximum Defense Bonus": "+12%"
                    },
                    {
                        "level": 3,
                        "Target Bonus Per Stack": "+3%",
                        "Defense Bonus Per Stack": "+4%",
                        "Maximum Stacks": "4",
                        "Maximum Target Bonus": "+12%",
                        "Maximum Defense Bonus": "+16%"
                    },
                    {
                        "level": 4,
                        "Target Bonus Per Stack": "+3%",
                        "Defense Bonus Per Stack": "+4%",
                        "Maximum Stacks": "5",
                        "Maximum Target Bonus": "+15%",
                        "Maximum Defense Bonus": "+20%"
                    },
                    {
                        "level": 5,
                        "Target Bonus Per Stack": "+4%",
                        "Defense Bonus Per Stack": "+6%",
                        "Maximum Stacks": "5",
                        "Maximum Target Bonus": "+20%",
                        "Maximum Defense Bonus": "+30%"
                    },
                    {
                        "level": 6,
                        "Target Bonus Per Stack": "+4%",
                        "Defense Bonus Per Stack": "+6%",
                        "Maximum Stacks": "6",
                        "Maximum Target Bonus": "+24%",
                        "Maximum Defense Bonus": "+36%"
                    },
                    {
                        "level": 7,
                        "Target Bonus Per Stack": "+4%",
                        "Defense Bonus Per Stack": "+6%",
                        "Maximum Stacks": "7",
                        "Maximum Target Bonus": "+28%",
                        "Maximum Defense Bonus": "+42%"
                    },
                    {
                        "level": 8,
                        "Target Bonus Per Stack": "+4%",
                        "Defense Bonus Per Stack": "+6%",
                        "Maximum Stacks": "8",
                        "Maximum Target Bonus": "+32%",
                        "Maximum Defense Bonus": "+48%"
                    },
                    {
                        "level": 9,
                        "Target Bonus Per Stack": "+4%",
                        "Defense Bonus Per Stack": "+6%",
                        "Maximum Stacks": "9",
                        "Maximum Target Bonus": "+36%",
                        "Maximum Defense Bonus": "+54%"
                    },
                    {
                        "level": 10,
                        "Target Bonus Per Stack": "+5%",
                        "Defense Bonus Per Stack": "+8%",
                        "Maximum Stacks": "9",
                        "Maximum Target Bonus": "+45%",
                        "Maximum Defense Bonus": "+72%"
                    }
                ]
            },
            "Lightweight": {
                "description": "Increases the users evasion based on how many of their equipment slots are empty.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "1 Empty Slot Bonus": "+4%",
                        "2 Empty Slots Bonus": "+10%",
                        "3 Empty Slots Bonus": "+20%",
                        "4 Empty Slots Bonus": "+30%"
                    },
                    {
                        "level": 2,
                        "1 Empty Slot Bonus": "+4.4%",
                        "2 Empty Slots Bonus": "+11%",
                        "3 Empty Slots Bonus": "+22%",
                        "4 Empty Slots Bonus": "+33%"
                    },
                    {
                        "level": 3,
                        "1 Empty Slot Bonus": "+4.8%",
                        "2 Empty Slots Bonus": "+12%",
                        "3 Empty Slots Bonus": "+24%",
                        "4 Empty Slots Bonus": "+36%"
                    },
                    {
                        "level": 4,
                        "1 Empty Slot Bonus": "+5.2%",
                        "2 Empty Slots Bonus": "+13%",
                        "3 Empty Slots Bonus": "+26%",
                        "4 Empty Slots Bonus": "+39%"
                    },
                    {
                        "level": 5,
                        "1 Empty Slot Bonus": "+5.6%",
                        "2 Empty Slots Bonus": "+17%",
                        "3 Empty Slots Bonus": "+34%",
                        "4 Empty Slots Bonus": "+51%"
                    },
                    {
                        "level": 6,
                        "1 Empty Slot Bonus": "+7.2%",
                        "2 Empty Slots Bonus": "+18%",
                        "3 Empty Slots Bonus": "+36%",
                        "4 Empty Slots Bonus": "+54%"
                    },
                    {
                        "level": 7,
                        "1 Empty Slot Bonus": "+7.6%",
                        "2 Empty Slots Bonus": "+19%",
                        "3 Empty Slots Bonus": "+38%",
                        "4 Empty Slots Bonus": "+57%"
                    },
                    {
                        "level": 8,
                        "1 Empty Slot Bonus": "+8%",
                        "2 Empty Slots Bonus": "+20%",
                        "3 Empty Slots Bonus": "+40%",
                        "4 Empty Slots Bonus": "+60%"
                    },
                    {
                        "level": 9,
                        "1 Empty Slot Bonus": "+8.4%",
                        "2 Empty Slots Bonus": "+21%",
                        "3 Empty Slots Bonus": "+42%",
                        "4 Empty Slots Bonus": "+63%"
                    },
                    {
                        "level": 10,
                        "1 Empty Slot Bonus": "+10%",
                        "2 Empty Slots Bonus": "+25%",
                        "3 Empty Slots Bonus": "+50%",
                        "4 Empty Slots Bonus": "+75%"
                    }
                ]
            },
            "Phantom Swords": {
                "description": "Reduces one row of enemies accuracy for a set amount of turns.",
                "debuff": "acc",
                "debuff target": "row",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Accuracy Decrease": "-9.5%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Accuracy Decrease": "-11%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Accuracy Decrease": "-12.5%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Accuracy Decrease": "-14%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Accuracy Decrease": "-14%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Accuracy Decrease": "-15.5%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Accuracy Decrease": "-17%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Accuracy Decrease": "-18.5%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Accuracy Decrease": "-20%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "13",
                        "Accuracy Decrease": "-20%",
                        "Duration": "6"
                    }
                ]
            },
            "Lure": {
                "description": "For one turn, when the caster dodges an attack, all other party members in their row will counterattack the attack source.",
                "damage": "counter",
                "damage target": "enemy",
                "requirements": {
                    "Phantom Swords": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "8",
                        "Damage": "250%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "8",
                        "Damage": "255%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "8",
                        "Damage": "260%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "8",
                        "Damage": "265%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Damage": "295%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Damage": "305%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Damage": "315%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Damage": "325%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Damage": "335%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Damage": "400%"
                    }
                ]
            },
            "Dodge Boon": {
                "description": "When the user dodges an attack, their Union gauge is restored.",
                "requirements": {
                    "Phantom Swords": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Union Increase": "1"
                    },
                    {
                        "level": 2,
                        "Union Increase": "2"
                    },
                    {
                        "level": 3,
                        "Union Increase": "3"
                    },
                    {
                        "level": 4,
                        "Union Increase": "4"
                    },
                    {
                        "level": 5,
                        "Union Increase": "6"
                    }
                ]
            },
            "Auto-Curtain": {
                "description": "Gives the user a chance to automatically use Wind Curtain at the start of a battle.",
                "buff": "",
                "buff target": "",
                "requirements": {
                    "Wind Curtain": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "10%"
                    },
                    {
                        "level": 2,
                        "Chance": "13%"
                    },
                    {
                        "level": 3,
                        "Chance": "16%"
                    },
                    {
                        "level": 4,
                        "Chance": "19%"
                    },
                    {
                        "level": 5,
                        "Chance": "25%"
                    }
                ]
            },
            "Divine Gust": {
                "description": "For one turn, increases all party members evasion. Each time a party member dodges an attack, the bonus provided by Divine Gust is decreased.",
                "buff": "eva",
                "buff target": "party",
                "requirements": {
                    "Auto-Curtain": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "Evasion Increase": "+50%",
                        "Decrease Per Dodge": "-25%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "15",
                        "Evasion Increase": "+53%",
                        "Decrease Per Dodge": "-25%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "15",
                        "Evasion Increase": "+56%",
                        "Decrease Per Dodge": "-25%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "15",
                        "Evasion Increase": "+59%",
                        "Decrease Per Dodge": "-25%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "21",
                        "Evasion Increase": "+70%",
                        "Decrease Per Dodge": "-30%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "21",
                        "Evasion Increase": "+74%",
                        "Decrease Per Dodge": "-30%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "21",
                        "Evasion Increase": "+78%",
                        "Decrease Per Dodge": "-30%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "21",
                        "Evasion Increase": "+82%",
                        "Decrease Per Dodge": "-30%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "21",
                        "Evasion Increase": "+86%",
                        "Decrease Per Dodge": "-30%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "30",
                        "Evasion Increase": "+105%",
                        "Decrease Per Dodge": "-35%"
                    }
                ]
            },
            "Deft Thrust": {
                "description": "Deals melee STR-based stab damage to one enemy. For the rest of the turn, the users evasion and chance to be targeted are increased.",
                "damage": "physical",
                "damage target": "enemy",
                "requirements": {
                    "Optic Thrust": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "8",
                        "Damage": "135%",
                        "Evade/Target Increase": "+20%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "8",
                        "Damage": "150%",
                        "Evade/Target Increase": "+20%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "8",
                        "Damage": "165%",
                        "Evade/Target Increase": "+20%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "8",
                        "Damage": "180%",
                        "Evade/Target Increase": "+20%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "13",
                        "Damage": "180%",
                        "Evade/Target Increase": "+27.5%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "13",
                        "Damage": "195%",
                        "Evade/Target Increase": "+27.5%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "13",
                        "Damage": "210%",
                        "Evade/Target Increase": "+27.5%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "13",
                        "Damage": "225%",
                        "Evade/Target Increase": "+27.5%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "13",
                        "Damage": "240%",
                        "Evade/Target Increase": "+27.5%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Damage": "240%",
                        "Evade/Target Increase": "+35%"
                    }
                ]
            },
            "Revenge Thrust": {
                "description": "Deals melee STR-based stab+volt damage to one enemy. The damage starts at a base value, and is then multiplied by the amount of times the user has dodged an attack since the last use of Revenge Thrust. There is a maximum amount of times Revenge Thrust can have its damage multiplied.",
                "damage": "physical volt",
                "damage target": "enemy",
                "requirements": {
                    "Deft Thrust": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "12",
                        "Base Damage": "160%",
                        "Max Stacks": "2",
                        "Max Damage": "320%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "12",
                        "Base Damage": "160%",
                        "Max Stacks": "3",
                        "Max Damage": "480%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "12",
                        "Base Damage": "160%",
                        "Max Stacks": "4",
                        "Max Damage": "640%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "12",
                        "Base Damage": "160%",
                        "Max Stacks": "5",
                        "Max Damage": "800%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "18",
                        "Base Damage": "200%",
                        "Max Stacks": "5",
                        "Max Damage": "1000%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "18",
                        "Base Damage": "200%",
                        "Max Stacks": "6",
                        "Max Damage": "1200%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "18",
                        "Base Damage": "200%",
                        "Max Stacks": "7",
                        "Max Damage": "1400%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "18",
                        "Base Damage": "200%",
                        "Max Stacks": "8",
                        "Max Damage": "1600%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "18",
                        "Base Damage": "200%",
                        "Max Stacks": "9",
                        "Max Damage": "1800%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "24",
                        "Base Damage": "250%",
                        "Max Stacks": "9",
                        "Max Damage": "2250%"
                    }
                ]
            },
            "Counter Boost": {
                "description": "Gives a chance to add extra hits when Sylphid activates. Each extra hit is rolled for individually.",
                "requirements": {
                    "Sylphid": 5
                },
                "table": [
                    {
                        "level": 1,
                        "Max Extra Hits": "1",
                        "Chance Per Hit": "25%"
                    },
                    {
                        "level": 2,
                        "Max Extra Hits": "1",
                        "Chance Per Hit": "28%"
                    },
                    {
                        "level": 3,
                        "Max Extra Hits": "1",
                        "Chance Per Hit": "31%"
                    },
                    {
                        "level": 4,
                        "Max Extra Hits": "1",
                        "Chance Per Hit": "34%"
                    },
                    {
                        "level": 5,
                        "Max Extra Hits": "2",
                        "Chance Per Hit": "34%"
                    },
                    {
                        "level": 6,
                        "Max Extra Hits": "2",
                        "Chance Per Hit": "38%"
                    },
                    {
                        "level": 7,
                        "Max Extra Hits": "2",
                        "Chance Per Hit": "42%"
                    },
                    {
                        "level": 8,
                        "Max Extra Hits": "2",
                        "Chance Per Hit": "46%"
                    },
                    {
                        "level": 9,
                        "Max Extra Hits": "2",
                        "Chance Per Hit": "50%"
                    },
                    {
                        "level": 10,
                        "Max Extra Hits": "3",
                        "Chance Per Hit": "50%"
                    }
                ]
            }
        }
    },
    "harbinger": {
        "specializations": [
            "Deathbringer",
            "Deathguard"
        ],
        "Base": {
            "Scythe Mastery": {
                "description": "Increases damage dealt with scythes.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "2%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "3%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "4%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "5%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "8%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "9%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "12%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "15%"
                    }
                ]
            },
            "Soul Gather": {
                "description": "Increases the encounter rate for a certain number of steps. Increases EXP earned from battles.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Duration": "50",
                        "Encounter Increase": "2x",
                        "EXP Increase": "1.2x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Duration": "60",
                        "Encounter Increase": "2x",
                        "EXP Increase": "1.25x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Duration": "70",
                        "Encounter Increase": "2x",
                        "EXP Increase": "1.3x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Duration": "80",
                        "Encounter Increase": "2x",
                        "EXP Increase": "1.35x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Duration": "80",
                        "Encounter Increase": "3.5x",
                        "EXP Increase": "1.55x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Duration": "100",
                        "Encounter Increase": "3.5x",
                        "EXP Increase": "1.6x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Duration": "120",
                        "Encounter Increase": "3.5x",
                        "EXP Increase": "1.65x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Duration": "140",
                        "Encounter Increase": "3.5x",
                        "EXP Increase": "1.7x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Duration": "160",
                        "Encounter Increase": "3.5x",
                        "EXP Increase": "1.75x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Duration": "160",
                        "Encounter Increase": "5x",
                        "EXP Increase": "2x"
                    }
                ]
            },
            "Miasma Armor": {
                "description": "Consumes a percentage of the users current HP to gain the Miasma Armor state. The Miasma Armor state lasts for three turns. The Miasma Armor state increases the users speed while active.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "2",
                        "% Current HP Cost": "40%",
                        "Speed Modifier": "1.2x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "2",
                        "% Current HP Cost": "35%",
                        "Speed Modifier": "1.4x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "2",
                        "% Current HP Cost": "30%",
                        "Speed Modifier": "1.6x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "2",
                        "% Current HP Cost": "25%",
                        "Speed Modifier": "1.8x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "3",
                        "% Current HP Cost": "5%",
                        "Speed Modifier": "2.5x"
                    }
                ]
            },
            "Auto-Miasma": {
                "description": "Gives the user a chance to gain the Miasma Armor state at the start of battle.",
                "requirements": {
                    "Miasma Armor": 2
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "30%"
                    },
                    {
                        "level": 2,
                        "Chance": "34%"
                    },
                    {
                        "level": 3,
                        "Chance": "38%"
                    },
                    {
                        "level": 4,
                        "Chance": "42%"
                    },
                    {
                        "level": 5,
                        "Chance": "60%"
                    },
                    {
                        "level": 6,
                        "Chance": "65%"
                    },
                    {
                        "level": 7,
                        "Chance": "70%"
                    },
                    {
                        "level": 8,
                        "Chance": "75%"
                    },
                    {
                        "level": 9,
                        "Chance": "80%"
                    },
                    {
                        "level": 10,
                        "Chance": "100%"
                    }
                ]
            },
            "Endless Shroud": {
                "description": "Gives the user a chance to gain the Miasma Armor state when using a debuff skill.",
                "requirements": {
                    "Miasma Armor": 2
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "15%"
                    },
                    {
                        "level": 2,
                        "Chance": "18%"
                    },
                    {
                        "level": 3,
                        "Chance": "21%"
                    },
                    {
                        "level": 4,
                        "Chance": "24%"
                    },
                    {
                        "level": 5,
                        "Chance": "34%"
                    },
                    {
                        "level": 6,
                        "Chance": "38%"
                    },
                    {
                        "level": 7,
                        "Chance": "42%"
                    },
                    {
                        "level": 8,
                        "Chance": "46%"
                    },
                    {
                        "level": 9,
                        "Chance": "50%"
                    },
                    {
                        "level": 10,
                        "Chance": "67%"
                    }
                ]
            },
            "Judgment": {
                "description": "When the user has the Miasma Armor state, when they lose HP (either through damage or self-inflicted HP loss), they have a chance to attempt to inflict sleep on one enemy. The base chance of the sleep infliction is 100%.",
                "ailment": "sleep",
                "ailment target": "enemy",
                "requirements": {
                    "Miasma Armor": 2
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "10%"
                    },
                    {
                        "level": 2,
                        "Chance": "11%"
                    },
                    {
                        "level": 3,
                        "Chance": "12%"
                    },
                    {
                        "level": 4,
                        "Chance": "3%"
                    },
                    {
                        "level": 5,
                        "Chance": "19%"
                    },
                    {
                        "level": 6,
                        "Chance": "20%"
                    },
                    {
                        "level": 7,
                        "Chance": "21%"
                    },
                    {
                        "level": 8,
                        "Chance": "22%"
                    },
                    {
                        "level": 9,
                        "Chance": "23%"
                    },
                    {
                        "level": 10,
                        "Chance": "30%"
                    }
                ]
            },
            "Stifling Miasma": {
                "description": "Reduces all enemies attack for a set amount of turns.",
                "debuff": "atk",
                "debuff target": "aoe",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Attack Reduction": "10%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Attack Reduction": "12%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Attack Reduction": "14%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Attack Reduction": "16%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Attack Reduction": "16%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Attack Reduction": "17%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Attack Reduction": "18%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Attack Reduction": "19%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Attack Reduction": "20%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Attack Reduction": "20%",
                        "Duration": "6"
                    }
                ]
            },
            "Wilting Miasma": {
                "description": "Increases all enemies chance of being inflicted with ailments and binds for a set amount of turns.",
                "debuff": "res",
                "debuff target": "aoe",
                "requirements": {
                    "Stifling Miasma": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Chance Multiplier": "1.25x",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Chance Multiplier": "1.28x",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Chance Multiplier": "1.31x",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Chance Multiplier": "1.34x",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Chance Multiplier": "1.34x",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Chance Multiplier": "1.38x",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Chance Multiplier": "1.42x",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Chance Multiplier": "1.46x",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Chance Multiplier": "1.5x",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Chance Multiplier": "1.5x",
                        "Duration": "6"
                    }
                ]
            },
            "Paralyzing Reap": {
                "description": "Deals melee STR-based cut damage to one row of enemies. If the user has the Miasma Armor state, attempts to inflict paralysis on hit targets.",
                "damage": "physical",
                "damage target": "row",
                "ailment": "paralyzed",
                "ailment target": "row",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "150%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "156%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "162%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "168%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Damage": "205%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Damage": "212%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Damage": "219%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Damage": "226%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Damage": "233%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Damage": "280%",
                        "Base Chance": "70%"
                    }
                ]
            },
            "Cursed Reap": {
                "description": "Deals melee STR-based cut damage to one row of enemies. If the user has the Miasma Armor state, attempts to inflict curse on hit targets.",
                "damage": "physical",
                "damage target": "row",
                "ailment": "cursed",
                "ailment target": "row",
                "requirements": {
                    "Paralyzing Reap": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "150%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "156%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "162%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "168%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Damage": "205%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Damage": "212%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Damage": "219%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Damage": "226%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Damage": "233%",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Damage": "280%",
                        "Base Chance": "70%"
                    }
                ]
            }
        },
        "Deathbringer": {
            "Black Blade": {
                "description": "When the user has the Miasma Armor state, increases their damage when they inflict an ailment. The bonus provided by Black Blade is reset after the Miasma Armor state is ended.",
                "buff": "atk",
                "buff target": "self",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Per Ailment": "15%",
                        "Max Stacks": "1",
                        "Max Damage": "15%"
                    },
                    {
                        "level": 2,
                        "Damage Per Ailment": "17%",
                        "Max Stacks": "1",
                        "Max Damage": "17%"
                    },
                    {
                        "level": 3,
                        "Damage Per Ailment": "19%",
                        "Max Stacks": "1",
                        "Max Damage": "19%"
                    },
                    {
                        "level": 4,
                        "Damage Per Ailment": "21%",
                        "Max Stacks": "1",
                        "Max Damage": "21%"
                    },
                    {
                        "level": 5,
                        "Damage Per Ailment": "21%",
                        "Max Stacks": "2",
                        "Max Damage": "42%"
                    },
                    {
                        "level": 6,
                        "Damage Per Ailment": "24%",
                        "Max Stacks": "2",
                        "Max Damage": "48%"
                    },
                    {
                        "level": 7,
                        "Damage Per Ailment": "27%",
                        "Max Stacks": "2",
                        "Max Damage": "54%"
                    },
                    {
                        "level": 8,
                        "Damage Per Ailment": "30%",
                        "Max Stacks": "2",
                        "Max Damage": "60%"
                    },
                    {
                        "level": 9,
                        "Damage Per Ailment": "33%",
                        "Max Stacks": "2",
                        "Max Damage": "66%"
                    },
                    {
                        "level": 10,
                        "Damage Per Ailment": "33%",
                        "Max Stacks": "3",
                        "Max Damage": "99%"
                    }
                ]
            },
            "Black Shroud": {
                "description": "When the user has the Miasma Armor state, increases their defense when they inflict an ailment. The bonus provided by Black Shroud is reset after the Miasma Armor state is ended.",
                "buff": "def",
                "buff target": "self",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Defense Per Ailment": "7%",
                        "Max Stacks": "1",
                        "Max Defense": "7%"
                    },
                    {
                        "level": 2,
                        "Defense Per Ailment": "8%",
                        "Max Stacks": "1",
                        "Max Defense": "8%"
                    },
                    {
                        "level": 3,
                        "Defense Per Ailment": "9%",
                        "Max Stacks": "1",
                        "Max Defense": "9%"
                    },
                    {
                        "level": 4,
                        "Defense Per Ailment": "10%",
                        "Max Stacks": "1",
                        "Max Defense": "10%"
                    },
                    {
                        "level": 5,
                        "Defense Per Ailment": "10%",
                        "Max Stacks": "2",
                        "Max Defense": "20%"
                    },
                    {
                        "level": 6,
                        "Defense Per Ailment": "11%",
                        "Max Stacks": "2",
                        "Max Defense": "22%"
                    },
                    {
                        "level": 7,
                        "Defense Per Ailment": "12%",
                        "Max Stacks": "2",
                        "Max Defense": "24%"
                    },
                    {
                        "level": 8,
                        "Defense Per Ailment": "13%",
                        "Max Stacks": "2",
                        "Max Defense": "26%"
                    },
                    {
                        "level": 9,
                        "Defense Per Ailment": "14%",
                        "Max Stacks": "2",
                        "Max Defense": "28%"
                    },
                    {
                        "level": 10,
                        "Defense Per Ailment": "14%",
                        "Max Stacks": "3",
                        "Max Defense": "42%"
                    }
                ]
            },
            "TP Up": {
                "description": "Increases the users maximum TP.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max TP Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Max TP Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Max TP Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Max TP Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Max TP Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Max TP Increase": "19%"
                    },
                    {
                        "level": 7,
                        "Max TP Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Max TP Increase": "23%"
                    },
                    {
                        "level": 9,
                        "Max TP Increase": "25%"
                    },
                    {
                        "level": 10,
                        "Max TP Increase": "30%"
                    }
                ]
            },
            "Status ATK Up": {
                "description": "Increases the users chance of inflicting ailments, binds, and stuns.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Base Chance Multiplier": "1.05x"
                    },
                    {
                        "level": 2,
                        "Base Chance Multiplier": "1.06x"
                    },
                    {
                        "level": 3,
                        "Base Chance Multiplier": "1.07x"
                    },
                    {
                        "level": 4,
                        "Base Chance Multiplier": "1.08x"
                    },
                    {
                        "level": 5,
                        "Base Chance Multiplier": "1.12x"
                    },
                    {
                        "level": 6,
                        "Base Chance Multiplier": "1.13x"
                    },
                    {
                        "level": 7,
                        "Base Chance Multiplier": "1.14x"
                    },
                    {
                        "level": 8,
                        "Base Chance Multiplier": "1.15x"
                    },
                    {
                        "level": 9,
                        "Base Chance Multiplier": "1.16x"
                    },
                    {
                        "level": 10,
                        "Base Chance Multiplier": "1.2x"
                    }
                ]
            },
            "Bloody Reap": {
                "description": "Consumes a percentage of the users current HP to deal 2-4 of melee STR-based cut damage to random enemies. Can hit the same target multiple times.",
                "damage": "physical",
                "damage target": "multi",
                "requirements": {
                    "Deaths Judgement": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage Per Hit": "90%",
                        "% Current HP Cost": "20%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage Per Hit": "96%",
                        "% Current HP Cost": "20%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage Per Hit": "102%",
                        "% Current HP Cost": "20%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage Per Hit": "108%",
                        "% Current HP Cost": "20%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage Per Hit": "148%",
                        "% Current HP Cost": "40%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage Per Hit": "155%",
                        "% Current HP Cost": "40%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage Per Hit": "162%",
                        "% Current HP Cost": "40%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage Per Hit": "169%",
                        "% Current HP Cost": "40%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage Per Hit": "176%",
                        "% Current HP Cost": "40%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Damage Per Hit": "230%",
                        "% Current HP Cost": "60%"
                    }
                ]
            },
            "Frigid Reap": {
                "description": "Deals melee STR-based cut+ice damage to one row of enemies. If a target has an ailment, they are also hit with an extra melee STR-based cut+ice damage attack that deals double the damage of the first hit.",
                "damage": "physical ice",
                "damage target": "row",
                "requirements": {
                    "Deaths Judgement": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "13",
                        "Damage": "150%",
                        "Total Damage w/ Ailment": "450%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "13",
                        "Damage": "156%",
                        "Total Damage w/ Ailment": "468%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "13",
                        "Damage": "162%",
                        "Total Damage w/ Ailment": "486%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "13",
                        "Damage": "168%",
                        "Total Damage w/ Ailment": "504%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "20",
                        "Damage": "205%",
                        "Total Damage w/ Ailment": "615%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "20",
                        "Damage": "212%",
                        "Total Damage w/ Ailment": "636%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "20",
                        "Damage": "219%",
                        "Total Damage w/ Ailment": "657%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "20",
                        "Damage": "226%",
                        "Total Damage w/ Ailment": "678%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "20",
                        "Damage": "233%",
                        "Total Damage w/ Ailment": "699%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "30",
                        "Damage": "280%",
                        "Total Damage w/ Ailment": "840%"
                    }
                ]
            },
            "Temporal Shroud": {
                "description": "Requires the Miasma Armor state to use. Ends the Miasma Armor state, and takes the user out of battle. At the end of the turn, deals melee STR-based cut damage to one enemy, and returns the user to battle.",
                "damage": "physical",
                "damage target": "enemy",
                "requirements": {
                    "Bloody Reap": 3,
                    "Frigid Reap": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "Damage": "500%",
                        "Speed Modifier": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "20",
                        "Damage": "520%",
                        "Speed Modifier": "32%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "20",
                        "Damage": "540%",
                        "Speed Modifier": "34%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "20",
                        "Damage": "560%",
                        "Speed Modifier": "36%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "30",
                        "Damage": "700%",
                        "Speed Modifier": "50%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "30",
                        "Damage": "725%",
                        "Speed Modifier": "55%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "30",
                        "Damage": "750%",
                        "Speed Modifier": "60%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "30",
                        "Damage": "775%",
                        "Speed Modifier": "65%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "30",
                        "Damage": "800%",
                        "Speed Modifier": "70%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "40",
                        "Damage": "1000%",
                        "Speed Modifier": "200%"
                    }
                ]
            },
            "Toxic Reap": {
                "description": "Deals melee STR-based cut damage to one row of enemies. If the user has the Miasma Armor state, attempts to inflict poison on hit targets.",
                "damage": "physical",
                "damage target": "row",
                "ailment": "poison",
                "ailment target": "row",
                "requirements": {
                    "Cursed Reap": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage": "150%",
                        "Base Poison Damage": "150",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage": "156%",
                        "Base Poison Damage": "180",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage": "162%",
                        "Base Poison Damage": "210",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage": "168%",
                        "Base Poison Damage": "240",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Damage": "205%",
                        "Base Poison Damage": "240",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "15",
                        "Damage": "212%",
                        "Base Poison Damage": "290",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "15",
                        "Damage": "219%",
                        "Base Poison Damage": "340",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "15",
                        "Damage": "226%",
                        "Base Poison Damage": "390",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "15",
                        "Damage": "233%",
                        "Base Poison Damage": "440",
                        "Base Chance": "55%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Damage": "280%",
                        "Base Poison Damage": "440",
                        "Base Chance": "70%"
                    }
                ]
            },
            "Chaos Reap": {
                "description": "Deals melee STR-based cut damage to one row of enemies. If the user has the Miasma Armor state, attempts to inflict panic on hit targets.",
                "damage": "physical",
                "damage target": "row",
                "ailment": "cursed",
                "ailment target": "row",
                "requirements": {
                    "Cursed Reap": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage": "150%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage": "156%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage": "162%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage": "168%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Damage": "205%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "16",
                        "Damage": "212%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Damage": "219%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "16",
                        "Damage": "226%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "16",
                        "Damage": "233%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "24",
                        "Damage": "280%",
                        "Base Chance": "50%"
                    }
                ]
            },
            "Fatal Reap": {
                "description": "Deals melee STR-based cut damage to one enemy. Damage is amplified if the target is asleep--this includes the original 1.5x sleep damage bonus. Attempts to instantly kill the target. The instant kill chance is increased if the target is asleep.",
                "damage": "physical",
                "damage target": "enemy",
                "ailment": "kill",
                "ailment target": "single",
                "requirements": {
                    "Toxic Reap": 3,
                    "Chaos Reap": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage": "205%",
                        "Sleep Damage": "769%",
                        "Base Chance": "25%",
                        "1 Cond Base Chance": "100%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage": "220%",
                        "Sleep Damage": "825%",
                        "Base Chance": "28%",
                        "1 Cond Base Chance": "100%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage": "235%",
                        "Sleep Damage": "881%",
                        "Base Chance": "31%",
                        "1 Cond Base Chance": "100%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage": "250%",
                        "Sleep Damage": "938%",
                        "Base Chance": "34%",
                        "1 Cond Base Chance": "100%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "18",
                        "Damage": "250%",
                        "Sleep Damage": "1125%",
                        "Base Chance": "34%",
                        "1 Cond Base Chance": "175%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "18",
                        "Damage": "270%",
                        "Sleep Damage": "1215%",
                        "Base Chance": "38%",
                        "1 Cond Base Chance": "175%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "18",
                        "Damage": "290%",
                        "Sleep Damage": "1305%",
                        "Base Chance": "42%",
                        "1 Cond Base Chance": "175%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "18",
                        "Damage": "310%",
                        "Sleep Damage": "1395%",
                        "Base Chance": "46%",
                        "1 Cond Base Chance": "175%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "18",
                        "Damage": "330%",
                        "Sleep Damage": "1485%",
                        "Base Chance": "50%",
                        "1 Cond Base Chance": "175%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "28",
                        "Damage": "330%",
                        "Sleep Damage": "1733%",
                        "Base Chance": "50%",
                        "1 Cond Base Chance": "250%"
                    }
                ]
            }
        },
        "Deathguard": {
            "Spirit Absorb": {
                "description": "When the user inflicts a debuff, their HP is restored. The restoration from Spirit Absorb can increase the users maximum HP for one turn.",
                "healing": "conditional",
                "healing target": "self",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Healing Power": "50%",
                        "Max Overhealed HP": "115%"
                    },
                    {
                        "level": 2,
                        "Healing Power": "55%",
                        "Max Overhealed HP": "117%"
                    },
                    {
                        "level": 3,
                        "Healing Power": "60%",
                        "Max Overhealed HP": "119%"
                    },
                    {
                        "level": 4,
                        "Healing Power": "65%",
                        "Max Overhealed HP": "121%"
                    },
                    {
                        "level": 5,
                        "Healing Power": "90%",
                        "Max Overhealed HP": "127%"
                    },
                    {
                        "level": 6,
                        "Healing Power": "96%",
                        "Max Overhealed HP": "130%"
                    },
                    {
                        "level": 7,
                        "Healing Power": "102%",
                        "Max Overhealed HP": "133%"
                    },
                    {
                        "level": 8,
                        "Healing Power": "108%",
                        "Max Overhealed HP": "136%"
                    },
                    {
                        "level": 9,
                        "Healing Power": "114%",
                        "Max Overhealed HP": "139%"
                    },
                    {
                        "level": 10,
                        "Healing Power": "150%",
                        "Max Overhealed HP": "150%"
                    }
                ]
            },
            "HP Up": {
                "description": "Increases the users maximum HP.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max HP Increase": "5%"
                    },
                    {
                        "level": 2,
                        "Max HP Increase": "6%"
                    },
                    {
                        "level": 3,
                        "Max HP Increase": "7%"
                    },
                    {
                        "level": 4,
                        "Max HP Increase": "8%"
                    },
                    {
                        "level": 5,
                        "Max HP Increase": "12%"
                    },
                    {
                        "level": 6,
                        "Max HP Increase": "13%"
                    },
                    {
                        "level": 7,
                        "Max HP Increase": "14%"
                    },
                    {
                        "level": 8,
                        "Max HP Increase": "15%"
                    },
                    {
                        "level": 9,
                        "Max HP Increase": "16%"
                    },
                    {
                        "level": 10,
                        "Max HP Increase": "20%"
                    }
                ]
            },
            "Magic DEF Up": {
                "description": "Passively increases elemental defense.",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Defense Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Defense Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Defense Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Defense Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Defense Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Defense Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Defense Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Defense Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Defense Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Defense Increase": "15%"
                    }
                ]
            },
            "Deaths Asylum": {
                "description": "Gives the user a chance to nullify ailments and debuffs inflicted on them.",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Endless Shroud": 5
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "10%"
                    },
                    {
                        "level": 2,
                        "Chance": "11%"
                    },
                    {
                        "level": 3,
                        "Chance": "12%"
                    },
                    {
                        "level": 4,
                        "Chance": "13%"
                    },
                    {
                        "level": 5,
                        "Chance": "17%"
                    },
                    {
                        "level": 6,
                        "Chance": "18%"
                    },
                    {
                        "level": 7,
                        "Chance": "19%"
                    },
                    {
                        "level": 8,
                        "Chance": "20%"
                    },
                    {
                        "level": 9,
                        "Chance": "21%"
                    },
                    {
                        "level": 10,
                        "Chance": "25%"
                    }
                ]
            },
            "Atonement": {
                "description": "Requires the Miasma Armor state to use. Ends the Miasma Armor state, and restores all party members HP. Also has a chance to cure ailments.",
                "healing": "conditional",
                "healing target": "party",
                "requirements": {
                    "Deaths Asylum": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "9",
                        "Healing Power": "150%",
                        "Ailment Cure Chance": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "9",
                        "Healing Power": "155%",
                        "Ailment Cure Chance": "33%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "9",
                        "Healing Power": "160%",
                        "Ailment Cure Chance": "36%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "9",
                        "Healing Power": "165%",
                        "Ailment Cure Chance": "39%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "14",
                        "Healing Power": "220%",
                        "Ailment Cure Chance": "54%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "14",
                        "Healing Power": "225%",
                        "Ailment Cure Chance": "58%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "14",
                        "Healing Power": "230%",
                        "Ailment Cure Chance": "62%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "14",
                        "Healing Power": "235%",
                        "Ailment Cure Chance": "66%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "14",
                        "Healing Power": "240%",
                        "Ailment Cure Chance": "70%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Healing Power": "300%",
                        "Ailment Cure Chance": "90%"
                    }
                ]
            },
            "Miasma Wall": {
                "description": "Requires the Miasma Armor state to use. Ends the Miasma Armor state, and gives all party members a chance to nullify any ailments or binds for one turn. Miasma Wall has a limit to how many inflictions it can block.",
                "requirements": {
                    "Deaths Asylum": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "Chance": "66%",
                        "Max Blocks": "3"
                    },
                    {
                        "level": 2,
                        "TP Cost": "15",
                        "Chance": "68%",
                        "Max Blocks": "3"
                    },
                    {
                        "level": 3,
                        "TP Cost": "15",
                        "Chance": "70%",
                        "Max Blocks": "3"
                    },
                    {
                        "level": 4,
                        "TP Cost": "15",
                        "Chance": "72%",
                        "Max Blocks": "3"
                    },
                    {
                        "level": 5,
                        "TP Cost": "22",
                        "Chance": "82%",
                        "Max Blocks": "4"
                    },
                    {
                        "level": 6,
                        "TP Cost": "22",
                        "Chance": "84%",
                        "Max Blocks": "4"
                    },
                    {
                        "level": 7,
                        "TP Cost": "22",
                        "Chance": "86%",
                        "Max Blocks": "4"
                    },
                    {
                        "level": 8,
                        "TP Cost": "22",
                        "Chance": "88%",
                        "Max Blocks": "4"
                    },
                    {
                        "level": 9,
                        "TP Cost": "22",
                        "Chance": "90%",
                        "Max Blocks": "4"
                    },
                    {
                        "level": 10,
                        "TP Cost": "35",
                        "Chance": "100%",
                        "Max Blocks": "5"
                    }
                ]
            },
            "Eroding Miasma": {
                "description": "Reduces all enemies defense for a set amount of turns.",
                "debuff": "def",
                "debuff target": "aoe",
                "requirements": {
                    "Wilting Miasma": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Defense Decrease": "14%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Defense Decrease": "17%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Defense Decrease": "20%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Defense Decrease": "23%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Defense Decrease": "23%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Defense Decrease": "26%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Defense Decrease": "29%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Defense Decrease": "32%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Defense Decrease": "35%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Defense Decrease": "35%",
                        "Duration": "6"
                    }
                ]
            },
            "Masking Miasma": {
                "description": "Reduces all enemies accuracy for a set amount of turns.",
                "debuff": "acc",
                "debuff target": "aoe",
                "requirements": {
                    "Wilting Miasma": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Accuracy Decrease": "-11%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Accuracy Decrease": "-12%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Accuracy Decrease": "-13%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Accuracy Decrease": "-14%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Accuracy Decrease": "-14%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Accuracy Decrease": "-15.5%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Accuracy Decrease": "-17%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Accuracy Decrease": "-18.5%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Accuracy Decrease": "-20%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Accuracy Decrease": "-20%",
                        "Duration": "6"
                    }
                ]
            },
            "Ephemeral Reap": {
                "description": "Targets one enemy. Removes all debuffs from the target, and deals multiple instances of melee STR-based cut damage to the target. The number of hits is equal to the number of debuffs removed from the target.",
                "damage": "physical",
                "damage target": "enemy",
                "requirements": {
                    "Eroding Miasma": 5,
                    "Masking Miasma": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "13",
                        "Damage Per Hit": "350%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "13",
                        "Damage Per Hit": "370%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "13",
                        "Damage Per Hit": "390%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "13",
                        "Damage Per Hit": "410%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "18",
                        "Damage Per Hit": "490%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "18",
                        "Damage Per Hit": "515%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "18",
                        "Damage Per Hit": "540%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "18",
                        "Damage Per Hit": "565%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "18",
                        "Damage Per Hit": "590%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "24",
                        "Damage Per Hit": "700%"
                    }
                ]
            },
            "Soul Transfer": {
                "description": "Targets one enemy. Removes all debuffs from the target, and gives all party members a chance to revive at 1 HP after being killed for one turn. The revive can activate a maximum of 3 times.",
                "healing": "revive",
                "healing target": "aoe",
                "requirements": {
                    "Eroding Miasma": 5,
                    "Masking Miasma": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Revive Chance": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Revive Chance": "32%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Revive Chance": "34%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Revive Chance": "36%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Revive Chance": "50%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Revive Chance": "52%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Revive Chance": "54%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Revive Chance": "56%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Revive Chance": "58%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "21",
                        "Revive Chance": "75%"
                    }
                ]
            }
        }
    },
    "masurao": {
        "specializations": [
            "Blade Dancer",
            "Blade Master"
        ],
        "Base": {
            "Katana Mastery": {
                "description": "Increases damage dealt with katanas.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "2%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "3%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "4%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "5%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "8%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "9%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "12%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "15%"
                    }
                ]
            },
            "Peerless Demon": {
                "description": "Increases damage dealt based on the number of hits an attack has. One bonus stack is given for every hit of an attack.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Increase Per Hit": "5%",
                        "Maximum Stacks": "2",
                        "Maximum Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Increase Per Hit": "5%",
                        "Maximum Stacks": "3",
                        "Maximum Increase": "15%"
                    },
                    {
                        "level": 3,
                        "Increase Per Hit": "5%",
                        "Maximum Stacks": "4",
                        "Maximum Increase": "20%"
                    },
                    {
                        "level": 4,
                        "Increase Per Hit": "5%",
                        "Maximum Stacks": "5",
                        "Maximum Increase": "25%"
                    },
                    {
                        "level": 5,
                        "Increase Per Hit": "7%",
                        "Maximum Stacks": "5",
                        "Maximum Increase": "35%"
                    },
                    {
                        "level": 6,
                        "Increase Per Hit": "7%",
                        "Maximum Stacks": "6",
                        "Maximum Increase": "42%"
                    },
                    {
                        "level": 7,
                        "Increase Per Hit": "7%",
                        "Maximum Stacks": "7",
                        "Maximum Increase": "49%"
                    },
                    {
                        "level": 8,
                        "Increase Per Hit": "7%",
                        "Maximum Stacks": "8",
                        "Maximum Increase": "56%"
                    },
                    {
                        "level": 9,
                        "Increase Per Hit": "7%",
                        "Maximum Stacks": "9",
                        "Maximum Increase": "63%"
                    },
                    {
                        "level": 10,
                        "Increase Per Hit": "9%",
                        "Maximum Stacks": "9",
                        "Maximum Increase": "81%"
                    }
                ]
            },
            "Duel": {
                "description": "Increases damage dealt when hitting enemies that were also hit by the user on the last turn. The bonus is reset after one hit.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "18%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "19%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "20%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "21%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "25%"
                    }
                ]
            },
            "Swallow Soar": {
                "description": "Deals melee STR-based cut damage to one enemy. After the target has taken their turn, the user will attack them again for the same amount of damage. If the target acts before the user (really only applies to priority skills), the second hit will not activate.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Duel": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "8",
                        "Damage Per Hit": "100%",
                        "Total Damage": "200%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "8",
                        "Damage Per Hit": "103%",
                        "Total Damage": "206%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "8",
                        "Damage Per Hit": "106%",
                        "Total Damage": "212%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "8",
                        "Damage Per Hit": "109%",
                        "Total Damage": "218%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Damage Per Hit": "124%",
                        "Total Damage": "248%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Damage Per Hit": "128%",
                        "Total Damage": "256%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Damage Per Hit": "132%",
                        "Total Damage": "264%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Damage Per Hit": "136%",
                        "Total Damage": "272%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage Per Hit": "140%",
                        "Total Damage": "280%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "17",
                        "Damage Per Hit": "160%",
                        "Total Damage": "320%"
                    }
                ]
            },
            "Armor Pierce": {
                "description": "Deals melee STR-based stab damage to one enemy. Reduces the targets defense against STR-based attacks for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage": "122%",
                        "Defense Reduction": "15%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage": "132%",
                        "Defense Reduction": "15%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage": "142%",
                        "Defense Reduction": "15%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage": "152%",
                        "Defense Reduction": "15%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage": "152%",
                        "Defense Reduction": "25%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage": "164%",
                        "Defense Reduction": "25%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage": "176%",
                        "Defense Reduction": "25%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage": "188%",
                        "Defense Reduction": "25%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage": "200%",
                        "Defense Reduction": "25%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "13",
                        "Damage": "200%",
                        "Defense Reduction": "40%"
                    }
                ]
            },
            "Haze Slash": {
                "description": "Deals melee STR-based cut damage to one enemy. Attempts to inflict sleep on the target.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Armor Pierce": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "160%",
                        "Base Chance": "40%",
                        "Speed Modifier": "120%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "170%",
                        "Base Chance": "40%",
                        "Speed Modifier": "120%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "180%",
                        "Base Chance": "40%",
                        "Speed Modifier": "120%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "190%",
                        "Base Chance": "40%",
                        "Speed Modifier": "120%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Damage": "190%",
                        "Base Chance": "60%",
                        "Speed Modifier": "70%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Damage": "205%",
                        "Base Chance": "60%",
                        "Speed Modifier": "70%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Damage": "220%",
                        "Base Chance": "60%",
                        "Speed Modifier": "70%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Damage": "235%",
                        "Base Chance": "60%",
                        "Speed Modifier": "70%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Damage": "250%",
                        "Base Chance": "60%",
                        "Speed Modifier": "70%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Damage": "250%",
                        "Base Chance": "90%",
                        "Speed Modifier": "10%"
                    }
                ]
            },
            "Air Blade": {
                "description": "Deals ranged STR-based cut damage to one enemy.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage": "130%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage": "136%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage": "142%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage": "148%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "6",
                        "Damage": "178%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "6",
                        "Damage": "186%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "6",
                        "Damage": "194%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "6",
                        "Damage": "202%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "6",
                        "Damage": "210%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "9",
                        "Damage": "260%"
                    }
                ]
            },
            "Whirlwind": {
                "description": "Deals multiple instances of melee STR-based damage to random enemies. Can hit the same target once at most.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Air Blade": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage Per Hit": "100%",
                        "Minimum Hits": "2",
                        "Maximum Hits": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage Per Hit": "104%",
                        "Minimum Hits": "2",
                        "Maximum Hits": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage Per Hit": "108%",
                        "Minimum Hits": "2",
                        "Maximum Hits": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage Per Hit": "112%",
                        "Minimum Hits": "2",
                        "Maximum Hits": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "14",
                        "Damage Per Hit": "136%",
                        "Minimum Hits": "2",
                        "Maximum Hits": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "14",
                        "Damage Per Hit": "141%",
                        "Minimum Hits": "2",
                        "Maximum Hits": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "14",
                        "Damage Per Hit": "146%",
                        "Minimum Hits": "2",
                        "Maximum Hits": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "14",
                        "Damage Per Hit": "151%",
                        "Minimum Hits": "2",
                        "Maximum Hits": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "14",
                        "Damage Per Hit": "156%",
                        "Minimum Hits": "2",
                        "Maximum Hits": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Damage Per Hit": "180%",
                        "Minimum Hits": "3",
                        "Maximum Hits": "6"
                    }
                ]
            },
            "New Challenger": {
                "description": "Immediately begins a battle. Increases the chance of encountering rare breed enemies. When a battle ends, there is a chance to immediately begin another one.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "2",
                        "Rare Breed Chance Increase": "1%",
                        "Continue Chance": "3%",
                        "Max Battles": "2"
                    },
                    {
                        "level": 2,
                        "TP Cost": "2",
                        "Rare Breed Chance Increase": "2%",
                        "Continue Chance": "4%",
                        "Max Battles": "2"
                    },
                    {
                        "level": 3,
                        "TP Cost": "2",
                        "Rare Breed Chance Increase": "3%",
                        "Continue Chance": "5%",
                        "Max Battles": "2"
                    },
                    {
                        "level": 4,
                        "TP Cost": "2",
                        "Rare Breed Chance Increase": "4%",
                        "Continue Chance": "6%",
                        "Max Battles": "2"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Rare Breed Chance Increase": "10%",
                        "Continue Chance": "10%",
                        "Max Battles": "4"
                    }
                ]
            },
            "High Ground": {
                "description": "Increases physical attack for the users row for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Attack Increase": "19%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Attack Increase": "22%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Attack Increase": "25%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Attack Increase": "28%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Attack Increase": "28%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Attack Increase": "31%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Attack Increase": "34%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Attack Increase": "37%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Attack Increase": "40%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "13",
                        "Attack Increase": "40%",
                        "Duration": "6"
                    }
                ]
            }
        },
        "Blade Dancer": {
            "Multi-Katana": {
                "description": "Lets the user equip multiple katanas. Gives a chance for the user to attack with all of their equipped weapons when using the normal Attack command. Each successive hit deals less damage than the last--the second hit deals 80% damage, the third hit deals 65% damage, and the fifth hit deals 50% damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance": "15%"
                    },
                    {
                        "level": 2,
                        "Chance": "17%"
                    },
                    {
                        "level": 3,
                        "Chance": "19%"
                    },
                    {
                        "level": 4,
                        "Chance": "21%"
                    },
                    {
                        "level": 5,
                        "Chance": "28%"
                    },
                    {
                        "level": 6,
                        "Chance": "31%"
                    },
                    {
                        "level": 7,
                        "Chance": "34%"
                    },
                    {
                        "level": 8,
                        "Chance": "37%"
                    },
                    {
                        "level": 9,
                        "Chance": "40%"
                    },
                    {
                        "level": 10,
                        "Chance": "50%"
                    }
                ]
            },
            "HP Up": {
                "description": "Increases the users maximum HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max HP Increase": "5%"
                    },
                    {
                        "level": 2,
                        "Max HP Increase": "6%"
                    },
                    {
                        "level": 3,
                        "Max HP Increase": "7%"
                    },
                    {
                        "level": 4,
                        "Max HP Increase": "8%"
                    },
                    {
                        "level": 5,
                        "Max HP Increase": "12%"
                    },
                    {
                        "level": 6,
                        "Max HP Increase": "13%"
                    },
                    {
                        "level": 7,
                        "Max HP Increase": "14%"
                    },
                    {
                        "level": 8,
                        "Max HP Increase": "15%"
                    },
                    {
                        "level": 9,
                        "Max HP Increase": "16%"
                    },
                    {
                        "level": 10,
                        "Max HP Increase": "20%"
                    }
                ]
            },
            "Reincarnation": {
                "description": "When the user is dead, at the end of each turn that they are dead, they have a chance to revive at 1 HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "HP Up": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "10%"
                    },
                    {
                        "level": 2,
                        "Chance": "11%"
                    },
                    {
                        "level": 3,
                        "Chance": "12%"
                    },
                    {
                        "level": 4,
                        "Chance": "13%"
                    },
                    {
                        "level": 5,
                        "Chance": "17%"
                    },
                    {
                        "level": 6,
                        "Chance": "18%"
                    },
                    {
                        "level": 7,
                        "Chance": "19%"
                    },
                    {
                        "level": 8,
                        "Chance": "20%"
                    },
                    {
                        "level": 9,
                        "Chance": "21%"
                    },
                    {
                        "level": 10,
                        "Chance": "25%"
                    }
                ]
            },
            "Hell Slash": {
                "description": "Chases attacks by enemies and party members for one turn with the users equipped weapon. The maximum number of chases depends on how many katanas the user has equipped.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Swallow Soar": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "1 Katana Max Chases": "1",
                        "2 Katanas Max Chases": "2",
                        "3 Katanas Max Chases": "3",
                        "4 Katanas Max Chases": "4",
                        "Damage to Enemies": "100%",
                        "Damage to Party Members": "300%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "1 Katana Max Chases": "1",
                        "2 Katanas Max Chases": "2",
                        "3 Katanas Max Chases": "3",
                        "4 Katanas Max Chases": "4",
                        "Damage to Enemies": "105%",
                        "Damage to Party Members": "270%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "1 Katana Max Chases": "1",
                        "2 Katanas Max Chases": "2",
                        "3 Katanas Max Chases": "3",
                        "4 Katanas Max Chases": "4",
                        "Damage to Enemies": "110%",
                        "Damage to Party Members": "240%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "1 Katana Max Chases": "1",
                        "2 Katanas Max Chases": "2",
                        "3 Katanas Max Chases": "3",
                        "4 Katanas Max Chases": "4",
                        "Damage to Enemies": "115%",
                        "Damage to Party Members": "210%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "1 Katana Max Chases": "2",
                        "2 Katanas Max Chases": "4",
                        "3 Katanas Max Chases": "6",
                        "4 Katanas Max Chases": "8",
                        "Damage to Enemies": "138%",
                        "Damage to Party Members": "100%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "1 Katana Max Chases": "2",
                        "2 Katanas Max Chases": "4",
                        "3 Katanas Max Chases": "6",
                        "4 Katanas Max Chases": "8",
                        "Damage to Enemies": "145%",
                        "Damage to Party Members": "93%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "1 Katana Max Chases": "2",
                        "2 Katanas Max Chases": "4",
                        "3 Katanas Max Chases": "6",
                        "4 Katanas Max Chases": "8",
                        "Damage to Enemies": "152%",
                        "Damage to Party Members": "86%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "1 Katana Max Chases": "2",
                        "2 Katanas Max Chases": "4",
                        "3 Katanas Max Chases": "6",
                        "4 Katanas Max Chases": "8",
                        "Damage to Enemies": "159%",
                        "Damage to Party Members": "79%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "1 Katana Max Chases": "2",
                        "2 Katanas Max Chases": "4",
                        "3 Katanas Max Chases": "6",
                        "4 Katanas Max Chases": "8",
                        "Damage to Enemies": "166%",
                        "Damage to Party Members": "72%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "35",
                        "1 Katana Max Chases": "3",
                        "2 Katanas Max Chases": "6",
                        "3 Katanas Max Chases": "9",
                        "4 Katanas Max Chases": "12",
                        "Damage to Enemies": "200%",
                        "Damage to Party Members": "34%"
                    }
                ]
            },
            "Reblossom": {
                "description": "If the user has multiple katanas equipped, they have a chance to repeat katana skills after use.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Hell Slash": 3
                },
                "table": [
                    {
                        "level": 1,
                        "2 Katanas Chance": "15%",
                        "3 Katanas Chance": "30%",
                        "4 Katanas Chance": "45%"
                    },
                    {
                        "level": 2,
                        "2 Katanas Chance": "16%",
                        "3 Katanas Chance": "32%",
                        "4 Katanas Chance": "48%"
                    },
                    {
                        "level": 3,
                        "2 Katanas Chance": "17%",
                        "3 Katanas Chance": "34%",
                        "4 Katanas Chance": "51%"
                    },
                    {
                        "level": 4,
                        "2 Katanas Chance": "18%",
                        "3 Katanas Chance": "36%",
                        "4 Katanas Chance": "54%"
                    },
                    {
                        "level": 5,
                        "2 Katanas Chance": "24%",
                        "3 Katanas Chance": "48%",
                        "4 Katanas Chance": "72%"
                    },
                    {
                        "level": 6,
                        "2 Katanas Chance": "25%",
                        "3 Katanas Chance": "50%",
                        "4 Katanas Chance": "75%"
                    },
                    {
                        "level": 7,
                        "2 Katanas Chance": "26%",
                        "3 Katanas Chance": "52%",
                        "4 Katanas Chance": "78%"
                    },
                    {
                        "level": 8,
                        "2 Katanas Chance": "27%",
                        "3 Katanas Chance": "54%",
                        "4 Katanas Chance": "81%"
                    },
                    {
                        "level": 9,
                        "2 Katanas Chance": "28%",
                        "3 Katanas Chance": "56%",
                        "4 Katanas Chance": "84%"
                    },
                    {
                        "level": 10,
                        "2 Katanas Chance": "34%",
                        "3 Katanas Chance": "68%",
                        "4 Katanas Chance": "100%"
                    }
                ]
            },
            "Sacred Tetrad": {
                "description": "Deals multiple instances of melee STR-based cut damage to one enemy. The number of hits is equal to the number of katanas the user has equipped.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Whirlwind": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage Per Hit": "60%",
                        "2 Katanas Total Damage": "120%",
                        "3 Katanas Total Damage": "180%",
                        "4 Katanas Total Damage": "240%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage Per Hit": "61%",
                        "2 Katanas Total Damage": "122%",
                        "3 Katanas Total Damage": "183%",
                        "4 Katanas Total Damage": "244%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage Per Hit": "62%",
                        "2 Katanas Total Damage": "124%",
                        "3 Katanas Total Damage": "186%",
                        "4 Katanas Total Damage": "248%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage Per Hit": "63%",
                        "2 Katanas Total Damage": "126%",
                        "3 Katanas Total Damage": "189%",
                        "4 Katanas Total Damage": "252%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Damage Per Hit": "73%",
                        "2 Katanas Total Damage": "146%",
                        "3 Katanas Total Damage": "219%",
                        "4 Katanas Total Damage": "292%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Damage Per Hit": "74%",
                        "2 Katanas Total Damage": "148%",
                        "3 Katanas Total Damage": "222%",
                        "4 Katanas Total Damage": "296%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Damage Per Hit": "75%",
                        "2 Katanas Total Damage": "150%",
                        "3 Katanas Total Damage": "225%",
                        "4 Katanas Total Damage": "300%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Damage Per Hit": "76%",
                        "2 Katanas Total Damage": "152%",
                        "3 Katanas Total Damage": "228%",
                        "4 Katanas Total Damage": "304%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Damage Per Hit": "77%",
                        "2 Katanas Total Damage": "154%",
                        "3 Katanas Total Damage": "231%",
                        "4 Katanas Total Damage": "308%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "Damage Per Hit": "90%",
                        "2 Katanas Total Damage": "180%",
                        "3 Katanas Total Damage": "270%",
                        "4 Katanas Total Damage": "360%"
                    }
                ]
            },
            "Layered Bloom": {
                "description": "Deals 2-8 instances of melee STR-based cut damage to random enemies in one row. Can hit the same enemy multiple times. For each katana the user has equipped beyond one, the damage per hit is increased.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Whirlwind": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "9",
                        "1 Katana Dmg Per Hit": "38%",
                        "2 Katana Dmg Per Hit": "45%",
                        "3 Katana Dmg Per Hit": "53%",
                        "4 Katana Dmg Per Hit": "60%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "9",
                        "1 Katana Dmg Per Hit": "39%",
                        "2 Katana Dmg Per Hit": "47%",
                        "3 Katana Dmg Per Hit": "54%",
                        "4 Katana Dmg Per Hit": "62%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "9",
                        "1 Katana Dmg Per Hit": "40%",
                        "2 Katana Dmg Per Hit": "48%",
                        "3 Katana Dmg Per Hit": "56%",
                        "4 Katana Dmg Per Hit": "64%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "9",
                        "1 Katana Dmg Per Hit": "41%",
                        "2 Katana Dmg Per Hit": "50%",
                        "3 Katana Dmg Per Hit": "58%",
                        "4 Katana Dmg Per Hit": "66%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "14",
                        "1 Katana Dmg Per Hit": "49%",
                        "2 Katana Dmg Per Hit": "59%",
                        "3 Katana Dmg Per Hit": "68%",
                        "4 Katana Dmg Per Hit": "78%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "14",
                        "1 Katana Dmg Per Hit": "50%",
                        "2 Katana Dmg Per Hit": "60%",
                        "3 Katana Dmg Per Hit": "70%",
                        "4 Katana Dmg Per Hit": "80%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "14",
                        "1 Katana Dmg Per Hit": "51%",
                        "2 Katana Dmg Per Hit": "62%",
                        "3 Katana Dmg Per Hit": "72%",
                        "4 Katana Dmg Per Hit": "82%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "14",
                        "1 Katana Dmg Per Hit": "53%",
                        "2 Katana Dmg Per Hit": "63%",
                        "3 Katana Dmg Per Hit": "74%",
                        "4 Katana Dmg Per Hit": "84%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "14",
                        "1 Katana Dmg Per Hit": "54%",
                        "2 Katana Dmg Per Hit": "65%",
                        "3 Katana Dmg Per Hit": "75%",
                        "4 Katana Dmg Per Hit": "86%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "21",
                        "1 Katana Dmg Per Hit": "62%",
                        "2 Katana Dmg Per Hit": "75%",
                        "3 Katana Dmg Per Hit": "88%",
                        "4 Katana Dmg Per Hit": "100%"
                    }
                ]
            },
            "Vast Flourish": {
                "description": "Deals multiple instances of melee STR-based cut damage to random enemies. Can hit the same target multiple times. The number of hits is equal to the number of katanas the user has equipped multiplied by the number of enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Sacred Tetrad": 3,
                    "Layered Bloom": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "14",
                        "Damage Per Hit": "25%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "14",
                        "Damage Per Hit": "26%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "14",
                        "Damage Per Hit": "27%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "14",
                        "Damage Per Hit": "28%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "21",
                        "Damage Per Hit": "31%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "21",
                        "Damage Per Hit": "32%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "21",
                        "Damage Per Hit": "33%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "21",
                        "Damage Per Hit": "34%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "21",
                        "Damage Per Hit": "35%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "30",
                        "Damage Per Hit": "40%"
                    }
                ]
            },
            "Phys ATK Up": {
                "description": "Passively increases physical (cut/stab/bash) damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Attack Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Attack Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Attack Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Attack Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Attack Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Attack Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Attack Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Attack Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Attack Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Attack Increase": "15%"
                    }
                ]
            },
            "Meteor Rain": {
                "description": "Deals multiple instances of melee STR-based damage to random enemies. Can hit the same enemy multiple times. The number of hits is equal to the number of katanas the user has equipped. The element of the attack is random, and can be cut, stab, bash, fire, ice, volt, or almighty.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Phys ATK Up": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage Per Hit": "80%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage Per Hit": "82%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage Per Hit": "84%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage Per Hit": "86%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Damage Per Hit": "95%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Damage Per Hit": "98%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Damage Per Hit": "101%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Damage Per Hit": "104%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Damage Per Hit": "107%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Damage Per Hit": "120%"
                    }
                ]
            }
        },
        "Blade Master": {
            "Sword God": {
                "description": "Increases damage dealt with critical hits, and the users critical hit chance. Also lets skills be critical hits.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Crit Chance Increase": "10%",
                        "Crit Damage": "172%"
                    },
                    {
                        "level": 2,
                        "Crit Chance Increase": "11%",
                        "Crit Damage": "174%"
                    },
                    {
                        "level": 3,
                        "Crit Chance Increase": "12%",
                        "Crit Damage": "175%"
                    },
                    {
                        "level": 4,
                        "Crit Chance Increase": "13%",
                        "Crit Damage": "177%"
                    },
                    {
                        "level": 5,
                        "Crit Chance Increase": "19%",
                        "Crit Damage": "186%"
                    },
                    {
                        "level": 6,
                        "Crit Chance Increase": "20%",
                        "Crit Damage": "187%"
                    },
                    {
                        "level": 7,
                        "Crit Chance Increase": "21%",
                        "Crit Damage": "189%"
                    },
                    {
                        "level": 8,
                        "Crit Chance Increase": "22%",
                        "Crit Damage": "190%"
                    },
                    {
                        "level": 9,
                        "Crit Chance Increase": "23%",
                        "Crit Damage": "192%"
                    },
                    {
                        "level": 10,
                        "Crit Chance Increase": "30%",
                        "Crit Damage": "202%"
                    }
                ]
            },
            "Speed Up": {
                "description": "Increases the users action speed, accuracy, and evasion.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Speed Multiplier": "1.11x",
                        "Acc/Evade Increase": "+2.4%"
                    },
                    {
                        "level": 2,
                        "Speed Multiplier": "1.14x",
                        "Acc/Evade Increase": "+2.8%"
                    },
                    {
                        "level": 3,
                        "Speed Multiplier": "1.17x",
                        "Acc/Evade Increase": "+3.2%"
                    },
                    {
                        "level": 4,
                        "Speed Multiplier": "1.2x",
                        "Acc/Evade Increase": "+3.6%"
                    },
                    {
                        "level": 5,
                        "Speed Multiplier": "1.24x",
                        "Acc/Evade Increase": "+5.2%"
                    },
                    {
                        "level": 6,
                        "Speed Multiplier": "1.27x",
                        "Acc/Evade Increase": "+5.8%"
                    },
                    {
                        "level": 7,
                        "Speed Multiplier": "1.3x",
                        "Acc/Evade Increase": "+6.4%"
                    },
                    {
                        "level": 8,
                        "Speed Multiplier": "1.33x",
                        "Acc/Evade Increase": "+7%"
                    },
                    {
                        "level": 9,
                        "Speed Multiplier": "1.36x",
                        "Acc/Evade Increase": "+7.6%"
                    },
                    {
                        "level": 10,
                        "Speed Multiplier": "1.4x",
                        "Acc/Evade Increase": "+10%"
                    }
                ]
            },
            "TP Up": {
                "description": "Increases the users maximum TP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max TP Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Max TP Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Max TP Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Max TP Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Max TP Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Max TP Increase": "19%"
                    },
                    {
                        "level": 7,
                        "Max TP Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Max TP Increase": "23%"
                    },
                    {
                        "level": 9,
                        "Max TP Increase": "25%"
                    },
                    {
                        "level": 10,
                        "Max TP Increase": "30%"
                    }
                ]
            },
            "Bolt Slash": {
                "description": "Deals melee STR-based cut+volt damage to one enemy.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "TP Up": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage": "220%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage": "225%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage": "230%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage": "235%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Damage": "270%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "16",
                        "Damage": "276%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Damage": "282%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "16",
                        "Damage": "288%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "16",
                        "Damage": "294%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "24",
                        "Damage": "340%"
                    }
                ]
            },
            "Mirror Moon": {
                "description": "For one turn, gives the user a chance to nullify cut, stab, and bash attacks against them and counterattack the source. Each time Mirror Moon activates, the chance of it activating on that same turn is reduced by 35%. Can only activate once per attack.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "TP Up": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage": "300%",
                        "Base Chance": "67%",
                        "Max Counters": "2"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage": "310%",
                        "Base Chance": "70%",
                        "Max Counters": "2"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage": "320%",
                        "Base Chance": "73%",
                        "Max Counters": "3"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage": "330%",
                        "Base Chance": "76%",
                        "Max Counters": "3"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Damage": "380%",
                        "Base Chance": "100%",
                        "Max Counters": "3"
                    },
                    {
                        "level": 6,
                        "TP Cost": "15",
                        "Damage": "390%",
                        "Base Chance": "103%",
                        "Max Counters": "3"
                    },
                    {
                        "level": 7,
                        "TP Cost": "15",
                        "Damage": "400%",
                        "Base Chance": "106%",
                        "Max Counters": "4"
                    },
                    {
                        "level": 8,
                        "TP Cost": "15",
                        "Damage": "410%",
                        "Base Chance": "109%",
                        "Max Counters": "4"
                    },
                    {
                        "level": 9,
                        "TP Cost": "15",
                        "Damage": "420%",
                        "Base Chance": "112%",
                        "Max Counters": "4"
                    },
                    {
                        "level": 10,
                        "TP Cost": "22",
                        "Damage": "500%",
                        "Base Chance": "135%",
                        "Max Counters": "4"
                    }
                ]
            },
            "Foot Sweep": {
                "description": "Deals melee STR-based cut damage to one row of enemies. Reduces hit enemies evasion for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Haze Slash": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "12",
                        "Damage": "111%",
                        "Evade Decrease": "-16%",
                        "Duration": "3"
                    },
                    {
                        "level": 2,
                        "TP Cost": "12",
                        "Damage": "119%",
                        "Evade Decrease": "-18%",
                        "Duration": "3"
                    },
                    {
                        "level": 3,
                        "TP Cost": "12",
                        "Damage": "127%",
                        "Evade Decrease": "-20%",
                        "Duration": "3"
                    },
                    {
                        "level": 4,
                        "TP Cost": "12",
                        "Damage": "135%",
                        "Evade Decrease": "-22%",
                        "Duration": "3"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Damage": "135%",
                        "Evade Decrease": "-22%",
                        "Duration": "4"
                    },
                    {
                        "level": 6,
                        "TP Cost": "16",
                        "Damage": "145%",
                        "Evade Decrease": "-24%",
                        "Duration": "4"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Damage": "155%",
                        "Evade Decrease": "-26%",
                        "Duration": "4"
                    },
                    {
                        "level": 8,
                        "TP Cost": "16",
                        "Damage": "165%",
                        "Evade Decrease": "-28%",
                        "Duration": "4"
                    },
                    {
                        "level": 9,
                        "TP Cost": "16",
                        "Damage": "175%",
                        "Evade Decrease": "-30%",
                        "Duration": "4"
                    },
                    {
                        "level": 10,
                        "TP Cost": "22",
                        "Damage": "175%",
                        "Evade Decrease": "-30%",
                        "Duration": "5"
                    }
                ]
            },
            "Helm Splitter": {
                "description": "Deals melee STR-based cut damage to one enemy. Ignores the targets vulnerability to cut damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Foot Sweep": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "260%",
                        "Base Accuracy": "76%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "270%",
                        "Base Accuracy": "76%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "280%",
                        "Base Accuracy": "76%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "290%",
                        "Base Accuracy": "76%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Damage": "390%",
                        "Base Accuracy": "56%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Damage": "405%",
                        "Base Accuracy": "56%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Damage": "420%",
                        "Base Accuracy": "56%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Damage": "435%",
                        "Base Accuracy": "56%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage": "450%",
                        "Base Accuracy": "56%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "17",
                        "Damage": "600%",
                        "Base Accuracy": "36%"
                    }
                ]
            },
            "Spirit Sword": {
                "description": "When the user hits an enemy with a single-target attack, that enemys damage is reduced for the rest of the turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "High Ground": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Damage Reduction": "5%"
                    },
                    {
                        "level": 2,
                        "Damage Reduction": "6%"
                    },
                    {
                        "level": 3,
                        "Damage Reduction": "7%"
                    },
                    {
                        "level": 4,
                        "Damage Reduction": "8%"
                    },
                    {
                        "level": 5,
                        "Damage Reduction": "12%"
                    },
                    {
                        "level": 6,
                        "Damage Reduction": "13%"
                    },
                    {
                        "level": 7,
                        "Damage Reduction": "14%"
                    },
                    {
                        "level": 8,
                        "Damage Reduction": "15%"
                    },
                    {
                        "level": 9,
                        "Damage Reduction": "16%"
                    },
                    {
                        "level": 10,
                        "Damage Reduction": "20%"
                    }
                ]
            },
            "Triple Strike": {
                "description": "Deals three instances of melee STR-based cut damage to one enemy. The first attack attempts to bind the targets head, the second attack attempts to bind the targets arms, and the third attack attempts to bind the targets legs. If the first or second attacks inflict their binds, Triple Strike will end.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Spirit Sword": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "12",
                        "Damage Per Hit": "65%",
                        "Base Chance": "6%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "12",
                        "Damage Per Hit": "67%",
                        "Base Chance": "6%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "12",
                        "Damage Per Hit": "69%",
                        "Base Chance": "6%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "12",
                        "Damage Per Hit": "71%",
                        "Base Chance": "6%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Damage Per Hit": "81%",
                        "Base Chance": "9%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "16",
                        "Damage Per Hit": "83%",
                        "Base Chance": "9%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Damage Per Hit": "85%",
                        "Base Chance": "9%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "16",
                        "Damage Per Hit": "87%",
                        "Base Chance": "9%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "16",
                        "Damage Per Hit": "89%",
                        "Base Chance": "9%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Damage Per Hit": "100%",
                        "Base Chance": "12%"
                    }
                ]
            },
            "Petal Scatter": {
                "description": "Deals ranged STR-based cut damage to all enemies. The damage is reduced by how many enemies are alive--0.65x for 2, 0.45x for 3, and 0.35x for 4 or more.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Spirit Sword": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "16",
                        "1 Enemy Damage": "240%",
                        "2 Enemies Damage": "156%",
                        "3 Enemies Damage": "108%",
                        "4+ Enemies Damage": "84%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "16",
                        "1 Enemy Damage": "247%",
                        "2 Enemies Damage": "160%",
                        "3 Enemies Damage": "111%",
                        "4+ Enemies Damage": "86%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "16",
                        "1 Enemy Damage": "254%",
                        "2 Enemies Damage": "165%",
                        "3 Enemies Damage": "114%",
                        "4+ Enemies Damage": "88%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "16",
                        "1 Enemy Damage": "261%",
                        "2 Enemies Damage": "169%",
                        "3 Enemies Damage": "117%",
                        "4+ Enemies Damage": "91%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "24",
                        "1 Enemy Damage": "320%",
                        "2 Enemies Damage": "208%",
                        "3 Enemies Damage": "144%",
                        "4+ Enemies Damage": "112%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "24",
                        "1 Enemy Damage": "330%",
                        "2 Enemies Damage": "214%",
                        "3 Enemies Damage": "148%",
                        "4+ Enemies Damage": "115%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "24",
                        "1 Enemy Damage": "340%",
                        "2 Enemies Damage": "221%",
                        "3 Enemies Damage": "153%",
                        "4+ Enemies Damage": "119%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "24",
                        "1 Enemy Damage": "350%",
                        "2 Enemies Damage": "227%",
                        "3 Enemies Damage": "157%",
                        "4+ Enemies Damage": "122%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "24",
                        "1 Enemy Damage": "360%",
                        "2 Enemies Damage": "234%",
                        "3 Enemies Damage": "162%",
                        "4+ Enemies Damage": "126%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "34",
                        "1 Enemy Damage": "450%",
                        "2 Enemies Damage": "292%",
                        "3 Enemies Damage": "202%",
                        "4+ Enemies Damage": "157%"
                    }
                ]
            }
        }
    },
    "necromancer": {
        "specializations": [
            "Spirit Broker",
            "Spirit Evoker"
        ],
        "Base": {
            "Wraith Mastery": {
                "description": "Increases wraith normal attack damage, and the chance of them inflicting paralysis with their normal attacks. As a reminder, wraith attacks deal a base of 100% damage and have a base infliction chance of 1%.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage": "110%",
                        "Base Chance": "1%"
                    },
                    {
                        "level": 2,
                        "Damage": "115%",
                        "Base Chance": "1.2%"
                    },
                    {
                        "level": 3,
                        "Damage": "120%",
                        "Base Chance": "1.4%"
                    },
                    {
                        "level": 4,
                        "Damage": "125%",
                        "Base Chance": "1.6%"
                    },
                    {
                        "level": 5,
                        "Damage": "145%",
                        "Base Chance": "2.6%"
                    },
                    {
                        "level": 6,
                        "Damage": "152%",
                        "Base Chance": "2.85%"
                    },
                    {
                        "level": 7,
                        "Damage": "159%",
                        "Base Chance": "3.1%"
                    },
                    {
                        "level": 8,
                        "Damage": "166%",
                        "Base Chance": "3.35%"
                    },
                    {
                        "level": 9,
                        "Damage": "173%",
                        "Base Chance": "3.6%"
                    },
                    {
                        "level": 10,
                        "Damage": "200%",
                        "Base Chance": "5%"
                    }
                ]
            },
            "Summon Wraith": {
                "description": "Consumes 15% of the users current HP to create a wraith with increased maximum HP. Can be used in the Labyrinth.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Max HP Bonus": "5%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Max HP Bonus": "8%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Max HP Bonus": "11%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Max HP Bonus": "14%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Max HP Bonus": "39%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Max HP Bonus": "43%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Max HP Bonus": "47%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Max HP Bonus": "51%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Max HP Bonus": "55%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Max HP Bonus": "80%"
                    }
                ]
            },
            "Life Exchange": {
                "description": "Destroys one wraith. Restores all party members HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Summon Wraith": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "12",
                        "Healing Power": "130%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "12",
                        "Healing Power": "135%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "12",
                        "Healing Power": "140%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "12",
                        "Healing Power": "1445%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "18",
                        "Healing Power": "190%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "18",
                        "Healing Power": "195%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "18",
                        "Healing Power": "200%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "18",
                        "Healing Power": "205%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "18",
                        "Healing Power": "210%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "24",
                        "Healing Power": "270%"
                    }
                ]
            },
            "Wraith Cry": {
                "description": "Destroys one wraith. Reduces one enemys defense for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Defense Reduction": "14%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Defense Reduction": "17%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Defense Reduction": "20%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Defense Reduction": "23%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Defense Reduction": "23%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Defense Reduction": "26%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Defense Reduction": "29%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Defense Reduction": "32%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Defense Reduction": "35%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Defense Reduction": "35%",
                        "Duration": "6"
                    }
                ]
            },
            "Soul Candy": {
                "description": "Destroys one wraith. Increases all party members elemental defense for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Defense Increase": "20%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Defense Increase": "22%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Defense Increase": "24%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Defense Increase": "26%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Defense Increase": "26%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Defense Increase": "28%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Defense Increase": "30%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Defense Increase": "32%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Defense Increase": "34%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Defense Increase": "34%",
                        "Duration": "6"
                    }
                ]
            },
            "Fierce Shield": {
                "description": "Targets one wraith. The selected wraith will take all damage to the party until the end of the turn. The wraith under the effect of Fierce Shield has a modifier applied to all damage it takes.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Wraith Cry": 2,
                    "Soul Candy": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Damage Multiplier": "1.5x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Damage Multiplier": "1.45x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Damage Multiplier": "1.4x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Damage Multiplier": "1.35x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Damage Multiplier": "1x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "Damage Multiplier": "0.97x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "Damage Multiplier": "0.94x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "Damage Multiplier": "0.91x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "Damage Multiplier": "0.88x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "8",
                        "Damage Multiplier": "0.75x"
                    }
                ]
            },
            "Gravekeeping": {
                "description": "If the user does not take any damage for one turn, they have a chance to summon a wraith at the end of the turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance": "10%"
                    },
                    {
                        "level": 2,
                        "Chance": "11%"
                    },
                    {
                        "level": 3,
                        "Chance": "12%"
                    },
                    {
                        "level": 4,
                        "Chance": "13%"
                    },
                    {
                        "level": 5,
                        "Chance": "17%"
                    },
                    {
                        "level": 6,
                        "Chance": "18%"
                    },
                    {
                        "level": 7,
                        "Chance": "19%"
                    },
                    {
                        "level": 8,
                        "Chance": "20%"
                    },
                    {
                        "level": 9,
                        "Chance": "21%"
                    },
                    {
                        "level": 10,
                        "Chance": "25%"
                    }
                ]
            },
            "Reincarnation": {
                "description": "When a wraith is destroyed by a Necromancer skill in-battle, the user has a chance to summon another wraith.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Gravekeeping": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "15%"
                    },
                    {
                        "level": 2,
                        "Chance": "16%"
                    },
                    {
                        "level": 3,
                        "Chance": "17%"
                    },
                    {
                        "level": 4,
                        "Chance": "18%"
                    },
                    {
                        "level": 5,
                        "Chance": "23%"
                    },
                    {
                        "level": 6,
                        "Chance": "24%"
                    },
                    {
                        "level": 7,
                        "Chance": "25%"
                    },
                    {
                        "level": 8,
                        "Chance": "26%"
                    },
                    {
                        "level": 9,
                        "Chance": "27%"
                    },
                    {
                        "level": 10,
                        "Chance": "33%"
                    }
                ]
            },
            "Poison Bomb": {
                "description": "Destroys one wraith. Attempts to inflict poison on all enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Base Chance": "60%",
                        "Base Poison Damage": "60"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Base Chance": "60%",
                        "Base Poison Damage": "75"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Base Chance": "60%",
                        "Base Poison Damage": "90"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Base Chance": "60%",
                        "Base Poison Damage": "105"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Base Chance": "75%",
                        "Base Poison Damage": "145"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Base Chance": "75%",
                        "Base Poison Damage": "180"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Base Chance": "75%",
                        "Base Poison Damage": "215"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Base Chance": "75%",
                        "Base Poison Damage": "250"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Base Chance": "75%",
                        "Base Poison Damage": "285"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Base Chance": "95%",
                        "Base Poison Damage": "360"
                    }
                ]
            },
            "Flame Bomb": {
                "description": "Destroys one wraith. Deals ranged INT-based fire damage to all enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "Damage": "120%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "15",
                        "Damage": "127%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "15",
                        "Damage": "134%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "15",
                        "Damage": "141%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "22",
                        "Damage": "181%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "22",
                        "Damage": "191%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "22",
                        "Damage": "201%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "22",
                        "Damage": "211%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "22",
                        "Damage": "221%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "30",
                        "Damage": "280%"
                    }
                ]
            }
        },
        "Spirit Broker": {
            "Hells Lure\n\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>: None</li>\n</ul>\n<p>When the user is below a certain HP threshold, they have a chance to summon a wraith at the end of a turn.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>HP Threshold</th>\n<td colspan=\"\" style=\"text-align:center;\">5%</td>\n<td colspan=\"\" style=\"text-align:center;\">6%</td>\n<td colspan=\"\" style=\"text-align:center;\">7%</td>\n<td colspan=\"\" style=\"text-align:center;\">8%</td>\n<td colspan=\"\" style=\"text-align:center;\">17%</td>\n<td colspan=\"\" style=\"text-align:center;\">18%</td>\n<td colspan=\"\" style=\"text-align:center;\">19%</td>\n<td colspan=\"\" style=\"text-align:center;\">20%</td>\n<td colspan=\"\" style=\"text-align:center;\">21%</td>\n<td colspan=\"\" style=\"text-align:center;\">30%</td>\n</tr>\n<tr>\n<th>Chance</th>\n<td>50%</td>\n<td>53%</td>\n<td>56%</td>\n<td>59%</td>\n<td>73%</td>\n<td>76%</td>\n<td>79%</td>\n<td>82%</td>\n<td>85%</td>\n<td>100%</td>\n</tr>\n</table>\n": {
                "description": "When the user is below a certain HP threshold, they have a chance to summon a wraith at the end of a turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "HP Threshold": "5%",
                        "Chance": "50%"
                    },
                    {
                        "level": 2,
                        "HP Threshold": "6%",
                        "Chance": "53%"
                    },
                    {
                        "level": 3,
                        "HP Threshold": "7%",
                        "Chance": "56%"
                    },
                    {
                        "level": 4,
                        "HP Threshold": "8%",
                        "Chance": "59%"
                    },
                    {
                        "level": 5,
                        "HP Threshold": "17%",
                        "Chance": "73%"
                    },
                    {
                        "level": 6,
                        "HP Threshold": "18%",
                        "Chance": "76%"
                    },
                    {
                        "level": 7,
                        "HP Threshold": "19%",
                        "Chance": "79%"
                    },
                    {
                        "level": 8,
                        "HP Threshold": "20%",
                        "Chance": "82%"
                    },
                    {
                        "level": 9,
                        "HP Threshold": "21%",
                        "Chance": "85%"
                    },
                    {
                        "level": 10,
                        "HP Threshold": "30%",
                        "Chance": "100%"
                    }
                ]
            },
            "TP Up\n\t\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>: None</li>\n</ul>\n<p>Increases the users maximum TP.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>Max TP Increase</th>\n<td>10%</td>\n<td>11%</td>\n<td>12%</td>\n<td>13%</td>\n<td>17%</td>\n<td>19%</td>\n<td>21%</td>\n<td>23%</td>\n<td>25%</td>\n<td>30%</td>\n</tr>\n</table>\n": {
                "description": "Increases the users maximum TP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max TP Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Max TP Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Max TP Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Max TP Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Max TP Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Max TP Increase": "19%"
                    },
                    {
                        "level": 7,
                        "Max TP Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Max TP Increase": "23%"
                    },
                    {
                        "level": 9,
                        "Max TP Increase": "25%"
                    },
                    {
                        "level": 10,
                        "Max TP Increase": "30%"
                    }
                ]
            },
            "Auto-Wraith\n\t\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>:\n\t\t\t\t\t\t\t\t\t\t\t<b>Life Exchange</b> level 3</li>\n</ul>\n<p>The user has a chance to use Summon Wraith at the start of a battle.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>Chance</th>\n<td>30%</td>\n<td>33%</td>\n<td>36%</td>\n<td>39%</td>\n<td>59%</td>\n<td>63%</td>\n<td>67%</td>\n<td>71%</td>\n<td>75%</td>\n<td>100%</td>\n</tr>\n</table>\n": {
                "description": "The user has a chance to use Summon Wraith at the start of a battle.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Life Exchange": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "30%"
                    },
                    {
                        "level": 2,
                        "Chance": "33%"
                    },
                    {
                        "level": 3,
                        "Chance": "36%"
                    },
                    {
                        "level": 4,
                        "Chance": "39%"
                    },
                    {
                        "level": 5,
                        "Chance": "59%"
                    },
                    {
                        "level": 6,
                        "Chance": "63%"
                    },
                    {
                        "level": 7,
                        "Chance": "67%"
                    },
                    {
                        "level": 8,
                        "Chance": "71%"
                    },
                    {
                        "level": 9,
                        "Chance": "75%"
                    },
                    {
                        "level": 10,
                        "Chance": "100%"
                    }
                ]
            },
            "Fair Trade\n\t\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>:\n\t\t\t\t\t\t\t\t\t\t\t<b>Fierce Shield</b> level 3</li>\n<li>\n<b>Body parts used</b>: Head</li>\n</ul>\n<p>Destroys one wraith. Deals ranged untyped damage to one enemy. The damage is exactly equal to a percentage of how\n\t\t\t\t\t\t\t\t\t\tmuch HP the wraith had when it was destroyed.</p>\n<p>Has an 80% speed modifier and a base accuracy of 150% at all levels.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>TP Cost</th>\n<td colspan=\"4\" style=\"text-align:center;\">2</td>\n<td colspan=\"5\" style=\"text-align:center;\">5</td>\n<td colspan=\"\" style=\"text-align:center;\">9</td>\n</tr>\n<tr>\n<th>% HP as Damage</th>\n<td>50%</td>\n<td>52%</td>\n<td>54%</td>\n<td>56%</td>\n<td>68%</td>\n<td>71%</td>\n<td>74%</td>\n<td>77%</td>\n<td>80%</td>\n<td>100%</td>\n</tr>\n</table>\n": {
                "description": "Destroys one wraith. Deals ranged untyped damage to one enemy. The damage is exactly equal to a percentage of how\n\t\t\t\t\t\t\t\t\t\tmuch HP the wraith had when it was destroyed.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Fierce Shield": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "2",
                        "% HP as Damage": "50%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "2",
                        "% HP as Damage": "52%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "2",
                        "% HP as Damage": "54%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "2",
                        "% HP as Damage": "56%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "% HP as Damage": "68%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "% HP as Damage": "71%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "% HP as Damage": "74%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "% HP as Damage": "77%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "% HP as Damage": "80%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "9",
                        "% HP as Damage": "100%"
                    }
                ]
            },
            "Wraith Explosion\n\t\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>:\n\t\t\t\t\t\t\t\t\t\t\t<b>Fair Trade</b> level 5</li>\n<li>\n<b>Body parts used</b>: Head</li>\n</ul>\n<p>Destroys all wraiths. Deals ranged INT-based bash+fire damage to all enemies. The damage is based on how many wraiths\n\t\t\t\t\t\t\t\t\t\twere destroyed.</p>\n<p>Has no speed modifier and a base accuracy of 150% at all levels.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>TP Cost</th>\n<td colspan=\"4\" style=\"text-align:center;\">20</td>\n<td colspan=\"5\" style=\"text-align:center;\">30</td>\n<td colspan=\"\" style=\"text-align:center;\">45</td>\n</tr>\n<tr>\n<th>1 Wraith Damage</th>\n<td>100%</td>\n<td>103%</td>\n<td>106%</td>\n<td>109%</td>\n<td>139%</td>\n<td>143%</td>\n<td>147%</td>\n<td>151%</td>\n<td>155%</td>\n<td>200%</td>\n</tr>\n<tr>\n<th>2 Wraiths Damage</th>\n<td>200%</td>\n<td>206%</td>\n<td>212%</td>\n<td>218%</td>\n<td>278%</td>\n<td>286%</td>\n<td>294%</td>\n<td>302%</td>\n<td>310%</td>\n<td>400%</td>\n</tr>\n<tr>\n<th>3 Wraiths Damage</th>\n<td>300%</td>\n<td>309%</td>\n<td>318%</td>\n<td>327%</td>\n<td>417%</td>\n<td>429%</td>\n<td>441%</td>\n<td>453%</td>\n<td>465%</td>\n<td>600%</td>\n</tr>\n</table>\n": {
                "description": "Destroys all wraiths. Deals ranged INT-based bash+fire damage to all enemies. The damage is based on how many wraiths\n\t\t\t\t\t\t\t\t\t\twere destroyed.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Fair Trade": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "1 Wraith Damage": "100%",
                        "2 Wraiths Damage": "200%",
                        "3 Wraiths Damage": "300%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "20",
                        "1 Wraith Damage": "103%",
                        "2 Wraiths Damage": "206%",
                        "3 Wraiths Damage": "309%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "20",
                        "1 Wraith Damage": "106%",
                        "2 Wraiths Damage": "212%",
                        "3 Wraiths Damage": "318%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "20",
                        "1 Wraith Damage": "109%",
                        "2 Wraiths Damage": "218%",
                        "3 Wraiths Damage": "327%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "30",
                        "1 Wraith Damage": "139%",
                        "2 Wraiths Damage": "278%",
                        "3 Wraiths Damage": "417%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "30",
                        "1 Wraith Damage": "143%",
                        "2 Wraiths Damage": "286%",
                        "3 Wraiths Damage": "429%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "30",
                        "1 Wraith Damage": "147%",
                        "2 Wraiths Damage": "294%",
                        "3 Wraiths Damage": "441%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "30",
                        "1 Wraith Damage": "151%",
                        "2 Wraiths Damage": "302%",
                        "3 Wraiths Damage": "453%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "30",
                        "1 Wraith Damage": "155%",
                        "2 Wraiths Damage": "310%",
                        "3 Wraiths Damage": "465%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "45",
                        "1 Wraith Damage": "200%",
                        "2 Wraiths Damage": "400%",
                        "3 Wraiths Damage": "600%"
                    }
                ]
            },
            "Sacrifice\n\t\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>: None</li>\n<li>\n<b>Body parts used</b>: Head</li>\n</ul>\n<p>Destroys one wraith. Increases the users damage until the end of the next turn.</p>\n<p>Has no speed modifier at all levels.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>TP Cost</th>\n<td colspan=\"4\" style=\"text-align:center;\">2</td>\n<td colspan=\"5\" style=\"text-align:center;\">10</td>\n<td colspan=\"\" style=\"text-align:center;\">25</td>\n</tr>\n<tr>\n<th>Damage Multiplier</th>\n<td>1.5x</td>\n<td>1.55x</td>\n<td>1.6x</td>\n<td>1.65x</td>\n<td>1.8x</td>\n<td>1.85x</td>\n<td>1.9x</td>\n<td>1.95x</td>\n<td>2x</td>\n<td>2.5x</td>\n</tr>\n</table>\n": {
                "description": "Destroys one wraith. Increases the users damage until the end of the next turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "2",
                        "Damage Multiplier": "1.5x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "2",
                        "Damage Multiplier": "1.55x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "2",
                        "Damage Multiplier": "1.6x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "2",
                        "Damage Multiplier": "1.65x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Damage Multiplier": "1.8x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Damage Multiplier": "1.85x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Damage Multiplier": "1.9x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Damage Multiplier": "1.95x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Damage Multiplier": "2x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "25",
                        "Damage Multiplier": "2.5x"
                    }
                ]
            },
            "Negative Energy\n\t\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>:\n\t\t\t\t\t\t\t\t\t\t\t<b>Sacrifice</b> level 3</li>\n<li>\n<b>Body parts used</b>: Head</li>\n</ul>\n<p>Deals ranged INT-based almighty damage to one enemy at the end of the turn. For each party member and enemy that\n\t\t\t\t\t\t\t\t\t\tdied on that turn, as well as for each wraith destroyed on that turn, the damage is increased by 150% (additive,\n\t\t\t\t\t\t\t\t\t\tnot multiplicative). The damage has no cap.</p>\n<p>Does not check for accuracy.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>TP Cost</th>\n<td colspan=\"4\" style=\"text-align:center;\">5</td>\n<td colspan=\"5\" style=\"text-align:center;\">8</td>\n<td colspan=\"\" style=\"text-align:center;\">12</td>\n</tr>\n<tr>\n<th>Base Damage</th>\n<td>100%</td>\n<td>104%</td>\n<td>108%</td>\n<td>112%</td>\n<td>144%</td>\n<td>149%</td>\n<td>154%</td>\n<td>159%</td>\n<td>164%</td>\n<td>200%</td>\n</tr>\n</table>\n": {
                "description": "Deals ranged INT-based almighty damage to one enemy at the end of the turn. For each party member and enemy that\n\t\t\t\t\t\t\t\t\t\tdied on that turn, as well as for each wraith destroyed on that turn, the damage is increased by 150% (additive,\n\t\t\t\t\t\t\t\t\t\tnot multiplicative). The damage has no cap.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Sacrifice": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Base Damage": "100%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Base Damage": "104%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Base Damage": "108%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Base Damage": "112%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Base Damage": "144%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Base Damage": "149%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Base Damage": "154%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Base Damage": "159%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Base Damage": "164%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Base Damage": "200%"
                    }
                ]
            },
            "Magic ATK Up\n\t\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>: None</li>\n</ul>\n<p>Passively increases elemental damage.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>Attack Increase</th>\n<td>4%</td>\n<td>5%</td>\n<td>6%</td>\n<td>7%</td>\n<td>9%</td>\n<td>10%</td>\n<td>11%</td>\n<td>12%</td>\n<td>13%</td>\n<td>15%</td>\n</tr>\n</table>\n": {
                "description": "Passively increases elemental damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Attack Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Attack Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Attack Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Attack Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Attack Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Attack Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Attack Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Attack Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Attack Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Attack Increase": "15%"
                    }
                ]
            },
            "Gates of Hell\n\t\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>:\n\t\t\t\t\t\t\t\t\t\t\t<b>Poison Bomb</b> level 5,\n\t\t\t\t\t\t\t\t\t\t\t<b>Flame Bomb</b> level 5</li>\n<li>\n<b>Body parts used</b>: Head</li>\n</ul>\n<p>Deals ranged INT-based bash damage to one enemy. Summons a wraith with HP equal to how much damage was dealt.</p>\n<p>Has an 80% speed modifier and a base accuracy of 150% at all levels.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>TP Cost</th>\n<td colspan=\"4\" style=\"text-align:center;\">16</td>\n<td colspan=\"5\" style=\"text-align:center;\">24</td>\n<td colspan=\"\" style=\"text-align:center;\">34</td>\n</tr>\n<tr>\n<th>Damage</th>\n<td>140%</td>\n<td>146%</td>\n<td>152%</td>\n<td>158%</td>\n<td>202%</td>\n<td>209%</td>\n<td>216%</td>\n<td>223%</td>\n<td>230%</td>\n<td>280%</td>\n</tr>\n</table>\n": {
                "description": "Deals ranged INT-based bash damage to one enemy. Summons a wraith with HP equal to how much damage was dealt.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Poison Bomb": 5,
                    "Flame Bomb": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "16",
                        "Damage": "140%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "16",
                        "Damage": "146%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "16",
                        "Damage": "152%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "16",
                        "Damage": "158%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "24",
                        "Damage": "202%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "24",
                        "Damage": "209%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "24",
                        "Damage": "216%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "24",
                        "Damage": "223%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "24",
                        "Damage": "230%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "34",
                        "Damage": "280%"
                    }
                ]
            },
            "Zombie Powder\n\t\t\t\t\t\t\t\t\t\t\n</h4>\n<ul>\n<li>\n<b>Requirements</b>:\n\t\t\t\t\t\t\t\t\t\t\t<b>Gates of Hell</b> level 5</li>\n<li>\n<b>Body parts used</b>: Head</li>\n</ul>\n<p>Attempts to instantly kill one enemy. If the instant death succeeds, summons a wraith with HP equal to how much\n\t\t\t\t\t\t\t\t\t\tHP the enemy had left. wraiths have an HP cap of 9999.</p>\n<p>Has a 50% speed modifier at all levels.</p>\n<table class=\"ffaq\">\n<tr>\n<th>Level</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n<tr>\n<th>TP Cost</th>\n<td colspan=\"4\" style=\"text-align:center;\">9</td>\n<td colspan=\"5\" style=\"text-align:center;\">14</td>\n<td colspan=\"\" style=\"text-align:center;\">19</td>\n</tr>\n<tr>\n<th>Base Chance</th>\n<td>40%</td>\n<td>42%</td>\n<td>44%</td>\n<td>46%</td>\n<td>59%</td>\n<td>61%</td>\n<td>63%</td>\n<td>65%</td>\n<td>67%</td>\n<td>80%</td>\n</tr>\n</table>": {
                "description": "Attempts to instantly kill one enemy. If the instant death succeeds, summons a wraith with HP equal to how much\n\t\t\t\t\t\t\t\t\t\tHP the enemy had left. wraiths have an HP cap of 9999.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Gates of Hell": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "9",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "9",
                        "Base Chance": "42%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "9",
                        "Base Chance": "44%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "9",
                        "Base Chance": "46%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "14",
                        "Base Chance": "59%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "14",
                        "Base Chance": "61%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "14",
                        "Base Chance": "63%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "14",
                        "Base Chance": "65%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "14",
                        "Base Chance": "67%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "19",
                        "Base Chance": "80%"
                    }
                ]
            }
        },
        "Spirit Evoker": {
            "Necromancy": {
                "description": "Whenever any party member or enemy dies, the user has a chance to summon a wraith.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance": "15%"
                    },
                    {
                        "level": 2,
                        "Chance": "16%"
                    },
                    {
                        "level": 3,
                        "Chance": "17%"
                    },
                    {
                        "level": 4,
                        "Chance": "18%"
                    },
                    {
                        "level": 5,
                        "Chance": "27%"
                    },
                    {
                        "level": 6,
                        "Chance": "28%"
                    },
                    {
                        "level": 7,
                        "Chance": "29%"
                    },
                    {
                        "level": 8,
                        "Chance": "30%"
                    },
                    {
                        "level": 9,
                        "Chance": "31%"
                    },
                    {
                        "level": 10,
                        "Chance": "40%"
                    }
                ]
            },
            "TP Up": {
                "description": "Increases the users maximum TP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max TP Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Max TP Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Max TP Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Max TP Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Max TP Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Max TP Increase": "19%"
                    },
                    {
                        "level": 7,
                        "Max TP Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Max TP Increase": "23%"
                    },
                    {
                        "level": 9,
                        "Max TP Increase": "25%"
                    },
                    {
                        "level": 10,
                        "Max TP Increase": "30%"
                    }
                ]
            },
            "Burden Shift": {
                "description": "If a wraith is summoned, when the user takes fatal damage, they have a chance to destroy the wraith and restore a static amount of HP, instead of dying.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Life Exchange": 5
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "20%",
                        "Restore Amount": "1"
                    },
                    {
                        "level": 2,
                        "Chance": "22%",
                        "Restore Amount": "11"
                    },
                    {
                        "level": 3,
                        "Chance": "24%",
                        "Restore Amount": "21"
                    },
                    {
                        "level": 4,
                        "Chance": "26%",
                        "Restore Amount": "31"
                    },
                    {
                        "level": 5,
                        "Chance": "34%",
                        "Restore Amount": "91"
                    },
                    {
                        "level": 6,
                        "Chance": "6%",
                        "Restore Amount": "101"
                    },
                    {
                        "level": 7,
                        "Chance": "38%",
                        "Restore Amount": "111"
                    },
                    {
                        "level": 8,
                        "Chance": "40%",
                        "Restore Amount": "121"
                    },
                    {
                        "level": 9,
                        "Chance": "42%",
                        "Restore Amount": "131"
                    },
                    {
                        "level": 10,
                        "Chance": "50%",
                        "Restore Amount": "200"
                    }
                ]
            },
            "Soul Trade": {
                "description": "Destroys one wraith. Attempts to revive all dead party members.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Burden Shift": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "Revive Chance": "50%",
                        "Revive Restore": "1"
                    },
                    {
                        "level": 2,
                        "TP Cost": "20",
                        "Revive Chance": "51%",
                        "Revive Restore": "11"
                    },
                    {
                        "level": 3,
                        "TP Cost": "20",
                        "Revive Chance": "52%",
                        "Revive Restore": "21"
                    },
                    {
                        "level": 4,
                        "TP Cost": "20",
                        "Revive Chance": "53%",
                        "Revive Restore": "31"
                    },
                    {
                        "level": 5,
                        "TP Cost": "25",
                        "Revive Chance": "62%",
                        "Revive Restore": "90"
                    },
                    {
                        "level": 6,
                        "TP Cost": "25",
                        "Revive Chance": "63%",
                        "Revive Restore": "100"
                    },
                    {
                        "level": 7,
                        "TP Cost": "25",
                        "Revive Chance": "64%",
                        "Revive Restore": "110"
                    },
                    {
                        "level": 8,
                        "TP Cost": "25",
                        "Revive Chance": "65%",
                        "Revive Restore": "120"
                    },
                    {
                        "level": 9,
                        "TP Cost": "25",
                        "Revive Chance": "66%",
                        "Revive Restore": "130"
                    },
                    {
                        "level": 10,
                        "TP Cost": "30",
                        "Revive Chance": "75%",
                        "Revive Restore": "200"
                    }
                ]
            },
            "Grave": {
                "description": "Targets one ally. For one turn, when that ally is attacked, all wraiths will counterattack. The counterattack overrides normal wraith attacks. Counterattacks attempt to inflict paralysis on hit targets. Each time a wraith counterattacks, the chance of Grave activating decreases by 9%. The base chance starts at 100%.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Fierce Shield": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage": "300%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage": "310%",
                        "Base Chance": "32%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage": "320%",
                        "Base Chance": "34%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage": "330%",
                        "Base Chance": "36%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage": "410%",
                        "Base Chance": "42%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage": "425%",
                        "Base Chance": "44%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage": "440%",
                        "Base Chance": "46%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage": "455%",
                        "Base Chance": "48%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage": "470%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Damage": "600%",
                        "Base Chance": "60%"
                    }
                ]
            },
            "Wraith Dance": {
                "description": "For one turn, all wraiths will attack three times. Each attacks damage is multiplied at each level by a certain value. Benefits from Wraith Masterys wraith attack increase.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Grave": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "13",
                        "Damage Multiplier": "60%",
                        "Total Damage": "180%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "13",
                        "Damage Multiplier": "63%",
                        "Total Damage": "189%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "13",
                        "Damage Multiplier": "66%",
                        "Total Damage": "198%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "13",
                        "Damage Multiplier": "69%",
                        "Total Damage": "207%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "19",
                        "Damage Multiplier": "84%",
                        "Total Damage": "252%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "19",
                        "Damage Multiplier": "88%",
                        "Total Damage": "264%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "19",
                        "Damage Multiplier": "92%",
                        "Total Damage": "276%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "19",
                        "Damage Multiplier": "96%",
                        "Total Damage": "288%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "19",
                        "Damage Multiplier": "100%",
                        "Total Damage": "300%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "25",
                        "Damage Multiplier": "120%",
                        "Total Damage": "360%"
                    }
                ]
            },
            "Status ATK Up": {
                "description": "Increases the users chance of inflicting ailments, binds, and stuns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Base Chance Multiplier": "1.05x"
                    },
                    {
                        "level": 2,
                        "Base Chance Multiplier": "1.06x"
                    },
                    {
                        "level": 3,
                        "Base Chance Multiplier": "1.07x"
                    },
                    {
                        "level": 4,
                        "Base Chance Multiplier": "1.08x"
                    },
                    {
                        "level": 5,
                        "Base Chance Multiplier": "1.12x"
                    },
                    {
                        "level": 6,
                        "Base Chance Multiplier": "1.13x"
                    },
                    {
                        "level": 7,
                        "Base Chance Multiplier": "1.14x"
                    },
                    {
                        "level": 8,
                        "Base Chance Multiplier": "1.15x"
                    },
                    {
                        "level": 9,
                        "Base Chance Multiplier": "1.16x"
                    },
                    {
                        "level": 10,
                        "Base Chance Multiplier": "1.2x"
                    }
                ]
            },
            "Curse Bomb": {
                "description": "Destroys one wraith. Attempts to inflict curse on all enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Poison Bomb": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Base Chance": "65%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Base Chance": "67%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Base Chance": "69%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Base Chance": "71%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Base Chance": "80%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Base Chance": "82%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Base Chance": "84%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Base Chance": "86%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Base Chance": "88%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Base Chance": "100%"
                    }
                ]
            },
            "Ice Bomb": {
                "description": "Destroys one wraith. Deals ranged INT-based ice damage to all enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Flame Bomb": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "Damage": "120%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "15",
                        "Damage": "127%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "15",
                        "Damage": "134%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "15",
                        "Damage": "141%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "22",
                        "Damage": "181%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "22",
                        "Damage": "191%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "22",
                        "Damage": "201%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "22",
                        "Damage": "211%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "22",
                        "Damage": "221%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "30",
                        "Damage": "280%"
                    }
                ]
            },
            "Tombstone Vice": {
                "description": "Destroys all wraiths. Attempts to inflict petrification on one enemy. The base infliction chance depends on the number of wraiths destroyed.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Curse Bomb": 3,
                    "Ice Bomb": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "1 Wraith Chance": "25%",
                        "2 Wraiths Chance": "40%",
                        "3 Wraiths Chance": "55%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "1 Wraith Chance": "26%",
                        "2 Wraiths Chance": "42%",
                        "3 Wraiths Chance": "58%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "1 Wraith Chance": "27%",
                        "2 Wraiths Chance": "44%",
                        "3 Wraiths Chance": "61%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "1 Wraith Chance": "28%",
                        "2 Wraiths Chance": "46%",
                        "3 Wraiths Chance": "64%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "1 Wraith Chance": "36%",
                        "2 Wraiths Chance": "66%",
                        "3 Wraiths Chance": "96%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "1 Wraith Chance": "38%",
                        "2 Wraiths Chance": "70%",
                        "3 Wraiths Chance": "102%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "1 Wraith Chance": "40%",
                        "2 Wraiths Chance": "74%",
                        "3 Wraiths Chance": "108%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "1 Wraith Chance": "42%",
                        "2 Wraiths Chance": "78%",
                        "3 Wraiths Chance": "114%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "1 Wraith Chance": "44%",
                        "2 Wraiths Chance": "82%",
                        "3 Wraiths Chance": "120%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "1 Wraith Chance": "60%",
                        "2 Wraiths Chance": "110%",
                        "3 Wraiths Chance": "160%"
                    }
                ]
            }
        }
    },
    "pugilist": {
        "specializations": [
            "Barrage Brawler",
            "Impact Brawler"
        ],
        "Barrage Brawler": {
            "Double Punch": {
                "description": "When using Concussion, Arm Crusher, Low Blow, or Corkscrew on their own (not as follow-ups from One-Two Punch or Leading Blow), if the skill fails to inflict its ailment/bind, the user has a chance to use the skill again. Will not activate if the target already has the applicable disable.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance": "12%"
                    },
                    {
                        "level": 2,
                        "Chance": "14%"
                    },
                    {
                        "level": 3,
                        "Chance": "16%"
                    },
                    {
                        "level": 4,
                        "Chance": "18%"
                    },
                    {
                        "level": 5,
                        "Chance": "28%"
                    },
                    {
                        "level": 6,
                        "Chance": "31%"
                    },
                    {
                        "level": 7,
                        "Chance": "34%"
                    },
                    {
                        "level": 8,
                        "Chance": "37%"
                    },
                    {
                        "level": 9,
                        "Chance": "40%"
                    },
                    {
                        "level": 10,
                        "Chance": "50%"
                    }
                ]
            },
            "Status ATK Up": {
                "description": "Increases the users chance of inflicting ailments, binds, and stuns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Base Chance Multiplier": "1.05x"
                    },
                    {
                        "level": 2,
                        "Base Chance Multiplier": "1.06x"
                    },
                    {
                        "level": 3,
                        "Base Chance Multiplier": "1.07x"
                    },
                    {
                        "level": 4,
                        "Base Chance Multiplier": "1.08x"
                    },
                    {
                        "level": 5,
                        "Base Chance Multiplier": "1.12x"
                    },
                    {
                        "level": 6,
                        "Base Chance Multiplier": "1.13x"
                    },
                    {
                        "level": 7,
                        "Base Chance Multiplier": "1.14x"
                    },
                    {
                        "level": 8,
                        "Base Chance Multiplier": "1.15x"
                    },
                    {
                        "level": 9,
                        "Base Chance Multiplier": "1.16x"
                    },
                    {
                        "level": 10,
                        "Base Chance Multiplier": "1.2x"
                    }
                ]
            },
            "Corkscrew": {
                "description": "Deals melee STR-based bash damage to one enemy. Attempts to inflict paralysis on the target.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage": "162%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage": "172%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage": "182%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage": "192%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Damage": "192%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Damage": "204%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Damage": "216%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Damage": "228%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Damage": "240%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "Damage": "240%",
                        "Base Chance": "60%"
                    }
                ]
            },
            "Leading Blow": {
                "description": "Deals melee STR-based bash damage to one enemy. If the target has an ailment and/or binds, follows up with the following skills: Concussion for head bind, Arm Crusher for arm bind, Low Blow for leg bind, and Corkscrew for any ailment. The follow-up skills have a multiplier applied to their damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "One-Two Punch": 5,
                    "Corkscrew": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "Damage": "100%",
                        "Follow-Up Dmg Multiplier": "0.75x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "15",
                        "Damage": "103%",
                        "Follow-Up Dmg Multiplier": "0.78x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "15",
                        "Damage": "106%",
                        "Follow-Up Dmg Multiplier": "0.81x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "15",
                        "Damage": "109%",
                        "Follow-Up Dmg Multiplier": "0.84x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "22",
                        "Damage": "119%",
                        "Follow-Up Dmg Multiplier": "1.04x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "22",
                        "Damage": "123%",
                        "Follow-Up Dmg Multiplier": "1.08x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "22",
                        "Damage": "127%",
                        "Follow-Up Dmg Multiplier": "1.12x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "22",
                        "Damage": "131%",
                        "Follow-Up Dmg Multiplier": "1.16x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "22",
                        "Damage": "135%",
                        "Follow-Up Dmg Multiplier": "1.2x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "30",
                        "Damage": "150%",
                        "Follow-Up Dmg Multiplier": "1.5x"
                    }
                ]
            },
            "Speed Up": {
                "description": "Increases the users action speed, accuracy, and evasion.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Speed Multiplier": "1.11x",
                        "Acc/Evade Increase": "+2.4%"
                    },
                    {
                        "level": 2,
                        "Speed Multiplier": "1.14x",
                        "Acc/Evade Increase": "+2.8%"
                    },
                    {
                        "level": 3,
                        "Speed Multiplier": "1.17x",
                        "Acc/Evade Increase": "+3.2%"
                    },
                    {
                        "level": 4,
                        "Speed Multiplier": "1.2x",
                        "Acc/Evade Increase": "+3.6%"
                    },
                    {
                        "level": 5,
                        "Speed Multiplier": "1.24x",
                        "Acc/Evade Increase": "+5.2%"
                    },
                    {
                        "level": 6,
                        "Speed Multiplier": "1.27x",
                        "Acc/Evade Increase": "+5.8%"
                    },
                    {
                        "level": 7,
                        "Speed Multiplier": "1.3x",
                        "Acc/Evade Increase": "+6.4%"
                    },
                    {
                        "level": 8,
                        "Speed Multiplier": "1.33x",
                        "Acc/Evade Increase": "+7%"
                    },
                    {
                        "level": 9,
                        "Speed Multiplier": "1.36x",
                        "Acc/Evade Increase": "+7.6%"
                    },
                    {
                        "level": 10,
                        "Speed Multiplier": "1.4x",
                        "Acc/Evade Increase": "+10%"
                    }
                ]
            },
            "Lash Out": {
                "description": "Deals multiple instances of melee STR-based bash damage to random enemies. Can hit the same target multiple times. The amount of attacks Lash Out deals is equal to the number of times the user hit an enemy on the last turn. As an example, if the user used One-Two Punch and activated all three follow-ups, Lash Out would hit four times.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Speed Up": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "2",
                        "Damage Per Hit": "120%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "2",
                        "Damage Per Hit": "123%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "2",
                        "Damage Per Hit": "126%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "2",
                        "Damage Per Hit": "129%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "4",
                        "Damage Per Hit": "144%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "4",
                        "Damage Per Hit": "148%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "4",
                        "Damage Per Hit": "152%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "4",
                        "Damage Per Hit": "156%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "4",
                        "Damage Per Hit": "160%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "7",
                        "Damage Per Hit": "180%"
                    }
                ]
            },
            "Cross Counter": {
                "description": "For one turn, when an ally in the same row as the user first takes STR-based damage, the user will deal melee STR-based bash damage to the attacker. Attempts to bind whichever body part was used to attack the damage receiver. If the source was a normal physical attack, Cross Counter (most likely) will attempt to bind the sources arms. Only activates once per turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Overexertion": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Damage": "300%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Damage": "315%",
                        "Base Chance": "52%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Damage": "330%",
                        "Base Chance": "54%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Damage": "345%",
                        "Base Chance": "56%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Damage": "405%",
                        "Base Chance": "68%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "Damage": "425%",
                        "Base Chance": "71%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "Damage": "445%",
                        "Base Chance": "74%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "Damage": "465%",
                        "Base Chance": "77%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "Damage": "485%",
                        "Base Chance": "80%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "8",
                        "Damage": "600%",
                        "Base Chance": "100%"
                    }
                ]
            },
            "Breather": {
                "description": "Can only be used if the user is afflicted with an ailment or bind. Removes all binds and ailments from the user. Increases the users damage on the next turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Damage Increase": "1.2x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Damage Increase": "1.25x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Damage Increase": "1.3x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Damage Increase": "1.35x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Damage Increase": "1.8x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Damage Increase": "1.85x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Damage Increase": "1.9x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Damage Increase": "1.95x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Damage Increase": "2x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Damage Increase": "2.5x"
                    }
                ]
            },
            "Fault Blocker": {
                "description": "Reduces the chance of being afflicted with ailments and binds for party members in the users row for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Chance Multiplier": "0.68x",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Chance Multiplier": "0.63x",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Chance Multiplier": "0.58x",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Chance Multiplier": "0.53x",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Chance Multiplier": "0.53x",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Chance Multiplier": "0.48x",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Chance Multiplier": "0.43x",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Chance Multiplier": "0.38x",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Chance Multiplier": "0.33x",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Chance Multiplier": "0.33x",
                        "Duration": "6"
                    }
                ]
            },
            "Clinch": {
                "description": "Attempts to bind the head, arms, and legs of both one enemy and the user. Each bind is rolled for individually.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Breather": 3,
                    "Fault Blocker": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Enemy Base Chance": "20%",
                        "Self Base Chance": "20%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Enemy Base Chance": "22%",
                        "Self Base Chance": "22%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Enemy Base Chance": "24%",
                        "Self Base Chance": "24%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Enemy Base Chance": "26%",
                        "Self Base Chance": "26%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Enemy Base Chance": "38%",
                        "Self Base Chance": "34%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Enemy Base Chance": "41%",
                        "Self Base Chance": "36%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Enemy Base Chance": "44%",
                        "Self Base Chance": "38%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Enemy Base Chance": "47%",
                        "Self Base Chance": "40%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Enemy Base Chance": "50%",
                        "Self Base Chance": "42%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Enemy Base Chance": "67%",
                        "Self Base Chance": "50%"
                    }
                ]
            }
        },
        "Base": {
            "Brawl Mastery": {
                "description": "Increases damage dealt with cesti.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "2%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "3%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "4%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "5%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "8%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "9%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "12%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "15%"
                    }
                ]
            },
            "Phys ATK Up": {
                "description": "Passively increases physical (cut/stab/bash) damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Attack Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Attack Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Attack Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Attack Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Attack Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Attack Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Attack Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Attack Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Attack Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Attack Increase": "15%"
                    }
                ]
            },
            "Concussion / Arm Crusher / Low Blow": {
                "description": "Deals melee STR-based bash damage to one enemy. Attempts to bind the targets head (Concussion), arms (Arm Crusher), or legs (Low Blow).",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Damage": "150%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Damage": "159%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Damage": "168%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Damage": "177%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Damage": "177%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "Damage": "189%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "Damage": "201%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "Damage": "213%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "Damage": "225%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "8",
                        "Damage": "225%",
                        "Base Chance": "50%"
                    }
                ]
            },
            "One-Two Punch": {
                "description": "Deals melee STR-based bash damage to one enemy. The user has a chance to follow up the initial One-Two Punch hit with Concussion, Arm Crusher, and Low Blow, if the target does not have the body part for that respective skill bound. If the targets arms are bound, for example, Concussion and Low Blow can activate, but Arm Crusher cannot. If the target is completely bound, One-Two Punch will only deal its initial damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "<strong>Concussion</strong>": 3,
                    "<strong>Arm Crusher</strong>": 3,
                    "<strong>Low Blow</strong>": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage": "100%",
                        "Follow-Up Chance": "34%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage": "103%",
                        "Follow-Up Chance": "36%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage": "106%",
                        "Follow-Up Chance": "38%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage": "109%",
                        "Follow-Up Chance": "40%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Damage": "119%",
                        "Follow-Up Chance": "48%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Damage": "123%",
                        "Follow-Up Chance": "50%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Damage": "127%",
                        "Follow-Up Chance": "52%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Damage": "131%",
                        "Follow-Up Chance": "54%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Damage": "135%",
                        "Follow-Up Chance": "56%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "13",
                        "Damage": "150%",
                        "Follow-Up Chance": "66%"
                    }
                ]
            },
            "Blood Wrath": {
                "description": "When the user loses HP, they have a chance to attack an enemy with their equipped weapon.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance": "16%"
                    },
                    {
                        "level": 2,
                        "Chance": "18%"
                    },
                    {
                        "level": 3,
                        "Chance": "20%"
                    },
                    {
                        "level": 4,
                        "Chance": "22%"
                    },
                    {
                        "level": 5,
                        "Chance": "32%"
                    },
                    {
                        "level": 6,
                        "Chance": "34%"
                    },
                    {
                        "level": 7,
                        "Chance": "36%"
                    },
                    {
                        "level": 8,
                        "Chance": "38%"
                    },
                    {
                        "level": 9,
                        "Chance": "40%"
                    },
                    {
                        "level": 10,
                        "Chance": "50%"
                    }
                ]
            },
            "Overexertion": {
                "description": "Places a buff on one party member that increases their cut/stab/bash damage, at the cost of losing a percentage of their current HP whenever they act, for 4 turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "<strong>Blood Wrath</strong>": 1
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Attack Increase": "40%",
                        "% Current HP Loss": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Attack Increase": "40%",
                        "% Current HP Loss": "23%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Attack Increase": "40%",
                        "% Current HP Loss": "16%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Attack Increase": "40%",
                        "% Current HP Loss": "9%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "4",
                        "Attack Increase": "65%",
                        "% Current HP Loss": "40%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "4",
                        "Attack Increase": "65%",
                        "% Current HP Loss": "33%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "4",
                        "Attack Increase": "65%",
                        "% Current HP Loss": "26%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "4",
                        "Attack Increase": "65%",
                        "% Current HP Loss": "19%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "4",
                        "Attack Increase": "65%",
                        "% Current HP Loss": "12%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "5",
                        "Attack Increase": "100%",
                        "% Current HP Loss": "50%"
                    }
                ]
            },
            "Thunder Fist": {
                "description": "Deals melee STR-based bash+volt damage to one enemy. If the target is not killed by Thunder Fist, the user suffers backlash damage--a percentage of their current HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage": "200%",
                        "% Damage as Backlash": "20%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage": "208%",
                        "% Damage as Backlash": "20%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage": "216%",
                        "% Damage as Backlash": "20%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage": "224%",
                        "% Damage as Backlash": "20%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Damage": "300%",
                        "% Damage as Backlash": "35%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Damage": "312%",
                        "% Damage as Backlash": "35%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Damage": "324%",
                        "% Damage as Backlash": "35%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Damage": "336%",
                        "% Damage as Backlash": "35%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Damage": "348%",
                        "% Damage as Backlash": "35%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "Damage": "450%",
                        "% Damage as Backlash": "50%"
                    }
                ]
            },
            "Devils Fist": {
                "description": "Consumes a percentage of the users current HP to deal melee STR-based bash damage to one enemy, with splash damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "<strong>Thunder Fist</strong>": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "180%",
                        "% Current HP Loss": "35%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "190%",
                        "% Current HP Loss": "35%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "200%",
                        "% Current HP Loss": "35%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "210%",
                        "% Current HP Loss": "35%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "11",
                        "Damage": "210%",
                        "% Current HP Loss": "20%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "11",
                        "Damage": "225%",
                        "% Current HP Loss": "20%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "11",
                        "Damage": "240%",
                        "% Current HP Loss": "20%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "11",
                        "Damage": "255%",
                        "% Current HP Loss": "20%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "11",
                        "Damage": "270%",
                        "% Current HP Loss": "20%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "16",
                        "Damage": "270%",
                        "% Current HP Loss": "5%"
                    }
                ]
            }
        },
        "Impact Brawler": {
            "Fortitude": {
                "description": "Increases the users damage when their current HP is below a certain percentage of their maximum HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "% Max HP Threshold": "30%",
                        "Damage Increase": "24%"
                    },
                    {
                        "level": 2,
                        "% Max HP Threshold": "31%",
                        "Damage Increase": "25%"
                    },
                    {
                        "level": 3,
                        "% Max HP Threshold": "32%",
                        "Damage Increase": "26%"
                    },
                    {
                        "level": 4,
                        "% Max HP Threshold": "33%",
                        "Damage Increase": "27%"
                    },
                    {
                        "level": 5,
                        "% Max HP Threshold": "39%",
                        "Damage Increase": "32%"
                    },
                    {
                        "level": 6,
                        "% Max HP Threshold": "40%",
                        "Damage Increase": "34%"
                    },
                    {
                        "level": 7,
                        "% Max HP Threshold": "41%",
                        "Damage Increase": "36%"
                    },
                    {
                        "level": 8,
                        "% Max HP Threshold": "42%",
                        "Damage Increase": "38%"
                    },
                    {
                        "level": 9,
                        "% Max HP Threshold": "43%",
                        "Damage Increase": "40%"
                    },
                    {
                        "level": 10,
                        "% Max HP Threshold": "50%",
                        "Damage Increase": "50%"
                    }
                ]
            },
            "HP Up": {
                "description": "Increases the users maximum HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max HP Increase": "5%"
                    },
                    {
                        "level": 2,
                        "Max HP Increase": "6%"
                    },
                    {
                        "level": 3,
                        "Max HP Increase": "7%"
                    },
                    {
                        "level": 4,
                        "Max HP Increase": "8%"
                    },
                    {
                        "level": 5,
                        "Max HP Increase": "12%"
                    },
                    {
                        "level": 6,
                        "Max HP Increase": "13%"
                    },
                    {
                        "level": 7,
                        "Max HP Increase": "14%"
                    },
                    {
                        "level": 8,
                        "Max HP Increase": "15%"
                    },
                    {
                        "level": 9,
                        "Max HP Increase": "16%"
                    },
                    {
                        "level": 10,
                        "Max HP Increase": "20%"
                    }
                ]
            },
            "Vajra Stance": {
                "description": "Increases the users rows defense against physical (cut/stab/bash) attacks for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Defense Increase": "11%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Defense Increase": "13%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Defense Increase": "15%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Defense Increase": "17%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Defense Increase": "17%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Defense Increase": "19%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Defense Increase": "21%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Defense Increase": "22%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Defense Increase": "25%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Defense Increase": "25%",
                        "Duration": "6"
                    }
                ]
            },
            "Soul Crusher": {
                "description": "Deals melee STR-based bash damage to all enemies. Heals the user for a percentage of the damage dealt.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage": "125%",
                        "% Damage as Heal": "10%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage": "131%",
                        "% Damage as Heal": "10%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage": "137%",
                        "% Damage as Heal": "10%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage": "143%",
                        "% Damage as Heal": "10%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Damage": "173%",
                        "% Damage as Heal": "15%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "16",
                        "Damage": "181%",
                        "% Damage as Heal": "15%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Damage": "189%",
                        "% Damage as Heal": "15%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "16",
                        "Damage": "197%",
                        "% Damage as Heal": "15%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "16",
                        "Damage": "205%",
                        "% Damage as Heal": "15%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "25",
                        "Damage": "250%",
                        "% Damage as Heal": "25%"
                    }
                ]
            },
            "Abyssal Killer": {
                "description": "For one turn, the user will endure mortal damage once. If the user endured a fatal hit through usage of Abyssal Killer, their damage on the next turn is increased by the value listed here multiplied by the square root of the square root of the percentage of the users max HP the endured hit wouldve overkilled them by.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Vajra Stance": 5,
                    "Soul Crusher": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "Base Damage Increase": "0.4x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "15",
                        "Base Damage Increase": "0.43x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "15",
                        "Base Damage Increase": "0.46x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "15",
                        "Base Damage Increase": "0.49x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "18",
                        "Base Damage Increase": "0.8x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "18",
                        "Base Damage Increase": "0.85x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "18",
                        "Base Damage Increase": "0.9x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "18",
                        "Base Damage Increase": "0.95x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "18",
                        "Base Damage Increase": "1x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "24",
                        "Base Damage Increase": "1.5x"
                    }
                ]
            },
            "Titan Killer": {
                "description": "Deals melee STR-based bash damage to one enemy. Damage is increased if the target has a higher percentage of their max HP than the user does--ie. if the user has 50% of their max HP and the target has 80%, the damage is amplified.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Base Damage": "100%",
                        "Amplified Damage": "400%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Base Damage": "102%",
                        "Amplified Damage": "407%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Base Damage": "104%",
                        "Amplified Damage": "414%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Base Damage": "106%",
                        "Amplified Damage": "421%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Base Damage": "121%",
                        "Amplified Damage": "479%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "Base Damage": "124%",
                        "Amplified Damage": "490%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "Base Damage": "127%",
                        "Amplified Damage": "501%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "Base Damage": "130%",
                        "Amplified Damage": "512%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "Base Damage": "133%",
                        "Amplified Damage": "523%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "7",
                        "Base Damage": "150%",
                        "Amplified Damage": "600%"
                    }
                ]
            },
            "Deaths Edge": {
                "description": "Deals melee STR-based bash damage to one enemy. Damage is affected in some way by how low the partys HP is.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Overexertion": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Base Damage": "150%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Base Damage": "154%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Base Damage": "158%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Base Damage": "162%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Base Damage": "180%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Base Damage": "185%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Base Damage": "190%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Base Damage": "195%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Base Damage": "200%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Base Damage": "225%"
                    }
                ]
            },
            "Heavenly Aid": {
                "description": "Increases the users damage on the next turn based on how much HP they recover on the turn that Heavenly Aid is casted. If the user does not recover any HP, Heavenly Aid has no effect. The final charge amount is approximately the value listed here multiplied by the percentage of their max HP the user recovered last turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Titan Killer": 3,
                    "Deaths Edge": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Base Damage Increase": "1.7x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Base Damage Increase": "1.74x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Base Damage Increase": "1.78x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Base Damage Increase": "1.82x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Base Damage Increase": "2.2x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Base Damage Increase": "2.26x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Base Damage Increase": "2.32x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Base Damage Increase": "2.38x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Base Damage Increase": "2.44x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Base Damage Increase": "3x"
                    }
                ]
            },
            "Satans Fist": {
                "description": "Consumes a percentage of the users current HP to deal melee STR-based bash damage to one row of enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Devils Fist": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "215%",
                        "% Current HP Cost": "50%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "230%",
                        "% Current HP Cost": "50%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "245%",
                        "% Current HP Cost": "50%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "260%",
                        "% Current HP Cost": "50%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "13",
                        "Damage": "260%",
                        "% Current HP Cost": "30%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "13",
                        "Damage": "280%",
                        "% Current HP Cost": "30%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "13",
                        "Damage": "300%",
                        "% Current HP Cost": "30%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "13",
                        "Damage": "320%",
                        "% Current HP Cost": "30%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "13",
                        "Damage": "340%",
                        "% Current HP Cost": "30%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Damage": "340%",
                        "% Current HP Cost": "10%"
                    }
                ]
            },
            "Status DEF Up": {
                "description": "Reduces the users chance of being afflicted with ailments and binds.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance Multiplier": "0.92x"
                    },
                    {
                        "level": 2,
                        "Chance Multiplier": "0.90x"
                    },
                    {
                        "level": 3,
                        "Chance Multiplier": "0.88x"
                    },
                    {
                        "level": 4,
                        "Chance Multiplier": "0.86x"
                    },
                    {
                        "level": 5,
                        "Chance Multiplier": "0.82x"
                    },
                    {
                        "level": 6,
                        "Chance Multiplier": "0.8x"
                    },
                    {
                        "level": 7,
                        "Chance Multiplier": "0.78x"
                    },
                    {
                        "level": 8,
                        "Chance Multiplier": "0.76x"
                    },
                    {
                        "level": 9,
                        "Chance Multiplier": "0.74x"
                    },
                    {
                        "level": 10,
                        "Chance Multiplier": "0.7x"
                    }
                ]
            }
        }
    },
    "rover": {
        "specializations": [
            "Flying Falcon",
            "Hunting Hound"
        ],
        "Base": {
            "Bow Mastery": {
                "description": "Increases damage dealt with bows.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "2%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "3%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "4%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "5%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "8%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "9%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "12%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "15%"
                    }
                ]
            },
            "Animal Therapy": {
                "description": "When a hawk or hound is summoned, restores all party members and summons HP at the end of the turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Healing Power": "1%"
                    },
                    {
                        "level": 2,
                        "Healing Power": "3%"
                    },
                    {
                        "level": 3,
                        "Healing Power": "5%"
                    },
                    {
                        "level": 4,
                        "Healing Power": "7%"
                    },
                    {
                        "level": 5,
                        "Healing Power": "15%"
                    },
                    {
                        "level": 6,
                        "Healing Power": "17%"
                    },
                    {
                        "level": 7,
                        "Healing Power": "19%"
                    },
                    {
                        "level": 8,
                        "Healing Power": "21%"
                    },
                    {
                        "level": 9,
                        "Healing Power": "23%"
                    },
                    {
                        "level": 10,
                        "Healing Power": "35%"
                    }
                ]
            },
            "Hawk/Hound Whistle": {
                "description": "Summons a hawk/hound. The hawk/hounds stats (HP, STR, INT, VIT, WIS, AGI, LUC) are multiplied by a bonus provided by Hawk/Hound Whistle. Can be used in the Labyrinth.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "25",
                        "Stat Multiplier": "1x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "25",
                        "Stat Multiplier": "1.03x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "25",
                        "Stat Multiplier": "1.06x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "25",
                        "Stat Multiplier": "1.09x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "45",
                        "Stat Multiplier": "1.19x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "45",
                        "Stat Multiplier": "1.23x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "45",
                        "Stat Multiplier": "1.27x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "45",
                        "Stat Multiplier": "1.31x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "45",
                        "Stat Multiplier": "1.35x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "75",
                        "Stat Multiplier": "1.5x"
                    }
                ]
            },
            "Hawk Arrow": {
                "description": "Requires a hawk to use. Deals ranged STR-based stab damage to one enemy, with splash damage. After the attack, the hawk will attack the enemies hit with splash damage with a ranged STR-based cut attack.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Hawk Whistle": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "User Damage": "100%",
                        "Hawk Damage": "333%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "User Damage": "103%",
                        "Hawk Damage": "345%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "User Damage": "106%",
                        "Hawk Damage": "357%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "User Damage": "109%",
                        "Hawk Damage": "369%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "User Damage": "119%",
                        "Hawk Damage": "417%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "User Damage": "123%",
                        "Hawk Damage": "434%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "User Damage": "127%",
                        "Hawk Damage": "451%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "User Damage": "131%",
                        "Hawk Damage": "467%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "User Damage": "135%",
                        "Hawk Damage": "484%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "User Damage": "150%",
                        "Hawk Damage": "550%"
                    }
                ]
            },
            "Wing Thrash": {
                "description": "Requires a hawk to use. Deals ranged STR-based stab damage to one enemy. After the attack, the hawk will attack the targets row with ranged STR-based cut damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Hawk Whistle": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "9",
                        "User Damage": "80%",
                        "Hawk Damage": "200%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "9",
                        "User Damage": "82%",
                        "Hawk Damage": "207%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "9",
                        "User Damage": "84%",
                        "Hawk Damage": "217%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "9",
                        "User Damage": "86%",
                        "Hawk Damage": "221%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "13",
                        "User Damage": "95%",
                        "Hawk Damage": "257%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "13",
                        "User Damage": "98%",
                        "Hawk Damage": "267%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "13",
                        "User Damage": "101%",
                        "Hawk Damage": "277%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "13",
                        "User Damage": "104%",
                        "Hawk Damage": "287%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "13",
                        "User Damage": "107%",
                        "Hawk Damage": "297%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "User Damage": "120%",
                        "Hawk Damage": "350%"
                    }
                ]
            },
            "Aid Command": {
                "description": "Requires a hound to use. Commands the hound to heal one ally. Also cures the targeted allys ailments.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Hound Whistle": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Static HP Heal": "30",
                        "% Max HP Heal": "20%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Static HP Heal": "36",
                        "% Max HP Heal": "21%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Static HP Heal": "42",
                        "% Max HP Heal": "22%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Static HP Heal": "48",
                        "% Max HP Heal": "23%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Static HP Heal": "78",
                        "% Max HP Heal": "26%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Static HP Heal": "86",
                        "% Max HP Heal": "27%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Static HP Heal": "94",
                        "% Max HP Heal": "28%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Static HP Heal": "102",
                        "% Max HP Heal": "29%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Static HP Heal": "110",
                        "% Max HP Heal": "30%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "14",
                        "Static HP Heal": "150",
                        "% Max HP Heal": "34%"
                    }
                ]
            },
            "Hunter Shot": {
                "description": "Requires a hound to use. Deals ranged STR-based stab damage to one enemy. After the attack, the hound will attempt to bind the targets arms and legs.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Hound Whistle": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage": "150%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage": "158%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage": "166%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage": "174%",
                        "Base Chance": "30%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Damage": "174%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Damage": "183%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Damage": "192%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Damage": "201%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Damage": "210%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "13",
                        "Damage": "210%",
                        "Base Chance": "50%"
                    }
                ]
            },
            "Brushing": {
                "description": "Restores the hound and/or hawks HP at the end of the turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Healing Power": "20%"
                    },
                    {
                        "level": 2,
                        "Healing Power": "25%"
                    },
                    {
                        "level": 3,
                        "Healing Power": "30%"
                    },
                    {
                        "level": 4,
                        "Healing Power": "35%"
                    },
                    {
                        "level": 5,
                        "Healing Power": "53%"
                    },
                    {
                        "level": 6,
                        "Healing Power": "59%"
                    },
                    {
                        "level": 7,
                        "Healing Power": "65%"
                    },
                    {
                        "level": 8,
                        "Healing Power": "71%"
                    },
                    {
                        "level": 9,
                        "Healing Power": "77%"
                    },
                    {
                        "level": 10,
                        "Healing Power": "100%"
                    }
                ]
            },
            "Target Arrow": {
                "description": "Deals ranged STR-based stab damage to one enemy. Reduces the targets physical defense for a set amount of turns. The defense debuff also forces the hound and/or hawk to attack the debuffed enemy, if they are performing a normal attack on that turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage": "118%",
                        "Defense Decrease": "10%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage": "125%",
                        "Defense Decrease": "10%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage": "132%",
                        "Defense Decrease": "10%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage": "139%",
                        "Defense Decrease": "10%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Damage": "139%",
                        "Defense Decrease": "20%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Damage": "148%",
                        "Defense Decrease": "20%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Damage": "157%",
                        "Defense Decrease": "20%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Damage": "166%",
                        "Defense Decrease": "20%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Damage": "175%",
                        "Defense Decrease": "20%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "Damage": "175%",
                        "Defense Decrease": "30%",
                        "Duration": "6"
                    }
                ]
            }
        },
        "Flying Falcon": {
            "Sky Patrol": {
                "description": "When a hawk is summoned, there is a chance theyll find food while walking around in the Labyrinth. What this entails specifically is unknown, as the skills themselves do not provide info.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": []
            },
            "Finishing Shot": {
                "description": "When an enemy is below a certain HP threshold after the user damages them, the user will perform a normal attack on them.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Threshold": "10%"
                    },
                    {
                        "level": 2,
                        "Threshold": "11%"
                    },
                    {
                        "level": 3,
                        "Threshold": "12%"
                    },
                    {
                        "level": 4,
                        "Threshold": "13%"
                    },
                    {
                        "level": 5,
                        "Threshold": "19%"
                    },
                    {
                        "level": 6,
                        "Threshold": "20%"
                    },
                    {
                        "level": 7,
                        "Threshold": "21%"
                    },
                    {
                        "level": 8,
                        "Threshold": "22%"
                    },
                    {
                        "level": 9,
                        "Threshold": "23%"
                    },
                    {
                        "level": 10,
                        "Threshold": "30%"
                    }
                ]
            },
            "Aerial Talons": {
                "description": "Requires a hawk to use. Commands the hawk to attack one enemy. The hawk will then attack the target with a ranged STR-based cut attack. Attempts to bind the targets head.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Hawk Arrow": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "334%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "349%",
                        "Base Chance": "26%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "364%",
                        "Base Chance": "27%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "379%",
                        "Base Chance": "28%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Damage": "471%",
                        "Base Chance": "37%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Damage": "491%",
                        "Base Chance": "38%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Damage": "511%",
                        "Base Chance": "39%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Damage": "531%",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage": "551%",
                        "Base Chance": "41%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "17",
                        "Damage": "668%",
                        "Base Chance": "50%"
                    }
                ]
            },
            "Ice Peck": {
                "description": "Requires a hawk to use. Deals ranged STR-based stab damage to all enemies. After the attack, the hawk will follow up with ranged STR-based ice damage to all enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Wing Thrash": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "12",
                        "User Damage": "50%",
                        "Hawk Damage": "120%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "12",
                        "User Damage": "53%",
                        "Hawk Damage": "124%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "12",
                        "User Damage": "56%",
                        "Hawk Damage": "128%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "12",
                        "User Damage": "59%",
                        "Hawk Damage": "132%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "17",
                        "User Damage": "70%",
                        "Hawk Damage": "150%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "17",
                        "User Damage": "74%",
                        "Hawk Damage": "155%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "17",
                        "User Damage": "78%",
                        "Hawk Damage": "160%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "17",
                        "User Damage": "82%",
                        "Hawk Damage": "165%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "17",
                        "User Damage": "86%",
                        "Hawk Damage": "170%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "24",
                        "User Damage": "100%",
                        "Hawk Damage": "200%"
                    }
                ]
            },
            "Sky Dive": {
                "description": "Requires a hawk to use. Commands the hawk to attack one enemy three turns later with ranged STR-based cut damage at the start of the turn. Attempts to bind the targets head. The hawk cannot perform other actions during the delay.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Aerial Talons": 5,
                    "Ice Peck": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "16",
                        "Damage": "1085%",
                        "Base Chance": "65%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "16",
                        "Damage": "1135%",
                        "Base Chance": "68%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "16",
                        "Damage": "1185%",
                        "Base Chance": "71%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "16",
                        "Damage": "1235%",
                        "Base Chance": "74%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "23",
                        "Damage": "1452%",
                        "Base Chance": "84%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "23",
                        "Damage": "1535%",
                        "Base Chance": "88%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "23",
                        "Damage": "1620%",
                        "Base Chance": "92%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "23",
                        "Damage": "1703%",
                        "Base Chance": "96%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "23",
                        "Damage": "1787%",
                        "Base Chance": "100%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "32",
                        "Damage": "2170%",
                        "Base Chance": "120%"
                    }
                ]
            },
            "Phys ATK Up": {
                "description": "Passively increases physical (cut/stab/bash) damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Attack Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Attack Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Attack Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Attack Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Attack Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Attack Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Attack Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Attack Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Attack Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Attack Increase": "15%"
                    }
                ]
            },
            "Speed Up": {
                "description": "Increases the users action speed, accuracy, and evasion.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Speed Multiplier": "1.11x",
                        "Acc/Evade Increase": "+2.4%"
                    },
                    {
                        "level": 2,
                        "Speed Multiplier": "1.14x",
                        "Acc/Evade Increase": "+2.8%"
                    },
                    {
                        "level": 3,
                        "Speed Multiplier": "1.17x",
                        "Acc/Evade Increase": "+3.2%"
                    },
                    {
                        "level": 4,
                        "Speed Multiplier": "1.2x",
                        "Acc/Evade Increase": "+3.6%"
                    },
                    {
                        "level": 5,
                        "Speed Multiplier": "1.24x",
                        "Acc/Evade Increase": "+5.2%"
                    },
                    {
                        "level": 6,
                        "Speed Multiplier": "1.27x",
                        "Acc/Evade Increase": "+5.8%"
                    },
                    {
                        "level": 7,
                        "Speed Multiplier": "1.3x",
                        "Acc/Evade Increase": "+6.4%"
                    },
                    {
                        "level": 8,
                        "Speed Multiplier": "1.33x",
                        "Acc/Evade Increase": "+7%"
                    },
                    {
                        "level": 9,
                        "Speed Multiplier": "1.36x",
                        "Acc/Evade Increase": "+7.6%"
                    },
                    {
                        "level": 10,
                        "Speed Multiplier": "1.4x",
                        "Acc/Evade Increase": "+10%"
                    }
                ]
            },
            "Power Shot": {
                "description": "Deals ranged STR-based stab damage to one enemy, with line-piercing effect.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Target Arrow": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "9",
                        "Damage": "200%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "9",
                        "Damage": "205%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "9",
                        "Damage": "210%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "9",
                        "Damage": "215%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "Damage": "250%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "15",
                        "Damage": "260%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "15",
                        "Damage": "270%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "15",
                        "Damage": "280%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "15",
                        "Damage": "290%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "21",
                        "Damage": "340%"
                    }
                ]
            },
            "Million Arrows": {
                "description": "None",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Power Shot": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "13",
                        "Damage Per Hit": "100%",
                        "Minimum Hits": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "13",
                        "Damage Per Hit": "112%",
                        "Minimum Hits": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "13",
                        "Damage Per Hit": "124%",
                        "Minimum Hits": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "13",
                        "Damage Per Hit": "136%",
                        "Minimum Hits": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "19",
                        "Damage Per Hit": "136%",
                        "Minimum Hits": "6"
                    },
                    {
                        "level": 6,
                        "TP Cost": "19",
                        "Damage Per Hit": "152%",
                        "Minimum Hits": "6"
                    },
                    {
                        "level": 7,
                        "TP Cost": "19",
                        "Damage Per Hit": "168%",
                        "Minimum Hits": "6"
                    },
                    {
                        "level": 8,
                        "TP Cost": "19",
                        "Damage Per Hit": "184%",
                        "Minimum Hits": "6"
                    },
                    {
                        "level": 9,
                        "TP Cost": "19",
                        "Damage Per Hit": "200%",
                        "Minimum Hits": "6"
                    },
                    {
                        "level": 10,
                        "TP Cost": "27",
                        "Damage Per Hit": "200%",
                        "Minimum Hits": "8"
                    }
                ]
            },
            "Feather Storm": {
                "description": "Requires a hawk to use. Commands the hawk to attempt to inflict blind on one row of enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Base Chance": "40%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Base Chance": "41%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Base Chance": "42%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Base Chance": "43%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "6",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "6",
                        "Base Chance": "52%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "6",
                        "Base Chance": "54%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "6",
                        "Base Chance": "56%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "6",
                        "Base Chance": "58%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "9",
                        "Base Chance": "70%"
                    }
                ]
            }
        },
        "Hunting Hound": {
            "Ground Patrol": {
                "description": "When a hound is summoned, there is a chance theyll find food while walking around in the Labyrinth. What this entails specifically is unknown, as the skills themselves do not provide info.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": []
            },
            "Healing Up": {
                "description": "Increases both the static amount of HP restored and the percentage of maximum HP restored by the hounds healing skills.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Static Restore Increase": "6",
                        "% Max HP Restore Increase": "2%"
                    },
                    {
                        "level": 2,
                        "Static Restore Increase": "9",
                        "% Max HP Restore Increase": "2%"
                    },
                    {
                        "level": 3,
                        "Static Restore Increase": "12",
                        "% Max HP Restore Increase": "2%"
                    },
                    {
                        "level": 4,
                        "Static Restore Increase": "15",
                        "% Max HP Restore Increase": "2%"
                    },
                    {
                        "level": 5,
                        "Static Restore Increase": "19",
                        "% Max HP Restore Increase": "4%"
                    },
                    {
                        "level": 6,
                        "Static Restore Increase": "22",
                        "% Max HP Restore Increase": "4%"
                    },
                    {
                        "level": 7,
                        "Static Restore Increase": "25",
                        "% Max HP Restore Increase": "4%"
                    },
                    {
                        "level": 8,
                        "Static Restore Increase": "28",
                        "% Max HP Restore Increase": "4%"
                    },
                    {
                        "level": 9,
                        "Static Restore Increase": "31",
                        "% Max HP Restore Increase": "4%"
                    },
                    {
                        "level": 10,
                        "Static Restore Increase": "35",
                        "% Max HP Restore Increase": "7%"
                    }
                ]
            },
            "Status ATK Up": {
                "description": "Increases the users chance of inflicting ailments, binds, and stuns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Base Chance Multiplier": "1.05x"
                    },
                    {
                        "level": 2,
                        "Base Chance Multiplier": "1.06x"
                    },
                    {
                        "level": 3,
                        "Base Chance Multiplier": "1.07x"
                    },
                    {
                        "level": 4,
                        "Base Chance Multiplier": "1.08x"
                    },
                    {
                        "level": 5,
                        "Base Chance Multiplier": "1.12x"
                    },
                    {
                        "level": 6,
                        "Base Chance Multiplier": "1.13x"
                    },
                    {
                        "level": 7,
                        "Base Chance Multiplier": "1.14x"
                    },
                    {
                        "level": 8,
                        "Base Chance Multiplier": "1.15x"
                    },
                    {
                        "level": 9,
                        "Base Chance Multiplier": "1.16x"
                    },
                    {
                        "level": 10,
                        "Base Chance Multiplier": "1.2x"
                    }
                ]
            },
            "TP Up": {
                "description": "Increases the users maximum TP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max TP Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Max TP Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Max TP Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Max TP Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Max TP Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Max TP Increase": "19%"
                    },
                    {
                        "level": 7,
                        "Max TP Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Max TP Increase": "23%"
                    },
                    {
                        "level": 9,
                        "Max TP Increase": "25%"
                    },
                    {
                        "level": 10,
                        "Max TP Increase": "30%"
                    }
                ]
            },
            "Menacing Howl": {
                "description": "Requires a hound to use. Commands the hound to attempt to inflict panic on all enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Base Chance": "26%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Base Chance": "27%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Base Chance": "28%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Base Chance": "32%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Base Chance": "33%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Base Chance": "34%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Base Chance": "35%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Base Chance": "36%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "13",
                        "Base Chance": "40%"
                    }
                ]
            },
            "Guard Command": {
                "description": "Requires a hound to use. Commands the hound to take all damage for one party member for one turn. For levels 1-9, the hound takes extra damage from any attacks received. At the end of the turn, the hound will heal the party member it was tanking for.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Aid Command": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Damage Received": "1.5x",
                        "Static HP Restore": "45",
                        "% Max HP Restore": "14%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Damage Received": "1.46x",
                        "Static HP Restore": "45",
                        "% Max HP Restore": "15%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Damage Received": "1.42x",
                        "Static HP Restore": "45",
                        "% Max HP Restore": "16%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Damage Received": "1.38x",
                        "Static HP Restore": "45",
                        "% Max HP Restore": "17%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Damage Received": "1.25x",
                        "Static HP Restore": "60",
                        "% Max HP Restore": "19%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Damage Received": "1.22x",
                        "Static HP Restore": "60",
                        "% Max HP Restore": "20%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Damage Received": "1.19x",
                        "Static HP Restore": "60",
                        "% Max HP Restore": "21%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Damage Received": "1.16x",
                        "Static HP Restore": "60",
                        "% Max HP Restore": "22%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Damage Received": "1.13x",
                        "Static HP Restore": "60",
                        "% Max HP Restore": "23%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "Damage Received": "1x",
                        "Static HP Restore": "80",
                        "% Max HP Restore": "25%"
                    }
                ]
            },
            "Foot Pierce": {
                "description": "Requires a hound to use. Deals ranged STR-based stab damage to one row of enemies. Attempts to inflict leg bind on hit targets. If any enemy hit by Foot Pierce has their legs bound (this can include if their legs were already bound before being hit), the hound will follow up with a melee STR-based bash attack.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Hunter Shot": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "User Damage": "100%",
                        "Base Chance": "25%",
                        "Dog Damage": "300%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "User Damage": "106%",
                        "Base Chance": "25%",
                        "Dog Damage": "340%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "User Damage": "112%",
                        "Base Chance": "25%",
                        "Dog Damage": "380%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "User Damage": "118%",
                        "Base Chance": "25%",
                        "Dog Damage": "420%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "15",
                        "User Damage": "118%",
                        "Base Chance": "35%",
                        "Dog Damage": "420%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "15",
                        "User Damage": "126%",
                        "Base Chance": "35%",
                        "Dog Damage": "465%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "15",
                        "User Damage": "134%",
                        "Base Chance": "35%",
                        "Dog Damage": "510%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "15",
                        "User Damage": "142%",
                        "Base Chance": "35%",
                        "Dog Damage": "555%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "15",
                        "User Damage": "150%",
                        "Base Chance": "35%",
                        "Dog Damage": "600%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "User Damage": "150%",
                        "Base Chance": "50%",
                        "Dog Damage": "600%"
                    }
                ]
            },
            "Medicinal Lick": {
                "description": "Requires a hound to use. Commands the hound to heal random allies a set number of times. Can only heal a party member twice at most.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Guard Command": 5,
                    "Foot Pierce": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Static HP Restore": "45",
                        "% Max HP Restore": "9%",
                        "Number of Heals": "5"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Static HP Restore": "48",
                        "% Max HP Restore": "10%",
                        "Number of Heals": "5"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Static HP Restore": "51",
                        "% Max HP Restore": "11%",
                        "Number of Heals": "5"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Static HP Restore": "54",
                        "% Max HP Restore": "12%",
                        "Number of Heals": "5"
                    },
                    {
                        "level": 5,
                        "TP Cost": "17",
                        "Static HP Restore": "54",
                        "% Max HP Restore": "12%",
                        "Number of Heals": "7"
                    },
                    {
                        "level": 6,
                        "TP Cost": "17",
                        "Static HP Restore": "58",
                        "% Max HP Restore": "14%",
                        "Number of Heals": "7"
                    },
                    {
                        "level": 7,
                        "TP Cost": "17",
                        "Static HP Restore": "62",
                        "% Max HP Restore": "16%",
                        "Number of Heals": "7"
                    },
                    {
                        "level": 8,
                        "TP Cost": "17",
                        "Static HP Restore": "66",
                        "% Max HP Restore": "18%",
                        "Number of Heals": "7"
                    },
                    {
                        "level": 9,
                        "TP Cost": "17",
                        "Static HP Restore": "70",
                        "% Max HP Restore": "20%",
                        "Number of Heals": "7"
                    },
                    {
                        "level": 10,
                        "TP Cost": "25",
                        "Static HP Restore": "70",
                        "% Max HP Restore": "20%",
                        "Number of Heals": "9"
                    }
                ]
            },
            "Arc Shot": {
                "description": "Deals ranged STR-based stab damage to one enemy. Damage is multiplied by 2.5x if hitting an enemy in the back row.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Target Arrow": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Front Row Damage": "160%",
                        "Back Row Damage": "400%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Front Row Damage": "165%",
                        "Back Row Damage": "413%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Front Row Damage": "170%",
                        "Back Row Damage": "425%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Front Row Damage": "175%",
                        "Back Row Damage": "438%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Front Row Damage": "215%",
                        "Back Row Damage": "538%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Front Row Damage": "220%",
                        "Back Row Damage": "550%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Front Row Damage": "225%",
                        "Back Row Damage": "563%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Front Row Damage": "230%",
                        "Back Row Damage": "575%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Front Row Damage": "235%",
                        "Back Row Damage": "588%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Front Row Damage": "280%",
                        "Back Row Damage": "700%"
                    }
                ]
            },
            "Stun Shot": {
                "description": "Requires a hound to use. Deals ranged STR-based stab damage to one enemy. After use, the hound will attempt to stun the target.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Arc Shot": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "9",
                        "Damage": "200%",
                        "Base Chance": "35%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "9",
                        "Damage": "220%",
                        "Base Chance": "35%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "9",
                        "Damage": "240%",
                        "Base Chance": "35%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "9",
                        "Damage": "260%",
                        "Base Chance": "35%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "13",
                        "Damage": "260%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "13",
                        "Damage": "285%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "13",
                        "Damage": "310%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "13",
                        "Damage": "335%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "13",
                        "Damage": "360%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Damage": "360%",
                        "Base Chance": "65%"
                    }
                ]
            }
        }
    },
    "shaman": {
        "specializations": [
            "Divine Herald",
            "Divine Punisher"
        ],
        "Base": {
            "Prayer Mastery": {
                "description": "Increases the speed and reduces the TP cost of Prayer skills. The TP cost reduction is performed by subtracting a static amount from the base cost, and then multiplying that by a percentage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Speed Multiplier": "1x",
                        "Static TP Reduction": "-1",
                        "TP Multiplier": "1x"
                    },
                    {
                        "level": 2,
                        "Speed Multiplier": "1.05x",
                        "Static TP Reduction": "-1",
                        "TP Multiplier": "1x"
                    },
                    {
                        "level": 3,
                        "Speed Multiplier": "1.1x",
                        "Static TP Reduction": "-1",
                        "TP Multiplier": "1x"
                    },
                    {
                        "level": 4,
                        "Speed Multiplier": "1.15x",
                        "Static TP Reduction": "-1",
                        "TP Multiplier": "1x"
                    },
                    {
                        "level": 5,
                        "Speed Multiplier": "1.15x",
                        "Static TP Reduction": "-2",
                        "TP Multiplier": "0.9x"
                    },
                    {
                        "level": 6,
                        "Speed Multiplier": "1.2x",
                        "Static TP Reduction": "-2",
                        "TP Multiplier": "0.9x"
                    },
                    {
                        "level": 7,
                        "Speed Multiplier": "1.25x",
                        "Static TP Reduction": "-2",
                        "TP Multiplier": "0.9x"
                    },
                    {
                        "level": 8,
                        "Speed Multiplier": "1.3x",
                        "Static TP Reduction": "-2",
                        "TP Multiplier": "0.9x"
                    },
                    {
                        "level": 9,
                        "Speed Multiplier": "1.35x",
                        "Static TP Reduction": "-2",
                        "TP Multiplier": "0.9x"
                    },
                    {
                        "level": 10,
                        "Speed Multiplier": "1.35x",
                        "Static TP Reduction": "3",
                        "TP Multiplier": "0.8x"
                    }
                ]
            },
            "Gospel": {
                "description": "When the Shaman buffs an ally, a percentage of that allys maximum HP is restored.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "% Max HP Restore": "6%"
                    },
                    {
                        "level": 2,
                        "% Max HP Restore": "7%"
                    },
                    {
                        "level": 3,
                        "% Max HP Restore": "8%"
                    },
                    {
                        "level": 4,
                        "% Max HP Restore": "9%"
                    },
                    {
                        "level": 5,
                        "% Max HP Restore": "10%"
                    },
                    {
                        "level": 6,
                        "% Max HP Restore": "11%"
                    },
                    {
                        "level": 7,
                        "% Max HP Restore": "12%"
                    },
                    {
                        "level": 8,
                        "% Max HP Restore": "13%"
                    },
                    {
                        "level": 9,
                        "% Max HP Restore": "14%"
                    },
                    {
                        "level": 10,
                        "% Max HP Restore": "15%"
                    }
                ]
            },
            "Ruinous Prayer": {
                "description": "Increases all party members attack for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Attack Increase": "21%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Attack Increase": "23%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Attack Increase": "25%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Attack Increase": "27%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Attack Increase": "27%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "16",
                        "Attack Increase": "29%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Attack Increase": "31%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "16",
                        "Attack Increase": "33%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "16",
                        "Attack Increase": "35%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "22",
                        "Attack Increase": "35%",
                        "Duration": "6"
                    }
                ]
            },
            "Aegis Prayer": {
                "description": "Increases all party members defense for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Defense Increase": "11%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Defense Increase": "13%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Defense Increase": "15%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Defense Increase": "17%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Defense Increase": "17%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "16",
                        "Defense Increase": "19%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Defense Increase": "21%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "16",
                        "Defense Increase": "23%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "16",
                        "Defense Increase": "25%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "22",
                        "Defense Increase": "25%",
                        "Duration": "6"
                    }
                ]
            },
            "Focus Prayer": {
                "description": "Increases all party members accuracy for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "6",
                        "Acc Increase": "+15%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "6",
                        "Acc Increase": "+18%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "6",
                        "Acc Increase": "+21%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "6",
                        "Acc Increase": "+24%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Acc Increase": "+24%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Acc Increase": "+28%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Acc Increase": "+32%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Acc Increase": "+36%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Acc Increase": "+40%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Acc Increase": "+40%",
                        "Duration": "6"
                    }
                ]
            },
            "Heavens Gift": {
                "description": "Dispels one buff and one debuff on one ally. Restores that allys HP and increases their action speed for one turn. The healing is doubled if both a buff and debuff are removed.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Ruinous Prayer": 3,
                    "Aegis Prayer": 3,
                    "Focus Prayer": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "1 Modifier Healing Power": "150%",
                        "2 Modiifers Healing Power": "300%",
                        "Speed Multiplier": "1x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "1 Modifier Healing Power": "155%",
                        "2 Modiifers Healing Power": "310%",
                        "Speed Multiplier": "1.5x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "1 Modifier Healing Power": "160%",
                        "2 Modiifers Healing Power": "320%",
                        "Speed Multiplier": "2x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "1 Modifier Healing Power": "165%",
                        "2 Modiifers Healing Power": "330%",
                        "Speed Multiplier": "2.5x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "6",
                        "1 Modifier Healing Power": "216%",
                        "2 Modiifers Healing Power": "432%",
                        "Speed Multiplier": "7.5x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "6",
                        "1 Modifier Healing Power": "222%",
                        "2 Modiifers Healing Power": "444%",
                        "Speed Multiplier": "10x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "6",
                        "1 Modifier Healing Power": "228%",
                        "2 Modiifers Healing Power": "456%",
                        "Speed Multiplier": "12.5x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "6",
                        "1 Modifier Healing Power": "234%",
                        "2 Modiifers Healing Power": "468%",
                        "Speed Multiplier": "15x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "6",
                        "1 Modifier Healing Power": "240%",
                        "2 Modiifers Healing Power": "480%",
                        "Speed Multiplier": "17.5x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "1 Modifier Healing Power": "300%",
                        "2 Modiifers Healing Power": "600%",
                        "Speed Multiplier": "999.9x"
                    }
                ]
            },
            "Blaze Prayer / Hail Prayer / Bolt Prayer": {
                "description": "Reduces all party members vulnerability to fire/ice/volt, and adds that element to their normal attacks, for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "Damage Reduction": "25%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "15",
                        "Damage Reduction": "28%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "15",
                        "Damage Reduction": "31%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "15",
                        "Damage Reduction": "34%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "21",
                        "Damage Reduction": "34%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "21",
                        "Damage Reduction": "38%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "21",
                        "Damage Reduction": "42%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "21",
                        "Damage Reduction": "46%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "21",
                        "Damage Reduction": "50%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "28",
                        "Damage Reduction": "50%",
                        "Duration": "6"
                    }
                ]
            },
            "Dance Oracle": {
                "description": "Cancels Blaze Prayer, Hail Prayer, or Bolt Prayer (whichever is oldest) on the user. Deals ranged INT-based damage of the element of the skill canceled to all enemies. Increases damage taken by hit targets from that element for one turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Blaze Prayer": 2,
                    "Hail Prayer": 2,
                    "Bolt Prayer": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "12",
                        "Damage": "150%",
                        "Damage Increase": "20%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "12",
                        "Damage": "156%",
                        "Damage Increase": "22%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "12",
                        "Damage": "162%",
                        "Damage Increase": "24%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "12",
                        "Damage": "168%",
                        "Damage Increase": "26%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "18",
                        "Damage": "192%",
                        "Damage Increase": "34%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "18",
                        "Damage": "199%",
                        "Damage Increase": "36%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "18",
                        "Damage": "06%",
                        "Damage Increase": "38%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "18",
                        "Damage": "213%",
                        "Damage Increase": "40%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "18",
                        "Damage": "220%",
                        "Damage Increase": "42%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "26",
                        "Damage": "250%",
                        "Damage Increase": "50%"
                    }
                ]
            }
        },
        "Divine Herald": {
            "Appease Spirits": {
                "description": "When the user is alive, any allies with buffs have a percentage of their maximum HP restored when they act.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "% Max HP Restore": "5%"
                    },
                    {
                        "level": 2,
                        "% Max HP Restore": "6%"
                    },
                    {
                        "level": 3,
                        "% Max HP Restore": "7%"
                    },
                    {
                        "level": 4,
                        "% Max HP Restore": "8%"
                    },
                    {
                        "level": 5,
                        "% Max HP Restore": "12%"
                    },
                    {
                        "level": 6,
                        "% Max HP Restore": "14%"
                    },
                    {
                        "level": 7,
                        "% Max HP Restore": "16%"
                    },
                    {
                        "level": 8,
                        "% Max HP Restore": "18%"
                    },
                    {
                        "level": 9,
                        "% Max HP Restore": "20%"
                    },
                    {
                        "level": 10,
                        "% Max HP Restore": "25%"
                    }
                ]
            },
            "Status DEF Up": {
                "description": "Reduces the users chance of being afflicted with ailments and binds.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance Multiplier": "0.92x"
                    },
                    {
                        "level": 2,
                        "Chance Multiplier": "0.90x"
                    },
                    {
                        "level": 3,
                        "Chance Multiplier": "0.88x"
                    },
                    {
                        "level": 4,
                        "Chance Multiplier": "0.86x"
                    },
                    {
                        "level": 5,
                        "Chance Multiplier": "0.82x"
                    },
                    {
                        "level": 6,
                        "Chance Multiplier": "0.8x"
                    },
                    {
                        "level": 7,
                        "Chance Multiplier": "0.78x"
                    },
                    {
                        "level": 8,
                        "Chance Multiplier": "0.76x"
                    },
                    {
                        "level": 9,
                        "Chance Multiplier": "0.74x"
                    },
                    {
                        "level": 10,
                        "Chance Multiplier": "0.7x"
                    }
                ]
            },
            "Exorcism Prayer": {
                "description": "Reduces the chance of all party members having ailments and binds inflicted on them for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Heavens Gift": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "Chance Multiplier": "0.75x",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "20",
                        "Chance Multiplier": "0.7x",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "20",
                        "Chance Multiplier": "0.65x",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "20",
                        "Chance Multiplier": "0.6x",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "28",
                        "Chance Multiplier": "0.6x",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "28",
                        "Chance Multiplier": "0.56x",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "28",
                        "Chance Multiplier": "0.52x",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "28",
                        "Chance Multiplier": "0.48x",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "28",
                        "Chance Multiplier": "0.44x",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "40",
                        "Chance Multiplier": "0.44x",
                        "Duration": "6"
                    }
                ]
            },
            "Haste Prayer": {
                "description": "Increases all party members evasion for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Heavens Gift": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "12",
                        "Evade Increase": "+10.5%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "12",
                        "Evade Increase": "+12%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "12",
                        "Evade Increase": "+13.5%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "12",
                        "Evade Increase": "+15%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "18",
                        "Evade Increase": "+15%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "18",
                        "Evade Increase": "+16.5%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "18",
                        "Evade Increase": "+18%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "18",
                        "Evade Increase": "+19.5%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "18",
                        "Evade Increase": "+21%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "24",
                        "Evade Increase": "+21%",
                        "Duration": "6"
                    }
                ]
            },
            "Vitality Prayer": {
                "description": "Increases all party members maximum HP for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Heavens Gift": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "16",
                        "Max HP Increase": "19%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "16",
                        "Max HP Increase": "22%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "16",
                        "Max HP Increase": "25%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "16",
                        "Max HP Increase": "28%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "24",
                        "Max HP Increase": "28%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "24",
                        "Max HP Increase": "31%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "24",
                        "Max HP Increase": "34%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "24",
                        "Max HP Increase": "37%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "24",
                        "Max HP Increase": "40%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "32",
                        "Max HP Increase": "40%",
                        "Duration": "6"
                    }
                ]
            },
            "Sanctuary": {
                "description": "For one turn, when an ailment/bind is inflicted on a party member, they have a chance to cancel a buff instead.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Exorcism Prayer": 5,
                    "Haste Prayer": 5,
                    "Vitality Prayer": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "Chance": "60%",
                        "Maximum Nulls": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "Chance": "63%",
                        "Maximum Nulls": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "Chance": "66%",
                        "Maximum Nulls": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "Chance": "69%",
                        "Maximum Nulls": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Chance": "80%",
                        "Maximum Nulls": "7"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "Chance": "82%",
                        "Maximum Nulls": "7"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "Chance": "84%",
                        "Maximum Nulls": "7"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "Chance": "86%",
                        "Maximum Nulls": "7"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "Chance": "88%",
                        "Maximum Nulls": "7"
                    },
                    {
                        "level": 10,
                        "TP Cost": "8",
                        "Chance": "95%",
                        "Maximum Nulls": "10"
                    }
                ]
            },
            "Holy Flame": {
                "description": "Restores HP to all party members for every 3 steps they take in the Labyrinth.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "HP Per 3 Steps": "4"
                    },
                    {
                        "level": 2,
                        "HP Per 3 Steps": "5"
                    },
                    {
                        "level": 3,
                        "HP Per 3 Steps": "6"
                    },
                    {
                        "level": 4,
                        "HP Per 3 Steps": "7"
                    },
                    {
                        "level": 5,
                        "HP Per 3 Steps": "12"
                    },
                    {
                        "level": 6,
                        "HP Per 3 Steps": "14"
                    },
                    {
                        "level": 7,
                        "HP Per 3 Steps": "16"
                    },
                    {
                        "level": 8,
                        "HP Per 3 Steps": "18"
                    },
                    {
                        "level": 9,
                        "HP Per 3 Steps": "20"
                    },
                    {
                        "level": 10,
                        "HP Per 3 Steps": "30"
                    }
                ]
            },
            "Split Spirits": {
                "description": "For one turn, all party members with buffs will recover a percentage of all damage they deal.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Dance Oracle": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "3",
                        "% Damage as HP": "25%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "3",
                        "% Damage as HP": "28%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "3",
                        "% Damage as HP": "31%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "3",
                        "% Damage as HP": "34%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "6",
                        "% Damage as HP": "50%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "6",
                        "% Damage as HP": "54%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "6",
                        "% Damage as HP": "58%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "6",
                        "% Damage as HP": "62%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "6",
                        "% Damage as HP": "66%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "% Damage as HP": "100%"
                    }
                ]
            },
            "Benevolence": {
                "description": "While the user is alive, party members with buffs will have their HP restored when they take damage, once per turn. The restore is based on a static amount and a percentage of the targets maximum HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Holy Flame": 2,
                    "Split Spirits": 2
                },
                "table": [
                    {
                        "level": 1,
                        "Static HP Restore": "10",
                        "% Max HP Restore": "2%"
                    },
                    {
                        "level": 2,
                        "Static HP Restore": "12",
                        "% Max HP Restore": "2%"
                    },
                    {
                        "level": 3,
                        "Static HP Restore": "14",
                        "% Max HP Restore": "2%"
                    },
                    {
                        "level": 4,
                        "Static HP Restore": "16",
                        "% Max HP Restore": "2%"
                    },
                    {
                        "level": 5,
                        "Static HP Restore": "16",
                        "% Max HP Restore": "4%"
                    },
                    {
                        "level": 6,
                        "Static HP Restore": "18",
                        "% Max HP Restore": "4%"
                    },
                    {
                        "level": 7,
                        "Static HP Restore": "20",
                        "% Max HP Restore": "4%"
                    },
                    {
                        "level": 8,
                        "Static HP Restore": "22",
                        "% Max HP Restore": "4%"
                    },
                    {
                        "level": 9,
                        "Static HP Restore": "24",
                        "% Max HP Restore": "4%"
                    },
                    {
                        "level": 10,
                        "Static HP Restore": "25",
                        "% Max HP Restore": "6%"
                    }
                ]
            },
            "Magic DEF Up": {
                "description": "Passively increases elemental defense.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Defense Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Defense Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Defense Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Defense Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Defense Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Defense Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Defense Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Defense Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Defense Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Defense Increase": "15%"
                    }
                ]
            }
        },
        "Divine Punisher": {
            "Ancient Memory": {
                "description": "When a buff is removed from the user, they have a chance to reapply it.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance": "15%"
                    },
                    {
                        "level": 2,
                        "Chance": "16.5%"
                    },
                    {
                        "level": 3,
                        "Chance": "18%"
                    },
                    {
                        "level": 4,
                        "Chance": "19.5%"
                    },
                    {
                        "level": 5,
                        "Chance": "29%"
                    },
                    {
                        "level": 6,
                        "Chance": "31%"
                    },
                    {
                        "level": 7,
                        "Chance": "33%"
                    },
                    {
                        "level": 8,
                        "Chance": "35%"
                    },
                    {
                        "level": 9,
                        "Chance": "37%"
                    },
                    {
                        "level": 10,
                        "Chance": "50%"
                    }
                ]
            },
            "HP Up": {
                "description": "Increases the users maximum HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max HP Increase": "5%"
                    },
                    {
                        "level": 2,
                        "Max HP Increase": "6%"
                    },
                    {
                        "level": 3,
                        "Max HP Increase": "7%"
                    },
                    {
                        "level": 4,
                        "Max HP Increase": "8%"
                    },
                    {
                        "level": 5,
                        "Max HP Increase": "12%"
                    },
                    {
                        "level": 6,
                        "Max HP Increase": "13%"
                    },
                    {
                        "level": 7,
                        "Max HP Increase": "14%"
                    },
                    {
                        "level": 8,
                        "Max HP Increase": "15%"
                    },
                    {
                        "level": 9,
                        "Max HP Increase": "16%"
                    },
                    {
                        "level": 10,
                        "Max HP Increase": "20%"
                    }
                ]
            },
            "Soul Grace": {
                "description": "If the user has at least one buff on them when they take fatal damage, they have a chance to instead dispel their oldest buff and endure at 1 HP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Heavens Gift": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "5%"
                    },
                    {
                        "level": 2,
                        "Chance": "6%"
                    },
                    {
                        "level": 3,
                        "Chance": "7%"
                    },
                    {
                        "level": 4,
                        "Chance": "8%"
                    },
                    {
                        "level": 5,
                        "Chance": "12%"
                    },
                    {
                        "level": 6,
                        "Chance": "13%"
                    },
                    {
                        "level": 7,
                        "Chance": "14%"
                    },
                    {
                        "level": 8,
                        "Chance": "15%"
                    },
                    {
                        "level": 9,
                        "Chance": "16%"
                    },
                    {
                        "level": 10,
                        "Chance": "20%"
                    }
                ]
            },
            "Offering": {
                "description": "Cancels one buff and debuff on the user. Restores TP to other party members in the users row. The restore amount is doubled if both a buff and debuff are canceled.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Heavens Gift": 3
                },
                "table": [
                    {
                        "level": 1,
                        "1 Modifier Restore": "10",
                        "2 Modifiers Restore": "20"
                    },
                    {
                        "level": 2,
                        "1 Modifier Restore": "11",
                        "2 Modifiers Restore": "22"
                    },
                    {
                        "level": 3,
                        "1 Modifier Restore": "12",
                        "2 Modifiers Restore": "24"
                    },
                    {
                        "level": 4,
                        "1 Modifier Restore": "13",
                        "2 Modifiers Restore": "26"
                    },
                    {
                        "level": 5,
                        "1 Modifier Restore": "19",
                        "2 Modifiers Restore": "38"
                    },
                    {
                        "level": 6,
                        "1 Modifier Restore": "20",
                        "2 Modifiers Restore": "40"
                    },
                    {
                        "level": 7,
                        "1 Modifier Restore": "21",
                        "2 Modifiers Restore": "42"
                    },
                    {
                        "level": 8,
                        "1 Modifier Restore": "22",
                        "2 Modifiers Restore": "44"
                    },
                    {
                        "level": 9,
                        "1 Modifier Restore": "23",
                        "2 Modifiers Restore": "46"
                    },
                    {
                        "level": 10,
                        "1 Modifier Restore": "30",
                        "2 Modifiers Restore": "60"
                    }
                ]
            },
            "Purification": {
                "description": "Cancels all buffs and debuffs on all party members and all enemies. Restores the users TP. The TP restoration is determined by multiplying the base restore by how many of the following types were removed: party member buff, party member debuff, enemy buff, enemy debuff.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Soul Grace": 5,
                    "Offering": 5
                },
                "table": [
                    {
                        "level": 1,
                        "Base Restore": "10",
                        "2 Modifiers Restore": "20",
                        "3 Modifiers Restore": "30",
                        "4 Modifiers Restore": "40"
                    },
                    {
                        "level": 2,
                        "Base Restore": "12",
                        "2 Modifiers Restore": "24",
                        "3 Modifiers Restore": "36",
                        "4 Modifiers Restore": "48"
                    },
                    {
                        "level": 3,
                        "Base Restore": "14",
                        "2 Modifiers Restore": "28",
                        "3 Modifiers Restore": "42",
                        "4 Modifiers Restore": "56"
                    },
                    {
                        "level": 4,
                        "Base Restore": "16",
                        "2 Modifiers Restore": "32",
                        "3 Modifiers Restore": "48",
                        "4 Modifiers Restore": "64"
                    },
                    {
                        "level": 5,
                        "Base Restore": "20",
                        "2 Modifiers Restore": "40",
                        "3 Modifiers Restore": "60",
                        "4 Modifiers Restore": "80"
                    }
                ]
            },
            "Magic ATK Up": {
                "description": "Passively increases INT-based damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Attack Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Attack Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Attack Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Attack Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Attack Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Attack Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Attack Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Attack Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Attack Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Attack Increase": "15%"
                    }
                ]
            },
            "TP Up": {
                "description": "Increases the users maximum TP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max TP Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Max TP Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Max TP Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Max TP Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Max TP Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Max TP Increase": "19%"
                    },
                    {
                        "level": 7,
                        "Max TP Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Max TP Increase": "23%"
                    },
                    {
                        "level": 9,
                        "Max TP Increase": "25%"
                    },
                    {
                        "level": 10,
                        "Max TP Increase": "30%"
                    }
                ]
            },
            "Mana Oracle": {
                "description": "Cancels Blaze Prayer, Hail Prayer, or Bolt Prayer (presumably whichever is the oldest on the first party member) on all party members. Deals 5 instances of ranged INT-based damage of the element of the Prayer canceled to random enemies. Can hit the same target multiple times.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Dance Oracle": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "10",
                        "Damage Per Hit": "100%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "10",
                        "Damage Per Hit": "105%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "10",
                        "Damage Per Hit": "110%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "10",
                        "Damage Per Hit": "115%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "16",
                        "Damage Per Hit": "140%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "16",
                        "Damage Per Hit": "146%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Damage Per Hit": "152%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "16",
                        "Damage Per Hit": "158%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "16",
                        "Damage Per Hit": "164%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "24",
                        "Damage Per Hit": "200%"
                    }
                ]
            },
            "Aureole Oracle": {
                "description": "Cancels Blaze Prayer, Hail Prayer, or Bolt Prayer (presumably whichever is the oldest on the first party member) on all party members. For one turn, all party members will absorb any damage of the element of whichever skill was canceled.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Dance Oracle": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "% Damage as HP Restore": "1%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "15",
                        "% Damage as HP Restore": "34%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "15",
                        "% Damage as HP Restore": "67%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "15",
                        "% Damage as HP Restore": "100%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "20",
                        "% Damage as HP Restore": "250%"
                    }
                ]
            },
            "Invoke Gods": {
                "description": "Requires three buffs on the user to use. Cancels all buffs on the user. The user will then attack one enemy with their equipped weapon (with a damage increase). Reduces the targets damage for one turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Mana Oracle": 5,
                    "Aureole Oracle": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "Damage": "750%",
                        "Damage Reduction": "50%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "20",
                        "Damage": "790%",
                        "Damage Reduction": "52%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "20",
                        "Damage": "830%",
                        "Damage Reduction": "54%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "20",
                        "Damage": "870%",
                        "Damage Reduction": "56%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "32",
                        "Damage": "1050%",
                        "Damage Reduction": "66%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "32",
                        "Damage": "1100%",
                        "Damage Reduction": "67%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "32",
                        "Damage": "1150%",
                        "Damage Reduction": "68%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "32",
                        "Damage": "1200%",
                        "Damage Reduction": "69%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "32",
                        "Damage": "1250%",
                        "Damage Reduction": "70%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "45",
                        "Damage": "1500%",
                        "Damage Reduction": "80%"
                    }
                ]
            }
        }
    },
    "warlock": {
        "specializations": [
            "Elemancer",
            "Omnimancer"
        ],
        "Base": {
            "Magi Mastery": {
                "description": "Increases damage dealt with Warlock attack skills.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "2%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "3%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "4%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "5%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "8%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "9%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "12%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "15%"
                    }
                ]
            },
            "Quick-Chant": {
                "description": "Removes the need to use a turn to use Incantation skills, but increases the TP cost of Incantation skills as well.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Magi Mastery": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost Increase": "15"
                    },
                    {
                        "level": 2,
                        "TP Cost Increase": "13"
                    },
                    {
                        "level": 3,
                        "TP Cost Increase": "11"
                    },
                    {
                        "level": 4,
                        "TP Cost Increase": "9"
                    },
                    {
                        "level": 5,
                        "TP Cost Increase": "5"
                    }
                ]
            },
            "Fireball": {
                "description": "Deals ranged INT-based fire damage to one enemy, with splash damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "105%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "110%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "115%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "120%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Damage": "141%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Damage": "148%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Damage": "155%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Damage": "162%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage": "169%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Damage": "210%"
                    }
                ]
            },
            "Icicle Lance": {
                "description": "Deals ranged INT-based ice damage to one enemy, with line-piercing effect.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "100%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "105%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "110%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "115%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Damage": "135%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Damage": "142%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Damage": "149%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Damage": "156%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage": "163%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Damage": "200%"
                    }
                ]
            },
            "Lightning": {
                "description": "Deals ranged INT-based volt damage to one row of enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "7",
                        "Damage": "95%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "7",
                        "Damage": "100%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "7",
                        "Damage": "105%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "7",
                        "Damage": "110%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "12",
                        "Damage": "129%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "12",
                        "Damage": "136%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "12",
                        "Damage": "143%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "12",
                        "Damage": "150%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage": "157%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "18",
                        "Damage": "190%"
                    }
                ]
            },
            "Amplifier": {
                "description": "Increases one row of party members fire/ice/volt damage for a set number of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Attack Increase": "20%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Attack Increase": "23%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Attack Increase": "26%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Attack Increase": "29%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "9",
                        "Attack Increase": "29%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "9",
                        "Attack Increase": "33%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "9",
                        "Attack Increase": "37%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "9",
                        "Attack Increase": "41%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "9",
                        "Attack Increase": "45%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "13",
                        "Attack Increase": "45%"
                    }
                ]
            },
            "Magic Shield": {
                "description": "Reduces fire/ice/volt damage to all party members for one turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Amplifier": 2
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "8",
                        "Damage Reduction": "34%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "8",
                        "Damage Reduction": "37%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "8",
                        "Damage Reduction": "40%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "8",
                        "Damage Reduction": "43%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "14",
                        "Damage Reduction": "53%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "14",
                        "Damage Reduction": "56%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "14",
                        "Damage Reduction": "59%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "14",
                        "Damage Reduction": "62%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "14",
                        "Damage Reduction": "65%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "20",
                        "Damage Reduction": "75%"
                    }
                ]
            },
            "Focus Chant": {
                "description": "On the next turn, multi-target skills will only hit one enemy. In exchange, their damage is increased.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Damage Multiplier": "1.65x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Damage Multiplier": "1.68x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Damage Multiplier": "1.71x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Damage Multiplier": "1.74x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "10",
                        "Damage Multiplier": "1.98x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "10",
                        "Damage Multiplier": "2x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "10",
                        "Damage Multiplier": "2.02x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "10",
                        "Damage Multiplier": "2.04x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "10",
                        "Damage Multiplier": "2.06x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "15",
                        "Damage Multiplier": "2.25x"
                    }
                ]
            },
            "Levitation": {
                "description": "For a set number of steps, damage tiles are negated, and the chance of getting a preemptive attack is increased.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "4",
                        "Preemptive Increase": "40",
                        "Duration": "50"
                    },
                    {
                        "level": 2,
                        "TP Cost": "4",
                        "Preemptive Increase": "70",
                        "Duration": "50"
                    },
                    {
                        "level": 3,
                        "TP Cost": "4",
                        "Preemptive Increase": "100",
                        "Duration": "50"
                    },
                    {
                        "level": 4,
                        "TP Cost": "4",
                        "Preemptive Increase": "130",
                        "Duration": "50"
                    },
                    {
                        "level": 5,
                        "TP Cost": "7",
                        "Preemptive Increase": "130",
                        "Duration": "130"
                    },
                    {
                        "level": 6,
                        "TP Cost": "7",
                        "Preemptive Increase": "160",
                        "Duration": "130"
                    },
                    {
                        "level": 7,
                        "TP Cost": "7",
                        "Preemptive Increase": "190",
                        "Duration": "130"
                    },
                    {
                        "level": 8,
                        "TP Cost": "7",
                        "Preemptive Increase": "220",
                        "Duration": "130"
                    },
                    {
                        "level": 9,
                        "TP Cost": "7",
                        "Preemptive Increase": "250",
                        "Duration": "130"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "Preemptive Increase": "250",
                        "Duration": "250"
                    }
                ]
            },
            "Invisibility": {
                "description": "For a set number of steps, reduces the encounter rate.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "5",
                        "Encounter Multiplier": "0.65x",
                        "Duration": "80"
                    },
                    {
                        "level": 2,
                        "TP Cost": "5",
                        "Encounter Multiplier": "0.56x",
                        "Duration": "80"
                    },
                    {
                        "level": 3,
                        "TP Cost": "5",
                        "Encounter Multiplier": "0.47x",
                        "Duration": "80"
                    },
                    {
                        "level": 4,
                        "TP Cost": "5",
                        "Encounter Multiplier": "0.38x",
                        "Duration": "80"
                    },
                    {
                        "level": 5,
                        "TP Cost": "8",
                        "Encounter Multiplier": "0.38x",
                        "Duration": "160"
                    },
                    {
                        "level": 6,
                        "TP Cost": "8",
                        "Encounter Multiplier": "0.31x",
                        "Duration": "160"
                    },
                    {
                        "level": 7,
                        "TP Cost": "8",
                        "Encounter Multiplier": "0.24x",
                        "Duration": "160"
                    },
                    {
                        "level": 8,
                        "TP Cost": "8",
                        "Encounter Multiplier": "0.17x",
                        "Duration": "160"
                    },
                    {
                        "level": 9,
                        "TP Cost": "8",
                        "Encounter Multiplier": "0.1x",
                        "Duration": "160"
                    },
                    {
                        "level": 10,
                        "TP Cost": "12",
                        "Encounter Multiplier": "0.1x",
                        "Duration": "250"
                    }
                ]
            }
        },
        "Elemancer": {
            "Common Magic": {
                "description": "If another party member used an INT-based skill before the user, the users damage is increased for that turn.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "20%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "22%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "24%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "26%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "34%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "36%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "38%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "40%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "42%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "50%"
                    }
                ]
            },
            "Magic ATK Up": {
                "description": "Passively increases elemental damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Attack Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Attack Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Attack Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Attack Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Attack Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Attack Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Attack Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Attack Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Attack Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Attack Increase": "15%"
                    }
                ]
            },
            "Explode / Hailstorm / Thunderbreak": {
                "description": "Deals ranged INT-based fire/ice/volt damage to all enemies.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "24",
                        "Damage": "125%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "24",
                        "Damage": "132%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "24",
                        "Damage": "139%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "24",
                        "Damage": "146%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "30",
                        "Damage": "185%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "30",
                        "Damage": "194%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "30",
                        "Damage": "203%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "30",
                        "Damage": "212%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "30",
                        "Damage": "221%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "40",
                        "Damage": "270%"
                    }
                ]
            },
            "Mana Flow": {
                "description": "Places a buff on the user that restores a percentage of any TP they use to a random party member for a set amount of turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Explode": 3,
                    "Hailstorm": 3,
                    "Thunderbreak": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "2",
                        "% TP Used Restored": "25%",
                        "Duration": "4"
                    },
                    {
                        "level": 2,
                        "TP Cost": "2",
                        "% TP Used Restored": "28%",
                        "Duration": "4"
                    },
                    {
                        "level": 3,
                        "TP Cost": "2",
                        "% TP Used Restored": "31%",
                        "Duration": "4"
                    },
                    {
                        "level": 4,
                        "TP Cost": "2",
                        "% TP Used Restored": "34%",
                        "Duration": "4"
                    },
                    {
                        "level": 5,
                        "TP Cost": "3",
                        "% TP Used Restored": "34%",
                        "Duration": "5"
                    },
                    {
                        "level": 6,
                        "TP Cost": "3",
                        "% TP Used Restored": "38%",
                        "Duration": "5"
                    },
                    {
                        "level": 7,
                        "TP Cost": "3",
                        "% TP Used Restored": "42%",
                        "Duration": "5"
                    },
                    {
                        "level": 8,
                        "TP Cost": "3",
                        "% TP Used Restored": "46%",
                        "Duration": "5"
                    },
                    {
                        "level": 9,
                        "TP Cost": "3",
                        "% TP Used Restored": "50%",
                        "Duration": "5"
                    },
                    {
                        "level": 10,
                        "TP Cost": "5",
                        "% TP Used Restored": "50%",
                        "Duration": "6"
                    }
                ]
            },
            "Cutting Costs": {
                "description": "Gives the user a chance to not consume TP when using a skill.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Explode": 3,
                    "Hailstorm": 3,
                    "Thunderbreak": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "10%"
                    },
                    {
                        "level": 2,
                        "Chance": "11%"
                    },
                    {
                        "level": 3,
                        "Chance": "12%"
                    },
                    {
                        "level": 4,
                        "Chance": "13%"
                    },
                    {
                        "level": 5,
                        "Chance": "18%"
                    },
                    {
                        "level": 6,
                        "Chance": "20%"
                    },
                    {
                        "level": 7,
                        "Chance": "22%"
                    },
                    {
                        "level": 8,
                        "Chance": "24%"
                    },
                    {
                        "level": 9,
                        "Chance": "26%"
                    },
                    {
                        "level": 10,
                        "Chance": "34%"
                    }
                ]
            },
            "Clever Strike": {
                "description": "Deals INT-based damage to one enemy. The element and range are determined by the users equipped weapon and any elemental attack modifiers they currently have, such as Blaze Oils.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Magic Shield": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "2",
                        "Damage": "110%",
                        "Base Accuracy": "0"
                    },
                    {
                        "level": 2,
                        "TP Cost": "2",
                        "Damage": "115%",
                        "Base Accuracy": "0"
                    },
                    {
                        "level": 3,
                        "TP Cost": "2",
                        "Damage": "120%",
                        "Base Accuracy": "0"
                    },
                    {
                        "level": 4,
                        "TP Cost": "2",
                        "Damage": "125%",
                        "Base Accuracy": "0"
                    },
                    {
                        "level": 5,
                        "TP Cost": "5",
                        "Damage": "250%",
                        "Base Accuracy": "0"
                    },
                    {
                        "level": 6,
                        "TP Cost": "5",
                        "Damage": "260%",
                        "Base Accuracy": "0"
                    },
                    {
                        "level": 7,
                        "TP Cost": "5",
                        "Damage": "270%",
                        "Base Accuracy": "0"
                    },
                    {
                        "level": 8,
                        "TP Cost": "5",
                        "Damage": "280%",
                        "Base Accuracy": "0"
                    },
                    {
                        "level": 9,
                        "TP Cost": "5",
                        "Damage": "290%",
                        "Base Accuracy": "0"
                    },
                    {
                        "level": 10,
                        "TP Cost": "10",
                        "Damage": "450%",
                        "Base Accuracy": "+10"
                    }
                ]
            },
            "Abating Chant": {
                "description": "On the next turn, reduces the damage of the users next skill, but also reduces its TP cost.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Focus Chant": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "1",
                        "Damage Multiplier": "0.6x",
                        "TP Cost Reduction": "-14"
                    },
                    {
                        "level": 2,
                        "TP Cost": "1",
                        "Damage Multiplier": "0.61x",
                        "TP Cost Reduction": "-15"
                    },
                    {
                        "level": 3,
                        "TP Cost": "1",
                        "Damage Multiplier": "0.62x",
                        "TP Cost Reduction": "-16"
                    },
                    {
                        "level": 4,
                        "TP Cost": "1",
                        "Damage Multiplier": "0.63x",
                        "TP Cost Reduction": "-17"
                    },
                    {
                        "level": 5,
                        "TP Cost": "3",
                        "Damage Multiplier": "0.73x",
                        "TP Cost Reduction": "-19"
                    },
                    {
                        "level": 6,
                        "TP Cost": "3",
                        "Damage Multiplier": "0.74x",
                        "TP Cost Reduction": "-20"
                    },
                    {
                        "level": 7,
                        "TP Cost": "3",
                        "Damage Multiplier": "0.75x",
                        "TP Cost Reduction": "-21"
                    },
                    {
                        "level": 8,
                        "TP Cost": "3",
                        "Damage Multiplier": "0.76x",
                        "TP Cost Reduction": "-22"
                    },
                    {
                        "level": 9,
                        "TP Cost": "3",
                        "Damage Multiplier": "0.77x",
                        "TP Cost Reduction": "-23"
                    },
                    {
                        "level": 10,
                        "TP Cost": "5",
                        "Damage Multiplier": "0.9x",
                        "TP Cost Reduction": "-25"
                    }
                ]
            },
            "Status DEF Up": {
                "description": "Reduces the users chance of being afflicted with ailments and binds.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Chance Multiplier": "0.92x"
                    },
                    {
                        "level": 2,
                        "Chance Multiplier": "0.90x"
                    },
                    {
                        "level": 3,
                        "Chance Multiplier": "0.88x"
                    },
                    {
                        "level": 4,
                        "Chance Multiplier": "0.86x"
                    },
                    {
                        "level": 5,
                        "Chance Multiplier": "0.82x"
                    },
                    {
                        "level": 6,
                        "Chance Multiplier": "0.8x"
                    },
                    {
                        "level": 7,
                        "Chance Multiplier": "0.78x"
                    },
                    {
                        "level": 8,
                        "Chance Multiplier": "0.76x"
                    },
                    {
                        "level": 9,
                        "Chance Multiplier": "0.74x"
                    },
                    {
                        "level": 10,
                        "Chance Multiplier": "0.7x"
                    }
                ]
            }
        },
        "Omnimancer": {
            "Reserve Magic": {
                "description": "If the user attacked using a different element than the one theyre using this turn (say, they casted Fireball on the last turn and Icicle Lance on this turn), the previous turns element is added to this one, and damage is increased--the Fireball/Icicle Lance example would result in Icicle Lance being fire+ice. Elements do not carry over from one turn to the next.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Damage Increase": "8%"
                    },
                    {
                        "level": 2,
                        "Damage Increase": "9%"
                    },
                    {
                        "level": 3,
                        "Damage Increase": "10%"
                    },
                    {
                        "level": 4,
                        "Damage Increase": "11%"
                    },
                    {
                        "level": 5,
                        "Damage Increase": "16%"
                    },
                    {
                        "level": 6,
                        "Damage Increase": "17%"
                    },
                    {
                        "level": 7,
                        "Damage Increase": "18%"
                    },
                    {
                        "level": 8,
                        "Damage Increase": "19%"
                    },
                    {
                        "level": 9,
                        "Damage Increase": "20%"
                    },
                    {
                        "level": 10,
                        "Damage Increase": "25%"
                    }
                ]
            },
            "TP Up": {
                "description": "Increases the users maximum TP.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Max TP Increase": "10%"
                    },
                    {
                        "level": 2,
                        "Max TP Increase": "11%"
                    },
                    {
                        "level": 3,
                        "Max TP Increase": "12%"
                    },
                    {
                        "level": 4,
                        "Max TP Increase": "13%"
                    },
                    {
                        "level": 5,
                        "Max TP Increase": "17%"
                    },
                    {
                        "level": 6,
                        "Max TP Increase": "19%"
                    },
                    {
                        "level": 7,
                        "Max TP Increase": "21%"
                    },
                    {
                        "level": 8,
                        "Max TP Increase": "23%"
                    },
                    {
                        "level": 9,
                        "Max TP Increase": "25%"
                    },
                    {
                        "level": 10,
                        "Max TP Increase": "30%"
                    }
                ]
            },
            "Windstorm": {
                "description": "Deals ranged INT-based cut damage to all enemies. Attempts to bind hit targets arms.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Fireball": 3,
                    "Icicle Lance": 3,
                    "Lightning": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "14",
                        "Damage": "90%",
                        "Base Chance": "20%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "14",
                        "Damage": "95%",
                        "Base Chance": "20%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "14",
                        "Damage": "100%",
                        "Base Chance": "20%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "14",
                        "Damage": "105%",
                        "Base Chance": "20%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "20",
                        "Damage": "125%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "20",
                        "Damage": "131%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "20",
                        "Damage": "137%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "20",
                        "Damage": "143%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "20",
                        "Damage": "149%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "27",
                        "Damage": "180%",
                        "Base Chance": "30%"
                    }
                ]
            },
            "Earthspike": {
                "description": "Deals ranged INT-based stab damage to all enemies. Reduces hit targets elemental attack for two turns.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Fireball": 3,
                    "Icicle Lance": 3,
                    "Lightning": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "14",
                        "Damage": "90%",
                        "Attack Reduction": "12%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "14",
                        "Damage": "95%",
                        "Attack Reduction": "13%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "14",
                        "Damage": "100%",
                        "Attack Reduction": "14%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "14",
                        "Damage": "105%",
                        "Attack Reduction": "15%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "20",
                        "Damage": "125%",
                        "Attack Reduction": "18%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "20",
                        "Damage": "131%",
                        "Attack Reduction": "19%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "20",
                        "Damage": "137%",
                        "Attack Reduction": "20%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "20",
                        "Damage": "143%",
                        "Attack Reduction": "21%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "20",
                        "Damage": "149%",
                        "Attack Reduction": "22%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "27",
                        "Damage": "180%",
                        "Attack Reduction": "25%"
                    }
                ]
            },
            "Rockfall": {
                "description": "Deals ranged INT-based bash damage to all enemies. Attempts to stun hit targets.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Fireball": 3,
                    "Icicle Lance": 3,
                    "Lightning": 3
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "14",
                        "Damage": "90%",
                        "Base Chance": "20%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "14",
                        "Damage": "95%",
                        "Base Chance": "20%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "14",
                        "Damage": "100%",
                        "Base Chance": "20%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "14",
                        "Damage": "105%",
                        "Base Chance": "20%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "20",
                        "Damage": "125%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "20",
                        "Damage": "131%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "20",
                        "Damage": "137%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "20",
                        "Damage": "143%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "20",
                        "Damage": "149%",
                        "Base Chance": "25%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "27",
                        "Damage": "180%",
                        "Base Chance": "30%"
                    }
                ]
            },
            "Altar": {
                "description": "Three turns after casting, deals ranged INT-based bash damage to one enemy at the start of the turn. Attempts to inflict petrification on the target. Altars damage is increased based on how many times the targets weaknesses are hit between when its cased and when it goes off--this includes attacks from the caster and any party members. The amount of increases is capped at 20.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Windstorm": 5,
                    "Earthspike": 5,
                    "Rockfall": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "20",
                        "Base Damage": "100%",
                        "Increase Per Stack": "30%",
                        "Max Damage": "700%",
                        "Base Chance": "50%"
                    },
                    {
                        "level": 2,
                        "TP Cost": "20",
                        "Base Damage": "102%",
                        "Increase Per Stack": "31%",
                        "Max Damage": "722%",
                        "Base Chance": "52%"
                    },
                    {
                        "level": 3,
                        "TP Cost": "20",
                        "Base Damage": "104%",
                        "Increase Per Stack": "32%",
                        "Max Damage": "744%",
                        "Base Chance": "54%"
                    },
                    {
                        "level": 4,
                        "TP Cost": "20",
                        "Base Damage": "106%",
                        "Increase Per Stack": "33%",
                        "Max Damage": "766%",
                        "Base Chance": "56%"
                    },
                    {
                        "level": 5,
                        "TP Cost": "30",
                        "Base Damage": "114%",
                        "Increase Per Stack": "37%",
                        "Max Damage": "854%",
                        "Base Chance": "66%"
                    },
                    {
                        "level": 6,
                        "TP Cost": "30",
                        "Base Damage": "117%",
                        "Increase Per Stack": "38%",
                        "Max Damage": "877%",
                        "Base Chance": "68%"
                    },
                    {
                        "level": 7,
                        "TP Cost": "30",
                        "Base Damage": "120%",
                        "Increase Per Stack": "39%",
                        "Max Damage": "900%",
                        "Base Chance": "70%"
                    },
                    {
                        "level": 8,
                        "TP Cost": "30",
                        "Base Damage": "123%",
                        "Increase Per Stack": "40%",
                        "Max Damage": "923%",
                        "Base Chance": "72%"
                    },
                    {
                        "level": 9,
                        "TP Cost": "30",
                        "Base Damage": "126%",
                        "Increase Per Stack": "41%",
                        "Max Damage": "946%",
                        "Base Chance": "74%"
                    },
                    {
                        "level": 10,
                        "TP Cost": "40",
                        "Base Damage": "140%",
                        "Increase Per Stack": "45%",
                        "Max Damage": "1040%",
                        "Base Chance": "90%"
                    }
                ]
            },
            "Anti-Magic": {
                "description": "Gives a chance to negate elemental attacks on the users row.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Magic Shield": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Chance": "4%"
                    },
                    {
                        "level": 2,
                        "Chance": "5%"
                    },
                    {
                        "level": 3,
                        "Chance": "6%"
                    },
                    {
                        "level": 4,
                        "Chance": "7%"
                    },
                    {
                        "level": 5,
                        "Chance": "9%"
                    },
                    {
                        "level": 6,
                        "Chance": "10%"
                    },
                    {
                        "level": 7,
                        "Chance": "11%"
                    },
                    {
                        "level": 8,
                        "Chance": "12%"
                    },
                    {
                        "level": 9,
                        "Chance": "13%"
                    },
                    {
                        "level": 10,
                        "Chance": "15%"
                    }
                ]
            },
            "Life Siphon": {
                "description": "When the user hits an enemys weakness, their Union gauge is restored.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Anti-Magic": 3
                },
                "table": [
                    {
                        "level": 1,
                        "Union Increase": "1"
                    },
                    {
                        "level": 2,
                        "Union Increase": "2"
                    },
                    {
                        "level": 3,
                        "Union Increase": "3"
                    },
                    {
                        "level": 4,
                        "Union Increase": "4"
                    },
                    {
                        "level": 5,
                        "Union Increase": "6"
                    }
                ]
            },
            "Spread Chant": {
                "description": "On the next turn, multi-target skills will become multi-hit. Spread Chant versions of skills deal 2-6 instances of damage. Each hit deals a percentage of the skills normal damage.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {
                    "Focus Chant": 5
                },
                "table": [
                    {
                        "level": 1,
                        "TP Cost": "15",
                        "Damage Multiplier": "0.5x"
                    },
                    {
                        "level": 2,
                        "TP Cost": "13",
                        "Damage Multiplier": "0.5x"
                    },
                    {
                        "level": 3,
                        "TP Cost": "11",
                        "Damage Multiplier": "0.5x"
                    },
                    {
                        "level": 4,
                        "TP Cost": "9",
                        "Damage Multiplier": "0.5x"
                    },
                    {
                        "level": 5,
                        "TP Cost": "20",
                        "Damage Multiplier": "0.6x"
                    },
                    {
                        "level": 6,
                        "TP Cost": "18",
                        "Damage Multiplier": "0.6x"
                    },
                    {
                        "level": 7,
                        "TP Cost": "16",
                        "Damage Multiplier": "0.6x"
                    },
                    {
                        "level": 8,
                        "TP Cost": "14",
                        "Damage Multiplier": "0.6x"
                    },
                    {
                        "level": 9,
                        "TP Cost": "12",
                        "Damage Multiplier": "0.6x"
                    },
                    {
                        "level": 10,
                        "TP Cost": "25",
                        "Damage Multiplier": "0.75x"
                    }
                ]
            },
            "Magic DEF Up": {
                "description": "Passively increases elemental defense.",
                "damage": "",
                "damage target": "",
                "buff": "",
                "buff target": "",
                "debuff": "",
                "debuff target": "",
                "bind": "",
                "ailment": "",
                "ailment target": "",
                "healing": "",
                "healing target": "",
                "requirements": {},
                "table": [
                    {
                        "level": 1,
                        "Defense Increase": "4%"
                    },
                    {
                        "level": 2,
                        "Defense Increase": "5%"
                    },
                    {
                        "level": 3,
                        "Defense Increase": "6%"
                    },
                    {
                        "level": 4,
                        "Defense Increase": "7%"
                    },
                    {
                        "level": 5,
                        "Defense Increase": "9%"
                    },
                    {
                        "level": 6,
                        "Defense Increase": "10%"
                    },
                    {
                        "level": 7,
                        "Defense Increase": "11%"
                    },
                    {
                        "level": 8,
                        "Defense Increase": "12%"
                    },
                    {
                        "level": 9,
                        "Defense Increase": "13%"
                    },
                    {
                        "level": 10,
                        "Defense Increase": "15%"
                    }
                ]
            }
        }
    }
}