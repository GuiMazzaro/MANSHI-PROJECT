import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    background-color: ${(props) => props.backgroundT};

    .title{
        padding-left: 60px;
        padding-top: 20px;
        font-size: 30px;
        font-weight: bold;
        color: white;
    }

    .text{
        padding-left: 60px;
        padding-right: 60px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: ${(props) => props.colorT};
        text-align: justify;
    }

`