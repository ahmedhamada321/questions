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

  if (!surveyJson) return <div>Loading...</div>;

  const survey = new Model(surveyJson);
  survey.onComplete.add((s) => console.log("Survey Results:", s.data));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "80%", maxWidth: "800px", overflowY: "auto" }}>
        <Survey model={survey} />
      </div>
    </div>
  );
};

export default SurveyComponent;
