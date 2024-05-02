const axios = require('axios');
const PortalAccount = require('../models/portal_account');

module.exports = {
    getAllAccounts: async (req, res) => {
        try {
            const response = await axios.get('https://portal.aptana.co.id/api/v1/Account', {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'd3cc25885aaf352e0c2fc422d3b1e950'
                }
            });
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

