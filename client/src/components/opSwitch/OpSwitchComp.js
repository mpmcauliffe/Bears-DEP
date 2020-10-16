import styled from 'styled-components'


export const ButtonSet = styled.button`
    font-style:normal;
    font-weight: 500;
    font-size: ${props => props.theme.inter};
    max-height: 8rem;

    float: right;
    /* color: ${props => props.theme.colorPrimary}; */
    color: #182e1e;
    background: ${props => (props.active ? '#e6a495' : '#e6cfca')};
    transition: 500ms;

    &:focus {
        outline: none;
        /* font-weight: 600; */
        border: .1rem solid #182e1e;
    }

    /* Media queries are experimental for this component */
    @media (max-width: 640px) {
        /* display: ${props => (props.fluid ? 'flex' : 'block')}; */
        /* width: 33.333vw; */
    }
    @media (min-width: 641px) {
        /* max-width: 20vw; */
    }
`
