const axios = require('axios');
const PortalAccount = require('../models/portal_account');

module.exports = {
    getAllAccounts: async (req, res) => {
        try {
            const apiKey = process.env.PORTAL_API_KEY;
            const response = await axios.get('https://portal.aptana.co.id/api/v1/Account', {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': apiKey
                }
            });
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

