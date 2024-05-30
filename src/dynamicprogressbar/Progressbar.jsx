import React from 'react'
import './porgressbar.css'
import { Col, Container, Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { motion } from "framer-motion"

const Progressbar = () => {
  return (
    <>
    <div className="progressbar">
        <Container>
            <Row>
                <Col lg={6}>
                    {/* <div className="progressbr">
                        <div className="hijikdjfk">
                             <div className="progressbr_lable">
                             <div className="one">
                                <Row className='  justify-content-end align-items-center'>
                                    <Col lg={2}>
                           sdg
                                    </Col>
                                </Row>
                             </div>
                            </div>
                        </div>
                       
                    </div> */}
                    <div className="progressbr">
                        <div className="hijikdjfk2">
                             <div className="progressbr_lable">
                            <div className="one">
                                <div className="item">
                                    lksdjf
                                </div>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                    
                </Col>
           
            </Row>
        </Container>
    </div>
    <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Photoshot</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-fullbg-black rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
    </>
  )
}

export default Progressbar