import React from 'react';
import css from './header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                <Row className={css.headerDesk}>
                    <Col>
                    <Link href="/"><a><Image src="/img/logo-pesaseminovos.png" alt="logo" width="120" height="59"/></a></Link>
                    </Col>

                    <Col style={{alignSelf: 'center', textAlign: 'right'}}>
                    <navbar>
                        <Link href="/"><a className={css.link}><span className={css.link}>início</span></a></Link>
                        <Link href="/estoque"><a className={css.link}><span className={css.link}>estoque</span></a></Link>
                        <Link href="#sobre"><a className={css.link}><span className={css.link}>sobre nós</span></a></Link>
                        <button className={css.button}>Contato</button>
                    </navbar>
                    </Col>
                </Row>
                <nav className={css.navigation}>
            <Row>
                <Col>
            <div className={css["menuToggle"] + " " + css["div"]}>
                <input className={css.input} name="toggle" type="checkbox" />
                <label className={css.label} htmlFor="toggle">
                    <span className={css.span}>menu</span>
                    <div className={css.div}></div>
                    <div className={css.div}></div>
                    <div className={css.div}></div>
                </label>
                <ul className={css["menu"] + " " + css["ul"]}>
                    <li className={css.li}>
                        <Link className={css.a} href="/">
                            <a className={css.link}>inicio</a>
                        </Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.a} href="/estoque">
                            <a className={css.link}>Estoque</a>
                        </Link>
                    </li>

                    <li className={css.li}>
                        <Link className={css.a} href="#sobre">
                            <a className={css.link}>Sobre nós</a>
                        </Link>
                    </li>

                    <button className={css.button}>
                        Contato
                    </button>
                </ul>
                
                <div className={css.alignlogo}>
                <Link href="/"><a><Image className={css.image} src="/img/logo-pesaseminovos.png" alt="logo" width={120} height={59} /></a></Link>
                </div>
            </div>
            </Col>
            <Col>
            {/* <Image src={}/> */}
            </Col>
            </Row>
                 </nav>
                </Container>
            </div>
        </div>
    )
}