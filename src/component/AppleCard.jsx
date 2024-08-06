import logo from '../store-card-40-bts-applecare-disc.png'
const AppleCard = (props) => {
    const { cardList } = props;
    return (
        <div className="flex flex-col justify-center w-80 h-[25.4117647059rem] m-6 px-[12px] pt-[24px] shadow-cardshad rounded-bordercard bg-[#fffbfb] hover:cursor-pointer leading-none" id='card'>
            <div className="flex justify-between">
                <p className="text-start text-[rgb(182,68,0)] text-[9.5px] mb-2 font-medium">LIMITED-TIME OFFER</p>
                <i className="fa-solid fa-graduation-cap text-green-700 text-[18px] mb-2"></i>
            </div>
            <h2 className="text-[24px] font-semibold text-left m-0">{cardList.heading}</h2>
            <img src={logo} alt="" className="h-[20rem] m-0" />
        </div>
    );
};
export default AppleCard;  