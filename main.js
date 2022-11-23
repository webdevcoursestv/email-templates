import { fileURLToPath } from 'url'
import { createServer } from 'vite'
import javascriptLogo from './javascript.svg'
import './style.css'

const __dirname = fileURLToPath(import.meta.url)

const root = __dirname

const server = await createServer({
  root,
  server: {
    port: 1337
  }
})

const { app } = server

app.use((req, res, next) => {

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.end(`
      <html>
        <head>
          <title>My Vite App</title>
        </head>
        <body>
        
          <img src="${javascriptLogo}" alt="JavaScript Logo" />
        </body>
      </html>
    `)
  } else {
    next()
  }
})

app.get('/api', (req, res) => {
  req.__dirname = __dirname
  req.root = root
  res.end('Hello from Vite!')
  res.json({ hello: 'world' })


})

// const counter = document.getElementById('counter')
// setupCounter(counter)

const logo = document.getElementById('logo')
logo.src = javascriptLogo

await server.listen()


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))