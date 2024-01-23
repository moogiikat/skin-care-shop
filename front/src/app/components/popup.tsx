"use client";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  name: string;
  title: string;
  img: string;
  price: string;
  net?: string;
  balance: string;
  description: string;
}

export const Popup: React.FC<IProps> = ({
  name,
  title,
  img,
  price,
  net,
  balance,
  description,
}) => {
  return (
    <div>
      <button
        className="btn hover:-translate-y-1 hover:scale-110 duration-100 bg-pink-200 hover:bg-pink-300 border-none text-pink-800"
        onClick={() => {
          if (document) {
            (document.getElementById(name) as HTMLFormElement).showModal();
          }
        }}
      >
        Дэлгэрэнгүй
      </button>
      <dialog id={name} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg whitespace-pre-wrap px-12">
            {title}
          </h3>
          <div className="flex flex-col">
            <div className="lg:grid lg:grid-cols-3">
              <figure className="pt-3 col-span-2 w-full">
                <img src={img} alt="set" className="rounded-xl" />
              </figure>
              <div className="lg:pt-32">
                <p>Үнэ: {price}₮</p>
                {net && <p>Хэмжээ: {net}</p>}
                <p>Үлдэгдэл: {balance}</p>
              </div>
            </div>
            <p className="px-2 text-justify font-sans whitespace-pre-wrap">
              {description}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};
