import { useState, useEffect } from 'react';
import styled from "@emotion/styled";

const Label = styled.label`
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 12px;
    border-radius: 50px;
`

/* Custom hooks */
const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState("");

   const SelectMonedas = () => (
       <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={ event => setState(event.target.value)}
        >
            <option value="">--Seleccione--</option>

            {opciones.map( opcion =>(
                <option
                    key={opcion.id}
                    value={opcion.id}
                >{opcion.nombre}</option>
            ))}
        </Select>
       </>
   )
   /* Con el return, podemos exportar el hook */
   return [ state, SelectMonedas];
}

export default useSelectMonedas
