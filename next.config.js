const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')
const css = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')

const withSassModule = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 2,
        localIdentName: '[local]___[hash:base64:5]'
    },
    webpack: config => {
        config.module.rules.forEach(rule => {
            if (rule.test.toString().includes('.scss')) {
                rule.rules = rule.use.map(useRule => {
                    if (typeof useRule === 'string') {
                        return {
                            loader: useRule
                        }
                    }

                    if (useRule.loader.startsWith('css-loader')) {
                        return {
                            oneOf: [
                                {
                                    test: new RegExp('.global.scss$'),
                                    loader: useRule.loader,
                                    options: {
                                        ...useRule.options,
                                        modules: false
                                    }
                                },
                                {
                                    loader: useRule.loader,
                                    options: useRule.options
                                }
                            ]
                        }
                    }

                    return useRule
                })

                delete rule.use
            }
        })
        return config
    }
})

module.exports = withPlugins([css, optimizedImages], withSassModule)
