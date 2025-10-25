function addSkill(skillsArray, skill) {
    if (typeof skill !== 'string' || skill.trim() === '') {
        throw new Error('Skill must be a non-empty string');
    }
    skillsArray.push(skill.trim());
    return skillsArray;
}

module.exports = { addSkill };