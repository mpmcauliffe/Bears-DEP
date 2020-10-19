import styled from 'styled-components'

const findMapMargins = () => {
    return `${-(window.innerWidth - 793) / 2}px`
}

export const MapFrame = styled.section`
    position: relative;
    margin: 3rem auto 3rem auto;
    max-width: 76.8rem;

    transition: left 500ms;
    transition-timing-function: cubic-bezier(.46,-0.37,.57,1.24);

    @media (min-width: 1280px) { left: ${p => p.posMod ? '-24.3rem' : 0}; }
`
export const Overlay = styled.img`
    position: absolute; 
    z-index: 10; 
    left: 0;
    max-width: 76.8rem;
    opacity: ${p => p.transparency ? .2 : 1};
`