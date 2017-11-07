""" Scraper to get skill data from EOV GAQ """

import re
import json
from os import listdir
from os.path import isfile, join

from bs4 import BeautifulSoup as bs


def requirements_li(tag):
    return tag.name == 'li' and 'Requirements' in tag.text


if __name__ == "__main__":
    mypath = 'scraper/pages/' # CHANGE ME
    pages = [join(mypath, f)
             for f in listdir(mypath) if isfile(join(mypath, f))]
    data = {}

    for page in pages:
        datum = {}
        file_ = open(page).read()
        file_ = file_.replace("\'", "")
        bs_file = bs(file_, 'lxml')
        bs_file = bs_file.find('div', {'id': 'faqwrap'})
        [s.extract() for s in bs_file('div', {"class": 'ftoc'})]

        spec_arr = str(bs_file.find('h3').string).split(':')
        class_name = spec_arr[0].strip().lower()
        spec_name = spec_arr[1].strip()
        if spec_name == 'Basic':
            spec_name = 'Base'

        # print(class_name, spec_name)
        if class_name not in data:
            data[class_name] = {}
            data[class_name]['specializations'] = []
        if spec_name not in data[class_name]:
            data[class_name][spec_name] = {}
            if spec_name != 'Base':
                data[class_name]['specializations'].append(spec_name)

        str_data = str(bs_file)
        data_arr = str_data.split("<h4>")[1:]

        for skill_data in data_arr:
            skill_name = re.sub('<a.*', '', skill_data)
            skill_name = skill_name.replace("\n</div>", "")
            datum[skill_name] = {}

            print(skill_name)
            skill_soup = bs(skill_data, 'lxml')

            # Extract the description
            skill_descr = skill_soup('p')
            if len(skill_descr) is 0:
                continue
            skill_descr = skill_descr[1]
            print('\tDescription:\n\t\t', str(skill_descr.string).strip())
            datum[skill_name]['description'] = str(skill_descr.string).strip()

            # Binds, ailments, healing, damage, etc
            datum[skill_name]['damage'] = ""
            datum[skill_name]['damage target'] = ""
            datum[skill_name]['buff'] = ""
            datum[skill_name]['buff target'] = ""
            datum[skill_name]['debuff'] = ""
            datum[skill_name]['debuff target'] = ""
            datum[skill_name]['bind'] = ""
            datum[skill_name]['ailment'] = ""
            datum[skill_name]['ailment target'] = ""
            datum[skill_name]['healing'] = ""
            datum[skill_name]['healing target'] = ""

            # Extract Requirements
            datum[skill_name]['requirements'] = {}
            skill_requirements = str(skill_soup.findAll(requirements_li)[0])
            if "None" not in skill_requirements:
                skill_requirements = re.sub('.+:', '', skill_requirements)
                skill_requirements = re.sub(
                    '<[lib/]+>', '', skill_requirements)
                skill_req_arr = skill_requirements.split(',')
                print('\tRequirements:')
                if len(skill_req_arr) == 1 and skill_req_arr[0] == '':
                    pass
                else:
                    for skill_req in skill_req_arr:
                        [req_name, req_level] = skill_req.split('level')
                        req_name = req_name.strip()
                        req_level = int(req_level.strip())
                        datum[skill_name]['requirements'][req_name] = req_level
                        print('\t\t', req_name, '@', req_level)

            # Extract Skill Table
            print('\tSkill Table:')
            datum[skill_name]['table'] = []
            skill_table = skill_soup('table')
            if len(skill_table) == 0:
                data[class_name][spec_name] = datum
                continue

            skill_table = skill_table[0]
            skill_rows = skill_table.findAll('tr')

            temp_dict = {}
            num_levels = -1
            for row in skill_rows:
                row_title = str(row.find('th').string)
                if row_title == "Level":
                    continue
                stat_arr = []
                for column in row.findAll('td'):
                    repeat = 1
                    if column.has_attr("colspan") and column.get("colspan"):
                        repeat = int(column.get("colspan"))
                    for i in range(repeat):
                        stat_arr.append(column.string)
                num_levels = len(stat_arr)
                print("\t\t", row_title, '\t', stat_arr)
                temp_dict[row_title] = stat_arr

            for i in range(num_levels):
                skill_obj = {}
                skill_obj['level'] = i + 1
                for key in temp_dict:
                    skill_obj[key] = temp_dict[key][i]
                datum[skill_name]['table'].append(skill_obj)

            print('\n')
            data[class_name][spec_name] = datum

    with open('js/scraper_output.json', 'w') as outfile: # CHANGE ME
        json.dump(data, outfile)

    print(data)
