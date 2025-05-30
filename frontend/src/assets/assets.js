import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "Bracelet" ,
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Green Emerald Collection",
        description: "A lightweight, usually knitted, pullover , close-fitting and with a round neckline, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Women",
        subCategory: "Necklace",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Bracelests with golden look",
        description: "A lightweight, usually knitted, pullover Bracelets, fitting and with a round line , worn for elegance.",
        price: 30,
        image: [p_img3],
        category: "Women",
        subCategory: "Bracelet",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "multiple colored jewelry bracelet",
        description: "A lightweight, usually knitted, multiple colored jewelry bracelet, close-fitting , worn for special Occasions.",
        price: 50,
        image: [p_img4],
        category: "Women",
        subCategory: "Bracelet",
        sizes: ["S", "M"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Women Anklete",
        description: "A lightweight, usually knitted, Women Anklete, close-fitting and with a round neckline and short sleeves, worn for special Occasions.",
        price: 19.99,
        image: [p_img5],
        category: "Women",
        subCategory: "Anklet",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Couple bracelet ",
        description: "A lightweight, usually knitted, Couple bracelet , close-fitting and with a round neckline and short sleeves, worn for lovers ",
        price: 14.99,
        image: [p_img6],
        category: "Couple",
        subCategory: "Bracelet",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Red Ring",
        description: "A lightweight, usually knitted, Red Ring, close-fitting and with a round necklace , worn for special dates.",
        price: 9.99,
        image: [p_img7],
        category: "Women",
        subCategory: "Ring",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    ]