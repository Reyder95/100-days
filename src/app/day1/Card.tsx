import Box from "../helpers/Box";
import style from './page.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Row from "../helpers/row";
import Col from "../helpers/col";

interface CardProps {
    name: string;
    handle: string;
    linkedIn: string;
    github: string;
    description: string;
}

export default function Card(props: CardProps) {
    return (
        <Box width="300px" className={style.card}>
            <Box className={style.header} width="100%" align="center" justify="center">
                <img className={style.avatar} src="https://placehold.it/128"/>
            </Box>

            <Box className={style.body}>
            <Box className={style.headerName} align="center">
                <strong>{props.name}</strong>
            </Box>

            <Box align="center">
                @{props.handle}
            </Box>
            
            <Box align="center">
                <Box className={style.innerBox} width="75%" align="center">
                    <Box>
                        <Row>
                            <Col cols={3} justify="center">
                                <Box>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </Box>
                            </Col>
                            <Col cols={3} justify="center">
                                <Box>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Box>
                            </Col>
                            <Col cols={3} justify="center">
                                <Box>
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </Box>
                            </Col>
                            <Col cols={3} justify="center">
                                <Box>
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </Box>
                            </Col>
                            <Col cols={3} justify="center">
                                <Box>
                                    <FontAwesomeIcon icon={faYoutube}/>
                                </Box>
                            </Col>
                        </Row>
                    </Box>
                </Box>

                <Box className={style.descriptionBox}>
                    {props.description}
                </Box>


            </Box>
            </Box>

            <Row>
                <Col>
                    <button>asd</button>
                </Col>

                <Col>
                    <button>asd</button>
                </Col>
            </Row>


        </Box>
    )
}