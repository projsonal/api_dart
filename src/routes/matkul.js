const express = require('express');
const router = express.Router();
const MataKuliah = require('./models');

// Daftar Mata Kuliah
router.get('/matakuliah', async (req, res) => {
    try {
        const matkuliahs = await MataKuliah.find();
        res.json(matkuliahs);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Buat Mata Kuliah baru
router.post('/matakuliah', async (req, res) => {
    try {
        const mataKuliah = new MataKuliah(req.body);
        await mataKuliah.save();
        res.send(mataKuliah);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Detail Mata Kuliah berdasarkan ID
router.get('/matakuliah/:id', async (req, res) => {
    try {
        const mataKuliah = await MataKuliah.findById(req.params.id);
        res.json(mataKuliah);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update Mata Kuliah berdasarkan ID
router.put('/matakuliah/:id', async (req, res) => {
    try {
        await MataKuliah.findByIdAndUpdate(req.params.id, req.body);
        res.send('Mata Kuliah berhasil diupdate');
    } catch (error) {
        res.status(500).send(error);
    }
});

// Hapus Mata Kuliah berdasarkan ID
router.delete('/matakuliah/:id', async (req, res) => {
    try {
        await MataKuliah.findByIdAndDelete(req.params.id);
        res.send('Mata Kuliah berhasil dihapus');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
