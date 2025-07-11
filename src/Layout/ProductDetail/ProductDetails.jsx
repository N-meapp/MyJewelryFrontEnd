import React, { useState, useRef, useEffect, useContext } from "react";
import AccordionItem from "../../Components/AccordionItem/AccordionItem";
import { fetchProductsDetails } from "../../API/userAPI";
import { useLocation } from "react-router-dom";
import { ProductContext } from './ProductContext';

const ProductDetails = () => {
    const location = useLocation()
    const [openIndex, setOpenIndex] = useState(0); // <-- Default open the first item
    const [productData, setProductData] = useState([])
    const { detailProductData } = useContext(ProductContext);
    console.log('pro-data', productData);

    const id = location?.state?.id

    useEffect(() => {
        fetchProductsDetails(id, setProductData)
    }, [])

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {
            title: "Metal Details",
            content: [
                {
                    heading: productData.karat + "K",
                    discription: "Karatage"
                },
                {
                    heading: "Yellow",
                    discription: "Material Colour"
                },
                {
                    heading: productData.metal_weight + "g",
                    discription: "Gross Weightr"
                },
                {
                    heading: "Gold",
                    discription: "Metal"
                },
                {
                    heading: productData.pendant_height + " cm",
                    discription: "Pendant Heightr"
                },
                {
                    heading: productData.pendant_width + " cm",
                    discription: "Pendant Width"
                },
            ]
        },
        {
            title: "Diamond Details",
            content: [
                {
                    heading: "18K",
                    discription: "Karatage"
                },
                {
                    heading: "Yellow",
                    discription: "Material Colour"
                },
                {
                    heading: "0.902g",
                    discription: "Gross Weightr"
                },
                {
                    heading: "Gold",
                    discription: "Metal"
                },
                {
                    heading: "1.7cm",
                    discription: "Pendant Heightr"
                },
                {
                    heading: "1 cm",
                    discription: "Pendant Width"
                },
            ]
        },
        {
            title: "General Details",
            content: [
                {
                    heading: "18K",
                    discription: "Karatage"
                },
                {
                    heading: "Yellow",
                    discription: "Material Colour"
                },
                {
                    heading: "0.902g",
                    discription: "Gross Weightr"
                },
                {
                    heading: "Gold",
                    discription: "Metal"
                },
                {
                    heading: "1.7cm",
                    discription: "Pendant Heightr"
                },
                {
                    heading: "1 cm",
                    discription: "Pendant Width"
                },
            ]
        },
        {
            title: "Description",
            content: [
                {
                    description: "Symbolize your love with this 22 Karat yellow gold Mangalsutra, elegantly designed with black beads and golden floral charms for a traditional look.  Designed for the contemporary bride, this Mangalsutra combines traditional elements with modern design. Its perfect for daily wear and special occasions, bringing both beauty and cultural significance.",
                }
            ]
        },
    ];

    const svg = [
        {
            icons: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="#56433d" d="M7.5 11h9.1c.3 0 .5-.3.4-.6l-1-6c0-.2-.3-.4-.5-.4h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5m1.4-6h6.2l.8 5H8.1zM22 13.4c0-.2-.2-.4-.5-.4h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5h9.1c.3 0 .5-.3.4-.6zM14.1 19l.8-5h6.2l.8 5zm-4.6-6h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5h9.1c.3 0 .5-.3.4-.6l-1-6c0-.2-.3-.4-.5-.4m-7.4 6l.8-5h6.2l.8 5z" stroke-width="0.3" stroke="#56433d" /></svg>),
        },
        {
            icons: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 512 512"><path fill="none" stroke="#56433d" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="m35.42 188.21l207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75M48 176h416" /><path fill="none" stroke="#56433d" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="m400 64l-48 112l-96-128M112 64l48 112l96-128m0 400l-96-272m96 272l96-272" /></svg>),
        },
        {
            icons: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 512 512"><path fill="#56433d" d="M201.837 53.087L177.547 21h55.676zM278.766 21l30.82 31.465L333.065 21zm12.428 38.12L256 23.18l-35.25 35.985h70.5zm82.091 0l-23.511-30.855l-23.003 30.9h46.57zM161.096 28.683L138.5 59.188h45.746zm51.248 48.242L256 196.821l43.69-119.896h-87.38zm-73.166 0l90.384 99.017l-36.153-99.017zm233.712 0h-54.23l-36.076 99.017zm-19.455 48.142l-29.059 31.838a154.3 154.3 0 0 1 85.786 138.119C410.14 380.008 340.995 449.197 256 449.197s-154.14-69.144-154.14-154.14a154.3 154.3 0 0 1 85.787-138.119L158.588 125.1a196.04 196.04 0 0 0-98.53 169.924C60.057 403.056 147.955 491 256 491c108.044 0 195.943-87.899 195.943-195.943a196.04 196.04 0 0 0-98.542-169.99z" /></svg>
            ),
        },
        {
            icons: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 20 20"><g fill="#56433d"><path d="M6.5 12a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" /><path fill-rule="evenodd" d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z" clip-rule="evenodd" /><path d="M11 7h5.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0z" /></g></svg>),
        },
    ];


    const svgMobile = [
        {
            icons: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#56433d" d="M7.5 11h9.1c.3 0 .5-.3.4-.6l-1-6c0-.2-.3-.4-.5-.4h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5m1.4-6h6.2l.8 5H8.1zM22 13.4c0-.2-.2-.4-.5-.4h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5h9.1c.3 0 .5-.3.4-.6zM14.1 19l.8-5h6.2l.8 5zm-4.6-6h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5h9.1c.3 0 .5-.3.4-.6l-1-6c0-.2-.3-.4-.5-.4m-7.4 6l.8-5h6.2l.8 5z" stroke-width="0.3" stroke="#56433d" /></svg>),
        },
        {
            icons: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path fill="none" stroke="#56433d" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="m35.42 188.21l207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75M48 176h416" /><path fill="none" stroke="#56433d" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="m400 64l-48 112l-96-128M112 64l48 112l96-128m0 400l-96-272m96 272l96-272" /></svg>),
        },
        {
            icons: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path fill="#56433d" d="M201.837 53.087L177.547 21h55.676zM278.766 21l30.82 31.465L333.065 21zm12.428 38.12L256 23.18l-35.25 35.985h70.5zm82.091 0l-23.511-30.855l-23.003 30.9h46.57zM161.096 28.683L138.5 59.188h45.746zm51.248 48.242L256 196.821l43.69-119.896h-87.38zm-73.166 0l90.384 99.017l-36.153-99.017zm233.712 0h-54.23l-36.076 99.017zm-19.455 48.142l-29.059 31.838a154.3 154.3 0 0 1 85.786 138.119C410.14 380.008 340.995 449.197 256 449.197s-154.14-69.144-154.14-154.14a154.3 154.3 0 0 1 85.787-138.119L158.588 125.1a196.04 196.04 0 0 0-98.53 169.924C60.057 403.056 147.955 491 256 491c108.044 0 195.943-87.899 195.943-195.943a196.04 196.04 0 0 0-98.542-169.99z" /></svg>
            ),
        },
        {
            icons: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 20 20"><g fill="#56433d"><path d="M6.5 12a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" /><path fill-rule="evenodd" d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z" clip-rule="evenodd" /><path d="M11 7h5.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0z" /></g></svg>),
        },
    ];


    return (
        <div className="md:px-[25%]  md:py-[70px] px-[40px] py-[50px] ">
            {detailProductData?.details?.map((item, index) => (
                <AccordionItem
                    key={index}
                    icon={svg[index].icons}
                    mobileIcon={svgMobile[index].icons}
                    index={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    toggle={toggleAccordion}
                />
            ))}

        </div>
    );
};


export default ProductDetails