import {useSelector} from "react-redux";
import {CartItem} from "./CartItem.jsx";
import Modal from "./Modal.jsx";

export function CartContainer() {
    const {total, items} = useSelector(state => state.cart);

    return (
        <section className="mt-5 container">
            <div className="row">
                {items.map(item => <CartItem key={item.id} {...item}/>)}
            </div>
            <hr/>
            <div className="d-flex justify-content-between">
                <h3>Total</h3>
                <h3>${total.toFixed(2)}</h3>
            </div>
            <div className="border-top d-flex justify-content-center mb-5 pt-3">
                <Modal/>

                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Clear bag
                </button>
            </div>
        </section>
    )
}