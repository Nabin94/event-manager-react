import Banner from './../../components/banner/banner'
import HeroSection from './../../components/heroSection/heroSection'
import Cardlist from './../../components/cardlist/cardlist'


export default function HomePage() {
    return (
        <>
            <Banner />
            <div className="container">
                <Cardlist />
                <HeroSection />
            </div>
        </>
    );
}