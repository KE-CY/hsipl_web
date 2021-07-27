class Default {
    constructor() {
        this.createAT = new Date().toLocaleString();
        this.updateAT = [];
        this.isDelete = false;
    }
}
class Experience extends Default {
    constructor(date, institution, major, degree) {
        super();
        this.date = date;
        this.institution = institution
        this.major = major;
        this.degree = degree;
    }
}
class Research extends Default {
    constructor(years, employer, position) {
        super();
        this.years = years;
        this.employer = employer;
        this.position = position;
    }
}
class Journal extends Default {
    constructor(author, title, link, description, mark) {
        super();
        this.author = author;
        this.title = title;
        this.link = link;
        this.description = description;
        this.mark = mark;
    }
}
class Projects extends Default {
    constructor(title, date, subsidyUnit, money) {
        super();
        this.title = title;
        this.date = date;
        this.subsidyUnit = subsidyUnit;
        this.money = money;
    }
}
class Talks extends Default {
    constructor(year, place, topic) {
        super();
        this.year = year;
        this.place = place;
        this.topic = topic;
    }
}
class Conference extends Default {
    constructor(year, title, link) {
        super();
        this.year = year;
        this.title = title;
        this.link = link;
    }
}
class ConferenceAbstract extends Default {
    constructor(year, title, link) {
        super();
        this.year = year;
        this.title = title;
        this.link = link;
    }
}
class Awards extends Default {
    constructor(year, place, award) {
        super();
        this.year = year;
        this.place = place;
        this.award = award;
    }
}
class ServiceInternationality extends Default {
    constructor(date, place, title) {
        super();
        this.date = date;
        this.place = place;
        this.title = title;
    }
}
class ServiceSpecialAgenda extends Default {
    constructor(date, title) {
        super();
        this.date = date;
        this.title = title;
    }
}
class ServiceAgendaChair extends Default {
    constructor(date, title) {
        super();
        this.date = date;
        this.title = title;
    }
}
class ServicePosterAgenda extends Default {
    constructor(date, title) {
        super();
        this.date = date;
        this.title = title;
    }
}