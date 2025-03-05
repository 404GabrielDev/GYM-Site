import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "TRIMESTRAL",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "SEMESTRAL",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "ANUAL",
      price: 67000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>PLANOS DE FITNESS ELITE EDGE</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACOTE</h1>
                <h3>R$ {element.price}</h3>
                <p>Por {element.length} Meses</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipamento
                </p>
                <p>
                  <Check /> Treinamento gratuito todo dia
                </p>
                <p>
                  <Check /> Banheiro gratuito
                </p>
                <p>
                  <Check /> Suporte Especializado 24/7
                </p>
                <p>
                  <Check /> Opção de Congelamento de 20 dias
                </p>
                <Link to={"/"}>Junte-se Agora</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
