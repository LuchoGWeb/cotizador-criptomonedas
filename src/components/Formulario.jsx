import { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color 3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {
    const monedas = [
        { id: "USD", nombre: "Dólar de EE.UU"},
        { id: "EUR", nombre: "Euro"},
        { id: "GBP", nombre: "Libra esterlina"}
    ]

    const [criptos, setCriptos] = useState([]);
    const [error, setError ] = useState(false); /* Validación de formulario */


    /* Custom hooks */
    const [ moneda, SelectMonedas ] = useSelectMonedas("Seleccionar moneda", monedas);
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas("Seleccionar criptomoneda", criptos);


    /* Conexión a la API */
    useEffect(() => {
        const consultarAPI = async () =>{
            const url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            /* Extracción de la información */
            const arrayCriptos = resultado.Data.map( cripto => {
                const objeto ={
                    id:cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })

            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, []);

    /* Validación del formulario */
    const handleSubmit = (event) =>{
        event.preventDefault();

        if([moneda, criptomoneda].includes("")){
            setError(true);

            return;
        }

        setError(false);
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form 
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptomoneda />
                <InputSubmit 
                    type="submit" 
                    value="Cotizar" 
                />
            </form>
        </>    
    )
}

export default Formulario