Meteor.onConnection(function(conn) {

    console.log(conn.id);

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

    var reg_id = Registry.findOne()._id;
    Registry.update(reg_id, { 
        $addToSet: {connections: connection}
    });

    conn.onClose(function() {
        console.log("disconnect:" + ip);
        var logged_connection = Connections.findOne(c_id);
        console.log("count:" + logged_connection.count);
        if (logged_connection.count > 1) {
            Connections.update( c_id, { $inc: {count: -1}});
        } else {
            Connections.remove( c_id );
        }
    });

});