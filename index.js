import React, {Component} from 'react'
import {card, renderToEl, reset} from './devcards'
import radium from 'radium'

import {HelloWorld} from './components'

module.onReload && module.onReload(reset);

card({
  target: HelloWorld
})

card({
  docs: 'This is a card without a name',
  target: HelloWorld
})

card({
  name: 'HelloWorld',
  docs: 'This card is named',
  target: HelloWorld
})

card({
  name: 'HelloWorld with props',
  docs: 'This card is has been passed props',
  target: HelloWorld,
  props: {foo: 'bar'}
})

card({
  docs: `
    ### Documentation

    Cards can render markdown documentation

    \`\`\`
    code examples work
    \`\`\`
  `,
  target: HelloWorld
})

card({
  name: 'Doc only card',
  docs: '> Only docs here, friend'
})

card({
  docs: `
    ### ReactElement Cards

    Cards can be passed arbitrary ReactElement trees to render not just component classes.

    In this way components can be demonstrated while composed together.
  `,
  target: (
    <div>
      <HelloWorld/>
      <HelloWorld/>
    </div>
  )
})

if (typeof window !== 'undefined') renderToEl('devcards')
