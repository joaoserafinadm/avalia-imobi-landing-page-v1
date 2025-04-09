
import styles from './pages.module.css'

export default function Page06() {


    return (
        <>
            <div className={`row text-light bg-black py-5`}>

                <div className="col-12 text-center">
                    <h1>Eficiência, Precisão e Versatilidade</h1>
                </div>


                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-5">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-10 col-lg-7">
                            <div className="row">
                                <div className="col-12 mb-5">
                                    <img src="/LOGO_03.png" alt="" style={{ width: '80%' }} />
                                </div>
                                <div className="col-12 mb-5">
                                    <h1>

                                        Experimente o Avalia Imobi
                                        Gratuitamente!
                                    </h1>

                                </div>
                                <div className="col-12 mb-5">
                                    <h4>
                                        Simplifique o processo de avaliação de imóveis e
                                        ofereça um atendimento ainda mais profissional aos
                                        seus clientes. Cadastre-se agora e aproveite a versão
                                        de teste gratuita!</h4>
                                </div>
                                <div className="col-12">
                                    <a href="https://app.avaliaimobi.com.br" target="_blank" className={`${styles.outlineButton} border-rounded bg-white`}>
                                        ACESSAR PLATAFORMA
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-4">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-11 d-flex justify-content-center align-items-start">
                            <img src="/LOGO_04.png" alt="" style={{ width: '60%' }} />
                        </div>
                        <div className="col-12 col-lg-11 d-flex justify-content-center align-items-start mt-3">
                            <a href="https://www.instagram.com/avaliaimobi/?igsh=dG1mNWFsYnU5ODM1#" target="_blank">
                                <img src="/SOCIAL_INSTAGRAM.png" alt="" className='mx-2 scaleAnimation' />
                            </a>
                            <a href="https://www.facebook.com/avalia.imobi/" target="_blank">

                            <img src="/SOCIAL_FACEBOOK.png" alt="" className='mx-2 scaleAnimation' />
                            </a>
                        </div>
                    </div>



                </div>
            </div>
            <div className={`row ${styles.page05} py-3`} >
                <div className="col-12 text-center">
                    <span>© 2024 Avalia Imobi. Todos os direitos reservados.</span>
                </div>
            </div>
        </>

    )
}