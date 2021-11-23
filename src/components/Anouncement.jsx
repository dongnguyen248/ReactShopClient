import styled from 'styled-components';
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
`;
const Anouncement = () => {
    return <Container>Supper Deal! Free ship for Order Over 50$.</Container>;
};

export default Anouncement;
