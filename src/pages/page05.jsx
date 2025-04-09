
import styles from './pages.module.css'

export default function Page05() {


    return (
        <div className={`row d-flex justify-content-center ${styles.page05} py-5`}>



            <div className="col-12 col-md-10">
                <div className="row d-flex justify-content-center justify-content-md-start">
                    <div className="col-12 col-md-6 my-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-3 col-5 ">
                                <img src="/USER_01.png" alt="" style={{ width: '100%' }} />
                            </div>
                            <div className="col-10 col-md-8  my-3 ">
                                <h4 className=' fst-italic'>
                                    “O <b>Avalia Imobi</b> transformou a forma
                                    como faço avaliações. Agora posso
                                    oferecer valores <b>precisos</b> e em <b>tempo
                                        real</b> para meus clientes. <b>Recomendo!</b>”
                                </h4>
                                <h5 className=''>
                                    • Augusto Schimitt, Casa Dez Imóveis
                                </h5>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="col-12 col-md-10">
                <div className="row d-flex  justify-content-center justify-content-md-end">

                    <div className="col-12 col-md-6 my-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-3 col-5 ">
                                <img src="/USER_02.png" alt="" style={{ width: '100%' }} />
                            </div>
                            <div className="col-10 col-md-8  my-3 ">
                                <h4 className=' fst-italic'>
                                    “Com o <b>Avalia Imobi</b>, meus clientes
                                    conseguem cadastrar seus próprios
                                    imóveis com <b>facilidade</b>. Isso <b>economiza
                                        tempo</b> e melhora a <b>qualidade</b> das
                                    informações que recebemos.”
                                </h4>
                                <h5 className=''>
                                    • Jhonny Sangali, Casa Dez Imóveis
                                </h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}