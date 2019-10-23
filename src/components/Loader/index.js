import React, { Component } from "react";

import { connect } from "react-redux";

import { BackHandler } from "react-native";

// import Modal from "react-native-modal";

import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";

import LoadingActions from "../../store/ducks/loading";
import { bindActionCreators } from "redux";

class Loader extends Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    const { loading, hideLoading } = this.props;
    if (loading.visible) {
      hideLoading();
    } else {
      this.goBack();
    } // works best when the goBack is async
    return true;
  };

  render() {
    let { visible } = this.props.loading;
    let { hideLoading } = this.props;
    return (
      <Modal
        transparent={true}
        animationType={"none"}
        visible={visible}
        onRequestClose={() => visible && hideLoading()}
        // onRequestClose={() => {
        //   console.log("requestClose");
        //   const { hideLoading } = this.props;
        //   hideLoading();
        // }}
      >
        <TouchableOpacity
          onPress={() => hideLoading()}
          style={styles.modalBackground}
        >
          <View style={styles.activityIndicatorWrapper}>
            <Text style={{ marginVertical: 10 }}>Aguarde...</Text>
            <ActivityIndicator
              style={{ marginBottom: 10 }}
              animating={visible}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000060",
    // activeOpacity: 1.0
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

const mapStateToProps = state => ({
  loading: state.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoadingActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader);
