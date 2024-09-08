import useCarts from "../../../hooks/useCarts";


const Cart = () => {
    const [cart] = useCarts();
    return (
        <div>
            <h2 className="text-6xl">{cart.length}</h2>
            <h2 className="text-6xl">Tolal Price:</h2>
        </div>
    );
};

export default Cart;