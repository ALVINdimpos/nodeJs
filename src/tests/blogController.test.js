const assert = require("assert");
const sinon = require("sinon");
const { getAllBlogs } = require("../controllers/blogController");
const Blog = require("../models/Blog");

describe("getAllBlogs function", () => {
  it("should return all blogs", async () => {
    const blogs = [{ title: "Blog 1" }, { title: "Blog 2" }];
    sinon.stub(Blog, "find").resolves(blogs);

    const req = {};
    const res = {
      send: function (data) {
        assert.deepEqual(data, blogs);
      },
    };

    await getAllBlogs(req, res);
    Blog.find.restore();
  });
});
