export default ngModule => {

    require('./user/SessionService.js')(ngModule);
    require('./user/UserFactory.js')(ngModule);

    require('./activities/Activities.js')(ngModule);
    require('./dashboard/Dashboard.js')(ngModule);
    require('./categories/Category.js')(ngModule);
    require('./tags/Tags.js')(ngModule);

};
