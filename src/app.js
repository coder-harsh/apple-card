import React from "react";
import ReactDOM from "react-dom/client";
import AppleCard from "./component/AppleCard";
import cardData from "./mocdata";

const App = () => {
    return (
        <div className="flex md:h-screen justify-center items-center m-auto" id="app">
            {
                cardData.map((card) => {
                    return <AppleCard key={card.id} cardList={card} />
                })
            }
        </div>
    );
};
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);