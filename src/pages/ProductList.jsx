import { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;
const Ttitle = styled.h1`
    margin: 20px;
`;
const FillterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;
const Fillter = styled.span`
    margin: 20px;
    ${mobile({ width: '0 20px', display: 'flex', flexDirection: 'column' })}
`;
const FillterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: '0' })}
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    background-color: transparent;
    border: 1px solid lightgray;
    ${mobile({ margin: '10px 0' })}
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split('/')[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState('newest');
    const hanldeFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        });
    };
    return (
        <Container>
            <Navbar />
            <Anouncement />
            <Ttitle>{category}</Ttitle>
            <FillterContainer>
                <Fillter>
                    <FillterText>Fillter Product: </FillterText>
                    <Select name='color' onChange={hanldeFilters}>
                        <Option disabled>COLOR</Option>
                        <Option>Áo-Đen</Option>
                        <Option>K43-Be</Option>
                        <Option>K43-Đen</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select name='size' onChange={hanldeFilters}>
                        <Option disabled> SIZE</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Fillter>

                <Fillter>
                    <FillterText>Sort Product: </FillterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value='newest'>Newest</Option>
                        <Option value='asc'>Price (asc)</Option>
                        <Option value='des'>Price (desc)</Option>
                    </Select>
                </Fillter>
            </FillterContainer>
            <Products cat={category} filters={filters} sort={sort} />
            <NewsLetter />
            <Footer />
        </Container>
    );
};

export default ProductList;
