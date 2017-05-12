function Itinerary({ name, date, airport }) {
  let _name = name;
  const _date = date;
  const _airport = airport;
  
  const properties = {};

  Object.defineProperty(properties, 'name', {
    configurable: false,
    enumerable: true,
    get: function() {
      return _name;
    },
    set: function(str) {
      if(str.length > 3) {
        _name = str;
      } else {
        console.error(new Error('Foo error'));
      }
    }
  });

  const methods = {
    print() {
      return _name + ' ' + _date;
    }
  };

  return Object.freeze(Object.assign(properties, methods));
}