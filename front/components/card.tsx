import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="card carousel-item w-60 bg-base-100 ">
      <figure className="px-4 pt-4">
        <img
          src="assets/images/body-skin-care/cubilose_hand_cream.png"
          alt="hand_cream"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body p-4 items-center text-center">
        <h3 className="card-title text-base">
          Шувууны үүрний охьтой гарын тос
        </h3>
        <div className="card-actions">
          <button className="btn btn-primary text-white">Дэлгэрэнгүй</button>
        </div>
      </div>
    </div>
  );
}
