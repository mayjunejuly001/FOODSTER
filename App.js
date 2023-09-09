import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = (
  <div>
    <h1>hi this is h1 heading</h1>
  </div>
)

const JsxHeading = () => (
  <div>
    {Title}
    <h1 id='heading' tabIndex='5'>
      Namaste React
    </h1>
  </div>
)

const Headingcomponent = () => {
  return (
    <div>
      <JsxHeading />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Headingcomponent />)
