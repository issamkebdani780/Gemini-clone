import Card from "./Card"
import { assets } from "./assets/assets"
const Hero = () => {
  return (
    <div className="flex flex-col relative w-full h-screen overflow-auto">
      <div className="flex justify-between p-5 mb-10">
        <h5>Gemini-clone</h5>
        <div>
          <img
            src={assets.user_icon}
            alt="img"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <div className="mb-10">
            <h1 className="text-5xl ">Hello, Dev</h1>
            <h1 className="text-5xl">How can I help you today?</h1>
          </div>
          <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5 mb-16 max-w-[900px] w-[100%]">
            <Card
              text="Suggest beatiful places to see on an upcoming rood trip"
              img={assets.compass_icon}
            />
            <Card
              text="Suggest beatiful places to see on an upcoming rood trip"
              img={assets.bulb_icon}
            />
            <Card
              text="Suggest beatiful places to see on an upcoming rood trip"
              img={assets.message_icon}
            />
            <Card
              text="Suggest beatiful places to see on an upcoming rood trip"
              img={assets.code_icon}
            />
          </div>
          <div className="flex bg-gray-200 rounded-3xl px-5 py-2 justify-between items-center w-[700px] mb-2">
            <input type="text" placeholder="Enter a prompt here" className="w-[80%] outline-none border-none bg-gray-200"/>
            <div className="flex gap-2">
                <img src={assets.gallery_icon} alt="icon" className="w-5 h-5" />
                <img src={assets.mic_icon} alt="icon" className="w-5 h-5" />
            </div>
          </div>
          <div className="max-w-[700px] text-center">
            Gemini-clone may display inoccurateinfo,including about people, so double-check its responses. Your privacy and grmini apps
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero