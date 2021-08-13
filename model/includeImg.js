const mongoose = require("mongoose")
const { v4: uuid } = require('uuid');
class Default {
    constructor() {
        this.id = null;
        this.createAT = null;
        this.updateAT = [];
        this.isDelete = false;
    }
    create() {
        this.id = uuid();
        this.createAT = new Date().toLocaleString();
    }
    update() {
        this.updateAT.push(new Date().toLocaleString());
    }
    delete() {
        this.isDelete = true;
    }
}
class News extends Default {
    constructor(title, fileName, describe, memo) {
        super();
        this.title = title;
        this.fileName = fileName
        this.describe = describe;
        this.memo = memo;
    }
}
class Students extends Default {
    constructor(name, direction, email, fileName, subject, level) {
        this.name = name;
        this.direction = direction;
        this.email = email;
        this.fileName = fileName;
        this.subject = subject;
        this.level = level;
    }
}
class ResearchInterests extends Default {
    constructor(title, fileName, describe) {
        this.title = title;
        this.fileName = fileName;
        this.describe = describe
    }
}
class Honor extends Default{
    constructor(title,fileName,describe,memo){
        this.title = title;
        this.fileName = fileName;
        this.describe = describe;
        this.memo = memo;
    }
}
class ResearchPosters extends Default{
    constructor(title,fileName){
        this.title = title;
        this.fileName = fileName;
    }
}
class EquipmentOverView extends Default{
    constructor(title,fileName){
        this.title = title;
        this.fileName = fileName;
    }
}
class EquipmentDetailed extends Default{
    constructor(classification,title,fileName){
        this.classification = classification;
        this.title = title;
        this.fileName = fileName;
    }
}
module.exports = {
    News,Students,ResearchInterests,Honor,
    ResearchPosters,EquipmentOverView,EquipmentDetailed
};