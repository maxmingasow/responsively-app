import Devtools from './Devtools';
import UITheme from './UITheme';
import Zoom from './Zoom';
import AllowInSecureSSL from './AllowInSecureSSL';
import ClearHistory from './ClearHistory';
import PreviewLayout from './PreviewLayout';
import Bookmark from './Bookmark';
import { Settings } from './Settings';

const Divider = () => (
  <div className="h-[1px] bg-slate-200 dark:bg-slate-700" />
);

interface Props {
  closeFlyout: () => void;
}

const MenuFlyout = ({ closeFlyout }: Props) => {
  return (
    <div className="absolute top-[26px] right-[4px] z-50 flex w-80 flex-col gap-2 rounded bg-[#EFF1F5] p-2 pb-0 text-sm shadow-lg ring-1 ring-slate-500 !ring-opacity-40 focus:outline-none dark:bg-slate-900 dark:ring-white dark:!ring-opacity-40">
      <Zoom />
      <PreviewLayout />
      <UITheme />
      <Devtools />
      <AllowInSecureSSL />
      <ClearHistory />
      <Divider />
      <div>
        <Bookmark />
        <Settings closeFlyout={closeFlyout} />
      </div>
    </div>
  );
};

export default MenuFlyout;
