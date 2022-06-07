import css from "./footer.module.css"
import {Container, Row, Col} from "reactstrap"
import Image from "next/image"
import {FaInstagram} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
import Link from "next/link"

export default function Footer(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                <Row>
                    <Col>
                    <Image src="/img/logo-pesaseminovos.png" width="150" height="74" alt="logo-footer" />
                    <div className={css.social}>Redes Sociais</div>
                    <Link href="https://www.instagram.com/pesaseminovosoficial/"><a target="_blank"><FaInstagram className={css.icon}/></a></Link>
                    <Link href="https://www.facebook.com/pesaseminovos"><a target="_blank"><BsFacebook className={css.icon}/></a></Link>
                    </Col>

                    <Col>
                    <Link href="/"><a className={css.link}><div>Início</div></a></Link>
                    <Link href="/"><a className={css.link}><div>Estoque</div></a></Link>
                    <Link href="/"><a className={css.link}><div>Quem Somos</div></a></Link>
                    </Col>

                    <Col></Col>

                    <Col>
                    <div style={{margin: '0'}} className={css.social}>Horário de atendimento</div>
                    <div className={css.text}>Seg à Sex - 08:00 às 18:00</div>
                    <div className={css.text}>Sáb e Dom - Fechado</div>
                    <button className={css.button}>Contato</button>
                    </Col>
                </Row>
                </Container>
            </div>
            <div className={css.copyright}>
                <Container>
                    <div className={css.textFooter}>2021 PESA - Paraná Equipamentos S.A | Todos os direitos reservados.</div>
                </Container>
            </div>
        </div>
    )
}