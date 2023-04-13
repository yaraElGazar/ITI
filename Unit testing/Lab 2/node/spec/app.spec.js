const request = require("request");

// describe("test end point", () => {
//   var server;
//   var data = {};

//   //~ test more than one endpoint "bonus"  ===> async
//   beforeAll((done) => {
//     server = require("../app");
//     request.get("http://localhost:3000/", (error, res, body) => {
//       data.status = res.statusCode;
//       data.body = body;
//       done();
//     });
//   });
//   afterAll(() => {
//     server.close();
//   });
//   it("test status code", () => {
//     expect(data.status).toEqual(200);
//   });
//   it("test body", () => {
//     expect(data.body).toEqual("welcome!");
//   });
// });

describe("test end point post", () => {
  var server;
  var user = { name: "John" };
  info = {};

  //~ test more than one endpoint "bonus"  ===> async
  beforeAll((done) => {
    server = require("../app");
    request.post(
      {
        url: "http://localhost:3000/",
        body: user,
        json: true,
      },
      (error, res, body) => {
        info.status = res.statusCode;
        info.body = body;
        done();
      }
    );
  });
  afterAll(() => {
    server.close();
  });
  it("test status code", () => {
    expect(info.status).toEqual(200);
  });
  it("test body", () => {
    expect(info.body).toEqual('Data Received: "John"');
  });
});

// var request = require("request");
// var async = require("async");

// describe("express application", function () {
//   var baseUrl = "http://localhost:3000";
//   var statusCode = [0, 0];
//   var b = ["", ""];

//   beforeEach(function (done) {
//     async.parallel(
//       [
//         function (callback) {
//           request.get(baseUrl, function (err, res, reqBody) {
//             statusCode[0] = res.statusCode;
//             body[0] = reqBody;
//             callback();
//           });
//         },
//         function (callback) {
//           request.post(baseUrl, function (err, res, reqBody) {
//             statusCode[1] = res.statusCode;
//             body[1] = reqBody;
//             callback();
//           });
//         },
//       ],
//       done
//     );
//   });

//   it("should return 200", function () {
//     expect(statusCode[0]).toBe(200);
//   });

//   it("should return hello world", function () {
//     expect(b[0]).toEqual("Hello World");
//   });

//   it("should return error 404", function () {
//     expect(statusCode[1]).toBe(404);
//   });
// });
