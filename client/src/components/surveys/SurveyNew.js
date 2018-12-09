import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import { reduxForm } from "redux-form";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showFormreview: false };

  renderContent() {
    if (this.state.showFormreview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormreview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormreview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: "surveyForm" })(SurveyNew);
