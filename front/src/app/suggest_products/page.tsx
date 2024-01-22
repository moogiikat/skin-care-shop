import Image from "next/image";
import Link from "next/link";
import { dataProducts } from "../../data/data";
import { Popup } from "../components/popup";
export default function Home() {
  const dataCategory = [
    { title: "Сет бүтээгдэхүүн", urlName: "#sets" },
    { title: "Бүх төрлийн маск", urlName: "#masks" },
    { title: "Биеийн арьс арчилгаа", urlName: "#bodySkinCare" },
    { title: "Хүүхдийн бүтээгдэхүүн", urlName: "#baby" },
    { title: "Үс арчилгааны бүтээгдэхүүн", urlName: "#hair" },
    { title: "Бусад бүтээгдэхүүнүүд", urlName: "#other" },
  ];
  return (
    <div>
      <div className="flex flex-col items-center gap-5 text-center pb-5">
        <div className="flex flex-row z-20 lg:text-xl sticky top-0 bg-purple-200 py-2 px-4 w-full font-semibold text-purple-950">
          <div className="pl-4 py-3 h-fit w-24 hidden lg:block">
            <img src="assets/images/dan-but/logo.png" alt="logo" />
          </div>
          <div className="flex flex-col bg-purple-200 py-4 w-full font-semibold text-purple-950">
            Дорнод Оргинал Гоо Сайхны Бүтээгдэхүүн
            <p>Dornod Original Skin Care Products</p>
          </div>
        </div>
        <Link href="/">
          <button>{`<-home`}</button>
        </Link>
        <div className="gap-4 grid grid-cols-2 lg:grid-cols-3">
          {dataCategory.map((item, idx) => {
            return (
              <div className="" key={idx}>
                <Link href={item.urlName}>
                  <button className="btn w-full hover:-translate-y-1 hover:scale-110 duration-100 bg-pink-200 hover:bg-pink-300 border-none text-pink-800">
                    {item.title}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        <p id="sets" className="font-bold text-xl">
          Сет бүтээгдэхүүн
        </p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("set"))
            .map((item, idx) => {
              return (
                <div key={idx} className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="set" className="rounded-xl" />
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
              );
            })}
        </div>

        <p id="masks" className="font-bold text-xl">
          Бүх төрлийн маск
        </p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("mask"))
            .map((item, idx) => {
              return (
                <div key={idx} className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="masks" className="rounded-xl" />
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
              );
            })}
        </div>

        <p id="bodySkinCare" className="font-bold text-xl">
          Биеийн арьс арчилгаа
        </p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("body_skincare"))
            .map((item, idx) => {
              return (
                <div key={idx} className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="masks" className="rounded-xl" />
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
              );
            })}
        </div>

        <p id="baby" className="font-bold text-xl">
          Хүүхдийн бүтээгдэхүүн
        </p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("baby"))
            .map((item, idx) => {
              return (
                <div key={idx} className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="set" className="rounded-xl" />
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
              );
            })}
        </div>

        <p id="hair" className="font-bold text-xl">
          Үс арчилгааны бүтээгдэхүүн
        </p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("hair"))
            .map((item, idx) => {
              return (
                <div key={idx} className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="set" className="rounded-xl" />
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
              );
            })}
        </div>

        <p id="other" className="font-bold text-xl">
          Бусад бүтээгдэхүүнүүд
        </p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("other"))
            .map((item, idx) => {
              return (
                <div key={idx} className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="set" className="rounded-xl" />
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
              );
            })}
        </div>
      </div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content bg-purple-200">
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
