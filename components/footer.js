import css from "./footer.module.css"
import {Container, Row, Col} from "reactstrap"
import Image from "next/image"
import {FaInstagram} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import Link from "next/link"

export default function Footer(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                <Row>
                    <Col md={3}>
                    <Image src="/img/logo-pesaseminovos.png" width="150" height="74" alt="logo-footer" />
                    <div className={css.social}>Redes Sociais</div>
                    <Link href="https://www.instagram.com/pesaseminovosoficial/"><a target="_blank"><FaInstagram className={css.icon}/></a></Link>
                    <Link href="https://www.facebook.com/pesaseminovos"><a target="_blank"><BsFacebook className={css.icon}/></a></Link>
                    <Link href="https://www.linkedin.com/company/pesa-seminovos/"><a target="_blank"><BsLinkedin className={css.icon}/></a></Link>
                    <Link href="https://www.youtube.com/channel/UCa5V-wnh5VYTqqJC2gV1fGQ"><a target="_blank"><BsYoutube className={css.icon}/></a></Link>
                    </Col>

                    <Col className={css.mapSite} md={3}>
                    <Link href="/"><a className={css.link}><div>Início</div></a></Link>
                    <Link href="/estoque"><a className={css.link}><div>Estoque</div></a></Link>
                    <Link href="/#sobre"><a className={css.link}><div>Quem Somos</div></a></Link>
                    </Col>

                    <Col className={css.endereco}>
                    <div style={{margin: '0'}} className={css.social}>Endereço</div>
                    <div className={css.text}>BR-116, 11807 - Hauer</div>
                    <div className={css.text}>Curitiba - PR</div>
                    <div className={css.text}>81690-100</div>
                    </Col>

                    <Col className={css.horario} md={3}>
                    <div style={{margin: '0'}} className={css.social}>Horário de atendimento</div>
                    <div className={css.text}>Seg à Sex - 08:00 às 18:00</div>
                    <div className={css.text}>Sáb e Dom - Fechado</div>
                    <Link href="tel:4121032211"><a target="_blank"><button className={css.button}>Contato</button></a></Link>
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