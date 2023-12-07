import Product from "./Product";

function ProductList(){

    let Products=[
        {id:1,name:"Levis Jeans",price:2000,url:"https://th.bing.com/th/id/OIP.QilEwZjrWJwf8JdNHqv8OgHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3"},
        {id:2, name:"Samsung M51",price:"34,000",url:"https://th.bing.com/th/id/OIP.ITVjyTlvdWNzSsbHLguo8QHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3"},
        {id:3, name:"Dell Monitor",price:"10,000",url:"https://th.bing.com/th/id/OIP.7GUE-cYD3MFGfTjMnnOmEAHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3"}
    ]

    return(
        <div className="productList">
            {
            Products.map((product)=>
        {
            return ( 
            <Product name={product.name} price={product.price} url={product.url} key={product.id}/>
            )
        }
        )
    }
        </div>
    )
    
}

export default ProductList;