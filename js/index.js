var ids = ['m1', 'm2', 'm3', 'm4', 'm5']
active_skills = {};


$(document).ready(function () {
    ids.forEach(function (id) {
        loadClasses(id);
        loadSpecs(id, 'none');
        active_skills[id] = new Set();
    });
});

function loadClasses(item_id) {
    var html_str = "<option value='none'>(None)</option>";
    Object.keys(skill_data).forEach(function (item) {
        html_str += '<option value="' + item + '">' + formatName(item) + '</option>'
    });
    $('#' + item_id + '_class_dropdown').html(html_str);
}

function loadSpecs(item_id, className) {
    var html_str = '<option value="Base">(None)</option>';
    if (className !== 'none') {
        Object.keys(skill_data[className]['specializations']).forEach(
            function (index) {
                var item = skill_data[className]['specializations'][index];
                html_str += '<option value="' + item + '">' + item + '</option>';
            });
    }
    $('#' + item_id + '_spec_dropdown').html(html_str);
}

function updateClass(item_id) {
    var className = $('#' + item_id + '_class_dropdown').val();
    if (className === "none") {
        $('#' + item_id + '_base_skills').html("Base Skillz go here");
    } else {
        loadSkills(item_id, className, 'Base');
    }
    loadSpecs(item_id, className);
    updateImg(item_id, className);
    updateTitle(item_id, className, 'None');
    active_skills[item_id].clear();
    updateTable()
    $('#' + item_id + '_spec_skills').html("Second Name Skillz go here");
}

function updateTitle(item_id, className, specName) {
    // Modify pillbox title
    $('#' + item_id + '_tab').html(formatName(className));

    // Modify Internal title
    if (specName === 'Base') {
        specName = 'None';
    }
    var page_title = formatName(className)
    if (className !== 'none') {
        page_title += " <small>(" + specName + ")</small>";
    }
    $('#' + item_id + '_title').html(page_title)
}

function updateImg(item_id, className) {
    var filename = 'static/images/classes/' + className.charAt(0) + className.charAt(1) + '.png'
    $('#' + item_id + '_img').attr('src', filename);
}

function displaySkillData(item_id, className, tree, skill_name) {
    html_str = '<h5><b>' + skill_name + '</b></h5>';
    html_str += "<p>" + skill_data[className][tree][skill_name]['description'] + "</p>"
    html_str += "<h6 style='margin-bottom:0;'>Requirements</h6><ul style='list-style:none;'>"
    var new_list = ""
    Object.keys(skill_data[className][tree][skill_name]['requirements']).forEach(function (req_key) {
        new_list += "<li class='req_li'>";
        new_list += req_key + " @ Level " + skill_data[className][tree][skill_name]['requirements'][req_key];
        new_list += "</li>";
    });
    if (new_list === "") {
        new_list += "<i class='req_li'>None</i>"
    }
    html_str += new_list;
    html_str += "</ul>"
    $('#' + item_id + '_skill_data').html(html_str);
}

function activateRequirements(item_id, className, tree, skill_name) {
    //console.log(className, tree, skill_name);
    skill_reqs = Object.keys(skill_data[className][tree][skill_name]['requirements']);
    skill_reqs.forEach(function (req_skill) {
        //console.log(req_skill);

        var tree_use = tree;
        if (!(new Set(Object.keys(skill_data[className][tree])).has(req_skill))) {
            tree_use = 'Base';
        }
        if (!active_skills[item_id].has(req_skill)) {
            selectSkill(item_id, className, tree_use, req_skill);
        }

        //FIGURE OUT WHAT THIS CODE DOES??
        /*if (Object.keys(skill_data[className][tree_use][req_skill]['requirements']).length > 0) {
            req_skill_reqs = Object.keys(skill_data[className][tree_use][req_skill]['requirements']);
            req_skill_reqs.forEach(function (req_req_skill) {
                selectSkill(item_id, className, tree_use, req_req_skill);
            });  
        }*/
    });
}

function selectSkill(item_id, className, tree, skill_name) {
    id_name = formatID("#" + item_id + '_' + skill_name);
    $(id_name).toggleClass('skillbox_unselected skillbox_selected');
    if (active_skills[item_id].has(skill_name)) {
        active_skills[item_id].delete(skill_name);
    } else {
        active_skills[item_id].add(skill_name);
        activateRequirements(item_id, className, tree, skill_name);
    }
    console.log(active_skills[item_id])
    updateTable();
}

function loadSkills(item_id, className, specName) {
    skills = skill_data[className][specName];
    html_str = ''
    Object.keys(skills).forEach(function (skill_name) {
        id_name = formatID(item_id + '_' + skill_name);
        html_str += '<div id="' + id_name + '" class="skillbox skillbox_unselected"\
         onmouseover="displaySkillData(\''+ item_id + '\',\'' + className + '\', \'' + specName + '\', \'' + skill_name + '\');"\
          onclick="selectSkill(\''+ item_id + '\',\'' + className + '\',  \'' + specName + '\', \'' + skill_name + '\')">';
        html_str += '<b>' + skill_name + '</b>';
        //html_str += '<p style="display:none;">' + skills[skill_name]['description'] + '</p>'
        html_str += '</div>';
    });
    if (specName === 'Base') {
        $('#' + item_id + '_base_skills').html(html_str);
    }
    else {
        $('#' + item_id + '_spec_skills').html(html_str);
    }
}

function updateSpec(item_id) {
    var className = $('#' + item_id + '_class_dropdown').val();
    var specName = $('#' + item_id + '_spec_dropdown').val();

    sel_skills = active_skills[item_id];
    base_skills = new Set(Object.keys(skill_data[className]['Base']));
    sel_skills.forEach(function (skill) {
        if (!base_skills.has(skill)) {
            sel_skills.delete(skill);
        }
    });
    active_skills[item_id] = sel_skills;
    if (specName === 'Base') {
        $('#' + item_id + '_spec_skills').html("Second Name Skillz go here");
    } else {
        loadSkills(item_id, className, specName);
    }
    updateTitle(item_id, className, specName);
    updateTable()
}