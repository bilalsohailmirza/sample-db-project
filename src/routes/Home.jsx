import MainNavbar from "../components/MainNavbar"
import HomeCarousel from "../components/HomeCarousel"
import CardsSection from "../components/CardsSection"


const Home = () => {

    return (
        <>
        <MainNavbar/ >
        <HomeCarousel/ >
        <CardsSection heading={'Societies'} />
        <CardsSection heading={'Events'} />
        </>
    )
}

export default Home;