import React from 'react';
import Header from '../../Pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';

const Mainlayout = () => {
    return (
        <div className='bg-gradient-to-t from-[#9fbcff]  to-[#fff]'>
            <Header></Header>
            <div className='px-8 pt-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;