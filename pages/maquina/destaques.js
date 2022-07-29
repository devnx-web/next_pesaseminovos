import css from "./destaques.module.css"
import {Container, Row, Col} from "reactstrap"
import Image from "next/image"
import Link from "next/link"

export default function Destaques(){
    return (
        <div>
            <div className={css.bgimg}>
                <Container>
                    <div className={css.title}>Máquinas relacionadas</div>
                    <Row style={{marginTop: '30px'}}>
                        <Col>
                            <Link href="/maquina/maquina-349dl"><a className={css.link}><div>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/349_1.JPG" width="620" height="465" alt="maq" />
                            </div>

                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira Hidráulica 349DL</div>
                                    <div className={css.price}>R$ 1.250.000,00</div>
                                    <Row>
                                        <Col>
                                            <div className={css.info1}>Ano</div>
                                            <div className={css.info2}>Horímetro</div>
                                        </Col>
                                        <Col>
                                            <div className={css.info1}>2012</div>
                                            <div className={css.info2}>5.818</div>
                                        </Col>
                                    </Row>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                            </a></Link>
                        </Col>

                        <Col>
                                <Link href="/maquina/maquina-966l"><a className={css.link}>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/966L_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Pá Carregadeira 966L</div>
                                    <div className={css.price}>R$ 930.000,00</div>
                                    <Row>
                                        <Col>
                                            <div className={css.info1}>Ano</div>
                                            <div className={css.info2}>Horímetro</div>
                                        </Col>
                                        <Col>
                                            <div className={css.info1}>2017</div>
                                            <div className={css.info2}>12.500</div>
                                        </Col>
                                    </Row>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                                </a></Link>
                        </Col>

                        <Col>
                                <Link href="/maquina/maquina-h50xt"><a className={css.link}>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/H50_4.jpeg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Empilhadeira Hyster H50XT</div>
                                    <div className={css.price}>R$ 150.000,00</div>
                                    <Row>
                                        <Col>
                                            <div className={css.info1}>Ano</div>
                                            <div className={css.info2}>Horímetro</div>
                                        </Col>
                                        <Col>
                                            <div className={css.info1}>2020</div>
                                            <div className={css.info2}>6.000</div>
                                        </Col>
                                    </Row>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                                </a></Link>
                        </Col>

                        <Col>
                                <Link href="/maquina/maquina-312dl"><a className={css.link}>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/312DL_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira <br/> 3112DL</div>
                                    <div className={css.price}>R$ 410.000,00</div>
                                    <Row>
                                        <Col>
                                            <div className={css.info1}>Ano</div>
                                            <div className={css.info2}>Horímetro</div>
                                        </Col>
                                        <Col>
                                            <div className={css.info1}>2014</div>
                                            <div className={css.info2}>12.200</div>
                                        </Col>
                                    </Row>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                                </a></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}