const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'goog:chromeOptions': {
                headless: process.env.HAS_HEAD === 'true' ? false : true
            }
        }]
    }
}
