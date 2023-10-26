import React, { useState } from "react";

const DrinkWater = () => {
  const [Weight, setWeight] = useState<number>();
  const [Water, SetWater] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value);
    //console.log(Weight);
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const btnText = theme === "light" ? "☀️ Light" : "🌛 Dark";
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const waterAmount = Weight * 33;
    //setWeight(waterAmount);
    SetWater(waterAmount);
    //console.log(Weight);
  };

  return (
    <>
      <div className={theme}>
        <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
        <h2>
          {Water === undefined || Water === 0
            ? "x มล."
            : Water.toFixed(1) + " มล."}
        </h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="weight"
            placeholder="น้ำหนักของคุณ (กิโลกรัม)"
            onChange={onChangeWeight}
          />
          <input type="submit" value="คำนวณ" />
        </form>

        <button className="theme-btn" onClick={toggleTheme}>
          {btnText}
        </button>
      </div>
    </>
  );
};
export default DrinkWater;
