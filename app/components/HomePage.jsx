import ProductSection from "./ ProductSection";

const kaftans = [
  {
    name: 'GT-Kaf 24/010',
    image: 'https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/threads-pi-image%2Fcaucasian-standing-front-modern-building-pink-dress-hairband.jpg?alt=media&token=cdce93d3-9de4-4fb7-9ecc-b57569023f42',
    price: '₦240,000.00',
    link: '/product/GT-Kaf%2024%2F010',
    whatsapp: 'https://wa.me/23407080250212?text=Hello%2C%20I%20will%20like%20to%20get%20the%20GT-Kaf%2024%2F010.',
  },
  {
    name: 'GT-Kaf 24/007',
    image: 'https://img.freepik.com/premium-photo/portrait-smiling-young-woman-standing-field_1048944-20511203.jpg?ga=GA1.1.1909098577.1746678197&semt=ais_hybrid&w=740',
    price: '₦220,000.00',
    link: '/product/GT-Kaf%2024%2F007',
    whatsapp: 'https://wa.me/23407080250212?text=Hello%2C%20I%20will%20like%20to%20get%20the%20GT-Kaf%2024%2F007.',
  },
  // Add more as needed
];

const agbadas = [
  {
    name: 'GT-Agb 24/001',
    image: 'https://img.freepik.com/free-photo/young-attractive-indian-woman-traditional-dress-woman-dancing-against-white-background_1157-48166.jpg?ga=GA1.1.1909098577.1746678197&semt=ais_hybrid&w=740',
    price: '₦400,000.00',
    link: '/product/GT-Agb%2024%2F001',
    whatsapp: 'https://wa.me/23407080250212?text=Hello%2C%20I%20will%20like%20to%20get%20the%20GT-Agb%2024%2F001.',
  },
  {
    name: 'GT-Agb 23/007',
    image: 'https://img.freepik.com/premium-photo/indian-girl-holding-white-board-promoting-offers-festival-season-while-wearing-traditional-cloths-standing-isolated-white-background_466689-40840.jpg?ga=GA1.1.1909098577.1746678197&semt=ais_hybrid&w=740',
    price: '₦370,000.00',
    link: '/product/GT-Agb%2023%2F007',
    whatsapp: 'https://wa.me/23407080250212?text=Hello%2C%20I%20will%20like%20to%20get%20the%20GT-Agb%2023%2F007.',
  },
  // Add more as needed
];

export default function HomePage() {
  return (
    <>
      <ProductSection title="KAFTANS" products={kaftans} seeMoreHref="/kaftans" />
      <ProductSection title="AGBADA" products={agbadas} seeMoreHref="/agbada" />
    </>
  );
}
