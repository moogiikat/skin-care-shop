import Image from "next/image";
import Link from "next/link";
import { Popup } from "../../components/popup";

export default function Home() {
  const dataCard = [
    {
      name: "data1",
      title: "Шувууны үүрний охьтой гарын тос",
      img: "assets/images/body-skin-care/cubilose_hand_cream.png",
      isNew: false,
    },
    {
      name: "data2",
      title: "Ямааны сүүний охьтой шөнийн маск",
      img: "assets/images/masks/goat_night.png",
      isNew: false,
    },
    {
      name: "data3",
      title: "Улаан буудайн охьтой нүүр угаагч",
      img: "assets/images/dan-but/wheat_cleanser_new.png",
      isNew: true,
    },
    {
      name: "data4",
      title: "Модны цайны хандтай маск",
      img: "assets/images/masks/tea_mask.png",
      isNew: false,
    },
  ];

  const dataSaleCard = [
    {
      name: "item1",
      title: "Улаан буудайн охьтой уруулын бальзам",
      img: "assets/images/dan-but/lip_balm.png",
      priceOld: "10'000",
      priceNew: "8'000",
    },
    {
      name: "item2",
      title: "Буурцагны үрийн охьтой сэт",
      img: "assets/images/set/soybean_set.png",
      priceOld: "250'000",
      priceNew: "220'000",
    },
    {
      name: "item3",
      title: "Авокадо жимсний охьтой биеийн тос",
      img: "assets/images/body-skin-care/avocado_lotion.png",
      priceOld: "32'000",
      priceNew: "28'000",
    },
    {
      name: "item4",
      title: "Улаан буудайн охьтой нүүр цэвэрлэгч",
      img: "assets/images/dan-but/wheat_cleanser.png",
      priceOld: "50'000",
      priceNew: "40'000",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col items-center gap-5 text-center pb-5">
        <div className="flex flex-row z-20 sticky top-0 bg-purple-200 py-2 px-4 w-full font-semibold text-purple-950">
          <div className="pl-4 py-3 h-fit w-24 hidden lg:block">
            <img src="assets/images/dan-but/logo.png" alt="logo" />
          </div>
          <div className="flex flex-col  bg-purple-200 py-4 w-full font-semibold text-purple-950">
            Дорнод Оргинал Гоо Сайхны Бүтээгдэхүүн
            <p>Dornod Original Skin Care Products</p>
          </div>
        </div>

        <div className="flex flex-col w-fit lg:flex-row gap-5">
          <div className="">
            <Link href="/suggestions">
              <button className="btn  hover:-translate-y-1 hover:scale-110 duration-100 bg-pink-200 hover:bg-pink-300">
                Арьсны асуудлаар сонгох
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className=" stroke-pink-800"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="divider lg:divider-horizontal">эсвэл</div>
          <div className="">
            <Link href="/suggest_products">
              <button className="btn  hover:-translate-y-1 hover:scale-110 duration-100 bg-pink-200 hover:bg-pink-300">
                Бүтээгдэхүүний төрлөөр сонгох
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className=" stroke-pink-800"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <p className="font-bold text-xl">Онцлох бүтээгдэхүүн</p>
        <div className="carousel carousel-center max-w-full gap-4 pt-4">
          {dataCard.map((item, idx) => {
            return (
              <div key={idx} className="indicator">
                {item.isNew && (
                  <span className="indicator-item indicator-center badge badge-primary h-8 text-white">
                    Шинэ бүтээгдэхүүн
                  </span>
                )}
                <div className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img
                      src={item.img}
                      alt="body_lotion"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body p-4 items-center text-center">
                    <h2 className="card-title text-base">{item.title}</h2>
                    <div className="card-actions">
                      <Popup
                        name={item.name}
                        title={item.title}
                        img={item.img}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-bold text-xl pt-5">Хямдралтай бүтээгдэхүүн</p>
        <div className="carousel carousel-center max-w-full gap-4 ">
          {dataSaleCard.map((item, idx) => {
            return (
              <div key={idx} className="card carousel-item w-60 bg-base-100 ">
                <figure className="px-4 pt-4">
                  <img src={item.img} alt="Sale" className="rounded-xl" />
                </figure>
                <div className="card-body p-4 items-center text-center">
                  <h2 className="card-title text-base">{item.title}</h2>
                  <div className="flex items-center gap-4 font-sans">
                    <div className="line-through  text-base">
                      {item.priceOld}₮
                    </div>
                    <div className=" text-red-500 font-semibold ">
                      {item.priceNew}₮
                    </div>
                  </div>
                  <div className="card-actions">
                    <Popup name={item.name} title={item.title} img={item.img} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <img
            src="assets/images/dan-but/logo.png"
            width="36"
            height="36"
            className="fill-current"
          />

          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.560 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
}
