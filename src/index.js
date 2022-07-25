/* import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
) */
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { StateProvider } from './StateProvide'
import reducer, { initialState } from './Reducer'
import './index.css'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
)
/* import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import App from './App'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App />
  </Suspense>
)
*/
