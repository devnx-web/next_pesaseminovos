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
                <Row>
                    <Col>
                    <Link href="/"><a><Image src="/img/logo-pesaseminovos.png" alt="logo" width="120" height="59"/></a></Link>
                    </Col>

                    <Col style={{alignSelf: 'center', textAlign: 'right'}}>
                    <navbar>
                        <Link href="/"><a className={css.link}><span className={css.link}>início</span></a></Link>
                        <Link href="/estoque"><a className={css.link}><span className={css.link}>estoque</span></a></Link>
                        <span className={css.link}>sore nós</span>
                        <button className={css.button}>Contato</button>
                    </navbar>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}