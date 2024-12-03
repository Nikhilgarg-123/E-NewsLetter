const Subscriber = require("../models/subscriber.model");


const createsubscriber = async (req, res) => {
    try {
        const { email } = req.body;
        const subscriber = new Subscriber({ email });
        await subscriber.save();
        res.status(200).json({ success: true, message: "Subscriber created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports = { createsubscriber };