import styled from 'styled-components'

const Preloader = styled.div`
    position: relative;
`

interface PreloaderProps {
    className?: string
}

const Index = ({ className }: PreloaderProps) => {
    return (
        <Preloader className={className}>
            {/* Component body */}
        </Preloader>
    )
}

export default Index
