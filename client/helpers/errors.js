Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message, class: "info", type: "Error"})
}
