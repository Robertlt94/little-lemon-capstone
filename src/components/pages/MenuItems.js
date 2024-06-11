import React, {useState} from 'react';
import styled from 'styled-components';


const MenuItems = () => {
    const [menuItems] = useState(
        [
            {id: 1, name: "Greek Salad", image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/01/Greek-Chicken-Salad-9.jpg", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price: "$12.99"},
            {id: 2, name: "Brushetta", image: "https://bemyrecipe.com/wp-content/uploads/2023/05/bmr51_11-1024x683.jpg", description: "Bruschetta is grilled bread, smeared with garlic, seasoned with salt and olive oil, then topped with tomato, veggies, beans, and cured pork.", price: "$7.99"},
            {id: 3, name: "Grilled Fish", image: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/32/95/15/IGFfHDKS6CPnncOlPbdT_DSC_0263.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.", price: "$18.99"}
        ]
    )

    return (
        <Container>
            {menuItems.map(item => 
                <MenuItem key={item.id}>
                    <Image><Food src={item.image} /></Image>
                    <Details>
                        <Name>{item.name}</Name>
                        <Description>{item.description}</Description>
                        <Price>{item.price}</Price>
                    </Details>
                </MenuItem>
            )}
        </Container>
    )
};

export default MenuItems;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5vh 5vw;
    border-top: solid 2px #000;
`

const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3vh 0;
    padding: 2vh 2vw;
    background-color: #EDEFEE;
`

const Image = styled.div`
    height: 20vh;
    width: 30vw;
    background-color: #000;
    overflow: hidden;
`

const Food = styled.img`
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
`

const Details = styled.div`
    font-size: 1.5rem;
    margin-left: 2.5vw;
`

const Name = styled.p`
    font-weight: 600;
`

const Description = styled.p`

`

const Price = styled.p`
    font-weight: 500;
`