import { Container, TopLeftSide, BottomRow, BottomLeftSide, BottomRightSide } from './style/styles'

export default function Overlay() {
    return (
        <Container>
            <TopLeftSide>
                <h3>
                    AVOCADOS —
                </h3>
            </TopLeftSide>
            <BottomRow>
                <BottomLeftSide>
                    <p>— In Threejs & React </p>
                </BottomLeftSide>
                <BottomRightSide>
                    <a
                        href="https://github.com/tjonty/avocados"
                        target="_blank"
                    >
                        code —
                    </a>
                </BottomRightSide>
            </BottomRow>
        </Container>
    )
}
