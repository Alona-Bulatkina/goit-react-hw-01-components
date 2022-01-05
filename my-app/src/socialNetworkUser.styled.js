import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 50px;
    margin: 0;
    width: 200px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 4px 4px; 
`;
export const Image = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;
export const UserName = styled.p`
    font-weight: bold;
    font-size: 28px;
    line-height: 1.166em;
    text-align: center;
    color: #212121;
    
`;
export const Description = styled.p`
    font-weight: normal;
    font-size: 20px;
    line-height: 1.166em;
    text-align: center;
    color: gray;
`;
export const Stats = styled.ul`
    padding: 0;
    margin: 0;
`;
export const StatsLi = styled.li`
    list-style: none;
    font-weight: 200;
    font-size: 20px;
    line-height: 1.166em;
    text-align: center;
    color: gray;
    
    &:not(:last-child) {
    margin: 5px;
}
`;
 export const StatsQuantity = styled.span`
 color: black;
 `;
