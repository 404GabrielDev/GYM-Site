import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>SESSÃO DE TREINAMENTO PRINCIPAL</h1>
        <p>
          Nossa sessão de treinamento principal é projetada para ajudá-lo a
          alcançar seus objetivos de fitness de forma eficiente e divertida. Com
          a orientação de treinadores especializados, você desenvolverá força,
          resistência e flexibilidade enquanto se desafia a alcançar novos
          limites.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>BOOTCAMPS EM DESTAQUE</h1>
        <p>
          Nossos bootcamps oferecem uma experiência intensiva de treinamento em
          grupo, onde você trabalhará em exercícios dinâmicos e desafiadores.
          Ideal para quem busca melhorar rapidamente seu desempenho físico, seja
          para emagrecimento, ganho de massa muscular ou resistência.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Treinamento para Iniciantes: Comece sua Jornada</h4>
            <p>
              Este bootcamp é perfeito para quem está começando. Focado em
              exercícios básicos e progressivos, ele ajudará a melhorar a força
              e a resistência de forma gradual e segura, criando a base para
              treinos mais avançados.
            </p>
          </div>
          <div>
            <h4>Treinamento Avançado: Superando Limites</h4>
            <p>
              Para quem já tem experiência em treinos e quer ir além. Exercícios
              desafiadores e intensos, com foco em alta performance, força
              máxima e resistência cardiovascular. Prepare-se para suar!
            </p>
          </div>
          <div>
            <h4>Bootcamp de Queima de Gordura: Transformação Rápida</h4>
            <p>
              Se o seu objetivo é emagrecer de forma eficaz e rápida, este
              bootcamp foca na queima de gordura através de treinos metabólicos
              e cardiovasculares intensos, combinando exercícios aeróbicos e de
              alta intensidade.
            </p>
          </div>
          <div>
            <h4>Bootcamp Funcional: Corpo Inteiro em Movimento</h4>
            <p>
              Um treino completo que foca em movimentos funcionais, melhorando a
              mobilidade, equilíbrio e força, com exercícios que replicam
              atividades cotidianas, ajudando no desempenho geral do corpo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
