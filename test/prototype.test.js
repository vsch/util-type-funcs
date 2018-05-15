"use strict";

const { forAllPrototypes, callPrototypeChainDown, callPrototypeChainUp } = require('util-type-funcs');

class A {
    constructor() {
        this.calls = [];
        this.count = 0;
    }

    methodA() {
        this.calls.push(`A.methodA()[${++this.count}]`);
    }
}

class B extends A {
    constructor() {
        super();
    }

    methodB() {
        this.calls.push(`B.methodB()[${++this.count}]`);
    }
}

class C extends B {
    constructor() {
        super();
    }

    methodA() {
        this.calls.push(`C.methodA()[${++this.count}]`);
    }

    methodB() {
        this.calls.push(`C.methodB()[${++this.count}]`);
    }
}

test(`forAllPrototypes A has A and Object`, () => {
    const prototypes = [];
    forAllPrototypes.call(A, (proto) => {
        prototypes.push({ constructor: proto.constructor, });
    });

    expect(prototypes).toEqual([
        { constructor: A, },
        { constructor: Object, },
    ]);
});

test(`forAllPrototypes B has B, A and Object`, () => {
    const prototypes = [];
    forAllPrototypes.call(B, (proto) => {
        prototypes.push({ constructor: proto.constructor });
    });

    expect(prototypes).toEqual([
        { constructor: B, },
        { constructor: A, },
        { constructor: Object, },
    ]);
});

test(`forAllPrototypes C has C, B, A and Object`, () => {
    const prototypes = [];
    forAllPrototypes.call(C, (proto) => {
        prototypes.push({ constructor: proto.constructor });
    });

    expect(prototypes).toEqual([
        { constructor: C, },
        { constructor: B, },
        { constructor: A, },
        { constructor: Object, },
    ]);
});

test(`forAllPrototypes C has C, B, A and Object`, () => {
    const prototypes = [];
    forAllPrototypes.call(C, (proto) => {
        prototypes.push({ constructor: proto.constructor });
    });

    expect(prototypes).toEqual([
        { constructor: C, },
        { constructor: B, },
        { constructor: A, },
        { constructor: Object, },
    ]);
});

test(`callPrototypeChainUp A.methodA`, () => {
    const prototypes = [];
    const a = new A();

    callPrototypeChainUp.call(a, 'methodA');

    expect(a).toEqual({"calls": ["A.methodA()[1]"], "count": 1});
});

test(`callPrototypeChainDown A.methodA`, () => {
    const prototypes = [];
    const a = new A();

    callPrototypeChainDown.call(a, 'methodA');

    expect(a).toEqual({"calls": ["A.methodA()[1]"], "count": 1});
});

test(`callPrototypeChainUp B.methodA`, () => {
    const prototypes = [];
    const a = new B();

    callPrototypeChainUp.call(a, 'methodA');

    expect(a).toEqual({"calls": ["A.methodA()[1]"], "count": 1});
});

test(`callPrototypeChainDown B.methodA`, () => {
    const prototypes = [];
    const a = new B();

    callPrototypeChainDown.call(a, 'methodA');

    expect(a).toEqual({"calls": ["A.methodA()[1]"], "count": 1});
});

test(`callPrototypeChainUp B.methodB`, () => {
    const prototypes = [];
    const a = new B();

    callPrototypeChainUp.call(a, 'methodB');

    expect(a).toEqual({"calls": ["B.methodB()[1]"], "count": 1});
});

test(`callPrototypeChainDown B.methodB`, () => {
    const prototypes = [];
    const a = new B();

    callPrototypeChainDown.call(a, 'methodB');

    expect(a).toEqual({"calls": ["B.methodB()[1]"], "count": 1});
});

test(`callPrototypeChainUp C.methodA`, () => {
    const prototypes = [];
    const a = new C();

    callPrototypeChainUp.call(a, 'methodA');

    expect(a).toEqual({"calls": ["C.methodA()[1]", "A.methodA()[2]"], "count": 2});
});

test(`callPrototypeChainDown C.methodA`, () => {
    const prototypes = [];
    const a = new C();

    callPrototypeChainDown.call(a, 'methodA');

    expect(a).toEqual({"calls": ["A.methodA()[1]", "C.methodA()[2]"], "count": 2});
});

test(`callPrototypeChainUp C.methodB`, () => {
    const prototypes = [];
    const a = new C();

    callPrototypeChainUp.call(a, 'methodB');

    expect(a).toEqual( {"calls": ["C.methodB()[1]", "B.methodB()[2]"], "count": 2});
});

test(`callPrototypeChainDown C.methodB`, () => {
    const prototypes = [];
    const a = new C();

    callPrototypeChainDown.call(a, 'methodB');

    expect(a).toEqual({"calls": ["B.methodB()[1]", "C.methodB()[2]"], "count": 2});
});

