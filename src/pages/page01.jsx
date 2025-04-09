
import styles from './pages.module.css'

export default function Page01() {


    return (
        <div className={`row text-light  ${styles.firstPage} py-5`}>


            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-5">
                <div className="row d-flex justify-content-center ">
                    <div className="col-10 col-lg-7">
                        <div className="row">
                            <div className="col-12 mb-5">
                                <img src="/LOGO_01.png" alt="" style={{ width: '80%' }} />
                            </div>
                            <div className="col-12 mb-5">
                                <h1>

                                    Para Corretores e Imobiliárias
                                </h1>

                            </div>
                            <div className="col-12 mb-5">
                                <h4>
                                    Facilite o processo de avaliação de imóveis com um aplicativo completo e intuitivo, acessível em desktop e mobile.
                                </h4>
                            </div>
                            <div className="col-12">
                                <button className={`${styles.outlineButton} border-rounded bg-white`}>
                                    ACESSAR PLATAFORMA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-11 d-flex justify-content-center align-items-center">
                        <img src="/IMAGE_01.png" alt="" style={{ width: '80%' }} />
                    </div>
                </div>



            </div>
        </div>
    )
}