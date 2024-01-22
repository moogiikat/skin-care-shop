"use client";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  name: string;
  title: string;
  img: string;
}

export const Popup: React.FC<IProps> = ({ name, title, img }) => {
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
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          <figure className="px-4 pt-4">
            <img src={img} alt="set" className="rounded-xl" />
          </figure>
        </div>
      </dialog>
    </div>
  );
};
