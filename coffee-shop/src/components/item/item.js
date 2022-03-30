import './item.css';


const Item = (props) => {
    if (props.isBest) {
        return (
            <a href={props.item.href} class="item item--best">
                <div class="item__image-wrapper">
                    <img class="item__image" 
                        src={props.item.img} 
                        alt={props.item.altImg}
                    />
                </div>
                <div class="item__name">{props.item.title}</div>
                <div class="item__price">{props.item.price}$</div>
            </a>
        )
    } else {
        return (
            <a href={props.item.href} class="item">
                <div class="item__image-wrapper">
                    <img class="item__image" 
                        src={props.item.img} 
                        alt={props.item.altImg}
                    />
                </div>
                <div class="item__name">{props.item.title}</div>
                <div class="item__country">{props.item.origin}</div>
                <div class="item__price">{props.item.price}$</div>
            </a>
        )
    }
}

export default Item;