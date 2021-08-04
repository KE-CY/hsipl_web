const {
    Experience, Research,
    Journal, Projects, Talks, Conference, ConferenceAbstract,
    Awards, ServiceInternationality, ServiceSpecialAgenda, ServiceAgendaChair,
    ServicePosterAgenda, ServiceAgendaCommittee, ServiceAgendaHost,
    ServiceAcademicCommittee, ServiceReviewers
} = require('../model/webData');
const classes = {
    Experience, Research,
    Journal, Projects, Talks, Conference, ConferenceAbstract,
    Awards, ServiceInternationality, ServiceSpecialAgenda, ServiceAgendaChair,
    ServicePosterAgenda, ServiceAgendaCommittee, ServiceAgendaHost,
    ServiceAcademicCommittee, ServiceReviewers
}
module.exports = function (name) {
    return classes[name];
}