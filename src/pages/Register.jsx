import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
    width: 40%;
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
    justify-content: center;
    align-items: center;
`;
const Input = styled.input`
    flex: 1;
    margin: 20px 10px 0px 0px;
    min-width: 40%;
    padding: 10px;
    outline: none;
    padding-left: 20px;
    font-size: 14px;
`;
const Agreement = styled.p`
    font-size: 14px;
    margin: 20px 0;
    width: 100%;
    text-align: center;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    font-weight: 600;

    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder='Name' />
                    <Input placeholder='Last Name' />
                    <Input placeholder='User Name' />
                    <Input placeholder='Email' />
                    <Input placeholder='Password' />
                    <Input placeholder='Confirm Password' />
                    <Agreement>
                        By create an account, I consent to the processing of my
                        personal data in accordance with the{' '}
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Agreement>
                        Already Account <Link to='/login'>Login</Link>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
