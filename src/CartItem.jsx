import {useDispatch} from "react-redux";
import {decrease, increase, removeItem} from "../store/features/cartSlice.js";

export function CartItem({title, id, price, amount, img}) {
    const dispatch = useDispatch();

    return <div className="mb-3 d-flex justify-content-between">
        <img src={img} alt={title} style={{height: "100px", maxWidth: "100px"}}/>
        <div>
            <h4>{title}</h4>
            ${price}
            <button className="btn btn-danger"
                    onClick={() => dispatch(removeItem(id))}
            >Remove
            </button>
        </div>
        <div>
            <button className="btn btn-primary" onClick={() => dispatch(increase(id))}>+</button>
            <span className="d-inline-block mx-3">{amount}</span>
            <button className="btn btn-primary" onClick={() => dispatch(decrease(id))}>-</button>
        </div>
    </div>;
}