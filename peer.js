// the backend

const Stack = require('secret-stack')
const caps = require('ssb-caps')
const Keys = require('ssb-keys')
const path = require('path')
const envPaths = require('env-paths')

const appPath = envPaths('tauri-butt', { suffix: '' }).data
const keys = Keys.loadOrCreateSync(path.join(appPath, 'secret'))

const ssb = Stack({ caps })
  .use(require('ssb-db2'))
  .call(null, {
    path: appPath,
    keys,
    caps
  })

console.log('ssb running\n  ', ssb.id)
