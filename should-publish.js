import pkg from './package'
import semver from 'semver'
import {execSync} from 'child_process'

const npmVersion = semver.clean(execSync('npm show autokitty-components version').toString('utf8'))
const pkgVersion = semver.clean(pkg.version)

if (pkgVersion === npmVersion || semver.lt(pkgVersion, npmVersion)) {
  console.log('false')
} else {
  console.log('true')
}
