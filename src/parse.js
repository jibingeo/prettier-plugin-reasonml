const { sync } = require("execa");

const format = (text, options) => {
    const refmtProcess = process.env.REFMT_BIN || "refmt";
    return sync(refmtProcess, ["-format"], {
        input: text,
        preferLocal: true,
        localDir: __dirname,
        stripEof: false
    }).stdout;
};

const parse = (text, parsers, opts) => ({
    ast_type: "refmt",
    body: format(text, opts),
    end: text.length,
    source: text,
    start: 0
});

module.exports = parse;
