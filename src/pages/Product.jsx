import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import { addProducts } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../requestMethod';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: '40vh' })}
`;
const Infor = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin-right: 20px;
    margin-bottom: 20px;
`;
const Price = styled.span`
    font-size: 50px;
    color: #555;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 30px;
    ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 20px;
`;
const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    padding: 6px;
    background-color: transparent;
    border: 1px solid lightgray;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    ${mobile({ width: '100%' })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
`;
const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #fff;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        background-color: #f8f4f4;
    }
`;
const Product = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const dispatch = useDispatch();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('products/find/' + id);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [id]);
    const handleQuantity = (target) => {
        if (target === 'asc') {
            setQuantity(quantity + 1);
        } else {
            quantity > 1 && setQuantity(quantity - 1);
        }
    };

    const handleAddCart = () => {
        dispatch(addProducts({ ...product, size, color, quantity }));
    };
    return (
        <Container>
            <Navbar />
            <Anouncement />
            <Wrapper>
                <ImgContainer>
                    <Img src={product.img} />
                </ImgContainer>
                <Infor>
                    <Title> {product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>Price: $ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor
                                    color={c}
                                    key={c}
                                    onClick={() => setColor(c)}
                                />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize
                                onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>
                                        {s}
                                    </FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity('des')} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity('asc')} />
                        </AmountContainer>
                        <Button onClick={handleAddCart}>ADD TO CART</Button>
                    </AddContainer>
                </Infor>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    );
};
export default Product;
