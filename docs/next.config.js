const withPlugins = require('next-compose-plugins')

const withNextra = require('nextra')({
   theme: 'nextra-theme-docs',
   themeConfig: './theme.config.js',
})

const withBeforeBuild = require('./scripts/pre-build')({
   environment: process.env.APP_ENV,
   nodeEnv: process.env.NODE_ENV
})

module.exports = withPlugins([[withNextra], [withBeforeBuild]], {
   assetPrefix: './',
   basePath: '/reactar',
})