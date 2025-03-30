import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import { API_BASE_URL } from "../api";

function SellActionWindow({ uid }) {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleSellClick = () => {
        axios.post(`${API_BASE_URL}/order/sell`, {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "SELL",
        });

        GeneralContext.closeWindow();
    };
    const handleCancelClick = () => {
        GeneralContext.closeWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <h6 className="text-center">{uid}</h6>
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.25"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <Link className={`btn btn-red ${stockQuantity < 1 || stockPrice < 1 ? "disabled" : ""}`}
                        onClick={handleSellClick}>
                        Sell
                    </Link>
                    <Link className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;