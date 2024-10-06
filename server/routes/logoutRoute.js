const express = require('express');
const router = express.Router();

//--------------------------------------------------------- Logout endpoint
router.post('/logout', (req, res) => {
    // Invalidate the token by simply clearing it from the client side
    // The client should remove the token from storage (e.g., localStorage or cookies)

    res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
