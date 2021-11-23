import {
    FavoriteBorder,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Infor = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 3;
    background-color: rgb(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease;
`;
const Container = styled.div`
    flex: 1;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 5px;
    cursor: pointer;
    &:hover ${Infor} {
        opacity: 1;
    }
`;
const Image = styled.img`
    height: 75%;
    object-fit: cover;
    z-index: 2;
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: #fff;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({ data }) => {
    return (
        <Container>
            <Circle />
            <Image src={data.img} />
            <Infor>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${data._id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorder />
                </Icon>
            </Infor>
        </Container>
    );
};

export default Product;
