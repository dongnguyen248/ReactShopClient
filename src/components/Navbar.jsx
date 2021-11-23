import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/apiCalls';

const Components = styled.div`
    height: 60px;
    ${mobile({ heigh: '60px' })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px 0' })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`;
const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: '60px' })}
`;

const SearchIcon = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: '12px' })}
`;
const Center = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '11px', marginLeft: '7px' })}
`;
const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const hanldLogout = () => {
        logout(dispatch);
    };
    return (
        <Components>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchIcon>
                        <Input placeholder='Search' />
                        <Search
                            style={{ color: 'gray', fontSize: 14 }}></Search>
                    </SearchIcon>
                </Left>
                <Center>
                    <Link to={'/'}>
                        <Logo>LAMA.</Logo>
                    </Link>
                </Center>
                <Right>
                    {!user && (
                        <Link to='/register'>
                            <MenuItem>REGISTER</MenuItem>
                        </Link>
                    )}
                    {!user && (
                        <Link to='/login'>
                            <MenuItem>SIGN IN</MenuItem>
                        </Link>
                    )}
                    {user && <MenuItem onClick={hanldLogout}>LOGOUT</MenuItem>}
                    <Link to='/cart'>
                        <MenuItem>
                            <Badge badgeContent={quantity} color='primary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Components>
    );
};

export default Navbar;
