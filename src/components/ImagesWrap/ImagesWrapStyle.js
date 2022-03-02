import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    background-color: black;
    align-items: center;
    justify-content: center;
    color: white;

    .wrap {
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wrap > img{
        width: 500px;
        height: 300px;
        padding-left: 50px;
        padding-right: 50px;
        padding-bottom: 50px;
        
    }

`