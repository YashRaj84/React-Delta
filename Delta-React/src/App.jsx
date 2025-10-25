import './App.css'
import Button from './Button.jsx'
import Product from './Product.jsx'

function Description() {
  return (
    <h2>This is the description.</h2>
  )
}
function App() {
  return (
    <div>
      <h1>
        Hello World.<br/>It's Delta 5.o Batch.
      </h1>
      <Description/>
      <Button/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  )
}

export default App;