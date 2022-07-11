import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;
    height: 250px;

    h1 {
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    p {
        text-align: justify;
        font-size: 18px;
        font-weight: bold;
        color: #ccc;
    }

    h4 {
        font-size: 13px;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 8px;

    div {
        margin: 8px;
        text-align: center;
    }

    span {
        color: gold;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 16px;
    width: 250px;
    height: 100%;
    margin: 8px;
`;