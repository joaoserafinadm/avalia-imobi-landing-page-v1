
import styles from './pages.module.css'

export default function Page04() {


    return (
        <div className={`row  py-5 m-lg-5 m-1`} id='beneficios'>


            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start my-5">
                <div className="row d-flex justify-content-center  ">
                    <div className="col-12 col-lg-7">
                        <div className="row">
                            <div className="col-12 mb-5">
                                <h1 className='fw-bold ' style={{ fontSize: '60px' }}>
                                    Benefícios
                                </h1>

                            </div>
                            <div className="col-12 d-flex justify-content-center mb-5">
                                <img src='/IMAGE_06.png' alt="" style={{ width: '90%' }} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8 d-flex justify-content align-items-center my-2">
                        <h2>Eficiência e Agilidade</h2>
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center my-2">
                        <h5>
                            Acelere o processo de avaliação com uma ferramenta que
                            reúne todas as informações necessárias em um único lugar.
                        </h5>
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center my-2 border-bottom border-2 border-dark">
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content align-items-center my-2">
                        <h2>Precisão nas Avaliações</h2>
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center my-2">
                        <h5>
                            Ofereça valores de venda confiáveis, baseados em
                            comparações de imóveis semelhantes, ajudando seus
                            clientes a tomarem decisões informadas.
                        </h5>
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center my-2 border-bottom border-2 border-dark">
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content align-items-center my-2">
                        <h2>Experiência do Cliente</h2>
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center my-2">
                        <h5>
                            Proporcione uma experiência personalizada e transparente,
                            com a possibilidade do cliente participar ativamente do
                            processo de avaliação.
                        </h5>
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center my-2 border-bottom border-2 border-dark">
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content align-items-center my-2">
                        <h2>Versatilidade</h2>
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center my-2">
                        <h5>
                            Acesse o Avalia Imobi de qualquer lugar, seja no escritório ou
                            em movimento, com versões para desktop e mobile.
                        </h5>
                    </div>
                </div>



            </div>
        </div>
    )
}