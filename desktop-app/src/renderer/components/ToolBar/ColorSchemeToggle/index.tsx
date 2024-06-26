import { Icon } from '@iconify/react';
import {
  SetNativeThemeArgs,
  SetNativeThemeResult,
} from 'main/native-functions';
import { useState } from 'react';
import Button from 'renderer/components/Button';

const ColorSchemeToggle = () => {
  const [isDarkColorScheme, setIsDarkColorScheme] = useState<boolean>(false);

  return (
    <Button
      onClick={() => {
        window.electron.ipcRenderer.invoke<
          SetNativeThemeArgs,
          SetNativeThemeResult
        >('set-native-theme', {
          theme: isDarkColorScheme ? 'light' : 'dark',
        });
        setIsDarkColorScheme(!isDarkColorScheme);
      }}
      subtle
      title="Device theme color toggle"
    >
      <span className="relative">
        <Icon icon={isDarkColorScheme ? 'carbon:moon' : 'carbon:sun'} />
      </span>
    </Button>
  );
};

export default ColorSchemeToggle;
