exports.config = {
  namespace: 'stencil-components',
  outputTargets: [{ type: 'dist' }, { type: 'www' }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
