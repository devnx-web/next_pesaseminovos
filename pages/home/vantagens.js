import css from "./vantagens.module.css"
import {Container, Row, Col} from "reactstrap"
import Image from "next/image"

export default function Vantagens(){
    return(
        <div>
            <div className={css.bg}>
                <Container>
                    <div className={css.title}>Por que escolher a <br/> PESA Seminovos?</div>

                    <Row>
                        <Col className={css.card}>
                        <div className={css.number}>1</div>
                        <div className={css.titleCard}>Financiamento Facilitado</div>
                        <div className={css.text}>Aqui na PESA Seminovos, seu cadastro é analisado rapidamente!</div>
                        </Col>

                        <Col className={css.card}>
                        <div className={css.number}>2</div>
                        <div className={css.titleCard}>Qualidade e Segurança</div>
                        <div className={css.text}>Equipamentos seminovos com qualidade e segurança, protnos para o trabalho!</div>
                        </Col>

                        <Col className={css.card}>
                        <div className={css.number}>3</div>
                        <div className={css.titleCard}>Credibilidade e Tradição</div>
                        <div className={css.text}>A PESA é um distribuidor Caterpillar para o Sul do Brasil, há 70 anos no mercado!</div>
                        </Col>

                        <Col className={css.card}>
                        <div className={css.number}>4</div>
                        <div className={css.titleCard}>Financiamento Facilitado</div>
                        <div className={css.text}>A PESA oferece soluções que abrangem a comercialização de peças e manutenção de produtos.</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}