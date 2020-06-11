"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _01_____1 = require("../src/01_\u57FA\u7840\u7C7B\u578B");
describe('./src/基础类型.ts', function () {
    it('test boolean to false', function () {
        expect(_01_____1.isDone).to.equal(false);
    });
    it('test variable to number', function () {
        expect(typeof _01_____1.decLiteral).to.equal('number');
        expect(typeof _01_____1.hexLiteral).to.equal('number');
        expect(typeof _01_____1.binaryLiteral).to.equal('number');
        expect(typeof _01_____1.octalLiteral).to.equal('number');
    });
});
//# sourceMappingURL=01_基础类型.spec.js.map