import css from "./maquinas.module.css"
import {Container, Row, Col, Input} from "reactstrap"
import {FaSearch} from "react-icons/fa"
import {RiLayoutGridFill} from "react-icons/ri"
import {BsListUl} from "react-icons/bs"
import { Range } from "react-range"

export default function Maquinas () {
    return(
        <div>
            <div className={css.bg}>
                <Container>
                    <Row>
                        <Col md={3}>
                            <Input placeholder="Buscar..." className={css.filtro}/>
                        </Col>

                        <Col md={9}>
                            <div className={css.filtro2}>
                                <Row>
                                    <Col>
                                    <div className={css.text}>
                                        Classificar por: 
                                        <select className={css.select}>
                                            <option>Relevância</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </select>
                                    </div>
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                    <div className={css.text}>Modo de exibição: <RiLayoutGridFill className={css.icon1}/><BsListUl className={css.icon2}/></div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col md={3}>
                            <div className={css.bgtitle}>
                                <FaSearch/> Filtro de Veículo
                            </div>
                            </Col>
                            <Col></Col>
                        </Row>
                </Container>
            </div>
        </div>
    )
}