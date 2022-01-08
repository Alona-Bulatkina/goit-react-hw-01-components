import styled from "@emotion/styled";

export const Table = styled.table`
border-collapse: collapse;
width: 300px;
background-color: #DCDCDC;
border: 3px solid black;

td, th {
    border: 1px solid black;
    padding: 3px;
    text-align: center;
    color: black;
}
th {
    background-color: #b0e0e6;
    
}
`;

export const Strings = styled.tbody`
tr:nth-of-type(odd) {
    background-color: white;   
}
 `;

