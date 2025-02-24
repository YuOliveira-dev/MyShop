import { useState } from "react";
import  React from 'react'

export const Counter: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <section>
      <h1>{value}</h1>

      <div>
        <button onClick={() => setValue(value - 1)}>Diminuir</button>
        <button onClick={() => setValue(value - 1)}>Aumentar</button>
      </div>
    </section>
  );
};
