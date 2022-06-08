import css from "./maquinas.module.css"
import {Container, Row, Col, Input} from "reactstrap"
import {FaSearch} from "react-icons/fa"
import {RiLayoutGridFill} from "react-icons/ri"
import {BsListUl} from "react-icons/bs"
import { Range } from "react-range"
import Link from "next/link"
import Image from "next/image"

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
                            <Col>
                            <Row style={{marginTop: '30px'}}>
                        <Col>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/349_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                            <Link href="/maquina/maquina-349dl"><a className={css.link}><div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira Hidráulica 349DL</div>
                                    <div className={css.price}>R$ 1.250.000,00</div>
                                    <div className={css.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                            </a></Link>
                        </Col>

                        <Col>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/966L_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Pá Carregadeira 966L</div>
                                    <div className={css.price}>R$ 930.000,00</div>
                                    <div className={css.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                        </Col>

                        <Col>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/H50_4.jpeg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Empilhadeira Hyster H50XT</div>
                                    <div className={css.price}>R$ 150.000,00</div>
                                    <div className={css.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                            </Col>
                        </Row>
                </Container>
            </div>
        </div>
    )
}