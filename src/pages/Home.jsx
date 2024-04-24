import style from "../sass/home.module.scss";
import image from "./main-right-card.png";
import imageSm from "./sm-card-image.png";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <div className={style.info}>
          <div className="bg-red-200 w-[100%] text-center">
            <div className=" pl-5 flex flex-col justify-center card-body gap-8">
              <h2 className="w-[100%] card-header font-bold text-4xl">
                A special credit card made for Developers.
              </h2>
              <p className="text-content2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                illo, blanditiis tempore eveniet temporibus sunt quibusdam culpa
                eum.
              </p>
              <div className="card-footer w-[100%] py-1 rounded-lg">
                <form action="" className="flex flex-col m-auto ">
                  <input
                    className="h-[45px] bg-none w-[250px] m-auto"
                    placeholder="Enter Your E-mail"
                  />
                  <button className="bg-blue-700 rounded-lg h-[45px] m-auto px-3 w-44 text-white hover:bg-blue-800 text-lg">
                    Get Free Credit
                  </button>
                </form>
              </div>
              <div className="flex justify-evenly w-[100px] gap-1">
                <div className="flex justify-center gap-2">
                  <p className="text-4xl mt-1">2943</p>
                  <div className=" text-start">
                    <p>Cards</p>
                    <p>Delivered</p>
                  </div>
                </div>
                <span className="hidden">
                  <p>/</p>
                  <p>/</p>
                </span>
                <div className="flex justify-center gap-2">
                  <p className="text-4xl mt-1">$1M+</p>
                  <div className="text-start">
                    <p>Transaction</p>
                    <p>Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={image} alt="card-visa" />
        </div>
        <div className="">
          <img src={imageSm} alt="card-visa" className="h-20" />
        </div>
      </div>
    </div>
  );
};

export default Home;
