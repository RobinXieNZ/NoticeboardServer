'use strict';

var abstractPager = require('./abstractPager');

class addPager extends abstractPager {

  constructor(error) {
    super();
    this.error = error || {};
  }

  _render() {
    return `
<form action="/add" method="post">
  <div class="form-group">
    <label for="title">Title</label>

    <input type="text" class="form-control" name="title" id="title" placeholder="title">
  </div>
  <div class="form-group">
    <label for="body">Body</label>
    <textarea class="form-control"  name="body" id="body" placeholder="body">
    </textarea>
  </div>

  <button type="submit" class="btn btn-default">Submit</button>
</form>
       `;
  }
}
module.exports = addPager;

//# sourceMappingURL=addPager-compiled.js.map