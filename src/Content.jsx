import { trackEvent } from './lib/firebase';
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
                        onClick={() => {
                            trackEvent('button_click', {
                                page_path: 'https://github.com/tjonty/avocados',
                                page_title: "Code Page",
                                page_location: '/code'
                            });
                        }}
                    >
                        code —
                    </a>
                </BottomRightSide>
            </BottomRow>
        </Container>
    )
}
