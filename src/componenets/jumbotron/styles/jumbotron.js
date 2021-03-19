import styled from 'styled-components/macro'


export const Inner= styled.div`
    display:flex;
    align-item:center;
    flex-direction:${({direction})=>direction}
    justify-contnet:space-between;
    max-width:1100px;
    margin:auto;
    width:100%;

    @media (max-width:1000px){
        flex-direction:column;
    }

`
