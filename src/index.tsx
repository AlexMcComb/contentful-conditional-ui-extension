import * as React from "react";
import { render } from "react-dom";
import {
  TextInput,
  TextField,
  Textarea,
  Card,
  DisplayText,
  Paragraph,
  Asset,
  SectionHeading,
  FieldGroup,
  RadioButtonField,
  Typography,
} from "@contentful/forma-36-react-components";
import { init, EditorExtensionSDK } from "contentful-ui-extensions-sdk";
import "@contentful/forma-36-react-components/dist/styles.css";
import "@contentful/forma-36-fcss";
import "./index.css";

interface AppProps {
  sdk: EditorExtensionSDK;
}

interface AppState {
  title: string;
  description?: string;
  position: number;
  // marqueeImage: string;
  footerCopy?: string;
  nearMeMode: boolean;
  findingNearbyTitle?: string;
  findingNearbyDescription?: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      title: props.sdk.entry.fields.title.getValue(),
      description: props.sdk.entry.fields.description.getValue(),
      position: props.sdk.entry.fields.position.getValue(),
      // marqueeImage: props.sdk.entry.fields.marqueeImage.getValue(),
      footerCopy: props.sdk.entry.fields.footerCopy.getValue(),
      nearMeMode: props.sdk.entry.fields.nearMeMode.getValue(),
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

  onPositionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.sdk.entry.fields.position.setValue(event.target.value);
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

  onNearMeModeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nearMeMode = event.target.value === "yes";
    this.setState({ nearMeMode });
    this.props.sdk.entry.fields.nearMeMode.setValue(nearMeMode);
  };

  render() {
    const floorTitleIncludesNear = this.state.title.toLowerCase().includes("near");

    return (
      <div className="f36-margin--l">
        <Typography>
          <SectionHeading>Title</SectionHeading>
          <TextInput onChange={this.onTitleChangeHandler} value={this.state.title} />
          <SectionHeading>Body</SectionHeading>
          <TextInput onChange={this.onDescriptionChangeHandler} value={this.state.description} />
          <SectionHeading>Position</SectionHeading>
          <TextField onChange={this.onPositionChangeHandler} value={this.state.position} />
          <SectionHeading>Marquee Image</SectionHeading>
          {/* <Asset src={this.state.marqueeImage} type='image' /> */}
          <SectionHeading>Footer Copy</SectionHeading>
          <TextInput onChange={this.onTitleChangeHandler} value={this.state.footerCopy} />
          <SectionHeading>Is Near Me Mode?</SectionHeading>
          <FieldGroup row={false}>
            <RadioButtonField
              labelText="Yes"
              checked={this.state.nearMeMode || floorTitleIncludesNear}
              value="yes"
              onChange={this.onNearMeModeChangeHandler}
              name="nearMeModeOption"
              id="yesCheckbox"
            />
            <RadioButtonField
              labelText="No"
              checked={!this.state.nearMeMode}
              value="no"
              onChange={this.onNearMeModeChangeHandler}
              name="nearMeModeOption"
              id="noCheckbox"
            />
          </FieldGroup>
        </Typography>
        {this.state.nearMeMode && (
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
