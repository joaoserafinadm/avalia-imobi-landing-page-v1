
import styles from './pages.module.css'

export default function Page02() {


    return (
        <div className={`row  ${styles.secondPage} py-5 m-lg-5 m-1`}>


            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start my-5">
                <div className="row d-flex justify-content-center  ">
                    <div className="col-12 col-lg-7">
                        <div className="row">
                            <div className="col-12 mb-5">
                                <h1 className='fw-bold ' style={{ fontSize: '60px' }}>
                                    Avaliações
                                    Precisas em
                                    Minutos
                                </h1>

                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center mb-5">
                        <img src="/LOGO_02.png" alt="" style={{ width: '75%' }} />
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center mb-5">
                        <h4>
                            O Avalia Imobi foi desenvolvido para atender
                            às necessidades de corretores e imobiliárias,
                            proporcionando uma maneira fácil e eficiente
                            de avaliar imóveis. Com ele, você pode
                            cadastrar clientes, gerenciar imóveis e gerar
                            avaliações detalhadas e personalizadas com
                            base em comparações de mercado.
                        </h4>
                    </div>
                    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center mb-5">
                        <button className={`${styles.outlineButton2} border-rounded  scaleAnimation`}>
                            TESTE GRÁTIS!
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}