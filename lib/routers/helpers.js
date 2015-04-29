addParity = function(doc, index, cursor) {
    var i = _.extend(doc, {index: index,
                           parity: (index%2)?'odd':'even',
                           class: 'plain'});
    return i;
};

