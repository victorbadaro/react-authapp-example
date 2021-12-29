import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    form {
        min-width: 500px;

        input {
            display: block;
            padding: 40px;
            width: 100%;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            line-height: 26px;
            background-color: #222;
            color: #fff;

            & + input {
                margin-top: 12px;
            }
        }

        button {
            display: block;
            margin-top: 40px;
            padding: 40px;
            width: 100%;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            line-height: 26px;
            background-color: #4299E1;
            color: #fff;

            transition: background-color 200ms;

            &:hover {
                background-color: #3182CE;
            }

            &:focus {
                background-color: #2B6CB0;
            }
        }
    }
`;