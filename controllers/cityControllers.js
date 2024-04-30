const City = require('../models/city');

// Mendapatkan semua kota
exports.getAllCities = async (req, res) => {
    try {
        const cities = await City.find();
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Mendapatkan kota berdasarkan ID
exports.getCityById = async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if (!city) {
            return res.status(404).json({ message: 'Kota tidak ditemukan' });
        }
        res.status(200).json(city);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Menambahkan kota baru
exports.addCity = async (req, res) => {
    try {
        // Cek apakah kode kota sudah ada
        const existingCity = await City.findOne({ code: req.body.code });
        if (existingCity) {
            return res.status(400).json({ message: 'Kode kota telah ada!!!!!' });
        }

        // Jika kode kota belum ada, buat kota baru
        const city = new City({
            code: req.body.code,
            city_name: req.body.city_name,
            description: req.body.description
        });

        const newCity = await city.save();
        res.status(201).json(newCity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mengupdate kota
exports.updateCity = async (req, res) => {
    try {
        const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!city) {
            return res.status(404).json({ message: 'Kota tidak ditemukan' });
        }
        res.status(200).json(city);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Menghapus kota
exports.deleteCity = async (req, res) => {
    try {
        const city = await City.findByIdAndDelete(req.params.id);
        if (!city) {
            return res.status(404).json({ message: 'Kota tidak ditemukan' });
        }
        res.status(200).json({ message: 'Kota berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};