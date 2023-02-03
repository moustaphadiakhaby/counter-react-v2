import minus from "../img/minus.png";
import plus from "../img/plus.png";

const Counter = ({ index, setCounter, counter, className }) => {
  return (
    <div className={className}>
      <div className="counterbox">
        <div
          onClick={() => {
            const newTab = [...counter];
            newTab[index] -= 1;
            setCounter(newTab);
          }}
          className={counter[index] <= 0 ? "hidden" : "minus"}
        >
          <img src={minus} alt="" />
        </div>
        <div className="number">{counter[index]}</div>
        <div
          onClick={() => {
            const newTab = [...counter];
            newTab[index] += 1;
            setCounter(newTab);
          }}
          className={counter[index] >= 10 ? "hidden" : "plus"}
        >
          <img src={plus} alt="" />
        </div>
      </div>
      <button
        onClick={() => {
          const newTab = [...counter];
          newTab[index] = 0;
          setCounter(newTab);
        }}
        className="reset"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
