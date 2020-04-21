import * as React from "react";
import { render } from "react-dom";
import {
  TextInput,
  Textarea,
  Card,
  DisplayText,
  Paragraph,
  SectionHeading,
  FieldGroup,
  RadioButtonField,
  Typography,
} from "@contentful/forma-36-react-components";
import { init, EditorExtensionSDK } from "contentful-ui-extensions-sdk";
import "@contentful/forma-36-react-components/dist/styles.css";
import "@contentful/forma-36-fcss";
// import "./index.css";

interface AppProps {
  sdk: EditorExtensionSDK;
}

interface AppState {
  title: string;
  description?: string;
  // position: number;
  // marqueeImage: string;
  // footerCopy?: string;
  // nearMeMode: string;
  nearMode: boolean;
  findingNearbyTitle?: string;
  findingNearbyDescription?: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      title: props.sdk.entry.fields.title.getValue(),
      description: props.sdk.entry.fields.description.getValue(),
      // position: props.sdk.entry.fields.position.getValue(),
      // marqueeImage: props.sdk.entry.fields.marqueeImage.getValue(),
      // footerCopy: props.sdk.entry.fields.footerCopy.getValue(),
      // nearMeMode: props.sdk.entry.fields.nearMeMode.getValue(),
      nearMode: props.sdk.entry.fields.nearMode.getValue(),
      findingNearbyTitle: props.sdk.entry.fields.findingNearbyTitle.getValue(),
      findingNearbyDescription: props.sdk.entry.fields.findingNearbyDescription.getValue(),
    };
  }

  onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.sdk.entry.fields.title.setValue(event.target.value);
  };

  onDescriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.sdk.entry.fields.description.setValue(event.target.value);
  };

  onFindingNearbyTitleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.props.sdk.entry.fields.findingNearbyTitle.setValue(event.target.value);
  };

  onFindingNearbyDescriptionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.props.sdk.entry.fields.findingNearbyDescription.setValue(
      event.target.value
    );
  };

  onNearModeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nearMode = event.target.value === "yes";
    this.setState({ nearMode });
    this.props.sdk.entry.fields.nearMode.setValue(nearMode);
  };

  render() {
    return (
      <div className="f36-margin--l">
        <Typography>
          <DisplayText>Entry extension demo</DisplayText>
          <Paragraph>This demo uses a single UI Extension to render all UI for an entry.</Paragraph>
          <SectionHeading>Title</SectionHeading>
          <TextInput onChange={this.onTitleChangeHandler} value={this.state.title} />
          <SectionHeading>Body</SectionHeading>
          <Textarea onChange={this.onDescriptionChangeHandler} value={this.state.description} />
          {/* <SectionHeading>Is Near Me Mode?</SectionHeading>
          <FieldGroup row={false}>
            <RadioButtonField
              labelText="Yes"
              checked={this.state.nearMode}
              value="yes"
              onChange={this.onNearModeChangeHandler}
              name="nearModeOption"
              id="yesCheckbox"
            />
            <RadioButtonField
              labelText="No"
              checked={!this.state.nearMode}
              value="no"
              onChange={this.onNearModeChangeHandler}
              name="nearModeOption"
              id="noCheckbox"
            />
          </FieldGroup>*/}
        </Typography>
        {this.state.nearMode && (
          <Typography>
            <SectionHeading>Finding Nearby Title</SectionHeading>
            <TextInput
              onChange={this.onFindingNearbyTitleChangeHandler}
              value={this.state.findingNearbyTitle}
            />
            <SectionHeading>Finding Nearby Description</SectionHeading>
            <TextInput
              onChange={this.onFindingNearbyDescriptionChangeHandler}
              value={this.state.findingNearbyDescription}
            />
          </Typography>
        )}
      </div>
    );
  }
}

init((sdk) => {
  render(
    <App sdk={sdk as EditorExtensionSDK} />,
    document.getElementById("root")
  );
});

/**
 * By default, iframe of the extension is fully reloaded on every save of a source file.
 * If you want to use HMR (hot module reload) instead of full reload, uncomment the following lines
 */
// if (module.hot) {
//   module.hot.accept();
// }
