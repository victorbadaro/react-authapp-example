import styled from 'styled-components';

export const Container = styled.header`
    margin-bottom: 24px;
    height: 70px;
    background-color: #222;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        width: 75%;
        height: 100%;

        nav {
            a {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    border-radius: 2px;
                    background-color: #fff;
                    transition: width 200ms;
                }

                &:hover::after {
                    width: 100%;
                }

                & + a {
                    margin-left: 12px;
                }
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 40px;
            height: 40px;
            border: none;
            border-radius: 40px;
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