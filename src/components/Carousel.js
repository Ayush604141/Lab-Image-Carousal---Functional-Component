import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [index, setIndex] = useState(0)
    const prevImg = () => {
        if(index>0){
            setIndex(index-1)
        }
        else{
            setIndex(index + 2)
        }
    }
    const nextImg = () => {
        if(index<2){
            setIndex(index + 1)
        }
        else{
            setIndex(index - 2)
        }
    }
    return(
        <div className="Holder">
            <div className="arrow-holder" onClick={()=>prevImg()}> <ArrowBackIosIcon/> </div>
            <div><img src={images[index].img} alt="img"/></div>
            <div className="arrow-holder" onClick={()=>nextImg()}> <ArrowForwardIosIcon/> </div>
            <div className="text-holder">
                <div className="title title-box">
                    <h2>
                        {images[index].title}
                    </h2>
                </div>
                <div className="subtitle title-box">
                    <h2>
                        {images[index].subtitle}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Carousel;