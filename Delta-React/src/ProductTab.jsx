import Product from "./Product.jsx"

function ProductTab() {
    let options = ["hi-tech","durable","fast"];
    return (
        <>
            <Product title="phone" price={30000} features={options}/>
            {/* <Product title="laptop" price={60000}/>
            <Product title="pen" price={20}/> */}
        </>
    );
}
export default ProductTab;