System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, SkillsView, SourceValueConverter, TitleValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      SkillsView = function SkillsView() {
        _classCallCheck(this, SkillsView);

        this.languages = ['es6', 'javascript', 'html5', 'css3', 'apps-script', 'php'];
        this.preprocessors = ['jade', 'coffeescript', 'sass', 'less', 'stylus', 'postcss'];
        this.frameworks = ['aurelia', 'angular2.0', 'angular', 'react', 'polymer', 'ionic', 'backbone', 'laravel'];
        this.tools = ['jspm', 'gulp', 'grunt', 'slush', 'yeoman'];
        this.data = ['redis', 'neo4j', 'mongo', 'sql'];
        this.external = ['ai', 'ps', 'sketch'];
      };

      _export('SkillsView', SkillsView);

      SourceValueConverter = (function () {
        function SourceValueConverter() {
          _classCallCheck(this, SourceValueConverter);
        }

        _createClass(SourceValueConverter, [{
          key: 'toView',
          value: function toView(name) {
            return 'images/logos/' + name + '-logo.png';
          }
        }]);

        return SourceValueConverter;
      })();

      _export('SourceValueConverter', SourceValueConverter);

      TitleValueConverter = (function () {
        function TitleValueConverter() {
          _classCallCheck(this, TitleValueConverter);
        }

        _createClass(TitleValueConverter, [{
          key: 'toView',
          value: function toView(name) {
            return name[0].toUpperCase() + name.slice(1);
          }
        }]);

        return TitleValueConverter;
      })();

      _export('TitleValueConverter', TitleValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3NraWxscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBRWEsVUFBVSxFQVdWLG9CQUFvQixFQU1wQixtQkFBbUI7Ozs7Ozs7O21DQW5CeEIsUUFBUTs7O0FBRUgsZ0JBQVUsWUFBVixVQUFVOzhCQUFWLFVBQVU7O2FBRXJCLFNBQVMsR0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUMsT0FBTyxFQUFHLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDO2FBQzVFLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO2FBQzdFLFVBQVUsR0FBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7YUFDeEcsS0FBSyxHQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQzthQUM1RCxJQUFJLEdBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7YUFDbEQsUUFBUSxHQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7Ozs7O0FBSTNCLDBCQUFvQjtpQkFBcEIsb0JBQW9CO2dDQUFwQixvQkFBb0I7OztxQkFBcEIsb0JBQW9COztpQkFDekIsZ0JBQUMsSUFBSSxFQUFFO0FBQ1gscUNBQXVCLElBQUksZUFBWTtXQUN4Qzs7O2VBSFUsb0JBQW9COzs7OztBQU1wQix5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3hCLGdCQUFDLElBQUksRUFBRTtBQUNYLG1CQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1dBQzlDOzs7ZUFIVSxtQkFBbUIiLCJmaWxlIjoidmlld3Mvc2tpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgU2tpbGxzVmlldyB7XG5cbiAgbGFuZ3VhZ2VzICAgICA9IFsnZXM2JywgJ2phdmFzY3JpcHQnLCdodG1sNScsICAnY3NzMycsICdhcHBzLXNjcmlwdCcsICdwaHAnXTtcbiAgcHJlcHJvY2Vzc29ycyA9IFsnamFkZScsICdjb2ZmZWVzY3JpcHQnLCAnc2FzcycsICdsZXNzJywgJ3N0eWx1cycsICdwb3N0Y3NzJ107XG4gIGZyYW1ld29ya3MgICAgPSBbJ2F1cmVsaWEnLCAnYW5ndWxhcjIuMCcsICdhbmd1bGFyJywgJ3JlYWN0JywgJ3BvbHltZXInLCAnaW9uaWMnLCAnYmFja2JvbmUnLCAnbGFyYXZlbCddO1xuICB0b29scyAgICAgICAgID0gWydqc3BtJywgJ2d1bHAnLCAnZ3J1bnQnLCAnc2x1c2gnLCAneWVvbWFuJ107XG4gIGRhdGEgICAgICAgICAgPSBbJ3JlZGlzJywgJ25lbzRqJywgJ21vbmdvJywgJ3NxbCddO1xuICBleHRlcm5hbCAgICAgID0gWydhaScsICdwcycsICdza2V0Y2gnXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgU291cmNlVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcobmFtZSkge1xuICAgIHJldHVybiBgaW1hZ2VzL2xvZ29zLyR7bmFtZX0tbG9nby5wbmdgO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaXRsZVZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
