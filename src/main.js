
export function configure(aurelia) {

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-interface-platforms', config => {
      config.setClassList(config.setClassList(document.documentElement));
    })
    .feature('components');

  aurelia.start().then(a => a.setRoot());
}
