import React, {useContext} from 'react'
import CityContext from '../../context/CityContext';
import {Link} from 'react-router-dom'
import { Jumbotron, Button, Container } from 'react-bootstrap';
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../../animations'
const CityHindiDetails = () => {

    const {cityHindiFinder } = useContext(CityContext);
    const location = useLocation();
    const id = location.pathname.split("/")[3];
    const cityHindiObject =  cityHindiFinder(id);

    return (
    
      <DetailStyled variants = {fadeIn} initial='hidden' animate="show">
        <Container>
        <Jumbotron>
        {
        cityHindiObject ?
        <>
          <h1>{cityHindiObject.name}</h1>
          <h2>Cigarettes smoked per day: <span>{cityHindiObject.cigg}</span></h2>
          <h2>The AQI: <span>{cityHindiObject.aqi}</span></h2>
          <Link to='/hindi'>
          <Button className='button' variant="info" >
            Back To Home
          </Button>
          </Link>
        </>
        :
        null
      }
        </Jumbotron>
     
      </Container>
    </DetailStyled>
        );
    }
    
    const DetailStyled = styled(motion.div)`
    margin-top: 2rem;
    h1{
        font-family: 'Montserrat', sans-serif;
       font-weight: 600;
        margin-bottom: 2rem;
      }
    h2{
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 1rem;
        font-weight: 500;
       }
    .button{
        margin-top: 2rem;
      }
    .jumbotron{
      background-color: #e6e6e6 !important;
      border: 1px solid black;
    }
    span{
         font-weight: 600;
         text-decoration: underline;
       }
    `

export default CityHindiDetails
