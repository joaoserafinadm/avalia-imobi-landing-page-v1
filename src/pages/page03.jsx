
import styles from './pages.module.css'

export default function Page03() {


    return (
        <div className={`row d-flex justify-content-center ${styles.thirdPage} py-5`}>



            <div className="col-12 col-md-10">
                <div className="row d-flex ">
                    <div className="col-12 col-md-6 my-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-11 d-flex justify-content-center">
                                <img src="/IMAGE_02.png" alt="" />
                            </div>
                            <div className="col-11 d-flex justify-content-center my-3">
                                <h2 className='fw-bold'>
                                    Cadastro de Clientes
                                </h2>
                            </div>
                            <div className="col-11 d-flex justify-content-center text-center">
                                <h4>
                                    Organize e gerencie seus clientes de forma
                                    simples e prática, com todos os dados
                                    importantes em um só lugar.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-11 d-flex justify-content-center">
                                <img src="/IMAGE_03.png" alt="" />
                            </div>
                            <div className="col-11 d-flex justify-content-center my-3">
                                <h2 className='fw-bold'>
                                    Cadastro de Imóveis
                                </h2>
                            </div>
                            <div className="col-11 d-flex justify-content-center text-center">
                                <h4>
                                    Registre imóveis manualmente ou permita que
                                    o próprio cliente forneça as informações
                                    completas através de um formulário online.
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-12 col-md-10">
                <div className="row d-flex ">
                    <div className="col-12 col-md-6 my-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-11 d-flex justify-content-center">
                                <img src="/IMAGE_04.png" alt="" />
                            </div>
                            <div className="col-11 d-flex justify-content-center my-3">
                                <h2 className='fw-bold'>
                                    Envio de Avaliações
                                </h2>
                            </div>
                            <div className="col-11 d-flex justify-content-center text-center">
                                <h4>
                                    Compartilhe a avaliação com o cliente por
                                    meio de um link exclusivo. O cliente pode
                                    selecionar o valor mais interessante, adicionar
                                    observações e avaliar o atendimento.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-11 d-flex justify-content-center">
                                <img src="/IMAGE_05.png" alt="" />
                            </div>
                            <div className="col-11 d-flex justify-content-center my-3">
                                <h2 className='fw-bold'>
                                    Avaliação Comparativa
                                </h2>
                            </div>
                            <div className="col-11 d-flex justify-content-center text-center">
                                <h4>
                                    Compare o imóvel com outros semelhantes e
                                    obtenha valores de venda de curto prazo, ideal
                                    e de longo prazo, com base em dados reais do
                                    mercado.
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}