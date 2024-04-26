const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    code: String,
    city_name: String,
    description: String
}, 
{
    timestamps: true
});

citySchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('City', citySchema);

