import React from 'react'
import logo from '../../assets/logo-colored.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return <>
        <section className="footer   pt-4 bg-white ">
            <div className="container ">
                <div className="row offset-1 gx-5">

                    <div className="col-lg-4 col-md-6 ">
                        <div className="info  ">
                            <img src={logo} alt="" />
                            <p className="pt-3">Alexandira</p>
                            <p className=" "><span className="fw-bold text">phone :</span> 01208073209</p>
                            <p className=""><span className="fw-bold">Email :</span> shaltouta477@gmail.com</p>
                        </div>
                        <div className="social-accounts  d-flex ">
                            <a href="https://twitter.com/ahmed63g" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.facebook.com/ahmedshaltout3g" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/ahmed_shaltout_3g/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/ahmed-shaltout-015b85252/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="footer-link col-lg-2 col-md-6 pb-4">
                        <p className=" fw-bold">Useful Links</p>
                        <ul className="p-0">
                            <li>
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>

                                <Link to="/" className="text-decoration-none "> Home</Link>
                            </li>
                            <li className="pt-3">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/headphone'>Head phones</Link>                            </li>
                            <li className="pt-3">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/tvs' >Televisions</Link>                            </li>

                            <li className="pt-3">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/camera'>Cameras</Link>                            </li>



                        </ul>
                    </div>
                    <div className="footer-link col-lg-2 col-md-6 pb-4">
                        <p className=" fw-bold">Useful Links</p>
                        <ul className="p-0">
                            <li className="">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/personal'>Personal</Link>                            </li>

                            <li className="pt-3">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/computers'>Computers</Link>                            </li>
                            <li className="pt-3">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/accessories'>Accessories</Link>                           </li>

                            <li className="pt-3">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/camera'>Cameras</Link>                            </li>



                        </ul>
                    </div>
                    <div className="footer-link col-lg-2 col-md-6 pb-4">
                        <p className=" fw-bold">User Linkes</p>
                        <ul className="p-0">
                            <li className="">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/login'>Login</Link>                            </li>

                            <li className="pt-3">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/register'>Register</Link>                            </li>
                            <li className="pt-3">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/favarite'>Loves</Link>                           </li>

                            <li className="pt-3">
                                <i className="fa-solid fa-arrow-right-long p-1 text-dark"></i>
                                <Link to='/cart'>My cart</Link>                            </li>



                        </ul>
                    </div>


                </div>

            </div>

        </section>

    </>
}
