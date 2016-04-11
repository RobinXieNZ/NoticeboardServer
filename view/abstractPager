'use strict';

class abstractPager{
    constructor(isLogined){
        this.isLogined = isLogined;
    }

    _render(){
        throw new Error('must implements this method');
    }

    render(){

        return `
        <!DOCTYPE html>

        <html>
        <head>
        <link rel='stylesheet' href='//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css'/>
        </head>
            <body>
            ${this._render()}
            </body>
        </html>
    `
    }
}
module.exports = abstractPager;