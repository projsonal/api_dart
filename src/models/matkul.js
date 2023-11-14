const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/namaDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const MataKuliah = mongoose.model('MataKuliah', {
    nama: String,
    deskripsi: String,
    // tambahkan bidang lain yang diperlukan
});

module.exports = MataKuliah;
