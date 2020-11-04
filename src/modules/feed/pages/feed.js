const { Container, Row, Col } = require("react-bootstrap");
const { default: Post } = require("../components/post");

function Feed() {
    return(
        <>

            <Container fluid className="px-5 box__gerenciador fadeIn">
                <Row className="d-flex justify-content-center">
                    <div className="font-lg font-weight-bold text-white text-center">
                        Feed edux
                    </div>
                </Row>

                <Row className="d-flex flex-direction-column justify-content-center">
                    <Post />
                </Row>



            </Container>
        </>
    )
}

export default Feed;