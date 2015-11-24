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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3NraWxscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBRWEsVUFBVSxFQVVWLG9CQUFvQixFQU1wQixtQkFBbUI7Ozs7Ozs7O21DQWxCeEIsUUFBUTs7O0FBRUgsZ0JBQVUsWUFBVixVQUFVOzhCQUFWLFVBQVU7O2FBRXJCLFNBQVMsR0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUMsT0FBTyxFQUFHLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDO2FBQzVFLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO2FBQzdFLFVBQVUsR0FBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7YUFDeEcsS0FBSyxHQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQzthQUM1RCxRQUFRLEdBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQzs7Ozs7QUFJM0IsMEJBQW9CO2lCQUFwQixvQkFBb0I7Z0NBQXBCLG9CQUFvQjs7O3FCQUFwQixvQkFBb0I7O2lCQUN6QixnQkFBQyxJQUFJLEVBQUU7QUFDWCxxQ0FBdUIsSUFBSSxlQUFZO1dBQ3hDOzs7ZUFIVSxvQkFBb0I7Ozs7O0FBTXBCLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7OztxQkFBbkIsbUJBQW1COztpQkFDeEIsZ0JBQUMsSUFBSSxFQUFFO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7V0FDOUM7OztlQUhVLG1CQUFtQiIsImZpbGUiOiJ2aWV3cy9za2lsbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBjbGFzcyBTa2lsbHNWaWV3IHtcblxuICBsYW5ndWFnZXMgICAgID0gWydlczYnLCAnamF2YXNjcmlwdCcsJ2h0bWw1JywgICdjc3MzJywgJ2FwcHMtc2NyaXB0JywgJ3BocCddO1xuICBwcmVwcm9jZXNzb3JzID0gWydqYWRlJywgJ2NvZmZlZXNjcmlwdCcsICdzYXNzJywgJ2xlc3MnLCAnc3R5bHVzJywgJ3Bvc3Rjc3MnXTtcbiAgZnJhbWV3b3JrcyAgICA9IFsnYXVyZWxpYScsICdhbmd1bGFyMi4wJywgJ2FuZ3VsYXInLCAncmVhY3QnLCAncG9seW1lcicsICdpb25pYycsICdiYWNrYm9uZScsICdsYXJhdmVsJ107XG4gIHRvb2xzICAgICAgICAgPSBbJ2pzcG0nLCAnZ3VscCcsICdncnVudCcsICdzbHVzaCcsICd5ZW9tYW4nXTtcbiAgZXh0ZXJuYWwgICAgICA9IFsnYWknLCAncHMnLCAnc2tldGNoJ107XG59XG5cblxuZXhwb3J0IGNsYXNzIFNvdXJjZVZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KG5hbWUpIHtcbiAgICByZXR1cm4gYGltYWdlcy9sb2dvcy8ke25hbWV9LWxvZ28ucG5nYDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGl0bGVWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyhuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
