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
            var span_id = '#'.concat(skill_info['bind']).concat('bind_num');
            var num_binds = parseInt($(span_id).text());
            $(span_id).html(num_binds+1);
        }
    });

}

function resetDmgTable() {
    var damage_types = ['physical', 'ranged', 'fire', 'ice', 'volt'];
    var damage_targets = ['enemy', 'row', 'aoe', 'multi'];

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
            damage_types = new Set(skill_info['damage'].split(' '));
            damage_target = skill_info['damage target'];
            damage_types.forEach(function (dmg_type) {
                var span_id = '#'.concat(dmg_type).concat('_').concat(damage_target);
                var num_types = parseInt($(span_id).text());
                // console.log(span_id);
                $(span_id).html(num_types + 1);
            });
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

}