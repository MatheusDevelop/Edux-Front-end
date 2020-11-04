const { Container, Row, Col } = require("react-bootstrap");

function Post() {
    return(
        <div>
            <Row>
                titulo
            </Row>
            <Row>
                <Col>
                    <div>
                        img
                    </div>
                    <div>
                        legenda
                    </div>
                </Col>
                <Col>
                    <div>
                        comentarios
                    </div>
                    <div>
                        fixed bottom adicionar comentario
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Post;