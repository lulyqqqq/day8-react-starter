import "./ProductionItem.scss"

const ProductItem = () => {
    const productItem={
        name:"Football",
        price:49.99,
        status:true
    }
  return (
      <div className={"product-item-wrapper"}>
          <span>{productItem.name}</span>
          <span>{productItem.price}</span>
          {productItem.status ? <span className={"product-status-greed"}>In Stock</span> : <span className={"product-status-red"}>Out Stock</span>}
      </div>
  )
}

export default ProductItem