import css from "./banner.module.css";
import { Container, Row, Col } from "reactstrap"

export default function Banner() {
    return (
        <div>
            <div className={css.bgbanner}>
                <Container>
                <Row>
                    <Col md={6}>
                    <div className={css.title}>
                        Bem-vindo à <br/> <span style={{color: '#ffc700'}}>PESA Seminovos</span>
                    </div>
                    <button className={css.button}>
                        Ver seminovos
                    </button>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}