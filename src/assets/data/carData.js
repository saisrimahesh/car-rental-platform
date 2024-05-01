// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Tesla Malibu offers unparalleled comfort, blending plush interiors with ergonomic design. Luxurious seating, advanced climate control, and noise-cancellation ensure a serene ride, redefining relaxation on the road.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 505,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Toyota Aventador is a fictional combination of Toyota's reliability and the Lamborghini Aventador's performance. Imagined as a high-performance hybrid, it merges power, efficiency, and Japanese engineering prowes.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 650,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The BMW X3 is a luxurious compact SUV renowned for its blend of performance, comfort, and versatility. It boasts upscale interiors, advanced technology, and dynamic driving dynamics, making it a top choice in its segment.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 700,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Nissan Mercielago is a hypothetical fusion of Nissan's innovation and the Lamborghini Murciélago's performance. Imagined as a sleek, high-performance coupe, it combines Japanese precision with Italian flair for an exhilarating driving experience.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 455,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Ferrari Camry is a playful concept, combining Ferrari's performance with Toyota Camry's practicality. It envisions a sporty sedan with Italian styling, Japanese reliability, and thrilling driving dynamics, blending speed and comfort effortlessly.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 850,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Mercedes-Benz XC90 combines the elegance of Mercedes-Benz with the versatility of the Volvo XC90 SUV. Expect refined luxury, advanced technology, and spacious interiors, creating a sophisticated driving experience for discerning individuals.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 650,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Audi Fiesta likely refers to a hypothetical combination of Audi's sophistication with the vibrancy of a Fiesta. Imagined as a compact car with German engineering and lively performance, it promises a fun and stylish driving experience.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Rolls Royce Colorado is a fictional concept blending the opulence of Rolls-Royce with the ruggedness of Colorado. Envisioned as a luxurious off-road vehicle, it offers unmatched comfort, advanced technology, and capability, redefining luxury adventure travel.",
  },
];

export default carData;
