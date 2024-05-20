import formatPrice from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

const OrderContent = ({ order, removeItem }: OrderContentProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="space-y-3 mt-10">
        <>
          <p className="text-center">Detalle de Gastos</p>
          {order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatPrice(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default OrderContent;
