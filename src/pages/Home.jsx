import style from "../sass/home.module.scss";
import image from "./main-right-card.png";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <div className={style.info}>
          <div className="bg-red-500 w-[500px]">
            <div className="card-body">
              <h2 className="card-header font-bold text-4xl">
                A special credit card made for Developers.
              </h2>
              <p className="text-content2">
                You can get your credit card as you wish.
              </p>
              <div className="card-footer border-2 border-black rounded-lg">
                <form action="" className="flex m-auto ">
                  <input
                    className="h-[45px] bg-none w-[250px]"
                    placeholder="Enter Your E-mail"
                  />
                  <button className="bg-blue-900 px-3 w-44 text-white hover:bg-blue-950">
                    GetFree Credit{" "}
                  </button>
                </form>
              </div>
              <div className="cardPrice flex justify-evenly">
                <div className="flex justify-center gap-2">
                  {" "}
                  <p className="text-5xl">2943</p>{" "}
                  <div className="mt-1">
                    <p>Cards</p>
                    <p>Delivered</p>
                  </div>
                </div>
                <span>
                  <p>/</p>
                  <p>/</p>

                </span>
                <span>
                  $1M+ <p>Transaction</p>
                  <p>Cpmpieted</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={style.rightSide}></div>
    </div>
  );
};

export default Home;
