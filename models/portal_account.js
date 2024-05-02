const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({

    accountNumber: {
        type: String,
        required: true
    },

    referenceID: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    emailAddress: {
        type: String,
        required: true
    },

    logoId: {
        type: String,
        required: true
    }

});

AccountSchema.method.toJSON = function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}

module.exports = mongoose.model('PortalAccount', AccountSchema);

