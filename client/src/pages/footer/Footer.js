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
        height: 5rem; 
        width: 100%; 
        margin-top: -1rem;
    }

    @media (max-width: 1140px) {
        img { height: 6.5rem; }
    }
    @media (max-width: 768px) {
        img { 
            height: 13rem; 
            width: 300%;
            margin-left: -33rem;
        }
        p { left: 15%; }
        a {
            left: 15%;
            top: 5rem;
        }
    }
    @media (max-width: 480px) {
        p { 
            left: 5%;
            font-size: 1.5rem;
         }
        a {
            left: 5%;
            top: 3rem;
            font-size: 1.5rem;
        }
    }
    @media (max-width: 420px) { p, a { font-size: 1.3rem; } }
    @media (max-width: 380px) {
        p {
            left: 0;
            top: 0;
        }
        a {
            left: 10%;
            top: 4rem;
        }
    }
`
const FooterImg = styled.img`
    width: 100%;

    @media (max-width: 1140px) {
        width: 160%;
        margin-left: -33rem;
    }
    @media (max-width: 980px) {
        width: 220%;
        margin-left: -33rem;
    }
    @media (max-width: 768px) {
        width: 300%;
        margin-left: -33rem;
    }
    @media (max-width: 480px) {
        width: 470%;
        margin-left: -48rem;
    }
    @media (max-width: 420px) {
        width: 570%;
        margin-left: -48rem;
    }
    @media (max-width: 380px) {
        width: 680%;
        margin-left: -48rem;
    }
`

export const Footer = () => {
    return (
        <div>
            <FooterImg 
                alt='bear-river'
                src={require(`./bear-river.png`)} />

            <BottomTag>
                <img
                    alt='footer'
                    src={require(`./footer.png`)} />

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                This illustration was created with the help of pch.vector</p>
                {/* <a href='https://www.freepik.com/pch-vector'></a> */}
                
                <a href='https://www.freepik.com/pch-vector'>Bear vector created by pch.vector - www.freepik/pch-vector.com</a>
            </BottomTag>
        </div>
    )
}
