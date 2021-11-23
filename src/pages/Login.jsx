import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url('https://www.w3schools.com/howto/img_parallax.jpg') center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    ${mobile({ width: '75%' })}
`;
const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Input = styled.input`
    flex: 1;
    margin: 10px 0px;
    min-width: 80%;
    padding: 10px;
    outline: none;
    padding-left: 20px;
    font-size: 14px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`;
const Link = styled.a`
    font-size: 14px;
    margin: 6px 0;
    cursor: pointer;
    text-decoration: underline;
    display: block;
    text-align: center;
`;
const Error = styled.p`
    color: red;
    text-align: center;
`;
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usered = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input
                        placeholder='User Name'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleLogin} disabled={usered.isFetching}>
                        LOGIN
                    </Button>
                </Form>
                {usered.error && <Error> Somthing went wrong...</Error>}
                <Link>Do not remember password?</Link>
                <Link>Create An Account</Link>
            </Wrapper>
        </Container>
    );
};

export default Login;
