import css from "./maquinas.module.css"
import {Container, Row, Col, Input} from "reactstrap"
import {FaSearch} from "react-icons/fa"
import {RiLayoutGridFill} from "react-icons/ri"
import {BsListUl} from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"
import React from "react"

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
                                    <Col md={6}>
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

                                    <Col md={6} className={css.exibicao} style={{textAlign: 'right'}}>
                                    <div className={css.text}>Modo de exibição: <RiLayoutGridFill className={css.icon1}/><BsListUl className={css.icon2}/></div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col md={3}>
                                <div className={css.filtrosEsquerda}>
                                    <div className={css.bgtitle}>
                                         <FaSearch/> Filtro de Veículo
                                    </div>

                                    <div>
                                        <div className={css.info}>
                                            Ano [ 1990, 2010 ]
                                        </div>

                                        <div className={css.info}>
                                            Faixa de preço [ 1990, 2010 ]
                                        </div>

                                        <select className={css.selectEsquerda}>
                                         <option>Marca</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                         </select>

                                         <select className={css.selectEsquerda}>
                                            <option>Categoria</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                         </select>

                                        <select className={css.selectEsquerda}>
                                            <option>Cidade</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </select>

                                    <div className={css.divButton}><button className={css.buttonBuscar}>Buscar</button></div>
                                </div>
                                </div>
                                <div className={css.titleEsquerda}>
                                    PESA Seminovos
                                </div>
                                <div className={css.textEsquerda}>
                                Na PESA você encontra um amplo estoque de máquinas, plataformas, empilhadeiras, tratores 
                                e equipamentos seminovos. Nosso mix de produto é pensado para atender os mais diversos 
                                tipos de operação. Antes de chegar até você, nossos equipamentos passam por um processo
                                 de revisão, testes e aprovação, garantindo qualidade e eficiência.
                                </div>
                            </Col>
                            <Col>
                            <Row style={{marginTop: '30px'}}>
                        <Col md={4}>
                            <Link href="/maquina/maquina-349dl"><a className={css.link}><div>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/349_1.JPG" width="620" height="465" alt="maq" />
                            </div>

                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira Hidráulica 349DL</div>
                                    <div className={css.price}>R$ 1.250.000,00</div>
                                    <div className={css.description}>Tecnologia integrada para você realizar mais em menos tempo.</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                            </a></Link>
                        </Col>

                        <Col md={4}>
                                <Link href="/maquina/maquina-966l"><a className={css.link}>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/966L_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Pá Carregadeira 966L</div>
                                    <div className={css.price}>R$ 930.000,00</div>
                                    <div className={css.description}>A Pá Carregadeira 966L oferece confiabilidade e muita potência.</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                                </a></Link>
                        </Col>

                        <Col md={4}>
                                <Link href="/maquina/maquina-h50xt"><a className={css.link}>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/H50_4.jpeg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Empilhadeira Hyster H50XT</div>
                                    <div className={css.price}>R$ 150.000,00</div>
                                    <div className={css.description}>A combinação perfeita de potência e eficiência de combustível.</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                                </a></Link>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '30px'}}>
                        <Col md={4}>
                            <Link href="/maquina/maquina-312dl"><a className={css.link}><div>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/312DL_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira 312DL</div>
                                    <div className={css.price}>R$ 410.000,00</div>
                                    <div className={css.description}>Projetada para fazer o serviço de forma mais rápida</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                            </a></Link>
                        </Col>

                        <Col md={4}>
                                <Link href="/maquina/maquina-longreach"><a className={css.link}>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/long-reach_1.jpeg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira Long Reach 320</div>
                                    <div className={css.price}>R$ 950.000,00</div>
                                    <div className={css.description}>O equilíbrio entre economia e produtividade</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                                </a></Link>
                        </Col>

                        <Col md={4}>
                                <Link href="/maquina/maquina-320gc"><a className={css.link}>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/320gc_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira 320GC</div>
                                    <div className={css.price}>R$ 800.000,00</div>
                                    <div className={css.description}>Para quem procura economia de combustível e baixo custo por hora</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                                </a></Link>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '30px'}}>
                        <Col md={4}>
                            <Link href="/maquina/rolo-compactador"><a className={css.link}><div>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/compactador_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                                <Col className={css.bgcard}>
                                    <div className={css.name}>Rolo Compactador CB434D</div>
                                    <div className={css.price}>R$ 210.000,00</div>
                                    <div className={css.description}>oferece conforto e facilidade de manutenção que você merece</div>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                            </a></Link>
                        </Col>

                        <Col md={4}>
                        </Col>

                        <Col md={4}>
                        </Col>
                    </Row>
                            </Col>
                        </Row>
                </Container>
            </div>
        </div>
    )
}