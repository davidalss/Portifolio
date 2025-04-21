'use client';

import CountUp from 'react-countup';

const countersData = [
    {
        number: 2,
        title: "Years",
        subtitle: "Experience",
    },
    {
        number: 10,
        title: "+",
        subtitle: "Projects Completed",
    },
    {
        number: 5,
        title: "+",
        subtitle: "Happy Clients",
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
