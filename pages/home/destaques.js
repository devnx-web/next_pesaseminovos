import css from "./destaques.module.css"
import {Container, Row, Col} from "reactstrap"
import Image from "next/image"
import Link from "next/link"

export default function Destaques(){
    return (
        <div>
            <div className={css.bgimg}>
                <Container>
                    <div className={css.title}>Destaques</div>
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
                                    <div className={css.name}>Pá Carregadeira <br/> 966L</div>
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

                        <Col>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/312DL_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira <br/> 3112DL</div>
                                    <div className={css.price}>R$ 410.000,00</div>
                                    <div className={css.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}