const userModel = {
  name: 'userModel',
  model: require('../models/user.model').default,
};

const gauntletResultModel = {
  name: 'gauntletResultModel',
  model: require('../models/gauntlet-result.model').default,
};

export default () => {
  return [
    userModel,
    gauntletResultModel,
  ];
}
