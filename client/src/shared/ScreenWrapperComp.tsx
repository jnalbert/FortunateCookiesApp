import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { backgroundColor } from "./colors";

const ScreenWrapper = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
  flex-direction: column;
  align-items: center;
  margin: 0px 24px;
`;

const ScreenBackgroundColor = styled.View`
  background-color: ${backgroundColor};
  flex: 1;
`;

interface ScreenWrapperCompProps {
  children: React.ReactNode;
  scrollView?: boolean;
}

const ScreenWrapperComp: FC<ScreenWrapperCompProps> = ({
  children,
  scrollView,
}) => {
  return (
    <ScreenBackgroundColor>
      {scrollView ? (
        <ScrollView>
          <ScreenWrapper>{children}</ScreenWrapper>
        </ScrollView>
      ) : (
        <ScreenWrapper>{children}</ScreenWrapper>
      )}
    </ScreenBackgroundColor>
  );
};

export default ScreenWrapperComp;
