class Colors{
    constructor(name, code){
        this.name = name;
        this.code = code;
    }
}

const allColors = [
    new Colors('brighted', '#E74C3C'),
    new Colors('soothingpurple', '#9B59B6'),
    new Colors('skyblue', '#5DADE2'),
    new Colors('leafygreen', '#48C9B0'),
    new Colors('sunkissedyellow', '#F4D03F'),
    new Colors('groovygray', '#D7DBDD'),
];

exports.getrandomColor = () => {
    return allColors[Math.floor(Math.random() * allColors.length)];
}

exports.allColors = allColors;

exports.getBlue = () => {
    return allColors[2];
}