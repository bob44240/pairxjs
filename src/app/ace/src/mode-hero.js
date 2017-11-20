define("ace/mode/tex_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var lang = require("../lib/lang");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var TexHighlightRules = function(textClass) {

        if (!textClass)
            textClass = "text";

        this.$rules = {
            "start": [{
                token: "comment",
                regex: "%.*$"
            }, {
                token: textClass, // non-command
                regex: "\\\\[$&%#\\{\\}]"
            }, {
                token: "keyword", // command
                regex: "\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b",
                next: "nospell"
            }, {
                token: "keyword", // command
                regex: "\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])"
            }, {
                token: "paren.keyword.operator",
                regex: "[[({]"
            }, {
                token: "paren.keyword.operator",
                regex: "[\\])}]"
            }, {
                token: textClass,
                regex: "\\s+"
            }],
            "nospell": [{
                token: "comment",
                regex: "%.*$",
                next: "start"
            }, {
                token: "nospell." + textClass, // non-command
                regex: "\\\\[$&%#\\{\\}]"
            }, {
                token: "keyword", // command
                regex: "\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b"
            }, {
                token: "keyword", // command
                regex: "\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])",
                next: "start"
            }, {
                token: "paren.keyword.operator",
                regex: "[[({]"
            }, {
                token: "paren.keyword.operator",
                regex: "[\\])]"
            }, {
                token: "paren.keyword.operator",
                regex: "}",
                next: "start"
            }, {
                token: "nospell." + textClass,
                regex: "\\s+"
            }, {
                token: "nospell." + textClass,
                regex: "\\w+"
            }]
        };
    };

    oop.inherits(TexHighlightRules, TextHighlightRules);

    exports.TexHighlightRules = TexHighlightRules;
});

define("ace/mode/hero_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules", "ace/mode/tex_highlight_rules"], function(require, exports, module) {

    var oop = require("../lib/oop");
    var lang = require("../lib/lang");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    var TexHighlightRules = require("./tex_highlight_rules").TexHighlightRules;

    // This is a constructor which takes a namespace object returns a constructor for highlighting rules
    // which will know to highlight those variable names.
    var ruleGen = function(namespace) {

        var RHighlightRules = function() {

            var keywords = lang.arrayToMap(
                ("function|if|in|break|next|repeat|else|for|return|switch|while|try|tryCatch|stop|warning|require|library|attach|detach|source|setMethod|setGeneric|setGroupGeneric|setClass")
                .split("|")
            );

            var buildinConstants = lang.arrayToMap(
                ("NULL|NA|TRUE|FALSE|T|F|Inf|NaN|NA_integer_|NA_real_|NA_character_|" +
                    "NA_complex_").split("|")
            );

            this.$rules = {
                "start": [{
                        token: "comment.sectionhead",
                        regex: "#+(?!').*(?:----|====|####)\\s*$"
                    },
                    {
                        token: "comment",
                        regex: "#+'",
                        next: "rd-start"
                    },
                    {
                        token: "comment",
                        regex: "#.*$"
                    },
                    {
                        token: "string", // multi line string start
                        regex: '["]',
                        next: "qqstring"
                    },
                    {
                        token: "string", // multi line string start
                        regex: "[']",
                        next: "qstring"
                    },
                    {
                        token: "constant.numeric", // hex
                        regex: "0[xX][0-9a-fA-F]+[Li]?\\b"
                    },
                    {
                        token: "constant.numeric", // explicit integer
                        regex: "\\d+L\\b"
                    },
                    {
                        token: "constant.numeric", // number
                        regex: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b"
                    },
                    {
                        token: "constant.numeric", // number with leading decimal
                        regex: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b"
                    },
                    {
                        token: "constant.language.boolean",
                        regex: "(?:TRUE|FALSE|T|F)\\b"
                    },
                    {
                        token: "identifier",
                        regex: "`.*?`"
                    },
                    {
                        onMatch: function(value) {
                         return "identifier";
                        },
                        regex: "[a-zA-Z.][a-zA-Z0-9._]*[ ]*[=]"
                    },
                    {
                        onMatch: function(value) {

                            if (keywords[value])
                                return "keyword";
                            else if (namespace.heemod.filter(x => x.name === value).length > 0) {
                                return "heemod";
                            } else if (namespace.groupAttr.filter(x => x.name === value).length > 0)
                                return "group-attr";
                            else if (namespace.var.filter(x => x.name === value).length > 0)
                                return "var-input";
                            else if (namespace.hvalue.filter(x => x.name === value).length > 0)
                                return "hvalue";
                            else if (namespace.evalue.filter(x => x.name === value).length > 0)
                                return "evalue";
                            else if (namespace.table.filter(x => x.name === value).length > 0)
                                return "table";
                            else if (buildinConstants[value])
                                return "constant.language";
                            else if (value == '...' || value.match(/^\.\.\d+$/))
                                return "variable.language";
                            else
                                return "identifier";
                        },
                        regex: "[a-zA-Z.][a-zA-Z0-9._]*\\b"
                    },
                    {
                        token: "keyword.operator",
                        regex: "%%|>=|<=|==|!=|\\->|<\\-|\\|\\||&&|=|\\+|\\-|\\*|/|\\^|>|<|!|&|\\||~|\\$|:"
                    },
                    {
                        token: "keyword.operator", // infix operators
                        regex: "%.*?%"
                    },
                    {
                        token: "paren.keyword.operator",
                        regex: "[[({]"
                    },
                    {
                        token: "paren.keyword.operator",
                        regex: "[\\])}]"
                    },
                    {
                        token: "text",
                        regex: "\\s+"
                    }
                ],
                "qqstring": [{
                        token: "string",
                        regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
                        next: "start"
                    },
                    {
                        token: "string",
                        regex: '.+'
                    }
                ],
                "qstring": [{
                        token: "string",
                        regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
                        next: "start"
                    },
                    {
                        token: "string",
                        regex: '.+'
                    }
                ]
            };

            var rdRules = new TexHighlightRules("comment").getRules();
            for (var i = 0; i < rdRules["start"].length; i++) {
                rdRules["start"][i].token += ".virtual-comment";
            }

            this.addRules(rdRules, "rd-");
            this.$rules["rd-start"].unshift({
                token: "text",
                regex: "^",
                next: "start"
            });
            this.$rules["rd-start"].unshift({
                token: "keyword",
                regex: "@(?!@)[^ ]*"
            });
            this.$rules["rd-start"].unshift({
                token: "comment",
                regex: "@@"
            });
            this.$rules["rd-start"].push({
                token: "comment",
                regex: "[^%\\\\[({\\])}]+"
            });
        };
        oop.inherits(RHighlightRules, TextHighlightRules);
        return RHighlightRules;
    };


    exports.ruleGen = ruleGen
        //exports.RHighlightRules = RHighlightRules;
});

