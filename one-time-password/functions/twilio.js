const twilio = require('twilio');
const config = require('./twilio_config.json');

const accountSid = config.accountSid;
const authToken = config.authToken;

module.exports = new twilio.Twilio(accountSid, authToken);
