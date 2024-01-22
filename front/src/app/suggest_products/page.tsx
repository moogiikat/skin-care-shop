import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const dataProducts = [
    {
      title: "Ногоон цайны хандтай сальфеткан маск",
      img: "assets/images/masks/tea_mask.png",
      category: ["mask", "batga", "kangaroo_mommy"],
      urlName: "/tea_tree_mask",
    },
    {
      title: "Ямааны сүүний хандтай шөнийн маск",
      img: "assets/images/masks/goat_night.png",
      category: ["mask", "kangaroo_mommy"],
      urlName: "/goat_night_mask",
    },
    {
      title: "Улаан буудайн охьтой сальфеткан маск",
      img: "assets/images/masks/wheat_mask.png",
      category: ["mask", "kangaroo_mommy"],
      urlName: "/wheat_mask",
    },
    {
      title: "Ямааны сүүний хандтай сальфеткан маск",
      img: "assets/images/masks/goat_mask.png",
      category: ["mask", "kangaroo_mommy"],
      urlName: "/goat_mask",
    },
    {
      title: "Шувууны үүрийн охьтой сальфеткан маск",
      img: "assets/images/masks/cubilose_mask.png",
      category: ["mask", "kangaroo_mommy"],
      urlName: "/cubilose_mask",
    },
    {
      title: "Улаан буудайн үрийн охьтой шөнийн маск",
      img: "assets/images/masks/wheat_night_mask.png",
      category: ["mask", "kangaroo_mommy"],
      urlName: "/wheat_night_mask",
    },

    {
      title: "Ногоон цайны хандтай сет",
      img: "assets/images/set/tea_tree_set.png",
      category: ["set", "batga", "kangaroo_mommy"],
      urlName: "/tea_tree_set",
    },
    {
      title: "Фолийн хүчил агуулсан дээд зэрэглэлийн сет",
      img: "assets/images/set/folic_set.png",
      category: ["set", "kangaroo_mommy"],
      urlName: "/folic_acid_set",
    },
    {
      title: "Улаан буудайн үрийн охьтой сет",
      img: "assets/images/set/wheat_set.png",
      category: ["set", "kangaroo_mommy"],
      urlName: "/wheat_set",
    },
    {
      title: "Буурцагны үрийн охьтой сет",
      img: "assets/images/set/soybean_set.png",
      category: ["set", "kangaroo_mommy"],
      urlName: "/soybean_set",
    },
    {
      title: "Шувууны үүрийн охьтой сет",
      img: "assets/images/set/cubilose_set.png",
      category: ["set", "kangaroo_mommy"],
      urlName: "/cubilose_set",
    },

    {
      title: "Авокадо жимсний охьтой биеийн тос",
      img: "assets/images/body-skin-care/avocado_lotion.png",
      category: ["body_skincare", "kangaroo_mommy"],
      urlName: "/avocado_lotion",
    },
    {
      title: "Шувууны үүрийн охьтой гарын тос",
      img: "assets/images/body-skin-care/cubilose_hand_cream.png",
      category: ["body_skincare", "kangaroo_mommy"],
      urlName: "/cubilose_hand_cream",
    },
    {
      title: "Улаан буудайн охьтой биеийн тос",
      img: "assets/images/body-skin-care/wheat_body_lotion.png",
      category: ["body_skincare", "kangaroo_mommy"],
      urlName: "/wheat_body_lotion",
    },
    {
      title: "Шувууны үүрийн охьтой биеийн тос",
      img: "assets/images/body-skin-care/cubilose_body_lotion.png",
      category: ["body_skincare", "kangaroo_mommy"],
      urlName: "/cubilose_body_lotion",
    },
    {
      title: "Улаан буудайн охьтой гарын тос",
      img: "assets/images/body-skin-care/wheat_hand_cream.png",
      category: ["body_skincare", "kangaroo_mommy"],
      urlName: "/wheat_hand_cream",
    },
    {
      title: "Улаан буудайн охьтой уруулын бальзам",
      img: "assets/images/dan-but/lip_balm.png",
      category: ["other", "kangaroo_mommy"],
      urlName: "/wheat_lip_balm",
    },
    {
      title: "Нарны тос",
      img: "assets/images/dan-but/narnii_tos_jijig.png",
      category: ["other", "kangaroo_mommy"],
      urlName: "/sunscreen_sm",
    },
    {
      title: "Нарны тос (Хөгшрөлтийн эсрэг)",
      img: "assets/images/dan-but/narnii_tos_jijig.png",
      category: ["other", "kangaroo_mommy"],
      urlName: "/sunscreen_bold",
    },
    {
      title: "Улаан буудайн охьтой нүүр угаагч",
      img: "assets/images/dan-but/wheat_cleanser_new.png",
      category: ["other", "kangaroo_mommy"],
      urlName: "/wheat_cleanser_new",
    },
    {
      title: "Улаан буудайн охьтой нүүр цэвэрлэгч",
      img: "assets/images/dan-but/wheat_cleanser.png",
      category: ["other", "kangaroo_mommy"],
      urlName: "/wheat_cleanser",
    },
    {
      title: "Улаан буудайн охьтой нүүрний тос",
      img: "assets/images/dan-but/wheat_cream.png",
      category: ["other", "kangaroo_mommy"],
      urlName: "/wheat_cream",
    },
    {
      title: "Улаан буудайн охьтой үсний сет",
      img: "assets/images/hair/wheat_sham_condi.png",
      category: ["hair", "kangaroo_mommy"],
      urlName: "/wheat_hair_set",
    },
  ];
  const dataCategory = [
    { title: "Сет бүтээгдэхүүн", urlName: "" },
    { title: "Бүх төрлийн маск", urlName: "" },
    { title: "Биеийн арьс арчилгаа", urlName: "" },
    { title: "Хүүхдийн бүтээгдэхүүн", urlName: "" },
    { title: "Үс арчилгааны бүтээгдэхүүн", urlName: "" },
    { title: "Бусад бүтээгдэхүүнүүд", urlName: "" },
  ];
  return (
    <div>
      <div className="flex flex-col items-center gap-5 text-center pb-5">
        <div className="flex  flex-row z-20 lg:text-xl sticky top-0 bg-purple-200 py-2 px-4 w-full font-semibold text-purple-950">
          <div className="pl-4 py-3 h-fit w-24 hidden lg:block">
            <img src="assets/images/dan-but/logo.png" alt="logo" />
          </div>
          <div className="flex flex-col  bg-purple-200 py-4 w-full font-semibold text-purple-950">
            Дорнод Оргинал Гоо Сайхны Бүтээгдэхүүн
            <p>Dornod Original Skin Care Products</p>
          </div>
        </div>
        <div className="gap-4 grid grid-cols-2 lg:grid-cols-3">
          {dataCategory.map((item) => {
            return (
              <div className="">
                <Link href={item.urlName}>
                  <button className="btn w-full hover:-translate-y-1 hover:scale-110 duration-100 bg-pink-200 hover:bg-pink-300">
                    {item.title}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        <p className="font-bold text-xl">Сет бүтээгдэхүүн</p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("set"))
            .map((item) => {
              return (
                <div className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="set" className="rounded-xl" />
                  </figure>
                  <div className="card-body p-4 items-center text-center">
                    <h2 className="card-title text-base">{item.title}</h2>

                    <div className="card-actions">
                      <Link href={item.urlName}>
                        <button className="btn btn-primary text-white">
                          Дэлгэрэнгүй
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <p className="font-bold text-xl">Бүх төрлийн маск</p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("mask"))
            .map((item) => {
              return (
                <div className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="masks" className="rounded-xl" />
                  </figure>
                  <div className="card-body p-4 items-center text-center">
                    <h2 className="card-title text-base">{item.title}</h2>

                    <div className="card-actions">
                      <Link href={item.urlName}>
                        <button className="btn btn-primary text-white">
                          Дэлгэрэнгүй
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <p className="font-bold text-xl">Биеийн арьс арчилгаа</p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("body_skincare"))
            .map((item) => {
              return (
                <div className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="masks" className="rounded-xl" />
                  </figure>
                  <div className="card-body p-4 items-center text-center">
                    <h2 className="card-title text-base">{item.title}</h2>

                    <div className="card-actions">
                      <Link href={item.urlName}>
                        <button className="btn btn-primary text-white">
                          Дэлгэрэнгүй
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <p className="font-bold text-xl">Хүүхдийн бүтээгдэхүүн</p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("baby"))
            .map((item) => {
              return (
                <div className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="set" className="rounded-xl" />
                  </figure>
                  <div className="card-body p-4 items-center text-center">
                    <h2 className="card-title text-base">{item.title}</h2>

                    <div className="card-actions">
                      <Link href={item.urlName}>
                        <button className="btn btn-primary text-white">
                          Дэлгэрэнгүй
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <p className="font-bold text-xl">Үс арчилгааны бүтээгдэхүүн</p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("hair"))
            .map((item) => {
              return (
                <div className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="set" className="rounded-xl" />
                  </figure>
                  <div className="card-body p-4 items-center text-center">
                    <h2 className="card-title text-base">{item.title}</h2>

                    <div className="card-actions">
                      <Link href={item.urlName}>
                        <button className="btn btn-primary text-white">
                          Дэлгэрэнгүй
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <p className="font-bold text-xl">Бусад бүтээгдэхүүнүүд</p>

        <div className="carousel carousel-center max-w-full lg:max-w-[1264px] gap-4 pt-4">
          {dataProducts
            .filter((data) => data.category.includes("other"))
            .map((item) => {
              return (
                <div className="card carousel-item w-60 bg-base-100 ">
                  <figure className="px-4 pt-4">
                    <img src={item.img} alt="set" className="rounded-xl" />
                  </figure>
                  <div className="card-body p-4 items-center text-center">
                    <h2 className="card-title text-base">{item.title}</h2>

                    <div className="card-actions">
                      <Link href={item.urlName}>
                        <button className="btn btn-primary text-white">
                          Дэлгэрэнгүй
                        </button>
                      </Link>
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
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
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
