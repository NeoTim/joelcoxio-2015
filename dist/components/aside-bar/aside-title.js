System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, inject, AsideTitle;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      AsideTitle = (function () {
        function AsideTitle(element) {
          _classCallCheck(this, _AsideTitle);

          this.element = element;
        }

        var _AsideTitle = AsideTitle;
        AsideTitle = inject(Element)(AsideTitle) || AsideTitle;
        return AsideTitle;
      })();

      _export('AsideTitle', AsideTitle);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNpZGUtYmFyL2FzaWRlLXRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3QkFLYSxVQUFVOzs7Ozs7bUNBTGYsUUFBUTtpQ0FBRSxNQUFNOzs7QUFLWCxnQkFBVTtBQUVWLGlCQUZBLFVBQVUsQ0FFVCxPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7MEJBSlUsVUFBVTtBQUFWLGtCQUFVLEdBRHRCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxVQUFVLEtBQVYsVUFBVTtlQUFWLFVBQVUiLCJmaWxlIjoiY29tcG9uZW50cy9hc2lkZS1iYXIvYXNpZGUtdGl0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5cbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBc2lkZVRpdGxle1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
