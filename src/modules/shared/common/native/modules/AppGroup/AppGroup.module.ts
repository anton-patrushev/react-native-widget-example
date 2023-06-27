import { IS_IOS } from 'modules/shared/common/constants/platform.consts';

import { AppGroupIOSNativeModule } from './ios/AppGroup.native.module';

interface IAppGroupModule {
  getAppGroup: () => string;
}

export const AppGroupModule: IAppGroupModule = {
  getAppGroup: () => {
    if (IS_IOS) {
      return AppGroupIOSNativeModule.path;
    }

    return '';
  },
};
