/* eslint-disable react/prop-types */


function Card({text , img }) {
  return (
    <div className="flex flex-col justify-between w-40 h-40 p-3 bg-gray-200 rounded-xl">
      <p>{text}</p>
      <div className="flex justify-end ">
        <img src={img} alt="icon" className="w-5" />
      </div>
    </div>
  );
}

export default Card