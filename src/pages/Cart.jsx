import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'


const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button` 
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=> props.type === "filled" && "none"};
  background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
  color: ${props=> props.type === "filled" && "white"};
`

const TopTexts = styled.div``
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=> props.color};
`
const ProductSize = styled.span`
`
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Summary = styled.div`
  flex: 1;
`

const Cart = () => {
  return (
   <Container>
     <Navbar />
     <Announcement />
     <Wrapper>
       <Title>YOUR BASKET</Title>
       <Top>
         <TopButton>CONTINIUE SHOPPING</TopButton>
         <TopTexts>
           <TopText>Shopping Cart(2)</TopText>
           <TopText>Your Whishlist(0)</TopText>
         </TopTexts>
         <TopButton type="filled">CHECKOUT NOW</TopButton>
       </Top>
       <Bottom>
         <Info>
          <Product>
           <ProductDetail>
             <Image src="https://preview.redd.it/qkmro223gs271.jpg?width=640&crop=smart&auto=webp&s=ed58e0a055aba76a8b2de5f28b1a691ecb2ad7b9" />
             <Details>
               <ProductName><b>PRODUCT:</b> Rengoku Rug</ProductName>
               <ProductId><b>ID:</b> 23412</ProductId>
               <ProductColor color='yellow'/>
               <ProductSize><b>Size:</b> 70 cm</ProductSize>
             </Details>
           </ProductDetail>
           <PriceDetail>
             price
           </PriceDetail>
           </Product>
         </Info>
         <Summary>summary</Summary>
       </Bottom>
      </Wrapper>
     <Footer/>
   </Container>
  )
}

export default Cart
