import React, { useState } from 'react';
function MyButton({
  stack,
  handleIncrement,
}: {
  stack: number;
  handleIncrement: () => void;
}) {
  return <button onClick={handleIncrement}>{stack}</button>;
}

export default function MyApp() {
  const [increment, setIncrement] = useState<number>(0);

  const handleIncremnet = () => {
    setIncrement(increment + 1);
  };
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton handleIncrement={handleIncremnet} stack={increment} />
    </div>
  );
}
