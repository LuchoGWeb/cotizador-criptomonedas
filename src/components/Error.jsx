import { useState, useEffect } from 'react';
import styled from "@emotion/styled";

const Texto = styled.div`
    background-color: red;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error
