const Todos = require("./index");
const assert = require("assert").strict;
const fs = require('fs');




        
describe("integration test", function () {
    it("should to be add and complete TODOS", function () {
        let todos = new Todos();
        const expectedError = new Error("You have 00 TODOS list ");
    // todos.add("get up from bed");
    // todos.add("make up bed");
    assert.strictEqual(todos.list().length, 0);

    todos.add("run code");
    assert.strictEqual(todos.list().length, 1);
    assert.deepStrictEqual(todos.list(), [
      { title: "run code", completed: false },
    ]);

    todos.add("test everything");
    assert.strictEqual(todos.list().length, 2);
    assert.deepStrictEqual(todos.list(), [
      { title: "run code", completed: false },
      {title : "test everything", completed : false },
    ]);

    todos.complete("run code");

    assert.deepStrictEqual(todos.list(), [
      { title: "run code", completed: true },
      { title: "test everything", completed: false },
    ]);
  });
});



describe("complete()", function () {
    it("should fail if there are no TODOS LIST", function () {
        let todos = new Todos();
        const expectedError = new Error("You have no TODOS , add one");
        
        assert.throws(()=>{
            todos.complete("doesn't exist");
        }, expectedError);
    });
});


describe("saveToFile()", function(){
    it("should save a single TODO", async function(){
        let todos = new Todos();
        todos.add("save a CSV");

        await todos.savetoFile();
        assert.strictEqual(fs.existsSync('todos.csv'),true);
        let expectedFileContents = "Title,Completed \nsave a CSV,false\n";
        let content  = fs.readFileSync("todos.csv").toString();
        assert.strictEqual(content, expectedFileContents);


        // return todos.savetoFile().then(()=>{
        //     assert.strictEqual(fs.existsSync('todos.csv'),true);
        //     let expectedFileContents = "Title,Completed \nsave a CSV,false\n";
        //     let content  = fs.readFileSync("todos.csv").toString();
        //     assert.strictEqual(content, expectedFileContents);

        // });

        // todos.savetoFile((err)=>{
        //     done(err);
        // });
    });
    it("should have a single TODO that's completed", async function(){
        let todos = new Todos();
        todos.add("save a CSV");
        todos.complete("save a CSV");
        await todos.savetoFile();

        assert.strictEqual(fs.existsSync('todos.csv'), true);
        let expectedFileContents = "Title,Completed \nsave a CSV,true\n";
        let content = fs.readFileSync("todos.csv").toString();
        assert.strictEqual(content , expectedFileContents);
    });
});