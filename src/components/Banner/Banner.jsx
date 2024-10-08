import img from "../../assets/banner-icon-img/Vector (1).png";
import img1 from "../../assets/banner-icon-img/Vector.png";
import star from "../../assets/banner-icon-img/Star 5.png";
import grp1 from "../../assets/banner-icon-img/Group 1000006823.png";
import grp2 from "../../assets/banner-icon-img/Group 1000006824.png";
import grp3 from "../../assets/banner-icon-img/Group 1000006826.png";
import man1 from "../../assets/banner-icon-img/image 1198.png";
import man2 from "../../assets/banner-icon-img/portrait-handsome-young-man-with-crossed-arms-removebg-preview.png";
import man3 from "../../assets/banner-icon-img/image 1201.png";

const Banner = () => {
  return (
    <div className="bg-[#160A3A] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-[96px] px-4 max-w-7xl mx-auto min-w-[320px]">
        {/* Left side div */}
        <div className="flex flex-col gap-y-[24px] md:gap-y-[31px]">
          <button className="bg-gradient-to-r w-full max-w-[220px] flex justify-center items-center gap-x-3 h-[36px] from-[#241457] to-[#4F2BBD]">
            <img src={img} className="w-[19px] h-[19px]" alt="Icon" />
            <h1 className="text-white text-sm">Verified by Coursera</h1>
          </button>

          <h1
            className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-[44px] sm:leading-[60px] md:leading-[74px] text-white
          max-w-full md:max-w-[500px]
          "
          >
            Learn Code From top{" "}
            <span className="underline text-[#EAE34A]">Coder</span>
          </h1>

          <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[30px] max-w-full md:max-w-[500px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#EAE34A] text-lg sm:text-xl font-medium rounded-md text-[#10005A] w-full sm:w-[152px] h-[48px]">
              Get Started
            </button>
            <button className="bg-[#37266F] text-white flex justify-center items-center gap-x-3 text-lg sm:text-xl font-medium w-full sm:w-[198px] h-[48px] rounded-md">
              <img src={img1} className="w-[19px] h-[19px]" alt="Icon" />
              <h1 className="text-white">How it works</h1>
            </button>
          </div>

          {/* Star rating */}
          <div className="flex items-center gap-x-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  className="w-[20px] h-[20px]"
                  src={star}
                  alt="Star"
                />
              ))}
            </div>
            <p className="font-normal text-white text-lg">
              Based on 10,000+ reviews
            </p>
          </div>

          {/* Group images */}
          <div className="flex items-center gap-x-3">
            <img src={grp1} className="h-[22px] w-[92px]" alt="Group1" />
            <img src={grp2} className="h-[22px] w-[92px]" alt="Group2" />
            <img src={grp3} className="h-[22px] w-[92px]" alt="Group3" />
          </div>
        </div>

        {/* Right side div */}
        <div className="relative flex justify-center mt-8 md:mt-0">
          {/* 1 */}
          <div className="absolute left-6 sm:left-14 flex flex-col items-center justify-between bg-gradient-to-b from-[#98FDE3] to-[#3E3761] z-10 w-[120px] sm:w-[160px] h-[300px] sm:h-[459px] rounded-full">
            <div className="mt-[20px] sm:mt-[54px] text-center">
              <h1 className="font-semibold text-[18px] sm:text-[22px]">
                Lissa Kie
              </h1>
              <p className="font-normal text-sm sm:text-base mt-[4px] sm:mt-[6px]">
                React Engineer
              </p>
            </div>
            <img
              src={man3}
              className="w-[200px] sm:w-[267px] rounded-full"
              alt="Person1"
            />
          </div>

          {/* 2 */}
          <div className="absolute bottom-0 flex flex-col items-center justify-between bg-gradient-to-b from-[#DCB1FF] to-[#221644] z-10 w-[120px] sm:w-[160px] h-[300px] sm:h-[459px] rounded-full">
            <div className="mt-[20px] sm:mt-[54px] text-center">
              <h1 className="font-semibold text-[18px] sm:text-[22px]">
                Lissa Kie
              </h1>
              <p className="font-normal text-sm sm:text-base mt-[4px] sm:mt-[6px]">
                React Engineer
              </p>
            </div>
            <img
              src={man1}
              className="w-[200px] sm:w-[267px] rounded-full"
              alt="Person2"
            />
          </div>

          {/* 3 */}
          <div className="absolute right-6 sm:right-14 -top-14 flex flex-col items-center justify-between bg-gradient-to-b from-[#98FDE3] to-[#3E3761] w-[120px] sm:w-[160px] h-[300px] sm:h-[459px] rounded-full z-10">
            <div className="mt-[20px] sm:mt-[54px] text-center">
              <h1 className="font-semibold text-[18px] sm:text-[22px]">
                Lissa Kie
              </h1>
              <p className="font-normal text-sm sm:text-base mt-[4px] sm:mt-[6px]">
                React Engineer
              </p>
            </div>
            <img
              src={man2}
              className="w-[200px] sm:w-[267px] rounded-full"
              alt="Person3"
            />
          </div>

          {/* Circular light effect */}
    
        </div>
      </div>
      <div className="absolute  right-0 top-0 w-[300px] sm:w-[692px] h-[300px] sm:h-[692px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9506FF] via-[#241846] to-[#160A3A] blur-[80px] sm:blur-[150px]"></div>
    </div>
  );
};

export default Banner;


{/* <div className="absolute -right-[120px] sm:-right-[320px] w-[300px] sm:w-[692px] h-[300px] sm:h-[692px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9506FF] via-[#241846] to-[#160A3A] blur-[80px] sm:blur-[150px]"></div> */}
