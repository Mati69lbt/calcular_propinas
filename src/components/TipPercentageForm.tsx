const tipOptions = [
  {
    id: "tip-01",
    value: 0.01,
    label: "1%",
  },
  {
    id: "tip-05",
    value: 0.05,
    label: "5%",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-15",
    value: 0.15,
    label: "15%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-25",
    value: 0.25,
    label: "25%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
  {
    id: "tip-75",
    value: 0.75,
    label: "75%",
  },
  {
    id: "tip-100",
    value: 1,
    label: "100%",
  },
];

type TipPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  return (
    <div >
      <h3 className="font-black text-2xl mb-2">Propina:</h3>
      <form className="grid grid-cols-2 gap-2 justify-evenly">
        {tipOptions.map((tipOptions) => (
          <div className="flex  items-center gap-2" key={tipOptions.id}>
            <input
              id={tipOptions.id}
              type="radio"
              name="tip"
              value={tipOptions.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOptions.value === tip}
              className="mr-2"
            />
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}
