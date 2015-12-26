import {spawn} from 'child_process'
import {start} from './server'
import Tunnel from 'browserstacktunnel-wrapper'

const tunnel = new Tunnel({key: process.env.BROWSERSTACK_KEY})
const port = 3001

const test = () => {
  const nw = spawn('nightwatch')
  nw.stdout.pipe(process.stdout)
  nw.stderr.pipe(process.stderr)
  nw.on('close', (code) => {
    tunnel.stop(() => console.log('BrowserStack tunnel stopped'))
    process.exit(code)
  })
}

const onTunnelReady = (err) => {
  if (err) return console.log(err)
  console.log('BrowserStack tunnel ready')
  test()
}

const onServerReady = () => {
  console.log(`Test server started on ${port}`)
  tunnel.start(onTunnelReady)
}

start(port, onServerReady)
