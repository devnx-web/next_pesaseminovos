import css from "./detalhes.module.css"
import {Container, Row, Col, Input} from "reactstrap"
import Link from "next/link"
import Image from "next/image"

export default function Detalhes( { imgPrincipal, nome, valor, ano, horas, marca, description, categoria, local, garantia } ) {
    return(
        <div>
            <div>
                <Container>
                <Row className="py-5">
                    <Col md={8}>
                    <div className={css.imgmaquina} style={{ backgroundImage: `url(https://arquivos.devnx.com.br/${imgPrincipal})` }} > </div>
                    </Col>

                    <Col md={4}>
                    <div className={css.bgform}>
                        <div className={css.nome}>{nome}</div>
                        <div className={css.valor}>{valor}</div>
                        <div>
                            <label className={css.label}>Nome completo</label>
                            <Input className={css.input} placeholder="Digite seu nome..."/>

                            <label className={css.label}>E-mail</label>
                            <Input className={css.input} placeholder="Digite seu e-mail..."/>

                            <label className={css.label}>Telefone</label>
                            <Input className={css.input} placeholder="Digite seu telefone..."/>

                            <label className={css.label}>Empresa</label>
                            <Input className={css.input} placeholder=""/>

                            <button className={css.button}>Enviar mensagem</button>
                        </div>
                    </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={8}>
                    <div className={css.bgdetails}>
                    <div className={css.ficha}>
                        Ficha técnica
                    </div>
                    <Row style={{padding: '10px'}}>
                        <Col>
                        <div className={css.info}>Ano</div>
                        <span className={css.item}>{ano}</span>
                        </Col>

                        <Col>
                        <div className={css.info}>Horímetro</div>
                        <span className={css.item}>{horas}</span>
                        </Col>

                        <Col>
                        <div className={css.info}>Marca</div>
                        <span className={css.item}>{marca}</span>
                        </Col>
                    </Row>

                    <Row style={{padding: '10px'}}>
                        <Col>
                        <div className={css.info}>Categoria</div>
                        <span className={css.item}>{categoria}</span>
                        </Col>

                        <Col>
                        <div className={css.info}>Valor</div>
                        <span className={css.item}>{valor}</span>
                        </Col>

                        <Col>
                        <div className={css.info}>Local</div>
                        <span className={css.item}>{local}</span>
                        </Col>
                    </Row>

                    <Row style={{padding: '10px'}}>
                        <Col>
                        <div className={css.info}>Garantia CCU</div>
                        <span className={css.item}>{garantia}</span>
                        </Col>

                        <Col>
                        </Col>

                        <Col>
                        </Col>
                    </Row>
                    <div className={css.desc}>Descrição</div>
                    <div className={css.text}>{description}</div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}