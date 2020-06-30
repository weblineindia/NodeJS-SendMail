const fs = require('fs')
const handlebars = require('handlebars')
const path = require('path')

class Template {
    async readTemplate(fileName) {
        const filepath = path.resolve(__dirname, fileName)
        return fs.readFileSync(filepath, 'utf-8')
    }

    async activateEmail(userDetails, link) {
        let subject
        let htmlTemplate
        let template
        let replacements
        var htmlToSend
        let options

        subject = 'Activate Account'
        htmlTemplate = await this.readTemplate('activateLink.html')
        template = handlebars.compile(htmlTemplate)
        replacements = {
            username: userDetails.username,
            passwordLink: link
        }
        htmlToSend = template(replacements)
        options = {
            from: userDetails.fromEmail,
            to: userDetails.toEmail,
            subject: subject,
            text: 'I hope this message gets sent!',
            html: htmlToSend
        }
        return options
    }

    async attachmentEmail(userDetails, attachmentObj) {
        let subject, htmlTemplate, template, replacements, htmlToSend, options, imagepath

        subject = 'Message From ' + userDetails.username
        htmlTemplate = await this.readTemplate('attachment.html')
        // imagepath = path.resolve(__dirname, 'Header_Cowelless_1.png')
        template = handlebars.compile(htmlTemplate)
        replacements = {
            username: userDetails.username
        }
        htmlToSend = template(replacements)
        options = {
            from: userDetails.fromEmail,
            to: userDetails.toEmail,
            subject: subject,
            text: 'I hope this message gets sent!',
            // attachments: [{
            //     filename: 'Header_Cowelless_1.png',
            //     path: imagepath,
            // }],
            attachments: attachmentObj,
            html: htmlToSend
        }
        return options
    }
}

module.exports = Template