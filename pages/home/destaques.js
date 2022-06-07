import css from "./destaques.module.css"
import {Container, Row, Col} from "reactstrap"
import Image from "next/image"

export default function Destaques(){
    return (
        <div>
            <div className={css.bgimg}>
                <Container>
                    <div className={css.title}>Destaques</div>
                    <Row style={{marginTop: '30px'}}>
                        <Col className={css.bgcard}>
                        <div className={css.name}>Nome Máquina</div>
                        <div className={css.price}>R$ 220.790,00</div>
                        <div className={css.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <button className={css.button}>Ver mais</button>
                        </Col>

                        <Col className={css.bgcard}>
                        <div className={css.name}>Nome Máquina</div>
                        <div className={css.price}>R$ 220.790,00</div>
                        <div className={css.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <button className={css.button}>Ver mais</button>
                        </Col>

                        <Col className={css.bgcard}>
                        <div className={css.name}>Nome Máquina</div>
                        <div className={css.price}>R$ 220.790,00</div>
                        <div className={css.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <button className={css.button}>Ver mais</button>
                        </Col>

                        <Col className={css.bgcard}>
                        <div className={css.name}>Nome Máquina</div>
                        <div className={css.price}>R$ 220.790,00</div>
                        <div className={css.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <button className={css.button}>Ver mais</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}