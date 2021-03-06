import css from "./maquinas.module.css"
import {Container, Row, Col, Input} from "reactstrap"
import {FaSearch} from "react-icons/fa"
import {RiLayoutGridFill} from "react-icons/ri"
import {BsListUl} from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import Slider from '@mui/material/Slider'
import Select from 'react-select'
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated();

const marcas = [
    {value: "caterpillar", label: "Caterpillar"},
    {value: "hyster", label: "Hyster"}
];

const categoria = [
    {value: "escavadeira", label: "Escavadeira"},
    {value: "empilhadeira", label: "Empilhadeira"},
    {value: "carregadeira", label: "Carregadeira"},
    {value: "rolo compressor", label: "Rolo Compressor"}
]

function valuetext(value) {
    return `${value}`;
  }

export default function Maquinas () {
    const [value, setValue] = React.useState([2011, 2018]);

    const [value1, setValue1] = React.useState([410000, 800000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  

    return(
        <div>
            <div className={css.bg}>
                <Container>
                    <Row>
                        <Col md={3}>
                            <Input
                            placeholder="Buscar..." className={css.filtro}/>
                        </Col>

                        <Col md={9}>
                            <div className={css.filtro2}>
                                <Row>
                                    <Col md={6}>
                                    <div className={css.text}>
                                        Classificar por: 
                                        <select className={css.select}>
                                            <option>Relevância</option>
                                            <option>Mais recentes</option>
                                            <option>Menor preço</option>
                                            <option>Maior preço</option>
                                        </select>
                                    </div>
                                    </Col>

                                    <Col md={6} className={css.exibicao} style={{textAlign: 'right'}}>
                                    <Row><div className={css.text}>Modo de exibição: 
                                        <div v-if="visualizacao === 1"><span onClick="grade()" className={css.ativo}><RiLayoutGridFill className={css.icon1}/></span></div> 
                                        <div v-if="visualizacao === 2"><span onClick="lista()"><BsListUl className={css.icon2}/></span></div>
                                    </div>
                                    </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col md={3}>
                                <div className={css.filtrosEsquerda}>
                                    <div className={css.bgtitle}>
                                         <FaSearch/> Filtro de Equipamento
                                    </div>

                                    <div>
                                    <div className={css.info}>
                                            Ano [ 2009, 2020 ]
                                            <Slider
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            min={2009}
                                            max={2020}
                                            color="primary"
                                            />
                                        </div>

                                        <div className={css.info}>
                                            Preço
                                            <Slider
                                            value={value1}
                                            onChange={handleChange1}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            min={150000}
                                            max={1250000}
                                            color="primary"
                                            />
                                        </div>

                                        <div className={css.info}>
                                        </div>

                                        {/* <select className={css.selectEsquerda}>
                                             <option>Marca</option>
                                             <option>Caterpillar</option>
                                             <option>Hyster</option>
                                         </select>

                                         <select className={css.selectEsquerda}>
                                            <option value="1">Categoria</option>
                                            <option value="2">Escavadeira</option>
                                            <option value="3">Empilhadeira</option>
                                            <option value="4">Carregadeira</option>
                                            <option value="5">Rolo Compressor</option>
                                         </select> */}

                                         <div>
                                            <div className={css.select1}><Select 
                                            placeholder="Marca"
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            className="select" isMulti options={marcas}/>
                                            </div>

                                            <div className={css.select1}><Select 
                                            placeholder="Categoria"
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            className="select" isMulti options={categoria}/></div>
                                        </div>

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
                        <Col className={css.cardMaq} md={4}>
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

                        <Col className={css.cardMaq} md={4}>
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
                                            <div className={css.info1}>2012</div>
                                            <div className={css.info2}>5.818</div>
                                        </Col>
                                    </Row>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                                </a></Link>
                        </Col>

                        <Col className={css.cardMaq} md={4}>
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
                                            <div className={css.info1}>2012</div>
                                            <div className={css.info2}>5.818</div>
                                        </Col>
                                    </Row>
                                    <button className={css.button}>Ver mais</button>
                                </Col>
                            </div>
                                </a></Link>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '30px'}}>
                        <Col className={css.cardMaq} md={4}>
                            <Link href="/maquina/maquina-312dl"><a className={css.link}><div>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/312DL_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira 312DL</div>
                                    <div className={css.price}>R$ 410.000,00</div>
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

                        <Col className={css.cardMaq} md={4}>
                                <Link href="/maquina/maquina-longreach"><a className={css.link}>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/long-reach_1.jpeg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira Long Reach 320</div>
                                    <div className={css.price}>R$ 950.000,00</div>
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

                        <Col className={css.cardMaq} md={4}>
                                <Link href="/maquina/maquina-320gc"><a className={css.link}>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/320gc_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                            <div>
                                <Col className={css.bgcard}>
                                    <div className={css.name}>Escavadeira 320GC</div>
                                    <div className={css.price}>R$ 800.000,00</div>
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
                    </Row>

                    <Row style={{marginTop: '30px'}}>
                        <Col className={css.cardMaq} md={4}>
                            <Link href="/maquina/rolo-compactador"><a className={css.link}><div>
                            <div className={css.img}>
                                <Image className={css.maq} src="/img/compactador_1.jpg" width="620" height="465" alt="maq" />
                            </div>

                                <Col className={css.bgcard}>
                                    <div className={css.name}>Rolo Compactador CB434D</div>
                                    <div className={css.price}>R$ 210.000,00</div>
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