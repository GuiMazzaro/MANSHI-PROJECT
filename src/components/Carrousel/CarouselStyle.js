import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    height: 700px;
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    .textMiddle{
        font-size: 40px;
        padding: 30px;
    }

`