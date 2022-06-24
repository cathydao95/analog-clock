import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    let hr = time.getHours();
    let min = time.getMinutes().toLocaleString("en-US");
    let sec = time.getSeconds();

    document.getElementById("hourHand").style.transform = `rotate(${
      hr * 30
    }deg)`;

    document.getElementById("minuteHand").style.transform = `rotate(${
      min * 6
    }deg)`;

    document.getElementById("secondHand").style.transform = `rotate(${
      sec * 6
    }deg)`;

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="clock">
      <h2>Clock</h2>
      <div className="analog-clock">
        <div className="hand seconds" id="secondHand"></div>
        <div className="hand minutes" id="minuteHand"></div>
        <div className="hand hours" id="hourHand"></div>
      </div>
      {/* <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
      </div> */}

      <div className="digital-clock"></div>
    </div>
  );
}

export default Clock;
