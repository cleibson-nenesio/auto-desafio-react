import styled from "styled-components"

type FullScreenProps = {
    children: React.ReactNode
    createSquare: (e: React.MouseEvent) => void
}

const DivFullScreen = ({ children, createSquare }: FullScreenProps) => {
    return(
        <FullScreen onClick={(e) => createSquare(e)}>
            {children}
        </FullScreen>
    )
} 

const FullScreen = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`

export default DivFullScreen