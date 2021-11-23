import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`;
const Title = styled.h2`
    margin-bottom: 30px;
`;
const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${(props) => props.color};
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 20px;
    cursor: pointer;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='55acee'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='e60023'>
                        <Facebook />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Link</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: '10px' }} />
                    40 - Nguyễn Trãi - Quận 1 - HCM
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} /> 038999999
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: '10px' }} />{' '}
                    contact@lama.next
                </ContactItem>
            </Right>
        </Container>
    );
};

export default Footer;
