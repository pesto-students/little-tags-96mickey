export const contactInfoData = [
  { key: "Phone:", value: "(+91) 9876 543 210", goTo: "info/contact" },
  {
    key: "Address:",
    value:
      "1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, United State",
    goTo: "info/address",
  },
];

export const cardUrls = [
  require("./../assets/images/mastercard_inverse.svg").default,
  require("./../assets/images/jcb_inverse.svg").default,
  require("./../assets/images/paypal_inverse.svg").default,
  require("./../assets/images/visa_inverse.svg").default,
  require("./../assets/images/amazon_inverse.svg").default,
];

export const HomeCategoriesImageData = [
  {
    imgUrl: require("./../assets/images/mens.jpg").default,
    text: "Mens",
    goTo: "/prod/mens/",
  },
  {
    imgUrl: require("./../assets/images/womens.jpg").default,
    text: "Womens",
    goTo: "/prod/womens/",
  },
  {
    imgUrl: require("./../assets/images/kids.jpg").default,
    text: "Kids",
    goTo: "/prod/kids/",
  },
];

export const ProductData = [
  {
    products: [
      {
        label: "Womens Jacket",
        imgUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        goTo: "/prod/t-shirts/1",
      },
      {
        label: "Jeans",
        imgUrl:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        goTo: "/prod/t-shirts/2",
      },
      {
        label: "Backpacks",
        imgUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        goTo: "/prod/t-shirts/3",
      },
      {
        label: "Jeans",
        imgUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        goTo: "/prod/t-shirts/4",
      },
    ],
    caption: "Mens Clothing",
  },
  {
    products: [
      {
        label: "Womens Jacket",
        imgUrl: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        goTo: "/prod/t-shirts/15",
      },
      {
        label: "Womens Jacket",
        imgUrl: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        goTo: "/prod/t-shirts/16",
      },
      {
        label: "Womens Jacket",
        imgUrl: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        goTo: "/prod/t-shirts/17",
      },
      {
        label: "Womens Jacket",
        imgUrl: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        goTo: "/prod/t-shirts/19",
      },
    ],
    caption: "Womens Clothing",
  },
];

export const MostInDemandSectionTitle = "Most in Demand Products";

export const ProductCarouselIntervalTime = 5000;
