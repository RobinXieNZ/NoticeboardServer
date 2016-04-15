'use strict';

var abstractPager = require('./abstractPager');

class editPager extends abstractPager {
  constructor(id, post, errors) {
    super();
    this.id = id;
    this.post = post;
    this.errors = errors;
  }
  _render() {
    return `
           
<form action="/update" method="post">
<input type="hidden" name="id" value="${ this.id }"/>
  <div class="form-group">
    <label for="title">Title</label>

    <input type="text" value="${ this.post.title }" class="form-control" name="title" id="title" placeholder="title">
  </div>
  <div class="form-group">
    <label for="body">Body</label>
    <textarea class="form-control"  name="body" id="body" placeholder="body">${ this.post.body }
    </textarea>
  </div>

  <button type="submit" class="btn btn-default">Update</button>
</form>
        `;
  }
}
module.exports = editPager;

//# sourceMappingURL=editPager-compiled.js.map