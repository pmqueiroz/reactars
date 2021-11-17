const fs = require('fs')
const cp = require('child_process')

const LAST_SHA_COMMAND = 'git rev-parse HEAD'
const STATUS_PATH = 'status.json'

const updateStatus = (nodeEnv) => {
   if (nodeEnv !== 'production') return
   
   const lastSHA = cp.execSync(LAST_SHA_COMMAND).toString().replace('\n', '')

   const data = {
     lastSHA,
     buildDate: new Date()
   }

   fs.writeFile(STATUS_PATH, JSON.stringify(data), function (err) {
     if (err) return console.error(err)
   })
}

class RunBeforeBuild {
  constructor(options) {
    this.environment = options.environment
    this.nodeEnv = options.nodeEnv
  }

  apply(compiler) {
    compiler.hooks.afterEnvironment.tap('RunBeforeBuild', () => {
      updateStatus(this.nodeEnv)
    })
  }
}

module.exports =
  ({ environment, nodeEnv } = {}) =>
  (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        config.plugins.push(
          new RunBeforeBuild({
            environment,
            nodeEnv,
            ignoreRunWhen: false
          })
        )

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options)
        }
        return config
      }
    })
  }
