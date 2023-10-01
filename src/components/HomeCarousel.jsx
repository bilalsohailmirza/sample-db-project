import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// import { from '../assets/home';

const HomeCarousel = () => {
  return (
    <>
    <Carousel className='mt-5'data-bs-theme='dark'>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Image
          className="d-cover w-100"
          src = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg"
          alt="Fast Building"
          />
        {/* <Carousel.Caption> */}
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="">

    {/* <img src="../../assets/home/fastbuilding.jpg" alt="Fastbuilding" /> */}
    </div>
    </>
  );
}

export default HomeCarousel;