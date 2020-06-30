const AwsService = require('./service/awsService')
const Template = require('./template/template')

let template = new Template()

// service option can be aws or normal
async function mailService(serviceObj) {
  let returnObj
  let awsService = new AwsService(serviceObj.auth)
  switch (serviceObj.emailInfo.service) {
    case 'aws':
    case 'normal':
      returnObj = await sendEmail(serviceObj.emailInfo, serviceObj.template, awsService, serviceObj.attachment)
      break;
    default:
      break;
  }
  return returnObj
}

async function sendEmail(emailInfo, templateOption, awsService, attachmentObj) {
  let response
  try {
    let mailOptions
    const obj = {
      username: emailInfo.username,
      string: generateRandomString(),
      expirationTime: Date.now()
    }
    if (emailInfo.toEmail && templateOption && emailInfo.fromEmail) {
      let userobj = {
        username: emailInfo.username,
        fromEmail: emailInfo.fromEmail,
        toEmail: emailInfo.toEmail
      }
      if (templateOption === 'activateAccount') {
        const link = await generateLink(obj, emailInfo.hostname)
        mailOptions = await template.activateEmail(userobj, link)
      } else if (templateOption === 'attachment') {
        mailOptions = await template.attachmentEmail(userobj, attachmentObj)
      }
      response = await awsService.mailSend(mailOptions)
    } else {
      response = {
        statusCode: 400,
        message: 'Missing parameters'
      }
    }
    return response
  } catch (error) {
    return {
      statusCode: 400,
      message: 'Server got error,Failed to send mail.'
    }
  }
}

async function generateLink(obj, hostname) {
  const string = obj.username + '/' + obj.string + '/' + obj.expirationTime
  const generateString = Buffer.from(string).toString('base64')
  const link = hostname + generateString
  return link
}

function generateRandomString(length) {
  return Math.random()
    .toString(36)
    .replace(/[^a-zA-Z0-9]+/g, '')
    .substr(0, length)
}

exports.EmailService = mailService