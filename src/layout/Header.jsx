import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Função para detectar scroll e adicionar sombra ao header
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Função para scroll suave até os elementos com id
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={`position-fixed bg-white w-100 ${isScrolled ? 'shadow-sm' : ''}`} style={{ zIndex: 1000 }}>
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center py-1">
                    <div className="col-auto">
                        <img src="/LOGO_05.png" alt="Logo" style={{ height: '20px' }} className="img-fluid" />
                    </div>

                    <div className="col-auto d-none d-md-block">
                        <nav className="d-flex align-items-center">
                            <ul className="nav">
                                <li className="nav-item mx-2">
                                    <a className="nav-link text-dark fw-medium" href="#" onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('home');
                                    }}>Home</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link text-dark fw-medium" href="#" onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('sobre');
                                    }}>Sobre</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link text-dark fw-medium" href="#" onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('funcionalidades');
                                    }}>Funcionalidades</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link text-dark fw-medium" href="#" onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('beneficios');
                                    }}>Benefícios</a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a className="outlineButton" href="/app">
                                        Acessar App
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Menu mobile */}
                    <div className="col-auto d-md-none">
                        <button className="btn btn-outline-secondary border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                        <Menu />
                        </button>
                        
                        {/* Menu lateral para mobile */}
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link text-dark py-2" href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('home');
                                        }}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-dark py-2" href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('sobre');
                                        }}>Sobre</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-dark py-2" href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('funcionalidades');
                                        }}>Funcionalidades</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-dark py-2" href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('beneficios');
                                        }}>Benefícios</a>
                                    </li>
                                    <li className="nav-item mt-3">
                                        <a className="outlineButton" href="https://app.avaliaimobi.com.br">
                                            Acessar App
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}