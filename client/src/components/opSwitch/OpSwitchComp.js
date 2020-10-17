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
    color: #182e1e;
    background: ${props => (props.active ? '#e6a495' : '#e6cfca')};
    border: none;
    cursor: pointer;
    transition: 500ms;

    &:focus {
        outline: none;
        /* border: .1rem solid red; */
    }
`
