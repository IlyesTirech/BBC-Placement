import React, { useContext, useState } from 'react'
import data from '../../data/english.json'
//Context
import CityContext from '../../context/CityContext';
//React Router
import {Link} from 'react-router-dom'
//Styles and Animation
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../../animations'

const Home = () => {
    const {formatEnglishData} = useContext(CityContext);
    const [search, setSearch] = useState(); //State to store search 
    const [searchResults, setSearchResults] = useState(formatEnglishData()); 
    
    const onSearchChange = (e) => {
        if(e.target.value.length < 1){
            setSearch(null)
            setSearchResults(formatEnglishData())
        }else {
            setSearch(e.target.value)
            const results = formatEnglishData().filter((val) => {
                if (!search || val.name.toLowerCase().includes(search.toLowerCase())){
                    return val;
                } return null
            })
            setSearchResults(results)
        }
    }
    

    return (
        <CityStyled  variants = {fadeIn} initial='hidden' animate="show">
            <Link to='/hindi'>
                <h4>Hindi Translation</h4>
            </Link>
            <Container >
                <Row >
                    <Col className="justify-content-md-center d-flex">
                        <div className='titles'>
                            <h1>{data.hero_1_title}</h1>
                            <p>{data.p_1_value}</p>
                        </div> 
                    </Col>
                </Row>
                {/* <div>
                    <input type="search" placeholder='Search for your city...' onChange={onSearchChange} />
                </div> */}
                    <Form.Control type ="search" placeholder='Search for your city...' variant='outline-dark' onChange={onSearchChange}/>
                <Row className="justify-content-md-center">
                        {   searchResults.map(city => (
                                <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mx-auto">
                                    <div className="product-wrap d-flex justify-content-between flex-column align-items-center">
                                        <h2>{city.name}</h2>
                                        <Link to={{pathname: `/details/${city.cityID}`}}>
                                            <Button variant="info"  className='button'>
                                                    View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </Col> ))
                        } 
                              {searchResults.length < 1 && (<h2>No city matched your search result. <br/> Please try again.</h2>)}
                </Row>
            </Container>
        </CityStyled>
    )
}

const CityStyled = styled(motion.div)`
margin-top: 3rem;
h2{
    margin-top: 3rem;
    text-align: center;
    font-family: 'Montserrat, sans-serif';
    font-weight: 600;
    font-size: 2rem;
}
h4{
    position: fixed;
    margin-top: 5px;
    margin-right: 5px;
    top: 0;
    right: 0;
    font-family: 'Montserrat, sans-serif';
    font-size: 1rem;
    text-decoration: underline;
}
h1{
    font-family: 'Montserrat, sans-serif';
    font-weight: 600;
    
}
 input{
  text-align: center;
  width: 100%;
   border-radius:5px ;
}
p{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-family: 'Montserrat, sans-serif';
    font-size: 1.3rem;
}
.product-wrap{
    min-height: 200px;
    margin: 2rem auto;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
h2{
    
    font-family: 'Montserrat, sans-serif';
    font-weight: 500;
    font-size: 1.6rem;
}
.button{
    margin-bottom: 3.5rem;
}

}
`
export default Home
