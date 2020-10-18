import styled from 'styled-components'


export const SubBay = styled.div`
    position: fixed;
    bottom: ${p => p.posModifier ? '-40rem' : '-80rem'};
    z-index: 30;
    height: 80rem;
    width: 100%;

    text-align: right;
    padding: 1.5rem;
    background: linear-gradient(180deg, rgba(169, 153, 150,1) 25%, rgba(255,255,255,1) 70%);
    transition: bottom 500ms;
    transition-timing-function: cubic-bezier(.46,-0.37,.57,1.24);

    i {
        margin-bottom: 1rem;
        font-size: 3rem;
        color: #fff;
        opacity: .3;
        cursor: pointer;
    }
`
