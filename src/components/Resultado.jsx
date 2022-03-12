import { useState, useEffect } from 'react';
import styled from "@emotion/styled";

const ResultadoContenedor = styled.div`
    color: #fff;    
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    align-items: center;
`
const Imagen = styled.img`
    display: block;
    width: 150px;
    gap: 1rem;
    margin-top: 30px;
`

const Texto = styled.p`
    font-size: 20px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: 700;
    }
`


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado; 
    return (
        <ResultadoContenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio más alto del día: <span>{PRICE}</span></Texto>
                <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>El precio más bajo del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Variaciones de las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </ResultadoContenedor>
    )
}

export default Resultado