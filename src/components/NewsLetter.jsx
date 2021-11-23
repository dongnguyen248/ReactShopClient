import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcf5f5;
    flex-direction: column;
`;
const Title = styled.h2`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({ fontSize: '50px' })}
`;
const Description = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 300;
    ${mobile({ textAlign: 'center', fontSize: '20px' })}
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid lightgray;
    ${mobile({ width: '97%' })}
`;
const Input = styled.input`
    border: none;
    outline: none;
    padding-left: 20px;
    flex: 8;
    font-size: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
`;
const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>
                It is a long established fact that a reader will be distracted
                by the readable.
            </Description>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLetter;
