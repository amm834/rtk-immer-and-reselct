import React from 'react';
import {useDispatch} from "react-redux";
import {clearCart} from "../store/features/cartSlice.js";

const Modal = () => {

    const dispatch = useDispatch();


    return (
        <div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Do you want to clear cart?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={() => dispatch(clearCart())}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;