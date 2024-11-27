import ProductItem from "./ProductItem";

const ProductionCategory = () => {
    const productItem =
        [
            {
                name: "ball",
                price: 49.99,
                status: false
            },
            {
                name: "Foot",
                price: 29.99,
                status: true
            },
            {
                name: "Football",
                price: 19.99,
                status: true
            }
        ]
    return (
        <div>
            {
                productItem.map((product, index) => {
                    return <ProductItem productItem={product} key={product.name + index}/>
                })
            }

        </div>
    )
}

export default ProductionCategory