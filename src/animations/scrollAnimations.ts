export const fadeInUp = (y = 20, delay = 0, duration = 0.8, amount: "some" | "all" | number = "some") => ({
    initial: {opacity: 0, y},
    whileInView: {opacity: 1, y: 0, transition: {duration, delay}},
    viewport: {once: true, amount}
});

export const fadeInLeft = (x = 20, delay = 0, duration = 0.8) => ({
    initial: {opacity: 0, x: -x},
    whileInView: {opacity: 1, x: 0, transition: {duration, delay}},
    viewport: {once: true, amount: "some" as const}
});

export const fadeInRight = (x = 20, delay = 0, duration = 0.8) => ({
    initial: {opacity: 0, x},
    whileInView: {opacity: 1, x: 0, transition: {duration, delay}},
    viewport: {once: true, amount: "some" as const}
});

export const scaleIn = (delay = 0, duration = 0.8) => ({
    initial: {opacity: 0, scale: 0.8},
    whileInView: {opacity: 1, scale: 1, transition: {duration, delay}},
    viewport: {once: true, amount: "some" as const}
});

export const staggerChildren = (delay = 0, duration = 0.8, stagger = 0.1) => ({
    initial: {opacity: 0},
    whileInView: {
        opacity: 1,
        transition: {duration, delay, staggerChildren: stagger}
    },
    viewport: {once: true, amount: "some" as const}
});