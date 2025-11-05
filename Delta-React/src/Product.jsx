import './Product.css';

function Product({title, price, features}) {
    // const list =  features.map((feature) => <li>{feature}</li>)
    let styles = {backgroundColor: price>30000 ? 'grey' :'lightgrey', padding: '10px', margin: '10px'};
    return (
        <div className="Product" style={styles}>
            <h3>Item: {title}</h3>
            <h4>Price: {price}</h4>
            {price > 30000 ? <p><b>Discount: 5%</b></p> : null}
            {/* OR */}
            {/* {price > 30000 && <p>Discount: 5%</p>} */}
        </div>
    )
}
export default Product;