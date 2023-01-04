import { useEffect, useState } from "react";

function Counter({ myyear, mymonth, myday }) {
  const calculateTimeLeft = () => {
    const difference =
      +new Date(`${myyear}-${mymonth}-${myday}T18:20:00+05:30`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div>
      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p style={{ color: "red", border: "2px red solid ", badding: "90px" }}>
          <h3>{timeLeft.days} day</h3>
          <h3>{timeLeft.hours} hour</h3>
          <h3>{timeLeft.minutes} minute</h3>
          <h3>{timeLeft.seconds} second</h3>
        </p>
      ) : (
        <p>It is Jul Now 🔥</p>
      )}
    </div>
  );
}

export default Counter;
