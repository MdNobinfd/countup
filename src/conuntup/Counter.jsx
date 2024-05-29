import React from 'react'
import './conter.css'
import CountUp from 'react-countup';
import { Col, Container, Row } from 'react-bootstrap';
const Counter = () => {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg={3}>
                    <div className="mainkafdkj">
                    <CountUp start={0}end={100}duration={2.75} >
                        {({ countUpRef}) => (
                            <div className='khalatobon'>
                                <span className='aminai' ref={countUpRef}/>
                                <div className="appurjamai">
                                Years Of Experience
                                </div>
                            </div>
                        )}
                    </CountUp>
                    <CountUp start={100}end={500}duration={2} >
                        {({ countUpRef}) => (
                            <div className='khalatobon'>
                                <span className='aminai' ref={countUpRef}/>
                                <div className="appurjamai">
                                Years Of Experience
                                </div>
                            </div>
                        )}
                    </CountUp>
                    </div>
                </Col>
                <Col lg={3}>

                </Col>
                <Col lg={3}>

                </Col>
                <Col lg={3}>

                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Counter