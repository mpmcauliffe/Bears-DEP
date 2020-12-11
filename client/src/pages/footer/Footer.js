import React from 'react'
import styled from 'styled-components'


const BottomTag = styled.div`
    position: relative;
    width: 100%;

    p {
        position: absolute;
        top: -2rem;
    }
    a {
        position: absolute;
        left: 60%;
    }
    img {
        position: relative; 
        height: 3.5rem; 
        width: 100%; 
        margin-top: -1rem;
    }

    @media (max-width: 1140px) {
        img { height: 6.5rem; }
    }
`

export const Footer = () => {
    return (
        <div>
            <img 
                alt='bear-river'
                src={require(`./bear-river.png`)}
                style={{ width: '100%', }} />

            <BottomTag>
                <img
                    alt='footer'
                    src={require(`./footer.png`)} />

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                This illustration was created with the help of pch.vector</p>
                {/* <a href='https://www.freepik.com/pch-vector'></a> */}
                
                <a href='https://www.freepik.com/vectors/flyer'>Flyer vector created by pch.vector - www.freepik.com</a>
            </BottomTag>
        </div>
    )
}
