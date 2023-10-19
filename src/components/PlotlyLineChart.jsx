import { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { filterSentiments } from "../utils";
import CardWithNavTab from "./CardWithNavTab";
export const PlotlyLineChart = ({ sentiments }) => {
  const data = filterSentiments(sentiments);
  const channels = [...new Set(data.map((item) => item.channel))];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [boxDimensions, setBoxDimensions] = useState({
    height: null,
    width: null,
  });

  useEffect(() => {
    const element = document.getElementById("bigCardWidget");
    const smallElement = document.getElementById("cardWidget");

    const finalResult = element ? element : smallElement ? smallElement : false;
    if (finalResult) {
      setBoxDimensions({
        height: finalResult.offsetHeight,
        width: finalResult.offsetWidth,
      });

      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setBoxDimensions({
            height: entry.target.offsetHeight,
            width: entry.target.offsetWidth,
          });
        }
      });

      resizeObserver.observe(finalResult);

      return () => resizeObserver.unobserve(finalResult);
    }
  }, []);

  const getWidth = () => {
    let box = document.getElementById("cardWidget");
    let smallBox = document.getElementById("bigCardWidget");
    return smallBox
      ? smallBox.offsetWidth * 0.95
      : box
      ? box.offsetWidth * 0.95
      : 400;
  };

  const getHeight = () => {
    let box = document.getElementById("cardWidget");
    return boxDimensions.height ? boxDimensions.height * 0.9 : 320;
  };

  const handleResize = () =>
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

  useEffect(() => {
    handleResize();
    getWidth();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <CardWithNavTab>
      {channels.map((channel) => {
        const channelData = data.filter((item) => item.channel === channel);
        const xValues = channelData.map((item) => item.date);
        const positiveSentiments = channelData.map(
          (item) => item.positiveSentiment
        );
        const negativeSentiments = channelData.map(
          (item) => item.negativeSentiment
        );
        const neutralSentiments = channelData.map(
          (item) => item.neutralSentiment
        );

        const plotData = [
          {
            x: xValues,
            y: positiveSentiments,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "green" },
            name: "Positive Sentiment",
          },
          {
            x: xValues,
            y: negativeSentiments,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
            name: "Negative Sentiment",
          },
          {
            x: xValues,
            y: neutralSentiments,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
            name: "Neutral Sentiment",
          },
        ];

        return (
          <CardWithNavTab.Tab key={channel} title={channel}>
            <div className="">
              <div style={{}}>
                <Plot
                  legend={{ bgColor: "red" }}
                  data={plotData}
                  config={{
                    modeBarButtonsToRemove: [
                      "toImage",
                      "hoverClosestGeo",
                      "pan2d",
                      "select2d",
                      "lasso2d",

                      "hoverClosestPie",
                      "toggleHover",
                      "toggleSpikelines",
                      "autoScale2d",
                      "resetScale2d",
                      "zoom2d",
                      "toogleSpikeLines2d",
                      "hoverClosestCartesian",
                      "hoverCompareCartesian",
                      "resetViews",
                    ],
                    modeBarButtonsToAdd: ["zoomIn2d", "zoomOut2d"],
                    displaylogo: false,
                  }}
                  layout={{
                    height: getHeight()/1.5,
                    width: screenWidth < 425 ? screenWidth * 0.9 : getWidth()*2,
                    paper_bgcolor: "#fcfcff",
                    plot_bgcolor: "#fcfcff",
                    showlegend: true,
                    margin: {
                      r: 25,
                      l: 50,
                      t: 10,
                      b: 10,
                    },
                    legend: {
                      x: 0.5,
                      y: -0.6,
                      xanchor: "center",
                      orientation: "h",
                    },
                  }}
                />
              </div>
            </div>
          </CardWithNavTab.Tab>
        );
      })}
    </CardWithNavTab>
  );
};
