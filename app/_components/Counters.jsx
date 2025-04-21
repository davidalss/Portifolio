'use client';

import React from "react";
import CountUp from 'react-countup';

const countersData = [
    {
        number: 1,
        title: " Ano",
        subtitle: "Transição para a área de TI",
    },
    {
        number: 5,
        title: "+",
        subtitle: "Projetos práticos desenvolvidos",
    },
    {
        number: 100,
        title: "%",
        subtitle: "dedicação nos estudos e evolução contínua",
    },
];

const Counters = () => {
    return (
        <div className="grid grid-cols-3 gap-1 xl:w-[648px] lg:w-[400px] max-w-full rounded-md overflow-hidden shadow-lg">
            {countersData.map((counter) => (
                <div
                    key={counter.subtitle}
                    className="text-text-secondary text-center bg-biege/40 py-4"
                >
                    <p className="2xl:text-3xl lg:text-xl">
                        <CountUp end={+counter.number} start={0} duration={5} />
                        {counter.title}
                    </p>
                    <p className="2xl:text-base md:text-sm text-xs">
                        {counter.subtitle}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Counters;
