"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <section>
      <h1>Componente <strong>ClickCounter</strong></h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Haz click aquí
      </button>
      <h3>
        Has presionado el botón {counter} {counter == 1 ? "vez" : "veces"}
      </h3>
    </section>
  );
}
