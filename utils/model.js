const {
    Experience, Research, Journal, Projects,
    Talks, Conference, ConferenceAbstract, Awards,
    ServiceInternationality, ServiceSpecialAgenda,
    ServiceAgendaChair, ServicePosterAgenda
} = require('../model/onlyText');
const classes = {
    Experience, Research, Journal, Projects,
    Talks, Conference, ConferenceAbstract, Awards,
    ServiceInternationality, ServiceSpecialAgenda,
    ServiceAgendaChair, ServicePosterAgenda
}
module.exports = function (name) {
    return classes[name];
}