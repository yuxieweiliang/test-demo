"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _01______ts_1 = require("../src/01_\u57FA\u7840\u7C7B\u578B.ts");
describe('./src/基础类型.ts', function () {
    it('test boolean to false', function () {
        expect(_01______ts_1.isDone).to.equal(false);
    });
    it('test variable to number', function () {
        expect(typeof _01______ts_1.decLiteral).to.equal('number');
        expect(typeof _01______ts_1.hexLiteral).to.equal('number');
        expect(typeof _01______ts_1.binaryLiteral).to.equal('number');
        expect(typeof _01______ts_1.octalLiteral).to.equal('number');
    });
});
//# sourceMappingURL=01_基础类型.spec.js.map