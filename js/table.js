function resetAilBindTable() {
    var types = ['h_bind', 'l_bind', 'a_bind', 'blind', 'sleep', 'paralyzed',
        'petrified', 'cursed', 'poison']

    types.forEach(function(type){
        var span_id = '#'.concat(type).concat('_num');
        $(span_id).html(0);
    });
}

function updateAilBindTable(sel_skills) {
    sel_skills.forEach(function (skill_info) {
        //Add to the data in the right places
        keys = new Set(Object.keys(skill_info));
        if (keys.has('ailment')) {
            var span_id = '#'.concat(skill_info['ailment']).concat('_num');
            var num_ailments = parseInt($(span_id).text());
            $(span_id).html(num_ailments+1);
        }
        if (keys.has('bind')){
            var bind_types = new Set(skill_info['bind'].split(' '));
            bind_types.forEach(function(bind_name){
                bind_key = bind_name.charAt(0);
                var span_id = '#'.concat(bind_key).concat('_bind_num');
                var num_binds = parseInt($(span_id).text());
                $(span_id).html(num_binds+1);
            });
        }
    });

}

function resetDmgTable() {
    var damage_types = ['physical', 'ranged', 'fire', 'ice', 'volt'];
    var damage_targets = ['enemy', 'row', 'aoe', 'multi', 'counter'];

    damage_types.forEach(function (dmg_type) {
        damage_targets.forEach(function (dmg_target) {
            var span_id = '#'.concat(dmg_type).concat('_').concat(dmg_target);
            $(span_id).html(0);
        });
    });
}

function updateDmgTable(sel_skills) {
    sel_skills.forEach(function (skill_info) {
        //Add to the data in the right places
        keys = new Set(Object.keys(skill_info));
        if (keys.has('damage')) {
            var damage_types = new Set(skill_info['damage'].split(' '));
            var damage_target = skill_info['damage target'].split(' ');
            damage_types.forEach(function (dmg_type) {
                damage_target.forEach(function(dmg_target){
                    var span_id = '#'.concat(dmg_type).concat('_').concat(dmg_target);
                    var num_types = parseInt($(span_id).text());
                    // console.log(span_id);
                    $(span_id).html(num_types + 1);
                })
            });
        }
    });
}

function resetBuffTable(){
    var buff_types = ['atk', 'def', 'acc', 'eva', 'bind', 'agg']
    var buff_targets = ['self', 'single', 'row', 'party']

    buff_types.forEach(function(buff_type){
        buff_targets.forEach(function(buff_target){
            var span_id = '#buff_'.concat(buff_type).concat('_').concat(buff_target);
            $(span_id).html(0);
        });
    });
}

function updateBuffTable(sel_skills) {
    sel_skills.forEach(function (skill_info){
        keys = new Set(Object.keys(skill_info));
        if (keys.has('buff')){
            buff_arr = skill_info['buff'].split(' ');
            buff_arr.forEach(function(buff) {
                var span_id = '#buff_'.concat(buff).concat('_').concat(skill_info['buff target']);
                var num_types = parseInt($(span_id).text());
                // console.log(span_id);
                $(span_id).html(num_types + 1);
            });
        }
    });
}

function resetDebuffTable(){
    var debuff_types = ['atk','def','eva','acc','res']
    var debuff_targets = ['enemy', 'row', 'aoe']

    debuff_types.forEach(function(debuff_type){
        debuff_targets.forEach(function(debuff_target){
            var span_id = '#debuff_'.concat(debuff_type).concat('_').concat(debuff_target);
            $(span_id).html(0);
        });
    });
}

function updateDebuffTable(sel_skills){

}

function resetHealTable(){
    var heal_types = ['direct', 'conditional'];
    var heal_targets = ['single', 'row', 'party'];

    heal_types.forEach(function(heal_type){
        heal_targets.forEach(function(heal_target){
            var span_id = '#heal_'.concat(heal_type).concat('_').concat(heal_target);
            $(span_id).html(0)
        });
    });
}

function updateHealTable(){
    sel_skills.forEach(function (skill_info){
        keys = new Set(Object.keys(skill_info));
        if (keys.has('healing')){
            var span_id = '#heal_'.concat(skill_info['healing']).concat('_').concat(skill_info['healing target']);
            var num_types = parseInt($(span_id).text());
            // console.log(span_id);
            $(span_id).html(num_types + 1);
        }
    });
}

function updateTable() {
    sel_skills = [];
    for (id in active_skills) {
        var className = $("#" + id + "_class_dropdown").val();
        var specName = $("#" + id + "_spec_dropdown").val();
        //console.log(id, className, specName)
        active_skills[id].forEach(function (skillName) {
            skillName_data = skill_data[className][specName][skillName];
            if (skillName_data) {
                sel_skills.push(skillName_data);
            } else {
                sel_skills.push(skill_data[className]['Base'][skillName]);
            }
        });
    }

    // Calculate Skill Damage Table
    resetDmgTable();
    updateDmgTable(sel_skills);

    // Calculate Bind/Ailment Table
    resetAilBindTable();
    updateAilBindTable(sel_skills);

    //Calculate Buffs
    resetBuffTable();
    updateBuffTable(sel_skills);

    resetDebuffTable();
    updateDebuffTable();

    // Calculate Heal Table
    resetHealTable();
    updateHealTable(sel_skills);
}