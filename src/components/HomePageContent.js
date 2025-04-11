import LineChart from './LineChart.js';

function HomePageContent() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const values = [65, 59, 80, 120, 31, 55, 40];
  
  return (
     <div className="content">
        <div className="row">
          <LineChart labels={labels} values={values}/>
        </div>
      </div>
  );
}

export default HomePageContent;
