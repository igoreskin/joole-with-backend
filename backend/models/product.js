const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    series: {type: String, required: true},
    code: {type: String, required: true},
    technical_data: {
        airflow: {type: String, required: true},
        power: {type: String, required: true},
        noise: {type: String, required: true},
        size: {type: String, required: true},
    },
    past: {type: String, required: true}
});

module.exports = mongoose.model('Product', productSchema);