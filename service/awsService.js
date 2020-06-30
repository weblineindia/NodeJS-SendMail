const Config = require('../config')
const nodemailer = require('nodemailer')
const { Exception } = require('handlebars')

class AwsService {
    constructor(configObj) {
        this.awsConfig = new Config(configObj.port, configObj.host, configObj.secure, configObj.user, configObj.pass)
        this.smtp = nodemailer.createTransport(this.awsConfig)
    }

    async mailSend(mailOptions) {
        // promise send mail
        return this.smtp
            .sendMail(mailOptions)
            .then((info) => {
                return {
                    statusCode: 200,
                    message: 'Mail Sent',
                    data: info
                }
            })
            .catch((err) => {
                throw new Exception({
                    statusCode: 400,
                    message: 'Failed to send',
                    data: err
                }, 400)
            })
    }
}

module.exports = AwsService