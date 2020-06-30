class Config {
    constructor(port, host, secure, user, pass) {
        this.port = port,
            this.host = host,
            this.secure = secure,
            this.auth = {
                user: user,
                pass: pass
            },
            this.debug = true
    }
}

module.exports = Config