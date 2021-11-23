import styled from 'styled-components';
import { Categoriesdata } from '../data';
import Category from './Category';
import { mobile } from '../responsive';
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({ padding: '0px', flexDirection: 'column' })}
`;

const Categories = () => {
    return (
        <Container>
            {Categoriesdata.map((item) => {
                return <Category key={item.id} data={item}></Category>;
            })}
        </Container>
    );
};

export default Categories;
