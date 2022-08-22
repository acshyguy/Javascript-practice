const expect = chai.expect;

// mocha.setup("bdd");

// it("I can test", function (){
//     // expect(1+1).to.equal(3);
//     expect(NaN).to.be.NaN;
    
// });

// mocha.run();


mocha.setup("bdd");

describe("Sum function test", () =>{
    before(() => console.log("Before all"))
    after(() => console.log("After all"))
    beforeEach(() => console.log("Before each"))
    afterEach(() => console.log("After each"))

    it("sum(2, 3) should be 5", () => {
        expect(sum(2, 3)).to.equal(5);
    });

    it("sum(4,6) should be 10", () => {
        expect(sum(4,6)).to.equal(10);
    });

    it("2+2 should be 4", () => {
        expect(2+2).to.equal(4);
    });
});

describe("Sum function test", () =>{
    it("2+2 should be 4", () => {
        expect(2+2).to.equal(4);
    });

    it("2+2 should be 4", () => {
        expect(2+2).to.equal(4);
    });
});

mocha.run();

