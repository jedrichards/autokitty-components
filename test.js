import {spawn} from 'child_process'
import {start} from './server'
import Tunnel from 'browserstacktunnel-wrapper'

const tunnel = new Tunnel({
  key: process.env.BROWSERSTACK_KEY
});

const test = () => {
  const nw = spawn('nightwatch')
  nw.stdout.pipe(process.stdout)
  nw.stderr.pipe(process.stderr)
  nw.on('close', (code) => process.exit(code))
}

const onTunnelStarted = (err) => {
  if (err) return console.log(err)
  console.log('Browserstack tunnel open')
  test()
}

const onServerStarted = () => {
  console.log('Server started on 3000')
  tunnel.start(onTunnelStarted)
}

start(3000, onServerStarted)
