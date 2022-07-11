import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
    }

    button {
        background-color: #225ed8;
        padding: 8px 16px;
        border-radius: 8px;
        margin-left: 16px;

        &:hover {
            background-color: #2c5282;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }

        span {
            font-weight: 500;
            color: #ffff;
            transition: 0.3s ease-in-out;
        }

        &:hover > span {
            font-weight: bold;
            letter-spacing: 1px;
        }
    }
`;