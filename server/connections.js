Meteor.onConnection(function(conn) {

    var c_id;
    var ip = conn.clientAddress;
    var connection = {
        ip: ip,
        datetime: new Date(),
        count: 1
    };

    var existing_conns = Connections.findOne({ip: ip});
    if (existing_conns) {
        c_id = existing_conns._id;
        Connections.update( c_id, { $inc: {count: 1} });
    } else {
        c_id = Connections.insert(connection);
    }

    conn.onClose(function() {
        var logged_connection = Connections.findOne(c_id);
        if (logged_connection.count > 1) {
            Connections.update( c_id, { $inc: {count: -1}});
        } else {
            Connections.remove( c_id );
        }
    });
});

Meteor.startup(function() {
    Connections.find().map(function(conn, index, cursor) {
        Connections.remove(conn);
    });
});
