import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className='text-center' >
            <div className=" h-[80vh]">
                <img src={"https://i.postimg.cc/c4D3FrGg/END-SEASON.jpg"} />
            </div>
            <div className=" h-[80vh]">
                <img src={"https://i.postimg.cc/qMtBdRCC/Brand-new-Smartwatch.jpg"} />
            </div>
            <div className=" h-[80vh]">
                <img src={"https://i.ibb.co/dtD5Fh4/BLUETOOTH-SPEKER.jpg"} />
            </div>
        </Carousel>
    );
};

export default Banner;