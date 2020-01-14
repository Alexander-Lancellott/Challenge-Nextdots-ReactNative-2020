import * as React from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  Platform,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {Field, reduxForm, InjectedFormProps} from 'redux-form';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import {Background} from '../../../assets/images';
import {CocktailsRenderer} from '../../../components';
import {getCocktails} from '../../../actions';

type StoreProps = ReturnType<typeof mapStateToProps>;

type ConnectProps = StoreProps & {
  getCocktails: Function;
  navigation: any;
};

type FormProps = InjectedFormProps<Values, ConnectProps>;

type Props = ConnectProps & FormProps;

interface Values {
  cocktail: string;
}

interface State {
  show: boolean;
}

class CocktailsList extends React.Component<Props, State> {
  state = {
    show: false,
  };

  changeTextHandler = (val: any) => {
    const {getCocktails, fetchIsLoading} = this.props;
    let text = () => {
      if (val.length >= 3 && val.trim()) {
        this.setState({
          show: true,
        });
        getCocktails(val, fetchIsLoading, val);
      } else {
        this.setState({
          show: false,
        });
      }
      clearTimeout(timer);
    };
    const timer = setTimeout(() => text(), 450);
  };

  cancelState = () => {
    const {reset} = this.props;
    this.setState({
      show: false,
    });
    reset();
  };

  renderInput = (props: any) => {
    return (
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={props.input.value}
        onChangeText={props.input.onChange}
      />
    );
  };
  render() {
    const {
      inputText,
      fetchError,
      data,
      fetchIsLoading,
      navigation,
    } = this.props;
    const {show} = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground source={Background} style={styles.background}>
          <View style={styles.headerContainer}>
            <StatusBar hidden={true} />
            <View style={styles.goBackButtonContainer}>
              <Icon.Button
                name="left"
                size={40}
                iconStyle={styles.goBackButton}
                backgroundColor={styles.goBackButton.backgroundColor}
                onPress={() => navigation.goBack()}
              />
            </View>
            <Field
              name="cocktail"
              component={this.renderInput}
              onChange={this.changeTextHandler}
            />
            <Icon name="search1" size={26} style={styles.searchIcon} />
            <View style={styles.closeButtonContainer}>
              <Icon.Button
                name="closecircle"
                size={33}
                iconStyle={styles.closeButton}
                onPress={this.cancelState}
                backgroundColor={styles.closeButton.backgroundColor}
              />
            </View>
          </View>
          {fetchIsLoading ? (
            <ActivityIndicator
              size={Platform.OS === 'ios' ? 'large' : 60}
              color="#ffffff"
              style={styles.load}
            />
          ) : (
            <CocktailsRenderer
              show={show}
              inputText={inputText}
              data={data}
              fetchError={fetchError}
            />
          )}
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    inputText: state.cocktailsReducer.inputText,
    cocktailInput: state.form.cocktailInput,
    fetchError: state.cocktailsReducer.fetchError,
    data: state.cocktailsReducer.data,
    fetchIsLoading: state.cocktailsReducer.fetchIsLoading,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCocktails: (data: string, fetchIsLoading: boolean, val: string) =>
      dispatch(getCocktails(data, fetchIsLoading, val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm<Values, ConnectProps>({
    form: 'CocktailInput',
  })(CocktailsList),
);
