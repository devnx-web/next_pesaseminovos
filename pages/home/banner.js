import css from "./banner.module.css";
import { Container, Row, Col } from "reactstrap"
import Link from "next/link"

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
                    <Link href="/estoque"><a><button className={css.button}>
                        Ver seminovos
                    </button></a></Link>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}