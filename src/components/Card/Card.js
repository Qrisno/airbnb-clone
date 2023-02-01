
import "./Card.css";

function Card({inStock, img, rating, views,title, price}) {
  return (
    <div className="card">
        <div className="preview">
            <span className="stockState">{inStock}</span>
            <img alt="preview" src={img}/>
        </div>

        <div className="description">
            <img src="../../assets/images/star.svg"/>
            <span>{rating} ({views}) USA</span>
        </div>

           <span>{title}</span> 
           <span>From {price}/person</span> 
    </div>
  );
}

export default Card;