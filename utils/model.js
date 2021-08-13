const {
    Experience, Research,
    Journal, Projects, Talks, Conference, ConferenceAbstract,
    Awards, ServiceInternationality, ServiceSpecialAgenda, ServiceAgendaChair,
    ServicePosterAgenda, ServiceAgendaCommittee, ServiceAgendaHost,
    ServiceAcademicCommittee, ServiceReviewers
} = require('../model/onlyText');
const {
    News, Students, ResearchInterests, Honor,
    ResearchPosters, EquipmentOverView, EquipmentDetailed
} = require('../model/includeImg');
const classes = {
    Experience, Research,
    Journal, Projects, Talks, Conference, ConferenceAbstract,
    Awards, ServiceInternationality, ServiceSpecialAgenda, ServiceAgendaChair,
    ServicePosterAgenda, ServiceAgendaCommittee, ServiceAgendaHost,
    ServiceAcademicCommittee, ServiceReviewers,
    News, Students, ResearchInterests, Honor,
    ResearchPosters, EquipmentOverView, EquipmentDetailed
}
module.exports = function (name) {
    return classes[name];
}