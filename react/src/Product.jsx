import './Product.css'

export default function Product({title, description, price}){
    let isDiscount=price>=100000;
    let styles={backgroundColor:isDiscount?"pink":""}
    return(
    <div className="box" style={styles}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <p>Price: Starts from {price}</p>
        {isDiscount?<p>Discount of 5%</p>:null}
    </div>
    
    )
}