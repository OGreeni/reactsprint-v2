import React, { useEffect } from "react";

export default function SolutionTimer() {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      } else {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex items-center gap-2">
      <button className="btn-warning btn-sm btn">View Solution</button>
      <span className="countdown font-mono text-2xl">
        {/* @ts-ignore */}
        <span style={{ "--value": minutes }}></span>:{/* @ts-ignore */}
        <span style={{ "--value": seconds }}></span>
      </span>
    </div>
  );
}
