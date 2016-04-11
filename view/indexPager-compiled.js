'use strict';

var abstractPager = require('./abstractPager');

class indexPager extends abstractPager {
    constructor(postList) {
        super();
        this.list = postList;
    }
    _render() {

        let listDOMString = this.list.map((post, index) => `
        <li class="list-group-item">
            <h3>${ post.title }</h3>
            <p>${ post.body }</p>
        </li>`).join('');

        return `
            <ul class="list-group">
                ${ listDOMString }
            </ul>
        `;
    }
}
module.exports = indexPager;

//# sourceMappingURL=indexPager-compiled.js.map