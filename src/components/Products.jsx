import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { popularProducts } from "../data";
import Product from './Product';
import axios from 'axios';
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProdcuts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:3000/api/products?categories=${cat}`
                        : 'http://localhost:3000/api/products',
                );
                setProducts(res.data);
            } catch (err) {}
        };

        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProdcuts(
                products.filter((item) => {
                    return Object.entries(filters).every(([key, value]) => {
                        return item[key].includes(value);
                    });
                }),
            );
    }, [cat, filters, products]);
    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProdcuts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt),
            );
        } else if (sort === 'asc') {
            setFilteredProdcuts((prev) =>
                [...prev].sort((a, b) => a.price - b.price),
            );
        }
        if (sort === 'des') {
            setFilteredProdcuts((prev) =>
                [...prev].sort((a, b) => b.price - a.price),
            );
        }
    }, [sort]);

    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => {
                      return <Product data={item} key={item._id} />;
                  })
                : products.slice(0, 8).map((item) => {
                      return <Product data={item} key={item._id} />;
                  })}
        </Container>
    );
};

export default Products;
