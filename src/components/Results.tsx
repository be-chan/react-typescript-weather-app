type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  }
}

const Results = (props: ResultsPropsType) => {
  return(
    <div>
      <h1>
        {props.results.cityName && <div>{props.results.cityName}</div>}
      </h1>
        {props.results.country && <div>{props.results.country}</div>}
        {props.results.temperature && <div>{props.results.temperature}</div>}
        <img src={props.results.icon} alt="icon"/>
        <span>{props.results.conditionText}</span>
    </div>

  );
};

export default Results;