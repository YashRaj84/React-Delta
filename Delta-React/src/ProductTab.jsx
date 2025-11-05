import Product from "./Product.jsx"

function ProductTab() {
    let options = ["hi-tech","durable","fast"];
    return (
        <>
            <Product title="Smartphone" price={30000}/>
            <Product title="Laptop" price={60000}/>
            <Product title="Pen" price={20}/>
        </>
    );
}
export default ProductTab;