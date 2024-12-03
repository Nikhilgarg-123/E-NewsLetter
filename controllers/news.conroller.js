const News = require('../models/news.model');
const User = require("../models/user.model");
const mailer = require("../Service/email.service");
const Subscriber = require("../models/subscriber.model");

const postnews = async (req, res, next) => {
    try {
        const id = req.id;
       
        const email = await User.findById(id).select('email');

        const { title, description } = req.body;
        const news = new News({ title, description , email });
        await news.save();
        const subscribers = await Subscriber.find();
        const emailString = subscribers.map(subscriber => subscriber.email).join(', ');

        console.log(emailString);      
        await mailer(title, description,emailString)
        res.status(200).json({ success: true, message: 'News posted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

const getnews = async (req, res, next) => {
    try {
        const news = await News.find();
        res.status(200).json({ success: true, message: 'News fetched successfully', news });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

const getnewsbyid = async (req, res, next) => {
    try {
        const { id } = req.params;
        const news = await News.findById(id);
        res.status(200).json({ success: true, message: 'News fetched successfully', news });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

const getNewsperson = async (req, res, next) => {
    try {
        const { email } = req.params;
        const news = await News.find({ email });
        res.status(200).json({ success: true, message: 'News fetched successfully', news });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { postnews, getnews, getnewsbyid, getNewsperson };