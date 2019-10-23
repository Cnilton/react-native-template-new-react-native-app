import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  LayoutAnimation,
  TouchableOpacity,
  NativeModules
} from "react-native";
import style from "./styles";
import makeVisibleWhite from "../../assets/images/make_visible_white.png";
import makeInvisibleWhite from "../../assets/images/make_invisible_white.png";
import makeVisibleBlack from "../../assets/images/make_visible_black.png";
import makeInvisibleBlack from "../../assets/images/make_invisible_black.png";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureText: true,
      isFocused: props.value != "" ? true : false
    };
  }

  handleFocus = () => {
    LayoutAnimation.spring();
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    if (this.props.value == "" || this.props.value == null) {
      LayoutAnimation.spring();
      this.setState({ isFocused: false });
    }
  };

  setFocus = () => {
    this.textInput.focus();
  };

  componentDidMount() {
    if (this.props.value != "") {
      this.setState({ isFocused: true });
    }
    if (this.props.value == "") {
      this.setState({ isFocused: false });
    }
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  _onChange = value => {
    this.props._onChangeText(value);
  };

  _toggleVisibility = () => {
    ("toggle");
    if (this.state.secureText) {
      this.setState({ secureText: false });
    } else {
      this.setState({ secureText: true });
    }
  };

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    const {
      containerStyles,
      darkTheme = false,
      label = "label",
      labelStyles = {},
      ...props
    } = this.props;

    var imgSource = darkTheme
      ? this.state.secureText
        ? makeVisibleBlack
        : makeInvisibleBlack
      : this.state.secureText
      ? makeVisibleWhite
      : makeInvisibleWhite;

    var { isFocused } = this.state;

    if (this.props.value != "") {
      isFocused = true;
    }

    const style = {
      ...style,
      zIndex: 3,
      position: "absolute",
      left: !isFocused ? labelStyles.leftBlurred : labelStyles.leftFocused,
      top: !isFocused ? labelStyles.topBlurred : labelStyles.topFocused,
      fontSize: !isFocused
        ? labelStyles.fontSizeBlurred
        : labelStyles.fontSizeFocused,
      color: !isFocused ? labelStyles.colorBlurred : labelStyles.colorFocused
    };

    const input = {
      paddingVertical: 0,
      paddingHorizontal: 30,
      flex: 1,
      color: labelStyles.colorFocused,
      zIndex: 1
    };

    return (
      <View style={containerStyles}>
        <Text onPress={() => this.setFocus()} style={style}>
          {label}
        </Text>
        <View style={styles.containerInput}>
          <TextInput
            {...props}
            // ref={input => (this._input = input)}
            ref={input => (this.textInput = input)}
            onSubmitEditing={this.onSubmitEditing.bind(this)}
            secureTextEntry={
              this.props.isPassword ? this.state.secureText : false
            }
            style={input}
            value={props.value}
            onChangeText={value => {
              this._onChange(value);
            }}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {this.props.isPassword ? (
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={this._toggleVisibility.bind()}
            >
              <Image
                source={imgSource}
                resizeMode="contain"
                style={styles.img}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}

const styles = style;

export default FloatingLabelInput;
