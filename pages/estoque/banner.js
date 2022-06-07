import css from "./banner.module.css"
import {Row, Col, Container} from "reactstrap"

export default function Banner(){
    return(
        <div>
            <div className={css.bgbanner}>
                <Container>
                    <div className={css.title}>Estoque</div>
                </Container>
            </div>
        </div>
    )
}