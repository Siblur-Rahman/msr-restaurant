import useCarts from "../../../hooks/useCarts";


const Cart = () => {
    const [cart] = useCarts();
    const totalPrice = cart.reduce((total, item) =>total + item.price, 0)
    return (
    <div>
        <div className="flex justify-evenly">
            <h2 className="text-4xl">Items: {cart.length}</h2>
            <h2 className="text-4xl">Tolal Price: {totalPrice}</h2>
            <button className="btn btn-primary">pay</button>
        </div>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th className="text-2xl uppercase">item Image</th>
              <th className="text-2xl uppercase">item name</th>
              <th className="text-2xl uppercase">price</th>
              <th className="text-2xl uppercase">action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) =><tr key={item._id}>
              <th>
                <label>
                  {index+1}
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src={item.image}
                            alt="Item image" />
                        </div>
                    </div>
                </div>
            </td>
              <td>
                {item.name}
              </td>
              <td>{item.price}</td>
              <th>
                <button className="btn btn-ghost btn-xs">delrte</button>
              </th>
            </tr>)

            }
          </tbody>
        </table>
      </div>
    </div>

    );
};

export default Cart;