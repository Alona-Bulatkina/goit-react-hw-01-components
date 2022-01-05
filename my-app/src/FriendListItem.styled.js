import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    padding: 20px;
    margin: 0;
    width: 250px;
    list-style: none;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 4px 4px; 

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;
export const Status = styled.span`
    margin-right: 20px;
    margin-top: 16px;
    margin-bottom: 16px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({eventType}) => (eventType ? `green` : `red`)};
    `;

export const Avatar = styled.img`
    margin-right: 20px;
`;
export const Name = styled.p`
font-weight: bold;
font-size: 22px;
line-height: 1.166em;
text-align: center;
color: black;
`;
