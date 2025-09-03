"use client"
import Link from "next/link"
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import service_img1 from "@/assets/imgs/service/Service-1.webp";
import service_img2 from "@/assets/imgs/service/Service-2.webp";
import service_img3 from "@/assets/imgs/service/Service-3.webp";
import service_img4 from "@/assets/imgs/service/Service-4.webp";


interface TabData {
    icon: string;
    title: string;
}

const tab_title: TabData[] = [
    {
        icon: "icon-kitchen",
        title: "Cocinas y Bodegas",
    },
    {
        icon: "icon-closet",
        title: "Placares y Vestidores",
    },
    {
        icon: "icon-sink",
        title: "Vanitories y Muebles de Baño",
    },
    {
        icon: "icon-desk",
        title: "Equipamiento de Oficinas",
    },
];

interface DataType {
    id: number;
    thumb: StaticImageData;
    title: string;
    desc: string;
    list: string[];
}

const service_data: DataType[] = [
    {
        id: 1,
        thumb: service_img1,
        title: "Cocinas y Bodegas",
        desc: "Diseñamos cocinas funcionales y modernas que se convierten en el corazón del hogar, aumentando el valor percibido de cada unidad que entregás.",
        list: ["Diseños a medida del plano.", "Materiales de alta durabilidad.", "Optimización máxima del espacio."],
    },
    {
        id: 2,
        thumb: service_img2,
        title: "Placares y Vestidores",
        desc: "Creamos soluciones de guardado inteligentes y a medida. Desde placares funcionales hasta vestidores de diseño que aprovechan cada centímetro.",
        list: ["Interiores 100% personalizables.", "Herrajes y sistemas de primera marca.", "Adaptación a cualquier tipo de espacio."],
    },
    {
        id: 3,
        thumb: service_img3,
        title: "Vanitories y Muebles de Baño",
        desc: "Equipamiento para baños que combina un diseño superior con alta resistencia a la humedad, un punto clave para la durabilidad y la calidad final.",
        list: ["Materiales aptos para zonas húmedas.", "Diseño integrado con la mesada.", "Soluciones para baños y lavaderos."],
    },
    {
        id: 4,
        thumb: service_img4,
        title: "Equipamiento de Oficinas",
        desc: "Desarrollamos mobiliario corporativo a medida para oficinas y locales comerciales, creando espacios de trabajo funcionales y con una fuerte identidad de marca.",
        list: ["Puestos de trabajo y escritorios.", "Muebles de guardado y archivos.", "Mostradores y equipamiento comercial."],
    },
];

interface PropType {
    style: boolean;
}

const Service = ({ style }: PropType) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <section className={`service-tab-section section-space bg-color-1 p-relative ${style ? "is-dark" : ""}`}>
            <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-33.png)` }}></div>
            <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-34.png)` }}></div>
            <div className="small-container">
                <div className="service-tab-title-area mb-70">
                    <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title">NUESTROS SERVICIOS</span>
                        <h3 className="section-title mt-10 text-black p-relative">Soluciones de Amoblamiento para Cada Espacio de tu Obra</h3>
                    </div>
                    <Link className="primary-btn-4 btn-hover mt-20" href="#contacto">
                        Cotizar mi Proyecto &nbsp; | <i className="icon-right-arrow"></i>
                        <span style={{ top: "147.172px", left: "108.5px" }}></span>
                    </Link>
                </div>

                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="service-tab-btn-area wow fadeInLeft" data-wow-delay="500ms">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                {tab_title.map((tab, index) => (
                                    <li key={index} className="nav-item" role="presentation">
                                        <a className={`nav-link ${activeTab === index ? "active" : ""}`} onClick={() => handleTabClick(index)} style={{ cursor: "pointer" }}>
                                            <div className="icon-box">
                                                <i className={tab.icon}></i>
                                            </div>
                                            {tab.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="service-tab-details-area">
                            <div className="tab-content" id="myTabContent">
                                {service_data.map((item, index) => (
                                    <div key={item.id} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}>
                                        <div className="service-tab-content p-relative">
                                            {!style && <div className="tab-bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-32.png)` }}></div>}
                                            <figure className="image p-relative">
                                                <Image src={item.thumb} alt={item.title} />
                                            </figure>
                                            <div className="content p-relative">
                                                <h4>{item.title}</h4>
                                                <p className="pt-15 pb-10">{item.desc}</p>
                                                <ul className="tab-list-content">
                                                    {item.list.map((list, i) => (
                                                        <li key={i}>✔ {list}</li>
                                                    ))}
                                                </ul>
                                                <Link className="primary-btn-1 btn-hover mt-20" href="#contacto">
                                                    Pedir Cotización &nbsp; | <i className="icon-right-arrow"></i>
                                                    <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;