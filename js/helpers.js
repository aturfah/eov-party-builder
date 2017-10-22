function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatID(name) {
    return name.toLowerCase().replace(/ /g, '_');
}
