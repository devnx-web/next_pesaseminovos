import css from "./cards.module.css"
import { Container, Row, Col } from "reactstrap"

export default function Cards() {
    return (
        <div>
            <div className={css.bg}>
                <Container>
                    <Row>
                        <Col className={css.card}>
                            <div className={css.title}>
                                Está procurando um seminovo?
                            </div>
                            <div className={css.text}>
                            Aqui você encontra equipamentos seminovos com qualidade e segurança, 
                            revisados e prontos para o trabalho!
                            </div>
                            <button className={css.button}>
                                Ver equipamentos
                            </button>
                        </Col>

                        <Col className={css.card2}>
                            <div className={css.title2}>
                                Está vendendo um seminovo?
                            </div>
                            <div className={css.text2}>
                            Traga seu equipamento para a PESA Seminovos e venda com segurança e agilidade!
                            </div>
                            <button className={css.button}>
                                Ver equipamentos
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}