define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(require, exports, module) {
    "use strict";

    var Range = require("../range").Range;

    var MatchingBraceOutdent = function() {};

    (function() {

        this.checkOutdent = function(line, input) {
            if (!/^\s+$/.test(line))
                return false;

            return /^\s*\}/.test(input);
        };

        this.autoOutdent = function(doc, row) {
            var line = doc.getLine(row);
            var match = line.match(/^(\s*\})/);

            if (!match) return 0;

            var column = match[1].length;
            var openBracePos = doc.findMatchingBracket({ row: row, column: column });

            if (!openBracePos || openBracePos.row == row) return 0;

            var indent = this.$getIndent(doc.getLine(openBracePos.row));
            doc.replace(new Range(row, 0, row, column - 1), indent);
        };

        this.$getIndent = function(line) {
            return line.match(/^\s*/)[0];
        };

    }).call(MatchingBraceOutdent.prototype);

    exports.MatchingBraceOutdent = MatchingBraceOutdent;
});

define("ace/mode/hero", ["require", "exports", "module", "ace/range", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/hero_highlight_rules", "ace/mode/matching_brace_outdent"], function(require, exports, module) {
    "use strict";

    var Range = require("../range").Range;
    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    var ruleGen = require("./hero_highlight_rules").ruleGen;
    var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;

    // This is a contructor for the R-Language mode.  A 'namespace' object is passed in
    // which includes the variable names to highlight.
    var Mode = function(namespace) {

        // This passes the namespace object down to a constructor which creates another
        // constructor which will then be used by ACE to create a set of highlighting
        // rules which will know to look for the variable names.  This is kind of a
        // pain, but believe it or not it was the cleanest way I found to pass down
        // these variable names without the use of global variables.
        this.HighlightRules = new ruleGen(namespace);
        this.$outdent = new MatchingBraceOutdent();
        this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);

    (function() {
        this.lineCommentStart = "#";
        this.$id = "ace/mode/hero";
    }).call(Mode.prototype);
    exports.Mode = Mode;
});