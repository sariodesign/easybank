import { useState, useEffect} from 'react';
import styled from 'styled-components';
import Dialog from '../layouts/Dialog';
import MenuMobile from '../components/MenuMobile';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageContainer = styled.div`
    overflow: hidden;
`

function Page({children}) {
    const [deviceMobile, setDeviceMobile] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        let mobileMedia = '(max-width: 767px)'
        let isMobile = window.matchMedia(mobileMedia).matches

        isMobile ? setDeviceMobile(true) : setDeviceMobile(false) 
    })

    return (
        <PageContainer>
            <Header isMobileDevice={deviceMobile} openMenu={setMobileMenu} />
            {children}
            <Footer />
            {deviceMobile && <Dialog visible={mobileMenu}><MenuMobile /></Dialog> }
        </PageContainer>
    )
}

export default Page;