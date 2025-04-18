import LineChart from "./LineChart.js";
import ImageCarousel from "./ImageCarousel.js";

function HomePageContent() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const values = [65, 59, 80, 120, 31, 55, 40];
  const images = require
    .context("../assets/img", false, /\.webp$/)
    .keys()
    .map((file) => require(`../assets/img/${file.replace("./", "")}`));

  return (
    <>
      
      <div className="content">

        <div className="row">
          <ImageCarousel images={images} interval={10000}/>
        </div>
        <br></br>
        <div className="row">
          <LineChart
            labels={labels}
            values={values}
            graphHeight="60% !important"
            graphWidth="100% !important"
            dynamicClassName="first-chart-style"
          />
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div style={{ width: "48%" }}>
            <LineChart
              labels={labels}
              values={values}
              graphHeight="100% !important"
              graphWidth="100% !important"
              dynamicClassName="second-chart-style"
            />
          </div>
          <div style={{ width: "48%" }}>
            <LineChart
              labels={labels}
              values={values}
              graphHeight="100% !important"
              graphWidth="100% !important"
              dynamicClassName="thirs-chart-style"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageContent;
