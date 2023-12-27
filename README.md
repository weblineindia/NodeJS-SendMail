# NodeJS SendMail

A NodeJS SendMail component used for sending mails using Amazon SES and normal mail service. 

## Table of contents

* [Getting started](#getting-started)
* [Features](#features)
* [Usage](#usage)
* [Mail Options](#mail-options)
* [Examples](#examples)
* [Want to Contribute?](#want-to-contribute)
* [Need Help / Support?](#need-help)
* [Collection of Other Components](#collection-of-components)
* [Changelog](#changelog)
* [Credits](#credits)
* [License](#license)
* [Keywords](#keywords)

## Getting started

Install the npm package:

``` bash
npm install nodejs-weblineindia-sendmail
#OR
yarn add nodejs-weblineindia-sendmail
```

## Features

* This component is used to send mails.
* Provides email templates for attachment and activating account.
* Also supports AWS send mail service and normal mail service.

## Usage

Use `EmailService` function to send email: 
  It is an asynchronous function.

``` js
const sendmail = require('nodejs-weblineindia-sendmail')
OR
import sendmail from 'nodejs-weblineindia-sendmail'
```

### use of `EmailService` function 

``` js
async function mailsend() {
    let result = await sendmail.EmailService({
        emailInfo: {
            service: 'normal',
            fromEmail: 'frommail@abc.com',
            toEmail: 'tomail@abc.com',
            username: 'username',
            hostname: 'hostsite'
        },
        auth: {
            host: 'smtp.abc.com',
            port: 587,
            user: 'user',
            pass: 'password'
        },
        template: 'activateAccount'
        attachment: [{ // utf-8 string as an attachment
            filename: 'photo.png',
            path: path.resolve(__dirname, 'photo.png')
        }]
    })
}

// call mailsend() function
mailsend()
```

## Mail Options

-------

### emailInfo :

* service 

    This has following option : 

    - 'aws' : Using AWS service
    - 'normal' : Using basic mail service

* fromEmail 

    Email address of that user who is sending mail.

* toEmail

    Email address of that user who is receiver for that mail.

* username

    optional field.Name of user to show in mail.

* hostname

    optional field.Host for link generation.

### auth :

* host 

    Hostname of service provider.

* port

    Port number.

* secure 

    true or false value.

* user

    username.

* pass

    password.

### template :

    This field provides option to choose mail template. It has two following templates:

        - activateAccount
        - attachment

### attachment : 

    This is optional field. It contains an array of attachment objects.

-----

## Examples

-----

Activate Account with link generation

``` js
async function mailsend() {
    let result = await sendmail.EmailService({
        emailInfo: {
            service: 'normal',
            fromEmail: 'abc@xyx.com',
            toEmail: 'tomail@getairmail.com',
            username: 'user',
            hostname: 'http://host/'
        },
        auth: {
            host: 'smtp.gmail.com',
            port: 587,
            user: 'abcd@user.com',
            pass: 'password'
        },
        template: 'activateAccount'
    })
}
// call mailsend() function
mailsend()
```

Attachment

``` js
async function mailsend() {
    let result = await sendmail.EmailService({
        emailInfo: {
            service: 'normal',
            fromEmail: 'abc@xyx.com',
            toEmail: 'tomail@getairmail.com'
        },
        auth: {
            host: 'smtp.gmail.com',
            port: 587,
            user: 'abcd@user.com',
            pass: 'password'
        },
        template: 'attachment',
        attachment: [{
            // utf-8 string as an attachment
            filename: 'image.png',
            path: path.resolve(__dirname, 'image.png')
        }]
    })
}
// call mailsend() function
mailsend()
```

## Want to Contribute?

* Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
* [Fork it](http://help.github.com/forking/).
* Create new branch to contribute your changes.
* Commit all your changes to your branch.
* Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use this NodeJS SendMail component in their software project. In case you want to customize this SendMail component to suit your development needs, then feel free to contact our [NodeJS developers](https://www.weblineindia.com/hire-node-js-developer.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/communities.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## Credits

nodejs-weblineindia-sendmail is inspired by [nodemailer](https://nodemailer.com/about/). 

## License

[MIT](LICENSE)

[mit]: https://github.com/miguelmota/is-valid-domain/blob/e48e90f3ecd55431bbdba950eea013c2072d2fac/LICENSE

## Keywords

nodejs-weblineindia-sendmail, nodejs-sendmail, nodejs, node-component, nodecomponent, node
