import HeaderSection from '../components/HeaderSection'
import VidusSection from '../components/VidusSection'
import FooterSection from '../components/FooterSection'
import './NewsPage.css'

const NewsPage = () => {
    return (
        <div className="container">
            <div className="content-wrapper">
                <HeaderSection />        
                <VidusSection />
                <FooterSection />
            </div>
        </div>
    )
}

export default NewsPage