import {Navbar} from "./Navbar.jsx";
import {CartContainer} from "./CartContainer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {calculateTotals, getAllCarts} from "../store/features/cartSlice.js";

function App() {
    const {items, isLoading} = useSelector(state => state.cart);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(calculateTotals());
    }, [items])

    useEffect(() => {
        dispatch(getAllCarts())
    }, [])

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <>
            <Navbar/>
            <CartContainer/>
        </>
    )
}

export default App
