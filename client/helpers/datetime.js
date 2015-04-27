Template.registerHelper("dateTimeText", function(dateTime) {
    return moment(dateTime).format('MMM DD, YYYY h:mm A');
});

Template.registerHelper("dateTimeClass", function(dateTime) {
    return moment(dateTime).format('YYYY-MM-DD-hh-mm-ss');
});
