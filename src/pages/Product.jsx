import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div` 

`
const Wrapper = styled.div` 
  padding: 50px;
  display: flex;
`
const ImgContainer = styled.div` 
  flex: 1;
`
const Image = styled.img` 
  width: 100%;
  height: 70vh;
  object-fit: cover;
`
const InfoContainer = styled.div` 
  flex: 1;
  padding: 0px 50px;
`
const Title = styled.h1` 
  font-weight: 200;
`
const Desc = styled.p` 
  margin: 20px 0px;
`
const Price = styled.span` 
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  font-size: 10px;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;

  &:hover{
    background-color: #ade7e7;
  }
`

const Product = () => {
  return (
   <Container>
     <Navbar />
     <Announcement />
     <Wrapper>
      <ImgContainer>
        <Image src='https://i0.wp.com/www.ohmyprintsolutions.com/wp-content/uploads/2018/11/Peronalized-Rug.jpg?fit=900%2C772&ssl=1' />
      </ImgContainer>
      <InfoContainer>
        <Title>PowerPuff Rug</Title>
        <Desc>Hand tufted rug with Power Puff Girls. Materials - 100% acrylic yarn. Size 120cm x 135cm. Prime backing, only for floor (not possible to hang on wall).
        </Desc>
        <Price>$ 250</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="pink"/>
            <FilterColor color="red" />
            <FilterColor color="darkblue"/>
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>50 cm</FilterSizeOption>
              <FilterSizeOption>70 cm</FilterSizeOption>
              <FilterSizeOption>100 cm</FilterSizeOption>
              <FilterSizeOption>120 cm</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <Remove />
            <Amount>1</Amount>
            <Add />
          </AmountContainer>
          <Button>ADD TO CART</Button>
        </AddContainer>
      </InfoContainer>
     </Wrapper>
     <Newsletter />
     <Footer />
   </Container>
  )
}

export default Product
