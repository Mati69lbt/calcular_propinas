// cspell:ignore Matias,   Linkedin
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de <br className="block md:hidden" /> Propinas y Consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContent order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">No hay Consumos</p>
          )}
        </div>
      </main>
      <footer className="bg-teal-400 py-5 ">
        <div className="max-w-full mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <h3 className="font-bold text-lg ">Contacto</h3>
            <ul>
              <li>
                <p>mati69_lbt@hotmail.com</p>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/matiasdelgadodev/"
                >
                  {" "}
                  Linkedin
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/Mati69lbt">
                  {" "}
                  Github
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Tecnologías para este Proyecto
            </h3>
            <ul>
              <li>Vite</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© 2024 Derechos reservados. Matias Delgado</p>
        </div>
      </footer>
    </>
  );
}

export default App;
