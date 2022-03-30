import './list.css';
import Item from '../item/item';


const List = (props) => {

    const result = [];

    if (props.isBest) {

    }

    if (props.isBest) {

        return (
            <div class="list list--best">
                <div class="list__row">
                    <Item item={props.data.items[6]} isBest={true}/>  
                    <Item item={props.data.items[7]} isBest={true}/>  
                    <Item item={props.data.items[8]} isBest={true}/>  
                </div>
            </div>
        )
    } else {
        return (
            <section class="list">
                    <div class="list__row">
                        <Item item={props.data.items[0]}/>  
                        <Item item={props.data.items[1]}/>  
                        <Item item={props.data.items[2]}/> 
                    </div>
                    <div class="list__row">
                        <Item item={props.data.items[3]}/>  
                        <Item item={props.data.items[4]}/>  
                        <Item item={props.data.items[5]}/> 
                    </div>
            </section>
        )
    }

}

export default List;