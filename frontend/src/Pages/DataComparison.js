import React, { Component, useEffect } from "react";
import Graph from "../img/DataComparisonGrpah.png";
import Graph2 from "../img/DataComparisonGrpah2.png";
import Graph3 from "../img/DataComparisonGrpah3.png";
import Graph4 from "../img/DataComparisonGrpah4.png"
import Slider from "react-slick";

import '../css/DataComparison.scss';
import { BsDisplay } from "react-icons/bs";


function DataComparison() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        
        <div>
            <div className="DCTitle">Correlation between Covid-19 confirmeds and Netflix subscribers</div>
            <div className="DCGap"></div>
            <div className="DCGraph">
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <Slider {...settings}>
                <div key={1} style={{textAlign:"center"}}>
                <img className="img1" src= {Graph} alt=""/> 
                <div className="DCDescription">
                    <span>  
                        &nbsp;In the graph above, the bars represent the number of confirmed cases, and the line represents the number of Netflix's new subscribers. In the beginning of the pandemic, the number of subscribers was greatly increased, but over time, the number of subscribers decreased significantly.  
                        And then, at some point, you can see that it rises sharply. It is presumed to be because the number of confirmed cases surged as the lockdown in certain areas was eased, resulting in a stronger lockdown. Since then, there has been a significant increase or decrease in the number of confirmed cases, but the number of new subscribers is decreasing. This means that people have enough subscriptions, no more new subscription
                    </span>
                </div>
            </div>
            <div key={2} style={{textAlign:"center"}}>
                <img className="img2" src= {Graph2} alt=""/> 
                <div className="DCDescription">
                <span> 
                    &nbsp;The graph above shows the number of Netflix subscribers by quarter from 2018 to the present. Even before the virus hit the world in January 2020, Netflix was on a somewhat upward trend. After the outbreak of Covid-19, we were able to confirm that the number of subscribers increased a little more steeply. 
                    However, as can be seen from the previous graph, the number of subscribers was gradually decreasing. Although the number of subscribers temporarily increased for various reasons such as lockdown to prevent infection, Netflix's subscriber number is showing a downward trend.
                </span>
                </div>
            </div>
            <div key={3} style={{textAlign:"center"}}>
                <img className="img4" src= {Graph4} alt=""/> 
                <div className="DCDescription">
                <span>  
                    &nbsp;The figure on the left shows the number of COVID-19 confirmed patients and the number of cumulative new subscribers to Netflix after COVID-19 as a scatterplot, and the figure on the right shows a jointplot using a regression curve. Looking at the scatterplot, it seems that there is a positive correlation indicating that the number of subscribers increases as the number of corona confirmed cases increases. When I calculated the value of the covariance that supports this, it has a positive value of 9722749838333.334. To know more precisely, the standardized correlation coefficient of covariance is 0.8421, indicating that there is a strong quantitative linear relationship. 
                    Also, based on this, the following hypotheses were established to test through p-value :  "there will be no correlation between the two variables".  The p-value is 0.0354, which is close enough to 0 in the range between -1 and 1, indicating that the correlation is significant. Therefore, the previous hypothesis is rejected, and it is possible to know that there is a certain correlation between the increase in the number of  COVID-19 patients and the increase in Netflix subscribers.
                </span>
                </div>
            </div>
            <div key={4} style={{textAlign:"center"}}>
                <img className="img3" src= {Graph3} alt=""/> 
                <div className="DCDescription">
                <span>  
                    &nbsp;This is the cumulative Netflix subscriber data by region since 2018. It can be seen that the slope of the graph has increased in all regions from the outbreak of the pandemic. Interestingly, the largest increase is seen in Europe, which is thought to be proportional to the number of confirmed cases increasing the fastest. 
                    As a result, the lockdown was imposed more quickly, which seems to have had some effect on Netflix subscriptions.
                </span>
                </div>
            </div>
                </Slider>
            </div>
            <div className="DCDescription">
            </div>
        </div>
        );
    }


export default DataComparison;
