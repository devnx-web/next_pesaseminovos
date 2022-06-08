import css from "./banner.module.css"
import {Row, Col, Container} from "reactstrap"

export default function Banner({nomemaq}){
    return(
        <div>
            <div className={css.bgbanner}>
                <Container>
                    <div className={css.title}>{nomemaq}</div>
                </Container>
            </div>
        </div>
    )
}