import * as React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { Text, View } from 'modules/shared/ui/components/Theme';
import { Colors } from 'modules/shared/presentation/colors/Colors';

import { useAsyncButton } from './hooks/useAsyncButton';
import { AsyncButtonStyle } from './AsyncButton.style';

interface AsyncButtonProps extends WithOptionalChildProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => Promise<void>;
  disabled?: boolean;
}

export const AsyncButton = ({
  children,
  label,
  style,
  disabled,
  onPress,
}: AsyncButtonProps) => {
  const { processing, handlePress } = useAsyncButton({ onPress });

  const renderContent = () => {
    if (children) {
      return children;
    }

    const renderInnerContent = () => {
      if (processing) {
        return <ActivityIndicator color={Colors.WHITE} />;
      }

      return <Text style={AsyncButtonStyle.label}>{label}</Text>;
    };

    return (
      <View
        backgroundColor="blue"
        style={AsyncButtonStyle.buttonView}
        paddingVertical="none"
        padding="medium"
        borderRadius="common">
        {renderInnerContent()}
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style} disabled={disabled}>
      {renderContent()}
    </TouchableOpacity>
  );
};
