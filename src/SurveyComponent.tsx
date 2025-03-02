import { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

const SurveyComponent = () => {
  const [surveyJson, setSurveyJson] = useState<any>(null);

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setSurveyJson(data))
      .catch((error) => console.error("Error loading survey:", error));
  }, []);

  if (!surveyJson)
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>Loading...</div>
    );

  const survey = new Model(surveyJson);
  survey.onComplete.add((s) => console.log("Survey Results:", s.data));

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      <Survey model={survey} />
    </div>
  );
};

export default SurveyComponent;
