import React, { useEffect, useState } from "react";
import Index from "./components/Index";

export default function App(){
  const [granted, setGranted] = useState(null);

  useEffect(() => {
    // Access key prompt (one-time per session)
    try {
      const clave = "teamo2025";
      const entrada = sessionStorage.getItem("romantic_key_entered");
      if (entrada === clave) {
        setGranted(true);
        return;
      }
      const respuesta = prompt("Ingresa la clave para entrar 💌:");
      if (respuesta === clave) {
        sessionStorage.setItem("romantic_key_entered", clave);
        setGranted(true);
      } else {
        setGranted(false);
      }
    } catch (e) {
      setGranted(false);
    }
  }, []);

  if (granted === null) return null;
  if (!granted) return (
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:20,background:"#301934",color:"#fff",textAlign:"center"}}>
      <div>
        <h1 style={{fontSize:28,marginBottom:12}}>Acceso denegado 💔</h1>
        <p>Introduce la clave correcta para ver la página.</p>
      </div>
    </div>
  );

  return <Index />;
}
