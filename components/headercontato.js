import { Row, Col, Container } from "reactstrap"
import {BsFillTelephoneFill} from "react-icons/bs"
import {FaMapMarkerAlt} from "react-icons/fa"
import {BsClockFill} from "react-icons/bs"
import css from "./headercontato.module.css"

export default function Headercontato(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                    <Row>
                        <Col md={2} className={css.info}>
                        <BsFillTelephoneFill className={css.icon}/> 0800 940 7372
                        </Col>

                        <Col md={3} className={css.info}>
                        <FaMapMarkerAlt className={css.icon}/> BR - 116, 11807 - Curitiba / PR
                        </Col>

                        <Col className={css.info}>
                        <BsClockFill className={css.icon}/> Seg à Sex 08:00 - 18:00
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}