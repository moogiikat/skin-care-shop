import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = [
    {
      title: "Гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.jpeg",
      category: ["bodySkinCare", "kangaroo_mommy"],
      id: 1,
    },
    {
      title: "Гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.jpeg",
      category: ["bodySkinCare", "kangaroo_mommy"],
      id: 1,
    },
    {
      title: "Гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.jpeg",
      category: ["bodySkinCare", "kangaroo_mommy"],
      id: 1,
    },
    {
      title: "Гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.jpeg",
      category: ["bodySkinCare", "kangaroo_mommy"],
      id: 1,
    },
    {
      title: "Гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.jpeg",
      category: ["bodySkinCare", "kangaroo_mommy"],
      id: 1,
    },
    {
      title: "Гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.jpeg",
      category: ["bodySkinCare", "kangaroo_mommy"],
      id: 1,
    },
    {
      title: "Гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.jpeg",
      category: ["bodySkinCare", "kangaroo_mommy"],
      id: 1,
    },
    {
      title: "Гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.jpeg",
      category: ["bodySkinCare", "kangaroo_mommy"],
      id: 1,
    },
    {
      title: "Гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.jpeg",
      category: ["kangaroo_mommy"],
      id: 1,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-5">
      <p>Дорнод оргинал гоо сайхны бүтээгдэхүүн</p>

      <p>bodySkinCare</p>
      {data
        .filter((data) => data.category.includes("bodySkinCare"))
        .map((item) => {
          return (
            <div>
              <div>{item.title}</div>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      <p>kangaroo_mommy</p>
      {data
        .filter((data) => data.category.includes("kangaroo_mommy"))
        .map((item) => {
          return (
            <div>
              <div>{item.title}</div>
              <img src={item.img} alt="" />
            </div>
          );
        })}
    </div>
  );
}
