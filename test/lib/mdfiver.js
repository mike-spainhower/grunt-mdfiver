var grunt = require('grunt'),
    expect = require('expect.js'),
    mdfiver = require('../../tasks/lib/mdfiver');

describe('mdfiver tests', function() {
    var plainHtml = "<html><head>HEAD CONTENT</head><body></body><html>";
    var scriptHtml = "<html><head><script type='text/javascript' src='foo/script.js'></script></head><body></body><html>";
    var md = new mdfiver();

    it("mdfiver has empty head", function() {
        expect(md.head).to.be("");
    });

    it("Head content after parseHead is HEAD CONTENT", function() {
       md.parseHead(plainHtml);
       expect(md.head.innerHTML).to.be("HEAD CONTENT");
    });

    it("Get's script tag from head", function(){
        md.parseHead(scriptHtml);
        expect(md.getScriptTags()[0].getAttribute("src")).to.be("foo/script.js");
    });
});
