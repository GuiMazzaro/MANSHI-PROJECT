import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .header{
        padding: 30px;
    }

    a{
        padding-left: 50px;
        text-decoration: none;
        font-size: 18px;
        color: ${(props) => props.color};
    }

`  