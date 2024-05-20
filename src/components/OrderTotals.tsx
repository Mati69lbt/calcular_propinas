import { useMemo } from "react";
import { OrderItem } from "../types";
import formatPrice from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a Pagar: {""}
          <span className="font-bold">{formatPrice(subTotalAmount)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold">{formatPrice(tipAmount)}</span>
        </p>
        <p>
          Total a Pagar: {""}
          <span className="font-bold">{formatPrice(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-0"
        disabled={totalAmount === 0}
        onClick={() => placeOrder()}
      >
        Guardar Orden
      </button>
    </>
  );
};

export default OrderTotals;
