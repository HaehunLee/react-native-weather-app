import React, { Fragment } from "react";
import { StatusBar, SafeAreaView } from 'react-native';

import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

const ScrollView = Styled.ScrollView`
`;

const Body = Styled.View`
`;

const SectionContainer = Styled.View`
  margin-top : 32px;
  padding-horizontal : 24px;
`;

const SectionDescription = Styled.Text`
  margin-top : 8px;
  font-size : 18px;
  font-weight : 400;
`;


interface Props {}

const App = ({}:Props) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionDescription>Step One</SectionDescription>
              <SectionDescription>
                Edit
              </SectionDescription>
            </SectionContainer>
          </Body>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

export default App;