import styled from 'styled-components'


export const ButtonSet = styled.button`
    font-style:normal;
    font-weight: 500;
    font-size: 1.5rem;

    flex: 1;
    max-height: 15rem;
    max-width: 16rem;
    min-width: 9.4rem;
    padding: 1rem .5rem;

    /* float: right; */
    /* color: ${props => props.theme.colorPrimary}; */
    color: ${p => (p.active ? p.theme.shell :p.theme.activeGray)}; /*#182e1e;*/
    background: ${p => (p.active ? p.theme.activeGray : p.theme.unitGray)};
    border: .1rem solid ${p => p.theme.backdropDark};
    cursor: pointer;
    transition: 500ms;

    &:focus { 
        outline: none;                           
        border: .2rem solid ${p => p.theme.activeGray}; 
    }
    /* &:active { color: ${p => p.theme.shell}; } */
`
