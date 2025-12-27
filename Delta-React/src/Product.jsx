import './Product.css';
import Price from "./Price.jsx";
function Product({title, price, features}) {
    // let isDiscounted = price > 30000;
    // let styles = {backgroundColor: isDiscounted ? 'grey' :'lightgrey', padding: '10px', margin: '10px'};
    return (
        <div className="Product" style={styles}>
            <p>Title</p>
            <p>Description</p>
            <Price/>

        </div>
    )
}
export default Product;