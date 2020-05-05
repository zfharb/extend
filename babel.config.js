module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 12
            }
        }]
    ],
    plugins: [],
    env: {
        development: {
            sourceMaps: 'inline',
            plugins: ['source-map-support']
        }
    },
    comments: false
}
