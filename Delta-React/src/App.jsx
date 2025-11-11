import './App.css'
import Button from './Button.jsx'
import Product from './Product.jsx'
import ProductTab from './ProductTab.jsx'
// import Activity from './Activity.jsx'

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
      {/* <Activity userName='Yash' textColor='blue' />
      <Activity userName='Ashish' textColor='purple' />
      <Activity userName='Manish' textColor='violet' /> */}
      <ProductTab/>
    </div>
  )
}

export default App;