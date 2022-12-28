
interface item {
  id: number;
  title: string;
  desc: string;
  img: string;
}


export const CardData: item[] = [
  {
    id: 1,
    title: "Make payments from almost anywhere",
    desc: "We accept payment from almost EVERY country in the world.",
    img: "src/assets/negocios-y-finanzas.png",
  },
  {
    id: 2,
    title: "Buy with debit and credit cards",
    desc: "Use a debit or credit card in any currency. All transactions are protected with the 3d Secure technology, so you can res easy.",
    img: "src/assets/negocios-cards.png",
  },
  {
    id: 3,
    title: "100% secure transactions",
    desc: "Protection against DDoS attacks, full data encryption, compliant with PCI DSS",
    img: "src/assets/seguridad.png",
  },
  {
    id: 4,
    title: "Assistance at every step",
    desc: "Our tem of qualified specialist is ready to help you every step of the way. If you run into any problems or just have some questions.",
    img: "src/assets/shake_hands.png",
  },
];
