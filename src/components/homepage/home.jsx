import Banner from './components/banner/banner'
import HeroSection from './components/'
export function HomePage() {
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