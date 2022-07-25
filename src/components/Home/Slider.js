import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider () {
    return (
    <Carousel>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="image" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvLMwRgfYoqEW5yDJj1O3zm9oNdzmmZQ7vlhdEJMf0inm3SCg7Uy6A45U-6BMG2_wqi0&usqp=CAU" />
                </div>
                <div>
                    <img src="https://st.depositphotos.com/1002927/2461/i/950/depositphotos_24612779-stock-photo-online-shopping-bags.jpg" />
                </div>
            </Carousel>
        );
}