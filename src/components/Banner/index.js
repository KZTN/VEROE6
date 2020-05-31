import React from 'react'
import './styles.scss'
export default function Banner() {
    return (
        <section id="banner">
            <header>Conteúdo para ser adicionado no banner</header>
            <div className="wrapper">
                <div className="wrapper-item">
                    <div className="item-header">Taxa de algo</div>
                    <div className="item-data">27.2%</div>
                </div>
                <div className="wrapper-item">
                    <div className="item-header">Dado disso</div>
                    <div className="item-data">14</div>
                </div>
                <div className="wrapper-item">
                    <div className="item-header">Algo importante</div>
                    <div className="item-data">34</div>
                </div>
                <div className="wrapper-item">
                    <div className="item-header">Super conclusão</div>
                    <div className="item-data">78</div>
                </div>
            </div>
            <footer>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</footer>
        </section>
    );
}