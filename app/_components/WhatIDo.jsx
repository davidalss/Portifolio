"use client";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Desenvolvimento Full Stack (Backend e Frontend)",
    text: "Desenvolvo soluções completas em aplicações web e sistemas corporativos, com expertise tanto no front-end quanto no back-end. Minhas principais tecnologias incluem HTML, CSS, JavaScript, C#, Angular, entre outras. Priorizo a criação de código limpo, reutilizável e escalável, sempre com foco em desempenho e usabilidade.",
  },
  {
    title: "Análise e Visualização de Dados (SQL, BigQuery, Pandas, DAX, B.I)",
    text: "Especialista em transformar dados brutos em insights estratégicos que orientam decisões empresariais. Utilizo ferramentas como SQL, Power BI, Tableau, Excel Avançado, Looker Studio e BigQuery para criar dashboards interativos e relatórios dinâmicos, gerando valor para projetos e operações.",
  },
  {
    title: "Qualidade e Otimização de Processos",
    text: "Atuo na melhoria contínua e otimização de processos operacionais, utilizando ferramentas como SAP, Power Apps, Microsoft Forms e SharePoint. Com foco em automação e redução de erros, integro soluções tecnológicas para aumentar a eficiência e garantir a qualidade em todas as etapas.",
  },
];

const Card = ({ title, text }) => (
  <div className="hover:border-l-[5px] hover:translate-x-4 transition-all bg-white border-l-primary rounded-md shadow-card p-8">
    <h3 className="text-text-primary mb-4 xl:text-2xl text-xl">{title}</h3>
    <p className="text-text-secondary">{text}</p>
  </div>
);

const WhatIDo = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="services"
      className="bg-section-secondary lg:py-20 py-10 px-section"
    >
      <div className="container mx-auto flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between">
        {/* left-side */}
        <div className="lg:max-w-[40%] lg:text-left text-center">
          <h2 className="lg:text-5xl font-semibold md:text-3xl text-2xl text-[#333] lg:mb-6 mb-4">
            O que eu faço?
          </h2>
          <p className="text-text-secondary text-lg mb-4">
            Sou um profissional em transição para a área de tecnologia, com base sólida em qualidade, processos e dados. Tenho me dedicado ao desenvolvimento de soluções completas que conectam tecnologia e eficiência operacional.
          </p>
          <p className="text-text-secondary text-lg">
            Hoje, atuo na criação de aplicações web, análise de dados e melhoria de processos, unindo experiência prática com constante evolução técnica. Busco aplicar conhecimento em projetos reais, sempre com foco em resolver problemas e gerar valor.
          </p>

          <a
            className="lg:mt-12 mt-4 inline-block rounded md:w-auto w-full bg-primary px-6 py-3 lg:text-lg tracking-wider font-medium text-white transition hover:scale-110 hover:shadow-xl outline-hidden"
            href="#contact"
          >
            Fale Comigo!
          </a>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:gap-6 gap-4 lg:max-w-[50%]">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card title={item.title} text={item.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhatIDo;
