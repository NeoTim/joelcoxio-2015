System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {

    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-animator-css').plugin('aurelia-interface-platforms', function (config) {
      config.setClassList(config.setClassList(document.documentElement));
    }).feature('components');

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O0FBRWpDLFdBQU8sQ0FBQyxHQUFHLENBQ1IscUJBQXFCLEVBQUUsQ0FDdkIsa0JBQWtCLEVBQUUsQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQzlCLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxVQUFBLE1BQU0sRUFBSTtBQUMvQyxZQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7S0FDcEUsQ0FBQyxDQUNELE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFekIsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO0tBQUEsQ0FBQyxDQUFDO0dBQ3hDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuXG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmRldmVsb3BtZW50TG9nZ2luZygpXG4gICAgLnBsdWdpbignYXVyZWxpYS1hbmltYXRvci1jc3MnKVxuICAgIC5wbHVnaW4oJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3JtcycsIGNvbmZpZyA9PiB7XG4gICAgICBjb25maWcuc2V0Q2xhc3NMaXN0KGNvbmZpZy5zZXRDbGFzc0xpc3QoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSk7XG4gICAgfSlcbiAgICAuZmVhdHVyZSgnY29tcG9uZW50cycpO1xuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKGEgPT4gYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
