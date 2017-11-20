export const FunctionList = [
  {
    "name": "-",
    "usage": "x - y",
    "pkg": "base",
    "desc": "These unary and binary operators perform arithmetic on numeric or     complex vectors (or objects which can be coerced to them)."
  },
  {
    "name": ":",
    "usage": "a:b",
    "pkg": "base",
    "desc": "Generate regular sequences."
  },
  {
    "name": "::",
    "usage": "pkg:::name",
    "pkg": "base",
    "desc": "Accessing exported and internal variables, i.e. R objects     (including lazy loaded data sets) in a namespace."
  },
  {
    "name": ":::",
    "usage": "pkg:::name",
    "pkg": "base",
    "desc": "Accessing exported and internal variables, i.e. R objects     (including lazy loaded data sets) in a namespace."
  },
  {
    "name": "!",
    "usage": "! x",
    "pkg": "base",
    "desc": "These operators act on raw, logical and number-like vectors."
  },
  {
    "name": "!=",
    "usage": "x != y",
    "pkg": "base",
    "desc": "Binary operators which allow the comparison of values in atomic     vectors."
  },
  {
    "name": "[",
    "usage": "x[[i]] <- value",
    "pkg": "base",
    "desc": "Operators acting on vectors, matrices, arrays and lists to extract     or replace parts."
  },
  {
    "name": "[[",
    "usage": "x[[i]] <- value",
    "pkg": "base",
    "desc": "Operators acting on vectors, matrices, arrays and lists to extract     or replace parts."
  },
  {
    "name": "@",
    "usage": "object@name <- value",
    "pkg": "base",
    "desc": "Extract or replace the contents of a slot in a object with a     formal (S4) class structure."
  },
  {
    "name": "*",
    "usage": "x * y",
    "pkg": "base",
    "desc": "These unary and binary operators perform arithmetic on numeric or     complex vectors (or objects which can be coerced to them)."
  },
  {
    "name": "/",
    "usage": "x %/% y",
    "pkg": "base",
    "desc": "These unary and binary operators perform arithmetic on numeric or     complex vectors (or objects which can be coerced to them)."
  },
  {
    "name": "&",
    "usage": "x && y",
    "pkg": "base",
    "desc": "These operators act on raw, logical and number-like vectors."
  },
  {
    "name": "&&",
    "usage": "x && y",
    "pkg": "base",
    "desc": "These operators act on raw, logical and number-like vectors."
  },
  {
    "name": "%*%",
    "usage": "x %*% y",
    "pkg": "base",
    "desc": "Multiplies two matrices, if they are conformable.  If one argument     is a vector, it will be promoted to either a row or column matrix     to make the two arguments conformable.  If both are vectors of the     same length, it will return the inner product (as a matrix)."
  },
  {
    "name": "%/%",
    "usage": "x %/% y",
    "pkg": "base",
    "desc": "These unary and binary operators perform arithmetic on numeric or     complex vectors (or objects which can be coerced to them)."
  },
  {
    "name": "%%",
    "usage": "x %% y",
    "pkg": "base",
    "desc": "These unary and binary operators perform arithmetic on numeric or     complex vectors (or objects which can be coerced to them)."
  },
  {
    "name": "%in%",
    "usage": "x %in% table",
    "pkg": "base",
    "desc": "‘match’ returns a vector of the positions of (first) matches of     its first argument in its second.     ‘%in%’ is a more intuitive interface as a binary operator, which     returns a logical vector indicating if there is a match or not for     its left operand."
  },
  {
    "name": "%o%",
    "usage": "X %o% Y",
    "pkg": "base",
    "desc": "The outer product of the arrays ‘X’ and ‘Y’ is the array ‘A’ with     dimension ‘c(dim(X), dim(Y))’ where element ‘A[c(arrayindex.x,     arrayindex.y)] = FUN(X[arrayindex.x], Y[arrayindex.y], ...)’."
  },
  {
    "name": "%x%",
    "usage": "X %x% Y",
    "pkg": "base",
    "desc": "Computes the generalised kronecker product of two arrays, ‘X’ and     ‘Y’."
  },
  {
    "name": "^",
    "usage": "x ^ y",
    "pkg": "base",
    "desc": "These unary and binary operators perform arithmetic on numeric or     complex vectors (or objects which can be coerced to them)."
  },
  {
    "name": "+",
    "usage": "x + y",
    "pkg": "base",
    "desc": "These unary and binary operators perform arithmetic on numeric or     complex vectors (or objects which can be coerced to them)."
  },
  {
    "name": "<",
    "usage": "x <= y",
    "pkg": "base",
    "desc": "Binary operators which allow the comparison of values in atomic     vectors."
  },
  {
    "name": "<-",
    "usage": "x <<- value",
    "pkg": "base",
    "desc": "Assign a value to a name."
  },
  {
    "name": "<<-",
    "usage": "x <<- value",
    "pkg": "base",
    "desc": "Assign a value to a name."
  },
  {
    "name": "<=",
    "usage": "x <= y",
    "pkg": "base",
    "desc": "Binary operators which allow the comparison of values in atomic     vectors."
  },
  {
    "name": "=",
    "usage": "x = value",
    "pkg": "base",
    "desc": "Assign a value to a name."
  },
  {
    "name": "==",
    "usage": "x == y",
    "pkg": "base",
    "desc": "Binary operators which allow the comparison of values in atomic     vectors."
  },
  {
    "name": ">",
    "usage": "x >= y",
    "pkg": "base",
    "desc": "Binary operators which allow the comparison of values in atomic     vectors."
  },
  {
    "name": ">=",
    "usage": "x >= y",
    "pkg": "base",
    "desc": "Binary operators which allow the comparison of values in atomic     vectors."
  },
  {
    "name": "|",
    "usage": "x || y",
    "pkg": "base",
    "desc": "These operators act on raw, logical and number-like vectors."
  },
  {
    "name": "||",
    "usage": "x || y",
    "pkg": "base",
    "desc": "These operators act on raw, logical and number-like vectors."
  },
  {
    "name": "~",
    "usage": "y ~ model",
    "pkg": "base",
    "desc": "Tilde is used to separate the left- and right-hand sides in a     model formula."
  },
  {
    "name": "$",
    "usage": "x$name <- value",
    "pkg": "base",
    "desc": "Operators acting on vectors, matrices, arrays and lists to extract     or replace parts."
  },
  {
    "name": "abbreviate",
    "usage": "abbreviate(names.arg, minlength = 4, use.classes = TRUE,",
    "pkg": "base",
    "desc": "Abbreviate strings to at least ‘minlength’ characters, such that     they remain _unique_ (if they were), unless ‘strict = TRUE’."
  },
  {
    "name": "abs",
    "usage": "abs(x)",
    "pkg": "base",
    "desc": "‘abs(x)’ computes the absolute value of x, ‘sqrt(x)’ computes the     (principal) square root of x, sqrt{x}.     The naming follows the standard for computer languages such as C     or Fortran."
  },
  {
    "name": "acos",
    "usage": "acos(x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "acosh",
    "usage": "acosh(x)",
    "pkg": "base",
    "desc": "These functions give the obvious hyperbolic functions.  They     respectively compute the hyperbolic cosine, sine, tangent, and     their inverses, arc-cosine, arc-sine, arc-tangent (or ‘_area     cosine_’, etc)."
  },
  {
    "name": "addNA",
    "usage": "addNA(x, ifany = FALSE)",
    "pkg": "base",
    "desc": "The function ‘factor’ is used to encode a vector as a factor (the     terms ‘category’ and ‘enumerated type’ are also used for factors).     If argument ‘ordered’ is ‘TRUE’, the factor levels are assumed to     be ordered.  For compatibility with S there is also a function     ‘ordered’.     ‘is.factor’, ‘is.ordered’, ‘as.factor’ and ‘as.ordered’ are the     membership and coercion functions for these classes."
  },
  {
    "name": "addTaskCallback",
    "usage": "addTaskCallback(f, data = NULL, name = character())",
    "pkg": "base",
    "desc": "‘addTaskCallback’ registers an R function that is to be called     each time a top-level task is completed.     ‘removeTaskCallback’ un-registers a function that was registered     earlier via ‘addTaskCallback’.     These provide low-level access to the internal/native mechanism     for managing task-completion actions.  One can use     ‘taskCallbackManager’ at the S-language level to manage S     functions that are called at the completion of each task.  This is     easier and more direct."
  },
  {
    "name": "agrep",
    "usage": "agrepl(pattern, x, max.distance = 0.1, costs = NULL,",
    "pkg": "base",
    "desc": "Searches for approximate matches to ‘pattern’ (the first argument)     within each element of the string ‘x’ (the second argument) using     the generalized Levenshtein edit distance (the minimal possibly     weighted number of insertions, deletions and substitutions needed     to transform one string into another)."
  },
  {
    "name": "agrepl",
    "usage": "agrepl(pattern, x, max.distance = 0.1, costs = NULL,",
    "pkg": "base",
    "desc": "Searches for approximate matches to ‘pattern’ (the first argument)     within each element of the string ‘x’ (the second argument) using     the generalized Levenshtein edit distance (the minimal possibly     weighted number of insertions, deletions and substitutions needed     to transform one string into another)."
  },
  {
    "name": "alist",
    "usage": "alist(...)",
    "pkg": "base",
    "desc": "Functions to construct, coerce and check for both kinds of R     lists."
  },
  {
    "name": "all",
    "usage": "all(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "Given a set of logical vectors, are all of the values true?"
  },
  {
    "name": "all.equal",
    "usage": "attr.all.equal(target, current, ...,",
    "pkg": "base",
    "desc": "‘all.equal(x, y)’ is a utility to compare R objects ‘x’ and ‘y’     testing ‘near equality’.  If they are different, comparison is     still made to some extent, and a report of the differences is     returned.  Do not use ‘all.equal’ directly in ‘if’     expressions-either use ‘isTRUE(all.equal(....))’ or ‘identical’ if     appropriate."
  },
  {
    "name": "any",
    "usage": "any(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "Given a set of logical vectors, is at least one of the values     true?"
  },
  {
    "name": "anyDuplicated",
    "usage": "anyDuplicated(x, incomparables = FALSE,",
    "pkg": "base",
    "desc": "‘duplicated()’ determines which elements of a vector or data frame     are duplicates of elements with smaller subscripts, and returns a     logical vector indicating which elements (rows) are duplicates.     ‘anyDuplicated(.)’ is a “generalized” more efficient shortcut for     ‘any(duplicated(.))’."
  },
  {
    "name": "anyNA",
    "usage": "anyNA(x, recursive = FALSE)",
    "pkg": "base",
    "desc": "‘NA’ is a logical constant of length 1 which contains a missing     value indicator.  ‘NA’ can be coerced to any other vector type     except raw.  There are also constants ‘NA_integer_’, ‘NA_real_’,     ‘NA_complex_’ and ‘NA_character_’ of the other atomic vector types     which support missing values: all of these are reserved words in     the R language.     The generic function ‘is.na’ indicates which elements are missing.     The generic function ‘is.na<-’ sets elements to ‘NA’.     The generic function ‘anyNA’ implements ‘any(is.na(x))’ in a     possibly faster way (especially for atomic vectors)."
  },
  {
    "name": "aperm",
    "usage": "aperm(a, perm = NULL, resize = TRUE, keep.class = TRUE, ...)",
    "pkg": "base",
    "desc": "Transpose an array by permuting its dimensions and optionally     resizing it."
  },
  {
    "name": "append",
    "usage": "append(x, values, after = length(x))",
    "pkg": "base",
    "desc": "Add elements to a vector."
  },
  {
    "name": "apply",
    "usage": "apply(X, MARGIN, FUN, ...)",
    "pkg": "base",
    "desc": "Returns a vector or array or list of values obtained by applying a     function to margins of an array or matrix."
  },
  {
    "name": "Arg",
    "usage": "Arg(z)",
    "pkg": "base",
    "desc": "Basic functions which support complex arithmetic in R, in addition     to the arithmetic operators ‘+’, ‘-’, ‘*’, ‘/’, and ‘^’."
  },
  {
    "name": "args",
    "usage": "args(name)",
    "pkg": "base",
    "desc": "Displays the argument names and corresponding default values of a     function or primitive."
  },
  {
    "name": "array",
    "usage": "is.array(x)",
    "pkg": "base",
    "desc": "Creates or tests for arrays."
  },
  {
    "name": "arrayInd",
    "usage": "arrayInd(ind, .dim, .dimnames = NULL, useNames = FALSE)",
    "pkg": "base",
    "desc": "Give the ‘TRUE’ indices of a logical object, allowing for array     indices."
  },
  {
    "name": "as.array",
    "usage": "as.array(x, ...)",
    "pkg": "base",
    "desc": "Creates or tests for arrays."
  },
  {
    "name": "as.call",
    "usage": "as.call(x)",
    "pkg": "base",
    "desc": "Create or test for objects of mode ‘\"call\"’."
  },
  {
    "name": "as.character",
    "usage": "as.character(x, ...)",
    "pkg": "base",
    "desc": "Create or test for objects of type ‘\"character\"’."
  },
  {
    "name": "as.complex",
    "usage": "as.complex(x, ...)",
    "pkg": "base",
    "desc": "Basic functions which support complex arithmetic in R, in addition     to the arithmetic operators ‘+’, ‘-’, ‘*’, ‘/’, and ‘^’."
  },
  {
    "name": "as.data.frame",
    "usage": "as.data.frame(x, row.names = NULL, optional = FALSE, ...,",
    "pkg": "base",
    "desc": "Functions to check if an object is a data frame, or coerce it if     possible."
  },
  {
    "name": "as.Date",
    "usage": "as.Date(x, tz = \"UTC\", ...)",
    "pkg": "base",
    "desc": "Functions to convert between character representations and objects     of class ‘\"Date\"’ representing calendar dates."
  },
  {
    "name": "as.difftime",
    "usage": "as.difftime(tim, format = \"%X\", units = \"auto\")",
    "pkg": "base",
    "desc": "Time intervals creation, printing, and some arithmetic.  The     ‘print()’ method calls these “time differences”."
  },
  {
    "name": "as.double",
    "usage": "as.double(x, ...)",
    "pkg": "base",
    "desc": "Create, coerce to or test for a double-precision vector."
  },
  {
    "name": "as.environment",
    "usage": "as.environment(x)",
    "pkg": "base",
    "desc": "A generic function coercing an R object to an ‘environment’.  A     number or a character string is converted to the corresponding     environment on the search path."
  },
  {
    "name": "as.expression",
    "usage": "as.expression(x, ...)",
    "pkg": "base",
    "desc": "Creates or tests for objects of mode ‘\"expression\"’."
  },
  {
    "name": "as.factor",
    "usage": "as.factor(x)",
    "pkg": "base",
    "desc": "The function ‘factor’ is used to encode a vector as a factor (the     terms ‘category’ and ‘enumerated type’ are also used for factors).     If argument ‘ordered’ is ‘TRUE’, the factor levels are assumed to     be ordered.  For compatibility with S there is also a function     ‘ordered’.     ‘is.factor’, ‘is.ordered’, ‘as.factor’ and ‘as.ordered’ are the     membership and coercion functions for these classes."
  },
  {
    "name": "as.function",
    "usage": "as.function(x, envir = parent.frame(), ...)",
    "pkg": "base",
    "desc": "‘as.function’ is a generic function which is used to convert     objects to functions.     ‘as.function.default’ works on a list ‘x’, which should contain     the concatenation of a formal argument list and an expression or     an object of mode ‘\"call\"’ which will become the function body.     The function will be defined in a specified environment, by     default that of the caller."
  },
  {
    "name": "as.hexmode",
    "usage": "as.hexmode(x)",
    "pkg": "base",
    "desc": "Convert or print integers in hexadecimal format, with as many     digits as are needed to display the largest, using leading zeroes     as necessary."
  },
  {
    "name": "as.integer",
    "usage": "as.integer(x, ...)",
    "pkg": "base",
    "desc": "Creates or tests for objects of type ‘\"integer\"’."
  },
  {
    "name": "as.list",
    "usage": "as.list(x, all.names = FALSE, sorted = FALSE, ...)",
    "pkg": "base",
    "desc": "Functions to construct, coerce and check for both kinds of R     lists."
  },
  {
    "name": "as.logical",
    "usage": "as.logical(x, ...)",
    "pkg": "base",
    "desc": "Create or test for objects of type ‘\"logical\"’, and the basic     logical constants."
  },
  {
    "name": "as.matrix",
    "usage": "as.matrix(x, rownames.force = NA, ...)",
    "pkg": "base",
    "desc": "‘matrix’ creates a matrix from the given set of values.     ‘as.matrix’ attempts to turn its argument into a matrix.     ‘is.matrix’ tests if its argument is a (strict) matrix."
  },
  {
    "name": "as.name",
    "usage": "as.name(x)",
    "pkg": "base",
    "desc": "A ‘name’ (also known as a ‘symbol’) is a way to refer to R objects     by name (rather than the value of the object, if any, bound to     that name).     ‘as.name’ and ‘as.symbol’ are identical: they attempt to coerce     the argument to a name.     ‘is.symbol’ and the identical ‘is.name’ return ‘TRUE’ or ‘FALSE’     depending on whether the argument is a name or not."
  },
  {
    "name": "as.null",
    "usage": "as.null(x, ...)",
    "pkg": "base",
    "desc": "‘NULL’ represents the null object in R: it is a reserved word.     ‘NULL’ is often returned by expressions and functions whose value     is undefined."
  },
  {
    "name": "as.numeric",
    "usage": "as.numeric(x, ...)",
    "pkg": "base",
    "desc": "Creates or coerces objects of type ‘\"numeric\"’.  ‘is.numeric’ is a     more general test of an object being interpretable as numbers."
  },
  {
    "name": "as.octmode",
    "usage": "as.octmode(x)",
    "pkg": "base",
    "desc": "Convert or print integers in octal format, with as many digits as     are needed to display the largest, using leading zeroes as     necessary."
  },
  {
    "name": "as.ordered",
    "usage": "as.ordered(x)",
    "pkg": "base",
    "desc": "The function ‘factor’ is used to encode a vector as a factor (the     terms ‘category’ and ‘enumerated type’ are also used for factors).     If argument ‘ordered’ is ‘TRUE’, the factor levels are assumed to     be ordered.  For compatibility with S there is also a function     ‘ordered’.     ‘is.factor’, ‘is.ordered’, ‘as.factor’ and ‘as.ordered’ are the     membership and coercion functions for these classes."
  },
  {
    "name": "as.pairlist",
    "usage": "as.pairlist(x)",
    "pkg": "base",
    "desc": "Functions to construct, coerce and check for both kinds of R     lists."
  },
  {
    "name": "as.qr",
    "usage": "as.qr(x)",
    "pkg": "base",
    "desc": "‘qr’ computes the QR decomposition of a matrix."
  },
  {
    "name": "as.raw",
    "usage": "as.raw(x)",
    "pkg": "base",
    "desc": "Creates or tests for objects of type ‘\"raw\"’."
  },
  {
    "name": "as.single",
    "usage": "as.single(x, ...)",
    "pkg": "base",
    "desc": "Create, coerce to or test for a double-precision vector."
  },
  {
    "name": "as.symbol",
    "usage": "as.symbol(x)",
    "pkg": "base",
    "desc": "A ‘name’ (also known as a ‘symbol’) is a way to refer to R objects     by name (rather than the value of the object, if any, bound to     that name).     ‘as.name’ and ‘as.symbol’ are identical: they attempt to coerce     the argument to a name.     ‘is.symbol’ and the identical ‘is.name’ return ‘TRUE’ or ‘FALSE’     depending on whether the argument is a name or not."
  },
  {
    "name": "as.table",
    "usage": "as.table(x, ...)",
    "pkg": "base",
    "desc": "‘table’ uses the cross-classifying factors to build a contingency     table of the counts at each combination of factor levels."
  },
  {
    "name": "as.vector",
    "usage": "as.vector(x, mode = \"any\")",
    "pkg": "base",
    "desc": "‘vector’ produces a vector of the given length and mode.     ‘as.vector’, a generic, attempts to coerce its argument into a     vector of mode ‘mode’ (the default is to coerce to whichever     vector mode is most convenient): if the result is atomic all     attributes are removed.     ‘is.vector’ returns ‘TRUE’ if ‘x’ is a vector of the specified     mode having no attributes _other than names_.  It returns ‘FALSE’     otherwise."
  },
  {
    "name": "asin",
    "usage": "asin(x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "asinh",
    "usage": "asinh(x)",
    "pkg": "base",
    "desc": "These functions give the obvious hyperbolic functions.  They     respectively compute the hyperbolic cosine, sine, tangent, and     their inverses, arc-cosine, arc-sine, arc-tangent (or ‘_area     cosine_’, etc)."
  },
  {
    "name": "asS3",
    "usage": "asS3(object, flag = TRUE, complete = TRUE)",
    "pkg": "base",
    "desc": "Tests whether the object is an instance of an S4 class."
  },
  {
    "name": "asS4",
    "usage": "asS4(object, flag = TRUE, complete = TRUE)",
    "pkg": "base",
    "desc": "Tests whether the object is an instance of an S4 class."
  },
  {
    "name": "assign",
    "usage": "assign(x, value, pos = -1, envir = as.environment(pos),",
    "pkg": "base",
    "desc": "Assign a value to a name in an environment."
  },
  {
    "name": "atan",
    "usage": "atan2(y, x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "atan2",
    "usage": "atan2(y, x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "atanh",
    "usage": "atanh(x)",
    "pkg": "base",
    "desc": "These functions give the obvious hyperbolic functions.  They     respectively compute the hyperbolic cosine, sine, tangent, and     their inverses, arc-cosine, arc-sine, arc-tangent (or ‘_area     cosine_’, etc)."
  },
  {
    "name": "attach",
    "usage": "attach(what, pos = 2L, name = deparse(substitute(what)),",
    "pkg": "base",
    "desc": "The database is attached to the R search path.  This means that     the database is searched by R when evaluating a variable, so     objects in the database can be accessed by simply giving their     names."
  },
  {
    "name": "attachNamespace",
    "usage": "attachNamespace(ns, pos = 2L, depends = NULL)",
    "pkg": "base",
    "desc": "Functions to load and unload name spaces."
  },
  {
    "name": "attr",
    "usage": "attr(x, which) <- value",
    "pkg": "base",
    "desc": "Get or set specific attributes of an object."
  },
  {
    "name": "attr.all.equal",
    "usage": "attr.all.equal(target, current, ...,",
    "pkg": "base",
    "desc": "‘all.equal(x, y)’ is a utility to compare R objects ‘x’ and ‘y’     testing ‘near equality’.  If they are different, comparison is     still made to some extent, and a report of the differences is     returned.  Do not use ‘all.equal’ directly in ‘if’     expressions-either use ‘isTRUE(all.equal(....))’ or ‘identical’ if     appropriate."
  },
  {
    "name": "attributes",
    "usage": "mostattributes(obj) <- value",
    "pkg": "base",
    "desc": "These functions access an object's attributes.  The first form     below returns the object's attribute list.  The replacement forms     uses the list on the right-hand side of the assignment as the     object's attributes (if appropriate)."
  },
  {
    "name": "autoload",
    "usage": "autoloader(name, package, ...)",
    "pkg": "base",
    "desc": "‘autoload’ creates a promise-to-evaluate ‘autoloader’ and stores     it with name ‘name’ in ‘.AutoloadEnv’ environment.  When R     attempts to evaluate ‘name’, ‘autoloader’ is run, the package is     loaded and ‘name’ is re-evaluated in the new package's     environment.  The result is that R behaves as if ‘file’ was loaded     but it does not occupy memory.     ‘.Autoloaded’ contains the names of the packages for which     autoloading has been promised."
  },
  {
    "name": "autoloader",
    "usage": "autoloader(name, package, ...)",
    "pkg": "base",
    "desc": "‘autoload’ creates a promise-to-evaluate ‘autoloader’ and stores     it with name ‘name’ in ‘.AutoloadEnv’ environment.  When R     attempts to evaluate ‘name’, ‘autoloader’ is run, the package is     loaded and ‘name’ is re-evaluated in the new package's     environment.  The result is that R behaves as if ‘file’ was loaded     but it does not occupy memory.     ‘.Autoloaded’ contains the names of the packages for which     autoloading has been promised."
  },
  {
    "name": "backsolve",
    "usage": "backsolve(r, x, k = ncol(r), upper.tri = TRUE,",
    "pkg": "base",
    "desc": "Solves a triangular system of linear equations."
  },
  {
    "name": "baseenv",
    "usage": "baseenv()",
    "pkg": "base",
    "desc": "Get, set, test for and create environments."
  },
  {
    "name": "basename",
    "usage": "basename(path)",
    "pkg": "base",
    "desc": "‘basename’ removes all of the path up to and including the last     path separator (if any).     ‘dirname’ returns the part of the ‘path’ up to but excluding the     last path separator, or ‘\".\"’ if there is no path separator."
  },
  {
    "name": "besselI",
    "usage": "besselI(x, nu, expon.scaled = FALSE)",
    "pkg": "base",
    "desc": "Bessel Functions of integer and fractional order, of first and     second kind, J(nu) and Y(nu), and Modified Bessel functions (of     first and third kind), I(nu) and K(nu)."
  },
  {
    "name": "besselJ",
    "usage": "besselJ(x, nu)",
    "pkg": "base",
    "desc": "Bessel Functions of integer and fractional order, of first and     second kind, J(nu) and Y(nu), and Modified Bessel functions (of     first and third kind), I(nu) and K(nu)."
  },
  {
    "name": "besselK",
    "usage": "besselK(x, nu, expon.scaled = FALSE)",
    "pkg": "base",
    "desc": "Bessel Functions of integer and fractional order, of first and     second kind, J(nu) and Y(nu), and Modified Bessel functions (of     first and third kind), I(nu) and K(nu)."
  },
  {
    "name": "besselY",
    "usage": "besselY(x, nu)",
    "pkg": "base",
    "desc": "Bessel Functions of integer and fractional order, of first and     second kind, J(nu) and Y(nu), and Modified Bessel functions (of     first and third kind), I(nu) and K(nu)."
  },
  {
    "name": "beta",
    "usage": "lbeta(a, b)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "bindingIsActive",
    "usage": "bindingIsActive(sym, env)",
    "pkg": "base",
    "desc": "These functions represent an interface for adjustments to     environments and bindings within environments.  They allow for     locking environments as well as individual bindings, and for     linking a variable to a function."
  },
  {
    "name": "bindingIsLocked",
    "usage": "bindingIsLocked(sym, env)",
    "pkg": "base",
    "desc": "These functions represent an interface for adjustments to     environments and bindings within environments.  They allow for     locking environments as well as individual bindings, and for     linking a variable to a function."
  },
  {
    "name": "bindtextdomain",
    "usage": "bindtextdomain(domain, dirname = NULL)",
    "pkg": "base",
    "desc": "If Native Language Support was enabled in this build of R, attempt     to translate character vectors or set where the translations are     to be found."
  },
  {
    "name": "bitwAnd",
    "usage": "bitwAnd(a, b)",
    "pkg": "base",
    "desc": "Logical operations on integer vectors with elements viewed as sets     of bits."
  },
  {
    "name": "bitwNot",
    "usage": "bitwNot(a)",
    "pkg": "base",
    "desc": "Logical operations on integer vectors with elements viewed as sets     of bits."
  },
  {
    "name": "bitwOr",
    "usage": "bitwOr(a, b)",
    "pkg": "base",
    "desc": "Logical operations on integer vectors with elements viewed as sets     of bits."
  },
  {
    "name": "bitwShiftL",
    "usage": "bitwShiftL(a, n)",
    "pkg": "base",
    "desc": "Logical operations on integer vectors with elements viewed as sets     of bits."
  },
  {
    "name": "bitwShiftR",
    "usage": "bitwShiftR(a, n)",
    "pkg": "base",
    "desc": "Logical operations on integer vectors with elements viewed as sets     of bits."
  },
  {
    "name": "bitwXor",
    "usage": "bitwXor(a, b)",
    "pkg": "base",
    "desc": "Logical operations on integer vectors with elements viewed as sets     of bits."
  },
  {
    "name": "body",
    "usage": "body(fun, envir = environment(fun)) <- value",
    "pkg": "base",
    "desc": "Get or set the body of a function."
  },
  {
    "name": "bquote",
    "usage": "bquote(expr, where = parent.frame())",
    "pkg": "base",
    "desc": "An analogue of the LISP backquote macro.  ‘bquote’ quotes its     argument except that terms wrapped in ‘.()’ are evaluated in the     specified ‘where’ environment."
  },
  {
    "name": "break",
    "usage": "break",
    "pkg": "base",
    "desc": "These are the basic control-flow constructs of the R language.     They function in much the same way as control statements in any     Algol-like language.  They are all reserved words."
  },
  {
    "name": "browser",
    "usage": "browser(text = \"\", condition = NULL, expr = TRUE, skipCalls = 0L)",
    "pkg": "base",
    "desc": "Interrupt the execution of an expression and allow the inspection     of the environment where ‘browser’ was called from."
  },
  {
    "name": "browserCondition",
    "usage": "browserCondition(n = 1)",
    "pkg": "base",
    "desc": "A call to browser can provide context by supplying either a text     argument or a condition argument.  These functions can be used to     retrieve either of these arguments."
  },
  {
    "name": "browserSetDebug",
    "usage": "browserSetDebug(n = 1)",
    "pkg": "base",
    "desc": "A call to browser can provide context by supplying either a text     argument or a condition argument.  These functions can be used to     retrieve either of these arguments."
  },
  {
    "name": "browserText",
    "usage": "browserText(n = 1)",
    "pkg": "base",
    "desc": "A call to browser can provide context by supplying either a text     argument or a condition argument.  These functions can be used to     retrieve either of these arguments."
  },
  {
    "name": "builtins",
    "usage": "builtins(internal = FALSE)",
    "pkg": "base",
    "desc": "Return the names of all the built-in objects.  These are fetched     directly from the symbol table of the R interpreter."
  },
  {
    "name": "by",
    "usage": "by(data, INDICES, FUN, ..., simplify = TRUE)",
    "pkg": "base",
    "desc": "Function ‘by’ is an object-oriented wrapper for ‘tapply’ applied     to data frames."
  },
  {
    "name": "bzfile",
    "usage": "bzfile(description, open = \"\", encoding = getOption(\"encoding\"),",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "c",
    "usage": "c(..., recursive = FALSE, use.names = TRUE)",
    "pkg": "base",
    "desc": "This is a generic function which combines its arguments.     The default method combines its arguments to form a vector.  All     arguments are coerced to a common type which is the type of the     returned value, and all attributes except names are removed."
  },
  {
    "name": "call",
    "usage": "as.call(x)",
    "pkg": "base",
    "desc": "Create or test for objects of mode ‘\"call\"’."
  },
  {
    "name": "callCC",
    "usage": "callCC(fun)",
    "pkg": "base",
    "desc": "A downward-only version of Scheme's call with current     continuation."
  },
  {
    "name": "capabilities",
    "usage": "capabilities(what = NULL)",
    "pkg": "base",
    "desc": "Report on the optional features which have been compiled into this     build of R."
  },
  {
    "name": "casefold",
    "usage": "casefold(x, upper = FALSE)",
    "pkg": "base",
    "desc": "Translate characters in character vectors, in particular from     upper to lower case or vice versa."
  },
  {
    "name": "cat",
    "usage": "cat(... , file = \"\", sep = \" \", fill = FALSE, labels = NULL,",
    "pkg": "base",
    "desc": "Outputs the objects, concatenating the representations.  ‘cat’     performs much less conversion than ‘print’."
  },
  {
    "name": "cbind",
    "usage": "cbind(..., deparse.level = 1)",
    "pkg": "base",
    "desc": "Take a sequence of vector, matrix or data-frame arguments and     combine by _c_olumns or _r_ows, respectively.  These are generic     functions with methods for other R classes."
  },
  {
    "name": "ceiling",
    "usage": "ceiling(x)",
    "pkg": "base",
    "desc": "‘ceiling’ takes a single numeric argument ‘x’ and returns a     numeric vector containing the smallest integers not less than the     corresponding elements of ‘x’.     ‘floor’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the largest integers not greater than the     corresponding elements of ‘x’.     ‘trunc’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the integers formed by truncating the values in     ‘x’ toward ‘0’.     ‘round’ rounds the values in its first argument to the specified     number of decimal places (default 0).     ‘signif’ rounds the values in its first argument to the specified     number of significant digits."
  },
  {
    "name": "char.expand",
    "usage": "char.expand(input, target, nomatch = stop(\"no match\"))",
    "pkg": "base",
    "desc": "Seeks a unique match of its first argument among the elements of     its second.  If successful, it returns this element; otherwise, it     performs an action specified by the third argument."
  },
  {
    "name": "character",
    "usage": "is.character(x)",
    "pkg": "base",
    "desc": "Create or test for objects of type ‘\"character\"’."
  },
  {
    "name": "charmatch",
    "usage": "charmatch(x, table, nomatch = NA_integer_)",
    "pkg": "base",
    "desc": "‘charmatch’ seeks matches for the elements of its first argument     among those of its second."
  },
  {
    "name": "charToRaw",
    "usage": "charToRaw(x)",
    "pkg": "base",
    "desc": "Conversion and manipulation of objects of type ‘\"raw\"’."
  },
  {
    "name": "chartr",
    "usage": "chartr(old, new, x)",
    "pkg": "base",
    "desc": "Translate characters in character vectors, in particular from     upper to lower case or vice versa."
  },
  {
    "name": "chkDots",
    "usage": "chkDots(..., which.call = -1, allowed = character(0))",
    "pkg": "base",
    "desc": "Warn about extraneous arguments in the ‘...’ of its caller.  A     utility to be used e.g., in S3 methods which need a formal ‘...’     argument but do not make any use of it.  This helps catching user     errors in calling the function in question (which is the caller of     ‘chkDots()’."
  },
  {
    "name": "chol",
    "usage": "chol(x, pivot = FALSE,  LINPACK = FALSE, tol = -1, ...)",
    "pkg": "base",
    "desc": "Compute the Choleski factorization of a real symmetric     positive-definite square matrix."
  },
  {
    "name": "chol2inv",
    "usage": "chol2inv(x, size = NCOL(x), LINPACK = FALSE)",
    "pkg": "base",
    "desc": "Invert a symmetric, positive definite square matrix from its     Choleski decomposition.  Equivalently, compute (X'X)^(-1) from the     (R part) of the QR decomposition of X."
  },
  {
    "name": "choose",
    "usage": "lchoose(n, k)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "class",
    "usage": "unclass(x)",
    "pkg": "base",
    "desc": "R possesses a simple generic function mechanism which can be used     for an object-oriented style of programming.  Method dispatch     takes place based on the class of the first argument to the     generic function."
  },
  {
    "name": "clearPushBack",
    "usage": "clearPushBack(connection)",
    "pkg": "base",
    "desc": "Functions to push back text lines onto a connection, and to     enquire how many lines are currently pushed back."
  },
  {
    "name": "close",
    "usage": "close(con, type = \"rw\", ...)",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "closeAllConnections",
    "usage": "closeAllConnections()",
    "pkg": "base",
    "desc": "Display aspects of connections."
  },
  {
    "name": "col",
    "usage": "col(x, as.factor = FALSE)",
    "pkg": "base",
    "desc": "Returns a matrix of integers indicating their column number in a     matrix-like object, or a factor of column labels."
  },
  {
    "name": "colMeans",
    "usage": ".colMeans(x, m, n, na.rm = FALSE)",
    "pkg": "base",
    "desc": "Form row and column sums and means for numeric arrays (or data     frames)."
  },
  {
    "name": "colSums",
    "usage": ".colSums(x, m, n, na.rm = FALSE)",
    "pkg": "base",
    "desc": "Form row and column sums and means for numeric arrays (or data     frames)."
  },
  {
    "name": "commandArgs",
    "usage": "commandArgs(trailingOnly = FALSE)",
    "pkg": "base",
    "desc": "Provides access to a copy of the command line arguments supplied     when this R session was invoked."
  },
  {
    "name": "comment",
    "usage": "comment(x) <- value",
    "pkg": "base",
    "desc": "These functions set and query a _comment_ attribute for any R     objects.  This is typically useful for ‘data.frame’s or model     fits.     Contrary to other ‘attributes’, the ‘comment’ is not printed (by     ‘print’ or ‘print.default’).     Assigning ‘NULL’ or a zero-length character vector removes the     comment."
  },
  {
    "name": "complex",
    "usage": "is.complex(x)",
    "pkg": "base",
    "desc": "Basic functions which support complex arithmetic in R, in addition     to the arithmetic operators ‘+’, ‘-’, ‘*’, ‘/’, and ‘^’."
  },
  {
    "name": "computeRestarts",
    "usage": "computeRestarts(cond = NULL)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "conditionCall",
    "usage": "conditionCall(c)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "conditionMessage",
    "usage": "conditionMessage(c)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "conflicts",
    "usage": "conflicts(where = search(), detail = FALSE)",
    "pkg": "base",
    "desc": "‘conflicts’ reports on objects that exist with the same name in     two or more places on the ‘search’ path, usually because an object     in the user's workspace or a package is masking a system object of     the same name.  This helps discover unintentional masking."
  },
  {
    "name": "Conj",
    "usage": "Conj(z)",
    "pkg": "base",
    "desc": "Basic functions which support complex arithmetic in R, in addition     to the arithmetic operators ‘+’, ‘-’, ‘*’, ‘/’, and ‘^’."
  },
  {
    "name": "cos",
    "usage": "cospi(x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "cosh",
    "usage": "acosh(x)",
    "pkg": "base",
    "desc": "These functions give the obvious hyperbolic functions.  They     respectively compute the hyperbolic cosine, sine, tangent, and     their inverses, arc-cosine, arc-sine, arc-tangent (or ‘_area     cosine_’, etc)."
  },
  {
    "name": "cospi",
    "usage": "cospi(x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "crossprod",
    "usage": "tcrossprod(x, y = NULL)",
    "pkg": "base",
    "desc": "Given matrices ‘x’ and ‘y’ as arguments, return a matrix     cross-product.  This is formally equivalent to (but usually     slightly faster than) the call ‘t(x) %*% y’ (‘crossprod’) or ‘x     %*% t(y)’ (‘tcrossprod’)."
  },
  {
    "name": "cummax",
    "usage": "cummax(x)",
    "pkg": "base",
    "desc": "Returns a vector whose elements are the cumulative sums, products,     minima or maxima of the elements of the argument."
  },
  {
    "name": "cummin",
    "usage": "cummin(x)",
    "pkg": "base",
    "desc": "Returns a vector whose elements are the cumulative sums, products,     minima or maxima of the elements of the argument."
  },
  {
    "name": "cumprod",
    "usage": "cumprod(x)",
    "pkg": "base",
    "desc": "Returns a vector whose elements are the cumulative sums, products,     minima or maxima of the elements of the argument."
  },
  {
    "name": "cumsum",
    "usage": "cumsum(x)",
    "pkg": "base",
    "desc": "Returns a vector whose elements are the cumulative sums, products,     minima or maxima of the elements of the argument."
  },
  {
    "name": "curlGetHeaders",
    "usage": "curlGetHeaders(url, redirect = TRUE, verify = TRUE)",
    "pkg": "base",
    "desc": "Retrieve the headers for a URL for a supported protocol such as     ‘http://’, ‘ftp://’, ‘https://’ and ‘ftps://’.  An optional     function not supported on all platforms."
  },
  {
    "name": "cut",
    "usage": "cut(x, breaks, labels = NULL,",
    "pkg": "base",
    "desc": "‘cut’ divides the range of ‘x’ into intervals and codes the values     in ‘x’ according to which interval they fall.  The leftmost     interval corresponds to level one, the next leftmost to level two     and so on."
  },
  {
    "name": "data.class",
    "usage": "data.class(x)",
    "pkg": "base",
    "desc": "Determine the class of an arbitrary R object."
  },
  {
    "name": "data.frame",
    "usage": "data.frame(..., row.names = NULL, check.rows = FALSE,",
    "pkg": "base",
    "desc": "The function ‘data.frame()’ creates data frames, tightly coupled     collections of variables which share many of the properties of     matrices and of lists, used as the fundamental data structure by     most of R's modeling software."
  },
  {
    "name": "data.matrix",
    "usage": "data.matrix(frame, rownames.force = NA)",
    "pkg": "base",
    "desc": "Return the matrix obtained by converting all the variables in a     data frame to numeric mode and then binding them together as the     columns of a matrix.  Factors and ordered factors are replaced by     their internal codes."
  },
  {
    "name": "debug",
    "usage": "debuggingState(on = NULL)",
    "pkg": "base",
    "desc": "Set, unset or query the debugging flag on a function.  The ‘text’     and ‘condition’ arguments are the same as those that can be     supplied via a call to ‘browser’. They can be retrieved by the     user once the browser has been entered, and provide a mechanism to     allow users to identify which breakpoint has been activated."
  },
  {
    "name": "debuggingState",
    "usage": "debuggingState(on = NULL)",
    "pkg": "base",
    "desc": "Set, unset or query the debugging flag on a function.  The ‘text’     and ‘condition’ arguments are the same as those that can be     supplied via a call to ‘browser’. They can be retrieved by the     user once the browser has been entered, and provide a mechanism to     allow users to identify which breakpoint has been activated."
  },
  {
    "name": "debugonce",
    "usage": "debugonce(fun, text = \"\", condition = NULL, signature = NULL)",
    "pkg": "base",
    "desc": "Set, unset or query the debugging flag on a function.  The ‘text’     and ‘condition’ arguments are the same as those that can be     supplied via a call to ‘browser’. They can be retrieved by the     user once the browser has been entered, and provide a mechanism to     allow users to identify which breakpoint has been activated."
  },
  {
    "name": "default.stringsAsFactors",
    "usage": "default.stringsAsFactors()",
    "pkg": "base",
    "desc": "The function ‘data.frame()’ creates data frames, tightly coupled     collections of variables which share many of the properties of     matrices and of lists, used as the fundamental data structure by     most of R's modeling software."
  },
  {
    "name": "delayedAssign",
    "usage": "delayedAssign(x, value, eval.env = parent.frame(1),",
    "pkg": "base",
    "desc": "‘delayedAssign’ creates a _promise_ to evaluate the given     expression if its value is requested.  This provides direct access     to the _lazy evaluation_ mechanism used by R for the evaluation of     (interpreted) functions."
  },
  {
    "name": "deparse",
    "usage": "deparse(expr, width.cutoff = 60L,",
    "pkg": "base",
    "desc": "Turn unevaluated expressions into character strings."
  },
  {
    "name": "det",
    "usage": "determinant(x, logarithm = TRUE, ...)",
    "pkg": "base",
    "desc": "‘det’ calculates the determinant of a matrix.  ‘determinant’ is a     generic function that returns separately the modulus of the     determinant, optionally on the logarithm scale, and the sign of     the determinant."
  },
  {
    "name": "detach",
    "usage": "detach(name, pos = 2L, unload = FALSE, character.only = FALSE,",
    "pkg": "base",
    "desc": "Detach a database, i.e., remove it from the ‘search()’ path of     available R objects.  Usually this is either a ‘data.frame’ which     has been ‘attach’ed or a package which was attached by ‘library’."
  },
  {
    "name": "determinant",
    "usage": "determinant(x, logarithm = TRUE, ...)",
    "pkg": "base",
    "desc": "‘det’ calculates the determinant of a matrix.  ‘determinant’ is a     generic function that returns separately the modulus of the     determinant, optionally on the logarithm scale, and the sign of     the determinant."
  },
  {
    "name": "dget",
    "usage": "dget(file, keep.source = FALSE)",
    "pkg": "base",
    "desc": "Writes an ASCII text representation of an R object to a file or     connection, or uses one to recreate the object."
  },
  {
    "name": "diag",
    "usage": "diag(x) <- value",
    "pkg": "base",
    "desc": "Extract or replace the diagonal of a matrix, or construct a     diagonal matrix."
  },
  {
    "name": "diff",
    "usage": "diff(x, lag = 1, differences = 1, ...)",
    "pkg": "base",
    "desc": "Returns suitably lagged and iterated differences."
  },
  {
    "name": "difftime",
    "usage": "## S3 method for class 'difftime'",
    "pkg": "base",
    "desc": "Time intervals creation, printing, and some arithmetic.  The     ‘print()’ method calls these “time differences”."
  },
  {
    "name": "digamma",
    "usage": "digamma(x)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "dim",
    "usage": "dim(x) <- value",
    "pkg": "base",
    "desc": "Retrieve or set the dimension of an object."
  },
  {
    "name": "dimnames",
    "usage": "dimnames(x) <- value",
    "pkg": "base",
    "desc": "Retrieve or set the dimnames of an object."
  },
  {
    "name": "dir",
    "usage": "list.dirs(path = \".\", full.names = TRUE, recursive = TRUE)",
    "pkg": "base",
    "desc": "These functions produce a character vector of the names of files     or directories in the named directory."
  },
  {
    "name": "dir.create",
    "usage": "dir.create(path, showWarnings = TRUE, recursive = FALSE, mode = \"0777\")",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "dir.exists",
    "usage": "dir.exists(paths)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "dirname",
    "usage": "dirname(path)",
    "pkg": "base",
    "desc": "‘basename’ removes all of the path up to and including the last     path separator (if any).     ‘dirname’ returns the part of the ‘path’ up to but excluding the     last path separator, or ‘\".\"’ if there is no path separator."
  },
  {
    "name": "do.call",
    "usage": "do.call(what, args, quote = FALSE, envir = parent.frame())",
    "pkg": "base",
    "desc": "‘do.call’ constructs and executes a function call from a name or a     function and a list of arguments to be passed to it."
  },
  {
    "name": "dontCheck",
    "usage": "dontCheck(x)",
    "pkg": "base",
    "desc": "The ‘dontCheck’ function is the same as ‘identity’, but is     interpreted by ‘R CMD check’ code analysis as a directive to     suppress checking of ‘x’.  Currently this is only used by     ‘checkFF(registration = TRUE)’ when checking the ‘.NAME’ argument     of foreign function calls."
  },
  {
    "name": "double",
    "usage": "is.double(x)",
    "pkg": "base",
    "desc": "Create, coerce to or test for a double-precision vector."
  },
  {
    "name": "dput",
    "usage": "dput(x, file = \"\",",
    "pkg": "base",
    "desc": "Writes an ASCII text representation of an R object to a file or     connection, or uses one to recreate the object."
  },
  {
    "name": "dQuote",
    "usage": "dQuote(x)",
    "pkg": "base",
    "desc": "Single or double quote text by combining with appropriate single     or double left and right quotation marks."
  },
  {
    "name": "drop",
    "usage": "drop(x)",
    "pkg": "base",
    "desc": "Delete the dimensions of an array which have only one level."
  },
  {
    "name": "droplevels",
    "usage": "droplevels(x, except, exclude, ...)",
    "pkg": "base",
    "desc": "The function ‘droplevels’ is used to drop unused levels from a     ‘factor’ or, more commonly, from factors in a data frame."
  },
  {
    "name": "dump",
    "usage": "dump(list, file = \"dumpdata.R\", append = FALSE,",
    "pkg": "base",
    "desc": "This function takes a vector of names of R objects and produces     text representations of the objects on a file or connection.  A     ‘dump’ file can usually be ‘source’d into another R session."
  },
  {
    "name": "duplicated",
    "usage": "duplicated(x, incomparables = FALSE, MARGIN = 1,",
    "pkg": "base",
    "desc": "‘duplicated()’ determines which elements of a vector or data frame     are duplicates of elements with smaller subscripts, and returns a     logical vector indicating which elements (rows) are duplicates.     ‘anyDuplicated(.)’ is a “generalized” more efficient shortcut for     ‘any(duplicated(.))’."
  },
  {
    "name": "dynGet",
    "usage": "dynGet(x, ifnotfound = , minframe = 1L, inherits = FALSE)",
    "pkg": "base",
    "desc": "Search by name for an object (‘get’) or zero or more objects     (‘mget’)."
  },
  {
    "name": "eapply",
    "usage": "eapply(env, FUN, ..., all.names = FALSE, USE.NAMES = TRUE)",
    "pkg": "base",
    "desc": "‘eapply’ applies ‘FUN’ to the named values from an ‘environment’     and returns the results as a list.  The user can request that all     named objects are used (normally names that begin with a dot are     not).  The output is not sorted and no enclosing environments are     searched.     This is a primitive function."
  },
  {
    "name": "eigen",
    "usage": "eigen(x, symmetric, only.values = FALSE, EISPACK = FALSE)",
    "pkg": "base",
    "desc": "Computes eigenvalues and eigenvectors of numeric (double, integer,     logical) or complex matrices."
  },
  {
    "name": "emptyenv",
    "usage": "emptyenv()",
    "pkg": "base",
    "desc": "Get, set, test for and create environments."
  },
  {
    "name": "enc2native",
    "usage": "enc2native(x)",
    "pkg": "base",
    "desc": "Read or set the declared encodings for a character vector."
  },
  {
    "name": "enc2utf8",
    "usage": "enc2utf8(x)",
    "pkg": "base",
    "desc": "Read or set the declared encodings for a character vector."
  },
  {
    "name": "encodeString",
    "usage": "encodeString(x, width = 0, quote = \"\", na.encode = TRUE,",
    "pkg": "base",
    "desc": "‘encodeString’ escapes the strings in a character vector in the     same way ‘print.default’ does, and optionally fits the encoded     strings within a field width."
  },
  {
    "name": "Encoding",
    "usage": "Encoding(x) <- value",
    "pkg": "base",
    "desc": "Read or set the declared encodings for a character vector."
  },
  {
    "name": "endsWith",
    "usage": "endsWith(x, suffix)",
    "pkg": "base",
    "desc": "Determines if entries of ‘x’ start or end with string (entries of)     ‘prefix’ or ‘suffix’ respectively, where strings are recycled to     common lengths.     ‘startsWith()’ is equivalent to but much faster than          substring(x, 1, nchar(prefix)) == prefix     or also          grepl(\"^<prefix>\", x)     where ‘prefix’ is not to contain special regular expression     characters."
  },
  {
    "name": "enquote",
    "usage": "enquote(cl)",
    "pkg": "base",
    "desc": "‘substitute’ returns the parse tree for the (unevaluated)     expression ‘expr’, substituting any variables bound in ‘env’.     ‘quote’ simply returns its argument. The argument is not evaluated     and can be any R expression.     ‘enquote’ is a simple one-line utility which transforms a call of     the form ‘Foo(....)’ into the call ‘quote(Foo(....))’.  This is     typically used to protect a ‘call’ from early evaluation."
  },
  {
    "name": "env.profile",
    "usage": "env.profile(env)",
    "pkg": "base",
    "desc": "Get, set, test for and create environments."
  },
  {
    "name": "environment",
    "usage": "environmentName(env)",
    "pkg": "base",
    "desc": "Get, set, test for and create environments."
  },
  {
    "name": "environmentIsLocked",
    "usage": "environmentIsLocked(env)",
    "pkg": "base",
    "desc": "These functions represent an interface for adjustments to     environments and bindings within environments.  They allow for     locking environments as well as individual bindings, and for     linking a variable to a function."
  },
  {
    "name": "environmentName",
    "usage": "environmentName(env)",
    "pkg": "base",
    "desc": "Get, set, test for and create environments."
  },
  {
    "name": "eval",
    "usage": "eval.parent(expr, n = 1)",
    "pkg": "base",
    "desc": "Evaluate an R expression in a specified environment."
  },
  {
    "name": "eval.parent",
    "usage": "eval.parent(expr, n = 1)",
    "pkg": "base",
    "desc": "Evaluate an R expression in a specified environment."
  },
  {
    "name": "evalq",
    "usage": "evalq(expr, envir, enclos)",
    "pkg": "base",
    "desc": "Evaluate an R expression in a specified environment."
  },
  {
    "name": "exists",
    "usage": "exists(x, where = -1, envir = , frame, mode = \"any\",",
    "pkg": "base",
    "desc": "Look for an R object of the given name and possibly return it"
  },
  {
    "name": "expand.grid",
    "usage": "expand.grid(..., KEEP.OUT.ATTRS = TRUE, stringsAsFactors = TRUE)",
    "pkg": "base",
    "desc": "Create a data frame from all combinations of the supplied vectors     or factors.  See the description of the return value for precise     details of the way this is done."
  },
  {
    "name": "expression",
    "usage": "as.expression(x, ...)",
    "pkg": "base",
    "desc": "Creates or tests for objects of mode ‘\"expression\"’."
  },
  {
    "name": "factor",
    "usage": "as.factor(x)",
    "pkg": "base",
    "desc": "The function ‘factor’ is used to encode a vector as a factor (the     terms ‘category’ and ‘enumerated type’ are also used for factors).     If argument ‘ordered’ is ‘TRUE’, the factor levels are assumed to     be ordered.  For compatibility with S there is also a function     ‘ordered’.     ‘is.factor’, ‘is.ordered’, ‘as.factor’ and ‘as.ordered’ are the     membership and coercion functions for these classes."
  },
  {
    "name": "factorial",
    "usage": "lfactorial(x)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "fifo",
    "usage": "fifo(description, open = \"\", blocking = FALSE,",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "file",
    "usage": "unz(description, filename, open = \"\", encoding = getOption(\"encoding\"))",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "file.access",
    "usage": "file.access(names, mode = 0)",
    "pkg": "base",
    "desc": "Utility function to access information about files on the user's     file systems."
  },
  {
    "name": "file.append",
    "usage": "file.append(file1, file2)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "file.choose",
    "usage": "file.choose(new = FALSE)",
    "pkg": "base",
    "desc": "Choose a file interactively."
  },
  {
    "name": "file.copy",
    "usage": "file.copy(from, to, overwrite = recursive, recursive = FALSE,",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "file.create",
    "usage": "file.create(..., showWarnings = TRUE)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "file.exists",
    "usage": "file.exists(...)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "file.info",
    "usage": "file.info(..., extra_cols = TRUE)",
    "pkg": "base",
    "desc": "Utility function to extract information about files on the user's     file systems."
  },
  {
    "name": "file.link",
    "usage": "file.link(from, to)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "file.mode",
    "usage": "file.mode(...)",
    "pkg": "base",
    "desc": "Utility function to extract information about files on the user's     file systems."
  },
  {
    "name": "file.mtime",
    "usage": "file.mtime(...)",
    "pkg": "base",
    "desc": "Utility function to extract information about files on the user's     file systems."
  },
  {
    "name": "file.path",
    "usage": "file.path(..., fsep = .Platform$file.sep)",
    "pkg": "base",
    "desc": "Construct the path to a file from components in a     platform-independent way."
  },
  {
    "name": "file.remove",
    "usage": "file.remove(...)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "file.rename",
    "usage": "file.rename(from, to)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "file.show",
    "usage": "file.show(..., header = rep(\"\", nfiles),",
    "pkg": "base",
    "desc": "Display one or more (plain) text files, in a platform specific     way, typically via a ‘pager’."
  },
  {
    "name": "file.size",
    "usage": "file.size(...)",
    "pkg": "base",
    "desc": "Utility function to extract information about files on the user's     file systems."
  },
  {
    "name": "file.symlink",
    "usage": "file.symlink(from, to)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "Filter",
    "usage": "Filter(f, x)",
    "pkg": "base",
    "desc": "‘Reduce’ uses a binary function to successively combine the     elements of a given vector and a possibly given initial value.     ‘Filter’ extracts the elements of a vector for which a predicate     (logical) function gives true.  ‘Find’ and ‘Position’ give the     first or last such element and its position in the vector,     respectively.  ‘Map’ applies a function to the corresponding     elements of given vectors.  ‘Negate’ creates the negation of a     given function."
  },
  {
    "name": "Find",
    "usage": "Find(f, x, right = FALSE, nomatch = NULL)",
    "pkg": "base",
    "desc": "‘Reduce’ uses a binary function to successively combine the     elements of a given vector and a possibly given initial value.     ‘Filter’ extracts the elements of a vector for which a predicate     (logical) function gives true.  ‘Find’ and ‘Position’ give the     first or last such element and its position in the vector,     respectively.  ‘Map’ applies a function to the corresponding     elements of given vectors.  ‘Negate’ creates the negation of a     given function."
  },
  {
    "name": "find.package",
    "usage": "find.package(package, lib.loc = NULL, quiet = FALSE,",
    "pkg": "base",
    "desc": "Find the paths to one or more packages."
  },
  {
    "name": "findInterval",
    "usage": "findInterval(x, vec, rightmost.closed = FALSE, all.inside = FALSE,",
    "pkg": "base",
    "desc": "Given a vector of non-decreasing breakpoints in ‘vec’, find the     interval containing each element of ‘x’; i.e., if ‘i <-     findInterval(x,v)’, for each index ‘j’ in ‘x’ v[i[j]] <= x[j] <     v[i[j] + 1] where v[0] := - Inf, v[N+1] := + Inf, and ‘N <-     length(v)’.  At the two boundaries, the returned index may differ     by 1, depending on the optional arguments ‘rightmost.closed’ and     ‘all.inside’."
  },
  {
    "name": "findPackageEnv",
    "usage": "findPackageEnv(info)",
    "pkg": "base",
    "desc": "Internal objects in the base package most of which are only     user-visible because of the special nature of the base namespace."
  },
  {
    "name": "findRestart",
    "usage": "findRestart(name, cond = NULL)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "floor",
    "usage": "floor(x)",
    "pkg": "base",
    "desc": "‘ceiling’ takes a single numeric argument ‘x’ and returns a     numeric vector containing the smallest integers not less than the     corresponding elements of ‘x’.     ‘floor’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the largest integers not greater than the     corresponding elements of ‘x’.     ‘trunc’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the integers formed by truncating the values in     ‘x’ toward ‘0’.     ‘round’ rounds the values in its first argument to the specified     number of decimal places (default 0).     ‘signif’ rounds the values in its first argument to the specified     number of significant digits."
  },
  {
    "name": "flush",
    "usage": "flush(con)",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "for",
    "usage": "for(var in seq) expr",
    "pkg": "base",
    "desc": "These are the basic control-flow constructs of the R language.     They function in much the same way as control statements in any     Algol-like language.  They are all reserved words."
  },
  {
    "name": "force",
    "usage": "force(x)",
    "pkg": "base",
    "desc": "Forces the evaluation of a function argument."
  },
  {
    "name": "forceAndCall",
    "usage": "forceAndCall(n, FUN, ...)",
    "pkg": "base",
    "desc": "Call a function with a specified number of leading arguments     forced before the call if the function is a closure."
  },
  {
    "name": "formals",
    "usage": "formals(fun, envir = environment(fun)) <- value",
    "pkg": "base",
    "desc": "Get or set the formal arguments of a ‘function’."
  },
  {
    "name": "format",
    "usage": "format(x, width = 12, ...)",
    "pkg": "base",
    "desc": "Format an R object for pretty printing."
  },
  {
    "name": "format.info",
    "usage": "format.info(x, digits = NULL, nsmall = 0)",
    "pkg": "base",
    "desc": "Information is returned on how ‘format(x, digits, nsmall)’ would     be formatted."
  },
  {
    "name": "format.pval",
    "usage": "format.pval(pv, digits = max(1, getOption(\"digits\") - 2),",
    "pkg": "base",
    "desc": "‘format.pval’ is intended for formatting p-values."
  },
  {
    "name": "formatDL",
    "usage": "formatDL(x, y, style = c(\"table\", \"list\"),",
    "pkg": "base",
    "desc": "Format vectors of items and their descriptions as 2-column tables     or LaTeX-style description lists."
  },
  {
    "name": "forwardsolve",
    "usage": "forwardsolve(l, x, k = ncol(l), upper.tri = FALSE,",
    "pkg": "base",
    "desc": "Solves a triangular system of linear equations."
  },
  {
    "name": "function",
    "usage": "function( arglist ) expr",
    "pkg": "base",
    "desc": "These functions provide the base mechanisms for defining new     functions in the R language."
  },
  {
    "name": "gamma",
    "usage": "trigamma(x)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "gc",
    "usage": "gcinfo(verbose)",
    "pkg": "base",
    "desc": "A call of ‘gc’ causes a garbage collection to take place.     ‘gcinfo’ sets a flag so that automatic collection is either silent     (‘verbose = FALSE’) or prints memory usage statistics (‘verbose =     TRUE’)."
  },
  {
    "name": "gc.time",
    "usage": "gc.time(on = TRUE)",
    "pkg": "base",
    "desc": "This function reports the time spent in garbage collection so far     in the R session while GC timing was enabled."
  },
  {
    "name": "gcinfo",
    "usage": "gcinfo(verbose)",
    "pkg": "base",
    "desc": "A call of ‘gc’ causes a garbage collection to take place.     ‘gcinfo’ sets a flag so that automatic collection is either silent     (‘verbose = FALSE’) or prints memory usage statistics (‘verbose =     TRUE’)."
  },
  {
    "name": "gctorture",
    "usage": "gctorture2(step, wait = step, inhibit_release = FALSE)",
    "pkg": "base",
    "desc": "Provokes garbage collection on (nearly) every memory allocation.     Intended to ferret out memory protection bugs.  Also makes R run     _very_ slowly, unfortunately."
  },
  {
    "name": "gctorture2",
    "usage": "gctorture2(step, wait = step, inhibit_release = FALSE)",
    "pkg": "base",
    "desc": "Provokes garbage collection on (nearly) every memory allocation.     Intended to ferret out memory protection bugs.  Also makes R run     _very_ slowly, unfortunately."
  },
  {
    "name": "get",
    "usage": "mget(x, envir = as.environment(-1), mode = \"any\", ifnotfound,",
    "pkg": "base",
    "desc": "Search by name for an object (‘get’) or zero or more objects     (‘mget’)."
  },
  {
    "name": "get0",
    "usage": "get0(x, envir = pos.to.env(-1L), mode = \"any\", inherits = TRUE,",
    "pkg": "base",
    "desc": "Look for an R object of the given name and possibly return it"
  },
  {
    "name": "getCallingDLL",
    "usage": "getCallingDLLe(e)",
    "pkg": "base",
    "desc": "This is an internal function that is called from R's C code to     determine the enclosing namespace of a     ‘.C’/‘.Call’/‘.Fortran’/‘.External’ call which has no ‘PACKAGE’     argument. If the call has been made from a function within a     namespace, then we can find the DLL associated with that     namespace.  The purpose of this is to avoid having to use the     ‘PACKAGE’ argument in these native calls and so better support     versions of packages.     This is an internal function that may be migrated to internal C     code in the future and so should not be used by R programmers."
  },
  {
    "name": "getCallingDLLe",
    "usage": "getCallingDLLe(e)",
    "pkg": "base",
    "desc": "This is an internal function that is called from R's C code to     determine the enclosing namespace of a     ‘.C’/‘.Call’/‘.Fortran’/‘.External’ call which has no ‘PACKAGE’     argument. If the call has been made from a function within a     namespace, then we can find the DLL associated with that     namespace.  The purpose of this is to avoid having to use the     ‘PACKAGE’ argument in these native calls and so better support     versions of packages.     This is an internal function that may be migrated to internal C     code in the future and so should not be used by R programmers."
  },
  {
    "name": "getConnection",
    "usage": "getConnection(what)",
    "pkg": "base",
    "desc": "Display aspects of connections."
  },
  {
    "name": "getDLLRegisteredRoutines",
    "usage": "getDLLRegisteredRoutines(dll, addNames = TRUE)",
    "pkg": "base",
    "desc": "This function allows us to query the set of routines in a DLL that     are registered with R to enhance dynamic lookup, error handling     when calling native routines, and potentially security in the     future.  This function provides a description of each of the     registered routines in the DLL for the different interfaces, i.e.     ‘.C’, ‘.Call’, ‘.Fortran’ and ‘.External’."
  },
  {
    "name": "getElement",
    "usage": "getElement(object, name)",
    "pkg": "base",
    "desc": "Operators acting on vectors, matrices, arrays and lists to extract     or replace parts."
  },
  {
    "name": "geterrmessage",
    "usage": "geterrmessage()",
    "pkg": "base",
    "desc": "‘stop’ stops execution of the current expression and executes an     error action.     ‘geterrmessage’ gives the last error message."
  },
  {
    "name": "getHook",
    "usage": "getHook(hookName)",
    "pkg": "base",
    "desc": "These functions allow users to set actions to be taken before     packages are attached/detached and namespaces are (un)loaded."
  },
  {
    "name": "getNativeSymbolInfo",
    "usage": "getNativeSymbolInfo(name, PACKAGE, unlist = TRUE,",
    "pkg": "base",
    "desc": "This finds and returns a description of one or more dynamically     loaded or ‘exported’ built-in native symbols.  For each name, it     returns information about the name of the symbol, the library in     which it is located and, if available, the number of arguments it     expects and by which interface it should be called (i.e ‘.Call’,     ‘.C’, ‘.Fortran’, or ‘.External’). Additionally, it returns the     address of the symbol and this can be passed to other C routines.     Specifically, this provides a way to explicitly share symbols     between different dynamically loaded package libraries.  Also, it     provides a way to query where symbols were resolved, and aids     diagnosing strange behavior associated with dynamic resolution."
  },
  {
    "name": "getOption",
    "usage": "getOption(x, default = NULL)",
    "pkg": "base",
    "desc": "Allow the user to set and examine a variety of global _options_     which affect the way in which R computes and displays its results."
  },
  {
    "name": "getRversion",
    "usage": "getRversion()",
    "pkg": "base",
    "desc": "A simple S3 class for representing numeric versions including     package versions, and associated methods."
  },
  {
    "name": "getSrcLines",
    "usage": "getSrcLines(srcfile, first, last)",
    "pkg": "base",
    "desc": "These functions are for working with source files and more     generally with “source references” (‘\"srcref\"’), i.e., references     to source code.  The resulting data is used for printing and     source level debugging, and is typically available in interactive     R sessions, namely when ‘options(keep.source = TRUE)’."
  },
  {
    "name": "gettext",
    "usage": "ngettext(n, msg1, msg2, domain = NULL)",
    "pkg": "base",
    "desc": "If Native Language Support was enabled in this build of R, attempt     to translate character vectors or set where the translations are     to be found."
  },
  {
    "name": "gettextf",
    "usage": "gettextf(fmt, ..., domain = NULL)",
    "pkg": "base",
    "desc": "A wrapper for the C function ‘sprintf’, that returns a character     vector containing a formatted combination of text and variable     values."
  },
  {
    "name": "getwd",
    "usage": "getwd()",
    "pkg": "base",
    "desc": "‘getwd’ returns an absolute filepath representing the current     working directory of the R process; ‘setwd(dir)’ is used to set     the working directory to ‘dir’."
  },
  {
    "name": "gl",
    "usage": "gl(n, k, length = n*k, labels = seq_len(n), ordered = FALSE)",
    "pkg": "base",
    "desc": "Generate factors by specifying the pattern of their levels."
  },
  {
    "name": "globalenv",
    "usage": "globalenv()",
    "pkg": "base",
    "desc": "Get, set, test for and create environments."
  },
  {
    "name": "gregexpr",
    "usage": "gregexpr(pattern, text, ignore.case = FALSE, perl = FALSE,",
    "pkg": "base",
    "desc": "‘grep’, ‘grepl’, ‘regexpr’, ‘gregexpr’ and ‘regexec’ search for     matches to argument ‘pattern’ within each element of a character     vector: they differ in the format of and amount of detail in the     results.     ‘sub’ and ‘gsub’ perform replacement of the first and all matches     respectively."
  },
  {
    "name": "grep",
    "usage": "grepl(pattern, x, ignore.case = FALSE, perl = FALSE,",
    "pkg": "base",
    "desc": "‘grep’, ‘grepl’, ‘regexpr’, ‘gregexpr’ and ‘regexec’ search for     matches to argument ‘pattern’ within each element of a character     vector: they differ in the format of and amount of detail in the     results.     ‘sub’ and ‘gsub’ perform replacement of the first and all matches     respectively."
  },
  {
    "name": "grepl",
    "usage": "grepl(pattern, x, ignore.case = FALSE, perl = FALSE,",
    "pkg": "base",
    "desc": "‘grep’, ‘grepl’, ‘regexpr’, ‘gregexpr’ and ‘regexec’ search for     matches to argument ‘pattern’ within each element of a character     vector: they differ in the format of and amount of detail in the     results.     ‘sub’ and ‘gsub’ perform replacement of the first and all matches     respectively."
  },
  {
    "name": "grepRaw",
    "usage": "grepRaw(pattern, x, offset = 1L, ignore.case = FALSE,",
    "pkg": "base",
    "desc": "‘grepRaw’ searches for substring ‘pattern’ matches within a raw     vector ‘x’."
  },
  {
    "name": "grouping",
    "usage": "grouping(...)",
    "pkg": "base",
    "desc": "‘grouping’ returns a permutation which rearranges its first     argument such that identical values are adjacent to each other.     Also returned as attributes are the group-wise partitioning and     the maximum group size."
  },
  {
    "name": "gsub",
    "usage": "gsub(pattern, replacement, x, ignore.case = FALSE, perl = FALSE,",
    "pkg": "base",
    "desc": "‘grep’, ‘grepl’, ‘regexpr’, ‘gregexpr’ and ‘regexec’ search for     matches to argument ‘pattern’ within each element of a character     vector: they differ in the format of and amount of detail in the     results.     ‘sub’ and ‘gsub’ perform replacement of the first and all matches     respectively."
  },
  {
    "name": "gzcon",
    "usage": "gzcon(con, level = 6, allowNonCompressed = TRUE, text = FALSE)",
    "pkg": "base",
    "desc": "‘gzcon’ provides a modified connection that wraps an existing     connection, and decompresses reads or compresses writes through     that connection.  Standard ‘gzip’ headers are assumed."
  },
  {
    "name": "gzfile",
    "usage": "gzfile(description, open = \"\", encoding = getOption(\"encoding\"),",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "I",
    "usage": "I(x)",
    "pkg": "base",
    "desc": "Change the class of an object to indicate that it should be     treated ‘as is’."
  },
  {
    "name": "iconv",
    "usage": "iconvlist()",
    "pkg": "base",
    "desc": "This uses system facilities to convert a character vector between     encodings: the ‘i’ stands for ‘internationalization’."
  },
  {
    "name": "iconvlist",
    "usage": "iconvlist()",
    "pkg": "base",
    "desc": "This uses system facilities to convert a character vector between     encodings: the ‘i’ stands for ‘internationalization’."
  },
  {
    "name": "icuGetCollate",
    "usage": "icuGetCollate(type = c(\"actual\", \"valid\"))",
    "pkg": "base",
    "desc": "Controls the way collation is done by ICU (an optional part of the     R build)."
  },
  {
    "name": "icuSetCollate",
    "usage": "icuSetCollate(...)",
    "pkg": "base",
    "desc": "Controls the way collation is done by ICU (an optional part of the     R build)."
  },
  {
    "name": "identical",
    "usage": "identical(x, y, num.eq = TRUE, single.NA = TRUE, attrib.as.set = TRUE,",
    "pkg": "base",
    "desc": "The safe and reliable way to test two objects for being _exactly_     equal.  It returns ‘TRUE’ in this case, ‘FALSE’ in every other     case."
  },
  {
    "name": "identity",
    "usage": "identity(x)",
    "pkg": "base",
    "desc": "A trivial identity function returning its argument."
  },
  {
    "name": "if",
    "usage": "if(cond) cons.expr  else  alt.expr",
    "pkg": "base",
    "desc": "These are the basic control-flow constructs of the R language.     They function in much the same way as control statements in any     Algol-like language.  They are all reserved words."
  },
  {
    "name": "ifelse",
    "usage": "ifelse(test, yes, no)",
    "pkg": "base",
    "desc": "‘ifelse’ returns a value with the same shape as ‘test’ which is     filled with elements selected from either ‘yes’ or ‘no’ depending     on whether the element of ‘test’ is ‘TRUE’ or ‘FALSE’."
  },
  {
    "name": "Im",
    "usage": "Im(z)",
    "pkg": "base",
    "desc": "Basic functions which support complex arithmetic in R, in addition     to the arithmetic operators ‘+’, ‘-’, ‘*’, ‘/’, and ‘^’."
  },
  {
    "name": "inherits",
    "usage": "inherits(x, what, which = FALSE)",
    "pkg": "base",
    "desc": "R possesses a simple generic function mechanism which can be used     for an object-oriented style of programming.  Method dispatch     takes place based on the class of the first argument to the     generic function."
  },
  {
    "name": "integer",
    "usage": "is.integer(x)",
    "pkg": "base",
    "desc": "Creates or tests for objects of type ‘\"integer\"’."
  },
  {
    "name": "interaction",
    "usage": "interaction(..., drop = FALSE, sep = \".\", lex.order = FALSE)",
    "pkg": "base",
    "desc": "‘interaction’ computes a factor which represents the interaction     of the given factors.  The result of ‘interaction’ is always     unordered."
  },
  {
    "name": "intersect",
    "usage": "intersect(x, y)",
    "pkg": "base",
    "desc": "Performs *set* union, intersection, (asymmetric!) difference,     equality and membership on two vectors."
  },
  {
    "name": "intToBits",
    "usage": "intToBits(x)",
    "pkg": "base",
    "desc": "Conversion and manipulation of objects of type ‘\"raw\"’."
  },
  {
    "name": "intToUtf8",
    "usage": "intToUtf8(x, multiple = FALSE)",
    "pkg": "base",
    "desc": "Conversion of UTF-8 encoded character vectors to and from integer     vectors."
  },
  {
    "name": "inverse.rle",
    "usage": "inverse.rle(x, ...)",
    "pkg": "base",
    "desc": "Compute the lengths and values of runs of equal values in a vector     - or the reverse operation."
  },
  {
    "name": "invisible",
    "usage": "invisible(x)",
    "pkg": "base",
    "desc": "Return a (temporarily) invisible copy of an object."
  },
  {
    "name": "invokeRestart",
    "usage": "invokeRestartInteractively(r)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "invokeRestartInteractively",
    "usage": "invokeRestartInteractively(r)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "is.array",
    "usage": "is.array(x)",
    "pkg": "base",
    "desc": "Creates or tests for arrays."
  },
  {
    "name": "is.atomic",
    "usage": "is.atomic(x)",
    "pkg": "base",
    "desc": "‘is.atomic’ returns ‘TRUE’ if ‘x’ is of an atomic type (or ‘NULL’)     and ‘FALSE’ otherwise.     ‘is.recursive’ returns ‘TRUE’ if ‘x’ has a recursive (list-like)     structure and ‘FALSE’ otherwise."
  },
  {
    "name": "is.call",
    "usage": "is.call(x)",
    "pkg": "base",
    "desc": "Create or test for objects of mode ‘\"call\"’."
  },
  {
    "name": "is.character",
    "usage": "is.character(x)",
    "pkg": "base",
    "desc": "Create or test for objects of type ‘\"character\"’."
  },
  {
    "name": "is.complex",
    "usage": "is.complex(x)",
    "pkg": "base",
    "desc": "Basic functions which support complex arithmetic in R, in addition     to the arithmetic operators ‘+’, ‘-’, ‘*’, ‘/’, and ‘^’."
  },
  {
    "name": "is.data.frame",
    "usage": "is.data.frame(x)",
    "pkg": "base",
    "desc": "Functions to check if an object is a data frame, or coerce it if     possible."
  },
  {
    "name": "is.double",
    "usage": "is.double(x)",
    "pkg": "base",
    "desc": "Create, coerce to or test for a double-precision vector."
  },
  {
    "name": "is.element",
    "usage": "is.element(el, set)",
    "pkg": "base",
    "desc": "Performs *set* union, intersection, (asymmetric!) difference,     equality and membership on two vectors."
  },
  {
    "name": "is.environment",
    "usage": "is.environment(x)",
    "pkg": "base",
    "desc": "Get, set, test for and create environments."
  },
  {
    "name": "is.expression",
    "usage": "is.expression(x)",
    "pkg": "base",
    "desc": "Creates or tests for objects of mode ‘\"expression\"’."
  },
  {
    "name": "is.factor",
    "usage": "is.factor(x)",
    "pkg": "base",
    "desc": "The function ‘factor’ is used to encode a vector as a factor (the     terms ‘category’ and ‘enumerated type’ are also used for factors).     If argument ‘ordered’ is ‘TRUE’, the factor levels are assumed to     be ordered.  For compatibility with S there is also a function     ‘ordered’.     ‘is.factor’, ‘is.ordered’, ‘as.factor’ and ‘as.ordered’ are the     membership and coercion functions for these classes."
  },
  {
    "name": "is.finite",
    "usage": "is.finite(x)",
    "pkg": "base",
    "desc": "‘is.finite’ and ‘is.infinite’ return a vector of the same length     as ‘x’, indicating which elements are finite (not infinite and not     missing) or infinite.     ‘Inf’ and ‘-Inf’ are positive and negative infinity whereas ‘NaN’     means ‘Not a Number’.  (These apply to numeric values and real and     imaginary parts of complex values but not to values of integer     vectors.)  ‘Inf’ and ‘NaN’ are reserved words in the R language."
  },
  {
    "name": "is.function",
    "usage": "is.function(x)",
    "pkg": "base",
    "desc": "Checks whether its argument is a (primitive) function."
  },
  {
    "name": "is.infinite",
    "usage": "is.infinite(x)",
    "pkg": "base",
    "desc": "‘is.finite’ and ‘is.infinite’ return a vector of the same length     as ‘x’, indicating which elements are finite (not infinite and not     missing) or infinite.     ‘Inf’ and ‘-Inf’ are positive and negative infinity whereas ‘NaN’     means ‘Not a Number’.  (These apply to numeric values and real and     imaginary parts of complex values but not to values of integer     vectors.)  ‘Inf’ and ‘NaN’ are reserved words in the R language."
  },
  {
    "name": "is.integer",
    "usage": "is.integer(x)",
    "pkg": "base",
    "desc": "Creates or tests for objects of type ‘\"integer\"’."
  },
  {
    "name": "is.language",
    "usage": "is.language(x)",
    "pkg": "base",
    "desc": "‘is.language’ returns ‘TRUE’ if ‘x’ is a variable ‘name’, a     ‘call’, or an ‘expression’."
  },
  {
    "name": "is.list",
    "usage": "is.list(x)",
    "pkg": "base",
    "desc": "Functions to construct, coerce and check for both kinds of R     lists."
  },
  {
    "name": "is.logical",
    "usage": "is.logical(x)",
    "pkg": "base",
    "desc": "Create or test for objects of type ‘\"logical\"’, and the basic     logical constants."
  },
  {
    "name": "is.matrix",
    "usage": "is.matrix(x)",
    "pkg": "base",
    "desc": "‘matrix’ creates a matrix from the given set of values.     ‘as.matrix’ attempts to turn its argument into a matrix.     ‘is.matrix’ tests if its argument is a (strict) matrix."
  },
  {
    "name": "is.na",
    "usage": "is.na(x) <- value",
    "pkg": "base",
    "desc": "‘NA’ is a logical constant of length 1 which contains a missing     value indicator.  ‘NA’ can be coerced to any other vector type     except raw.  There are also constants ‘NA_integer_’, ‘NA_real_’,     ‘NA_complex_’ and ‘NA_character_’ of the other atomic vector types     which support missing values: all of these are reserved words in     the R language.     The generic function ‘is.na’ indicates which elements are missing.     The generic function ‘is.na<-’ sets elements to ‘NA’.     The generic function ‘anyNA’ implements ‘any(is.na(x))’ in a     possibly faster way (especially for atomic vectors)."
  },
  {
    "name": "is.name",
    "usage": "is.name(x)",
    "pkg": "base",
    "desc": "A ‘name’ (also known as a ‘symbol’) is a way to refer to R objects     by name (rather than the value of the object, if any, bound to     that name).     ‘as.name’ and ‘as.symbol’ are identical: they attempt to coerce     the argument to a name.     ‘is.symbol’ and the identical ‘is.name’ return ‘TRUE’ or ‘FALSE’     depending on whether the argument is a name or not."
  },
  {
    "name": "is.nan",
    "usage": "is.nan(x)",
    "pkg": "base",
    "desc": "‘is.finite’ and ‘is.infinite’ return a vector of the same length     as ‘x’, indicating which elements are finite (not infinite and not     missing) or infinite.     ‘Inf’ and ‘-Inf’ are positive and negative infinity whereas ‘NaN’     means ‘Not a Number’.  (These apply to numeric values and real and     imaginary parts of complex values but not to values of integer     vectors.)  ‘Inf’ and ‘NaN’ are reserved words in the R language."
  },
  {
    "name": "is.null",
    "usage": "is.null(x)",
    "pkg": "base",
    "desc": "‘NULL’ represents the null object in R: it is a reserved word.     ‘NULL’ is often returned by expressions and functions whose value     is undefined."
  },
  {
    "name": "is.numeric",
    "usage": "is.numeric(x)",
    "pkg": "base",
    "desc": "Creates or coerces objects of type ‘\"numeric\"’.  ‘is.numeric’ is a     more general test of an object being interpretable as numbers."
  },
  {
    "name": "is.object",
    "usage": "is.object(x)",
    "pkg": "base",
    "desc": "A function rather for internal use.  It returns ‘TRUE’ if the     object ‘x’ has the R internal ‘OBJECT’ bit set, and ‘FALSE’     otherwise.  The ‘OBJECT’ bit is set when a ‘\"class\"’ attribute is     added and removed when that attribute is removed, so this is a     very efficient way to check if an object has a class attribute.     (S4 objects always should.)"
  },
  {
    "name": "is.ordered",
    "usage": "is.ordered(x)",
    "pkg": "base",
    "desc": "The function ‘factor’ is used to encode a vector as a factor (the     terms ‘category’ and ‘enumerated type’ are also used for factors).     If argument ‘ordered’ is ‘TRUE’, the factor levels are assumed to     be ordered.  For compatibility with S there is also a function     ‘ordered’.     ‘is.factor’, ‘is.ordered’, ‘as.factor’ and ‘as.ordered’ are the     membership and coercion functions for these classes."
  },
  {
    "name": "is.pairlist",
    "usage": "is.pairlist(x)",
    "pkg": "base",
    "desc": "Functions to construct, coerce and check for both kinds of R     lists."
  },
  {
    "name": "is.primitive",
    "usage": "is.primitive(x)",
    "pkg": "base",
    "desc": "Checks whether its argument is a (primitive) function."
  },
  {
    "name": "is.qr",
    "usage": "is.qr(x)",
    "pkg": "base",
    "desc": "‘qr’ computes the QR decomposition of a matrix."
  },
  {
    "name": "is.raw",
    "usage": "is.raw(x)",
    "pkg": "base",
    "desc": "Creates or tests for objects of type ‘\"raw\"’."
  },
  {
    "name": "is.recursive",
    "usage": "is.recursive(x)",
    "pkg": "base",
    "desc": "‘is.atomic’ returns ‘TRUE’ if ‘x’ is of an atomic type (or ‘NULL’)     and ‘FALSE’ otherwise.     ‘is.recursive’ returns ‘TRUE’ if ‘x’ has a recursive (list-like)     structure and ‘FALSE’ otherwise."
  },
  {
    "name": "is.single",
    "usage": "is.single(x)",
    "pkg": "base",
    "desc": "‘is.single’ reports an error.  There are no single precision     values in R."
  },
  {
    "name": "is.symbol",
    "usage": "is.symbol(x)",
    "pkg": "base",
    "desc": "A ‘name’ (also known as a ‘symbol’) is a way to refer to R objects     by name (rather than the value of the object, if any, bound to     that name).     ‘as.name’ and ‘as.symbol’ are identical: they attempt to coerce     the argument to a name.     ‘is.symbol’ and the identical ‘is.name’ return ‘TRUE’ or ‘FALSE’     depending on whether the argument is a name or not."
  },
  {
    "name": "is.table",
    "usage": "is.table(x)",
    "pkg": "base",
    "desc": "‘table’ uses the cross-classifying factors to build a contingency     table of the counts at each combination of factor levels."
  },
  {
    "name": "is.unsorted",
    "usage": "is.unsorted(x, na.rm = FALSE, strictly = FALSE)",
    "pkg": "base",
    "desc": "Test if an object is not sorted (in increasing order), without the     cost of sorting it."
  },
  {
    "name": "is.vector",
    "usage": "is.vector(x, mode = \"any\")",
    "pkg": "base",
    "desc": "‘vector’ produces a vector of the given length and mode.     ‘as.vector’, a generic, attempts to coerce its argument into a     vector of mode ‘mode’ (the default is to coerce to whichever     vector mode is most convenient): if the result is atomic all     attributes are removed.     ‘is.vector’ returns ‘TRUE’ if ‘x’ is a vector of the specified     mode having no attributes _other than names_.  It returns ‘FALSE’     otherwise."
  },
  {
    "name": "isatty",
    "usage": "isatty(con)",
    "pkg": "base",
    "desc": "Display aspects of connections."
  },
  {
    "name": "isdebugged",
    "usage": "isdebugged(fun, signature = NULL)",
    "pkg": "base",
    "desc": "Set, unset or query the debugging flag on a function.  The ‘text’     and ‘condition’ arguments are the same as those that can be     supplied via a call to ‘browser’. They can be retrieved by the     user once the browser has been entered, and provide a mechanism to     allow users to identify which breakpoint has been activated."
  },
  {
    "name": "isIncomplete",
    "usage": "isIncomplete(con)",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "isNamespaceLoaded",
    "usage": "isNamespaceLoaded(name)",
    "pkg": "base",
    "desc": "Functions to load and unload name spaces."
  },
  {
    "name": "ISOdate",
    "usage": "ISOdate(year, month, day, hour = 12, min = 0, sec = 0, tz = \"GMT\")",
    "pkg": "base",
    "desc": "Convenience wrappers to create date-times from numeric     representations."
  },
  {
    "name": "ISOdatetime",
    "usage": "ISOdatetime(year, month, day, hour, min, sec, tz = \"\")",
    "pkg": "base",
    "desc": "Convenience wrappers to create date-times from numeric     representations."
  },
  {
    "name": "isOpen",
    "usage": "isOpen(con, rw = \"\")",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "isRestart",
    "usage": "isRestart(x)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "isS4",
    "usage": "isS4(object)",
    "pkg": "base",
    "desc": "Tests whether the object is an instance of an S4 class."
  },
  {
    "name": "isSeekable",
    "usage": "isSeekable(con)",
    "pkg": "base",
    "desc": "Functions to re-position connections."
  },
  {
    "name": "isSymmetric",
    "usage": "isSymmetric(object, tol = 100 * .Machine$double.eps,",
    "pkg": "base",
    "desc": "Generic function to test if ‘object’ is symmetric or not.     Currently only a matrix method is implemented, where a ‘complex’     matrix ‘Z’ must be “Hermitian” for ‘isSymmetric(Z)’ to be true."
  },
  {
    "name": "isTRUE",
    "usage": "isTRUE(x)",
    "pkg": "base",
    "desc": "These operators act on raw, logical and number-like vectors."
  },
  {
    "name": "jitter",
    "usage": "jitter(x, factor = 1, amount = NULL)",
    "pkg": "base",
    "desc": "Add a small amount of noise to a numeric vector."
  },
  {
    "name": "kappa",
    "usage": ".kappa_tri(z, exact = FALSE, LINPACK = TRUE, norm = NULL, ...)",
    "pkg": "base",
    "desc": "The condition number of a regular (square) matrix is the product     of the _norm_ of the matrix and the norm of its inverse (or     pseudo-inverse), and hence depends on the kind of matrix-norm.     ‘kappa()’ computes by default (an estimate of) the 2-norm     condition number of a matrix or of the R matrix of a QR     decomposition, perhaps of a linear fit.  The 2-norm condition     number can be shown to be the ratio of the largest to the smallest     _non-zero_ singular value of the matrix.     ‘rcond()’ computes an approximation of the *r*eciprocal     *cond*ition number, see the details."
  },
  {
    "name": "kronecker",
    "usage": "kronecker(X, Y, FUN = \"*\", make.dimnames = FALSE, ...)",
    "pkg": "base",
    "desc": "Computes the generalised kronecker product of two arrays, ‘X’ and     ‘Y’."
  },
  {
    "name": "La.svd",
    "usage": "La.svd(x, nu = min(n, p), nv = min(n, p))",
    "pkg": "base",
    "desc": "Compute the singular-value decomposition of a rectangular matrix."
  },
  {
    "name": "labels",
    "usage": "labels(object, ...)",
    "pkg": "base",
    "desc": "Find a suitable set of labels from an object for use in printing     or plotting, for example.  A generic function."
  },
  {
    "name": "lapply",
    "usage": "lapply(X, FUN, ...)",
    "pkg": "base",
    "desc": "‘lapply’ returns a list of the same length as ‘X’, each element of     which is the result of applying ‘FUN’ to the corresponding element     of ‘X’.     ‘sapply’ is a user-friendly version and wrapper of ‘lapply’ by     default returning a vector, matrix or, if ‘simplify = \"array\"’, an     array if appropriate, by applying ‘simplify2array()’.  ‘sapply(x,     f, simplify = FALSE, USE.NAMES = FALSE)’ is the same as ‘lapply(x,     f)’.     ‘vapply’ is similar to ‘sapply’, but has a pre-specified type of     return value, so it can be safer (and sometimes faster) to use.     ‘replicate’ is a wrapper for the common use of ‘sapply’ for     repeated evaluation of an expression (which will usually involve     random number generation).     ‘simplify2array()’ is the utility called from ‘sapply()’ when     ‘simplify’ is not false and is similarly called from ‘mapply()’."
  },
  {
    "name": "lazyLoadDBfetch",
    "usage": "lazyLoadDBfetch(key, file, compressed, hook)",
    "pkg": "base",
    "desc": "Internal objects in the base package most of which are only     user-visible because of the special nature of the base namespace."
  },
  {
    "name": "lbeta",
    "usage": "lbeta(a, b)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "lchoose",
    "usage": "lchoose(n, k)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "length",
    "usage": "length(x) <- value",
    "pkg": "base",
    "desc": "Get or set the length of vectors (including lists) and factors,     and of any other R object for which a method has been defined."
  },
  {
    "name": "lengths",
    "usage": "lengths(x, use.names = TRUE)",
    "pkg": "base",
    "desc": "Get the length of each element of a ‘list’ or atomic vector     (‘is.atomic’) as an integer or numeric vector."
  },
  {
    "name": "levels",
    "usage": "levels(x) <- value",
    "pkg": "base",
    "desc": "‘levels’ provides access to the levels attribute of a variable.     The first form returns the value of the levels of its argument and     the second sets the attribute."
  },
  {
    "name": "lfactorial",
    "usage": "lfactorial(x)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "lgamma",
    "usage": "lgamma(x)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "library",
    "usage": "library(package, help, pos = 2, lib.loc = NULL,",
    "pkg": "base",
    "desc": "‘library’ and ‘require’ load and attach add-on packages."
  },
  {
    "name": "library.dynam",
    "usage": "library.dynam.unload(chname, libpath,",
    "pkg": "base",
    "desc": "Load the specified file of compiled code if it has not been loaded     already, or unloads it."
  },
  {
    "name": "library.dynam.unload",
    "usage": "library.dynam.unload(chname, libpath,",
    "pkg": "base",
    "desc": "Load the specified file of compiled code if it has not been loaded     already, or unloads it."
  },
  {
    "name": "list",
    "usage": "alist(...)",
    "pkg": "base",
    "desc": "Functions to construct, coerce and check for both kinds of R     lists."
  },
  {
    "name": "list.dirs",
    "usage": "list.dirs(path = \".\", full.names = TRUE, recursive = TRUE)",
    "pkg": "base",
    "desc": "These functions produce a character vector of the names of files     or directories in the named directory."
  },
  {
    "name": "list.files",
    "usage": "list.files(path = \".\", pattern = NULL, all.files = FALSE,",
    "pkg": "base",
    "desc": "These functions produce a character vector of the names of files     or directories in the named directory."
  },
  {
    "name": "list2env",
    "usage": "list2env(x, envir = NULL, parent = parent.frame(),",
    "pkg": "base",
    "desc": "From a _named_ ‘list x’, create an ‘environment’ containing all     list components as objects, or “multi-assign” from ‘x’ into a     pre-existing environment."
  },
  {
    "name": "load",
    "usage": "load(file, envir = parent.frame(), verbose = FALSE)",
    "pkg": "base",
    "desc": "Reload datasets written with the function ‘save’."
  },
  {
    "name": "loadedNamespaces",
    "usage": "loadedNamespaces()",
    "pkg": "base",
    "desc": "Functions to load and unload name spaces."
  },
  {
    "name": "loadNamespace",
    "usage": "unloadNamespace(ns)",
    "pkg": "base",
    "desc": "Functions to load and unload name spaces."
  },
  {
    "name": "local",
    "usage": "local(expr, envir = new.env())",
    "pkg": "base",
    "desc": "Evaluate an R expression in a specified environment."
  },
  {
    "name": "lockBinding",
    "usage": "unlockBinding(sym, env)",
    "pkg": "base",
    "desc": "These functions represent an interface for adjustments to     environments and bindings within environments.  They allow for     locking environments as well as individual bindings, and for     linking a variable to a function."
  },
  {
    "name": "lockEnvironment",
    "usage": "lockEnvironment(env, bindings = FALSE)",
    "pkg": "base",
    "desc": "These functions represent an interface for adjustments to     environments and bindings within environments.  They allow for     locking environments as well as individual bindings, and for     linking a variable to a function."
  },
  {
    "name": "logical",
    "usage": "is.logical(x)",
    "pkg": "base",
    "desc": "Create or test for objects of type ‘\"logical\"’, and the basic     logical constants."
  },
  {
    "name": "lower.tri",
    "usage": "lower.tri(x, diag = FALSE)",
    "pkg": "base",
    "desc": "Returns a matrix of logicals the same size of a given matrix with     entries ‘TRUE’ in the lower or upper triangle."
  },
  {
    "name": "ls",
    "usage": "ls(name, pos = -1L, envir = as.environment(pos),",
    "pkg": "base",
    "desc": "‘ls’ and ‘objects’ return a vector of character strings giving the     names of the objects in the specified environment.  When invoked     with no argument at the top level prompt, ‘ls’ shows what data     sets and functions a user has defined.  When invoked with no     argument inside a function, ‘ls’ returns the names of the     function's local variables: this is useful in conjunction with     ‘browser’."
  },
  {
    "name": "make.names",
    "usage": "make.names(names, unique = FALSE, allow_ = TRUE)",
    "pkg": "base",
    "desc": "Make syntactically valid names out of character vectors."
  },
  {
    "name": "make.unique",
    "usage": "make.unique(names, sep = \".\")",
    "pkg": "base",
    "desc": "Makes the elements of a character vector unique by appending     sequence numbers to duplicates."
  },
  {
    "name": "makeActiveBinding",
    "usage": "makeActiveBinding(sym, fun, env)",
    "pkg": "base",
    "desc": "These functions represent an interface for adjustments to     environments and bindings within environments.  They allow for     locking environments as well as individual bindings, and for     linking a variable to a function."
  },
  {
    "name": "Map",
    "usage": "Map(f, ...)",
    "pkg": "base",
    "desc": "‘Reduce’ uses a binary function to successively combine the     elements of a given vector and a possibly given initial value.     ‘Filter’ extracts the elements of a vector for which a predicate     (logical) function gives true.  ‘Find’ and ‘Position’ give the     first or last such element and its position in the vector,     respectively.  ‘Map’ applies a function to the corresponding     elements of given vectors.  ‘Negate’ creates the negation of a     given function."
  },
  {
    "name": "mapply",
    "usage": "mapply(FUN, ..., MoreArgs = NULL, SIMPLIFY = TRUE,",
    "pkg": "base",
    "desc": "‘mapply’ is a multivariate version of ‘sapply’.  ‘mapply’ applies     ‘FUN’ to the first elements of each ...  argument, the second     elements, the third elements, and so on.  Arguments are recycled     if necessary."
  },
  {
    "name": "margin.table",
    "usage": "margin.table(x, margin = NULL)",
    "pkg": "base",
    "desc": "For a contingency table in array form, compute the sum of table     entries for a given index."
  },
  {
    "name": "mat.or.vec",
    "usage": "mat.or.vec(nr, nc)",
    "pkg": "base",
    "desc": "‘mat.or.vec’ creates an ‘nr’ by ‘nc’ zero matrix if ‘nc’ is     greater than 1, and a zero vector of length ‘nr’ if ‘nc’ equals 1."
  },
  {
    "name": "match",
    "usage": "match(x, table, nomatch = NA_integer_, incomparables = NULL)",
    "pkg": "base",
    "desc": "‘match’ returns a vector of the positions of (first) matches of     its first argument in its second.     ‘%in%’ is a more intuitive interface as a binary operator, which     returns a logical vector indicating if there is a match or not for     its left operand."
  },
  {
    "name": "match.arg",
    "usage": "match.arg(arg, choices, several.ok = FALSE)",
    "pkg": "base",
    "desc": "‘match.arg’ matches ‘arg’ against a table of candidate values as     specified by ‘choices’, where ‘NULL’ means to take the first one."
  },
  {
    "name": "match.call",
    "usage": "match.call(definition = sys.function(sys.parent()),",
    "pkg": "base",
    "desc": "‘match.call’ returns a call in which all of the specified     arguments are specified by their full names."
  },
  {
    "name": "match.fun",
    "usage": "match.fun(FUN, descend = TRUE)",
    "pkg": "base",
    "desc": "When called inside functions that take a function as argument,     extract the desired function object while avoiding undesired     matching to objects of other types."
  },
  {
    "name": "matrix",
    "usage": "is.matrix(x)",
    "pkg": "base",
    "desc": "‘matrix’ creates a matrix from the given set of values.     ‘as.matrix’ attempts to turn its argument into a matrix.     ‘is.matrix’ tests if its argument is a (strict) matrix."
  },
  {
    "name": "max",
    "usage": "pmax.int(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "Returns the (regular or *p*arallel) maxima and minima of the input     values.     ‘pmax*()’ and ‘pmin*()’ take one or more vectors as arguments,     recycle them to common length and return a single vector giving     the _‘parallel’_ maxima (or minima) of the argument vectors."
  },
  {
    "name": "max.col",
    "usage": "max.col(m, ties.method = c(\"random\", \"first\", \"last\"))",
    "pkg": "base",
    "desc": "Find the maximum position for each row of a matrix, breaking ties     at random."
  },
  {
    "name": "mean",
    "usage": "mean(x, trim = 0, na.rm = FALSE, ...)",
    "pkg": "base",
    "desc": "Generic function for the (trimmed) arithmetic mean."
  },
  {
    "name": "memCompress",
    "usage": "memCompress(from, type = c(\"gzip\", \"bzip2\", \"xz\", \"none\"))",
    "pkg": "base",
    "desc": "In-memory compression or decompression for raw vectors."
  },
  {
    "name": "memDecompress",
    "usage": "memDecompress(from,",
    "pkg": "base",
    "desc": "In-memory compression or decompression for raw vectors."
  },
  {
    "name": "merge",
    "usage": "merge(x, y, by = intersect(names(x), names(y)),",
    "pkg": "base",
    "desc": "Merge two data frames by common columns or row names, or do other     versions of database _join_ operations."
  },
  {
    "name": "message",
    "usage": "message(..., domain = NULL, appendLF = TRUE)",
    "pkg": "base",
    "desc": "Generate a diagnostic message from its arguments."
  },
  {
    "name": "mget",
    "usage": "mget(x, envir = as.environment(-1), mode = \"any\", ifnotfound,",
    "pkg": "base",
    "desc": "Search by name for an object (‘get’) or zero or more objects     (‘mget’)."
  },
  {
    "name": "min",
    "usage": "pmin.int(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "Returns the (regular or *p*arallel) maxima and minima of the input     values.     ‘pmax*()’ and ‘pmin*()’ take one or more vectors as arguments,     recycle them to common length and return a single vector giving     the _‘parallel’_ maxima (or minima) of the argument vectors."
  },
  {
    "name": "missing",
    "usage": "missing(x)",
    "pkg": "base",
    "desc": "‘missing’ can be used to test whether a value was specified as an     argument to a function."
  },
  {
    "name": "Mod",
    "usage": "Mod(z)",
    "pkg": "base",
    "desc": "Basic functions which support complex arithmetic in R, in addition     to the arithmetic operators ‘+’, ‘-’, ‘*’, ‘/’, and ‘^’."
  },
  {
    "name": "mode",
    "usage": "storage.mode(x) <- value",
    "pkg": "base",
    "desc": "Get or set the type or storage mode of an object."
  },
  {
    "name": "names",
    "usage": "names(x) <- value",
    "pkg": "base",
    "desc": "Functions to get or set the names of an object."
  },
  {
    "name": "nchar",
    "usage": "nchar(x, type = \"chars\", allowNA = FALSE, keepNA = NA)",
    "pkg": "base",
    "desc": "‘nchar’ takes a character vector as an argument and returns a     vector whose elements contain the sizes of the corresponding     elements of ‘x’.     ‘nzchar’ is a fast way to find out if elements of a character     vector are non-empty strings."
  },
  {
    "name": "ncol",
    "usage": "ncol(x)",
    "pkg": "base",
    "desc": "‘nrow’ and ‘ncol’ return the number of rows or columns present in     ‘x’.  ‘NCOL’ and ‘NROW’ do the same treating a vector as 1-column     matrix."
  },
  {
    "name": "NCOL",
    "usage": "NCOL(x)",
    "pkg": "base",
    "desc": "‘nrow’ and ‘ncol’ return the number of rows or columns present in     ‘x’.  ‘NCOL’ and ‘NROW’ do the same treating a vector as 1-column     matrix."
  },
  {
    "name": "Negate",
    "usage": "Negate(f)",
    "pkg": "base",
    "desc": "‘Reduce’ uses a binary function to successively combine the     elements of a given vector and a possibly given initial value.     ‘Filter’ extracts the elements of a vector for which a predicate     (logical) function gives true.  ‘Find’ and ‘Position’ give the     first or last such element and its position in the vector,     respectively.  ‘Map’ applies a function to the corresponding     elements of given vectors.  ‘Negate’ creates the negation of a     given function."
  },
  {
    "name": "new.env",
    "usage": "new.env(hash = TRUE, parent = parent.frame(), size = 29L)",
    "pkg": "base",
    "desc": "Get, set, test for and create environments."
  },
  {
    "name": "next",
    "usage": "next",
    "pkg": "base",
    "desc": "These are the basic control-flow constructs of the R language.     They function in much the same way as control statements in any     Algol-like language.  They are all reserved words."
  },
  {
    "name": "NextMethod",
    "usage": "NextMethod(generic = NULL, object = NULL, ...)",
    "pkg": "base",
    "desc": "R possesses a simple generic function mechanism which can be used     for an object-oriented style of programming.  Method dispatch     takes place based on the class(es) of the first argument to the     generic function or of the object supplied as an argument to     ‘UseMethod’ or ‘NextMethod’."
  },
  {
    "name": "ngettext",
    "usage": "ngettext(n, msg1, msg2, domain = NULL)",
    "pkg": "base",
    "desc": "If Native Language Support was enabled in this build of R, attempt     to translate character vectors or set where the translations are     to be found."
  },
  {
    "name": "nlevels",
    "usage": "nlevels(x)",
    "pkg": "base",
    "desc": "Return the number of levels which its argument has."
  },
  {
    "name": "noquote",
    "usage": "## S3 method for class 'noquote'",
    "pkg": "base",
    "desc": "Print character strings without quotes."
  },
  {
    "name": "norm",
    "usage": "norm(x, type = c(\"O\", \"I\", \"F\", \"M\", \"2\"))",
    "pkg": "base",
    "desc": "Computes a matrix norm of ‘x’ using LAPACK.  The norm can be the     one (‘\"O\"’) norm, the infinity (‘\"I\"’) norm, the Frobenius (‘\"F\"’)     norm, the maximum modulus (‘\"M\"’) among elements of a matrix, or     the “spectral” or ‘\"2\"’-norm, as determined by the value of     ‘type’."
  },
  {
    "name": "normalizePath",
    "usage": "normalizePath(path, winslash = \"\\\\\", mustWork = NA)",
    "pkg": "base",
    "desc": "Convert file paths to canonical form for the platform, to display     them in a user-understandable form and so that relative and     absolute paths can be compared."
  },
  {
    "name": "nrow",
    "usage": "nrow(x)",
    "pkg": "base",
    "desc": "‘nrow’ and ‘ncol’ return the number of rows or columns present in     ‘x’.  ‘NCOL’ and ‘NROW’ do the same treating a vector as 1-column     matrix."
  },
  {
    "name": "NROW",
    "usage": "NROW(x)",
    "pkg": "base",
    "desc": "‘nrow’ and ‘ncol’ return the number of rows or columns present in     ‘x’.  ‘NCOL’ and ‘NROW’ do the same treating a vector as 1-column     matrix."
  },
  {
    "name": "numeric",
    "usage": "is.numeric(x)",
    "pkg": "base",
    "desc": "Creates or coerces objects of type ‘\"numeric\"’.  ‘is.numeric’ is a     more general test of an object being interpretable as numbers."
  },
  {
    "name": "numeric_version",
    "usage": "numeric_version(x, strict = TRUE)",
    "pkg": "base",
    "desc": "A simple S3 class for representing numeric versions including     package versions, and associated methods."
  },
  {
    "name": "nzchar",
    "usage": "nzchar(x, keepNA = FALSE)",
    "pkg": "base",
    "desc": "‘nchar’ takes a character vector as an argument and returns a     vector whose elements contain the sizes of the corresponding     elements of ‘x’.     ‘nzchar’ is a fast way to find out if elements of a character     vector are non-empty strings."
  },
  {
    "name": "objects",
    "usage": "objects(name, pos= -1L, envir = as.environment(pos),",
    "pkg": "base",
    "desc": "‘ls’ and ‘objects’ return a vector of character strings giving the     names of the objects in the specified environment.  When invoked     with no argument at the top level prompt, ‘ls’ shows what data     sets and functions a user has defined.  When invoked with no     argument inside a function, ‘ls’ returns the names of the     function's local variables: this is useful in conjunction with     ‘browser’."
  },
  {
    "name": "oldClass",
    "usage": "oldClass(x) <- value",
    "pkg": "base",
    "desc": "R possesses a simple generic function mechanism which can be used     for an object-oriented style of programming.  Method dispatch     takes place based on the class of the first argument to the     generic function."
  },
  {
    "name": "OlsonNames",
    "usage": "OlsonNames()",
    "pkg": "base",
    "desc": "Information about time zones in R.  ‘Sys.timezone’ returns the     name of the current time zone."
  },
  {
    "name": "on.exit",
    "usage": "on.exit(expr = NULL, add = FALSE)",
    "pkg": "base",
    "desc": "‘on.exit’ records the expression given as its argument as needing     to be executed when the current function exits (either naturally     or as the result of an error).  This is useful for resetting     graphical parameters or performing other cleanup actions.     If no expression is provided, i.e., the call is ‘on.exit()’, then     the current ‘on.exit’ code is removed."
  },
  {
    "name": "open",
    "usage": "open(con, open = \"r\", blocking = TRUE, ...)",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "options",
    "usage": "options(...)",
    "pkg": "base",
    "desc": "Allow the user to set and examine a variety of global _options_     which affect the way in which R computes and displays its results."
  },
  {
    "name": "order",
    "usage": "order(..., na.last = TRUE, decreasing = FALSE,",
    "pkg": "base",
    "desc": "‘order’ returns a permutation which rearranges its first argument     into ascending or descending order, breaking ties by further     arguments. ‘sort.list’ is the same, using only one argument.     See the examples for how to use these functions to sort data     frames, etc."
  },
  {
    "name": "ordered",
    "usage": "as.ordered(x)",
    "pkg": "base",
    "desc": "The function ‘factor’ is used to encode a vector as a factor (the     terms ‘category’ and ‘enumerated type’ are also used for factors).     If argument ‘ordered’ is ‘TRUE’, the factor levels are assumed to     be ordered.  For compatibility with S there is also a function     ‘ordered’.     ‘is.factor’, ‘is.ordered’, ‘as.factor’ and ‘as.ordered’ are the     membership and coercion functions for these classes."
  },
  {
    "name": "outer",
    "usage": "outer(X, Y, FUN = \"*\", ...)",
    "pkg": "base",
    "desc": "The outer product of the arrays ‘X’ and ‘Y’ is the array ‘A’ with     dimension ‘c(dim(X), dim(Y))’ where element ‘A[c(arrayindex.x,     arrayindex.y)] = FUN(X[arrayindex.x], Y[arrayindex.y], ...)’."
  },
  {
    "name": "package_version",
    "usage": "package_version(x, strict = TRUE)",
    "pkg": "base",
    "desc": "A simple S3 class for representing numeric versions including     package versions, and associated methods."
  },
  {
    "name": "packageEvent",
    "usage": "packageEvent(pkgname,",
    "pkg": "base",
    "desc": "These functions allow users to set actions to be taken before     packages are attached/detached and namespaces are (un)loaded."
  },
  {
    "name": "packageStartupMessage",
    "usage": "packageStartupMessage(..., domain = NULL, appendLF = TRUE)",
    "pkg": "base",
    "desc": "Generate a diagnostic message from its arguments."
  },
  {
    "name": "packBits",
    "usage": "packBits(x, type = c(\"raw\", \"integer\"))",
    "pkg": "base",
    "desc": "Conversion and manipulation of objects of type ‘\"raw\"’."
  },
  {
    "name": "pairlist",
    "usage": "is.pairlist(x)",
    "pkg": "base",
    "desc": "Functions to construct, coerce and check for both kinds of R     lists."
  },
  {
    "name": "parent.env",
    "usage": "parent.env(env) <- value",
    "pkg": "base",
    "desc": "Get, set, test for and create environments."
  },
  {
    "name": "parent.frame",
    "usage": "parent.frame(n = 1)",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "parse",
    "usage": "parse(file = \"\", n = NULL, text = NULL, prompt = \"?\",",
    "pkg": "base",
    "desc": "‘parse’ returns the parsed but unevaluated expressions in a list."
  },
  {
    "name": "paste",
    "usage": "paste0(..., collapse = NULL)",
    "pkg": "base",
    "desc": "Concatenate vectors after converting to character."
  },
  {
    "name": "paste0",
    "usage": "paste0(..., collapse = NULL)",
    "pkg": "base",
    "desc": "Concatenate vectors after converting to character."
  },
  {
    "name": "path.expand",
    "usage": "path.expand(path)",
    "pkg": "base",
    "desc": "Expand a path name, for example by replacing a leading tilde by     the user's home directory (if defined on that platform)."
  },
  {
    "name": "path.package",
    "usage": "path.package(package, quiet = FALSE)",
    "pkg": "base",
    "desc": "Find the paths to one or more packages."
  },
  {
    "name": "pipe",
    "usage": "pipe(description, open = \"\", encoding = getOption(\"encoding\"))",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "pmatch",
    "usage": "pmatch(x, table, nomatch = NA_integer_, duplicates.ok = FALSE)",
    "pkg": "base",
    "desc": "‘pmatch’ seeks matches for the elements of its first argument     among those of its second."
  },
  {
    "name": "pmax",
    "usage": "pmax.int(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "Returns the (regular or *p*arallel) maxima and minima of the input     values.     ‘pmax*()’ and ‘pmin*()’ take one or more vectors as arguments,     recycle them to common length and return a single vector giving     the _‘parallel’_ maxima (or minima) of the argument vectors."
  },
  {
    "name": "pmax.int",
    "usage": "pmax.int(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "Returns the (regular or *p*arallel) maxima and minima of the input     values.     ‘pmax*()’ and ‘pmin*()’ take one or more vectors as arguments,     recycle them to common length and return a single vector giving     the _‘parallel’_ maxima (or minima) of the argument vectors."
  },
  {
    "name": "pmin",
    "usage": "pmin.int(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "Returns the (regular or *p*arallel) maxima and minima of the input     values.     ‘pmax*()’ and ‘pmin*()’ take one or more vectors as arguments,     recycle them to common length and return a single vector giving     the _‘parallel’_ maxima (or minima) of the argument vectors."
  },
  {
    "name": "pmin.int",
    "usage": "pmin.int(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "Returns the (regular or *p*arallel) maxima and minima of the input     values.     ‘pmax*()’ and ‘pmin*()’ take one or more vectors as arguments,     recycle them to common length and return a single vector giving     the _‘parallel’_ maxima (or minima) of the argument vectors."
  },
  {
    "name": "polyroot",
    "usage": "polyroot(z)",
    "pkg": "base",
    "desc": "Find zeros of a real or complex polynomial."
  },
  {
    "name": "pos.to.env",
    "usage": "pos.to.env(x)",
    "pkg": "base",
    "desc": "Returns the environment at a specified position in the search     path."
  },
  {
    "name": "Position",
    "usage": "Position(f, x, right = FALSE, nomatch = NA_integer_)",
    "pkg": "base",
    "desc": "‘Reduce’ uses a binary function to successively combine the     elements of a given vector and a possibly given initial value.     ‘Filter’ extracts the elements of a vector for which a predicate     (logical) function gives true.  ‘Find’ and ‘Position’ give the     first or last such element and its position in the vector,     respectively.  ‘Map’ applies a function to the corresponding     elements of given vectors.  ‘Negate’ creates the negation of a     given function."
  },
  {
    "name": "pretty",
    "usage": "pretty(x, n = 5, min.n = n %/% 3,  shrink.sml = 0.75,",
    "pkg": "base",
    "desc": "Compute a sequence of about ‘n+1’ equally spaced ‘round’ values     which cover the range of the values in ‘x’.  The values are chosen     so that they are 1, 2 or 5 times a power of 10."
  },
  {
    "name": "print",
    "usage": "print(x, useSource = TRUE, ...)",
    "pkg": "base",
    "desc": "‘print’ prints its argument and returns it _invisibly_ (via     ‘invisible(x)’).  It is a generic function which means that new     printing methods can be easily added for new ‘class’es."
  },
  {
    "name": "prmatrix",
    "usage": "prmatrix(x, rowlab =, collab =,",
    "pkg": "base",
    "desc": "An earlier method for printing matrices, provided for S     compatibility."
  },
  {
    "name": "prod",
    "usage": "prod(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "‘prod’ returns the product of all the values present in its     arguments."
  },
  {
    "name": "prop.table",
    "usage": "prop.table(x, margin = NULL)",
    "pkg": "base",
    "desc": "This is really ‘sweep(x, margin, margin.table(x, margin), \"/\")’     for newbies, except that if ‘margin’ has length zero, then one     gets ‘x/sum(x)’."
  },
  {
    "name": "provideDimnames",
    "usage": "provideDimnames(x, sep = \"\", base = list(LETTERS), unique = TRUE)",
    "pkg": "base",
    "desc": "Retrieve or set the dimnames of an object."
  },
  {
    "name": "psigamma",
    "usage": "psigamma(x, deriv = 0)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "pushBack",
    "usage": "pushBackLength(connection)",
    "pkg": "base",
    "desc": "Functions to push back text lines onto a connection, and to     enquire how many lines are currently pushed back."
  },
  {
    "name": "pushBackLength",
    "usage": "pushBackLength(connection)",
    "pkg": "base",
    "desc": "Functions to push back text lines onto a connection, and to     enquire how many lines are currently pushed back."
  },
  {
    "name": "q",
    "usage": "q(save = \"default\", status = 0, runLast = TRUE)",
    "pkg": "base",
    "desc": "The function ‘quit’ or its alias ‘q’ terminate the current R     session."
  },
  {
    "name": "qr",
    "usage": "as.qr(x)",
    "pkg": "base",
    "desc": "‘qr’ computes the QR decomposition of a matrix."
  },
  {
    "name": "qr.coef",
    "usage": "qr.coef(qr, y)",
    "pkg": "base",
    "desc": "‘qr’ computes the QR decomposition of a matrix."
  },
  {
    "name": "qr.fitted",
    "usage": "qr.fitted(qr, y, k = qr$rank)",
    "pkg": "base",
    "desc": "‘qr’ computes the QR decomposition of a matrix."
  },
  {
    "name": "qr.qty",
    "usage": "qr.qty(qr, y)",
    "pkg": "base",
    "desc": "‘qr’ computes the QR decomposition of a matrix."
  },
  {
    "name": "qr.qy",
    "usage": "qr.qy(qr, y)",
    "pkg": "base",
    "desc": "‘qr’ computes the QR decomposition of a matrix."
  },
  {
    "name": "qr.resid",
    "usage": "qr.resid(qr, y)",
    "pkg": "base",
    "desc": "‘qr’ computes the QR decomposition of a matrix."
  },
  {
    "name": "qr.solve",
    "usage": "qr.solve(a, b, tol = 1e-7)",
    "pkg": "base",
    "desc": "‘qr’ computes the QR decomposition of a matrix."
  },
  {
    "name": "quit",
    "usage": "quit(save = \"default\", status = 0, runLast = TRUE)",
    "pkg": "base",
    "desc": "The function ‘quit’ or its alias ‘q’ terminate the current R     session."
  },
  {
    "name": "quote",
    "usage": "enquote(cl)",
    "pkg": "base",
    "desc": "‘substitute’ returns the parse tree for the (unevaluated)     expression ‘expr’, substituting any variables bound in ‘env’.     ‘quote’ simply returns its argument. The argument is not evaluated     and can be any R expression.     ‘enquote’ is a simple one-line utility which transforms a call of     the form ‘Foo(....)’ into the call ‘quote(Foo(....))’.  This is     typically used to protect a ‘call’ from early evaluation."
  },
  {
    "name": "R_system_version",
    "usage": "R_system_version(x, strict = TRUE)",
    "pkg": "base",
    "desc": "A simple S3 class for representing numeric versions including     package versions, and associated methods."
  },
  {
    "name": "R.home",
    "usage": "R.home(component = \"home\")",
    "pkg": "base",
    "desc": "Return the R home directory, or the full path to a component of     the R installation."
  },
  {
    "name": "range",
    "usage": "range(..., na.rm = FALSE, finite = FALSE)",
    "pkg": "base",
    "desc": "‘range’ returns a vector containing the minimum and maximum of all     the given arguments."
  },
  {
    "name": "rank",
    "usage": "rank(x, na.last = TRUE,",
    "pkg": "base",
    "desc": "Returns the sample ranks of the values in a vector.  Ties (i.e.,     equal values) and missing values can be handled in several ways."
  },
  {
    "name": "rapply",
    "usage": "rapply(object, f, classes = \"ANY\", deflt = NULL,",
    "pkg": "base",
    "desc": "‘rapply’ is a recursive version of ‘lapply’."
  },
  {
    "name": "raw",
    "usage": "is.raw(x)",
    "pkg": "base",
    "desc": "Creates or tests for objects of type ‘\"raw\"’."
  },
  {
    "name": "rawConnection",
    "usage": "rawConnectionValue(con)",
    "pkg": "base",
    "desc": "Input and output raw connections."
  },
  {
    "name": "rawConnectionValue",
    "usage": "rawConnectionValue(con)",
    "pkg": "base",
    "desc": "Input and output raw connections."
  },
  {
    "name": "rawShift",
    "usage": "rawShift(x, n)",
    "pkg": "base",
    "desc": "Conversion and manipulation of objects of type ‘\"raw\"’."
  },
  {
    "name": "rawToBits",
    "usage": "rawToBits(x)",
    "pkg": "base",
    "desc": "Conversion and manipulation of objects of type ‘\"raw\"’."
  },
  {
    "name": "rawToChar",
    "usage": "rawToChar(x, multiple = FALSE)",
    "pkg": "base",
    "desc": "Conversion and manipulation of objects of type ‘\"raw\"’."
  },
  {
    "name": "rbind",
    "usage": "rbind(..., deparse.level = 1, make.row.names = TRUE,",
    "pkg": "base",
    "desc": "Take a sequence of vector, matrix or data-frame arguments and     combine by _c_olumns or _r_ows, respectively.  These are generic     functions with methods for other R classes."
  },
  {
    "name": "rcond",
    "usage": "rcond(x, norm = c(\"O\",\"I\",\"1\"), triangular = FALSE, ...)",
    "pkg": "base",
    "desc": "The condition number of a regular (square) matrix is the product     of the _norm_ of the matrix and the norm of its inverse (or     pseudo-inverse), and hence depends on the kind of matrix-norm.     ‘kappa()’ computes by default (an estimate of) the 2-norm     condition number of a matrix or of the R matrix of a QR     decomposition, perhaps of a linear fit.  The 2-norm condition     number can be shown to be the ratio of the largest to the smallest     _non-zero_ singular value of the matrix.     ‘rcond()’ computes an approximation of the *r*eciprocal     *cond*ition number, see the details."
  },
  {
    "name": "Re",
    "usage": "Re(z)",
    "pkg": "base",
    "desc": "Basic functions which support complex arithmetic in R, in addition     to the arithmetic operators ‘+’, ‘-’, ‘*’, ‘/’, and ‘^’."
  },
  {
    "name": "read.dcf",
    "usage": "read.dcf(file, fields = NULL, all = FALSE, keep.white = NULL)",
    "pkg": "base",
    "desc": "Reads or writes an R object from/to a file in Debian Control File     format."
  },
  {
    "name": "readBin",
    "usage": "readBin(con, what, n = 1L, size = NA_integer_, signed = TRUE,",
    "pkg": "base",
    "desc": "Read binary data from or write binary data to a connection or raw     vector."
  },
  {
    "name": "readChar",
    "usage": "readChar(con, nchars, useBytes = FALSE)",
    "pkg": "base",
    "desc": "Transfer character strings to and from connections, without     assuming they are null-terminated on the connection."
  },
  {
    "name": "readline",
    "usage": "readline(prompt = \"\")",
    "pkg": "base",
    "desc": "‘readline’ reads a line from the terminal (in interactive use)."
  },
  {
    "name": "readLines",
    "usage": "readLines(con = stdin(), n = -1L, ok = TRUE, warn = TRUE,",
    "pkg": "base",
    "desc": "Read some or all text lines from a connection."
  },
  {
    "name": "readRDS",
    "usage": "readRDS(file, refhook = NULL)",
    "pkg": "base",
    "desc": "Functions to write a single R object to a file, and to restore it."
  },
  {
    "name": "readRenviron",
    "usage": "readRenviron(path)",
    "pkg": "base",
    "desc": "Read as file such as ‘.Renviron’ or ‘Renviron.site’ in the format     described in the help for Startup, and set environment variables     as defined in the file."
  },
  {
    "name": "Recall",
    "usage": "Recall(...)",
    "pkg": "base",
    "desc": "‘Recall’ is used as a placeholder for the name of the function in     which it is called.  It allows the definition of recursive     functions which still work after being renamed, see example below."
  },
  {
    "name": "Reduce",
    "usage": "Reduce(f, x, init, right = FALSE, accumulate = FALSE)",
    "pkg": "base",
    "desc": "‘Reduce’ uses a binary function to successively combine the     elements of a given vector and a possibly given initial value.     ‘Filter’ extracts the elements of a vector for which a predicate     (logical) function gives true.  ‘Find’ and ‘Position’ give the     first or last such element and its position in the vector,     respectively.  ‘Map’ applies a function to the corresponding     elements of given vectors.  ‘Negate’ creates the negation of a     given function."
  },
  {
    "name": "reg.finalizer",
    "usage": "reg.finalizer(e, f, onexit = FALSE)",
    "pkg": "base",
    "desc": "Registers an R function to be called upon garbage collection of     object or (optionally) at the end of an R session."
  },
  {
    "name": "regexec",
    "usage": "regexec(pattern, text, ignore.case = FALSE, perl = FALSE,",
    "pkg": "base",
    "desc": "‘grep’, ‘grepl’, ‘regexpr’, ‘gregexpr’ and ‘regexec’ search for     matches to argument ‘pattern’ within each element of a character     vector: they differ in the format of and amount of detail in the     results.     ‘sub’ and ‘gsub’ perform replacement of the first and all matches     respectively."
  },
  {
    "name": "regexpr",
    "usage": "gregexpr(pattern, text, ignore.case = FALSE, perl = FALSE,",
    "pkg": "base",
    "desc": "‘grep’, ‘grepl’, ‘regexpr’, ‘gregexpr’ and ‘regexec’ search for     matches to argument ‘pattern’ within each element of a character     vector: they differ in the format of and amount of detail in the     results.     ‘sub’ and ‘gsub’ perform replacement of the first and all matches     respectively."
  },
  {
    "name": "regmatches",
    "usage": "regmatches(x, m, invert = FALSE) <- value",
    "pkg": "base",
    "desc": "Extract or replace matched substrings from match data obtained by     ‘regexpr’, ‘gregexpr’ or ‘regexec’."
  },
  {
    "name": "removeTaskCallback",
    "usage": "removeTaskCallback(id)",
    "pkg": "base",
    "desc": "‘addTaskCallback’ registers an R function that is to be called     each time a top-level task is completed.     ‘removeTaskCallback’ un-registers a function that was registered     earlier via ‘addTaskCallback’.     These provide low-level access to the internal/native mechanism     for managing task-completion actions.  One can use     ‘taskCallbackManager’ at the S-language level to manage S     functions that are called at the completion of each task.  This is     easier and more direct."
  },
  {
    "name": "rep",
    "usage": "rep_len(x, length.out)",
    "pkg": "base",
    "desc": "‘rep’ replicates the values in ‘x’.  It is a generic function, and     the (internal) default method is described here.     ‘rep.int’ and ‘rep_len’ are faster simplified versions for two     common cases.  They are not generic."
  },
  {
    "name": "rep_len",
    "usage": "rep_len(x, length.out)",
    "pkg": "base",
    "desc": "‘rep’ replicates the values in ‘x’.  It is a generic function, and     the (internal) default method is described here.     ‘rep.int’ and ‘rep_len’ are faster simplified versions for two     common cases.  They are not generic."
  },
  {
    "name": "rep.int",
    "usage": "rep.int(x, times)",
    "pkg": "base",
    "desc": "‘rep’ replicates the values in ‘x’.  It is a generic function, and     the (internal) default method is described here.     ‘rep.int’ and ‘rep_len’ are faster simplified versions for two     common cases.  They are not generic."
  },
  {
    "name": "repeat",
    "usage": "repeat expr",
    "pkg": "base",
    "desc": "These are the basic control-flow constructs of the R language.     They function in much the same way as control statements in any     Algol-like language.  They are all reserved words."
  },
  {
    "name": "replace",
    "usage": "replace(x, list, values)",
    "pkg": "base",
    "desc": "‘replace’ replaces the values in ‘x’ with indices given in ‘list’     by those given in ‘values’. If necessary, the values in ‘values’     are recycled."
  },
  {
    "name": "replicate",
    "usage": "replicate(n, expr, simplify = \"array\")",
    "pkg": "base",
    "desc": "‘lapply’ returns a list of the same length as ‘X’, each element of     which is the result of applying ‘FUN’ to the corresponding element     of ‘X’.     ‘sapply’ is a user-friendly version and wrapper of ‘lapply’ by     default returning a vector, matrix or, if ‘simplify = \"array\"’, an     array if appropriate, by applying ‘simplify2array()’.  ‘sapply(x,     f, simplify = FALSE, USE.NAMES = FALSE)’ is the same as ‘lapply(x,     f)’.     ‘vapply’ is similar to ‘sapply’, but has a pre-specified type of     return value, so it can be safer (and sometimes faster) to use.     ‘replicate’ is a wrapper for the common use of ‘sapply’ for     repeated evaluation of an expression (which will usually involve     random number generation).     ‘simplify2array()’ is the utility called from ‘sapply()’ when     ‘simplify’ is not false and is similarly called from ‘mapply()’."
  },
  {
    "name": "require",
    "usage": "require(package, lib.loc = NULL, quietly = FALSE,",
    "pkg": "base",
    "desc": "‘library’ and ‘require’ load and attach add-on packages."
  },
  {
    "name": "requireNamespace",
    "usage": "requireNamespace(package, ..., quietly = FALSE)",
    "pkg": "base",
    "desc": "Functions to load and unload name spaces."
  },
  {
    "name": "restartDescription",
    "usage": "restartDescription(r)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "restartFormals",
    "usage": "restartFormals(r)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "retracemem",
    "usage": "retracemem(x, previous = NULL)",
    "pkg": "base",
    "desc": "This function marks an object so that a message is printed     whenever the internal code copies the object.  It is a major cause     of hard-to-predict memory use in R."
  },
  {
    "name": "return",
    "usage": "return(value)",
    "pkg": "base",
    "desc": "These functions provide the base mechanisms for defining new     functions in the R language."
  },
  {
    "name": "returnValue",
    "usage": "returnValue(default = NULL)",
    "pkg": "base",
    "desc": "A call to ‘trace’ allows you to insert debugging code (e.g., a     call to ‘browser’ or ‘recover’) at chosen places in any function.     A call to ‘untrace’ cancels the tracing.  Specified methods can be     traced the same way, without tracing all calls to the generic     function.  Trace code (‘tracer’) can be any R expression.  Tracing     can be temporarily turned on or off globally by calling     ‘tracingState’."
  },
  {
    "name": "rev",
    "usage": "rev(x)",
    "pkg": "base",
    "desc": "‘rev’ provides a reversed version of its argument.  It is generic     function with a default method for vectors and one for     ‘dendrogram’s.     Note that this is no longer needed (nor efficient) for obtaining     vectors sorted into descending order, since that is now rather     more directly achievable by ‘sort(x, decreasing = TRUE)’."
  },
  {
    "name": "rle",
    "usage": "## S3 method for class 'rle'",
    "pkg": "base",
    "desc": "Compute the lengths and values of runs of equal values in a vector     - or the reverse operation."
  },
  {
    "name": "RNGkind",
    "usage": "RNGkind(kind = NULL, normal.kind = NULL)",
    "pkg": "base",
    "desc": "‘.Random.seed’ is an integer vector, containing the random number     generator (RNG) *state* for random number generation in R.  It can     be saved and restored, but should not be altered by the user.     ‘RNGkind’ is a more friendly interface to query or set the kind of     RNG in use.     ‘RNGversion’ can be used to set the random generators as they were     in an earlier R version (for reproducibility).     ‘set.seed’ is the recommended way to specify seeds."
  },
  {
    "name": "RNGversion",
    "usage": "RNGversion(vstr)",
    "pkg": "base",
    "desc": "‘.Random.seed’ is an integer vector, containing the random number     generator (RNG) *state* for random number generation in R.  It can     be saved and restored, but should not be altered by the user.     ‘RNGkind’ is a more friendly interface to query or set the kind of     RNG in use.     ‘RNGversion’ can be used to set the random generators as they were     in an earlier R version (for reproducibility).     ‘set.seed’ is the recommended way to specify seeds."
  },
  {
    "name": "round",
    "usage": "round(x, digits = 0)",
    "pkg": "base",
    "desc": "‘ceiling’ takes a single numeric argument ‘x’ and returns a     numeric vector containing the smallest integers not less than the     corresponding elements of ‘x’.     ‘floor’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the largest integers not greater than the     corresponding elements of ‘x’.     ‘trunc’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the integers formed by truncating the values in     ‘x’ toward ‘0’.     ‘round’ rounds the values in its first argument to the specified     number of decimal places (default 0).     ‘signif’ rounds the values in its first argument to the specified     number of significant digits."
  },
  {
    "name": "row",
    "usage": "row(x, as.factor = FALSE)",
    "pkg": "base",
    "desc": "Returns a matrix of integers indicating their row number in a     matrix-like object, or a factor indicating the row labels."
  },
  {
    "name": "row.names",
    "usage": "row.names(x) <- value",
    "pkg": "base",
    "desc": "All data frames have a row names attribute, a character vector of     length the number of rows with no duplicates nor missing values.     For convenience, these are generic functions for which users can     write other methods, and there are default methods for arrays.     The description here is for the ‘data.frame’ method."
  },
  {
    "name": "rowMeans",
    "usage": ".rowMeans(x, m, n, na.rm = FALSE)",
    "pkg": "base",
    "desc": "Form row and column sums and means for numeric arrays (or data     frames)."
  },
  {
    "name": "rowsum",
    "usage": "rowsum(x, group, reorder = TRUE, na.rm = FALSE, ...)",
    "pkg": "base",
    "desc": "Compute column sums across rows of a numeric matrix-like object     for each level of a grouping variable.  ‘rowsum’ is generic, with     a method for data frames and a default method for vectors and     matrices."
  },
  {
    "name": "rowSums",
    "usage": ".rowSums(x, m, n, na.rm = FALSE)",
    "pkg": "base",
    "desc": "Form row and column sums and means for numeric arrays (or data     frames)."
  },
  {
    "name": "sample",
    "usage": "sample.int(n, size = n, replace = FALSE, prob = NULL,",
    "pkg": "base",
    "desc": "‘sample’ takes a sample of the specified size from the elements of     ‘x’ using either with or without replacement."
  },
  {
    "name": "sample.int",
    "usage": "sample.int(n, size = n, replace = FALSE, prob = NULL,",
    "pkg": "base",
    "desc": "‘sample’ takes a sample of the specified size from the elements of     ‘x’ using either with or without replacement."
  },
  {
    "name": "sapply",
    "usage": "sapply(X, FUN, ..., simplify = TRUE, USE.NAMES = TRUE)",
    "pkg": "base",
    "desc": "‘lapply’ returns a list of the same length as ‘X’, each element of     which is the result of applying ‘FUN’ to the corresponding element     of ‘X’.     ‘sapply’ is a user-friendly version and wrapper of ‘lapply’ by     default returning a vector, matrix or, if ‘simplify = \"array\"’, an     array if appropriate, by applying ‘simplify2array()’.  ‘sapply(x,     f, simplify = FALSE, USE.NAMES = FALSE)’ is the same as ‘lapply(x,     f)’.     ‘vapply’ is similar to ‘sapply’, but has a pre-specified type of     return value, so it can be safer (and sometimes faster) to use.     ‘replicate’ is a wrapper for the common use of ‘sapply’ for     repeated evaluation of an expression (which will usually involve     random number generation).     ‘simplify2array()’ is the utility called from ‘sapply()’ when     ‘simplify’ is not false and is similarly called from ‘mapply()’."
  },
  {
    "name": "save",
    "usage": "save.image(file = \".RData\", version = NULL, ascii = FALSE,",
    "pkg": "base",
    "desc": "‘save’ writes an external representation of R objects to the     specified file.  The objects can be read back from the file at a     later date by using the function ‘load’ or ‘attach’ (or ‘data’ in     some cases).     ‘save.image()’ is just a short-cut for ‘save my current     workspace’, i.e., ‘save(list = ls(all.names = TRUE), file =     \".RData\", envir = .GlobalEnv)’.  It is also what happens with     ‘q(\"yes\")’."
  },
  {
    "name": "save.image",
    "usage": "save.image(file = \".RData\", version = NULL, ascii = FALSE,",
    "pkg": "base",
    "desc": "‘save’ writes an external representation of R objects to the     specified file.  The objects can be read back from the file at a     later date by using the function ‘load’ or ‘attach’ (or ‘data’ in     some cases).     ‘save.image()’ is just a short-cut for ‘save my current     workspace’, i.e., ‘save(list = ls(all.names = TRUE), file =     \".RData\", envir = .GlobalEnv)’.  It is also what happens with     ‘q(\"yes\")’."
  },
  {
    "name": "saveRDS",
    "usage": "saveRDS(object, file = \"\", ascii = FALSE, version = NULL,",
    "pkg": "base",
    "desc": "Functions to write a single R object to a file, and to restore it."
  },
  {
    "name": "scale",
    "usage": "scale(x, center = TRUE, scale = TRUE)",
    "pkg": "base",
    "desc": "‘scale’ is generic function whose default method centers and/or     scales the columns of a numeric matrix."
  },
  {
    "name": "scan",
    "usage": "scan(file = \"\", what = double(), nmax = -1, n = -1, sep = \"\",",
    "pkg": "base",
    "desc": "Read data into a vector or list from the console or file."
  },
  {
    "name": "seek",
    "usage": "seek(con, where = NA, origin = \"start\", rw = \"\", ...)",
    "pkg": "base",
    "desc": "Functions to re-position connections."
  },
  {
    "name": "seq",
    "usage": "seq_len(length.out)",
    "pkg": "base",
    "desc": "Generate regular sequences.  ‘seq’ is a standard generic with a     default method.  ‘seq.int’ is a primitive which can be much faster     but has a few restrictions.  ‘seq_along’ and ‘seq_len’ are very     fast primitives for two common cases."
  },
  {
    "name": "seq_along",
    "usage": "seq_along(along.with)",
    "pkg": "base",
    "desc": "Generate regular sequences.  ‘seq’ is a standard generic with a     default method.  ‘seq.int’ is a primitive which can be much faster     but has a few restrictions.  ‘seq_along’ and ‘seq_len’ are very     fast primitives for two common cases."
  },
  {
    "name": "seq_len",
    "usage": "seq_len(length.out)",
    "pkg": "base",
    "desc": "Generate regular sequences.  ‘seq’ is a standard generic with a     default method.  ‘seq.int’ is a primitive which can be much faster     but has a few restrictions.  ‘seq_along’ and ‘seq_len’ are very     fast primitives for two common cases."
  },
  {
    "name": "seq.int",
    "usage": "seq.int(from, to, by, length.out, along.with, ...)",
    "pkg": "base",
    "desc": "Generate regular sequences.  ‘seq’ is a standard generic with a     default method.  ‘seq.int’ is a primitive which can be much faster     but has a few restrictions.  ‘seq_along’ and ‘seq_len’ are very     fast primitives for two common cases."
  },
  {
    "name": "sequence",
    "usage": "sequence(nvec)",
    "pkg": "base",
    "desc": "For each element of ‘nvec’ the sequence ‘seq_len(nvec[i])’ is     created.  These are concatenated and the result returned."
  },
  {
    "name": "serialize",
    "usage": "unserialize(connection, refhook = NULL)",
    "pkg": "base",
    "desc": "A simple low-level interface for serializing to connections."
  },
  {
    "name": "set.seed",
    "usage": "set.seed(seed, kind = NULL, normal.kind = NULL)",
    "pkg": "base",
    "desc": "‘.Random.seed’ is an integer vector, containing the random number     generator (RNG) *state* for random number generation in R.  It can     be saved and restored, but should not be altered by the user.     ‘RNGkind’ is a more friendly interface to query or set the kind of     RNG in use.     ‘RNGversion’ can be used to set the random generators as they were     in an earlier R version (for reproducibility).     ‘set.seed’ is the recommended way to specify seeds."
  },
  {
    "name": "setdiff",
    "usage": "setdiff(x, y)",
    "pkg": "base",
    "desc": "Performs *set* union, intersection, (asymmetric!) difference,     equality and membership on two vectors."
  },
  {
    "name": "setequal",
    "usage": "setequal(x, y)",
    "pkg": "base",
    "desc": "Performs *set* union, intersection, (asymmetric!) difference,     equality and membership on two vectors."
  },
  {
    "name": "setHook",
    "usage": "setHook(hookName, value,",
    "pkg": "base",
    "desc": "These functions allow users to set actions to be taken before     packages are attached/detached and namespaces are (un)loaded."
  },
  {
    "name": "setSessionTimeLimit",
    "usage": "setSessionTimeLimit(cpu = Inf, elapsed = Inf)",
    "pkg": "base",
    "desc": "Functions to set CPU and/or elapsed time limits for top-level     computations or the current session."
  },
  {
    "name": "setTimeLimit",
    "usage": "setTimeLimit(cpu = Inf, elapsed = Inf, transient = FALSE)",
    "pkg": "base",
    "desc": "Functions to set CPU and/or elapsed time limits for top-level     computations or the current session."
  },
  {
    "name": "setwd",
    "usage": "setwd(dir)",
    "pkg": "base",
    "desc": "‘getwd’ returns an absolute filepath representing the current     working directory of the R process; ‘setwd(dir)’ is used to set     the working directory to ‘dir’."
  },
  {
    "name": "showConnections",
    "usage": "showConnections(all = FALSE)",
    "pkg": "base",
    "desc": "Display aspects of connections."
  },
  {
    "name": "shQuote",
    "usage": "shQuote(string, type = c(\"sh\", \"csh\", \"cmd\", \"cmd2\"))",
    "pkg": "base",
    "desc": "Quote a string to be passed to an operating system shell."
  },
  {
    "name": "sign",
    "usage": "sign(x)",
    "pkg": "base",
    "desc": "‘sign’ returns a vector with the signs of the corresponding     elements of ‘x’ (the sign of a real number is 1, 0, or -1 if the     number is positive, zero, or negative, respectively).     Note that ‘sign’ does not operate on complex vectors."
  },
  {
    "name": "signalCondition",
    "usage": "signalCondition(cond)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "signif",
    "usage": "signif(x, digits = 6)",
    "pkg": "base",
    "desc": "‘ceiling’ takes a single numeric argument ‘x’ and returns a     numeric vector containing the smallest integers not less than the     corresponding elements of ‘x’.     ‘floor’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the largest integers not greater than the     corresponding elements of ‘x’.     ‘trunc’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the integers formed by truncating the values in     ‘x’ toward ‘0’.     ‘round’ rounds the values in its first argument to the specified     number of decimal places (default 0).     ‘signif’ rounds the values in its first argument to the specified     number of significant digits."
  },
  {
    "name": "simpleCondition",
    "usage": "simpleCondition(message, call = NULL)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "simpleError",
    "usage": "simpleError    (message, call = NULL)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "simpleMessage",
    "usage": "simpleMessage  (message, call = NULL)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "simpleWarning",
    "usage": "simpleWarning  (message, call = NULL)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "simplify2array",
    "usage": "simplify2array(x, higher = TRUE)",
    "pkg": "base",
    "desc": "‘lapply’ returns a list of the same length as ‘X’, each element of     which is the result of applying ‘FUN’ to the corresponding element     of ‘X’.     ‘sapply’ is a user-friendly version and wrapper of ‘lapply’ by     default returning a vector, matrix or, if ‘simplify = \"array\"’, an     array if appropriate, by applying ‘simplify2array()’.  ‘sapply(x,     f, simplify = FALSE, USE.NAMES = FALSE)’ is the same as ‘lapply(x,     f)’.     ‘vapply’ is similar to ‘sapply’, but has a pre-specified type of     return value, so it can be safer (and sometimes faster) to use.     ‘replicate’ is a wrapper for the common use of ‘sapply’ for     repeated evaluation of an expression (which will usually involve     random number generation).     ‘simplify2array()’ is the utility called from ‘sapply()’ when     ‘simplify’ is not false and is similarly called from ‘mapply()’."
  },
  {
    "name": "sin",
    "usage": "sinpi(x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "single",
    "usage": "as.single(x, ...)",
    "pkg": "base",
    "desc": "Create, coerce to or test for a double-precision vector."
  },
  {
    "name": "sinh",
    "usage": "asinh(x)",
    "pkg": "base",
    "desc": "These functions give the obvious hyperbolic functions.  They     respectively compute the hyperbolic cosine, sine, tangent, and     their inverses, arc-cosine, arc-sine, arc-tangent (or ‘_area     cosine_’, etc)."
  },
  {
    "name": "sink",
    "usage": "sink.number(type = c(\"output\", \"message\"))",
    "pkg": "base",
    "desc": "‘sink’ diverts R output to a connection (and stops such     diversions).     ‘sink.number()’ reports how many diversions are in use.     ‘sink.number(type = \"message\")’ reports the number of the     connection currently being used for error messages."
  },
  {
    "name": "sink.number",
    "usage": "sink.number(type = c(\"output\", \"message\"))",
    "pkg": "base",
    "desc": "‘sink’ diverts R output to a connection (and stops such     diversions).     ‘sink.number()’ reports how many diversions are in use.     ‘sink.number(type = \"message\")’ reports the number of the     connection currently being used for error messages."
  },
  {
    "name": "sinpi",
    "usage": "sinpi(x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "slice.index",
    "usage": "slice.index(x, MARGIN)",
    "pkg": "base",
    "desc": "Returns a matrix of integers indicating the number of their slice     in a given array."
  },
  {
    "name": "socketConnection",
    "usage": "socketConnection(host = \"localhost\", port, server = FALSE,",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "socketSelect",
    "usage": "socketSelect(socklist, write = FALSE, timeout = NULL)",
    "pkg": "base",
    "desc": "Waits for the first of several socket connections to become     available."
  },
  {
    "name": "solve",
    "usage": "solve(a, b, tol, LINPACK = FALSE, ...)",
    "pkg": "base",
    "desc": "This generic function solves the equation ‘a %*% x = b’ for ‘x’,     where ‘b’ can be either a vector or a matrix."
  },
  {
    "name": "sort",
    "usage": "sort.int(x, partial = NULL, na.last = NA, decreasing = FALSE,",
    "pkg": "base",
    "desc": "Sort (or _order_) a vector or factor (partially) into ascending or     descending order.  For ordering along more than one variable,     e.g., for sorting data frames, see ‘order’."
  },
  {
    "name": "sort.int",
    "usage": "sort.int(x, partial = NULL, na.last = NA, decreasing = FALSE,",
    "pkg": "base",
    "desc": "Sort (or _order_) a vector or factor (partially) into ascending or     descending order.  For ordering along more than one variable,     e.g., for sorting data frames, see ‘order’."
  },
  {
    "name": "sort.list",
    "usage": "sort.list(x, partial = NULL, na.last = TRUE, decreasing = FALSE,",
    "pkg": "base",
    "desc": "‘order’ returns a permutation which rearranges its first argument     into ascending or descending order, breaking ties by further     arguments. ‘sort.list’ is the same, using only one argument.     See the examples for how to use these functions to sort data     frames, etc."
  },
  {
    "name": "source",
    "usage": "skip.echo = 0, keep.source = getOption(\"keep.source\"))",
    "pkg": "base",
    "desc": "‘source’ causes R to accept its input from the named file or URL     or connection or expressions directly.  Input is read and ‘parse’d     from that file until the end of the file is reached, then the     parsed expressions are evaluated sequentially in the chosen     environment.     ‘withAutoprint(exprs)’ is a wrapper for ‘source(exprs = exprs,     ..)’ with different defaults.  Its main purpose is to evaluate and     auto-print expressions as if in a toplevel context, e.g, as in the     R console."
  },
  {
    "name": "split",
    "usage": "unsplit(value, f, drop = FALSE)",
    "pkg": "base",
    "desc": "‘split’ divides the data in the vector ‘x’ into the groups defined     by ‘f’.  The replacement forms replace values corresponding to     such a division.  ‘unsplit’ reverses the effect of ‘split’."
  },
  {
    "name": "sprintf",
    "usage": "sprintf(fmt, ...)",
    "pkg": "base",
    "desc": "A wrapper for the C function ‘sprintf’, that returns a character     vector containing a formatted combination of text and variable     values."
  },
  {
    "name": "sqrt",
    "usage": "sqrt(x)",
    "pkg": "base",
    "desc": "‘abs(x)’ computes the absolute value of x, ‘sqrt(x)’ computes the     (principal) square root of x, sqrt{x}.     The naming follows the standard for computer languages such as C     or Fortran."
  },
  {
    "name": "sQuote",
    "usage": "sQuote(x)",
    "pkg": "base",
    "desc": "Single or double quote text by combining with appropriate single     or double left and right quotation marks."
  },
  {
    "name": "srcfile",
    "usage": ".isOpen(srcfile)",
    "pkg": "base",
    "desc": "These functions are for working with source files and more     generally with “source references” (‘\"srcref\"’), i.e., references     to source code.  The resulting data is used for printing and     source level debugging, and is typically available in interactive     R sessions, namely when ‘options(keep.source = TRUE)’."
  },
  {
    "name": "srcfilealias",
    "usage": "srcfilealias(filename, srcfile)",
    "pkg": "base",
    "desc": "These functions are for working with source files and more     generally with “source references” (‘\"srcref\"’), i.e., references     to source code.  The resulting data is used for printing and     source level debugging, and is typically available in interactive     R sessions, namely when ‘options(keep.source = TRUE)’."
  },
  {
    "name": "srcfilecopy",
    "usage": "srcfilecopy(filename, lines, timestamp = Sys.time(), isFile = FALSE)",
    "pkg": "base",
    "desc": "These functions are for working with source files and more     generally with “source references” (‘\"srcref\"’), i.e., references     to source code.  The resulting data is used for printing and     source level debugging, and is typically available in interactive     R sessions, namely when ‘options(keep.source = TRUE)’."
  },
  {
    "name": "srcref",
    "usage": "## S3 method for class 'srcref'",
    "pkg": "base",
    "desc": "These functions are for working with source files and more     generally with “source references” (‘\"srcref\"’), i.e., references     to source code.  The resulting data is used for printing and     source level debugging, and is typically available in interactive     R sessions, namely when ‘options(keep.source = TRUE)’."
  },
  {
    "name": "standardGeneric",
    "usage": "standardGeneric(f, fdef)",
    "pkg": "base",
    "desc": "The function ‘standardGeneric’ initiates dispatch of S4 methods:     see the references and the documentation of the ‘methods’ package.     Usually, calls to this function are generated automatically and     not explicitly by the programmer."
  },
  {
    "name": "startsWith",
    "usage": "startsWith(x, prefix)",
    "pkg": "base",
    "desc": "Determines if entries of ‘x’ start or end with string (entries of)     ‘prefix’ or ‘suffix’ respectively, where strings are recycled to     common lengths.     ‘startsWith()’ is equivalent to but much faster than          substring(x, 1, nchar(prefix)) == prefix     or also          grepl(\"^<prefix>\", x)     where ‘prefix’ is not to contain special regular expression     characters."
  },
  {
    "name": "stderr",
    "usage": "stderr()",
    "pkg": "base",
    "desc": "Display aspects of connections."
  },
  {
    "name": "stdin",
    "usage": "stdin()",
    "pkg": "base",
    "desc": "Display aspects of connections."
  },
  {
    "name": "stdout",
    "usage": "stdout()",
    "pkg": "base",
    "desc": "Display aspects of connections."
  },
  {
    "name": "stop",
    "usage": "stop(..., call. = TRUE, domain = NULL)",
    "pkg": "base",
    "desc": "‘stop’ stops execution of the current expression and executes an     error action.     ‘geterrmessage’ gives the last error message."
  },
  {
    "name": "stopifnot",
    "usage": "stopifnot(...)",
    "pkg": "base",
    "desc": "If any of the expressions in ‘...’ are not ‘all’ ‘TRUE’, ‘stop’ is     called, producing an error message indicating the _first_ of the     elements of ‘...’ which were not true."
  },
  {
    "name": "storage.mode",
    "usage": "storage.mode(x) <- value",
    "pkg": "base",
    "desc": "Get or set the type or storage mode of an object."
  },
  {
    "name": "strftime",
    "usage": "strftime(x, format = \"\", tz = \"\", usetz = FALSE, ...)",
    "pkg": "base",
    "desc": "Functions to convert between character representations and objects     of classes ‘\"POSIXlt\"’ and ‘\"POSIXct\"’ representing calendar dates     and times."
  },
  {
    "name": "strptime",
    "usage": "strptime(x, format, tz = \"\")",
    "pkg": "base",
    "desc": "Functions to convert between character representations and objects     of classes ‘\"POSIXlt\"’ and ‘\"POSIXct\"’ representing calendar dates     and times."
  },
  {
    "name": "strrep",
    "usage": "strrep(x, times)",
    "pkg": "base",
    "desc": "Repeat the character strings in a character vector a given number     of times (i.e., concatenate the respective numbers of copies of     the strings)."
  },
  {
    "name": "strsplit",
    "usage": "strsplit(x, split, fixed = FALSE, perl = FALSE, useBytes = FALSE)",
    "pkg": "base",
    "desc": "Split the elements of a character vector ‘x’ into substrings     according to the matches to substring ‘split’ within them."
  },
  {
    "name": "strtoi",
    "usage": "strtoi(x, base = 0L)",
    "pkg": "base",
    "desc": "Convert strings to integers according to the given base using the     C function ‘strtol’, or choose a suitable base following the C     rules."
  },
  {
    "name": "strtrim",
    "usage": "strtrim(x, width)",
    "pkg": "base",
    "desc": "Trim character strings to specified display widths."
  },
  {
    "name": "structure",
    "usage": "structure(.Data, ...)",
    "pkg": "base",
    "desc": "‘structure’ returns the given object with further attributes set."
  },
  {
    "name": "strwrap",
    "usage": "strwrap(x, width = 0.9 * getOption(\"width\"), indent = 0,",
    "pkg": "base",
    "desc": "Each character string in the input is first split into paragraphs     (or lines containing whitespace only).  The paragraphs are then     formatted by breaking lines at word boundaries.  The target     columns for wrapping lines and the indentation of the first and     all subsequent lines of a paragraph can be controlled     independently."
  },
  {
    "name": "sub",
    "usage": "gsub(pattern, replacement, x, ignore.case = FALSE, perl = FALSE,",
    "pkg": "base",
    "desc": "‘grep’, ‘grepl’, ‘regexpr’, ‘gregexpr’ and ‘regexec’ search for     matches to argument ‘pattern’ within each element of a character     vector: they differ in the format of and amount of detail in the     results.     ‘sub’ and ‘gsub’ perform replacement of the first and all matches     respectively."
  },
  {
    "name": "subset",
    "usage": "subset(x, subset, select, drop = FALSE, ...)",
    "pkg": "base",
    "desc": "Return subsets of vectors, matrices or data frames which meet     conditions."
  },
  {
    "name": "substitute",
    "usage": "substitute(expr, env)",
    "pkg": "base",
    "desc": "‘substitute’ returns the parse tree for the (unevaluated)     expression ‘expr’, substituting any variables bound in ‘env’.     ‘quote’ simply returns its argument. The argument is not evaluated     and can be any R expression.     ‘enquote’ is a simple one-line utility which transforms a call of     the form ‘Foo(....)’ into the call ‘quote(Foo(....))’.  This is     typically used to protect a ‘call’ from early evaluation."
  },
  {
    "name": "substr",
    "usage": "substring(text, first, last = 1000000L) <- value",
    "pkg": "base",
    "desc": "Extract or replace substrings in a character vector."
  },
  {
    "name": "substring",
    "usage": "substring(text, first, last = 1000000L) <- value",
    "pkg": "base",
    "desc": "Extract or replace substrings in a character vector."
  },
  {
    "name": "sum",
    "usage": "sum(..., na.rm = FALSE)",
    "pkg": "base",
    "desc": "‘sum’ returns the sum of all the values present in its arguments."
  },
  {
    "name": "summary",
    "usage": "## S3 method for class 'summaryDefault'",
    "pkg": "base",
    "desc": "‘summary’ is a generic function used to produce result summaries     of the results of various model fitting functions.  The function     invokes particular ‘methods’ which depend on the ‘class’ of the     first argument."
  },
  {
    "name": "suppressMessages",
    "usage": "suppressMessages(expr)",
    "pkg": "base",
    "desc": "Generate a diagnostic message from its arguments."
  },
  {
    "name": "suppressPackageStartupMessages",
    "usage": "suppressPackageStartupMessages(expr)",
    "pkg": "base",
    "desc": "Generate a diagnostic message from its arguments."
  },
  {
    "name": "suppressWarnings",
    "usage": "suppressWarnings(expr)",
    "pkg": "base",
    "desc": "Generates a warning message that corresponds to its argument(s)     and (optionally) the expression or function from which it was     called."
  },
  {
    "name": "svd",
    "usage": "La.svd(x, nu = min(n, p), nv = min(n, p))",
    "pkg": "base",
    "desc": "Compute the singular-value decomposition of a rectangular matrix."
  },
  {
    "name": "sweep",
    "usage": "sweep(x, MARGIN, STATS, FUN = \"-\", check.margin = TRUE, ...)",
    "pkg": "base",
    "desc": "Return an array obtained from an input array by sweeping out a     summary statistic."
  },
  {
    "name": "switch",
    "usage": "switch(EXPR, ...)",
    "pkg": "base",
    "desc": "‘switch’ evaluates ‘EXPR’ and accordingly chooses one of the     further arguments (in ‘...’)."
  },
  {
    "name": "sys.call",
    "usage": "sys.calls()",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "sys.calls",
    "usage": "sys.calls()",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "Sys.chmod",
    "usage": "Sys.chmod(paths, mode = \"0777\", use_umask = TRUE)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "sys.frame",
    "usage": "sys.frames()",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "sys.frames",
    "usage": "sys.frames()",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "sys.function",
    "usage": "sys.function(which = 0)",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "Sys.getenv",
    "usage": "Sys.getenv(x = NULL, unset = \"\", names = NA)",
    "pkg": "base",
    "desc": "‘Sys.getenv’ obtains the values of the environment variables."
  },
  {
    "name": "Sys.getlocale",
    "usage": "Sys.getlocale(category = \"LC_ALL\")",
    "pkg": "base",
    "desc": "Get details of or set aspects of the locale for the R process."
  },
  {
    "name": "Sys.glob",
    "usage": "Sys.glob(paths, dirmark = FALSE)",
    "pkg": "base",
    "desc": "Function to do wildcard expansion (also known as ‘globbing’) on     file paths."
  },
  {
    "name": "sys.load.image",
    "usage": "sys.load.image(name, quiet)",
    "pkg": "base",
    "desc": "Internal objects in the base package most of which are only     user-visible because of the special nature of the base namespace."
  },
  {
    "name": "sys.nframe",
    "usage": "sys.nframe()",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "sys.on.exit",
    "usage": "sys.on.exit()",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "sys.parent",
    "usage": "sys.parents()",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "sys.parents",
    "usage": "sys.parents()",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "Sys.readlink",
    "usage": "Sys.readlink(paths)",
    "pkg": "base",
    "desc": "Find out if a file path is a symbolic link, and if so what it is     linked to, _via_ the system call ‘readlink’.     Symbolic links are a POSIX concept, not implemented on Windows but     for most filesystems on Unix-alikes."
  },
  {
    "name": "sys.save.image",
    "usage": "sys.save.image(name)",
    "pkg": "base",
    "desc": "Internal objects in the base package most of which are only     user-visible because of the special nature of the base namespace."
  },
  {
    "name": "Sys.setenv",
    "usage": "Sys.setenv(...)",
    "pkg": "base",
    "desc": "‘Sys.setenv’ sets environment variables (for other processes     called from within R or future calls to ‘Sys.getenv’ from this R     process).     ‘Sys.unsetenv’ removes environment variables."
  },
  {
    "name": "Sys.setFileTime",
    "usage": "Sys.setFileTime(path, time)",
    "pkg": "base",
    "desc": "Uses system calls to set the times on a file or directory."
  },
  {
    "name": "Sys.setlocale",
    "usage": "Sys.setlocale(category = \"LC_ALL\", locale = \"\")",
    "pkg": "base",
    "desc": "Get details of or set aspects of the locale for the R process."
  },
  {
    "name": "Sys.sleep",
    "usage": "Sys.sleep(time)",
    "pkg": "base",
    "desc": "Suspend execution of R expressions for a specified time interval."
  },
  {
    "name": "sys.source",
    "usage": "sys.source(file, envir = baseenv(), chdir = FALSE,",
    "pkg": "base",
    "desc": "Parses expressions in the given file, and then successively     evaluates them in the specified environment."
  },
  {
    "name": "sys.status",
    "usage": "sys.status()",
    "pkg": "base",
    "desc": "These functions provide access to ‘environment’s (‘frames’ in S     terminology) associated with functions further up the calling     stack."
  },
  {
    "name": "Sys.timezone",
    "usage": "Sys.timezone(location = TRUE)",
    "pkg": "base",
    "desc": "Information about time zones in R.  ‘Sys.timezone’ returns the     name of the current time zone."
  },
  {
    "name": "Sys.umask",
    "usage": "Sys.umask(mode = NA)",
    "pkg": "base",
    "desc": "These functions provide a low-level interface to the computer's     file system."
  },
  {
    "name": "Sys.unsetenv",
    "usage": "Sys.unsetenv(x)",
    "pkg": "base",
    "desc": "‘Sys.setenv’ sets environment variables (for other processes     called from within R or future calls to ‘Sys.getenv’ from this R     process).     ‘Sys.unsetenv’ removes environment variables."
  },
  {
    "name": "Sys.which",
    "usage": "Sys.which(names)",
    "pkg": "base",
    "desc": "This is an interface to the system command ‘which’, or to an     emulation on Windows."
  },
  {
    "name": "system",
    "usage": "system(command, intern = FALSE,",
    "pkg": "base",
    "desc": "‘system’ invokes the OS command specified by ‘command’."
  },
  {
    "name": "system.file",
    "usage": "system.file(..., package = \"base\", lib.loc = NULL,",
    "pkg": "base",
    "desc": "Finds the full file names of files in packages etc."
  },
  {
    "name": "system.time",
    "usage": "system.time(expr, gcFirst = TRUE)",
    "pkg": "base",
    "desc": "Return CPU (and other) times that ‘expr’ used."
  },
  {
    "name": "system2",
    "usage": "system2(command, args = character(),",
    "pkg": "base",
    "desc": "‘system2’ invokes the OS command specified by ‘command’."
  },
  {
    "name": "t",
    "usage": "t(x)",
    "pkg": "base",
    "desc": "Given a matrix or ‘data.frame’ ‘x’, ‘t’ returns the transpose of     ‘x’."
  },
  {
    "name": "table",
    "usage": "## S3 method for class 'table'",
    "pkg": "base",
    "desc": "‘table’ uses the cross-classifying factors to build a contingency     table of the counts at each combination of factor levels."
  },
  {
    "name": "tabulate",
    "usage": "tabulate(bin, nbins = max(1, bin, na.rm = TRUE))",
    "pkg": "base",
    "desc": "‘tabulate’ takes the integer-valued vector ‘bin’ and counts the     number of times each integer occurs in it."
  },
  {
    "name": "tan",
    "usage": "tanpi(x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "tanh",
    "usage": "atanh(x)",
    "pkg": "base",
    "desc": "These functions give the obvious hyperbolic functions.  They     respectively compute the hyperbolic cosine, sine, tangent, and     their inverses, arc-cosine, arc-sine, arc-tangent (or ‘_area     cosine_’, etc)."
  },
  {
    "name": "tanpi",
    "usage": "tanpi(x)",
    "pkg": "base",
    "desc": "These functions give the obvious trigonometric functions.  They     respectively compute the cosine, sine, tangent, arc-cosine,     arc-sine, arc-tangent, and the two-argument arc-tangent.     ‘cospi(x)’, ‘sinpi(x)’, and ‘tanpi(x)’, compute ‘cos(pi*x)’,     ‘sin(pi*x)’, and ‘tan(pi*x)’."
  },
  {
    "name": "tapply",
    "usage": "tapply(X, INDEX, FUN = NULL, ..., default = NA, simplify = TRUE)",
    "pkg": "base",
    "desc": "Apply a function to each cell of a ragged array, that is to each     (non-empty) group of values given by a unique combination of the     levels of certain factors."
  },
  {
    "name": "taskCallbackManager",
    "usage": "taskCallbackManager(handlers = list(), registered = FALSE,",
    "pkg": "base",
    "desc": "This provides an entirely S-language mechanism for managing     callbacks or actions that are invoked at the conclusion of each     top-level task.  Essentially, we register a single R function from     this manager with the underlying, native task-callback mechanism     and this function handles invoking the other R callbacks under the     control of the manager.  The manager consists of a collection of     functions that access shared variables to manage the list of     user-level callbacks."
  },
  {
    "name": "tcrossprod",
    "usage": "tcrossprod(x, y = NULL)",
    "pkg": "base",
    "desc": "Given matrices ‘x’ and ‘y’ as arguments, return a matrix     cross-product.  This is formally equivalent to (but usually     slightly faster than) the call ‘t(x) %*% y’ (‘crossprod’) or ‘x     %*% t(y)’ (‘tcrossprod’)."
  },
  {
    "name": "tempdir",
    "usage": "tempdir()",
    "pkg": "base",
    "desc": "‘tempfile’ returns a vector of character strings which can be used     as names for temporary files."
  },
  {
    "name": "tempfile",
    "usage": "tempfile(pattern = \"file\", tmpdir = tempdir(), fileext = \"\")",
    "pkg": "base",
    "desc": "‘tempfile’ returns a vector of character strings which can be used     as names for temporary files."
  },
  {
    "name": "testPlatformEquivalence",
    "usage": "testPlatformEquivalence(built, run)",
    "pkg": "base",
    "desc": "Internal objects in the base package most of which are only     user-visible because of the special nature of the base namespace."
  },
  {
    "name": "tolower",
    "usage": "tolower(x)",
    "pkg": "base",
    "desc": "Translate characters in character vectors, in particular from     upper to lower case or vice versa."
  },
  {
    "name": "topenv",
    "usage": "topenv(envir = parent.frame(),",
    "pkg": "base",
    "desc": "Finding the top level ‘environment’ from an environment ‘envir’     and its enclosing environments."
  },
  {
    "name": "toString",
    "usage": "toString(x, width = NULL, ...)",
    "pkg": "base",
    "desc": "This is a helper function for ‘format’ to produce a single     character string describing an R object."
  },
  {
    "name": "toupper",
    "usage": "toupper(x)",
    "pkg": "base",
    "desc": "Translate characters in character vectors, in particular from     upper to lower case or vice versa."
  },
  {
    "name": "trace",
    "usage": "untrace(what, signature = NULL, where = topenv(parent.frame()))",
    "pkg": "base",
    "desc": "A call to ‘trace’ allows you to insert debugging code (e.g., a     call to ‘browser’ or ‘recover’) at chosen places in any function.     A call to ‘untrace’ cancels the tracing.  Specified methods can be     traced the same way, without tracing all calls to the generic     function.  Trace code (‘tracer’) can be any R expression.  Tracing     can be temporarily turned on or off globally by calling     ‘tracingState’."
  },
  {
    "name": "traceback",
    "usage": ".traceback(x = NULL)",
    "pkg": "base",
    "desc": "By default ‘traceback()’ prints the call stack of the last     uncaught error, i.e., the sequence of calls that lead to the     error.  This is useful when an error occurs with an unidentifiable     error message.  It can also be used to print the current stack or     arbitrary lists of deparsed calls.     ‘.traceback()’ now _returns_ the above call stack (and     ‘traceback(x, *)’ can be regarded as convenience function for     printing the result of ‘.traceback(x)’)."
  },
  {
    "name": "tracemem",
    "usage": "retracemem(x, previous = NULL)",
    "pkg": "base",
    "desc": "This function marks an object so that a message is printed     whenever the internal code copies the object.  It is a major cause     of hard-to-predict memory use in R."
  },
  {
    "name": "tracingState",
    "usage": "tracingState(on = NULL)",
    "pkg": "base",
    "desc": "A call to ‘trace’ allows you to insert debugging code (e.g., a     call to ‘browser’ or ‘recover’) at chosen places in any function.     A call to ‘untrace’ cancels the tracing.  Specified methods can be     traced the same way, without tracing all calls to the generic     function.  Trace code (‘tracer’) can be any R expression.  Tracing     can be temporarily turned on or off globally by calling     ‘tracingState’."
  },
  {
    "name": "transform",
    "usage": "transform(`_data`, ...)",
    "pkg": "base",
    "desc": "‘transform’ is a generic function, which-at least currently-only     does anything useful with data frames.  ‘transform.default’     converts its first argument to a data frame if possible and calls     ‘transform.data.frame’."
  },
  {
    "name": "trigamma",
    "usage": "trigamma(x)",
    "pkg": "base",
    "desc": "Special mathematical functions related to the beta and gamma     functions."
  },
  {
    "name": "trimws",
    "usage": "trimws(x, which = c(\"both\", \"left\", \"right\"))",
    "pkg": "base",
    "desc": "Remove leading and/or trailing whitespace from character strings."
  },
  {
    "name": "trunc",
    "usage": "trunc(x, ...)",
    "pkg": "base",
    "desc": "‘ceiling’ takes a single numeric argument ‘x’ and returns a     numeric vector containing the smallest integers not less than the     corresponding elements of ‘x’.     ‘floor’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the largest integers not greater than the     corresponding elements of ‘x’.     ‘trunc’ takes a single numeric argument ‘x’ and returns a numeric     vector containing the integers formed by truncating the values in     ‘x’ toward ‘0’.     ‘round’ rounds the values in its first argument to the specified     number of decimal places (default 0).     ‘signif’ rounds the values in its first argument to the specified     number of significant digits."
  },
  {
    "name": "truncate",
    "usage": "truncate(con, ...)",
    "pkg": "base",
    "desc": "Functions to re-position connections."
  },
  {
    "name": "try",
    "usage": "outFile = getOption(\"try.outFile\", default = stderr()))",
    "pkg": "base",
    "desc": "‘try’ is a wrapper to run an expression that might fail and allow     the user's code to handle error-recovery."
  },
  {
    "name": "tryCatch",
    "usage": "tryCatch(expr, ..., finally)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "typeof",
    "usage": "typeof(x)",
    "pkg": "base",
    "desc": "‘typeof’ determines the (R internal) type or storage mode of any     object"
  },
  {
    "name": "unclass",
    "usage": "unclass(x)",
    "pkg": "base",
    "desc": "R possesses a simple generic function mechanism which can be used     for an object-oriented style of programming.  Method dispatch     takes place based on the class of the first argument to the     generic function."
  },
  {
    "name": "undebug",
    "usage": "undebug(fun, signature = NULL)",
    "pkg": "base",
    "desc": "Set, unset or query the debugging flag on a function.  The ‘text’     and ‘condition’ arguments are the same as those that can be     supplied via a call to ‘browser’. They can be retrieved by the     user once the browser has been entered, and provide a mechanism to     allow users to identify which breakpoint has been activated."
  },
  {
    "name": "union",
    "usage": "union(x, y)",
    "pkg": "base",
    "desc": "Performs *set* union, intersection, (asymmetric!) difference,     equality and membership on two vectors."
  },
  {
    "name": "unique",
    "usage": "unique(x, incomparables = FALSE, MARGIN = 1,",
    "pkg": "base",
    "desc": "‘unique’ returns a vector, data frame or array like ‘x’ but with     duplicate elements/rows removed."
  },
  {
    "name": "units",
    "usage": "as.double(x, units = \"auto\", ...)",
    "pkg": "base",
    "desc": "Time intervals creation, printing, and some arithmetic.  The     ‘print()’ method calls these “time differences”."
  },
  {
    "name": "unlink",
    "usage": "unlink(x, recursive = FALSE, force = FALSE)",
    "pkg": "base",
    "desc": "‘unlink’ deletes the file(s) or directories specified by ‘x’."
  },
  {
    "name": "unlist",
    "usage": "unlist(x, recursive = TRUE, use.names = TRUE)",
    "pkg": "base",
    "desc": "Given a list structure ‘x’, ‘unlist’ simplifies it to produce a     vector which contains all the atomic components which occur in     ‘x’."
  },
  {
    "name": "unloadNamespace",
    "usage": "unloadNamespace(ns)",
    "pkg": "base",
    "desc": "Functions to load and unload name spaces."
  },
  {
    "name": "unlockBinding",
    "usage": "unlockBinding(sym, env)",
    "pkg": "base",
    "desc": "These functions represent an interface for adjustments to     environments and bindings within environments.  They allow for     locking environments as well as individual bindings, and for     linking a variable to a function."
  },
  {
    "name": "unname",
    "usage": "unname(obj, force = FALSE)",
    "pkg": "base",
    "desc": "Remove the ‘names’ or ‘dimnames’ attribute of an R object."
  },
  {
    "name": "unserialize",
    "usage": "unserialize(connection, refhook = NULL)",
    "pkg": "base",
    "desc": "A simple low-level interface for serializing to connections."
  },
  {
    "name": "unsplit",
    "usage": "unsplit(value, f, drop = FALSE)",
    "pkg": "base",
    "desc": "‘split’ divides the data in the vector ‘x’ into the groups defined     by ‘f’.  The replacement forms replace values corresponding to     such a division.  ‘unsplit’ reverses the effect of ‘split’."
  },
  {
    "name": "untrace",
    "usage": "untrace(what, signature = NULL, where = topenv(parent.frame()))",
    "pkg": "base",
    "desc": "A call to ‘trace’ allows you to insert debugging code (e.g., a     call to ‘browser’ or ‘recover’) at chosen places in any function.     A call to ‘untrace’ cancels the tracing.  Specified methods can be     traced the same way, without tracing all calls to the generic     function.  Trace code (‘tracer’) can be any R expression.  Tracing     can be temporarily turned on or off globally by calling     ‘tracingState’."
  },
  {
    "name": "untracemem",
    "usage": "untracemem(x)",
    "pkg": "base",
    "desc": "This function marks an object so that a message is printed     whenever the internal code copies the object.  It is a major cause     of hard-to-predict memory use in R."
  },
  {
    "name": "unz",
    "usage": "unz(description, filename, open = \"\", encoding = getOption(\"encoding\"))",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "upper.tri",
    "usage": "upper.tri(x, diag = FALSE)",
    "pkg": "base",
    "desc": "Returns a matrix of logicals the same size of a given matrix with     entries ‘TRUE’ in the lower or upper triangle."
  },
  {
    "name": "url",
    "usage": "method = getOption(\"url.method\", \"default\"))",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "UseMethod",
    "usage": "UseMethod(generic, object)",
    "pkg": "base",
    "desc": "R possesses a simple generic function mechanism which can be used     for an object-oriented style of programming.  Method dispatch     takes place based on the class(es) of the first argument to the     generic function or of the object supplied as an argument to     ‘UseMethod’ or ‘NextMethod’."
  },
  {
    "name": "utf8ToInt",
    "usage": "utf8ToInt(x)",
    "pkg": "base",
    "desc": "Conversion of UTF-8 encoded character vectors to and from integer     vectors."
  },
  {
    "name": "validEnc",
    "usage": "validEnc(x)",
    "pkg": "base",
    "desc": "Check if each element of a character vector is valid in its     implied encoding."
  },
  {
    "name": "validUTF8",
    "usage": "validUTF8(x)",
    "pkg": "base",
    "desc": "Check if each element of a character vector is valid in its     implied encoding."
  },
  {
    "name": "vapply",
    "usage": "vapply(X, FUN, FUN.VALUE, ..., USE.NAMES = TRUE)",
    "pkg": "base",
    "desc": "‘lapply’ returns a list of the same length as ‘X’, each element of     which is the result of applying ‘FUN’ to the corresponding element     of ‘X’.     ‘sapply’ is a user-friendly version and wrapper of ‘lapply’ by     default returning a vector, matrix or, if ‘simplify = \"array\"’, an     array if appropriate, by applying ‘simplify2array()’.  ‘sapply(x,     f, simplify = FALSE, USE.NAMES = FALSE)’ is the same as ‘lapply(x,     f)’.     ‘vapply’ is similar to ‘sapply’, but has a pre-specified type of     return value, so it can be safer (and sometimes faster) to use.     ‘replicate’ is a wrapper for the common use of ‘sapply’ for     repeated evaluation of an expression (which will usually involve     random number generation).     ‘simplify2array()’ is the utility called from ‘sapply()’ when     ‘simplify’ is not false and is similarly called from ‘mapply()’."
  },
  {
    "name": "vector",
    "usage": "is.vector(x, mode = \"any\")",
    "pkg": "base",
    "desc": "‘vector’ produces a vector of the given length and mode.     ‘as.vector’, a generic, attempts to coerce its argument into a     vector of mode ‘mode’ (the default is to coerce to whichever     vector mode is most convenient): if the result is atomic all     attributes are removed.     ‘is.vector’ returns ‘TRUE’ if ‘x’ is a vector of the specified     mode having no attributes _other than names_.  It returns ‘FALSE’     otherwise."
  },
  {
    "name": "Vectorize",
    "usage": "Vectorize(FUN, vectorize.args = arg.names, SIMPLIFY = TRUE,",
    "pkg": "base",
    "desc": "‘Vectorize’ creates a function wrapper that vectorizes the action     of its argument ‘FUN’."
  },
  {
    "name": "warning",
    "usage": "warning(..., call. = TRUE, immediate. = FALSE, noBreaks. = FALSE,",
    "pkg": "base",
    "desc": "Generates a warning message that corresponds to its argument(s)     and (optionally) the expression or function from which it was     called."
  },
  {
    "name": "warnings",
    "usage": "warnings(...)",
    "pkg": "base",
    "desc": "‘warnings’ and its ‘print’ method print the variable     ‘last.warning’ in a pleasing form."
  },
  {
    "name": "which",
    "usage": "which(x, arr.ind = FALSE, useNames = TRUE)",
    "pkg": "base",
    "desc": "Give the ‘TRUE’ indices of a logical object, allowing for array     indices."
  },
  {
    "name": "which.max",
    "usage": "which.max(x)",
    "pkg": "base",
    "desc": "Determines the location, i.e., index of the (first) minimum or     maximum of a numeric (or logical) vector."
  },
  {
    "name": "which.min",
    "usage": "which.min(x)",
    "pkg": "base",
    "desc": "Determines the location, i.e., index of the (first) minimum or     maximum of a numeric (or logical) vector."
  },
  {
    "name": "while",
    "usage": "while(cond) expr",
    "pkg": "base",
    "desc": "These are the basic control-flow constructs of the R language.     They function in much the same way as control statements in any     Algol-like language.  They are all reserved words."
  },
  {
    "name": "with",
    "usage": "within(data, expr, ...)",
    "pkg": "base",
    "desc": "Evaluate an R expression in an environment constructed from data,     possibly modifying (a copy of) the original data."
  },
  {
    "name": "withAutoprint",
    "usage": "withAutoprint(exprs, evaluated = FALSE, local = parent.frame(),",
    "pkg": "base",
    "desc": "‘source’ causes R to accept its input from the named file or URL     or connection or expressions directly.  Input is read and ‘parse’d     from that file until the end of the file is reached, then the     parsed expressions are evaluated sequentially in the chosen     environment.     ‘withAutoprint(exprs)’ is a wrapper for ‘source(exprs = exprs,     ..)’ with different defaults.  Its main purpose is to evaluate and     auto-print expressions as if in a toplevel context, e.g, as in the     R console."
  },
  {
    "name": "withCallingHandlers",
    "usage": "withCallingHandlers(expr, ...)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "within",
    "usage": "within(data, expr, ...)",
    "pkg": "base",
    "desc": "Evaluate an R expression in an environment constructed from data,     possibly modifying (a copy of) the original data."
  },
  {
    "name": "withRestarts",
    "usage": "withRestarts(expr, ...)",
    "pkg": "base",
    "desc": "These functions provide a mechanism for handling unusual     conditions, including errors and warnings."
  },
  {
    "name": "withVisible",
    "usage": "withVisible(x)",
    "pkg": "base",
    "desc": "This function evaluates an expression, returning it in a two     element list containing its value and a flag showing whether it     would automatically print."
  },
  {
    "name": "write",
    "usage": "write(x, file = \"data\",",
    "pkg": "base",
    "desc": "The data (usually a matrix) ‘x’ are written to file ‘file’.  If     ‘x’ is a two-dimensional matrix you need to transpose it to get     the columns in ‘file’ the same as those in the internal     representation."
  },
  {
    "name": "write.dcf",
    "usage": "write.dcf(x, file = \"\", append = FALSE,",
    "pkg": "base",
    "desc": "Reads or writes an R object from/to a file in Debian Control File     format."
  },
  {
    "name": "writeBin",
    "usage": "writeBin(object, con, size = NA_integer_,",
    "pkg": "base",
    "desc": "Read binary data from or write binary data to a connection or raw     vector."
  },
  {
    "name": "writeChar",
    "usage": "writeChar(object, con, nchars = nchar(object, type = \"chars\"),",
    "pkg": "base",
    "desc": "Transfer character strings to and from connections, without     assuming they are null-terminated on the connection."
  },
  {
    "name": "writeLines",
    "usage": "writeLines(text, con = stdout(), sep = \"\\n\", useBytes = FALSE)",
    "pkg": "base",
    "desc": "Write text lines to a connection."
  },
  {
    "name": "xor",
    "usage": "xor(x, y)",
    "pkg": "base",
    "desc": "These operators act on raw, logical and number-like vectors."
  },
  {
    "name": "xpdrows.data.frame",
    "usage": "xpdrows.data.frame(x, old.rows, new.rows)",
    "pkg": "base",
    "desc": "Internal auxiliary functions for use with data frames."
  },
  {
    "name": "xtfrm",
    "usage": "xtfrm(x)",
    "pkg": "base",
    "desc": "A generic auxiliary function that produces a numeric vector which     will sort in the same order as ‘x’."
  },
  {
    "name": "xzfile",
    "usage": "xzfile(description, open = \"\", encoding = getOption(\"encoding\"),",
    "pkg": "base",
    "desc": "Functions to create, open and close connections, i.e.,     “generalized files”, such as possibly compressed files, URLs,     pipes, etc."
  },
  {
    "name": "zapsmall",
    "usage": "zapsmall(x, digits = getOption(\"digits\"))",
    "pkg": "base",
    "desc": "‘zapsmall’ determines a ‘digits’ argument ‘dr’ for calling     ‘round(x, digits = dr)’ such that values close to zero (compared     with the maximal absolute value) are ‘zapped’, i.e., treated as     ‘0’."
  },
  {
    "name": "acf",
    "usage": "## S3 method for class 'acf'",
    "pkg": "stats",
    "desc": "The function ‘acf’ computes (and by default plots) estimates of     the autocovariance or autocorrelation function.  Function ‘pacf’     is the function used for the partial autocorrelations.  Function     ‘ccf’ computes the cross-correlation or cross-covariance of two     univariate series."
  },
  {
    "name": "acf2AR",
    "usage": "acf2AR(acf)",
    "pkg": "stats",
    "desc": "Compute an AR process exactly fitting an autocorrelation function."
  },
  {
    "name": "add.scope",
    "usage": "add.scope(terms1, terms2)",
    "pkg": "stats",
    "desc": "‘add.scope’ and ‘drop.scope’ compute those terms that can be     individually added to or dropped from a model while respecting the     hierarchy of terms."
  },
  {
    "name": "add1",
    "usage": "add1(object, scope, scale = 0,",
    "pkg": "stats",
    "desc": "Compute all the single terms in the ‘scope’ argument that can be     added to or dropped from the model, fit those models and compute a     table of the changes in fit."
  },
  {
    "name": "addmargins",
    "usage": "addmargins(A, margin = seq_along(dim(A)), FUN = sum, quiet = FALSE)",
    "pkg": "stats",
    "desc": "For a given table one can specify which of the classifying factors     to expand by one or more levels to hold margins to be calculated.     One may for example form sums and means over the first dimension     and medians over the second.  The resulting table will then have     two extra levels for the first dimension and one extra level for     the second.  The default is to sum over all margins in the table.     Other possibilities may give results that depend on the order in     which the margins are computed.  This is flagged in the printed     output from the function."
  },
  {
    "name": "aggregate",
    "usage": "aggregate(x, nfrequency = 1, FUN = sum, ndeltat = 1,",
    "pkg": "stats",
    "desc": "Splits the data into subsets, computes summary statistics for     each, and returns the result in a convenient form."
  },
  {
    "name": "AIC",
    "usage": "AIC(object, ..., k = 2)",
    "pkg": "stats",
    "desc": "Generic function calculating Akaike's ‘An Information Criterion’     for one or several fitted model objects for which a log-likelihood     value can be obtained, according to the formula -2*log-likelihood     + k*npar, where npar represents the number of parameters in the     fitted model, and k = 2 for the usual AIC, or k = log(n) (n being     the number of observations) for the so-called BIC or SBC     (Schwarz's Bayesian criterion)."
  },
  {
    "name": "alias",
    "usage": "alias(object, complete = TRUE, partial = FALSE,",
    "pkg": "stats",
    "desc": "Find aliases (linearly dependent terms) in a linear model     specified by a formula."
  },
  {
    "name": "anova",
    "usage": "anova(object, ...)",
    "pkg": "stats",
    "desc": "Compute analysis of variance (or deviance) tables for one or more     fitted model objects."
  },
  {
    "name": "ansari.test",
    "usage": "ansari.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs the Ansari-Bradley two-sample test for a difference in     scale parameters."
  },
  {
    "name": "aov",
    "usage": "aov(formula, data = NULL, projections = FALSE, qr = TRUE,",
    "pkg": "stats",
    "desc": "Fit an analysis of variance model by a call to ‘lm’ for each     stratum."
  },
  {
    "name": "approx",
    "usage": "approxfun(x, y = NULL,       method = \"linear\",",
    "pkg": "stats",
    "desc": "Return a list of points which linearly interpolate given data     points, or a function performing the linear (or constant)     interpolation."
  },
  {
    "name": "approxfun",
    "usage": "approxfun(x, y = NULL,       method = \"linear\",",
    "pkg": "stats",
    "desc": "Return a list of points which linearly interpolate given data     points, or a function performing the linear (or constant)     interpolation."
  },
  {
    "name": "ar",
    "usage": "## S3 method for class 'ar'",
    "pkg": "stats",
    "desc": "Fit an autoregressive time series model to the data, by default     selecting the complexity by AIC."
  },
  {
    "name": "ar.burg",
    "usage": "ar.burg(x, aic = TRUE, order.max = NULL,",
    "pkg": "stats",
    "desc": "Fit an autoregressive time series model to the data, by default     selecting the complexity by AIC."
  },
  {
    "name": "ar.mle",
    "usage": "ar.mle(x, aic = TRUE, order.max = NULL, na.action = na.fail,",
    "pkg": "stats",
    "desc": "Fit an autoregressive time series model to the data, by default     selecting the complexity by AIC."
  },
  {
    "name": "ar.ols",
    "usage": "ar.ols(x, aic = TRUE, order.max = NULL, na.action = na.fail,",
    "pkg": "stats",
    "desc": "Fit an autoregressive time series model to the data by ordinary     least squares, by default selecting the complexity by AIC."
  },
  {
    "name": "ar.yw",
    "usage": "ar.yw(x, aic = TRUE, order.max = NULL,",
    "pkg": "stats",
    "desc": "Fit an autoregressive time series model to the data, by default     selecting the complexity by AIC."
  },
  {
    "name": "arima",
    "usage": "arima(x, order = c(0L, 0L, 0L),",
    "pkg": "stats",
    "desc": "Fit an ARIMA model to a univariate time series."
  },
  {
    "name": "arima.sim",
    "usage": "arima.sim(model, n, rand.gen = rnorm, innov = rand.gen(n, ...),",
    "pkg": "stats",
    "desc": "Simulate from an ARIMA model."
  },
  {
    "name": "arima0",
    "usage": "## S3 method for class 'arima0'",
    "pkg": "stats",
    "desc": "Fit an ARIMA model to a univariate time series, and forecast from     the fitted model."
  },
  {
    "name": "ARMAacf",
    "usage": "ARMAacf(ar = numeric(), ma = numeric(), lag.max = r, pacf = FALSE)",
    "pkg": "stats",
    "desc": "Compute the theoretical autocorrelation function or partial     autocorrelation function for an ARMA process."
  },
  {
    "name": "ARMAtoMA",
    "usage": "ARMAtoMA(ar = numeric(), ma = numeric(), lag.max)",
    "pkg": "stats",
    "desc": "Convert ARMA process to infinite MA process."
  },
  {
    "name": "as.dendrogram",
    "usage": "as.dendrogram(object, hang = -1, check = TRUE, ...)",
    "pkg": "stats",
    "desc": "Class ‘\"dendrogram\"’ provides general functions for handling     tree-like structures.  It is intended as a replacement for similar     functions in hierarchical clustering and classification/regression     trees, such that all of these can use the same engine for plotting     or cutting trees."
  },
  {
    "name": "as.dist",
    "usage": "as.dist(m, diag = FALSE, upper = FALSE)",
    "pkg": "stats",
    "desc": "This function computes and returns the distance matrix computed by     using the specified distance measure to compute the distances     between the rows of a data matrix."
  },
  {
    "name": "as.formula",
    "usage": "as.formula(object, env = parent.frame())",
    "pkg": "stats",
    "desc": "The generic function ‘formula’ and its specific methods provide a     way of extracting formulae which have been included in other     objects.     ‘as.formula’ is almost identical, additionally preserving     attributes when ‘object’ already inherits from ‘\"formula\"’."
  },
  {
    "name": "as.hclust",
    "usage": "as.hclust(x, ...)",
    "pkg": "stats",
    "desc": "Converts objects from other hierarchical clustering functions to     class ‘\"hclust\"’."
  },
  {
    "name": "as.stepfun",
    "usage": "as.stepfun(x, ...)",
    "pkg": "stats",
    "desc": "Given the vectors (x[1], ..., x[n]) and (y[0], y[1], ..., y[n])     (one value more!), ‘stepfun(x, y, ...)’ returns an interpolating     ‘step’ function, say ‘fn’. I.e., fn(t) = c[i] (constant) for t in     ( x[i], x[i+1]) and at the abscissa values, if (by default) ‘right     = FALSE’, fn(x[i]) = y[i] and for ‘right = TRUE’, fn(x[i]) =     y[i-1], for i=1, ..., n.     The value of the constant c[i] above depends on the ‘continuity’     parameter ‘f’.  For the default, ‘right = FALSE, f = 0’, ‘fn’ is a     _cadlag_ function, i.e., continuous from the right, limits from     the left, so that the function is piecewise constant on intervals     that include their _left_ endpoint.  In general, c[i] is     interpolated in between the neighbouring y values, c[i] =     (1-f)*y[i] + f*y[i+1].  Therefore, for non-0 values of ‘f’, ‘fn’     may no longer be a proper step function, since it can be     discontinuous from both sides, unless ‘right = TRUE, f = 1’ which     is left-continuous (i.e., constant pieces contain their right     endpoint)."
  },
  {
    "name": "as.ts",
    "usage": "as.ts(x, ...)",
    "pkg": "stats",
    "desc": "The function ‘ts’ is used to create time-series objects.     ‘as.ts’ and ‘is.ts’ coerce an object to a time-series and test     whether an object is a time series."
  },
  {
    "name": "asOneSidedFormula",
    "usage": "asOneSidedFormula(object)",
    "pkg": "stats",
    "desc": "Names, expressions, numeric values, and character strings are     converted to one-sided formulae. If ‘object’ is a formula, it must     be one-sided, in which case it is returned unaltered."
  },
  {
    "name": "ave",
    "usage": "ave(x, ..., FUN = mean)",
    "pkg": "stats",
    "desc": "Subsets of ‘x[]’ are averaged, where each subset consist of those     observations with the same factor levels."
  },
  {
    "name": "bandwidth.kernel",
    "usage": "bandwidth.kernel(k)",
    "pkg": "stats",
    "desc": "The ‘\"tskernel\"’ class is designed to represent discrete symmetric     normalized smoothing kernels.  These kernels can be used to smooth     vectors, matrices, or time series objects.     There are ‘print’, ‘plot’ and ‘[’ methods for these kernel     objects."
  },
  {
    "name": "bartlett.test",
    "usage": "bartlett.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs Bartlett's test of the null that the variances in each of     the groups (samples) are the same."
  },
  {
    "name": "BIC",
    "usage": "BIC(object, ...)",
    "pkg": "stats",
    "desc": "Generic function calculating Akaike's ‘An Information Criterion’     for one or several fitted model objects for which a log-likelihood     value can be obtained, according to the formula -2*log-likelihood     + k*npar, where npar represents the number of parameters in the     fitted model, and k = 2 for the usual AIC, or k = log(n) (n being     the number of observations) for the so-called BIC or SBC     (Schwarz's Bayesian criterion)."
  },
  {
    "name": "binom.test",
    "usage": "binom.test(x, n, p = 0.5,",
    "pkg": "stats",
    "desc": "Performs an exact test of a simple null hypothesis about the     probability of success in a Bernoulli experiment."
  },
  {
    "name": "binomial",
    "usage": "quasibinomial(link = \"logit\")",
    "pkg": "stats",
    "desc": "Family objects provide a convenient way to specify the details of     the models used by functions such as ‘glm’.  See the documentation     for ‘glm’ for the details on how such model fitting takes place."
  },
  {
    "name": "biplot",
    "usage": "biplot(x, y, var.axes = TRUE, col, cex = rep(par(\"cex\"), 2),",
    "pkg": "stats",
    "desc": "Plot a biplot on the current graphics device."
  },
  {
    "name": "bw.bcv",
    "usage": "bw.bcv(x, nb = 1000, lower = 0.1 * hmax, upper = hmax,",
    "pkg": "stats",
    "desc": "Bandwidth selectors for Gaussian kernels in ‘density’."
  },
  {
    "name": "bw.nrd",
    "usage": "bw.nrd(x)",
    "pkg": "stats",
    "desc": "Bandwidth selectors for Gaussian kernels in ‘density’."
  },
  {
    "name": "bw.nrd0",
    "usage": "bw.nrd0(x)",
    "pkg": "stats",
    "desc": "Bandwidth selectors for Gaussian kernels in ‘density’."
  },
  {
    "name": "bw.SJ",
    "usage": "bw.SJ(x, nb = 1000, lower = 0.1 * hmax, upper = hmax,",
    "pkg": "stats",
    "desc": "Bandwidth selectors for Gaussian kernels in ‘density’."
  },
  {
    "name": "bw.ucv",
    "usage": "bw.ucv(x, nb = 1000, lower = 0.1 * hmax, upper = hmax,",
    "pkg": "stats",
    "desc": "Bandwidth selectors for Gaussian kernels in ‘density’."
  },
  {
    "name": "cancor",
    "usage": "cancor(x, y, xcenter = TRUE, ycenter = TRUE)",
    "pkg": "stats",
    "desc": "Compute the canonical correlations between two data matrices."
  },
  {
    "name": "ccf",
    "usage": "ccf(x, y, lag.max = NULL, type = c(\"correlation\", \"covariance\"),",
    "pkg": "stats",
    "desc": "The function ‘acf’ computes (and by default plots) estimates of     the autocovariance or autocorrelation function.  Function ‘pacf’     is the function used for the partial autocorrelations.  Function     ‘ccf’ computes the cross-correlation or cross-covariance of two     univariate series."
  },
  {
    "name": "chisq.test",
    "usage": "chisq.test(x, y = NULL, correct = TRUE,",
    "pkg": "stats",
    "desc": "‘chisq.test’ performs chi-squared contingency table tests and     goodness-of-fit tests."
  },
  {
    "name": "cmdscale",
    "usage": "cmdscale(d, k = 2, eig = FALSE, add = FALSE, x.ret = FALSE,",
    "pkg": "stats",
    "desc": "Classical multidimensional scaling (MDS) of a data matrix.  Also     known as _principal coordinates analysis_ (Gower, 1966)."
  },
  {
    "name": "coef",
    "usage": "coefficients(object, ...)",
    "pkg": "stats",
    "desc": "‘coef’ is a generic function which extracts model coefficients     from objects returned by modeling functions.  ‘coefficients’ is an     _alias_ for it."
  },
  {
    "name": "coefficients",
    "usage": "coefficients(object, ...)",
    "pkg": "stats",
    "desc": "‘coef’ is a generic function which extracts model coefficients     from objects returned by modeling functions.  ‘coefficients’ is an     _alias_ for it."
  },
  {
    "name": "complete.cases",
    "usage": "complete.cases(...)",
    "pkg": "stats",
    "desc": "Return a logical vector indicating which cases are complete, i.e.,     have no missing values."
  },
  {
    "name": "confint",
    "usage": "confint(object, parm, level = 0.95, ...)",
    "pkg": "stats",
    "desc": "Computes confidence intervals for one or more parameters in a     fitted model.  There is a default and a method for objects     inheriting from class ‘\"lm\"’."
  },
  {
    "name": "constrOptim",
    "usage": "constrOptim(theta, f, grad, ui, ci, mu = 1e-04, control = list(),",
    "pkg": "stats",
    "desc": "Minimise a function subject to linear inequality constraints using     an adaptive barrier algorithm."
  },
  {
    "name": "contr.helmert",
    "usage": "contr.helmert(n, contrasts = TRUE, sparse = FALSE)",
    "pkg": "stats",
    "desc": "Return a matrix of contrasts."
  },
  {
    "name": "contr.poly",
    "usage": "contr.poly(n, scores = 1:n, contrasts = TRUE, sparse = FALSE)",
    "pkg": "stats",
    "desc": "Return a matrix of contrasts."
  },
  {
    "name": "contr.SAS",
    "usage": "contr.SAS(n, contrasts = TRUE, sparse = FALSE)",
    "pkg": "stats",
    "desc": "Return a matrix of contrasts."
  },
  {
    "name": "contr.sum",
    "usage": "contr.sum(n, contrasts = TRUE, sparse = FALSE)",
    "pkg": "stats",
    "desc": "Return a matrix of contrasts."
  },
  {
    "name": "contr.treatment",
    "usage": "contr.treatment(n, base = 1, contrasts = TRUE, sparse = FALSE)",
    "pkg": "stats",
    "desc": "Return a matrix of contrasts."
  },
  {
    "name": "contrasts",
    "usage": "contrasts(x, how.many) <- value",
    "pkg": "stats",
    "desc": "Set and view the contrasts associated with a factor."
  },
  {
    "name": "convolve",
    "usage": "convolve(x, y, conj = TRUE, type = c(\"circular\", \"open\", \"filter\"))",
    "pkg": "stats",
    "desc": "Use the Fast Fourier Transform to compute the several kinds of     convolutions of two sequences."
  },
  {
    "name": "cooks.distance",
    "usage": "cooks.distance(model, infl = influence(model, do.coef = FALSE),",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "cophenetic",
    "usage": "cophenetic(x)",
    "pkg": "stats",
    "desc": "Computes the cophenetic distances for a hierarchical clustering."
  },
  {
    "name": "cor",
    "usage": "cov2cor(V)",
    "pkg": "stats",
    "desc": "‘var’, ‘cov’ and ‘cor’ compute the variance of ‘x’ and the     covariance or correlation of ‘x’ and ‘y’ if these are vectors.  If     ‘x’ and ‘y’ are matrices then the covariances (or correlations)     between the columns of ‘x’ and the columns of ‘y’ are computed.     ‘cov2cor’ scales a covariance matrix into the corresponding     correlation matrix _efficiently_."
  },
  {
    "name": "cor.test",
    "usage": "cor.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Test for association between paired samples, using one of     Pearson's product moment correlation coefficient, Kendall's tau or     Spearman's rho."
  },
  {
    "name": "cov",
    "usage": "cov2cor(V)",
    "pkg": "stats",
    "desc": "‘var’, ‘cov’ and ‘cor’ compute the variance of ‘x’ and the     covariance or correlation of ‘x’ and ‘y’ if these are vectors.  If     ‘x’ and ‘y’ are matrices then the covariances (or correlations)     between the columns of ‘x’ and the columns of ‘y’ are computed.     ‘cov2cor’ scales a covariance matrix into the corresponding     correlation matrix _efficiently_."
  },
  {
    "name": "cov.wt",
    "usage": "cov.wt(x, wt = rep(1/nrow(x), nrow(x)), cor = FALSE, center = TRUE,",
    "pkg": "stats",
    "desc": "Returns a list containing estimates of the weighted covariance     matrix and the mean of the data, and optionally of the (weighted)     correlation matrix."
  },
  {
    "name": "cov2cor",
    "usage": "cov2cor(V)",
    "pkg": "stats",
    "desc": "‘var’, ‘cov’ and ‘cor’ compute the variance of ‘x’ and the     covariance or correlation of ‘x’ and ‘y’ if these are vectors.  If     ‘x’ and ‘y’ are matrices then the covariances (or correlations)     between the columns of ‘x’ and the columns of ‘y’ are computed.     ‘cov2cor’ scales a covariance matrix into the corresponding     correlation matrix _efficiently_."
  },
  {
    "name": "covratio",
    "usage": "covratio(model, infl = lm.influence(model, do.coef = FALSE),",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "cpgram",
    "usage": "cpgram(ts, taper = 0.1,",
    "pkg": "stats",
    "desc": "Plots a cumulative periodogram."
  },
  {
    "name": "cutree",
    "usage": "cutree(tree, k = NULL, h = NULL)",
    "pkg": "stats",
    "desc": "Cuts a tree, e.g., as resulting from ‘hclust’, into several groups     either by specifying the desired number(s) of groups or the cut     height(s)."
  },
  {
    "name": "cycle",
    "usage": "cycle(x, ...)",
    "pkg": "stats",
    "desc": "‘time’ creates the vector of times at which a time series was     sampled.     ‘cycle’ gives the positions in the cycle of each observation.     ‘frequency’ returns the number of samples per unit time and     ‘deltat’ the time interval between observations (see ‘ts’)."
  },
  {
    "name": "D",
    "usage": "## Default S3 method:",
    "pkg": "stats",
    "desc": "Compute derivatives of simple expressions, symbolically and     algorithmically."
  },
  {
    "name": "dbeta",
    "usage": "dbeta(x, shape1, shape2, ncp = 0, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Beta distribution with parameters ‘shape1’ and     ‘shape2’ (and optional non-centrality parameter ‘ncp’)."
  },
  {
    "name": "dbinom",
    "usage": "dbinom(x, size, prob, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the binomial distribution with parameters ‘size’     and ‘prob’.     This is conventionally interpreted as the number of ‘successes’ in     ‘size’ trials."
  },
  {
    "name": "dcauchy",
    "usage": "dcauchy(x, location = 0, scale = 1, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Cauchy distribution with location parameter     ‘location’ and scale parameter ‘scale’."
  },
  {
    "name": "dchisq",
    "usage": "dchisq(x, df, ncp = 0, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the chi-squared (chi^2) distribution with ‘df’     degrees of freedom and optional non-centrality parameter ‘ncp’."
  },
  {
    "name": "decompose",
    "usage": "decompose(x, type = c(\"additive\", \"multiplicative\"), filter = NULL)",
    "pkg": "stats",
    "desc": "Decompose a time series into seasonal, trend and irregular     components using moving averages.  Deals with additive or     multiplicative seasonal component."
  },
  {
    "name": "delete.response",
    "usage": "delete.response(termobj)",
    "pkg": "stats",
    "desc": "‘delete.response’ returns a ‘terms’ object for the same model but     with no response variable.     ‘drop.terms’ removes variables from the right-hand side of the     model. There is also a ‘\"[.terms\"’ method to perform the same     function (with ‘keep.response = TRUE’).     ‘reformulate’ creates a formula from a character vector."
  },
  {
    "name": "deltat",
    "usage": "deltat(x, ...)",
    "pkg": "stats",
    "desc": "‘time’ creates the vector of times at which a time series was     sampled.     ‘cycle’ gives the positions in the cycle of each observation.     ‘frequency’ returns the number of samples per unit time and     ‘deltat’ the time interval between observations (see ‘ts’)."
  },
  {
    "name": "dendrapply",
    "usage": "dendrapply(X, FUN, ...)",
    "pkg": "stats",
    "desc": "Apply function ‘FUN’ to each node of a ‘dendrogram’ recursively.     When ‘y <- dendrapply(x, fn)’, then ‘y’ is a dendrogram of the     same graph structure as ‘x’ and for each node, ‘y.node[j] <- FUN(     x.node[j], ...)’ (where ‘y.node[j]’ is an (invalid!) notation for     the j-th node of y."
  },
  {
    "name": "density",
    "usage": "density(x, bw = \"nrd0\", adjust = 1,",
    "pkg": "stats",
    "desc": "The (S3) generic function ‘density’ computes kernel density     estimates.  Its default method does so with the given kernel and     bandwidth for univariate observations."
  },
  {
    "name": "deriv",
    "usage": "deriv3(expr, namevec, function.arg = NULL, tag = \".expr\",",
    "pkg": "stats",
    "desc": "Compute derivatives of simple expressions, symbolically and     algorithmically."
  },
  {
    "name": "deriv3",
    "usage": "deriv3(expr, namevec, function.arg = NULL, tag = \".expr\",",
    "pkg": "stats",
    "desc": "Compute derivatives of simple expressions, symbolically and     algorithmically."
  },
  {
    "name": "deviance",
    "usage": "deviance(object, ...)",
    "pkg": "stats",
    "desc": "Returns the deviance of a fitted model object."
  },
  {
    "name": "dexp",
    "usage": "dexp(x, rate = 1, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the exponential distribution with rate ‘rate’     (i.e., mean ‘1/rate’)."
  },
  {
    "name": "df.kernel",
    "usage": "df.kernel(k)",
    "pkg": "stats",
    "desc": "The ‘\"tskernel\"’ class is designed to represent discrete symmetric     normalized smoothing kernels.  These kernels can be used to smooth     vectors, matrices, or time series objects.     There are ‘print’, ‘plot’ and ‘[’ methods for these kernel     objects."
  },
  {
    "name": "df.residual",
    "usage": "df.residual(object, ...)",
    "pkg": "stats",
    "desc": "Returns the residual degrees-of-freedom extracted from a fitted     model object."
  },
  {
    "name": "dfbeta",
    "usage": "dfbetas(model, infl = lm.influence(model, do.coef = TRUE), ...)",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "dfbetas",
    "usage": "dfbetas(model, infl = lm.influence(model, do.coef = TRUE), ...)",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "dffits",
    "usage": "dffits(model, infl = , res = )",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "dgamma",
    "usage": "dgamma(x, shape, rate = 1, scale = 1/rate, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Gamma distribution with parameters ‘shape’ and     ‘scale’."
  },
  {
    "name": "dgeom",
    "usage": "dgeom(x, prob, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the geometric distribution with parameter ‘prob’."
  },
  {
    "name": "dhyper",
    "usage": "dhyper(x, m, n, k, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the hypergeometric distribution."
  },
  {
    "name": "diffinv",
    "usage": "diffinv(x, lag = 1, differences = 1, xi, ...)",
    "pkg": "stats",
    "desc": "Computes the inverse function of the lagged differences function     ‘diff’."
  },
  {
    "name": "dist",
    "usage": "## S3 method for class 'dist'",
    "pkg": "stats",
    "desc": "This function computes and returns the distance matrix computed by     using the specified distance measure to compute the distances     between the rows of a data matrix."
  },
  {
    "name": "dlnorm",
    "usage": "dlnorm(x, meanlog = 0, sdlog = 1, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the log normal distribution whose logarithm has     mean equal to ‘meanlog’ and standard deviation equal to ‘sdlog’."
  },
  {
    "name": "dlogis",
    "usage": "dlogis(x, location = 0, scale = 1, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the logistic distribution with parameters     ‘location’ and ‘scale’."
  },
  {
    "name": "dmultinom",
    "usage": "dmultinom(x, size = NULL, prob, log = FALSE)",
    "pkg": "stats",
    "desc": "Generate multinomially distributed random number vectors and     compute multinomial probabilities."
  },
  {
    "name": "dnbinom",
    "usage": "dnbinom(x, size, prob, mu, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the negative binomial distribution with parameters     ‘size’ and ‘prob’."
  },
  {
    "name": "dnorm",
    "usage": "dnorm(x, mean = 0, sd = 1, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the normal distribution with mean equal to ‘mean’     and standard deviation equal to ‘sd’."
  },
  {
    "name": "dpois",
    "usage": "dpois(x, lambda, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Poisson distribution with parameter ‘lambda’."
  },
  {
    "name": "drop.scope",
    "usage": "drop.scope(terms1, terms2)",
    "pkg": "stats",
    "desc": "‘add.scope’ and ‘drop.scope’ compute those terms that can be     individually added to or dropped from a model while respecting the     hierarchy of terms."
  },
  {
    "name": "drop.terms",
    "usage": "drop.terms(termobj, dropx = NULL, keep.response = FALSE)",
    "pkg": "stats",
    "desc": "‘delete.response’ returns a ‘terms’ object for the same model but     with no response variable.     ‘drop.terms’ removes variables from the right-hand side of the     model. There is also a ‘\"[.terms\"’ method to perform the same     function (with ‘keep.response = TRUE’).     ‘reformulate’ creates a formula from a character vector."
  },
  {
    "name": "drop1",
    "usage": "drop1(object, scope, scale = 0,",
    "pkg": "stats",
    "desc": "Compute all the single terms in the ‘scope’ argument that can be     added to or dropped from the model, fit those models and compute a     table of the changes in fit."
  },
  {
    "name": "dsignrank",
    "usage": "dsignrank(x, n, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the distribution of the Wilcoxon Signed Rank     statistic obtained from a sample with size ‘n’."
  },
  {
    "name": "dt",
    "usage": "dt(x, df, ncp, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the t distribution with ‘df’ degrees of freedom     (and optional non-centrality parameter ‘ncp’)."
  },
  {
    "name": "dummy.coef",
    "usage": "dummy.coef(object, use.na = FALSE, ...)",
    "pkg": "stats",
    "desc": "This extracts coefficients in terms of the original levels of the     coefficients rather than the coded variables."
  },
  {
    "name": "dunif",
    "usage": "dunif(x, min = 0, max = 1, log = FALSE)",
    "pkg": "stats",
    "desc": "These functions provide information about the uniform distribution     on the interval from ‘min’ to ‘max’.  ‘dunif’ gives the density,     ‘punif’ gives the distribution function ‘qunif’ gives the quantile     function and ‘runif’ generates random deviates."
  },
  {
    "name": "dweibull",
    "usage": "dweibull(x, shape, scale = 1, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Weibull distribution with parameters ‘shape’     and ‘scale’."
  },
  {
    "name": "dwilcox",
    "usage": "dwilcox(x, m, n, log = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the distribution of the Wilcoxon rank sum statistic     obtained from samples with size ‘m’ and ‘n’, respectively."
  },
  {
    "name": "ecdf",
    "usage": "## S3 method for class 'ecdf'",
    "pkg": "stats",
    "desc": "Compute an empirical cumulative distribution function, with     several methods for plotting, printing and computing with such an     “ecdf” object."
  },
  {
    "name": "eff.aovlist",
    "usage": "eff.aovlist(aovlist)",
    "pkg": "stats",
    "desc": "Computes the efficiencies of fixed-effect terms in an analysis of     variance model with multiple strata."
  },
  {
    "name": "effects",
    "usage": "effects(object, set.sign = FALSE, ...)",
    "pkg": "stats",
    "desc": "Returns (orthogonal) effects from a fitted model, usually a linear     model. This is a generic function, but currently only has a     methods for objects inheriting from classes ‘\"lm\"’ and ‘\"glm\"’."
  },
  {
    "name": "embed",
    "usage": "embed (x, dimension = 1)",
    "pkg": "stats",
    "desc": "Embeds the time series ‘x’ into a low-dimensional Euclidean space."
  },
  {
    "name": "end",
    "usage": "end(x, ...)",
    "pkg": "stats",
    "desc": "Extract and encode the times the first and last observations were     taken. Provided only for compatibility with S version 2."
  },
  {
    "name": "estVar",
    "usage": "estVar(object, ...)",
    "pkg": "stats",
    "desc": "Functions to compute matrix of residual sums of squares and     products, or the estimated variance matrix for multivariate linear     models."
  },
  {
    "name": "expand.model.frame",
    "usage": "expand.model.frame(model, extras,",
    "pkg": "stats",
    "desc": "Evaluates new variables as if they had been part of the formula of     the specified model.  This ensures that the same ‘na.action’ and     ‘subset’ arguments are applied and allows, for example, ‘x’ to be     recovered for a model using ‘sin(x)’ as a predictor."
  },
  {
    "name": "extractAIC",
    "usage": "extractAIC(fit, scale, k = 2, ...)",
    "pkg": "stats",
    "desc": "Computes the (generalized) Akaike *A*n *I*nformation *C*riterion     for a fitted parametric model."
  },
  {
    "name": "factanal",
    "usage": "factanal(x, factors, data = NULL, covmat = NULL, n.obs = NA,",
    "pkg": "stats",
    "desc": "Perform maximum-likelihood factor analysis on a covariance matrix     or data matrix."
  },
  {
    "name": "factor.scope",
    "usage": "factor.scope(factor, scope)",
    "pkg": "stats",
    "desc": "‘add.scope’ and ‘drop.scope’ compute those terms that can be     individually added to or dropped from a model while respecting the     hierarchy of terms."
  },
  {
    "name": "family",
    "usage": "family(object, ...)",
    "pkg": "stats",
    "desc": "Family objects provide a convenient way to specify the details of     the models used by functions such as ‘glm’.  See the documentation     for ‘glm’ for the details on how such model fitting takes place."
  },
  {
    "name": "fft",
    "usage": "mvfft(z, inverse = FALSE)",
    "pkg": "stats",
    "desc": "Computes the Discrete Fourier Transform (DFT) of an array with a     fast algorithm, the “Fast Fourier Transform” (FFT)."
  },
  {
    "name": "filter",
    "usage": "filter(x, filter, method = c(\"convolution\", \"recursive\"),",
    "pkg": "stats",
    "desc": "Applies linear filtering to a univariate time series or to each     series separately of a multivariate time series."
  },
  {
    "name": "fisher.test",
    "usage": "fisher.test(x, y = NULL, workspace = 200000, hybrid = FALSE,",
    "pkg": "stats",
    "desc": "Performs Fisher's exact test for testing the null of independence     of rows and columns in a contingency table with fixed marginals."
  },
  {
    "name": "fivenum",
    "usage": "fivenum(x, na.rm = TRUE)",
    "pkg": "stats",
    "desc": "Returns Tukey's five number summary (minimum, lower-hinge, median,     upper-hinge, maximum) for the input data."
  },
  {
    "name": "fligner.test",
    "usage": "fligner.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs a Fligner-Killeen (median) test of the null that the     variances in each of the groups (samples) are the same."
  },
  {
    "name": "formula",
    "usage": "## S3 method for class 'formula'",
    "pkg": "stats",
    "desc": "The generic function ‘formula’ and its specific methods provide a     way of extracting formulae which have been included in other     objects.     ‘as.formula’ is almost identical, additionally preserving     attributes when ‘object’ already inherits from ‘\"formula\"’."
  },
  {
    "name": "frequency",
    "usage": "frequency(x, ...)",
    "pkg": "stats",
    "desc": "‘time’ creates the vector of times at which a time series was     sampled.     ‘cycle’ gives the positions in the cycle of each observation.     ‘frequency’ returns the number of samples per unit time and     ‘deltat’ the time interval between observations (see ‘ts’)."
  },
  {
    "name": "friedman.test",
    "usage": "friedman.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs a Friedman rank sum test with unreplicated blocked data."
  },
  {
    "name": "ftable",
    "usage": "ftable(..., exclude = c(NA, NaN), row.vars = NULL,",
    "pkg": "stats",
    "desc": "Create ‘flat’ contingency tables."
  },
  {
    "name": "Gamma",
    "usage": "Gamma(link = \"inverse\")",
    "pkg": "stats",
    "desc": "Family objects provide a convenient way to specify the details of     the models used by functions such as ‘glm’.  See the documentation     for ‘glm’ for the details on how such model fitting takes place."
  },
  {
    "name": "gaussian",
    "usage": "inverse.gaussian(link = \"1/mu^2\")",
    "pkg": "stats",
    "desc": "Family objects provide a convenient way to specify the details of     the models used by functions such as ‘glm’.  See the documentation     for ‘glm’ for the details on how such model fitting takes place."
  },
  {
    "name": "get_all_vars",
    "usage": "get_all_vars(formula, data, ...)",
    "pkg": "stats",
    "desc": "‘model.frame’ (a generic function) and its methods return a     ‘data.frame’ with the variables needed to use ‘formula’ and any     ‘...’ arguments."
  },
  {
    "name": "getCall",
    "usage": "getCall(x, ...)",
    "pkg": "stats",
    "desc": "‘update’ will update and (by default) re-fit a model.  It does     this by extracting the call stored in the object, updating the     call and (by default) evaluating that call.  Sometimes it is     useful to call ‘update’ with only one argument, for example if the     data frame has been corrected.     “Extracting the call” in ‘update()’ and similar functions uses     ‘getCall()’ which itself is a (S3) generic function with a default     method that simply gets ‘x$call’.     Because of this, ‘update()’ will often work (via its default     method) on new model classes, either automatically, or by     providing a simple ‘getCall()’ method for that class."
  },
  {
    "name": "getInitial",
    "usage": "getInitial(object, data, ...)",
    "pkg": "stats",
    "desc": "This function evaluates initial parameter estimates for a     nonlinear regression model.  If ‘data’ is a parameterized data     frame or ‘pframe’ object, its ‘parameters’ attribute is returned.     Otherwise the object is examined to see if it contains a call to a     ‘selfStart’ object whose ‘initial’ attribute can be evaluated."
  },
  {
    "name": "glm",
    "usage": "## S3 method for class 'glm'",
    "pkg": "stats",
    "desc": "‘glm’ is used to fit generalized linear models, specified by     giving a symbolic description of the linear predictor and a     description of the error distribution."
  },
  {
    "name": "glm.control",
    "usage": "glm.control(epsilon = 1e-8, maxit = 25, trace = FALSE)",
    "pkg": "stats",
    "desc": "Auxiliary function for ‘glm’ fitting.  Typically only used     internally by ‘glm.fit’, but may be used to construct a ‘control’     argument to either function."
  },
  {
    "name": "glm.fit",
    "usage": "glm.fit(x, y, weights = rep(1, nobs),",
    "pkg": "stats",
    "desc": "‘glm’ is used to fit generalized linear models, specified by     giving a symbolic description of the linear predictor and a     description of the error distribution."
  },
  {
    "name": "hasTsp",
    "usage": "hasTsp(x)",
    "pkg": "stats",
    "desc": "‘tsp’ returns the ‘tsp’ attribute (or ‘NULL’).  It is included for     compatibility with S version 2. ‘tsp<-’ sets the ‘tsp’ attribute.     ‘hasTsp’ ensures ‘x’ has a ‘tsp’ attribute, by adding one if     needed."
  },
  {
    "name": "hat",
    "usage": "hat(x, intercept = TRUE)",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "hatvalues",
    "usage": "hatvalues(model, infl = lm.influence(model, do.coef = FALSE), ...)",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "hclust",
    "usage": "## S3 method for class 'hclust'",
    "pkg": "stats",
    "desc": "Hierarchical cluster analysis on a set of dissimilarities and     methods for analyzing it."
  },
  {
    "name": "heatmap",
    "usage": "heatmap(x, Rowv = NULL, Colv = if(symm)\"Rowv\" else NULL,",
    "pkg": "stats",
    "desc": "A heat map is a false color image (basically ‘image(t(x))’) with a     dendrogram added to the left side and to the top.  Typically,     reordering of the rows and columns according to some set of values     (row or column means) within the restrictions imposed by the     dendrogram is carried out."
  },
  {
    "name": "HoltWinters",
    "usage": "HoltWinters(x, alpha = NULL, beta = NULL, gamma = NULL,",
    "pkg": "stats",
    "desc": "Computes Holt-Winters Filtering of a given time series.  Unknown     parameters are determined by minimizing the squared prediction     error."
  },
  {
    "name": "influence",
    "usage": "lm.influence(model, do.coef = TRUE)",
    "pkg": "stats",
    "desc": "This function provides the basic quantities which are used in     forming a wide variety of diagnostics for checking the quality of     regression fits."
  },
  {
    "name": "influence.measures",
    "usage": "influence.measures(model)",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "integrate",
    "usage": "integrate(f, lower, upper, ..., subdivisions = 100L,",
    "pkg": "stats",
    "desc": "Adaptive quadrature of functions of one variable over a finite or     infinite interval."
  },
  {
    "name": "interaction.plot",
    "usage": "interaction.plot(x.factor, trace.factor, response, fun = mean,",
    "pkg": "stats",
    "desc": "Plots the mean (or other summary) of the response for two-way     combinations of factors, thereby illustrating possible     interactions."
  },
  {
    "name": "inverse.gaussian",
    "usage": "inverse.gaussian(link = \"1/mu^2\")",
    "pkg": "stats",
    "desc": "Family objects provide a convenient way to specify the details of     the models used by functions such as ‘glm’.  See the documentation     for ‘glm’ for the details on how such model fitting takes place."
  },
  {
    "name": "IQR",
    "usage": "IQR(x, na.rm = FALSE, type = 7)",
    "pkg": "stats",
    "desc": "computes interquartile range of the ‘x’ values."
  },
  {
    "name": "is.leaf",
    "usage": "is.leaf(object)",
    "pkg": "stats",
    "desc": "Class ‘\"dendrogram\"’ provides general functions for handling     tree-like structures.  It is intended as a replacement for similar     functions in hierarchical clustering and classification/regression     trees, such that all of these can use the same engine for plotting     or cutting trees."
  },
  {
    "name": "is.stepfun",
    "usage": "is.stepfun(x)",
    "pkg": "stats",
    "desc": "Given the vectors (x[1], ..., x[n]) and (y[0], y[1], ..., y[n])     (one value more!), ‘stepfun(x, y, ...)’ returns an interpolating     ‘step’ function, say ‘fn’. I.e., fn(t) = c[i] (constant) for t in     ( x[i], x[i+1]) and at the abscissa values, if (by default) ‘right     = FALSE’, fn(x[i]) = y[i] and for ‘right = TRUE’, fn(x[i]) =     y[i-1], for i=1, ..., n.     The value of the constant c[i] above depends on the ‘continuity’     parameter ‘f’.  For the default, ‘right = FALSE, f = 0’, ‘fn’ is a     _cadlag_ function, i.e., continuous from the right, limits from     the left, so that the function is piecewise constant on intervals     that include their _left_ endpoint.  In general, c[i] is     interpolated in between the neighbouring y values, c[i] =     (1-f)*y[i] + f*y[i+1].  Therefore, for non-0 values of ‘f’, ‘fn’     may no longer be a proper step function, since it can be     discontinuous from both sides, unless ‘right = TRUE, f = 1’ which     is left-continuous (i.e., constant pieces contain their right     endpoint)."
  },
  {
    "name": "is.ts",
    "usage": "is.ts(x)",
    "pkg": "stats",
    "desc": "The function ‘ts’ is used to create time-series objects.     ‘as.ts’ and ‘is.ts’ coerce an object to a time-series and test     whether an object is a time series."
  },
  {
    "name": "is.tskernel",
    "usage": "is.tskernel(k)",
    "pkg": "stats",
    "desc": "The ‘\"tskernel\"’ class is designed to represent discrete symmetric     normalized smoothing kernels.  These kernels can be used to smooth     vectors, matrices, or time series objects.     There are ‘print’, ‘plot’ and ‘[’ methods for these kernel     objects."
  },
  {
    "name": "isoreg",
    "usage": "isoreg(x, y = NULL)",
    "pkg": "stats",
    "desc": "Compute the isotonic (monotonely increasing nonparametric) least     squares regression which is piecewise constant."
  },
  {
    "name": "KalmanForecast",
    "usage": "KalmanForecast(n.ahead = 10L, mod, update = FALSE)",
    "pkg": "stats",
    "desc": "Use Kalman Filtering to find the (Gaussian) log-likelihood, or for     forecasting or smoothing."
  },
  {
    "name": "KalmanLike",
    "usage": "KalmanLike(y, mod, nit = 0L, update = FALSE)",
    "pkg": "stats",
    "desc": "Use Kalman Filtering to find the (Gaussian) log-likelihood, or for     forecasting or smoothing."
  },
  {
    "name": "KalmanRun",
    "usage": "KalmanRun(y, mod, nit = 0L, update = FALSE)",
    "pkg": "stats",
    "desc": "Use Kalman Filtering to find the (Gaussian) log-likelihood, or for     forecasting or smoothing."
  },
  {
    "name": "KalmanSmooth",
    "usage": "KalmanSmooth(y, mod, nit = 0L)",
    "pkg": "stats",
    "desc": "Use Kalman Filtering to find the (Gaussian) log-likelihood, or for     forecasting or smoothing."
  },
  {
    "name": "kernapply",
    "usage": "kernapply(x, k, ...)",
    "pkg": "stats",
    "desc": "‘kernapply’ computes the convolution between an input sequence and     a specific kernel."
  },
  {
    "name": "kernel",
    "usage": "## S3 method for class 'tskernel'",
    "pkg": "stats",
    "desc": "The ‘\"tskernel\"’ class is designed to represent discrete symmetric     normalized smoothing kernels.  These kernels can be used to smooth     vectors, matrices, or time series objects.     There are ‘print’, ‘plot’ and ‘[’ methods for these kernel     objects."
  },
  {
    "name": "kmeans",
    "usage": "## S3 method for class 'kmeans'",
    "pkg": "stats",
    "desc": "Perform k-means clustering on a data matrix."
  },
  {
    "name": "knots",
    "usage": "knots(Fn, ...)",
    "pkg": "stats",
    "desc": "Given the vectors (x[1], ..., x[n]) and (y[0], y[1], ..., y[n])     (one value more!), ‘stepfun(x, y, ...)’ returns an interpolating     ‘step’ function, say ‘fn’. I.e., fn(t) = c[i] (constant) for t in     ( x[i], x[i+1]) and at the abscissa values, if (by default) ‘right     = FALSE’, fn(x[i]) = y[i] and for ‘right = TRUE’, fn(x[i]) =     y[i-1], for i=1, ..., n.     The value of the constant c[i] above depends on the ‘continuity’     parameter ‘f’.  For the default, ‘right = FALSE, f = 0’, ‘fn’ is a     _cadlag_ function, i.e., continuous from the right, limits from     the left, so that the function is piecewise constant on intervals     that include their _left_ endpoint.  In general, c[i] is     interpolated in between the neighbouring y values, c[i] =     (1-f)*y[i] + f*y[i+1].  Therefore, for non-0 values of ‘f’, ‘fn’     may no longer be a proper step function, since it can be     discontinuous from both sides, unless ‘right = TRUE, f = 1’ which     is left-continuous (i.e., constant pieces contain their right     endpoint)."
  },
  {
    "name": "kruskal.test",
    "usage": "kruskal.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs a Kruskal-Wallis rank sum test."
  },
  {
    "name": "ks.test",
    "usage": "ks.test(x, y, ...,",
    "pkg": "stats",
    "desc": "Perform a one- or two-sample Kolmogorov-Smirnov test."
  },
  {
    "name": "ksmooth",
    "usage": "ksmooth(x, y, kernel = c(\"box\", \"normal\"), bandwidth = 0.5,",
    "pkg": "stats",
    "desc": "The Nadaraya-Watson kernel regression estimate."
  },
  {
    "name": "lag",
    "usage": "lag(x, k = 1, ...)",
    "pkg": "stats",
    "desc": "Compute a lagged version of a time series, shifting the time base     back by a given number of observations.     ‘lag’ is a generic function; this page documents its default     method."
  },
  {
    "name": "lag.plot",
    "usage": "lag.plot(x, lags = 1, layout = NULL, set.lags = 1:lags,",
    "pkg": "stats",
    "desc": "Plot time series against lagged versions of themselves.  Helps     visualizing ‘auto-dependence’ even when auto-correlations vanish."
  },
  {
    "name": "line",
    "usage": "line(x, y)",
    "pkg": "stats",
    "desc": "Fit a line robustly as recommended in _Exploratory Data Analysis_."
  },
  {
    "name": "lm",
    "usage": "lm(formula, data, subset, weights, na.action,",
    "pkg": "stats",
    "desc": "‘lm’ is used to fit linear models.  It can be used to carry out     regression, single stratum analysis of variance and analysis of     covariance (although ‘aov’ may provide a more convenient interface     for these)."
  },
  {
    "name": "lm.influence",
    "usage": "lm.influence(model, do.coef = TRUE)",
    "pkg": "stats",
    "desc": "This function provides the basic quantities which are used in     forming a wide variety of diagnostics for checking the quality of     regression fits."
  },
  {
    "name": "loadings",
    "usage": "## S3 method for class 'loadings'",
    "pkg": "stats",
    "desc": "Extract or print loadings in factor analysis (or principal     components analysis)."
  },
  {
    "name": "loess",
    "usage": "control = loess.control(...), ...)",
    "pkg": "stats",
    "desc": "Fit a polynomial surface determined by one or more numerical     predictors, using local fitting."
  },
  {
    "name": "loess.control",
    "usage": "loess.control(surface = c(\"interpolate\", \"direct\"),",
    "pkg": "stats",
    "desc": "Set control parameters for ‘loess’ fits."
  },
  {
    "name": "loess.smooth",
    "usage": "loess.smooth(x, y, span = 2/3, degree = 1,",
    "pkg": "stats",
    "desc": "Plot and add a smooth curve computed by ‘loess’ to a scatter plot."
  },
  {
    "name": "logLik",
    "usage": "logLik(object, REML = FALSE, ...)",
    "pkg": "stats",
    "desc": "This function is generic; method functions can be written to     handle specific classes of objects.  Classes which have methods     for this function include: ‘\"glm\"’, ‘\"lm\"’, ‘\"nls\"’ and ‘\"Arima\"’.     Packages contain methods for other classes, such as ‘\"fitdistr\"’,     ‘\"negbin\"’ and ‘\"polr\"’ in package ‘MASS’, ‘\"multinom\"’ in package     ‘nnet’ and ‘\"gls\"’, ‘\"gnls\"’ ‘\"lme\"’ and others in package ‘nlme’."
  },
  {
    "name": "loglin",
    "usage": "loglin(table, margin, start = rep(1, length(table)), fit = FALSE,",
    "pkg": "stats",
    "desc": "‘loglin’ is used to fit log-linear models to multidimensional     contingency tables by Iterative Proportional Fitting."
  },
  {
    "name": "lowess",
    "usage": "lowess(x, y = NULL, f = 2/3, iter = 3, delta = 0.01 * diff(range(x)))",
    "pkg": "stats",
    "desc": "This function performs the computations for the _LOWESS_ smoother     which uses locally-weighted polynomial regression (see the     references)."
  },
  {
    "name": "ls.diag",
    "usage": "ls.diag(ls.out)",
    "pkg": "stats",
    "desc": "Computes basic statistics, including standard errors, t- and     p-values for the regression coefficients."
  },
  {
    "name": "ls.print",
    "usage": "ls.print(ls.out, digits = 4, print.it = TRUE)",
    "pkg": "stats",
    "desc": "Computes basic statistics, including standard errors, t- and     p-values for the regression coefficients and prints them if     ‘print.it’ is ‘TRUE’."
  },
  {
    "name": "lsfit",
    "usage": "lsfit(x, y, wt = NULL, intercept = TRUE, tolerance = 1e-07,",
    "pkg": "stats",
    "desc": "The least squares estimate of *b* in the model                                 y = X b + e                                      is found."
  },
  {
    "name": "mad",
    "usage": "mad(x, center = median(x), constant = 1.4826, na.rm = FALSE,",
    "pkg": "stats",
    "desc": "Compute the median absolute deviation, i.e., the (lo-/hi-) median     of the absolute deviations from the median, and (by default)     adjust by a factor for asymptotically normal consistency."
  },
  {
    "name": "mahalanobis",
    "usage": "mahalanobis(x, center, cov, inverted = FALSE, ...)",
    "pkg": "stats",
    "desc": "Returns the squared Mahalanobis distance of all rows in ‘x’ and     the vector mu = ‘center’ with respect to Sigma = ‘cov’.  This is     (for vector ‘x’) defined as                      D^2 = (x - mu)' Sigma^-1 (x - mu)"
  },
  {
    "name": "make.link",
    "usage": "make.link(link)",
    "pkg": "stats",
    "desc": "This function is used with the ‘family’ functions in ‘glm()’.     Given the name of a link, it returns a link function, an inverse     link function, the derivative dmu/deta and a function for domain     checking."
  },
  {
    "name": "makeARIMA",
    "usage": "makeARIMA(phi, theta, Delta, kappa = 1e6,",
    "pkg": "stats",
    "desc": "Use Kalman Filtering to find the (Gaussian) log-likelihood, or for     forecasting or smoothing."
  },
  {
    "name": "makepredictcall",
    "usage": "makepredictcall(var, call)",
    "pkg": "stats",
    "desc": "A utility to help ‘model.frame.default’ create the right matrices     when predicting from models with terms like (univariate) ‘poly’ or     ‘ns’."
  },
  {
    "name": "manova",
    "usage": "manova(...)",
    "pkg": "stats",
    "desc": "A class for the multivariate analysis of variance."
  },
  {
    "name": "mantelhaen.test",
    "usage": "mantelhaen.test(x, y = NULL, z = NULL,",
    "pkg": "stats",
    "desc": "Performs a Cochran-Mantel-Haenszel chi-squared test of the null     that two nominal variables are conditionally independent in each     stratum, assuming that there is no three-way interaction."
  },
  {
    "name": "mauchly.test",
    "usage": "mauchly.test(object, Sigma = diag(nrow = p),",
    "pkg": "stats",
    "desc": "Tests whether a Wishart-distributed covariance matrix (or     transformation thereof) is proportional to a given matrix."
  },
  {
    "name": "mcnemar.test",
    "usage": "mcnemar.test(x, y = NULL, correct = TRUE)",
    "pkg": "stats",
    "desc": "Performs McNemar's chi-squared test for symmetry of rows and     columns in a two-dimensional contingency table."
  },
  {
    "name": "median",
    "usage": "median(x, na.rm = FALSE, ...)",
    "pkg": "stats",
    "desc": "Compute the sample median."
  },
  {
    "name": "medpolish",
    "usage": "medpolish(x, eps = 0.01, maxiter = 10, trace.iter = TRUE,",
    "pkg": "stats",
    "desc": "Fits an additive model (twoway decomposition) using Tukey's     _median polish_ procedure."
  },
  {
    "name": "model.extract",
    "usage": "model.extract(frame, component)",
    "pkg": "stats",
    "desc": "Returns the response, offset, subset, weights or other special     components of a model frame passed as optional arguments to     ‘model.frame’."
  },
  {
    "name": "model.frame",
    "usage": "model.frame(formula, ...)",
    "pkg": "stats",
    "desc": "‘model.frame’ (a generic function) and its methods return a     ‘data.frame’ with the variables needed to use ‘formula’ and any     ‘...’ arguments."
  },
  {
    "name": "model.matrix",
    "usage": "model.matrix(object, data = environment(object),",
    "pkg": "stats",
    "desc": "‘model.matrix’ creates a design (or model) matrix, e.g., by     expanding factors to a set of dummy variables (depending on the     contrasts) and expanding interactions similarly."
  },
  {
    "name": "model.offset",
    "usage": "model.offset(x)",
    "pkg": "stats",
    "desc": "Returns the response, offset, subset, weights or other special     components of a model frame passed as optional arguments to     ‘model.frame’."
  },
  {
    "name": "model.response",
    "usage": "model.response(data, type = \"any\")",
    "pkg": "stats",
    "desc": "Returns the response, offset, subset, weights or other special     components of a model frame passed as optional arguments to     ‘model.frame’."
  },
  {
    "name": "model.tables",
    "usage": "model.tables(x, type = \"effects\", se = FALSE, ...)",
    "pkg": "stats",
    "desc": "Computes summary tables for model fits, especially complex ‘aov’     fits."
  },
  {
    "name": "model.weights",
    "usage": "model.weights(x)",
    "pkg": "stats",
    "desc": "Returns the response, offset, subset, weights or other special     components of a model frame passed as optional arguments to     ‘model.frame’."
  },
  {
    "name": "monthplot",
    "usage": "monthplot(x, labels = 1L:12L,",
    "pkg": "stats",
    "desc": "These functions plot seasonal (or other) subseries of a time     series.  For each season (or other category), a time series is     plotted."
  },
  {
    "name": "mood.test",
    "usage": "mood.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs Mood's two-sample test for a difference in scale     parameters."
  },
  {
    "name": "mvfft",
    "usage": "mvfft(z, inverse = FALSE)",
    "pkg": "stats",
    "desc": "Computes the Discrete Fourier Transform (DFT) of an array with a     fast algorithm, the “Fast Fourier Transform” (FFT)."
  },
  {
    "name": "na.action",
    "usage": "na.action(object, ...)",
    "pkg": "stats",
    "desc": "Extract information on the NA action used to create an object."
  },
  {
    "name": "na.contiguous",
    "usage": "na.contiguous(object, ...)",
    "pkg": "stats",
    "desc": "Find the longest consecutive stretch of non-missing values in a     time series object.  (In the event of a tie, the first such     stretch.)"
  },
  {
    "name": "na.exclude",
    "usage": "na.exclude(object, ...)",
    "pkg": "stats",
    "desc": "These generic functions are useful for dealing with ‘NA’s in e.g.,     data frames.  ‘na.fail’ returns the object if it does not contain     any missing values, and signals an error otherwise.  ‘na.omit’     returns the object with incomplete cases removed.  ‘na.pass’     returns the object unchanged."
  },
  {
    "name": "na.fail",
    "usage": "na.fail(object, ...)",
    "pkg": "stats",
    "desc": "These generic functions are useful for dealing with ‘NA’s in e.g.,     data frames.  ‘na.fail’ returns the object if it does not contain     any missing values, and signals an error otherwise.  ‘na.omit’     returns the object with incomplete cases removed.  ‘na.pass’     returns the object unchanged."
  },
  {
    "name": "na.omit",
    "usage": "na.omit(object, ...)",
    "pkg": "stats",
    "desc": "These generic functions are useful for dealing with ‘NA’s in e.g.,     data frames.  ‘na.fail’ returns the object if it does not contain     any missing values, and signals an error otherwise.  ‘na.omit’     returns the object with incomplete cases removed.  ‘na.pass’     returns the object unchanged."
  },
  {
    "name": "na.pass",
    "usage": "na.pass(object, ...)",
    "pkg": "stats",
    "desc": "These generic functions are useful for dealing with ‘NA’s in e.g.,     data frames.  ‘na.fail’ returns the object if it does not contain     any missing values, and signals an error otherwise.  ‘na.omit’     returns the object with incomplete cases removed.  ‘na.pass’     returns the object unchanged."
  },
  {
    "name": "naprint",
    "usage": "naprint(x, ...)",
    "pkg": "stats",
    "desc": "Use missing value information to report the effects of an     ‘na.action’."
  },
  {
    "name": "nextn",
    "usage": "nextn(n, factors = c(2,3,5))",
    "pkg": "stats",
    "desc": "‘nextn’ returns the smallest integer, greater than or equal to     ‘n’, which can be obtained as a product of powers of the values     contained in ‘factors’.  ‘nextn’ is intended to be used to find a     suitable length to zero-pad the argument of ‘fft’ to so that the     transform is computed quickly.  The default value for ‘factors’     ensures this."
  },
  {
    "name": "nlm",
    "usage": "nlm(f, p, ..., hessian = FALSE, typsize = rep(1, length(p)),",
    "pkg": "stats",
    "desc": "This function carries out a minimization of the function ‘f’ using     a Newton-type algorithm.  See the references for details."
  },
  {
    "name": "nlminb",
    "usage": "nlminb(start, objective, gradient = NULL, hessian = NULL, ...,",
    "pkg": "stats",
    "desc": "Unconstrained and box-constrained optimization using PORT     routines.     For historical compatibility."
  },
  {
    "name": "nls",
    "usage": "nls(formula, data, start, control, algorithm,",
    "pkg": "stats",
    "desc": "Determine the nonlinear (weighted) least-squares estimates of the     parameters of a nonlinear model."
  },
  {
    "name": "nls.control",
    "usage": "nls.control(maxiter = 50, tol = 1e-05, minFactor = 1/1024,",
    "pkg": "stats",
    "desc": "Allow the user to set some characteristics of the ‘nls’ nonlinear     least squares algorithm."
  },
  {
    "name": "NLSstAsymptotic",
    "usage": "NLSstAsymptotic(xy)",
    "pkg": "stats",
    "desc": "Fits the asymptotic regression model, in the form ‘b0 +     b1*(1-exp(-exp(lrc) * x)’ to the ‘xy’ data.  This can be used as a     building block in determining starting estimates for more     complicated models."
  },
  {
    "name": "NLSstClosestX",
    "usage": "NLSstClosestX(xy, yval)",
    "pkg": "stats",
    "desc": "Use inverse linear interpolation to approximate the ‘x’ value at     which the function represented by ‘xy’ is equal to ‘yval’."
  },
  {
    "name": "NLSstLfAsymptote",
    "usage": "NLSstLfAsymptote(xy)",
    "pkg": "stats",
    "desc": "Provide an initial guess at the horizontal asymptote on the left     side (i.e., small values of ‘x’) of the graph of ‘y’ versus ‘x’     from the ‘xy’ object.  Primarily used within ‘initial’ functions     for self-starting nonlinear regression models."
  },
  {
    "name": "NLSstRtAsymptote",
    "usage": "NLSstRtAsymptote(xy)",
    "pkg": "stats",
    "desc": "Provide an initial guess at the horizontal asymptote on the right     side (i.e., large values of ‘x’) of the graph of ‘y’ versus ‘x’     from the ‘xy’ object.  Primarily used within ‘initial’ functions     for self-starting nonlinear regression models."
  },
  {
    "name": "nobs",
    "usage": "nobs(object, use.fallback = FALSE, ...)",
    "pkg": "stats",
    "desc": "Extract the number of ‘observations’ from a model fit.  This is     principally intended to be used in computing BIC (see ‘AIC’)."
  },
  {
    "name": "numericDeriv",
    "usage": "numericDeriv(expr, theta, rho = parent.frame(), dir = 1.0)",
    "pkg": "stats",
    "desc": "‘numericDeriv’ numerically evaluates the gradient of an     expression."
  },
  {
    "name": "offset",
    "usage": "offset(object)",
    "pkg": "stats",
    "desc": "An offset is a term to be added to a linear predictor, such as in     a generalised linear model, with known coefficient 1 rather than     an estimated coefficient."
  },
  {
    "name": "oneway.test",
    "usage": "oneway.test(formula, data, subset, na.action, var.equal = FALSE)",
    "pkg": "stats",
    "desc": "Test whether two or more samples from normal distributions have     the same means.  The variances are not necessarily assumed to be     equal."
  },
  {
    "name": "optim",
    "usage": "optimHess(par, fn, gr = NULL, ..., control = list())",
    "pkg": "stats",
    "desc": "General-purpose optimization based on Nelder-Mead, quasi-Newton     and conjugate-gradient algorithms. It includes an option for     box-constrained optimization and simulated annealing."
  },
  {
    "name": "optimHess",
    "usage": "optimHess(par, fn, gr = NULL, ..., control = list())",
    "pkg": "stats",
    "desc": "General-purpose optimization based on Nelder-Mead, quasi-Newton     and conjugate-gradient algorithms. It includes an option for     box-constrained optimization and simulated annealing."
  },
  {
    "name": "optimise",
    "usage": "optimise(f, interval, ..., lower = min(interval), upper = max(interval),",
    "pkg": "stats",
    "desc": "The function ‘optimize’ searches the interval from ‘lower’ to     ‘upper’ for a minimum or maximum of the function ‘f’ with respect     to its first argument.     ‘optimise’ is an alias for ‘optimize’."
  },
  {
    "name": "optimize",
    "usage": "optimize(f, interval, ..., lower = min(interval), upper = max(interval),",
    "pkg": "stats",
    "desc": "The function ‘optimize’ searches the interval from ‘lower’ to     ‘upper’ for a minimum or maximum of the function ‘f’ with respect     to its first argument.     ‘optimise’ is an alias for ‘optimize’."
  },
  {
    "name": "order.dendrogram",
    "usage": "order.dendrogram(x)",
    "pkg": "stats",
    "desc": "Theses functions return the order (index) or the ‘\"label\"’     attribute for the leaves in a dendrogram.  These indices can then     be used to access the appropriate components of any additional     data."
  },
  {
    "name": "p.adjust",
    "usage": "p.adjust.methods",
    "pkg": "stats",
    "desc": "Given a set of p-values, returns p-values adjusted using one of     several methods."
  },
  {
    "name": "pacf",
    "usage": "pacf(x, lag.max = NULL, plot = TRUE, na.action = na.fail,",
    "pkg": "stats",
    "desc": "The function ‘acf’ computes (and by default plots) estimates of     the autocovariance or autocorrelation function.  Function ‘pacf’     is the function used for the partial autocorrelations.  Function     ‘ccf’ computes the cross-correlation or cross-covariance of two     univariate series."
  },
  {
    "name": "pairwise.prop.test",
    "usage": "pairwise.prop.test(x, n, p.adjust.method = p.adjust.methods, ...)",
    "pkg": "stats",
    "desc": "Calculate pairwise comparisons between pairs of proportions with     correction for multiple testing"
  },
  {
    "name": "pairwise.t.test",
    "usage": "pairwise.t.test(x, g, p.adjust.method = p.adjust.methods,",
    "pkg": "stats",
    "desc": "Calculate pairwise comparisons between group levels with     corrections for multiple testing"
  },
  {
    "name": "pairwise.table",
    "usage": "pairwise.table(compare.levels, level.names, p.adjust.method)",
    "pkg": "stats",
    "desc": "Creates table of p values for pairwise comparisons with     corrections for multiple testing."
  },
  {
    "name": "pairwise.wilcox.test",
    "usage": "pairwise.wilcox.test(x, g, p.adjust.method = p.adjust.methods,",
    "pkg": "stats",
    "desc": "Calculate pairwise comparisons between group levels with     corrections for multiple testing."
  },
  {
    "name": "pbeta",
    "usage": "pbeta(q, shape1, shape2, ncp = 0, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Beta distribution with parameters ‘shape1’ and     ‘shape2’ (and optional non-centrality parameter ‘ncp’)."
  },
  {
    "name": "pbinom",
    "usage": "pbinom(q, size, prob, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the binomial distribution with parameters ‘size’     and ‘prob’.     This is conventionally interpreted as the number of ‘successes’ in     ‘size’ trials."
  },
  {
    "name": "pbirthday",
    "usage": "pbirthday(n, classes = 365, coincident = 2)",
    "pkg": "stats",
    "desc": "Computes answers to a generalised _birthday paradox_ problem.     ‘pbirthday’ computes the probability of a coincidence and     ‘qbirthday’ computes the smallest number of observations needed to     have at least a specified probability of coincidence."
  },
  {
    "name": "pcauchy",
    "usage": "pcauchy(q, location = 0, scale = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Cauchy distribution with location parameter     ‘location’ and scale parameter ‘scale’."
  },
  {
    "name": "pchisq",
    "usage": "pchisq(q, df, ncp = 0, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the chi-squared (chi^2) distribution with ‘df’     degrees of freedom and optional non-centrality parameter ‘ncp’."
  },
  {
    "name": "pexp",
    "usage": "pexp(q, rate = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the exponential distribution with rate ‘rate’     (i.e., mean ‘1/rate’)."
  },
  {
    "name": "pgamma",
    "usage": "pgamma(q, shape, rate = 1, scale = 1/rate, lower.tail = TRUE,",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Gamma distribution with parameters ‘shape’ and     ‘scale’."
  },
  {
    "name": "pgeom",
    "usage": "pgeom(q, prob, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the geometric distribution with parameter ‘prob’."
  },
  {
    "name": "phyper",
    "usage": "phyper(q, m, n, k, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the hypergeometric distribution."
  },
  {
    "name": "plclust",
    "usage": "plclust(tree, hang = 0.1, unit = FALSE, level = FALSE, hmin = 0,",
    "pkg": "stats",
    "desc": "These functions are provided for compatibility with older versions     of R only, and may be defunct as soon as the next release."
  },
  {
    "name": "plnorm",
    "usage": "plnorm(q, meanlog = 0, sdlog = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the log normal distribution whose logarithm has     mean equal to ‘meanlog’ and standard deviation equal to ‘sdlog’."
  },
  {
    "name": "plogis",
    "usage": "plogis(q, location = 0, scale = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the logistic distribution with parameters     ‘location’ and ‘scale’."
  },
  {
    "name": "plot.spec.coherency",
    "usage": "plot.spec.coherency(x, ci = 0.95,",
    "pkg": "stats",
    "desc": "Plotting method for objects of class ‘\"spec\"’.  For multivariate     time series it plots the marginal spectra of the series or pairs     plots of the coherency and phase of the cross-spectra."
  },
  {
    "name": "plot.spec.phase",
    "usage": "plot.spec.phase(x, ci = 0.95,",
    "pkg": "stats",
    "desc": "Plotting method for objects of class ‘\"spec\"’.  For multivariate     time series it plots the marginal spectra of the series or pairs     plots of the coherency and phase of the cross-spectra."
  },
  {
    "name": "pnbinom",
    "usage": "pnbinom(q, size, prob, mu, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the negative binomial distribution with parameters     ‘size’ and ‘prob’."
  },
  {
    "name": "pnorm",
    "usage": "pnorm(q, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the normal distribution with mean equal to ‘mean’     and standard deviation equal to ‘sd’."
  },
  {
    "name": "poisson",
    "usage": "quasipoisson(link = \"log\")",
    "pkg": "stats",
    "desc": "Family objects provide a convenient way to specify the details of     the models used by functions such as ‘glm’.  See the documentation     for ‘glm’ for the details on how such model fitting takes place."
  },
  {
    "name": "poisson.test",
    "usage": "poisson.test(x, T = 1, r = 1,",
    "pkg": "stats",
    "desc": "Performs an exact test of a simple null hypothesis about the rate     parameter in Poisson distribution, or for the ratio between two     rate parameters."
  },
  {
    "name": "poly",
    "usage": "## S3 method for class 'poly'",
    "pkg": "stats",
    "desc": "Returns or evaluates orthogonal polynomials of degree 1 to     ‘degree’ over the specified set of points ‘x’: these are all     orthogonal to the constant polynomial of degree 0.  Alternatively,     evaluate raw polynomials."
  },
  {
    "name": "polym",
    "usage": "polym  (..., degree = 1, coefs = NULL, raw = FALSE)",
    "pkg": "stats",
    "desc": "Returns or evaluates orthogonal polynomials of degree 1 to     ‘degree’ over the specified set of points ‘x’: these are all     orthogonal to the constant polynomial of degree 0.  Alternatively,     evaluate raw polynomials."
  },
  {
    "name": "power",
    "usage": "power(lambda = 1)",
    "pkg": "stats",
    "desc": "Creates a link object based on the link function eta = mu ^     lambda."
  },
  {
    "name": "power.anova.test",
    "usage": "power.anova.test(groups = NULL, n = NULL,",
    "pkg": "stats",
    "desc": "Compute power of test or determine parameters to obtain target     power."
  },
  {
    "name": "power.prop.test",
    "usage": "power.prop.test(n = NULL, p1 = NULL, p2 = NULL, sig.level = 0.05,",
    "pkg": "stats",
    "desc": "Compute the power of the two-sample test for proportions, or     determine parameters to obtain a target power."
  },
  {
    "name": "power.t.test",
    "usage": "power.t.test(n = NULL, delta = NULL, sd = 1, sig.level = 0.05,",
    "pkg": "stats",
    "desc": "Compute the power of the one- or two- sample t test, or determine     parameters to obtain a target power."
  },
  {
    "name": "ppoints",
    "usage": "ppoints(n, a = if(n <= 10) 3/8 else 1/2)",
    "pkg": "stats",
    "desc": "Generates the sequence of probability points ‘(1:m - a)/(m +     (1-a)-a)’ where ‘m’ is either ‘n’, if ‘length(n)==1’, or     ‘length(n)’."
  },
  {
    "name": "ppois",
    "usage": "ppois(q, lambda, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Poisson distribution with parameter ‘lambda’."
  },
  {
    "name": "ppr",
    "usage": "ppr(x, y, weights = rep(1, n),",
    "pkg": "stats",
    "desc": "Fit a projection pursuit regression model."
  },
  {
    "name": "prcomp",
    "usage": "## S3 method for class 'prcomp'",
    "pkg": "stats",
    "desc": "Performs a principal components analysis on the given data matrix     and returns the results as an object of class ‘prcomp’."
  },
  {
    "name": "predict",
    "usage": "predict (object, ...)",
    "pkg": "stats",
    "desc": "‘predict’ is a generic function for predictions from the results     of various model fitting functions.  The function invokes     particular _methods_ which depend on the ‘class’ of the first     argument."
  },
  {
    "name": "preplot",
    "usage": "preplot(object, ...)",
    "pkg": "stats",
    "desc": "Compute an object to be used for plots relating to the given model     object."
  },
  {
    "name": "princomp",
    "usage": "## S3 method for class 'princomp'",
    "pkg": "stats",
    "desc": "‘princomp’ performs a principal components analysis on the given     numeric data matrix and returns the results as an object of class     ‘princomp’."
  },
  {
    "name": "printCoefmat",
    "usage": "printCoefmat(x, digits = max(3, getOption(\"digits\") - 2),",
    "pkg": "stats",
    "desc": "Utility function to be used in higher-level ‘print’ methods, such     as those for ‘summary.lm’, ‘summary.glm’ and ‘anova’.  The goal is     to provide a flexible interface with smart defaults such that     often, only ‘x’ needs to be specified."
  },
  {
    "name": "profile",
    "usage": "profile(fitted, ...)",
    "pkg": "stats",
    "desc": "Investigates behavior of objective function near the solution     represented by ‘fitted’.     See documentation on method functions for further details."
  },
  {
    "name": "proj",
    "usage": "proj(object, onedf = FALSE, unweighted.scale = FALSE, ...)",
    "pkg": "stats",
    "desc": "‘proj’ returns a matrix or list of matrices giving the projections     of the data onto the terms of a linear model.  It is most     frequently used for ‘aov’ models."
  },
  {
    "name": "promax",
    "usage": "promax(x, m = 4)",
    "pkg": "stats",
    "desc": "These functions ‘rotate’ loading matrices in factor analysis."
  },
  {
    "name": "prop.test",
    "usage": "prop.test(x, n, p = NULL,",
    "pkg": "stats",
    "desc": "‘prop.test’ can be used for testing the null that the proportions     (probabilities of success) in several groups are the same, or that     they equal certain given values."
  },
  {
    "name": "prop.trend.test",
    "usage": "prop.trend.test(x, n, score = seq_along(x))",
    "pkg": "stats",
    "desc": "Performs chi-squared test for trend in proportions, i.e., a test     asymptotically optimal for local alternatives where the log odds     vary in proportion with ‘score’.  By default, ‘score’ is chosen as     the group numbers."
  },
  {
    "name": "psignrank",
    "usage": "psignrank(q, n, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the distribution of the Wilcoxon Signed Rank     statistic obtained from a sample with size ‘n’."
  },
  {
    "name": "pt",
    "usage": "pt(q, df, ncp, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the t distribution with ‘df’ degrees of freedom     (and optional non-centrality parameter ‘ncp’)."
  },
  {
    "name": "ptukey",
    "usage": "ptukey(q, nmeans, df, nranges = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Functions of the distribution of the studentized range, R/s, where     R is the range of a standard normal sample and df*s^2 is     independently distributed as chi-squared with df degrees of     freedom, see ‘pchisq’."
  },
  {
    "name": "punif",
    "usage": "punif(q, min = 0, max = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "These functions provide information about the uniform distribution     on the interval from ‘min’ to ‘max’.  ‘dunif’ gives the density,     ‘punif’ gives the distribution function ‘qunif’ gives the quantile     function and ‘runif’ generates random deviates."
  },
  {
    "name": "pweibull",
    "usage": "pweibull(q, shape, scale = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Weibull distribution with parameters ‘shape’     and ‘scale’."
  },
  {
    "name": "pwilcox",
    "usage": "pwilcox(q, m, n, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the distribution of the Wilcoxon rank sum statistic     obtained from samples with size ‘m’ and ‘n’, respectively."
  },
  {
    "name": "qbeta",
    "usage": "qbeta(p, shape1, shape2, ncp = 0, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Beta distribution with parameters ‘shape1’ and     ‘shape2’ (and optional non-centrality parameter ‘ncp’)."
  },
  {
    "name": "qbinom",
    "usage": "qbinom(p, size, prob, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the binomial distribution with parameters ‘size’     and ‘prob’.     This is conventionally interpreted as the number of ‘successes’ in     ‘size’ trials."
  },
  {
    "name": "qbirthday",
    "usage": "qbirthday(prob = 0.5, classes = 365, coincident = 2)",
    "pkg": "stats",
    "desc": "Computes answers to a generalised _birthday paradox_ problem.     ‘pbirthday’ computes the probability of a coincidence and     ‘qbirthday’ computes the smallest number of observations needed to     have at least a specified probability of coincidence."
  },
  {
    "name": "qcauchy",
    "usage": "qcauchy(p, location = 0, scale = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Cauchy distribution with location parameter     ‘location’ and scale parameter ‘scale’."
  },
  {
    "name": "qchisq",
    "usage": "qchisq(p, df, ncp = 0, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the chi-squared (chi^2) distribution with ‘df’     degrees of freedom and optional non-centrality parameter ‘ncp’."
  },
  {
    "name": "qexp",
    "usage": "qexp(p, rate = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the exponential distribution with rate ‘rate’     (i.e., mean ‘1/rate’)."
  },
  {
    "name": "qgamma",
    "usage": "qgamma(p, shape, rate = 1, scale = 1/rate, lower.tail = TRUE,",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Gamma distribution with parameters ‘shape’ and     ‘scale’."
  },
  {
    "name": "qgeom",
    "usage": "qgeom(p, prob, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the geometric distribution with parameter ‘prob’."
  },
  {
    "name": "qhyper",
    "usage": "qhyper(p, m, n, k, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the hypergeometric distribution."
  },
  {
    "name": "qlnorm",
    "usage": "qlnorm(p, meanlog = 0, sdlog = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the log normal distribution whose logarithm has     mean equal to ‘meanlog’ and standard deviation equal to ‘sdlog’."
  },
  {
    "name": "qlogis",
    "usage": "qlogis(p, location = 0, scale = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the logistic distribution with parameters     ‘location’ and ‘scale’."
  },
  {
    "name": "qnbinom",
    "usage": "qnbinom(p, size, prob, mu, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the negative binomial distribution with parameters     ‘size’ and ‘prob’."
  },
  {
    "name": "qnorm",
    "usage": "qnorm(p, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the normal distribution with mean equal to ‘mean’     and standard deviation equal to ‘sd’."
  },
  {
    "name": "qpois",
    "usage": "qpois(p, lambda, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Poisson distribution with parameter ‘lambda’."
  },
  {
    "name": "qqline",
    "usage": "qqline(y, datax = FALSE, distribution = qnorm,",
    "pkg": "stats",
    "desc": "‘qqnorm’ is a generic function the default method of which     produces a normal QQ plot of the values in ‘y’.  ‘qqline’ adds a     line to a “theoretical”, by default normal, quantile-quantile plot     which passes through the ‘probs’ quantiles, by default the first     and third quartiles.     ‘qqplot’ produces a QQ plot of two datasets.     Graphical parameters may be given as arguments to ‘qqnorm’,     ‘qqplot’ and ‘qqline’."
  },
  {
    "name": "qqnorm",
    "usage": "qqnorm(y, ylim, main = \"Normal Q-Q Plot\",",
    "pkg": "stats",
    "desc": "‘qqnorm’ is a generic function the default method of which     produces a normal QQ plot of the values in ‘y’.  ‘qqline’ adds a     line to a “theoretical”, by default normal, quantile-quantile plot     which passes through the ‘probs’ quantiles, by default the first     and third quartiles.     ‘qqplot’ produces a QQ plot of two datasets.     Graphical parameters may be given as arguments to ‘qqnorm’,     ‘qqplot’ and ‘qqline’."
  },
  {
    "name": "qqplot",
    "usage": "qqplot(x, y, plot.it = TRUE, xlab = deparse(substitute(x)),",
    "pkg": "stats",
    "desc": "‘qqnorm’ is a generic function the default method of which     produces a normal QQ plot of the values in ‘y’.  ‘qqline’ adds a     line to a “theoretical”, by default normal, quantile-quantile plot     which passes through the ‘probs’ quantiles, by default the first     and third quartiles.     ‘qqplot’ produces a QQ plot of two datasets.     Graphical parameters may be given as arguments to ‘qqnorm’,     ‘qqplot’ and ‘qqline’."
  },
  {
    "name": "qsignrank",
    "usage": "qsignrank(p, n, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the distribution of the Wilcoxon Signed Rank     statistic obtained from a sample with size ‘n’."
  },
  {
    "name": "qt",
    "usage": "qt(p, df, ncp, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the t distribution with ‘df’ degrees of freedom     (and optional non-centrality parameter ‘ncp’)."
  },
  {
    "name": "qtukey",
    "usage": "qtukey(p, nmeans, df, nranges = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Functions of the distribution of the studentized range, R/s, where     R is the range of a standard normal sample and df*s^2 is     independently distributed as chi-squared with df degrees of     freedom, see ‘pchisq’."
  },
  {
    "name": "quade.test",
    "usage": "quade.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs a Quade test with unreplicated blocked data."
  },
  {
    "name": "quantile",
    "usage": "quantile(x, probs = seq(0, 1, 0.25), na.rm = FALSE,",
    "pkg": "stats",
    "desc": "The generic function ‘quantile’ produces sample quantiles     corresponding to the given probabilities.  The smallest     observation corresponds to a probability of 0 and the largest to a     probability of 1."
  },
  {
    "name": "quasi",
    "usage": "quasipoisson(link = \"log\")",
    "pkg": "stats",
    "desc": "Family objects provide a convenient way to specify the details of     the models used by functions such as ‘glm’.  See the documentation     for ‘glm’ for the details on how such model fitting takes place."
  },
  {
    "name": "quasibinomial",
    "usage": "quasibinomial(link = \"logit\")",
    "pkg": "stats",
    "desc": "Family objects provide a convenient way to specify the details of     the models used by functions such as ‘glm’.  See the documentation     for ‘glm’ for the details on how such model fitting takes place."
  },
  {
    "name": "quasipoisson",
    "usage": "quasipoisson(link = \"log\")",
    "pkg": "stats",
    "desc": "Family objects provide a convenient way to specify the details of     the models used by functions such as ‘glm’.  See the documentation     for ‘glm’ for the details on how such model fitting takes place."
  },
  {
    "name": "qunif",
    "usage": "qunif(p, min = 0, max = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "These functions provide information about the uniform distribution     on the interval from ‘min’ to ‘max’.  ‘dunif’ gives the density,     ‘punif’ gives the distribution function ‘qunif’ gives the quantile     function and ‘runif’ generates random deviates."
  },
  {
    "name": "qweibull",
    "usage": "qweibull(p, shape, scale = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Weibull distribution with parameters ‘shape’     and ‘scale’."
  },
  {
    "name": "qwilcox",
    "usage": "qwilcox(p, m, n, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the distribution of the Wilcoxon rank sum statistic     obtained from samples with size ‘m’ and ‘n’, respectively."
  },
  {
    "name": "r2dtable",
    "usage": "r2dtable(n, r, c)",
    "pkg": "stats",
    "desc": "Generate random 2-way tables with given marginals using     Patefield's algorithm."
  },
  {
    "name": "rbeta",
    "usage": "rbeta(n, shape1, shape2, ncp = 0)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Beta distribution with parameters ‘shape1’ and     ‘shape2’ (and optional non-centrality parameter ‘ncp’)."
  },
  {
    "name": "rbinom",
    "usage": "rbinom(n, size, prob)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the binomial distribution with parameters ‘size’     and ‘prob’.     This is conventionally interpreted as the number of ‘successes’ in     ‘size’ trials."
  },
  {
    "name": "rcauchy",
    "usage": "rcauchy(n, location = 0, scale = 1)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Cauchy distribution with location parameter     ‘location’ and scale parameter ‘scale’."
  },
  {
    "name": "rchisq",
    "usage": "rchisq(n, df, ncp = 0)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the chi-squared (chi^2) distribution with ‘df’     degrees of freedom and optional non-centrality parameter ‘ncp’."
  },
  {
    "name": "read.ftable",
    "usage": "read.ftable(file, sep = \"\", quote = \"\\\"\",",
    "pkg": "stats",
    "desc": "Read, write and coerce ‘flat’ contingency tables."
  },
  {
    "name": "rect.hclust",
    "usage": "rect.hclust(tree, k = NULL, which = NULL, x = NULL, h = NULL,",
    "pkg": "stats",
    "desc": "Draws rectangles around the branches of a dendrogram highlighting     the corresponding clusters. First the dendrogram is cut at a     certain level, then a rectangle is drawn around selected branches."
  },
  {
    "name": "reformulate",
    "usage": "reformulate(termlabels, response = NULL, intercept = TRUE)",
    "pkg": "stats",
    "desc": "‘delete.response’ returns a ‘terms’ object for the same model but     with no response variable.     ‘drop.terms’ removes variables from the right-hand side of the     model. There is also a ‘\"[.terms\"’ method to perform the same     function (with ‘keep.response = TRUE’).     ‘reformulate’ creates a formula from a character vector."
  },
  {
    "name": "relevel",
    "usage": "relevel(x, ref, ...)",
    "pkg": "stats",
    "desc": "The levels of a factor are re-ordered so that the level specified     by ‘ref’ is first and the others are moved down. This is useful     for ‘contr.treatment’ contrasts which take the first level as the     reference."
  },
  {
    "name": "replications",
    "usage": "replications(formula, data = NULL, na.action)",
    "pkg": "stats",
    "desc": "Returns a vector or a list of the number of replicates for each     term in the formula."
  },
  {
    "name": "reshape",
    "usage": "reshape(data, varying = NULL, v.names = NULL, timevar = \"time\",",
    "pkg": "stats",
    "desc": "This function reshapes a data frame between ‘wide’ format with     repeated measurements in separate columns of the same record and     ‘long’ format with the repeated measurements in separate records."
  },
  {
    "name": "resid",
    "usage": "resid(object, ...)",
    "pkg": "stats",
    "desc": "‘residuals’ is a generic function which extracts model residuals     from objects returned by modeling functions.     The abbreviated form ‘resid’ is an alias for ‘residuals’.  It is     intended to encourage users to access object components through an     accessor function rather than by directly referencing an object     slot.     All object classes which are returned by model fitting functions     should provide a ‘residuals’ method.  (Note that the method is for     ‘residuals’ and not ‘resid’.)     Methods can make use of ‘naresid’ methods to compensate for the     omission of missing values.  The default, ‘nls’ and     ‘smooth.spline’ methods do."
  },
  {
    "name": "residuals",
    "usage": "residuals(object, ...)",
    "pkg": "stats",
    "desc": "‘residuals’ is a generic function which extracts model residuals     from objects returned by modeling functions.     The abbreviated form ‘resid’ is an alias for ‘residuals’.  It is     intended to encourage users to access object components through an     accessor function rather than by directly referencing an object     slot.     All object classes which are returned by model fitting functions     should provide a ‘residuals’ method.  (Note that the method is for     ‘residuals’ and not ‘resid’.)     Methods can make use of ‘naresid’ methods to compensate for the     omission of missing values.  The default, ‘nls’ and     ‘smooth.spline’ methods do."
  },
  {
    "name": "rexp",
    "usage": "rexp(n, rate = 1)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the exponential distribution with rate ‘rate’     (i.e., mean ‘1/rate’)."
  },
  {
    "name": "rgamma",
    "usage": "rgamma(n, shape, rate = 1, scale = 1/rate)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Gamma distribution with parameters ‘shape’ and     ‘scale’."
  },
  {
    "name": "rgeom",
    "usage": "rgeom(n, prob)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the geometric distribution with parameter ‘prob’."
  },
  {
    "name": "rhyper",
    "usage": "rhyper(nn, m, n, k)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the hypergeometric distribution."
  },
  {
    "name": "rlnorm",
    "usage": "rlnorm(n, meanlog = 0, sdlog = 1)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the log normal distribution whose logarithm has     mean equal to ‘meanlog’ and standard deviation equal to ‘sdlog’."
  },
  {
    "name": "rlogis",
    "usage": "rlogis(n, location = 0, scale = 1)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the logistic distribution with parameters     ‘location’ and ‘scale’."
  },
  {
    "name": "rmultinom",
    "usage": "rmultinom(n, size, prob)",
    "pkg": "stats",
    "desc": "Generate multinomially distributed random number vectors and     compute multinomial probabilities."
  },
  {
    "name": "rnbinom",
    "usage": "rnbinom(n, size, prob, mu)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the negative binomial distribution with parameters     ‘size’ and ‘prob’."
  },
  {
    "name": "rnorm",
    "usage": "rnorm(n, mean = 0, sd = 1)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the normal distribution with mean equal to ‘mean’     and standard deviation equal to ‘sd’."
  },
  {
    "name": "rpois",
    "usage": "rpois(n, lambda)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Poisson distribution with parameter ‘lambda’."
  },
  {
    "name": "rsignrank",
    "usage": "rsignrank(nn, n)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the distribution of the Wilcoxon Signed Rank     statistic obtained from a sample with size ‘n’."
  },
  {
    "name": "rstandard",
    "usage": "rstandard(model, infl = influence(model, do.coef = FALSE),",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "rstudent",
    "usage": "rstudent(model, infl = influence(model, do.coef = FALSE), ...)",
    "pkg": "stats",
    "desc": "This suite of functions can be used to compute some of the     regression (leave-one-out deletion) diagnostics for linear and     generalized linear models discussed in Belsley, Kuh and Welsch     (1980), Cook and Weisberg (1982), etc."
  },
  {
    "name": "rt",
    "usage": "rt(n, df, ncp)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the t distribution with ‘df’ degrees of freedom     (and optional non-centrality parameter ‘ncp’)."
  },
  {
    "name": "runif",
    "usage": "runif(n, min = 0, max = 1)",
    "pkg": "stats",
    "desc": "These functions provide information about the uniform distribution     on the interval from ‘min’ to ‘max’.  ‘dunif’ gives the density,     ‘punif’ gives the distribution function ‘qunif’ gives the quantile     function and ‘runif’ generates random deviates."
  },
  {
    "name": "runmed",
    "usage": "runmed(x, k, endrule = c(\"median\", \"keep\", \"constant\"),",
    "pkg": "stats",
    "desc": "Compute running medians of odd span.  This is the ‘most robust’     scatter plot smoothing possible.  For efficiency (and historical     reason), you can use one of two different algorithms giving     identical results."
  },
  {
    "name": "rweibull",
    "usage": "rweibull(n, shape, scale = 1)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the Weibull distribution with parameters ‘shape’     and ‘scale’."
  },
  {
    "name": "rwilcox",
    "usage": "rwilcox(nn, m, n)",
    "pkg": "stats",
    "desc": "Density, distribution function, quantile function and random     generation for the distribution of the Wilcoxon rank sum statistic     obtained from samples with size ‘m’ and ‘n’, respectively."
  },
  {
    "name": "rWishart",
    "usage": "rWishart(n, df, Sigma)",
    "pkg": "stats",
    "desc": "Generate ‘n’ random matrices, distributed according to the Wishart     distribution with parameters ‘Sigma’ and ‘df’, W_p(Sigma, df)."
  },
  {
    "name": "scatter.smooth",
    "usage": "scatter.smooth(x, y = NULL, span = 2/3, degree = 1,",
    "pkg": "stats",
    "desc": "Plot and add a smooth curve computed by ‘loess’ to a scatter plot."
  },
  {
    "name": "screeplot",
    "usage": "screeplot(x, npcs = min(10, length(x$sdev)),",
    "pkg": "stats",
    "desc": "‘screeplot.default’ plots the variances against the number of the     principal component. This is also the ‘plot’ method for classes     ‘\"princomp\"’ and ‘\"prcomp\"’."
  },
  {
    "name": "sd",
    "usage": "sd(x, na.rm = FALSE)",
    "pkg": "stats",
    "desc": "This function computes the standard deviation of the values in     ‘x’.  If ‘na.rm’ is ‘TRUE’ then missing values are removed before     computation proceeds."
  },
  {
    "name": "se.contrast",
    "usage": "se.contrast(object, contrast.obj,",
    "pkg": "stats",
    "desc": "Returns the standard errors for one or more contrasts in an ‘aov’     object."
  },
  {
    "name": "selfStart",
    "usage": "selfStart(model, initial, parameters, template)",
    "pkg": "stats",
    "desc": "Construct self-starting nonlinear models."
  },
  {
    "name": "setNames",
    "usage": "setNames(object = nm, nm)",
    "pkg": "stats",
    "desc": "This is a convenience function that sets the names on an object     and returns the object.  It is most useful at the end of a     function definition where one is creating the object to be     returned and would prefer not to store it under a name just so the     names can be assigned."
  },
  {
    "name": "shapiro.test",
    "usage": "shapiro.test(x)",
    "pkg": "stats",
    "desc": "Performs the Shapiro-Wilk test of normality."
  },
  {
    "name": "sigma",
    "usage": "sigma(object, use.fallback = TRUE, ...)",
    "pkg": "stats",
    "desc": "Extract the estimated standard deviation of the errors, the     “residual standard deviation” (misnomed also “residual standard     error”, e.g., in ‘summary.lm()’'s output, from a fitted model).     Many classical statistical models have a _scale parameter_,     typically the standard deviation of a zero-mean normal (or     Gaussian) random variable which is denoted as sigma.  ‘sigma(.)’     extracts the _estimated_ parameter from a fitted model, i.e.,     sigma^."
  },
  {
    "name": "simulate",
    "usage": "simulate(object, nsim = 1, seed = NULL, ...)",
    "pkg": "stats",
    "desc": "Simulate one or more responses from the distribution corresponding     to a fitted model object."
  },
  {
    "name": "smooth",
    "usage": "smooth(x, kind = c(\"3RS3R\", \"3RSS\", \"3RSR\", \"3R\", \"3\", \"S\"),",
    "pkg": "stats",
    "desc": "Tukey's smoothers, _3RS3R_, _3RSS_, _3R_, etc."
  },
  {
    "name": "smooth.spline",
    "usage": "smooth.spline(x, y = NULL, w = NULL, df, spar = NULL, lambda = NULL, cv = FALSE,",
    "pkg": "stats",
    "desc": "Fits a cubic smoothing spline to the supplied data."
  },
  {
    "name": "smoothEnds",
    "usage": "smoothEnds(y, k = 3)",
    "pkg": "stats",
    "desc": "Smooth end points of a vector ‘y’ using subsequently smaller     medians and Tukey's end point rule at the very end. (of odd span),"
  },
  {
    "name": "sortedXyData",
    "usage": "sortedXyData(x, y, data)",
    "pkg": "stats",
    "desc": "This is a constructor function for the class of ‘sortedXyData’     objects.  These objects are mostly used in the ‘initial’ function     for a self-starting nonlinear regression model, which will be of     the ‘selfStart’ class."
  },
  {
    "name": "spec.ar",
    "usage": "spec.ar(x, n.freq, order = NULL, plot = TRUE, na.action = na.fail,",
    "pkg": "stats",
    "desc": "Fits an AR model to ‘x’ (or uses the existing fit) and computes     (and by default plots) the spectral density of the fitted model."
  },
  {
    "name": "spec.pgram",
    "usage": "spec.pgram(x, spans = NULL, kernel, taper = 0.1,",
    "pkg": "stats",
    "desc": "‘spec.pgram’ calculates the periodogram using a fast Fourier     transform, and optionally smooths the result with a series of     modified Daniell smoothers (moving averages giving half weight to     the end values)."
  },
  {
    "name": "spec.taper",
    "usage": "spec.taper(x, p = 0.1)",
    "pkg": "stats",
    "desc": "Apply a cosine-bell taper to a time series."
  },
  {
    "name": "spectrum",
    "usage": "spectrum(x, ..., method = c(\"pgram\", \"ar\"))",
    "pkg": "stats",
    "desc": "The ‘spectrum’ function estimates the spectral density of a time     series."
  },
  {
    "name": "spline",
    "usage": "splinefunH(x, y, m)",
    "pkg": "stats",
    "desc": "Perform cubic (or Hermite) spline interpolation of given data     points, returning either a list of points obtained by the     interpolation or a _function_ performing the interpolation."
  },
  {
    "name": "splinefun",
    "usage": "splinefunH(x, y, m)",
    "pkg": "stats",
    "desc": "Perform cubic (or Hermite) spline interpolation of given data     points, returning either a list of points obtained by the     interpolation or a _function_ performing the interpolation."
  },
  {
    "name": "splinefunH",
    "usage": "splinefunH(x, y, m)",
    "pkg": "stats",
    "desc": "Perform cubic (or Hermite) spline interpolation of given data     points, returning either a list of points obtained by the     interpolation or a _function_ performing the interpolation."
  },
  {
    "name": "SSasymp",
    "usage": "SSasymp(input, Asym, R0, lrc)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates the asymptotic regression     function and its gradient.  It has an ‘initial’ attribute that     will evaluate initial estimates of the parameters ‘Asym’, ‘R0’,     and ‘lrc’ for a given set of data."
  },
  {
    "name": "SSasympOff",
    "usage": "SSasympOff(input, Asym, lrc, c0)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates an alternative parametrization of     the asymptotic regression function and the gradient with respect     to those parameters.  It has an ‘initial’ attribute that creates     initial estimates of the parameters ‘Asym’, ‘lrc’, and ‘c0’."
  },
  {
    "name": "SSasympOrig",
    "usage": "SSasympOrig(input, Asym, lrc)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates the asymptotic regression     function through the origin and its gradient.  It has an ‘initial’     attribute that will evaluate initial estimates of the parameters     ‘Asym’ and ‘lrc’ for a given set of data."
  },
  {
    "name": "SSbiexp",
    "usage": "SSbiexp(input, A1, lrc1, A2, lrc2)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates the biexponential model function     and its gradient.  It has an ‘initial’ attribute that creates     initial estimates of the parameters ‘A1’, ‘lrc1’, ‘A2’, and     ‘lrc2’."
  },
  {
    "name": "SSD",
    "usage": "# S3 methods for class 'SSD' and 'mlm'",
    "pkg": "stats",
    "desc": "Functions to compute matrix of residual sums of squares and     products, or the estimated variance matrix for multivariate linear     models."
  },
  {
    "name": "SSfol",
    "usage": "SSfol(Dose, input, lKe, lKa, lCl)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates the first-order compartment     function and its gradient.  It has an ‘initial’ attribute that     creates initial estimates of the parameters ‘lKe’, ‘lKa’, and     ‘lCl’."
  },
  {
    "name": "SSfpl",
    "usage": "SSfpl(input, A, B, xmid, scal)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates the four-parameter logistic     function and its gradient.  It has an ‘initial’ attribute that     will evaluate initial estimates of the parameters ‘A’, ‘B’,     ‘xmid’, and ‘scal’ for a given set of data."
  },
  {
    "name": "SSgompertz",
    "usage": "SSgompertz(x, Asym, b2, b3)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates the Gompertz growth model and its     gradient.  It has an ‘initial’ attribute that creates initial     estimates of the parameters ‘Asym’, ‘b2’, and ‘b3’."
  },
  {
    "name": "SSlogis",
    "usage": "SSlogis(input, Asym, xmid, scal)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates the logistic function and its     gradient.  It has an ‘initial’ attribute that creates initial     estimates of the parameters ‘Asym’, ‘xmid’, and ‘scal’."
  },
  {
    "name": "SSmicmen",
    "usage": "SSmicmen(input, Vm, K)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates the Michaelis-Menten model and     its gradient.  It has an ‘initial’ attribute that will evaluate     initial estimates of the parameters ‘Vm’ and ‘K’"
  },
  {
    "name": "SSweibull",
    "usage": "SSweibull(x, Asym, Drop, lrc, pwr)",
    "pkg": "stats",
    "desc": "This ‘selfStart’ model evaluates the Weibull model for growth     curve data and its gradient.  It has an ‘initial’ attribute that     will evaluate initial estimates of the parameters ‘Asym’, ‘Drop’,     ‘lrc’, and ‘pwr’ for a given set of data."
  },
  {
    "name": "start",
    "usage": "start(x, ...)",
    "pkg": "stats",
    "desc": "Extract and encode the times the first and last observations were     taken. Provided only for compatibility with S version 2."
  },
  {
    "name": "stat.anova",
    "usage": "stat.anova(table, test = c(\"Rao\",\"LRT\", \"Chisq\", \"F\", \"Cp\"),",
    "pkg": "stats",
    "desc": "This is a utility function, used in ‘lm’ and ‘glm’ methods for     ‘anova(..., test != NULL)’ and should not be used by the average     user."
  },
  {
    "name": "step",
    "usage": "trace = 1, keep = NULL, steps = 1000, k = 2, ...)",
    "pkg": "stats",
    "desc": "Select a formula-based model by AIC."
  },
  {
    "name": "stepfun",
    "usage": "## S3 method for class 'stepfun'",
    "pkg": "stats",
    "desc": "Given the vectors (x[1], ..., x[n]) and (y[0], y[1], ..., y[n])     (one value more!), ‘stepfun(x, y, ...)’ returns an interpolating     ‘step’ function, say ‘fn’. I.e., fn(t) = c[i] (constant) for t in     ( x[i], x[i+1]) and at the abscissa values, if (by default) ‘right     = FALSE’, fn(x[i]) = y[i] and for ‘right = TRUE’, fn(x[i]) =     y[i-1], for i=1, ..., n.     The value of the constant c[i] above depends on the ‘continuity’     parameter ‘f’.  For the default, ‘right = FALSE, f = 0’, ‘fn’ is a     _cadlag_ function, i.e., continuous from the right, limits from     the left, so that the function is piecewise constant on intervals     that include their _left_ endpoint.  In general, c[i] is     interpolated in between the neighbouring y values, c[i] =     (1-f)*y[i] + f*y[i+1].  Therefore, for non-0 values of ‘f’, ‘fn’     may no longer be a proper step function, since it can be     discontinuous from both sides, unless ‘right = TRUE, f = 1’ which     is left-continuous (i.e., constant pieces contain their right     endpoint)."
  },
  {
    "name": "stl",
    "usage": "stl(x, s.window, s.degree = 0,",
    "pkg": "stats",
    "desc": "Decompose a time series into seasonal, trend and irregular     components using ‘loess’, acronym STL."
  },
  {
    "name": "StructTS",
    "usage": "StructTS(x, type = c(\"level\", \"trend\", \"BSM\"), init = NULL,",
    "pkg": "stats",
    "desc": "Fit a structural model for a time series by maximum likelihood."
  },
  {
    "name": "summary.glm",
    "usage": "## S3 method for class 'summary.glm'",
    "pkg": "stats",
    "desc": "These functions are all ‘methods’ for class ‘glm’ or ‘summary.glm’     objects."
  },
  {
    "name": "summary.lm",
    "usage": "## S3 method for class 'summary.lm'",
    "pkg": "stats",
    "desc": "‘summary’ method for class ‘\"lm\"’."
  },
  {
    "name": "supsmu",
    "usage": "supsmu(x, y, wt =, span = \"cv\", periodic = FALSE, bass = 0, trace = FALSE)",
    "pkg": "stats",
    "desc": "Smooth the (x, y) values by Friedman's ‘super smoother’."
  },
  {
    "name": "symnum",
    "usage": "symnum(x, cutpoints = c(0.3, 0.6, 0.8, 0.9, 0.95),",
    "pkg": "stats",
    "desc": "Symbolically encode a given numeric or logical vector or array.     Particularly useful for visualization of structured matrices,     e.g., correlation, sparse, or logical ones."
  },
  {
    "name": "t.test",
    "usage": "t.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs one and two sample t-tests on vectors of data."
  },
  {
    "name": "termplot",
    "usage": "termplot(model, data = NULL, envir = environment(formula(model)),",
    "pkg": "stats",
    "desc": "Plots regression terms against their predictors, optionally with     standard errors and partial residuals added."
  },
  {
    "name": "terms",
    "usage": "terms(x, ...)",
    "pkg": "stats",
    "desc": "The function ‘terms’ is a generic function which can be used to     extract _terms_ objects from various kinds of R data objects."
  },
  {
    "name": "time",
    "usage": "time(x, offset = 0, ...)",
    "pkg": "stats",
    "desc": "‘time’ creates the vector of times at which a time series was     sampled.     ‘cycle’ gives the positions in the cycle of each observation.     ‘frequency’ returns the number of samples per unit time and     ‘deltat’ the time interval between observations (see ‘ts’)."
  },
  {
    "name": "toeplitz",
    "usage": "toeplitz(x)",
    "pkg": "stats",
    "desc": "Forms a symmetric Toeplitz matrix given its first row."
  },
  {
    "name": "ts",
    "usage": "is.ts(x)",
    "pkg": "stats",
    "desc": "The function ‘ts’ is used to create time-series objects.     ‘as.ts’ and ‘is.ts’ coerce an object to a time-series and test     whether an object is a time series."
  },
  {
    "name": "ts.intersect",
    "usage": "ts.intersect(..., dframe = FALSE)",
    "pkg": "stats",
    "desc": "Bind time series which have a common frequency. ‘ts.union’ pads     with ‘NA’s to the total time coverage, ‘ts.intersect’ restricts to     the time covered by all the series."
  },
  {
    "name": "ts.plot",
    "usage": "ts.plot(..., gpars = list())",
    "pkg": "stats",
    "desc": "Plot several time series on a common plot. Unlike ‘plot.ts’ the     series can have a different time bases, but they should have the     same frequency."
  },
  {
    "name": "ts.union",
    "usage": "ts.union(..., dframe = FALSE)",
    "pkg": "stats",
    "desc": "Bind time series which have a common frequency. ‘ts.union’ pads     with ‘NA’s to the total time coverage, ‘ts.intersect’ restricts to     the time covered by all the series."
  },
  {
    "name": "tsdiag",
    "usage": "tsdiag(object, gof.lag, ...)",
    "pkg": "stats",
    "desc": "A generic function to plot time-series diagnostics."
  },
  {
    "name": "tsp",
    "usage": "tsp(x) <- value",
    "pkg": "stats",
    "desc": "‘tsp’ returns the ‘tsp’ attribute (or ‘NULL’).  It is included for     compatibility with S version 2. ‘tsp<-’ sets the ‘tsp’ attribute.     ‘hasTsp’ ensures ‘x’ has a ‘tsp’ attribute, by adding one if     needed."
  },
  {
    "name": "tsSmooth",
    "usage": "tsSmooth(object, ...)",
    "pkg": "stats",
    "desc": "Performs fixed-interval smoothing on a univariate time series via     a state-space model.  Fixed-interval smoothing gives the best     estimate of the state at each time point based on the whole     observed series."
  },
  {
    "name": "TukeyHSD",
    "usage": "TukeyHSD(x, which, ordered = FALSE, conf.level = 0.95, ...)",
    "pkg": "stats",
    "desc": "Create a set of confidence intervals on the differences between     the means of the levels of a factor with the specified family-wise     probability of coverage.  The intervals are based on the     Studentized range statistic, Tukey's ‘Honest Significant     Difference’ method."
  },
  {
    "name": "uniroot",
    "usage": "uniroot(f, interval, ...,",
    "pkg": "stats",
    "desc": "The function ‘uniroot’ searches the interval from ‘lower’ to     ‘upper’ for a root (i.e., zero) of the function ‘f’ with respect     to its first argument.     Setting ‘extendInt’ to a non-‘\"no\"’ string, means searching for     the correct ‘interval = c(lower,upper)’ if ‘sign(f(x))’ does not     satisfy the requirements at the interval end points; see the     ‘Details’ section."
  },
  {
    "name": "update",
    "usage": "update(object, formula., ..., evaluate = TRUE)",
    "pkg": "stats",
    "desc": "‘update’ will update and (by default) re-fit a model.  It does     this by extracting the call stored in the object, updating the     call and (by default) evaluating that call.  Sometimes it is     useful to call ‘update’ with only one argument, for example if the     data frame has been corrected.     “Extracting the call” in ‘update()’ and similar functions uses     ‘getCall()’ which itself is a (S3) generic function with a default     method that simply gets ‘x$call’.     Because of this, ‘update()’ will often work (via its default     method) on new model classes, either automatically, or by     providing a simple ‘getCall()’ method for that class."
  },
  {
    "name": "var",
    "usage": "var(x, y = NULL, na.rm = FALSE, use)",
    "pkg": "stats",
    "desc": "‘var’, ‘cov’ and ‘cor’ compute the variance of ‘x’ and the     covariance or correlation of ‘x’ and ‘y’ if these are vectors.  If     ‘x’ and ‘y’ are matrices then the covariances (or correlations)     between the columns of ‘x’ and the columns of ‘y’ are computed.     ‘cov2cor’ scales a covariance matrix into the corresponding     correlation matrix _efficiently_."
  },
  {
    "name": "var.test",
    "usage": "var.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs an F test to compare the variances of two samples from     normal populations."
  },
  {
    "name": "varimax",
    "usage": "varimax(x, normalize = TRUE, eps = 1e-5)",
    "pkg": "stats",
    "desc": "These functions ‘rotate’ loading matrices in factor analysis."
  },
  {
    "name": "vcov",
    "usage": "vcov(object, ...)",
    "pkg": "stats",
    "desc": "Returns the variance-covariance matrix of the main parameters of a     fitted model object."
  },
  {
    "name": "weighted.mean",
    "usage": "weighted.mean(x, w, ..., na.rm = FALSE)",
    "pkg": "stats",
    "desc": "Compute a weighted mean."
  },
  {
    "name": "weighted.residuals",
    "usage": "weighted.residuals(obj, drop0 = TRUE)",
    "pkg": "stats",
    "desc": "Computed weighted residuals from a linear model fit."
  },
  {
    "name": "weights",
    "usage": "weights(object, ...)",
    "pkg": "stats",
    "desc": "‘weights’ is a generic function which extracts fitting weights     from objects returned by modeling functions.     Methods can make use of ‘napredict’ methods to compensate for the     omission of missing values.  The default methods does so."
  },
  {
    "name": "wilcox.test",
    "usage": "wilcox.test(formula, data, subset, na.action, ...)",
    "pkg": "stats",
    "desc": "Performs one- and two-sample Wilcoxon tests on vectors of data;     the latter is also known as ‘Mann-Whitney’ test."
  },
  {
    "name": "window",
    "usage": "window(x, start, end, frequency, deltat, ...) <- value",
    "pkg": "stats",
    "desc": "‘window’ is a generic function which extracts the subset of the     object ‘x’ observed between the times ‘start’ and ‘end’. If a     frequency is specified, the series is then re-sampled at the new     frequency."
  },
  {
    "name": "write.ftable",
    "usage": "write.ftable(x, file = \"\", quote = TRUE, append = FALSE,",
    "pkg": "stats",
    "desc": "Read, write and coerce ‘flat’ contingency tables."
  },
  {
    "name": "xtabs",
    "usage": "## S3 method for class 'xtabs'",
    "pkg": "stats",
    "desc": "Create a contingency table (optionally a sparse matrix) from     cross-classifying factors, usually contained in a data frame,     using a formula interface."
  },
  {
    "name": "?",
    "usage": "type?topic",
    "pkg": "utils",
    "desc": "These functions provide access to documentation.  Documentation on     a topic with name ‘name’ (typically, an R object or a data set)     can be displayed by either ‘help(\"name\")’ or ‘?name’."
  },
  {
    "name": "adist",
    "usage": "adist(x, y = NULL, costs = NULL, counts = FALSE, fixed = TRUE,",
    "pkg": "utils",
    "desc": "Compute the approximate string distance between character vectors.     The distance is a generalized Levenshtein (edit) distance, giving     the minimal possibly weighted number of insertions, deletions and     substitutions needed to transform one string into another."
  },
  {
    "name": "apropos",
    "usage": "apropos(what, where = FALSE, ignore.case = TRUE, mode = \"any\")",
    "pkg": "utils",
    "desc": "‘apropos()’ returns a character vector giving the names of objects     in the search list matching (as a regular expression) ‘what’.     ‘find()’ returns where objects of a given name can be found."
  },
  {
    "name": "aregexec",
    "usage": "aregexec(pattern, text, max.distance = 0.1, costs = NULL,",
    "pkg": "utils",
    "desc": "Determine positions of approximate string matches."
  },
  {
    "name": "argsAnywhere",
    "usage": "argsAnywhere(x)",
    "pkg": "utils",
    "desc": "These functions locate all objects with name matching their     argument, whether visible on the search path, registered as an S3     method or in a namespace but not exported.  ‘getAnywhere()’     returns the objects and ‘argsAnywhere()’ returns the arguments of     any objects that are functions."
  },
  {
    "name": "as.person",
    "usage": "as.person(x)",
    "pkg": "utils",
    "desc": "A class and utility methods for holding information about persons     like name and email address."
  },
  {
    "name": "as.relistable",
    "usage": "as.relistable(x)",
    "pkg": "utils",
    "desc": "‘relist()’ is an S3 generic function with a few methods in order     to allow easy inversion of ‘unlist(obj)’ when that is used with an     object ‘obj’ of (S3) class ‘\"relistable\"’."
  },
  {
    "name": "as.roman",
    "usage": "as.roman(x)",
    "pkg": "utils",
    "desc": "Simple manipulation of (a small set of) integer numbers as roman     numerals."
  },
  {
    "name": "aspell",
    "usage": "aspell(files, filter, control = list(), encoding = \"unknown\",",
    "pkg": "utils",
    "desc": "Spell check given files via Aspell, Hunspell or Ispell."
  },
  {
    "name": "aspell_package_C_files",
    "usage": "aspell_package_C_files(dir, ignore = character(), control = list(),",
    "pkg": "utils",
    "desc": "Utilities for spell checking packages via Aspell, Hunspell or     Ispell."
  },
  {
    "name": "aspell_package_R_files",
    "usage": "aspell_package_R_files(dir, ignore = character(), control = list(),",
    "pkg": "utils",
    "desc": "Utilities for spell checking packages via Aspell, Hunspell or     Ispell."
  },
  {
    "name": "aspell_package_Rd_files",
    "usage": "aspell_package_Rd_files(dir, drop = c(\"\\\\author\", \"\\\\references\"),",
    "pkg": "utils",
    "desc": "Utilities for spell checking packages via Aspell, Hunspell or     Ispell."
  },
  {
    "name": "aspell_package_vignettes",
    "usage": "aspell_package_vignettes(dir,",
    "pkg": "utils",
    "desc": "Utilities for spell checking packages via Aspell, Hunspell or     Ispell."
  },
  {
    "name": "aspell_write_personal_dictionary_file",
    "usage": "aspell_write_personal_dictionary_file(x, out, language = \"en\",",
    "pkg": "utils",
    "desc": "Utilities for spell checking packages via Aspell, Hunspell or     Ispell."
  },
  {
    "name": "assignInMyNamespace",
    "usage": "assignInMyNamespace(x, value)",
    "pkg": "utils",
    "desc": "Utility functions to access and replace the non-exported functions     in a namespace, for use in developing packages with namespaces.     They should not be used in production code (except perhaps     ‘assignInMyNamespace’, but see the ‘Note’)."
  },
  {
    "name": "assignInNamespace",
    "usage": "assignInNamespace(x, value, ns, pos = -1,",
    "pkg": "utils",
    "desc": "Utility functions to access and replace the non-exported functions     in a namespace, for use in developing packages with namespaces.     They should not be used in production code (except perhaps     ‘assignInMyNamespace’, but see the ‘Note’)."
  },
  {
    "name": "available.packages",
    "usage": "available.packages(contriburl = contrib.url(repos, type), method,",
    "pkg": "utils",
    "desc": "‘available.packages’ returns a matrix of details corresponding to     packages currently available at one or more repositories. The     current list of packages is downloaded over the internet (or     copied from a local mirror)."
  },
  {
    "name": "bibentry",
    "usage": "## S3 method for class 'bibentry'",
    "pkg": "utils",
    "desc": "Functionality for representing and manipulating bibliographic     information in enhanced BibTeX style."
  },
  {
    "name": "browseEnv",
    "usage": "browseEnv(envir = .GlobalEnv, pattern,",
    "pkg": "utils",
    "desc": "The ‘browseEnv’ function opens a browser with list of objects     currently in ‘sys.frame()’ environment."
  },
  {
    "name": "browseURL",
    "usage": "browseURL(url, browser = getOption(\"browser\"),",
    "pkg": "utils",
    "desc": "Load a given URL into an HTML browser."
  },
  {
    "name": "browseVignettes",
    "usage": "## S3 method for class 'browseVignettes'",
    "pkg": "utils",
    "desc": "List available vignettes in an HTML browser with links to PDF,     LaTeX/noweb source, and (tangled) R code (if available)."
  },
  {
    "name": "bug.report",
    "usage": "file = \"R.bug.report\", package = NULL, lib.loc = NULL,",
    "pkg": "utils",
    "desc": "Invokes an editor or email program to write a bug report or opens     a web page for bug submission.  Some standard information on the     current version and configuration of R are included automatically."
  },
  {
    "name": "capture.output",
    "usage": "capture.output(..., file = NULL, append = FALSE,",
    "pkg": "utils",
    "desc": "Evaluates its arguments with the output being returned as a     character string or sent to a file.  Related to ‘sink’ in the same     way that ‘with’ is related to ‘attach’."
  },
  {
    "name": "changedFiles",
    "usage": "## S3 method for class 'changedFiles'",
    "pkg": "utils",
    "desc": "‘fileSnapshot’ takes a snapshot of a selection of files, recording     summary information about each.  ‘changedFiles’ compares two     snapshots, or compares one snapshot to the current state of the     file system.  The snapshots need not be the same directory; this     could be used to compare two directories."
  },
  {
    "name": "checkCRAN",
    "usage": "checkCRAN(method)",
    "pkg": "utils",
    "desc": "Functions helping to maintain CRAN, some of them may also be     useful for administrators of other repository networks."
  },
  {
    "name": "chooseBioCmirror",
    "usage": "chooseBioCmirror(graphics = getOption(\"menu.graphics\"), ind = NULL,",
    "pkg": "utils",
    "desc": "Interact with the user to choose a Bioconductor mirror."
  },
  {
    "name": "chooseCRANmirror",
    "usage": "chooseCRANmirror(graphics = getOption(\"menu.graphics\"), ind = NULL,",
    "pkg": "utils",
    "desc": "Interact with the user to choose a CRAN mirror."
  },
  {
    "name": "citation",
    "usage": "citation(package = \"base\", lib.loc = NULL, auto = NULL)",
    "pkg": "utils",
    "desc": "How to cite R and R packages in publications."
  },
  {
    "name": "cite",
    "usage": "citeNatbib(keys, bib, textual = FALSE, before = NULL, after = NULL,",
    "pkg": "utils",
    "desc": "Cite a ‘bibentry’ object in text.  The ‘cite()’ function uses the     ‘cite()’ function from the default ‘bibstyle’ if present, or     ‘citeNatbib()’ if not. ‘citeNatbib()’ uses a style similar to that     used by the LaTeX package ‘natbib’."
  },
  {
    "name": "citeNatbib",
    "usage": "citeNatbib(keys, bib, textual = FALSE, before = NULL, after = NULL,",
    "pkg": "utils",
    "desc": "Cite a ‘bibentry’ object in text.  The ‘cite()’ function uses the     ‘cite()’ function from the default ‘bibstyle’ if present, or     ‘citeNatbib()’ if not. ‘citeNatbib()’ uses a style similar to that     used by the LaTeX package ‘natbib’."
  },
  {
    "name": "citEntry",
    "usage": "citEntry(entry, textVersion, header = NULL, footer = NULL, ...)",
    "pkg": "utils",
    "desc": "Functionality for specifying bibliographic information in enhanced     BibTeX style."
  },
  {
    "name": "citFooter",
    "usage": "citFooter(...)",
    "pkg": "utils",
    "desc": "Functionality for specifying bibliographic information in enhanced     BibTeX style."
  },
  {
    "name": "citHeader",
    "usage": "citHeader(...)",
    "pkg": "utils",
    "desc": "Functionality for specifying bibliographic information in enhanced     BibTeX style."
  },
  {
    "name": "close.socket",
    "usage": "close.socket(socket, ...)",
    "pkg": "utils",
    "desc": "Closes the socket and frees the space in the file descriptor     table.  The port may not be freed immediately."
  },
  {
    "name": "combn",
    "usage": "combn(x, m, FUN = NULL, simplify = TRUE, ...)",
    "pkg": "utils",
    "desc": "Generate all combinations of the elements of ‘x’ taken ‘m’ at a     time.  If ‘x’ is a positive integer, returns all combinations of     the elements of ‘seq(x)’ taken ‘m’ at a time.  If argument ‘FUN’     is not ‘NULL’, applies a function given by the argument to each     point.  If simplify is FALSE, returns a list; otherwise returns an     ‘array’, typically a ‘matrix’.  ‘...’ are passed unchanged to the     ‘FUN’ function, if specified."
  },
  {
    "name": "compareVersion",
    "usage": "compareVersion(a, b)",
    "pkg": "utils",
    "desc": "Compare two package version numbers to see which is later."
  },
  {
    "name": "contrib.url",
    "usage": "contrib.url(repos, type = getOption(\"pkgType\"))",
    "pkg": "utils",
    "desc": "‘contrib.url’ adds the appropriate type-specific path within a     repository to each URL in ‘repos’."
  },
  {
    "name": "count.fields",
    "usage": "count.fields(file, sep = \"\", quote = \"\\\"'\", skip = 0,",
    "pkg": "utils",
    "desc": "‘count.fields’ counts the number of fields, as separated by ‘sep’,     in each of the lines of ‘file’ read."
  },
  {
    "name": "create.post",
    "usage": "create.post(instructions = character(), description = \"post\",",
    "pkg": "utils",
    "desc": "An ancillary function used by ‘bug.report’ and ‘help.request’ to     prepare emails for submission to package maintainers or to R     mailing lists."
  },
  {
    "name": "data",
    "usage": "data(..., list = character(), package = NULL, lib.loc = NULL,",
    "pkg": "utils",
    "desc": "Loads specified data sets, or list the available data sets."
  },
  {
    "name": "data.entry",
    "usage": "data.entry(..., Modes = NULL, Names = NULL)",
    "pkg": "utils",
    "desc": "A spreadsheet-like editor for entering or editing data."
  },
  {
    "name": "dataentry",
    "usage": "dataentry(data, modes)",
    "pkg": "utils",
    "desc": "A spreadsheet-like editor for entering or editing data."
  },
  {
    "name": "de",
    "usage": "de(..., Modes = list(), Names = NULL)",
    "pkg": "utils",
    "desc": "A spreadsheet-like editor for entering or editing data."
  },
  {
    "name": "debugcall",
    "usage": "undebugcall(call)",
    "pkg": "utils",
    "desc": "Set or unset debugging flags based on a call to a function. Takes     into account S3/S4 method dispatch based on the classes of the     arguments in the call."
  },
  {
    "name": "debugger",
    "usage": "debugger(dump = last.dump)",
    "pkg": "utils",
    "desc": "Functions to dump the evaluation environments (frames) and to     examine dumped frames."
  },
  {
    "name": "demo",
    "usage": "echo = TRUE, ask = getOption(\"demo.ask\"),",
    "pkg": "utils",
    "desc": "‘demo’ is a user-friendly interface to running some demonstration     R scripts.  ‘demo()’ gives the list of available topics."
  },
  {
    "name": "download.file",
    "usage": "extra = getOption(\"download.file.extra\"))",
    "pkg": "utils",
    "desc": "This function can be used to download a file from the Internet."
  },
  {
    "name": "download.packages",
    "usage": "download.packages(pkgs, destdir, available = NULL,",
    "pkg": "utils",
    "desc": "These functions can be used to automatically compare the version     numbers of installed packages with the newest available version on     the repositories and update outdated packages on the fly."
  },
  {
    "name": "dump.frames",
    "usage": "dump.frames(dumpto = \"last.dump\", to.file = FALSE,",
    "pkg": "utils",
    "desc": "Functions to dump the evaluation environments (frames) and to     examine dumped frames."
  },
  {
    "name": "edit",
    "usage": "xedit(name = NULL, file = \"\")",
    "pkg": "utils",
    "desc": "Invoke a text editor on an R object."
  },
  {
    "name": "emacs",
    "usage": "xemacs(name = NULL, file = \"\")",
    "pkg": "utils",
    "desc": "Invoke a text editor on an R object."
  },
  {
    "name": "example",
    "usage": "setRNG = FALSE, ask = getOption(\"example.ask\"),",
    "pkg": "utils",
    "desc": "Run all the R code from the *Examples* part of R's online help     topic ‘topic’ with possible exceptions ‘dontrun’, ‘dontshow’, and     ‘donttest’, see ‘Details’ below."
  },
  {
    "name": "file.edit",
    "usage": "file.edit(..., title = file, editor = getOption(\"editor\"),",
    "pkg": "utils",
    "desc": "Edit one or more files in a text editor."
  },
  {
    "name": "fileSnapshot",
    "usage": "## S3 method for class 'fileSnapshot'",
    "pkg": "utils",
    "desc": "‘fileSnapshot’ takes a snapshot of a selection of files, recording     summary information about each.  ‘changedFiles’ compares two     snapshots, or compares one snapshot to the current state of the     file system.  The snapshots need not be the same directory; this     could be used to compare two directories."
  },
  {
    "name": "find",
    "usage": "find(what, mode = \"any\", numeric = FALSE, simple.words = TRUE)",
    "pkg": "utils",
    "desc": "‘apropos()’ returns a character vector giving the names of objects     in the search list matching (as a regular expression) ‘what’.     ‘find()’ returns where objects of a given name can be found."
  },
  {
    "name": "findLineNum",
    "usage": "findLineNum(srcfile, line, nameonly = TRUE,",
    "pkg": "utils",
    "desc": "These functions locate objects containing particular lines of     source code, using the information saved when the code was parsed     with ‘keep.source = TRUE’."
  },
  {
    "name": "fix",
    "usage": "fix(x, ...)",
    "pkg": "utils",
    "desc": "‘fix’ invokes ‘edit’ on ‘x’ and then assigns the new (edited)     version of ‘x’ in the user's workspace."
  },
  {
    "name": "fixInNamespace",
    "usage": "fixInNamespace(x, ns, pos = -1, envir = as.environment(pos), ...)",
    "pkg": "utils",
    "desc": "Utility functions to access and replace the non-exported functions     in a namespace, for use in developing packages with namespaces.     They should not be used in production code (except perhaps     ‘assignInMyNamespace’, but see the ‘Note’)."
  },
  {
    "name": "formatOL",
    "usage": "formatOL(x, type = \"arabic\", offset = 0, start = 1,",
    "pkg": "utils",
    "desc": "Format unordered (itemize) and ordered (enumerate) lists."
  },
  {
    "name": "formatUL",
    "usage": "formatUL(x, label = \"*\", offset = 0,",
    "pkg": "utils",
    "desc": "Format unordered (itemize) and ordered (enumerate) lists."
  },
  {
    "name": "getAnywhere",
    "usage": "getAnywhere(x)",
    "pkg": "utils",
    "desc": "These functions locate all objects with name matching their     argument, whether visible on the search path, registered as an S3     method or in a namespace but not exported.  ‘getAnywhere()’     returns the objects and ‘argsAnywhere()’ returns the arguments of     any objects that are functions."
  },
  {
    "name": "getCRANmirrors",
    "usage": "getCRANmirrors(all = FALSE, local.only = FALSE)",
    "pkg": "utils",
    "desc": "Interact with the user to choose a CRAN mirror."
  },
  {
    "name": "getFromNamespace",
    "usage": "getFromNamespace(x, ns, pos = -1, envir = as.environment(pos))",
    "pkg": "utils",
    "desc": "Utility functions to access and replace the non-exported functions     in a namespace, for use in developing packages with namespaces.     They should not be used in production code (except perhaps     ‘assignInMyNamespace’, but see the ‘Note’)."
  },
  {
    "name": "getParseData",
    "usage": "getParseData(x, includeText = NA)",
    "pkg": "utils",
    "desc": "If the ‘\"keep.source\"’ option is ‘TRUE’, R's parser will attach     detailed information on the object it has parsed.  These functions     retrieve that information."
  },
  {
    "name": "getParseText",
    "usage": "getParseText(parseData, id)",
    "pkg": "utils",
    "desc": "If the ‘\"keep.source\"’ option is ‘TRUE’, R's parser will attach     detailed information on the object it has parsed.  These functions     retrieve that information."
  },
  {
    "name": "getS3method",
    "usage": "getS3method(f, class, optional = FALSE, envir = parent.frame())",
    "pkg": "utils",
    "desc": "Get a method for an S3 generic, possibly from a namespace or the     generic's registry."
  },
  {
    "name": "getSrcDirectory",
    "usage": "getSrcDirectory(x, unique = TRUE)",
    "pkg": "utils",
    "desc": "These functions extract information from source references."
  },
  {
    "name": "getSrcFilename",
    "usage": "getSrcFilename(x, full.names = FALSE, unique = TRUE)",
    "pkg": "utils",
    "desc": "These functions extract information from source references."
  },
  {
    "name": "getSrcLocation",
    "usage": "getSrcLocation(x, which = c(\"line\", \"column\", \"byte\", \"parse\"),",
    "pkg": "utils",
    "desc": "These functions extract information from source references."
  },
  {
    "name": "getSrcref",
    "usage": "getSrcref(x)",
    "pkg": "utils",
    "desc": "These functions extract information from source references."
  },
  {
    "name": "getTxtProgressBar",
    "usage": "getTxtProgressBar(pb)",
    "pkg": "utils",
    "desc": "Text progress bar in the R console."
  },
  {
    "name": "glob2rx",
    "usage": "glob2rx(pattern, trim.head = FALSE, trim.tail = TRUE)",
    "pkg": "utils",
    "desc": "Change _wildcard_ aka _globbing_ patterns into the corresponding     regular expressions (‘regexp’)."
  },
  {
    "name": "globalVariables",
    "usage": "globalVariables(names, package, add = TRUE)",
    "pkg": "utils",
    "desc": "For ‘globalVariables’, the names supplied are of functions or     other objects that should be regarded as defined globally when the     ‘check’ tool is applied to this package.  The call to     ‘globalVariables’ will be included in the package's source.     Repeated calls in the same package accumulate the names of the     global variables.     Typical examples are the fields and methods in reference classes,     which appear to be global objects to ‘codetools’.  (This case is     handled automatically by ‘setRefClass()’ and friends, using the     supplied field and method names.)     For ‘suppressForeignCheck’, the names supplied are of variables     used as ‘.NAME’ in foreign function calls which should not be     checked by ‘checkFF(registration = TRUE)’.  Without this     declaration, expressions other than simple character strings are     assumed to evaluate to registered native symbol objects.  The type     of call (‘.Call’, ‘.External’, etc.) and argument counts will be     checked.  With this declaration, checks on those names will     usually be suppressed.  (If the code uses an expression that     should only be evaluated at runtime, the message can be suppressed     by wrapping it in a ‘dontCheck’ function call, or by saving it to     a local variable, and suppressing messages about that variable.     See the example below.)"
  },
  {
    "name": "hasName",
    "usage": "hasName(x, name)",
    "pkg": "utils",
    "desc": "‘hasName’ is a convenient way to test for one or more names in an     R object."
  },
  {
    "name": "head",
    "usage": "head(x, n = 6L, ...)",
    "pkg": "utils",
    "desc": "Returns the first or last parts of a vector, matrix, table, data     frame or function.  Since ‘head()’ and ‘tail()’ are generic     functions, they may also have been extended to other classes."
  },
  {
    "name": "help",
    "usage": "help_type = getOption(\"help_type\"))",
    "pkg": "utils",
    "desc": "‘help’ is the primary interface to the help systems."
  },
  {
    "name": "help.request",
    "usage": "file = \"R.help.request\", ...)",
    "pkg": "utils",
    "desc": "Prompts the user to check they have done all that is expected of     them before sending a post to the R-help mailing list, provides a     template for the post with session information included and     optionally sends the email (on Unix systems)."
  },
  {
    "name": "help.search",
    "usage": "types = getOption(\"help.search.types\"))",
    "pkg": "utils",
    "desc": "Allows for searching the help system for documentation matching a     given character string in the (file) name, alias, title, concept     or keyword entries (or any combination thereof), using either     fuzzy matching or regular expression matching.  Names and titles     of the matched help entries are displayed nicely formatted.     Vignette names, titles and keywords and demo names and titles may     also be searched."
  },
  {
    "name": "help.start",
    "usage": "help.start(update = FALSE, gui = \"irrelevant\",",
    "pkg": "utils",
    "desc": "Start the hypertext (currently HTML) version of R's online     documentation."
  },
  {
    "name": "history",
    "usage": "history(max.show = 25, reverse = FALSE, pattern, ...)",
    "pkg": "utils",
    "desc": "Load or save or display the commands history."
  },
  {
    "name": "hsearch_db",
    "usage": "hsearch_db_keywords(db = hsearch_db())",
    "pkg": "utils",
    "desc": "Utilities for searching the help system."
  },
  {
    "name": "hsearch_db_concepts",
    "usage": "hsearch_db_concepts(db = hsearch_db())",
    "pkg": "utils",
    "desc": "Utilities for searching the help system."
  },
  {
    "name": "hsearch_db_keywords",
    "usage": "hsearch_db_keywords(db = hsearch_db())",
    "pkg": "utils",
    "desc": "Utilities for searching the help system."
  },
  {
    "name": "install.packages",
    "usage": "install.packages(pkgs, lib, repos = getOption(\"repos\"),",
    "pkg": "utils",
    "desc": "Download and install packages from CRAN-like repositories or from     local files."
  },
  {
    "name": "installed.packages",
    "usage": "installed.packages(lib.loc = NULL, priority = NULL,",
    "pkg": "utils",
    "desc": "Find (or retrieve) details of all packages installed in the     specified libraries."
  },
  {
    "name": "is.relistable",
    "usage": "is.relistable(x)",
    "pkg": "utils",
    "desc": "‘relist()’ is an S3 generic function with a few methods in order     to allow easy inversion of ‘unlist(obj)’ when that is used with an     object ‘obj’ of (S3) class ‘\"relistable\"’."
  },
  {
    "name": "isS3method",
    "usage": "isS3method(method, f, class, envir = parent.frame())",
    "pkg": "utils",
    "desc": "Checks if ‘method’ is the name of a valid / registered S3 method.     Alternatively, when ‘f’ and ‘class’ are specified, it is checked     if ‘f’ is the name of an S3 generic function and ‘paste(f, class,     sep=\".\")’ is a valid S3 method."
  },
  {
    "name": "loadhistory",
    "usage": "loadhistory(file = \".Rhistory\")",
    "pkg": "utils",
    "desc": "Load or save or display the commands history."
  },
  {
    "name": "localeToCharset",
    "usage": "localeToCharset(locale = Sys.getlocale(\"LC_CTYPE\"))",
    "pkg": "utils",
    "desc": "This functions aims to find a suitable coding for the locale     named, by default the current locale, and if it is a UTF-8 locale     a suitable single-byte encoding."
  },
  {
    "name": "maintainer",
    "usage": "maintainer(pkg)",
    "pkg": "utils",
    "desc": "Show the name and email address of the maintainer of a package."
  },
  {
    "name": "make.packages.html",
    "usage": "make.packages.html(lib.loc = .libPaths(), temp = FALSE,",
    "pkg": "utils",
    "desc": "Re-create the HTML list of packages."
  },
  {
    "name": "make.socket",
    "usage": "make.socket(host = \"localhost\", port, fail = TRUE, server = FALSE)",
    "pkg": "utils",
    "desc": "With ‘server = FALSE’ attempts to open a client socket to the     specified port and host.  With ‘server = TRUE’ the R process     listens on the specified port for a connection and then returns a     server socket.  It is a good idea to use ‘on.exit’ to ensure that     a socket is closed, as you only get 64 of them."
  },
  {
    "name": "memory.limit",
    "usage": "memory.limit(size = NA)",
    "pkg": "utils",
    "desc": "‘memory.size’ and ‘memory.limit’ are used to manage the total     memory allocation on Windows.  On other platforms these are stubs     which report infinity with a warning."
  },
  {
    "name": "memory.size",
    "usage": "memory.size(max = FALSE)",
    "pkg": "utils",
    "desc": "‘memory.size’ and ‘memory.limit’ are used to manage the total     memory allocation on Windows.  On other platforms these are stubs     which report infinity with a warning."
  },
  {
    "name": "menu",
    "usage": "menu(choices, graphics = FALSE, title = NULL)",
    "pkg": "utils",
    "desc": "‘menu’ presents the user with a menu of choices labelled from 1 to     the number of choices.  To exit without choosing an item one can     select ‘0’."
  },
  {
    "name": "methods",
    "usage": ".S3methods(generic.function, class, envir=parent.frame())",
    "pkg": "utils",
    "desc": "List all available methods for a S3 and S4 generic function, or     all methods for an S3 or S4 class."
  },
  {
    "name": "mirror2html",
    "usage": "mirror2html(mirrors = NULL, file = \"mirrors.html\",",
    "pkg": "utils",
    "desc": "Functions helping to maintain CRAN, some of them may also be     useful for administrators of other repository networks."
  },
  {
    "name": "modifyList",
    "usage": "modifyList(x, val, keep.null = FALSE)",
    "pkg": "utils",
    "desc": "Modifies a possibly nested list recursively by changing a subset     of elements at each level to match a second list."
  },
  {
    "name": "new.packages",
    "usage": "new.packages(lib.loc = NULL, repos = getOption(\"repos\"),",
    "pkg": "utils",
    "desc": "‘old.packages’ indicates packages which have a (suitable) later     version on the repositories whereas ‘update.packages’ offers to     download and install such packages.     ‘new.packages’ looks for (suitable) packages on the repositories     that are not already installed, and optionally offers them for     installation."
  },
  {
    "name": "news",
    "usage": "## S3 method for class 'news_db'",
    "pkg": "utils",
    "desc": "Build and query the news data base for R or add-on packages."
  },
  {
    "name": "nsl",
    "usage": "nsl(hostname)",
    "pkg": "utils",
    "desc": "Interface to ‘gethostbyname’."
  },
  {
    "name": "object.size",
    "usage": "object.size(x)",
    "pkg": "utils",
    "desc": "Provides an estimate of the memory that is being used to store an     R object."
  },
  {
    "name": "old.packages",
    "usage": "old.packages(lib.loc = NULL, repos = getOption(\"repos\"),",
    "pkg": "utils",
    "desc": "‘old.packages’ indicates packages which have a (suitable) later     version on the repositories whereas ‘update.packages’ offers to     download and install such packages.     ‘new.packages’ looks for (suitable) packages on the repositories     that are not already installed, and optionally offers them for     installation."
  },
  {
    "name": "package.skeleton",
    "usage": "package.skeleton(name = \"anRpackage\", list,",
    "pkg": "utils",
    "desc": "‘package.skeleton’ automates some of the setup for a new source     package.  It creates directories, saves functions, data, and R     code files to appropriate places, and creates skeleton help files     and a ‘Read-and-delete-me’ file describing further steps in     packaging."
  },
  {
    "name": "packageDescription",
    "usage": "packageDescription(pkg, lib.loc = NULL, fields = NULL,",
    "pkg": "utils",
    "desc": "Parses and returns the ‘DESCRIPTION’ file of a package."
  },
  {
    "name": "packageName",
    "usage": "packageName(env = parent.frame())",
    "pkg": "utils",
    "desc": "Many environments are associated with a package; this function     attempts to determine that package."
  },
  {
    "name": "packageStatus",
    "usage": "## S3 method for class 'packageStatus'",
    "pkg": "utils",
    "desc": "Summarize information about installed packages and packages     available at various repositories, and automatically upgrade     outdated packages."
  },
  {
    "name": "packageVersion",
    "usage": "packageVersion(pkg, lib.loc = NULL)",
    "pkg": "utils",
    "desc": "Parses and returns the ‘DESCRIPTION’ file of a package."
  },
  {
    "name": "page",
    "usage": "page(x, method = c(\"dput\", \"print\"), ...)",
    "pkg": "utils",
    "desc": "Displays a representation of the object named by ‘x’ in a pager     _via_ ‘file.show’."
  },
  {
    "name": "person",
    "usage": "## S3 method for class 'person'",
    "pkg": "utils",
    "desc": "A class and utility methods for holding information about persons     like name and email address."
  },
  {
    "name": "pico",
    "usage": "pico(name = NULL, file = \"\")",
    "pkg": "utils",
    "desc": "Invoke a text editor on an R object."
  },
  {
    "name": "prompt",
    "usage": "promptImport(object, filename = NULL, name = NULL,",
    "pkg": "utils",
    "desc": "Facilitate the constructing of files documenting R objects."
  },
  {
    "name": "promptData",
    "usage": "promptData(object, filename = NULL, name = NULL)",
    "pkg": "utils",
    "desc": "Generates a shell of documentation for a data set."
  },
  {
    "name": "promptImport",
    "usage": "promptImport(object, filename = NULL, name = NULL,",
    "pkg": "utils",
    "desc": "Facilitate the constructing of files documenting R objects."
  },
  {
    "name": "promptPackage",
    "usage": "promptPackage(package, lib.loc = NULL, filename = NULL,",
    "pkg": "utils",
    "desc": "Generates a shell of documentation for an installed or source     package."
  },
  {
    "name": "rc.getOption",
    "usage": "rc.getOption(name)",
    "pkg": "utils",
    "desc": "This page documents a mechanism to generate relevant completions     from a partially completed command line.  It is not intended to be     useful by itself, but rather in conjunction with other mechanisms     that use it as a backend.  The functions listed in the usage     section provide a simple control and query mechanism.  The actual     interface consists of a few unexported functions described further     down."
  },
  {
    "name": "rc.options",
    "usage": "rc.options(...)",
    "pkg": "utils",
    "desc": "This page documents a mechanism to generate relevant completions     from a partially completed command line.  It is not intended to be     useful by itself, but rather in conjunction with other mechanisms     that use it as a backend.  The functions listed in the usage     section provide a simple control and query mechanism.  The actual     interface consists of a few unexported functions described further     down."
  },
  {
    "name": "rc.settings",
    "usage": "rc.settings(ops, ns, args, func, ipck, S3, data, help,",
    "pkg": "utils",
    "desc": "This page documents a mechanism to generate relevant completions     from a partially completed command line.  It is not intended to be     useful by itself, but rather in conjunction with other mechanisms     that use it as a backend.  The functions listed in the usage     section provide a simple control and query mechanism.  The actual     interface consists of a few unexported functions described further     down."
  },
  {
    "name": "rc.status",
    "usage": "rc.status()",
    "pkg": "utils",
    "desc": "This page documents a mechanism to generate relevant completions     from a partially completed command line.  It is not intended to be     useful by itself, but rather in conjunction with other mechanisms     that use it as a backend.  The functions listed in the usage     section provide a simple control and query mechanism.  The actual     interface consists of a few unexported functions described further     down."
  },
  {
    "name": "read.csv",
    "usage": "read.csv2(file, header = TRUE, sep = \";\", quote = \"\\\"\",",
    "pkg": "utils",
    "desc": "Reads a file in table format and creates a data frame from it,     with cases corresponding to lines and variables to fields in the     file."
  },
  {
    "name": "read.csv2",
    "usage": "read.csv2(file, header = TRUE, sep = \";\", quote = \"\\\"\",",
    "pkg": "utils",
    "desc": "Reads a file in table format and creates a data frame from it,     with cases corresponding to lines and variables to fields in the     file."
  },
  {
    "name": "read.delim",
    "usage": "read.delim2(file, header = TRUE, sep = \"\\t\", quote = \"\\\"\",",
    "pkg": "utils",
    "desc": "Reads a file in table format and creates a data frame from it,     with cases corresponding to lines and variables to fields in the     file."
  },
  {
    "name": "read.delim2",
    "usage": "read.delim2(file, header = TRUE, sep = \"\\t\", quote = \"\\\"\",",
    "pkg": "utils",
    "desc": "Reads a file in table format and creates a data frame from it,     with cases corresponding to lines and variables to fields in the     file."
  },
  {
    "name": "read.DIF",
    "usage": "read.DIF(file, header = FALSE,",
    "pkg": "utils",
    "desc": "Reads a file in Data Interchange Format (DIF) and creates a data     frame from it.  DIF is a format for data matrices such as single     spreadsheets."
  },
  {
    "name": "read.fortran",
    "usage": "read.fortran(file, format, ..., as.is = TRUE, colClasses = NA)",
    "pkg": "utils",
    "desc": "Read fixed-format data files using Fortran-style format     specifications."
  },
  {
    "name": "read.fwf",
    "usage": "read.fwf(file, widths, header = FALSE, sep = \"\\t\",",
    "pkg": "utils",
    "desc": "Read a table of *f*ixed *w*idth *f*ormatted data into a     ‘data.frame’."
  },
  {
    "name": "read.socket",
    "usage": "read.socket(socket, maxlen = 256L, loop = FALSE)",
    "pkg": "utils",
    "desc": "‘read.socket’ reads a string from the specified socket,     ‘write.socket’ writes to the specified socket.  There is very     little error checking done by either."
  },
  {
    "name": "read.table",
    "usage": "read.table(file, header = FALSE, sep = \"\", quote = \"\\\"'\",",
    "pkg": "utils",
    "desc": "Reads a file in table format and creates a data frame from it,     with cases corresponding to lines and variables to fields in the     file."
  },
  {
    "name": "readCitationFile",
    "usage": "readCitationFile(file, meta = NULL)",
    "pkg": "utils",
    "desc": "How to cite R and R packages in publications."
  },
  {
    "name": "relist",
    "usage": "## S3 method for class 'relistable'",
    "pkg": "utils",
    "desc": "‘relist()’ is an S3 generic function with a few methods in order     to allow easy inversion of ‘unlist(obj)’ when that is used with an     object ‘obj’ of (S3) class ‘\"relistable\"’."
  },
  {
    "name": "remove.packages",
    "usage": "remove.packages(pkgs, lib)",
    "pkg": "utils",
    "desc": "Removes installed packages/bundles and updates index information     as necessary."
  },
  {
    "name": "removeSource",
    "usage": "removeSource(fn)",
    "pkg": "utils",
    "desc": "When ‘options(\"keep.source\")’ is ‘TRUE’, a copy of the original     source code to a function is stored with it.  This function     removes that copy."
  },
  {
    "name": "Rprof",
    "usage": "Rprof(filename = \"Rprof.out\", append = FALSE, interval = 0.02,",
    "pkg": "utils",
    "desc": "Enable or disable profiling of the execution of R expressions."
  },
  {
    "name": "Rprofmem",
    "usage": "Rprofmem(filename = \"Rprofmem.out\", append = FALSE, threshold = 0)",
    "pkg": "utils",
    "desc": "Enable or disable reporting of memory allocation in R."
  },
  {
    "name": "RShowDoc",
    "usage": "RShowDoc(what, type = c(\"pdf\", \"html\", \"txt\"), package)",
    "pkg": "utils",
    "desc": "Utility function to find and display R documentation."
  },
  {
    "name": "RSiteSearch",
    "usage": "RSiteSearch(string,",
    "pkg": "utils",
    "desc": "Search for key words or phrases in help pages, vignettes or task     views, using the search engine at <URL:     http://search.r-project.org> and view them in a web browser."
  },
  {
    "name": "rtags",
    "usage": "rtags(path = \".\", pattern = \"\\\\.[RrSs]$\",",
    "pkg": "utils",
    "desc": "‘rtags’ provides etags-like indexing capabilities for R code,     using R's own parser."
  },
  {
    "name": "Rtangle",
    "usage": "RtangleSetup(file, syntax, output = NULL, annotate = TRUE,",
    "pkg": "utils",
    "desc": "A driver for ‘Stangle’ that extracts R code chunks.  Notably all     ‘RtangleSetup()’ arguments may be used as arguments in the     ‘Stangle()’ call."
  },
  {
    "name": "RtangleSetup",
    "usage": "RtangleSetup(file, syntax, output = NULL, annotate = TRUE,",
    "pkg": "utils",
    "desc": "A driver for ‘Stangle’ that extracts R code chunks.  Notably all     ‘RtangleSetup()’ arguments may be used as arguments in the     ‘Stangle()’ call."
  },
  {
    "name": "RweaveLatex",
    "usage": "RweaveLatexSetup(file, syntax, output = NULL, quiet = FALSE,",
    "pkg": "utils",
    "desc": "A driver for ‘Sweave’ that translates R code chunks in LaTeX files     by “running them”, i.e., ‘parse()’ and ‘eval()’ each."
  },
  {
    "name": "RweaveLatexSetup",
    "usage": "RweaveLatexSetup(file, syntax, output = NULL, quiet = FALSE,",
    "pkg": "utils",
    "desc": "A driver for ‘Sweave’ that translates R code chunks in LaTeX files     by “running them”, i.e., ‘parse()’ and ‘eval()’ each."
  },
  {
    "name": "savehistory",
    "usage": "savehistory(file = \".Rhistory\")",
    "pkg": "utils",
    "desc": "Load or save or display the commands history."
  },
  {
    "name": "select.list",
    "usage": "select.list(choices, preselect = NULL, multiple = FALSE,",
    "pkg": "utils",
    "desc": "Select item(s) from a character vector."
  },
  {
    "name": "sessionInfo",
    "usage": "## S3 method for class 'sessionInfo'",
    "pkg": "utils",
    "desc": "Print version information about R, the OS and attached or loaded     packages."
  },
  {
    "name": "setBreakpoint",
    "usage": "setBreakpoint(srcfile, line, nameonly = TRUE,",
    "pkg": "utils",
    "desc": "These functions locate objects containing particular lines of     source code, using the information saved when the code was parsed     with ‘keep.source = TRUE’."
  },
  {
    "name": "setRepositories",
    "usage": "setRepositories(graphics = getOption(\"menu.graphics\"),",
    "pkg": "utils",
    "desc": "Interact with the user to choose the package repositories to be     used."
  },
  {
    "name": "setTxtProgressBar",
    "usage": "setTxtProgressBar(pb, value, title = NULL, label = NULL)",
    "pkg": "utils",
    "desc": "Text progress bar in the R console."
  },
  {
    "name": "stack",
    "usage": "unstack(x, form, ...)",
    "pkg": "utils",
    "desc": "Stacking vectors concatenates multiple vectors into a single     vector along with a factor indicating where each observation     originated.  Unstacking reverses this operation."
  },
  {
    "name": "Stangle",
    "usage": "Stangle(file, driver = Rtangle(),",
    "pkg": "utils",
    "desc": "‘Sweave’ provides a flexible framework for mixing text and R/S     code for automatic report generation.  The basic idea is to     replace the code with its output, such that the final document     only contains the text and the output of the statistical analysis:     however, the source code can also be included."
  },
  {
    "name": "str",
    "usage": "strOptions(strict.width = \"no\", digits.d = 3, vec.len = 4,",
    "pkg": "utils",
    "desc": "Compactly display the internal *str*ucture of an R object, a     diagnostic function and an alternative to ‘summary’ (and to some     extent, ‘dput’).  Ideally, only one line for each ‘basic’     structure is displayed.  It is especially well suited to compactly     display the (abbreviated) contents of (possibly nested) lists.     The idea is to give reasonable output for *any* R object.  It     calls ‘args’ for (non-primitive) function objects.     ‘strOptions()’ is a convenience function for setting ‘options(str     = .)’, see the examples."
  },
  {
    "name": "strcapture",
    "usage": "strcapture(pattern, x, proto, perl = FALSE, useBytes = FALSE)",
    "pkg": "utils",
    "desc": "Given a character vector and a regular expression containing     capture expressions, ‘strcapture’ will extract the captured tokens     into a tabular data structure, such as a data.frame, the type and     structure of which is specified by a prototype object. The     assumption is that the same number of tokens are captured from     every input string."
  },
  {
    "name": "strOptions",
    "usage": "strOptions(strict.width = \"no\", digits.d = 3, vec.len = 4,",
    "pkg": "utils",
    "desc": "Compactly display the internal *str*ucture of an R object, a     diagnostic function and an alternative to ‘summary’ (and to some     extent, ‘dput’).  Ideally, only one line for each ‘basic’     structure is displayed.  It is especially well suited to compactly     display the (abbreviated) contents of (possibly nested) lists.     The idea is to give reasonable output for *any* R object.  It     calls ‘args’ for (non-primitive) function objects.     ‘strOptions()’ is a convenience function for setting ‘options(str     = .)’, see the examples."
  },
  {
    "name": "summaryRprof",
    "usage": "summaryRprof(filename = \"Rprof.out\", chunksize = 5000,",
    "pkg": "utils",
    "desc": "Summarise the output of the ‘Rprof’ function to show the amount of     time used by different R functions."
  },
  {
    "name": "suppressForeignCheck",
    "usage": "suppressForeignCheck(names, package, add = TRUE)",
    "pkg": "utils",
    "desc": "For ‘globalVariables’, the names supplied are of functions or     other objects that should be regarded as defined globally when the     ‘check’ tool is applied to this package.  The call to     ‘globalVariables’ will be included in the package's source.     Repeated calls in the same package accumulate the names of the     global variables.     Typical examples are the fields and methods in reference classes,     which appear to be global objects to ‘codetools’.  (This case is     handled automatically by ‘setRefClass()’ and friends, using the     supplied field and method names.)     For ‘suppressForeignCheck’, the names supplied are of variables     used as ‘.NAME’ in foreign function calls which should not be     checked by ‘checkFF(registration = TRUE)’.  Without this     declaration, expressions other than simple character strings are     assumed to evaluate to registered native symbol objects.  The type     of call (‘.Call’, ‘.External’, etc.) and argument counts will be     checked.  With this declaration, checks on those names will     usually be suppressed.  (If the code uses an expression that     should only be evaluated at runtime, the message can be suppressed     by wrapping it in a ‘dontCheck’ function call, or by saving it to     a local variable, and suppressing messages about that variable.     See the example below.)"
  },
  {
    "name": "Sweave",
    "usage": "syntax = getOption(\"SweaveSyntax\"), encoding = \"\", ...)",
    "pkg": "utils",
    "desc": "‘Sweave’ provides a flexible framework for mixing text and R/S     code for automatic report generation.  The basic idea is to     replace the code with its output, such that the final document     only contains the text and the output of the statistical analysis:     however, the source code can also be included."
  },
  {
    "name": "SweaveSyntConv",
    "usage": "SweaveSyntConv(file, syntax, output = NULL)",
    "pkg": "utils",
    "desc": "This function converts the syntax of files in ‘Sweave’ format to     another Sweave syntax definition."
  },
  {
    "name": "tail",
    "usage": "tail(x, n = 6L, ...)",
    "pkg": "utils",
    "desc": "Returns the first or last parts of a vector, matrix, table, data     frame or function.  Since ‘head()’ and ‘tail()’ are generic     functions, they may also have been extended to other classes."
  },
  {
    "name": "tar",
    "usage": "compression_level = 6, tar = Sys.getenv(\"tar\"),",
    "pkg": "utils",
    "desc": "Create a tar archive."
  },
  {
    "name": "timestamp",
    "usage": "timestamp(stamp = date(),",
    "pkg": "utils",
    "desc": "Load or save or display the commands history."
  },
  {
    "name": "toBibtex",
    "usage": "toBibtex(object, ...)",
    "pkg": "utils",
    "desc": "These methods convert R objects to character vectors with BibTeX     or LaTeX markup."
  },
  {
    "name": "toLatex",
    "usage": "toLatex(object, ...)",
    "pkg": "utils",
    "desc": "These methods convert R objects to character vectors with BibTeX     or LaTeX markup."
  },
  {
    "name": "txtProgressBar",
    "usage": "## S3 method for class 'txtProgressBar'",
    "pkg": "utils",
    "desc": "Text progress bar in the R console."
  },
  {
    "name": "type.convert",
    "usage": "type.convert(x, na.strings = \"NA\", as.is = FALSE, dec = \".\",",
    "pkg": "utils",
    "desc": "Convert a character vector to logical, integer, numeric, complex     or factor as appropriate."
  },
  {
    "name": "undebugcall",
    "usage": "undebugcall(call)",
    "pkg": "utils",
    "desc": "Set or unset debugging flags based on a call to a function. Takes     into account S3/S4 method dispatch based on the classes of the     arguments in the call."
  },
  {
    "name": "unstack",
    "usage": "unstack(x, form, ...)",
    "pkg": "utils",
    "desc": "Stacking vectors concatenates multiple vectors into a single     vector along with a factor indicating where each observation     originated.  Unstacking reverses this operation."
  },
  {
    "name": "untar",
    "usage": "untar(tarfile, files = NULL, list = FALSE, exdir = \".\",",
    "pkg": "utils",
    "desc": "Extract files from or list the contents of a tar archive."
  },
  {
    "name": "unzip",
    "usage": "junkpaths = FALSE, exdir = \".\", unzip = \"internal\",",
    "pkg": "utils",
    "desc": "Extract files from or list a zip archive."
  },
  {
    "name": "update.packages",
    "usage": "update.packages(lib.loc = NULL, repos = getOption(\"repos\"),",
    "pkg": "utils",
    "desc": "‘old.packages’ indicates packages which have a (suitable) later     version on the repositories whereas ‘update.packages’ offers to     download and install such packages.     ‘new.packages’ looks for (suitable) packages on the repositories     that are not already installed, and optionally offers them for     installation."
  },
  {
    "name": "upgrade",
    "usage": "upgrade(object, ask = TRUE, ...)",
    "pkg": "utils",
    "desc": "Summarize information about installed packages and packages     available at various repositories, and automatically upgrade     outdated packages."
  },
  {
    "name": "url.show",
    "usage": "url.show(url, title = url, file = tempfile(),",
    "pkg": "utils",
    "desc": "Extension of ‘file.show’ to display text files from a remote     server."
  },
  {
    "name": "URLdecode",
    "usage": "URLdecode(URL)",
    "pkg": "utils",
    "desc": "Functions to percent-encode or decode characters in URLs."
  },
  {
    "name": "URLencode",
    "usage": "URLencode(URL, reserved = FALSE, repeated = FALSE)",
    "pkg": "utils",
    "desc": "Functions to percent-encode or decode characters in URLs."
  },
  {
    "name": "vi",
    "usage": "vi(name = NULL, file = \"\")",
    "pkg": "utils",
    "desc": "Invoke a text editor on an R object."
  },
  {
    "name": "View",
    "usage": "View(x, title)",
    "pkg": "utils",
    "desc": "Invoke a spreadsheet-style data viewer on a matrix-like R object."
  },
  {
    "name": "vignette",
    "usage": "## S3 method for class 'vignette'",
    "pkg": "utils",
    "desc": "View a specified package vignette, or list the available ones;     display it rendered in a viewer, and get or edit its R source     file."
  },
  {
    "name": "write.csv",
    "usage": "write.csv2(...)",
    "pkg": "utils",
    "desc": "‘write.table’ prints its required argument ‘x’ (after converting     it to a data frame if it is not one nor a matrix) to a file or     connection."
  },
  {
    "name": "write.csv2",
    "usage": "write.csv2(...)",
    "pkg": "utils",
    "desc": "‘write.table’ prints its required argument ‘x’ (after converting     it to a data frame if it is not one nor a matrix) to a file or     connection."
  },
  {
    "name": "write.socket",
    "usage": "write.socket(socket, string)",
    "pkg": "utils",
    "desc": "‘read.socket’ reads a string from the specified socket,     ‘write.socket’ writes to the specified socket.  There is very     little error checking done by either."
  },
  {
    "name": "write.table",
    "usage": "write.table(x, file = \"\", append = FALSE, quote = TRUE, sep = \" \",",
    "pkg": "utils",
    "desc": "‘write.table’ prints its required argument ‘x’ (after converting     it to a data frame if it is not one nor a matrix) to a file or     connection."
  },
  {
    "name": "xedit",
    "usage": "xedit(name = NULL, file = \"\")",
    "pkg": "utils",
    "desc": "Invoke a text editor on an R object."
  },
  {
    "name": "xemacs",
    "usage": "xemacs(name = NULL, file = \"\")",
    "pkg": "utils",
    "desc": "Invoke a text editor on an R object."
  },
  {
    "name": "zip",
    "usage": "zip = Sys.getenv(\"R_ZIPCMD\", \"zip\"))",
    "pkg": "utils",
    "desc": "A wrapper for an external ‘zip’ command to create zip archives."
  },
  {
    "name": "Arith",
    "usage": "Arith(e1, e2)",
    "pkg": "methods",
    "desc": "Methods can be defined for _group generic functions_.  Each group     generic function has a number of _member_ generic functions     associated with it.     Methods defined for a group generic function cause the same method     to be defined for each member of the group, but a method     explicitly defined for a member of the group takes precedence over     a method defined, with the same signature, for the group generic.     The functions shown in this documentation page all reside in the     ‘methods’ package, but the mechanism is available to any     programmer, by calling ‘setGroupGeneric’ (provided package     ‘methods’ is attached)."
  },
  {
    "name": "as",
    "usage": "as(object, Class) <- value",
    "pkg": "methods",
    "desc": "Coerce an object to a given class."
  },
  {
    "name": "callGeneric",
    "usage": "callGeneric(...)",
    "pkg": "methods",
    "desc": "A call to ‘callGeneric’ can only appear inside a method     definition.  It then results in a call to the current generic     function.  The value of that call is the value of ‘callGeneric’.     While it can be called from any method, it is useful and typically     used in methods for group generic functions."
  },
  {
    "name": "canCoerce",
    "usage": "canCoerce(object, Class)",
    "pkg": "methods",
    "desc": "Test if an object can be coerced to a given S4 class.  Maybe     useful inside ‘if()’ to ensure that calling ‘as(object, Class)’     will find a method."
  },
  {
    "name": "cbind2",
    "usage": "cbind2(x, y, ...)",
    "pkg": "methods",
    "desc": "Combine two matrix-like R objects by columns (‘cbind2’) or rows     (‘rbind2’).  These are (S4) generic functions with default     methods."
  },
  {
    "name": "classesToAM",
    "usage": "classesToAM(classes, includeSubclasses = FALSE,",
    "pkg": "methods",
    "desc": "Given a vector of class names or a list of class definitions, the     function returns an adjacency matrix of the superclasses of these     classes; that is, a matrix with class names as the row and column     names and with element [i, j] being 1 if the class in column j is     a direct superclass of the class in row i, and 0 otherwise.     The matrix has the information implied by the ‘contains’ slot of     the class definitions, but in a form that is often more convenient     for further analysis; for example, an adjacency matrix is used in     packages and other software to construct graph representations of     relationships."
  },
  {
    "name": "className",
    "usage": "className(class, package)",
    "pkg": "methods",
    "desc": "The function ‘className()’ generates a valid references to a     class, including the name of the package containing the class     definition.  The object returned, from class ‘\"className\"’, is the     unambiguous way to refer to a class, for example when calling     ‘setMethod’, just in case multiple definitions of the class exist.     Function ‘\"multipleClasses\"’ returns information about multiple     definitions of classes with the same name from different packages."
  },
  {
    "name": "Compare",
    "usage": "Compare(e1, e2)",
    "pkg": "methods",
    "desc": "Methods can be defined for _group generic functions_.  Each group     generic function has a number of _member_ generic functions     associated with it.     Methods defined for a group generic function cause the same method     to be defined for each member of the group, but a method     explicitly defined for a member of the group takes precedence over     a method defined, with the same signature, for the group generic.     The functions shown in this documentation page all reside in the     ‘methods’ package, but the mechanism is available to any     programmer, by calling ‘setGroupGeneric’ (provided package     ‘methods’ is attached)."
  },
  {
    "name": "Complex",
    "usage": "Complex(z)",
    "pkg": "methods",
    "desc": "Methods can be defined for _group generic functions_.  Each group     generic function has a number of _member_ generic functions     associated with it.     Methods defined for a group generic function cause the same method     to be defined for each member of the group, but a method     explicitly defined for a member of the group takes precedence over     a method defined, with the same signature, for the group generic.     The functions shown in this documentation page all reside in the     ‘methods’ package, but the mechanism is available to any     programmer, by calling ‘setGroupGeneric’ (provided package     ‘methods’ is attached)."
  },
  {
    "name": "dumpMethod",
    "usage": "dumpMethods(f, file, signature, methods, where)",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "dumpMethods",
    "usage": "dumpMethods(f, file, signature, methods, where)",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "evalOnLoad",
    "usage": "evalOnLoad(expr, where=, aname=)",
    "pkg": "methods",
    "desc": "These functions provide a mechanism for packages to specify     computations to be done during the loading of a package namespace.     Such actions are a flexible way to provide information only     available at load time (such as locations in a dynamically linked     library).     A call to ‘setLoadAction()’ or ‘setLoadActions()’ specifies one or     more functions to be called when the corresponding namespace is     loaded, with the ... argument names being used as identifying     names for the actions.     ‘getLoadActions’ reports the currently defined load actions, given     a package's namespace as its argument.     ‘hasLoadAction’ returns ‘TRUE’ if a load action corresponding to     the given name has previously been set for the ‘where’ namespace.     ‘evalOnLoad()’ and ‘evalqOnLoad()’ schedule a specific expression     for evaluation at load time."
  },
  {
    "name": "evalqOnLoad",
    "usage": "evalqOnLoad(expr, where=, aname=)",
    "pkg": "methods",
    "desc": "These functions provide a mechanism for packages to specify     computations to be done during the loading of a package namespace.     Such actions are a flexible way to provide information only     available at load time (such as locations in a dynamically linked     library).     A call to ‘setLoadAction()’ or ‘setLoadActions()’ specifies one or     more functions to be called when the corresponding namespace is     loaded, with the ... argument names being used as identifying     names for the actions.     ‘getLoadActions’ reports the currently defined load actions, given     a package's namespace as its argument.     ‘hasLoadAction’ returns ‘TRUE’ if a load action corresponding to     the given name has previously been set for the ‘where’ namespace.     ‘evalOnLoad()’ and ‘evalqOnLoad()’ schedule a specific expression     for evaluation at load time."
  },
  {
    "name": "evalSource",
    "usage": "evalSource(source, package = \"\", lock = TRUE, cache = FALSE)",
    "pkg": "methods",
    "desc": "Definitions of functions and/or methods from a source file are     inserted into a package, using the ‘trace’ mechanism. Typically,     this allows testing or debugging modified versions of a few     functions without reinstalling a large package."
  },
  {
    "name": "existsMethod",
    "usage": "existsMethod(f, signature = character(), where)",
    "pkg": "methods",
    "desc": "The function ‘selectMethod()’ returns the method that would be     selected for a call to function ‘f’ if the arguments had classes     as specified by ‘signature’.  Failing to find a method is an     error, unless argument ‘optional = TRUE’, in which case ‘NULL’ is     returned.     The function ‘findMethod()’ returns a list of environments that     contain a method for the specified function and signature; by     default, these are a subset of the packages in the current search     list.  See section “Using ‘findMethod()’” for details.     The function ‘getMethod()’ returns the method corresponding to the     function and signature supplied similarly to ‘selectMethod’, but     without using inheritance or group generics.     The functions ‘hasMethod()’ and ‘existsMethod()’ test whether     ‘selectMethod()’ or ‘getMethod()’, respectively, finds a matching     method."
  },
  {
    "name": "extends",
    "usage": "extends(class1, class2, maybe = TRUE, fullInfo = FALSE)",
    "pkg": "methods",
    "desc": "Functions to test inheritance relationships between an object and     a class or between two classes (‘extends’)."
  },
  {
    "name": "findClass",
    "usage": "findClass(Class, where, unique = \"\")",
    "pkg": "methods",
    "desc": "Functions to find classes: ‘isClass’ tests for a class;     ‘findClass’ returns the name(s) of packages containing the class;     ‘getClasses’ returns the names of all the classes in an     environment, typically a namespace.  To examine the definition of     a class, use ‘getClass’."
  },
  {
    "name": "findFunction",
    "usage": "findFunction(f, generic = TRUE, where = topenv(parent.frame()))",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "findMethod",
    "usage": "findMethod(f, signature, where)",
    "pkg": "methods",
    "desc": "The function ‘selectMethod()’ returns the method that would be     selected for a call to function ‘f’ if the arguments had classes     as specified by ‘signature’.  Failing to find a method is an     error, unless argument ‘optional = TRUE’, in which case ‘NULL’ is     returned.     The function ‘findMethod()’ returns a list of environments that     contain a method for the specified function and signature; by     default, these are a subset of the packages in the current search     list.  See section “Using ‘findMethod()’” for details.     The function ‘getMethod()’ returns the method corresponding to the     function and signature supplied similarly to ‘selectMethod’, but     without using inheritance or group generics.     The functions ‘hasMethod()’ and ‘existsMethod()’ test whether     ‘selectMethod()’ or ‘getMethod()’, respectively, finds a matching     method."
  },
  {
    "name": "findMethods",
    "usage": "findMethods(f, where, classes = character(), inherited = FALSE,",
    "pkg": "methods",
    "desc": "The function ‘findMethods’ converts the methods defined in a table     for a generic function (as used for selection of methods) into a     list, for study or display.  The list is actually from the class     ‘listOfMethods’ (see the section describing the class, below).     The list will be limited to the methods defined in environment     ‘where’ if that argument is supplied and limited to those     including one or more of the specified ‘classes’ in the method     signature if that argument is supplied.     To see the actual table (an environment) used for methods     dispatch, call ‘getMethodsForDispatch’. The names of the list     returned by ‘findMethods’ are the names of the objects in the     table.     The function ‘findMethodSignatures’ returns a character matrix     whose rows are the class names from the signature of the     corresponding methods; it operates either from a list returned by     ‘findMethods’, or by computing such a list itself, given the same     arguments as ‘findMethods’ .     The function ‘hasMethods’ returns ‘TRUE’ or ‘FALSE’ according to     whether there is a non-empty table of methods for function ‘f’ in     the environment or search position ‘where’ (or for the generic     function generally if ‘where’ is missing).     The defunct function ‘getMethods’ is an older alternative to     ‘findMethods’ , returning information in the form of an object of     class ‘MethodsList’, previously used for method dispatch.  It is     not recommended, since this class of objects is deprecated     generally and will disappear in a future version of R."
  },
  {
    "name": "findMethodSignatures",
    "usage": "findMethodSignatures(..., target = TRUE, methods = )",
    "pkg": "methods",
    "desc": "The function ‘findMethods’ converts the methods defined in a table     for a generic function (as used for selection of methods) into a     list, for study or display.  The list is actually from the class     ‘listOfMethods’ (see the section describing the class, below).     The list will be limited to the methods defined in environment     ‘where’ if that argument is supplied and limited to those     including one or more of the specified ‘classes’ in the method     signature if that argument is supplied.     To see the actual table (an environment) used for methods     dispatch, call ‘getMethodsForDispatch’. The names of the list     returned by ‘findMethods’ are the names of the objects in the     table.     The function ‘findMethodSignatures’ returns a character matrix     whose rows are the class names from the signature of the     corresponding methods; it operates either from a list returned by     ‘findMethods’, or by computing such a list itself, given the same     arguments as ‘findMethods’ .     The function ‘hasMethods’ returns ‘TRUE’ or ‘FALSE’ according to     whether there is a non-empty table of methods for function ‘f’ in     the environment or search position ‘where’ (or for the generic     function generally if ‘where’ is missing).     The defunct function ‘getMethods’ is an older alternative to     ‘findMethods’ , returning information in the form of an object of     class ‘MethodsList’, previously used for method dispatch.  It is     not recommended, since this class of objects is deprecated     generally and will disappear in a future version of R."
  },
  {
    "name": "getClass",
    "usage": "getClassDef(Class, where, package, inherits = TRUE)",
    "pkg": "methods",
    "desc": "Get the definition of a class."
  },
  {
    "name": "getClassDef",
    "usage": "getClassDef(Class, where, package, inherits = TRUE)",
    "pkg": "methods",
    "desc": "Get the definition of a class."
  },
  {
    "name": "getClasses",
    "usage": "getClasses(where, inherits = missing(where))",
    "pkg": "methods",
    "desc": "Functions to find classes: ‘isClass’ tests for a class;     ‘findClass’ returns the name(s) of packages containing the class;     ‘getClasses’ returns the names of all the classes in an     environment, typically a namespace.  To examine the definition of     a class, use ‘getClass’."
  },
  {
    "name": "getGenerics",
    "usage": "getGenerics(where, searchForm = FALSE)",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "getLoadActions",
    "usage": "getLoadActions(where=)",
    "pkg": "methods",
    "desc": "These functions provide a mechanism for packages to specify     computations to be done during the loading of a package namespace.     Such actions are a flexible way to provide information only     available at load time (such as locations in a dynamically linked     library).     A call to ‘setLoadAction()’ or ‘setLoadActions()’ specifies one or     more functions to be called when the corresponding namespace is     loaded, with the ... argument names being used as identifying     names for the actions.     ‘getLoadActions’ reports the currently defined load actions, given     a package's namespace as its argument.     ‘hasLoadAction’ returns ‘TRUE’ if a load action corresponding to     the given name has previously been set for the ‘where’ namespace.     ‘evalOnLoad()’ and ‘evalqOnLoad()’ schedule a specific expression     for evaluation at load time."
  },
  {
    "name": "getMethod",
    "usage": "getMethod(f, signature = character(), where, optional = FALSE,",
    "pkg": "methods",
    "desc": "The function ‘selectMethod()’ returns the method that would be     selected for a call to function ‘f’ if the arguments had classes     as specified by ‘signature’.  Failing to find a method is an     error, unless argument ‘optional = TRUE’, in which case ‘NULL’ is     returned.     The function ‘findMethod()’ returns a list of environments that     contain a method for the specified function and signature; by     default, these are a subset of the packages in the current search     list.  See section “Using ‘findMethod()’” for details.     The function ‘getMethod()’ returns the method corresponding to the     function and signature supplied similarly to ‘selectMethod’, but     without using inheritance or group generics.     The functions ‘hasMethod()’ and ‘existsMethod()’ test whether     ‘selectMethod()’ or ‘getMethod()’, respectively, finds a matching     method."
  },
  {
    "name": "getMethods",
    "usage": "getMethods(f, where, table = FALSE)",
    "pkg": "methods",
    "desc": "The function ‘findMethods’ converts the methods defined in a table     for a generic function (as used for selection of methods) into a     list, for study or display.  The list is actually from the class     ‘listOfMethods’ (see the section describing the class, below).     The list will be limited to the methods defined in environment     ‘where’ if that argument is supplied and limited to those     including one or more of the specified ‘classes’ in the method     signature if that argument is supplied.     To see the actual table (an environment) used for methods     dispatch, call ‘getMethodsForDispatch’. The names of the list     returned by ‘findMethods’ are the names of the objects in the     table.     The function ‘findMethodSignatures’ returns a character matrix     whose rows are the class names from the signature of the     corresponding methods; it operates either from a list returned by     ‘findMethods’, or by computing such a list itself, given the same     arguments as ‘findMethods’ .     The function ‘hasMethods’ returns ‘TRUE’ or ‘FALSE’ according to     whether there is a non-empty table of methods for function ‘f’ in     the environment or search position ‘where’ (or for the generic     function generally if ‘where’ is missing).     The defunct function ‘getMethods’ is an older alternative to     ‘findMethods’ , returning information in the form of an object of     class ‘MethodsList’, previously used for method dispatch.  It is     not recommended, since this class of objects is deprecated     generally and will disappear in a future version of R."
  },
  {
    "name": "getPackageName",
    "usage": "getPackageName(where, create = TRUE)",
    "pkg": "methods",
    "desc": "The functions below produce the package associated with a     particular environment or position on the search list, or of the     package containing a particular function.  They are primarily used     to support computations that need to differentiate objects on     multiple packages."
  },
  {
    "name": "getSlots",
    "usage": "getSlots(x)",
    "pkg": "methods",
    "desc": "These functions return or set information about the individual     slots in an object."
  },
  {
    "name": "getValidity",
    "usage": "getValidity(ClassDef)",
    "pkg": "methods",
    "desc": "‘validObject()’ tests the validity of ‘object’ related to its     class definition; specifically, it checks that all slots specified     in the class definition are present and that the object in the     slot is from the required class or a subclass of that class.     If the object is valid, ‘TRUE’ is returned; otherwise, an error is     generated, reporting all the validity failures encountered. If     argument ‘test’ is ‘TRUE’, the errors are returned as a character     vector rather than generating an error.     When an object from a class is initialized, the default method for     ‘initialize()’ calls ‘validObject’.     A class definition may have a validity method, set by a call to     the function ‘setValidity’, in the package or environment that     defines the class (or via the ‘validity’ argument to ‘setClass’).     The method should be a function of one object that returns ‘TRUE’     or a character-string description of the non-validity.  If such a     method exists, it will be called from ‘validObject’ and any     strings from failure will be included in the result or the error     message. Any validity methods defined for superclasses (from the     ‘contains=’ argument to ‘setClass’, will also be called."
  },
  {
    "name": "hasArg",
    "usage": "hasArg(name)",
    "pkg": "methods",
    "desc": "Returns ‘TRUE’ if ‘name’ corresponds to an argument in the call,     either a formal argument to the function, or a component of ‘...’,     and ‘FALSE’ otherwise."
  },
  {
    "name": "hasLoadAction",
    "usage": "hasLoadAction(aname, where=)",
    "pkg": "methods",
    "desc": "These functions provide a mechanism for packages to specify     computations to be done during the loading of a package namespace.     Such actions are a flexible way to provide information only     available at load time (such as locations in a dynamically linked     library).     A call to ‘setLoadAction()’ or ‘setLoadActions()’ specifies one or     more functions to be called when the corresponding namespace is     loaded, with the ... argument names being used as identifying     names for the actions.     ‘getLoadActions’ reports the currently defined load actions, given     a package's namespace as its argument.     ‘hasLoadAction’ returns ‘TRUE’ if a load action corresponding to     the given name has previously been set for the ‘where’ namespace.     ‘evalOnLoad()’ and ‘evalqOnLoad()’ schedule a specific expression     for evaluation at load time."
  },
  {
    "name": "hasMethod",
    "usage": "hasMethod(f, signature = character(), where)",
    "pkg": "methods",
    "desc": "The function ‘selectMethod()’ returns the method that would be     selected for a call to function ‘f’ if the arguments had classes     as specified by ‘signature’.  Failing to find a method is an     error, unless argument ‘optional = TRUE’, in which case ‘NULL’ is     returned.     The function ‘findMethod()’ returns a list of environments that     contain a method for the specified function and signature; by     default, these are a subset of the packages in the current search     list.  See section “Using ‘findMethod()’” for details.     The function ‘getMethod()’ returns the method corresponding to the     function and signature supplied similarly to ‘selectMethod’, but     without using inheritance or group generics.     The functions ‘hasMethod()’ and ‘existsMethod()’ test whether     ‘selectMethod()’ or ‘getMethod()’, respectively, finds a matching     method."
  },
  {
    "name": "hasMethods",
    "usage": "hasMethods(f, where, package)",
    "pkg": "methods",
    "desc": "The function ‘findMethods’ converts the methods defined in a table     for a generic function (as used for selection of methods) into a     list, for study or display.  The list is actually from the class     ‘listOfMethods’ (see the section describing the class, below).     The list will be limited to the methods defined in environment     ‘where’ if that argument is supplied and limited to those     including one or more of the specified ‘classes’ in the method     signature if that argument is supplied.     To see the actual table (an environment) used for methods     dispatch, call ‘getMethodsForDispatch’. The names of the list     returned by ‘findMethods’ are the names of the objects in the     table.     The function ‘findMethodSignatures’ returns a character matrix     whose rows are the class names from the signature of the     corresponding methods; it operates either from a list returned by     ‘findMethods’, or by computing such a list itself, given the same     arguments as ‘findMethods’ .     The function ‘hasMethods’ returns ‘TRUE’ or ‘FALSE’ according to     whether there is a non-empty table of methods for function ‘f’ in     the environment or search position ‘where’ (or for the generic     function generally if ‘where’ is missing).     The defunct function ‘getMethods’ is an older alternative to     ‘findMethods’ , returning information in the form of an object of     class ‘MethodsList’, previously used for method dispatch.  It is     not recommended, since this class of objects is deprecated     generally and will disappear in a future version of R."
  },
  {
    "name": "implicitGeneric",
    "usage": "implicitGeneric(name, where, generic)",
    "pkg": "methods",
    "desc": "The implicit generic mechanism stores generic versions of     functions in a table in a package. The package does not want the     current version of the function to be a generic, however, and     retains the non-generic version.     When a call to ‘setMethod’ or ‘setGeneric’ creates a generic     version for one of these functions, the object in the table is     used.  This mechanism is only needed if special arguments were     used to create the generic; e.g., the ‘signature’ or the     ‘valueClass’ options.     Function ‘implicitGeneric()’ returns the implicit generic version,     ‘setGenericImplicit()’ turns a generic implicit,     ‘prohibitGeneric()’ prevents your function from being made     generic, and ‘registerImplicitGenerics()’ saves a set of implicit     generic definitions in the cached table of the current session."
  },
  {
    "name": "inheritedSlotNames",
    "usage": "inheritedSlotNames(Class, where = topenv(parent.frame()))",
    "pkg": "methods",
    "desc": "For a class (or class definition, see ‘getClass’ and the     description of class ‘classRepresentation’), give the names which     are inherited from “above”, i.e., super classes, rather than by     this class' definition itself."
  },
  {
    "name": "initialize",
    "usage": "initialize(.Object, ...)",
    "pkg": "methods",
    "desc": "A call to ‘new’ returns a newly allocated object from the class     identified by the first argument.  This call in turn calls the     method for the generic function ‘initialize’ corresponding to the     specified class, passing the ‘...’ arguments to this method. In     the default method for ‘initialize()’, named arguments provide     values for the corresponding slots and unnamed arguments must be     objects from superclasses of this class.     A call to a generating function for a class (see ‘setClass’) will     pass its ... arguments to a corresponding call to ‘new()’."
  },
  {
    "name": "insertSource",
    "usage": "insertSource(source, package = \"\", functions = , methods = ,",
    "pkg": "methods",
    "desc": "Definitions of functions and/or methods from a source file are     inserted into a package, using the ‘trace’ mechanism. Typically,     this allows testing or debugging modified versions of a few     functions without reinstalling a large package."
  },
  {
    "name": "is",
    "usage": "is(object, class2)",
    "pkg": "methods",
    "desc": "Functions to test inheritance relationships between an object and     a class or between two classes (‘extends’)."
  },
  {
    "name": "isClass",
    "usage": "isClass(Class, formal=TRUE, where)",
    "pkg": "methods",
    "desc": "Functions to find classes: ‘isClass’ tests for a class;     ‘findClass’ returns the name(s) of packages containing the class;     ‘getClasses’ returns the names of all the classes in an     environment, typically a namespace.  To examine the definition of     a class, use ‘getClass’."
  },
  {
    "name": "isClassUnion",
    "usage": "isClassUnion(Class)",
    "pkg": "methods",
    "desc": "A class may be defined as the _union_ of other classes; that is,     as a virtual class defined as a superclass of several other     classes. Class unions are useful in method signatures or as slots     in other classes, when we want to allow one of several classes to     be supplied."
  },
  {
    "name": "isGeneric",
    "usage": "isGeneric(f, where, fdef, getName = FALSE)",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "isGroup",
    "usage": "isGroup(f, where, fdef)",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "isSealedClass",
    "usage": "isSealedClass(Class, where)",
    "pkg": "methods",
    "desc": "These functions check for either a method or a class that has been     _sealed_ when it was defined, and which therefore cannot be     re-defined."
  },
  {
    "name": "isSealedMethod",
    "usage": "isSealedMethod(f, signature, fdef, where)",
    "pkg": "methods",
    "desc": "These functions check for either a method or a class that has been     _sealed_ when it was defined, and which therefore cannot be     re-defined."
  },
  {
    "name": "isXS3Class",
    "usage": "isXS3Class(classDef)",
    "pkg": "methods",
    "desc": "A regular (S4) class may contain an S3 class, if that class has     been registered (by calling ‘setOldClass’).  The functions     described here provide information about contained S3 classes.     See the section ‘Functions’.     In modern R, these functions are not usually needed to program     with objects from the S4 class.  Standard computations work as     expected, including method selection for both S4 and S3.  To     coerce an object to its contained S3 class, use either of the     expressions:     ‘as(object, S3Class); as(object, \"S3\")’     where ‘S3Class’ evaluates to the name of the contained class.     These return slightly different objects, which in rare cases may     need to be distinguished.  See the section “Contained S3 Objects”."
  },
  {
    "name": "Logic",
    "usage": "Logic(e1, e2)",
    "pkg": "methods",
    "desc": "Methods can be defined for _group generic functions_.  Each group     generic function has a number of _member_ generic functions     associated with it.     Methods defined for a group generic function cause the same method     to be defined for each member of the group, but a method     explicitly defined for a member of the group takes precedence over     a method defined, with the same signature, for the group generic.     The functions shown in this documentation page all reside in the     ‘methods’ package, but the mechanism is available to any     programmer, by calling ‘setGroupGeneric’ (provided package     ‘methods’ is attached)."
  },
  {
    "name": "Math",
    "usage": "Math2(x, digits)",
    "pkg": "methods",
    "desc": "Methods can be defined for _group generic functions_.  Each group     generic function has a number of _member_ generic functions     associated with it.     Methods defined for a group generic function cause the same method     to be defined for each member of the group, but a method     explicitly defined for a member of the group takes precedence over     a method defined, with the same signature, for the group generic.     The functions shown in this documentation page all reside in the     ‘methods’ package, but the mechanism is available to any     programmer, by calling ‘setGroupGeneric’ (provided package     ‘methods’ is attached)."
  },
  {
    "name": "Math2",
    "usage": "Math2(x, digits)",
    "pkg": "methods",
    "desc": "Methods can be defined for _group generic functions_.  Each group     generic function has a number of _member_ generic functions     associated with it.     Methods defined for a group generic function cause the same method     to be defined for each member of the group, but a method     explicitly defined for a member of the group takes precedence over     a method defined, with the same signature, for the group generic.     The functions shown in this documentation page all reside in the     ‘methods’ package, but the mechanism is available to any     programmer, by calling ‘setGroupGeneric’ (provided package     ‘methods’ is attached)."
  },
  {
    "name": "method.skeleton",
    "usage": "method.skeleton(generic, signature, file, external = FALSE, where)",
    "pkg": "methods",
    "desc": "This function writes a source file containing a call to     ‘setMethod’ to define a method for the generic function and     signature supplied.  By default the method definition is in line     in the call, but can be made an external (previously assigned)     function."
  },
  {
    "name": "multipleClasses",
    "usage": "multipleClasses(details = FALSE)",
    "pkg": "methods",
    "desc": "The function ‘className()’ generates a valid references to a     class, including the name of the package containing the class     definition.  The object returned, from class ‘\"className\"’, is the     unambiguous way to refer to a class, for example when calling     ‘setMethod’, just in case multiple definitions of the class exist.     Function ‘\"multipleClasses\"’ returns information about multiple     definitions of classes with the same name from different packages."
  },
  {
    "name": "new",
    "usage": "new(Class, ...)",
    "pkg": "methods",
    "desc": "A call to ‘new’ returns a newly allocated object from the class     identified by the first argument.  This call in turn calls the     method for the generic function ‘initialize’ corresponding to the     specified class, passing the ‘...’ arguments to this method. In     the default method for ‘initialize()’, named arguments provide     values for the corresponding slots and unnamed arguments must be     objects from superclasses of this class.     A call to a generating function for a class (see ‘setClass’) will     pass its ... arguments to a corresponding call to ‘new()’."
  },
  {
    "name": "Ops",
    "usage": "Ops(e1, e2)",
    "pkg": "methods",
    "desc": "Methods can be defined for _group generic functions_.  Each group     generic function has a number of _member_ generic functions     associated with it.     Methods defined for a group generic function cause the same method     to be defined for each member of the group, but a method     explicitly defined for a member of the group takes precedence over     a method defined, with the same signature, for the group generic.     The functions shown in this documentation page all reside in the     ‘methods’ package, but the mechanism is available to any     programmer, by calling ‘setGroupGeneric’ (provided package     ‘methods’ is attached)."
  },
  {
    "name": "packageSlot",
    "usage": "packageSlot(object) <- value",
    "pkg": "methods",
    "desc": "The functions below produce the package associated with a     particular environment or position on the search list, or of the     package containing a particular function.  They are primarily used     to support computations that need to differentiate objects on     multiple packages."
  },
  {
    "name": "prohibitGeneric",
    "usage": "prohibitGeneric(name, where)",
    "pkg": "methods",
    "desc": "The implicit generic mechanism stores generic versions of     functions in a table in a package. The package does not want the     current version of the function to be a generic, however, and     retains the non-generic version.     When a call to ‘setMethod’ or ‘setGeneric’ creates a generic     version for one of these functions, the object in the table is     used.  This mechanism is only needed if special arguments were     used to create the generic; e.g., the ‘signature’ or the     ‘valueClass’ options.     Function ‘implicitGeneric()’ returns the implicit generic version,     ‘setGenericImplicit()’ turns a generic implicit,     ‘prohibitGeneric()’ prevents your function from being made     generic, and ‘registerImplicitGenerics()’ saves a set of implicit     generic definitions in the cached table of the current session."
  },
  {
    "name": "promptClass",
    "usage": "promptClass(clName, filename = NULL, type = \"class\",",
    "pkg": "methods",
    "desc": "Assembles all relevant slot and method information for a class,     with minimal markup for Rd processing; no QC facilities at     present."
  },
  {
    "name": "promptMethods",
    "usage": "promptMethods(f, filename = NULL, methods)",
    "pkg": "methods",
    "desc": "Generates a shell of documentation for the methods of a generic     function."
  },
  {
    "name": "prototype",
    "usage": "prototype(...)",
    "pkg": "methods",
    "desc": "These are old utility functions to construct, respectively a list     designed to represent the slots and superclasses and a list of     prototype specifications.  The ‘representation()’ function is no     longer useful, since the arguments ‘slots’ and ‘contains’ to     ‘setClass’ are now recommended.     The ‘prototype()’ function may still be used for the corresponding     argument, but a simple list of the same arguments works as well."
  },
  {
    "name": "rbind2",
    "usage": "rbind2(x, y, ...)",
    "pkg": "methods",
    "desc": "Combine two matrix-like R objects by columns (‘cbind2’) or rows     (‘rbind2’).  These are (S4) generic functions with default     methods."
  },
  {
    "name": "registerImplicitGenerics",
    "usage": "registerImplicitGenerics(what, where)",
    "pkg": "methods",
    "desc": "The implicit generic mechanism stores generic versions of     functions in a table in a package. The package does not want the     current version of the function to be a generic, however, and     retains the non-generic version.     When a call to ‘setMethod’ or ‘setGeneric’ creates a generic     version for one of these functions, the object in the table is     used.  This mechanism is only needed if special arguments were     used to create the generic; e.g., the ‘signature’ or the     ‘valueClass’ options.     Function ‘implicitGeneric()’ returns the implicit generic version,     ‘setGenericImplicit()’ turns a generic implicit,     ‘prohibitGeneric()’ prevents your function from being made     generic, and ‘registerImplicitGenerics()’ saves a set of implicit     generic definitions in the cached table of the current session."
  },
  {
    "name": "removeClass",
    "usage": "removeClass(Class, where)",
    "pkg": "methods",
    "desc": "Functions to find classes: ‘isClass’ tests for a class;     ‘findClass’ returns the name(s) of packages containing the class;     ‘getClasses’ returns the names of all the classes in an     environment, typically a namespace.  To examine the definition of     a class, use ‘getClass’."
  },
  {
    "name": "removeGeneric",
    "usage": "removeGeneric(f, where)",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "removeMethod",
    "usage": "removeMethod(f, signature, where)",
    "pkg": "methods",
    "desc": "Remove the method for a given function and signature.  Obsolete     for ordinary applications: Method definitions in a package should     never need to remove methods and it's very bad practice to remove     methods that were defined in other packages."
  },
  {
    "name": "removeMethods",
    "usage": "removeMethods(f, where = topenv(parent.frame()), all = missing(where))",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "representation",
    "usage": "representation(...)",
    "pkg": "methods",
    "desc": "These are old utility functions to construct, respectively a list     designed to represent the slots and superclasses and a list of     prototype specifications.  The ‘representation()’ function is no     longer useful, since the arguments ‘slots’ and ‘contains’ to     ‘setClass’ are now recommended.     The ‘prototype()’ function may still be used for the corresponding     argument, but a simple list of the same arguments works as well."
  },
  {
    "name": "resetClass",
    "usage": "resetClass(Class, classDef, where)",
    "pkg": "methods",
    "desc": "Functions to find classes: ‘isClass’ tests for a class;     ‘findClass’ returns the name(s) of packages containing the class;     ‘getClasses’ returns the names of all the classes in an     environment, typically a namespace.  To examine the definition of     a class, use ‘getClass’."
  },
  {
    "name": "S3Class",
    "usage": "S3Class(object) <-  value",
    "pkg": "methods",
    "desc": "A regular (S4) class may contain an S3 class, if that class has     been registered (by calling ‘setOldClass’).  The functions     described here provide information about contained S3 classes.     See the section ‘Functions’.     In modern R, these functions are not usually needed to program     with objects from the S4 class.  Standard computations work as     expected, including method selection for both S4 and S3.  To     coerce an object to its contained S3 class, use either of the     expressions:     ‘as(object, S3Class); as(object, \"S3\")’     where ‘S3Class’ evaluates to the name of the contained class.     These return slightly different objects, which in rare cases may     need to be distinguished.  See the section “Contained S3 Objects”."
  },
  {
    "name": "S3Part",
    "usage": "S3Part(object, strictS3 = FALSE, needClass = ) <- value",
    "pkg": "methods",
    "desc": "A regular (S4) class may contain an S3 class, if that class has     been registered (by calling ‘setOldClass’).  The functions     described here provide information about contained S3 classes.     See the section ‘Functions’.     In modern R, these functions are not usually needed to program     with objects from the S4 class.  Standard computations work as     expected, including method selection for both S4 and S3.  To     coerce an object to its contained S3 class, use either of the     expressions:     ‘as(object, S3Class); as(object, \"S3\")’     where ‘S3Class’ evaluates to the name of the contained class.     These return slightly different objects, which in rare cases may     need to be distinguished.  See the section “Contained S3 Objects”."
  },
  {
    "name": "sealClass",
    "usage": "sealClass(Class, where)",
    "pkg": "methods",
    "desc": "Functions to find classes: ‘isClass’ tests for a class;     ‘findClass’ returns the name(s) of packages containing the class;     ‘getClasses’ returns the names of all the classes in an     environment, typically a namespace.  To examine the definition of     a class, use ‘getClass’."
  },
  {
    "name": "selectMethod",
    "usage": "selectMethod(f, signature, optional = FALSE, useInherited =,",
    "pkg": "methods",
    "desc": "The function ‘selectMethod()’ returns the method that would be     selected for a call to function ‘f’ if the arguments had classes     as specified by ‘signature’.  Failing to find a method is an     error, unless argument ‘optional = TRUE’, in which case ‘NULL’ is     returned.     The function ‘findMethod()’ returns a list of environments that     contain a method for the specified function and signature; by     default, these are a subset of the packages in the current search     list.  See section “Using ‘findMethod()’” for details.     The function ‘getMethod()’ returns the method corresponding to the     function and signature supplied similarly to ‘selectMethod’, but     without using inheritance or group generics.     The functions ‘hasMethod()’ and ‘existsMethod()’ test whether     ‘selectMethod()’ or ‘getMethod()’, respectively, finds a matching     method."
  },
  {
    "name": "selectSuperClasses",
    "usage": ".selectSuperClasses(ext, dropVirtual = FALSE, namesOnly = TRUE,",
    "pkg": "methods",
    "desc": "Return superclasses of ‘ClassDef’, possibly only non-virtual or     direct or simple ones.     These functions are designed to be fast, and consequently only     work with the ‘contains’ slot of the corresponding class     definitions."
  },
  {
    "name": "setAs",
    "usage": "setAs(from, to, def, replace, where = topenv(parent.frame()))",
    "pkg": "methods",
    "desc": "A call to ‘setAs’ defines a method for coercing an object of class     ‘from’ to class ‘to’.  The methods will then be used by calls to     ‘as’ for objects with class ‘from’, including calls that replace     part of the object.     Methods for this purpose work indirectly, by defining methods for     function ‘coerce’.  The ‘coerce’ function is _not_ to be called     directly, and method selection uses class inheritance only on the     first argument."
  },
  {
    "name": "setClass",
    "usage": "setClass(Class, representation, prototype, contains=character(),",
    "pkg": "methods",
    "desc": "Create a class definition and return a generator function to     create objects from the class.  Typical usage will be of the     style:     ‘myClass <- setClass(\"myClass\", slots= ...., contains =....)’     where the first argument is the name of the new class and, if     supplied, the arguments ‘slots=’ and ‘contains=’ specify the slots     in the new class and existing classes from which the new class     should inherit.  Calls to ‘setClass()’ are normally found in the     source of a package; when the package is loaded the class will be     defined in the package's namespace.  Assigning the generator     function with the name of the class is convenient for users, but     not a requirement."
  },
  {
    "name": "setClassUnion",
    "usage": "setClassUnion(name, members, where)",
    "pkg": "methods",
    "desc": "A class may be defined as the _union_ of other classes; that is,     as a virtual class defined as a superclass of several other     classes. Class unions are useful in method signatures or as slots     in other classes, when we want to allow one of several classes to     be supplied."
  },
  {
    "name": "setGeneric",
    "usage": "setGeneric(name, def= , group=list(), valueClass=character(),",
    "pkg": "methods",
    "desc": "Create a generic version of the named function so that methods may     be defined for it.  A call to ‘setMethod’ will call ‘setGeneric’     automatically if applied to a non-generic function.     An explicit call to ‘setGeneric’ is usually not required, but     doesn't hurt and makes explicit that methods are being defined for     a non-generic function.     Standard calls will be of the form:     ‘setGeneric(name)’     where ‘name’ specifies an existing function, possibly in another     package.  An alternative when creating a new generic function in     this package is:     ‘setGeneric(name, def)’     where the function definition ‘def’ specifies the formal arguments     and becomes the default method."
  },
  {
    "name": "setGenericImplicit",
    "usage": "setGenericImplicit(name, where, restore = TRUE)",
    "pkg": "methods",
    "desc": "The implicit generic mechanism stores generic versions of     functions in a table in a package. The package does not want the     current version of the function to be a generic, however, and     retains the non-generic version.     When a call to ‘setMethod’ or ‘setGeneric’ creates a generic     version for one of these functions, the object in the table is     used.  This mechanism is only needed if special arguments were     used to create the generic; e.g., the ‘signature’ or the     ‘valueClass’ options.     Function ‘implicitGeneric()’ returns the implicit generic version,     ‘setGenericImplicit()’ turns a generic implicit,     ‘prohibitGeneric()’ prevents your function from being made     generic, and ‘registerImplicitGenerics()’ saves a set of implicit     generic definitions in the cached table of the current session."
  },
  {
    "name": "setGroupGeneric",
    "usage": "setGroupGeneric(name, def= , group=list(), valueClass=character(),",
    "pkg": "methods",
    "desc": "The ‘setGroupGeneric’ function behaves like ‘setGeneric’ except     that it constructs a group generic function, differing in two ways     from an ordinary generic function.  First, this function cannot be     called directly, and the body of the function created will contain     a stop call with this information.  Second, the group generic     function contains information about the known members of the     group, used to keep the members up to date when the group     definition changes, through changes in the search list or direct     specification of methods, etc.     All members of the group must have the identical argument list."
  },
  {
    "name": "setIs",
    "usage": "setIs(class1, class2, test=NULL, coerce=NULL, replace=NULL,",
    "pkg": "methods",
    "desc": "‘setIs’ is an explicit alternative to the ‘contains=’ argument to     ‘setClass’.  It is only needed to create relations with explicit     test or coercion.  These have not proved to be of much practical     value, so this function should not likely be needed in     applications.     Where the programming goal is to define methods for transforming     one class of objects to another, it is usually better practice to     call ‘setAs()’, which requires the transformations to be done     explicitly."
  },
  {
    "name": "setLoadAction",
    "usage": "setLoadActions(..., .where=)",
    "pkg": "methods",
    "desc": "These functions provide a mechanism for packages to specify     computations to be done during the loading of a package namespace.     Such actions are a flexible way to provide information only     available at load time (such as locations in a dynamically linked     library).     A call to ‘setLoadAction()’ or ‘setLoadActions()’ specifies one or     more functions to be called when the corresponding namespace is     loaded, with the ... argument names being used as identifying     names for the actions.     ‘getLoadActions’ reports the currently defined load actions, given     a package's namespace as its argument.     ‘hasLoadAction’ returns ‘TRUE’ if a load action corresponding to     the given name has previously been set for the ‘where’ namespace.     ‘evalOnLoad()’ and ‘evalqOnLoad()’ schedule a specific expression     for evaluation at load time."
  },
  {
    "name": "setLoadActions",
    "usage": "setLoadActions(..., .where=)",
    "pkg": "methods",
    "desc": "These functions provide a mechanism for packages to specify     computations to be done during the loading of a package namespace.     Such actions are a flexible way to provide information only     available at load time (such as locations in a dynamically linked     library).     A call to ‘setLoadAction()’ or ‘setLoadActions()’ specifies one or     more functions to be called when the corresponding namespace is     loaded, with the ... argument names being used as identifying     names for the actions.     ‘getLoadActions’ reports the currently defined load actions, given     a package's namespace as its argument.     ‘hasLoadAction’ returns ‘TRUE’ if a load action corresponding to     the given name has previously been set for the ‘where’ namespace.     ‘evalOnLoad()’ and ‘evalqOnLoad()’ schedule a specific expression     for evaluation at load time."
  },
  {
    "name": "setMethod",
    "usage": "setMethod(f, signature=character(), definition,",
    "pkg": "methods",
    "desc": "Create a method for a generic function, corresponding to a     signature of classes for the arguments. Standard usage will be of     the form:     ‘setMethod(f, signature, definition)’     where ‘f’ is the name of the function, ‘signature’ specifies the     argument classes for which the method applies and ‘definition’ is     the function definition for the method."
  },
  {
    "name": "setOldClass",
    "usage": "setOldClass(Classes, prototype, where, test = FALSE, S4Class)",
    "pkg": "methods",
    "desc": "Register an old-style (a.k.a. ‘S3’) class as a formally defined     class. Simple usage will be of the form:     ‘setOldClass(Classes)’     where ‘Classes’ is the character vector that would be the ‘class’     attribute of the S3 object. Calls to ‘setOldClass()’ in the code     for a package allow the class to be used as a slot in formal (S4)     classes and in signatures for methods (see Methods_for_S3).     Formal classes can also contain a registered S3 class (see S3Part     for details).     If the S3 class has a known set of attributes, an equivalent S4     class can be specified by ‘S4Class=’ in the call to     ‘setOldClass()’; see the section “Known Attributes”."
  },
  {
    "name": "setPackageName",
    "usage": "setPackageName(pkg, env)",
    "pkg": "methods",
    "desc": "The functions below produce the package associated with a     particular environment or position on the search list, or of the     package containing a particular function.  They are primarily used     to support computations that need to differentiate objects on     multiple packages."
  },
  {
    "name": "setReplaceMethod",
    "usage": "setReplaceMethod(f, ..., where = topenv(parent.frame()))",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "setValidity",
    "usage": "setValidity(Class, method, where = topenv(parent.frame()) )",
    "pkg": "methods",
    "desc": "‘validObject()’ tests the validity of ‘object’ related to its     class definition; specifically, it checks that all slots specified     in the class definition are present and that the object in the     slot is from the required class or a subclass of that class.     If the object is valid, ‘TRUE’ is returned; otherwise, an error is     generated, reporting all the validity failures encountered. If     argument ‘test’ is ‘TRUE’, the errors are returned as a character     vector rather than generating an error.     When an object from a class is initialized, the default method for     ‘initialize()’ calls ‘validObject’.     A class definition may have a validity method, set by a call to     the function ‘setValidity’, in the package or environment that     defines the class (or via the ‘validity’ argument to ‘setClass’).     The method should be a function of one object that returns ‘TRUE’     or a character-string description of the non-validity.  If such a     method exists, it will be called from ‘validObject’ and any     strings from failure will be included in the result or the error     message. Any validity methods defined for superclasses (from the     ‘contains=’ argument to ‘setClass’, will also be called."
  },
  {
    "name": "show",
    "usage": "show(object)",
    "pkg": "methods",
    "desc": "Display the object, by printing, plotting or whatever suits its     class.  This function exists to be specialized by methods.  The     default method calls ‘showDefault’.     Formal methods for ‘show’ will usually be invoked for automatic     printing (see the details)."
  },
  {
    "name": "showMethods",
    "usage": "showMethods(f = character(), where = topenv(parent.frame()),",
    "pkg": "methods",
    "desc": "Show a summary of the methods for one or more generic functions,     possibly restricted to those involving specified classes."
  },
  {
    "name": "signature",
    "usage": "signature(...)",
    "pkg": "methods",
    "desc": "The functions documented here manage collections of methods     associated with a generic function, as well as providing     information about the generic functions themselves."
  },
  {
    "name": "slot",
    "usage": "slotNames(x)",
    "pkg": "methods",
    "desc": "These functions return or set information about the individual     slots in an object."
  },
  {
    "name": "slotNames",
    "usage": "slotNames(x)",
    "pkg": "methods",
    "desc": "These functions return or set information about the individual     slots in an object."
  },
  {
    "name": "slotsFromS3",
    "usage": "slotsFromS3(object)",
    "pkg": "methods",
    "desc": "A regular (S4) class may contain an S3 class, if that class has     been registered (by calling ‘setOldClass’).  The functions     described here provide information about contained S3 classes.     See the section ‘Functions’.     In modern R, these functions are not usually needed to program     with objects from the S4 class.  Standard computations work as     expected, including method selection for both S4 and S3.  To     coerce an object to its contained S3 class, use either of the     expressions:     ‘as(object, S3Class); as(object, \"S3\")’     where ‘S3Class’ evaluates to the name of the contained class.     These return slightly different objects, which in rare cases may     need to be distinguished.  See the section “Contained S3 Objects”."
  },
  {
    "name": "Summary",
    "usage": "Summary(x, ..., na.rm = FALSE)",
    "pkg": "methods",
    "desc": "Methods can be defined for _group generic functions_.  Each group     generic function has a number of _member_ generic functions     associated with it.     Methods defined for a group generic function cause the same method     to be defined for each member of the group, but a method     explicitly defined for a member of the group takes precedence over     a method defined, with the same signature, for the group generic.     The functions shown in this documentation page all reside in the     ‘methods’ package, but the mechanism is available to any     programmer, by calling ‘setGroupGeneric’ (provided package     ‘methods’ is attached)."
  },
  {
    "name": "testInheritedMethods",
    "usage": "testInheritedMethods(f, signatures, test = TRUE, virtual = FALSE,",
    "pkg": "methods",
    "desc": "A set of distinct inherited signatures is generated to test     inheritance for all the methods of a specified generic function.     If method selection is ambiguous for some of these, a summary of     the ambiguities is attached to the returned object.  This test     should be performed by package authors _before_ releasing a     package."
  },
  {
    "name": "validObject",
    "usage": "validObject(object, test = FALSE, complete = FALSE)",
    "pkg": "methods",
    "desc": "‘validObject()’ tests the validity of ‘object’ related to its     class definition; specifically, it checks that all slots specified     in the class definition are present and that the object in the     slot is from the required class or a subclass of that class.     If the object is valid, ‘TRUE’ is returned; otherwise, an error is     generated, reporting all the validity failures encountered. If     argument ‘test’ is ‘TRUE’, the errors are returned as a character     vector rather than generating an error.     When an object from a class is initialized, the default method for     ‘initialize()’ calls ‘validObject’.     A class definition may have a validity method, set by a call to     the function ‘setValidity’, in the package or environment that     defines the class (or via the ‘validity’ argument to ‘setClass’).     The method should be a function of one object that returns ‘TRUE’     or a character-string description of the non-validity.  If such a     method exists, it will be called from ‘validObject’ and any     strings from failure will be included in the result or the error     message. Any validity methods defined for superclasses (from the     ‘contains=’ argument to ‘setClass’, will also be called."
  },
  {
    "name": "add_count",
    "usage": "add_count(x, ..., wt = NULL, sort = FALSE)",
    "pkg": "dplyr",
    "desc": "‘tally()’ is a convenient wrapper for summarise that will either     call ‘n()’ or ‘sum(n)’ depending on whether you're tallying for     the first time, or re-tallying. ‘count()’ is similar but calls     ‘group_by()’ before and ‘ungroup()’ after.     ‘add_tally()’ adds a column \"n\" to a table based on the number of     items within each existing group, while ‘add_count()’ is a     shortcut that does the grouping as well. These functions are to     ‘tally()’ and ‘count()’ as ‘mutate()’ is to ‘summarise()’: they     add an additional column rather than collapsing each group."
  },
  {
    "name": "add_rownames",
    "usage": "add_rownames(df, var = \"rowname\")",
    "pkg": "dplyr",
    "desc": "Deprecated, use ‘tibble::rownames_to_column()’ instead."
  },
  {
    "name": "add_tally",
    "usage": "add_tally(x, wt, sort = FALSE)",
    "pkg": "dplyr",
    "desc": "‘tally()’ is a convenient wrapper for summarise that will either     call ‘n()’ or ‘sum(n)’ depending on whether you're tallying for     the first time, or re-tallying. ‘count()’ is similar but calls     ‘group_by()’ before and ‘ungroup()’ after.     ‘add_tally()’ adds a column \"n\" to a table based on the number of     items within each existing group, while ‘add_count()’ is a     shortcut that does the grouping as well. These functions are to     ‘tally()’ and ‘count()’ as ‘mutate()’ is to ‘summarise()’: they     add an additional column rather than collapsing each group."
  },
  {
    "name": "all_equal",
    "usage": "all_equal(target, current, ignore_col_order = TRUE, ignore_row_order = TRUE,",
    "pkg": "dplyr",
    "desc": "You can use ‘all_equal()’ with any data frame, and dplyr also     provides ‘tbl_df’ methods for ‘all.equal()’."
  },
  {
    "name": "all_vars",
    "usage": "all_vars(expr)",
    "pkg": "dplyr",
    "desc": "These quoting functions signal to scoped filtering verbs (e.g.     ‘filter_if()’ or ‘filter_all()’) that a predicate expression     should be applied to all relevant variables. The ‘all_vars()’     variant takes the intersection of the predicate expressions with     ‘&’ while the ‘any_vars()’ variant takes the union with ‘|’."
  },
  {
    "name": "anti_join",
    "usage": "anti_join(x, y, by = NULL, copy = FALSE, ...)",
    "pkg": "dplyr",
    "desc": "These are generic functions that dispatch to individual tbl     methods - see the method documentation for details of individual     data sources. ‘x’ and ‘y’ should usually be from the same data     source, but if ‘copy’ is ‘TRUE’, ‘y’ will automatically be copied     to the same source as ‘x’."
  },
  {
    "name": "any_vars",
    "usage": "any_vars(expr)",
    "pkg": "dplyr",
    "desc": "These quoting functions signal to scoped filtering verbs (e.g.     ‘filter_if()’ or ‘filter_all()’) that a predicate expression     should be applied to all relevant variables. The ‘all_vars()’     variant takes the intersection of the predicate expressions with     ‘&’ while the ‘any_vars()’ variant takes the union with ‘|’."
  },
  {
    "name": "arrange",
    "usage": "arrange(.data, ..., .by_group = FALSE)",
    "pkg": "dplyr",
    "desc": "Use ‘desc()’ to sort a variable in descending order."
  },
  {
    "name": "arrange_all",
    "usage": "arrange_all(.tbl, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘arrange()’ sort a data frame by a     selection of variables. Like ‘arrange()’, you can modify the     variables before ordering with ‘funs()’."
  },
  {
    "name": "arrange_at",
    "usage": "arrange_at(.tbl, .vars, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘arrange()’ sort a data frame by a     selection of variables. Like ‘arrange()’, you can modify the     variables before ordering with ‘funs()’."
  },
  {
    "name": "arrange_if",
    "usage": "arrange_if(.tbl, .predicate, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘arrange()’ sort a data frame by a     selection of variables. Like ‘arrange()’, you can modify the     variables before ordering with ‘funs()’."
  },
  {
    "name": "as.tbl",
    "usage": "as.tbl(x, ...)",
    "pkg": "dplyr",
    "desc": "This is a generic method that dispatches based on the first     argument."
  },
  {
    "name": "as.tbl_cube",
    "usage": "as.tbl_cube(x, dim_names = NULL,",
    "pkg": "dplyr",
    "desc": "Coerce an existing data structure into a ‘tbl_cube’"
  },
  {
    "name": "auto_copy",
    "usage": "auto_copy(x, y, copy = FALSE, ...)",
    "pkg": "dplyr",
    "desc": "Copy tables to same source, if necessary"
  },
  {
    "name": "bench_tbls",
    "usage": "bench_tbls(tbls, op, ..., times = 10)",
    "pkg": "dplyr",
    "desc": "These functions support the comparison of results and timings     across multiple sources."
  },
  {
    "name": "between",
    "usage": "between(x, left, right)",
    "pkg": "dplyr",
    "desc": "This is a shortcut for ‘x >= left & x <= right’, implemented     efficiently in C++ for local values, and translated to the     appropriate SQL for remote tables."
  },
  {
    "name": "bind_cols",
    "usage": "bind_cols(...)",
    "pkg": "dplyr",
    "desc": "This is an efficient implementation of the common pattern of     ‘do.call(rbind, dfs)’ or ‘do.call(cbind, dfs)’ for binding many     data frames into one. ‘combine()’ acts like ‘c()’ or ‘unlist()’     but uses consistent dplyr coercion rules."
  },
  {
    "name": "bind_rows",
    "usage": "bind_rows(..., .id = NULL)",
    "pkg": "dplyr",
    "desc": "This is an efficient implementation of the common pattern of     ‘do.call(rbind, dfs)’ or ‘do.call(cbind, dfs)’ for binding many     data frames into one. ‘combine()’ acts like ‘c()’ or ‘unlist()’     but uses consistent dplyr coercion rules."
  },
  {
    "name": "case_when",
    "usage": "case_when(...)",
    "pkg": "dplyr",
    "desc": "This function allows you to vectorise multiple ‘if’ and ‘else if’     statements. It is an R equivalent of the SQL ‘CASE WHEN’     statement."
  },
  {
    "name": "changes",
    "usage": "changes(x, y)",
    "pkg": "dplyr",
    "desc": "This is useful for understand how and when dplyr makes copies of     data frames"
  },
  {
    "name": "coalesce",
    "usage": "coalesce(...)",
    "pkg": "dplyr",
    "desc": "Given a set of vectors, ‘coalesce()’ finds the first non-missing     value at each position. This is inspired by the SQL ‘COALESCE’     function which does the same thing for ‘NULL’s."
  },
  {
    "name": "collapse",
    "usage": "collapse(x, ...)",
    "pkg": "dplyr",
    "desc": "‘compute()’ stores results in a remote temporary table.     ‘collect()’ retrieves data into a local tibble. ‘collapse()’ is     slightly different: it doesn't force computation, but instead     forces generation of the SQL query. This is sometimes needed to     work around bugs in dplyr's SQL generation."
  },
  {
    "name": "collect",
    "usage": "collect(x, ...)",
    "pkg": "dplyr",
    "desc": "‘compute()’ stores results in a remote temporary table.     ‘collect()’ retrieves data into a local tibble. ‘collapse()’ is     slightly different: it doesn't force computation, but instead     forces generation of the SQL query. This is sometimes needed to     work around bugs in dplyr's SQL generation."
  },
  {
    "name": "combine",
    "usage": "combine(...)",
    "pkg": "dplyr",
    "desc": "This is an efficient implementation of the common pattern of     ‘do.call(rbind, dfs)’ or ‘do.call(cbind, dfs)’ for binding many     data frames into one. ‘combine()’ acts like ‘c()’ or ‘unlist()’     but uses consistent dplyr coercion rules."
  },
  {
    "name": "compare_tbls",
    "usage": "compare_tbls2(tbls_x, tbls_y, op, ref = NULL, compare = equal_data_frame,",
    "pkg": "dplyr",
    "desc": "These functions support the comparison of results and timings     across multiple sources."
  },
  {
    "name": "compare_tbls2",
    "usage": "compare_tbls2(tbls_x, tbls_y, op, ref = NULL, compare = equal_data_frame,",
    "pkg": "dplyr",
    "desc": "These functions support the comparison of results and timings     across multiple sources."
  },
  {
    "name": "compute",
    "usage": "compute(x, name = random_table_name(), ...)",
    "pkg": "dplyr",
    "desc": "‘compute()’ stores results in a remote temporary table.     ‘collect()’ retrieves data into a local tibble. ‘collapse()’ is     slightly different: it doesn't force computation, but instead     forces generation of the SQL query. This is sometimes needed to     work around bugs in dplyr's SQL generation."
  },
  {
    "name": "contains",
    "usage": "contains(match, ignore.case = TRUE, vars = current_vars())",
    "pkg": "dplyr",
    "desc": "These functions allow you to select variables based on their     names.        • ‘starts_with()’: starts with a prefix        • ‘ends_with()’: ends with a prefix        • ‘contains()’: contains a literal string        • ‘matches()’: matches a regular expression        • ‘num_range()’: a numerical range like x01, x02, x03.        • ‘one_of()’: variables in character vector.        • ‘everything()’: all variables."
  },
  {
    "name": "copy_to",
    "usage": "copy_to(dest, df, name = deparse(substitute(df)), overwrite = FALSE, ...)",
    "pkg": "dplyr",
    "desc": "This function uploads a local data frame into a remote data     source, creating the table definition as needed. Wherever     possible, the new object will be temporary, limited to the current     connection to the source."
  },
  {
    "name": "count",
    "usage": "add_count(x, ..., wt = NULL, sort = FALSE)",
    "pkg": "dplyr",
    "desc": "‘tally()’ is a convenient wrapper for summarise that will either     call ‘n()’ or ‘sum(n)’ depending on whether you're tallying for     the first time, or re-tallying. ‘count()’ is similar but calls     ‘group_by()’ before and ‘ungroup()’ after.     ‘add_tally()’ adds a column \"n\" to a table based on the number of     items within each existing group, while ‘add_count()’ is a     shortcut that does the grouping as well. These functions are to     ‘tally()’ and ‘count()’ as ‘mutate()’ is to ‘summarise()’: they     add an additional column rather than collapsing each group."
  },
  {
    "name": "cumall",
    "usage": "cumall(x)",
    "pkg": "dplyr",
    "desc": "dplyr adds ‘cumall()’, ‘cumany()’, and ‘cummean()’ to complete R's     set of cumulate functions to match the aggregation functions     available in most databases"
  },
  {
    "name": "cumany",
    "usage": "cumany(x)",
    "pkg": "dplyr",
    "desc": "dplyr adds ‘cumall()’, ‘cumany()’, and ‘cummean()’ to complete R's     set of cumulate functions to match the aggregation functions     available in most databases"
  },
  {
    "name": "cume_dist",
    "usage": "cume_dist(x)",
    "pkg": "dplyr",
    "desc": "Six variations on ranking functions, mimicking the ranking     functions described in SQL2003. They are currently implemented     using the built in ‘rank’ function, and are provided mainly as a     convenience when converting between R and SQL. All ranking     functions map smallest inputs to smallest outputs. Use ‘desc()’ to     reverse the direction."
  },
  {
    "name": "cummean",
    "usage": "cummean(x)",
    "pkg": "dplyr",
    "desc": "dplyr adds ‘cumall()’, ‘cumany()’, and ‘cummean()’ to complete R's     set of cumulate functions to match the aggregation functions     available in most databases"
  },
  {
    "name": "current_vars",
    "usage": "everything(vars = current_vars())",
    "pkg": "dplyr",
    "desc": "These functions allow you to select variables based on their     names.        • ‘starts_with()’: starts with a prefix        • ‘ends_with()’: ends with a prefix        • ‘contains()’: contains a literal string        • ‘matches()’: matches a regular expression        • ‘num_range()’: a numerical range like x01, x02, x03.        • ‘one_of()’: variables in character vector.        • ‘everything()’: all variables."
  },
  {
    "name": "db_analyze",
    "usage": "db_analyze(con, table, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_begin",
    "usage": "db_begin(con, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_commit",
    "usage": "db_commit(con, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_create_index",
    "usage": "db_create_index(con, table, columns, name = NULL, unique = FALSE, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_create_indexes",
    "usage": "db_create_indexes(con, table, indexes = NULL, unique = FALSE, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_create_table",
    "usage": "db_create_table(con, table, types, temporary = FALSE, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_data_type",
    "usage": "db_data_type(con, fields)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_desc",
    "usage": "db_desc(x)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_drop_table",
    "usage": "db_drop_table(con, table, force = FALSE, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_explain",
    "usage": "db_explain(con, sql, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_has_table",
    "usage": "db_has_table(con, table)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_insert_into",
    "usage": "db_insert_into(con, table, values, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_list_tables",
    "usage": "db_list_tables(con)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_query_fields",
    "usage": "db_query_fields(con, sql, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_query_rows",
    "usage": "db_query_rows(con, sql, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_rollback",
    "usage": "db_rollback(con, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_save_query",
    "usage": "db_save_query(con, sql, name, temporary = TRUE, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "db_write_table",
    "usage": "db_write_table(con, table, types, values, temporary = FALSE, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "dense_rank",
    "usage": "dense_rank(x)",
    "pkg": "dplyr",
    "desc": "Six variations on ranking functions, mimicking the ranking     functions described in SQL2003. They are currently implemented     using the built in ‘rank’ function, and are provided mainly as a     convenience when converting between R and SQL. All ranking     functions map smallest inputs to smallest outputs. Use ‘desc()’ to     reverse the direction."
  },
  {
    "name": "desc",
    "usage": "desc(x)",
    "pkg": "dplyr",
    "desc": "Transform a vector into a format that will be sorted in descending     order. This is useful within ‘arrange()’."
  },
  {
    "name": "dim_desc",
    "usage": "dim_desc(x)",
    "pkg": "dplyr",
    "desc": "Prints the dimensions of an array-like object in a user-friendly     manner, substituting ‘NA’ with ?? (for SQL queries)."
  },
  {
    "name": "distinct",
    "usage": "distinct(.data, ..., .keep_all = FALSE)",
    "pkg": "dplyr",
    "desc": "Retain only unique/distinct rows from an input tbl. This is     similar to ‘unique.data.frame()’, but considerably faster."
  },
  {
    "name": "do",
    "usage": "do(.data, ...)",
    "pkg": "dplyr",
    "desc": "This is a general purpose complement to the specialised     manipulation functions ‘filter()’, ‘select()’, ‘mutate()’,     ‘summarise()’ and ‘arrange()’. You can use ‘do()’ to perform     arbitrary computation, returning either a data frame or arbitrary     objects which will be stored in a list. This is particularly     useful when working with models: you can fit models per group with     ‘do()’ and then flexibly extract components with either another     ‘do()’ or ‘summarise()’."
  },
  {
    "name": "ends_with",
    "usage": "ends_with(match, ignore.case = TRUE, vars = current_vars())",
    "pkg": "dplyr",
    "desc": "These functions allow you to select variables based on their     names.        • ‘starts_with()’: starts with a prefix        • ‘ends_with()’: ends with a prefix        • ‘contains()’: contains a literal string        • ‘matches()’: matches a regular expression        • ‘num_range()’: a numerical range like x01, x02, x03.        • ‘one_of()’: variables in character vector.        • ‘everything()’: all variables."
  },
  {
    "name": "eval_tbls",
    "usage": "eval_tbls2(tbls_x, tbls_y, op)",
    "pkg": "dplyr",
    "desc": "These functions support the comparison of results and timings     across multiple sources."
  },
  {
    "name": "eval_tbls2",
    "usage": "eval_tbls2(tbls_x, tbls_y, op)",
    "pkg": "dplyr",
    "desc": "These functions support the comparison of results and timings     across multiple sources."
  },
  {
    "name": "everything",
    "usage": "everything(vars = current_vars())",
    "pkg": "dplyr",
    "desc": "These functions allow you to select variables based on their     names.        • ‘starts_with()’: starts with a prefix        • ‘ends_with()’: ends with a prefix        • ‘contains()’: contains a literal string        • ‘matches()’: matches a regular expression        • ‘num_range()’: a numerical range like x01, x02, x03.        • ‘one_of()’: variables in character vector.        • ‘everything()’: all variables."
  },
  {
    "name": "explain",
    "usage": "explain(x, ...)",
    "pkg": "dplyr",
    "desc": "This is a generic function which gives more details about an     object than ‘print()’, and is more focused on human readable     output than ‘str()’."
  },
  {
    "name": "failwith",
    "usage": "failwith(default = NULL, f, quiet = FALSE)",
    "pkg": "dplyr",
    "desc": "Deprecated. Please use ‘purrr::possibly()’ instead."
  },
  {
    "name": "filter",
    "usage": "filter(.data, ...)",
    "pkg": "dplyr",
    "desc": "Use ‘filter()’ find rows/cases where conditions are true. Unlike     base subsetting, rows where the condition evaluates to ‘NA’ are     dropped."
  },
  {
    "name": "filter_all",
    "usage": "filter_all(.tbl, .vars_predicate)",
    "pkg": "dplyr",
    "desc": "These scoped filtering verbs apply a predicate expression to a     selection of variables. The predicate expression should be quoted     with ‘all_vars()’ or ‘any_vars()’ and should mention the pronoun     ‘.’ to refer to variables."
  },
  {
    "name": "filter_at",
    "usage": "filter_at(.tbl, .vars, .vars_predicate)",
    "pkg": "dplyr",
    "desc": "These scoped filtering verbs apply a predicate expression to a     selection of variables. The predicate expression should be quoted     with ‘all_vars()’ or ‘any_vars()’ and should mention the pronoun     ‘.’ to refer to variables."
  },
  {
    "name": "filter_if",
    "usage": "filter_if(.tbl, .predicate, .vars_predicate)",
    "pkg": "dplyr",
    "desc": "These scoped filtering verbs apply a predicate expression to a     selection of variables. The predicate expression should be quoted     with ‘all_vars()’ or ‘any_vars()’ and should mention the pronoun     ‘.’ to refer to variables."
  },
  {
    "name": "first",
    "usage": "first(x, order_by = NULL, default = default_missing(x))",
    "pkg": "dplyr",
    "desc": "These are straightforward wrappers around ‘[[’. The main advantage     is that you can provide an optional secondary vector that defines     the ordering, and provide a default value to use when the input is     shorter than expected."
  },
  {
    "name": "full_join",
    "usage": "full_join(x, y, by = NULL, copy = FALSE, suffix = c(\".x\", \".y\"), ...)",
    "pkg": "dplyr",
    "desc": "These are generic functions that dispatch to individual tbl     methods - see the method documentation for details of individual     data sources. ‘x’ and ‘y’ should usually be from the same data     source, but if ‘copy’ is ‘TRUE’, ‘y’ will automatically be copied     to the same source as ‘x’."
  },
  {
    "name": "funs",
    "usage": "funs(..., .args = list())",
    "pkg": "dplyr",
    "desc": "‘funs()’ provides a flexible way to generate a named list of     functions for input to other functions like ‘summarise_at()’."
  },
  {
    "name": "group_by",
    "usage": "group_by(.data, ..., add = FALSE)",
    "pkg": "dplyr",
    "desc": "Most data operations are done on groups defined by variables.     ‘group_by()’ takes an existing tbl and converts it into a grouped     tbl where operations are performed \"by group\". ‘ungroup()’ removes     grouping."
  },
  {
    "name": "group_by_all",
    "usage": "group_by_all(.tbl, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘group_by()’ group a data frame by a     selection of variables. Like ‘group_by()’, they have optional     mutate semantics."
  },
  {
    "name": "group_by_at",
    "usage": "group_by_at(.tbl, .vars, .funs = list(), ..., .add = FALSE)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘group_by()’ group a data frame by a     selection of variables. Like ‘group_by()’, they have optional     mutate semantics."
  },
  {
    "name": "group_by_if",
    "usage": "group_by_if(.tbl, .predicate, .funs = list(), ..., .add = FALSE)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘group_by()’ group a data frame by a     selection of variables. Like ‘group_by()’, they have optional     mutate semantics."
  },
  {
    "name": "group_indices",
    "usage": "group_indices(.data, ...)",
    "pkg": "dplyr",
    "desc": "Generate a unique id for each group"
  },
  {
    "name": "group_size",
    "usage": "group_size(x)",
    "pkg": "dplyr",
    "desc": "Calculate group sizes."
  },
  {
    "name": "group_vars",
    "usage": "group_vars(x)",
    "pkg": "dplyr",
    "desc": "‘group_vars()’ returns a character vector; ‘groups()’ returns a     list of symbols."
  },
  {
    "name": "grouped_df",
    "usage": "is_grouped_df(x)",
    "pkg": "dplyr",
    "desc": "The easiest way to create a grouped data frame is to call the     ‘group_by()’ method on a data frame or tbl: this will take care of     capturing the unevaluated expressions for you."
  },
  {
    "name": "groups",
    "usage": "groups(x)",
    "pkg": "dplyr",
    "desc": "‘group_vars()’ returns a character vector; ‘groups()’ returns a     list of symbols."
  },
  {
    "name": "id",
    "usage": "id(.variables, drop = FALSE)",
    "pkg": "dplyr",
    "desc": "Properties:        • ‘order(id)’ is equivalent to ‘do.call(order, df)’        • rows containing the same data have the same value        • if ‘drop = FALSE’ then room for all possibilities"
  },
  {
    "name": "ident",
    "usage": "ident(...)",
    "pkg": "dplyr",
    "desc": "‘ident()’ takes unquoted strings and quotes them for you;     ‘ident_q()’ assumes its input has already been quoted."
  },
  {
    "name": "if_else",
    "usage": "if_else(condition, true, false, missing = NULL)",
    "pkg": "dplyr",
    "desc": "Compared to the base ‘ifelse()’, this function is more strict. It     checks that ‘true’ and ‘false’ are the same type. This strictness     makes the output type more predictable, and makes it somewhat     faster."
  },
  {
    "name": "inner_join",
    "usage": "inner_join(x, y, by = NULL, copy = FALSE, suffix = c(\".x\", \".y\"), ...)",
    "pkg": "dplyr",
    "desc": "These are generic functions that dispatch to individual tbl     methods - see the method documentation for details of individual     data sources. ‘x’ and ‘y’ should usually be from the same data     source, but if ‘copy’ is ‘TRUE’, ‘y’ will automatically be copied     to the same source as ‘x’."
  },
  {
    "name": "intersect",
    "usage": "intersect(x, y, ...)",
    "pkg": "dplyr",
    "desc": "These functions override the set functions provided in base to     make them generic so that efficient versions for data frames and     other tables can be provided. The default methods call the base     versions."
  },
  {
    "name": "is_grouped_df",
    "usage": "is_grouped_df(x)",
    "pkg": "dplyr",
    "desc": "The easiest way to create a grouped data frame is to call the     ‘group_by()’ method on a data frame or tbl: this will take care of     capturing the unevaluated expressions for you."
  },
  {
    "name": "is.grouped_df",
    "usage": "is.grouped_df(x)",
    "pkg": "dplyr",
    "desc": "The easiest way to create a grouped data frame is to call the     ‘group_by()’ method on a data frame or tbl: this will take care of     capturing the unevaluated expressions for you."
  },
  {
    "name": "is.src",
    "usage": "is.src(x)",
    "pkg": "dplyr",
    "desc": "‘src()’ is the standard constructor for srcs and ‘is.src()’ tests."
  },
  {
    "name": "is.tbl",
    "usage": "is.tbl(x)",
    "pkg": "dplyr",
    "desc": "This is a generic method that dispatches based on the first     argument."
  },
  {
    "name": "lag",
    "usage": "lag(x, n = 1L, default = NA, order_by = NULL, ...)",
    "pkg": "dplyr",
    "desc": "Find the \"next\" or \"previous\" values in a vector. Useful for     comparing values ahead of or behind the current values."
  },
  {
    "name": "last",
    "usage": "last(x, order_by = NULL, default = default_missing(x))",
    "pkg": "dplyr",
    "desc": "These are straightforward wrappers around ‘[[’. The main advantage     is that you can provide an optional secondary vector that defines     the ordering, and provide a default value to use when the input is     shorter than expected."
  },
  {
    "name": "lead",
    "usage": "lead(x, n = 1L, default = NA, order_by = NULL, ...)",
    "pkg": "dplyr",
    "desc": "Find the \"next\" or \"previous\" values in a vector. Useful for     comparing values ahead of or behind the current values."
  },
  {
    "name": "left_join",
    "usage": "left_join(x, y, by = NULL, copy = FALSE, suffix = c(\".x\", \".y\"), ...)",
    "pkg": "dplyr",
    "desc": "These are generic functions that dispatch to individual tbl     methods - see the method documentation for details of individual     data sources. ‘x’ and ‘y’ should usually be from the same data     source, but if ‘copy’ is ‘TRUE’, ‘y’ will automatically be copied     to the same source as ‘x’."
  },
  {
    "name": "location",
    "usage": "location(df)",
    "pkg": "dplyr",
    "desc": "This is useful for understand how and when dplyr makes copies of     data frames"
  },
  {
    "name": "make_tbl",
    "usage": "make_tbl(subclass, ...)",
    "pkg": "dplyr",
    "desc": "‘tbl()’ is the standard constructor for tbls. ‘as.tbl()’ coerces,     and ‘is.tbl()’ tests."
  },
  {
    "name": "matches",
    "usage": "matches(match, ignore.case = TRUE, vars = current_vars())",
    "pkg": "dplyr",
    "desc": "These functions allow you to select variables based on their     names.        • ‘starts_with()’: starts with a prefix        • ‘ends_with()’: ends with a prefix        • ‘contains()’: contains a literal string        • ‘matches()’: matches a regular expression        • ‘num_range()’: a numerical range like x01, x02, x03.        • ‘one_of()’: variables in character vector.        • ‘everything()’: all variables."
  },
  {
    "name": "min_rank",
    "usage": "min_rank(x)",
    "pkg": "dplyr",
    "desc": "Six variations on ranking functions, mimicking the ranking     functions described in SQL2003. They are currently implemented     using the built in ‘rank’ function, and are provided mainly as a     convenience when converting between R and SQL. All ranking     functions map smallest inputs to smallest outputs. Use ‘desc()’ to     reverse the direction."
  },
  {
    "name": "mutate",
    "usage": "mutate(.data, ...)",
    "pkg": "dplyr",
    "desc": "‘mutate()’ adds new variables and preserves existing;     ‘transmute()’ drops existing variables."
  },
  {
    "name": "mutate_all",
    "usage": "mutate_all(.tbl, .funs, ...)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "mutate_at",
    "usage": "mutate_at(.tbl, .vars, .funs, ..., .cols = NULL)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "mutate_if",
    "usage": "mutate_if(.tbl, .predicate, .funs, ...)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "n_distinct",
    "usage": "n_distinct(..., na.rm = FALSE)",
    "pkg": "dplyr",
    "desc": "This is a faster and more concise equivalent of     ‘length(unique(x))’"
  },
  {
    "name": "n_groups",
    "usage": "n_groups(x)",
    "pkg": "dplyr",
    "desc": "Calculate group sizes."
  },
  {
    "name": "na_if",
    "usage": "na_if(x, y)",
    "pkg": "dplyr",
    "desc": "This is a translation of the SQL command ‘NULL_IF’. It is useful     if you want to convert an annoying value to ‘NA’."
  },
  {
    "name": "near",
    "usage": "near(x, y, tol = .Machine$double.eps^0.5)",
    "pkg": "dplyr",
    "desc": "This is a safe way of comparing if two vectors of floating point     numbers are (pairwise) equal.  This is safer than using ‘==’,     because it has a built in tolerance"
  },
  {
    "name": "nth",
    "usage": "nth(x, n, order_by = NULL, default = default_missing(x))",
    "pkg": "dplyr",
    "desc": "These are straightforward wrappers around ‘[[’. The main advantage     is that you can provide an optional secondary vector that defines     the ordering, and provide a default value to use when the input is     shorter than expected."
  },
  {
    "name": "ntile",
    "usage": "ntile(x, n)",
    "pkg": "dplyr",
    "desc": "Six variations on ranking functions, mimicking the ranking     functions described in SQL2003. They are currently implemented     using the built in ‘rank’ function, and are provided mainly as a     convenience when converting between R and SQL. All ranking     functions map smallest inputs to smallest outputs. Use ‘desc()’ to     reverse the direction."
  },
  {
    "name": "num_range",
    "usage": "num_range(prefix, range, width = NULL, vars = current_vars())",
    "pkg": "dplyr",
    "desc": "These functions allow you to select variables based on their     names.        • ‘starts_with()’: starts with a prefix        • ‘ends_with()’: ends with a prefix        • ‘contains()’: contains a literal string        • ‘matches()’: matches a regular expression        • ‘num_range()’: a numerical range like x01, x02, x03.        • ‘one_of()’: variables in character vector.        • ‘everything()’: all variables."
  },
  {
    "name": "one_of",
    "usage": "one_of(..., vars = current_vars())",
    "pkg": "dplyr",
    "desc": "These functions allow you to select variables based on their     names.        • ‘starts_with()’: starts with a prefix        • ‘ends_with()’: ends with a prefix        • ‘contains()’: contains a literal string        • ‘matches()’: matches a regular expression        • ‘num_range()’: a numerical range like x01, x02, x03.        • ‘one_of()’: variables in character vector.        • ‘everything()’: all variables."
  },
  {
    "name": "order_by",
    "usage": "order_by(order_by, call)",
    "pkg": "dplyr",
    "desc": "This function makes it possible to control the ordering of window     functions in R that don't have a specific ordering parameter. When     translated to SQL it will modify the order clause of the OVER     function."
  },
  {
    "name": "percent_rank",
    "usage": "percent_rank(x)",
    "pkg": "dplyr",
    "desc": "Six variations on ranking functions, mimicking the ranking     functions described in SQL2003. They are currently implemented     using the built in ‘rank’ function, and are provided mainly as a     convenience when converting between R and SQL. All ranking     functions map smallest inputs to smallest outputs. Use ‘desc()’ to     reverse the direction."
  },
  {
    "name": "progress_estimated",
    "usage": "progress_estimated(n, min_time = 0)",
    "pkg": "dplyr",
    "desc": "This reference class represents a text progress bar displayed     estimated time remaining. When finished, it displays the total     duration.  The automatic progress bar can be disabled by setting     option ‘dplyr.show_progress’ to ‘FALSE’."
  },
  {
    "name": "pull",
    "usage": "pull(.data, var = -1)",
    "pkg": "dplyr",
    "desc": "This works like ‘[[’ for local data frames, and automatically     collects before indexing for remote data tables."
  },
  {
    "name": "recode",
    "usage": "recode_factor(.x, ..., .default = NULL, .missing = NULL, .ordered = FALSE)",
    "pkg": "dplyr",
    "desc": "This is a vectorised version of ‘switch()’: you can replace     numeric values based on their position, and character values by     their name. This is an S3 generic: dplyr provides methods for     numeric, character, and factors. For logical vectors, use     ‘if_else()’. For more complicated criteria, use ‘case_when()’."
  },
  {
    "name": "recode_factor",
    "usage": "recode_factor(.x, ..., .default = NULL, .missing = NULL, .ordered = FALSE)",
    "pkg": "dplyr",
    "desc": "This is a vectorised version of ‘switch()’: you can replace     numeric values based on their position, and character values by     their name. This is an S3 generic: dplyr provides methods for     numeric, character, and factors. For logical vectors, use     ‘if_else()’. For more complicated criteria, use ‘case_when()’."
  },
  {
    "name": "rename",
    "usage": "rename(.data, ...)",
    "pkg": "dplyr",
    "desc": "‘select()’ keeps only the variables you mention; ‘rename()’ keeps     all variables."
  },
  {
    "name": "rename_all",
    "usage": "rename_all(.tbl, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘select()’ and ‘rename()’ operate on a     selection of variables. The semantics of these verbs have simple     but important differences:        • Selection drops variables that are not in the selection while          renaming retains them.        • The renaming function is optional for selection but not for          renaming."
  },
  {
    "name": "rename_at",
    "usage": "rename_at(.tbl, .vars, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘select()’ and ‘rename()’ operate on a     selection of variables. The semantics of these verbs have simple     but important differences:        • Selection drops variables that are not in the selection while          renaming retains them.        • The renaming function is optional for selection but not for          renaming."
  },
  {
    "name": "rename_if",
    "usage": "rename_if(.tbl, .predicate, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘select()’ and ‘rename()’ operate on a     selection of variables. The semantics of these verbs have simple     but important differences:        • Selection drops variables that are not in the selection while          renaming retains them.        • The renaming function is optional for selection but not for          renaming."
  },
  {
    "name": "rename_vars",
    "usage": "rename_vars(vars, ..., strict = TRUE)",
    "pkg": "dplyr",
    "desc": "These functions power ‘select()’ and ‘rename()’."
  },
  {
    "name": "right_join",
    "usage": "right_join(x, y, by = NULL, copy = FALSE, suffix = c(\".x\", \".y\"), ...)",
    "pkg": "dplyr",
    "desc": "These are generic functions that dispatch to individual tbl     methods - see the method documentation for details of individual     data sources. ‘x’ and ‘y’ should usually be from the same data     source, but if ‘copy’ is ‘TRUE’, ‘y’ will automatically be copied     to the same source as ‘x’."
  },
  {
    "name": "row_number",
    "usage": "row_number(x)",
    "pkg": "dplyr",
    "desc": "Six variations on ranking functions, mimicking the ranking     functions described in SQL2003. They are currently implemented     using the built in ‘rank’ function, and are provided mainly as a     convenience when converting between R and SQL. All ranking     functions map smallest inputs to smallest outputs. Use ‘desc()’ to     reverse the direction."
  },
  {
    "name": "rowwise",
    "usage": "rowwise(data)",
    "pkg": "dplyr",
    "desc": "‘rowwise()’ is used for the results of ‘do()’ when you create     list-variables. It is also useful to support arbitrary complex     operations that need to be applied to each row."
  },
  {
    "name": "same_src",
    "usage": "same_src(x, y)",
    "pkg": "dplyr",
    "desc": "Figure out if two sources are the same (or two tbl have the same     source)"
  },
  {
    "name": "sample_frac",
    "usage": "sample_frac(tbl, size = 1, replace = FALSE, weight = NULL, .env = NULL)",
    "pkg": "dplyr",
    "desc": "This is a wrapper around ‘sample.int()’ to make it easy to select     random rows from a table. It currently only works for local tbls."
  },
  {
    "name": "sample_n",
    "usage": "sample_n(tbl, size, replace = FALSE, weight = NULL, .env = NULL)",
    "pkg": "dplyr",
    "desc": "This is a wrapper around ‘sample.int()’ to make it easy to select     random rows from a table. It currently only works for local tbls."
  },
  {
    "name": "select",
    "usage": "select(.data, ...)",
    "pkg": "dplyr",
    "desc": "‘select()’ keeps only the variables you mention; ‘rename()’ keeps     all variables."
  },
  {
    "name": "select_all",
    "usage": "select_all(.tbl, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘select()’ and ‘rename()’ operate on a     selection of variables. The semantics of these verbs have simple     but important differences:        • Selection drops variables that are not in the selection while          renaming retains them.        • The renaming function is optional for selection but not for          renaming."
  },
  {
    "name": "select_at",
    "usage": "select_at(.tbl, .vars, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘select()’ and ‘rename()’ operate on a     selection of variables. The semantics of these verbs have simple     but important differences:        • Selection drops variables that are not in the selection while          renaming retains them.        • The renaming function is optional for selection but not for          renaming."
  },
  {
    "name": "select_if",
    "usage": "select_if(.tbl, .predicate, .funs = list(), ...)",
    "pkg": "dplyr",
    "desc": "These scoped variants of ‘select()’ and ‘rename()’ operate on a     selection of variables. The semantics of these verbs have simple     but important differences:        • Selection drops variables that are not in the selection while          renaming retains them.        • The renaming function is optional for selection but not for          renaming."
  },
  {
    "name": "select_var",
    "usage": "select_var(vars, var = -1)",
    "pkg": "dplyr",
    "desc": "This function powers ‘pull()’ and various functions of the tidyr     package. It is similar to ‘select_vars()’ but returns only one     column name and has slightly different semantics: it allows     negative numbers to select columns from the end."
  },
  {
    "name": "select_vars",
    "usage": "select_vars(vars, ..., include = character(), exclude = character())",
    "pkg": "dplyr",
    "desc": "These functions power ‘select()’ and ‘rename()’."
  },
  {
    "name": "semi_join",
    "usage": "semi_join(x, y, by = NULL, copy = FALSE, ...)",
    "pkg": "dplyr",
    "desc": "These are generic functions that dispatch to individual tbl     methods - see the method documentation for details of individual     data sources. ‘x’ and ‘y’ should usually be from the same data     source, but if ‘copy’ is ‘TRUE’, ‘y’ will automatically be copied     to the same source as ‘x’."
  },
  {
    "name": "setdiff",
    "usage": "setdiff(x, y, ...)",
    "pkg": "dplyr",
    "desc": "These functions override the set functions provided in base to     make them generic so that efficient versions for data frames and     other tables can be provided. The default methods call the base     versions."
  },
  {
    "name": "setequal",
    "usage": "setequal(x, y, ...)",
    "pkg": "dplyr",
    "desc": "These functions override the set functions provided in base to     make them generic so that efficient versions for data frames and     other tables can be provided. The default methods call the base     versions."
  },
  {
    "name": "show_query",
    "usage": "show_query(x, ...)",
    "pkg": "dplyr",
    "desc": "This is a generic function which gives more details about an     object than ‘print()’, and is more focused on human readable     output than ‘str()’."
  },
  {
    "name": "slice",
    "usage": "slice(.data, ...)",
    "pkg": "dplyr",
    "desc": "Slice does not work with relational databases because they have no     intrinsic notion of row order. If you want to perform the     equivalent operation, use ‘filter()’ and ‘row_number()’."
  },
  {
    "name": "sql",
    "usage": "sql(...)",
    "pkg": "dplyr",
    "desc": "These functions are critical when writing functions that translate     R functions to sql functions. Typically a conversion function     should escape all its inputs and return an sql object."
  },
  {
    "name": "sql_escape_ident",
    "usage": "sql_escape_ident(con, x)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "sql_escape_string",
    "usage": "sql_escape_string(con, x)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "sql_join",
    "usage": "sql_join(con, x, y, vars, type = \"inner\", by = NULL, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "sql_select",
    "usage": "sql_select(con, select, from, where = NULL, group_by = NULL,",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "sql_semi_join",
    "usage": "sql_semi_join(con, x, y, anti = FALSE, by = NULL, ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "sql_set_op",
    "usage": "sql_set_op(con, x, y, method)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "sql_subquery",
    "usage": "sql_subquery(con, from, name = random_table_name(), ...)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "sql_translate_env",
    "usage": "sql_translate_env(con)",
    "pkg": "dplyr",
    "desc": "The ‘sql_’ generics are used to build the different types of SQL     queries. The default implementations in dbplyr generates ANSI 92     compliant SQL. The ‘db_’ generics execute actions on the database.     The default implementations in dbplyr typically just call the     standard DBI S4 method."
  },
  {
    "name": "src",
    "usage": "is.src(x)",
    "pkg": "dplyr",
    "desc": "‘src()’ is the standard constructor for srcs and ‘is.src()’ tests."
  },
  {
    "name": "src_df",
    "usage": "src_df(pkg = NULL, env = NULL)",
    "pkg": "dplyr",
    "desc": "This is mainly useful for testing, since makes it possible to     refer to local and remote tables using exactly the same syntax."
  },
  {
    "name": "src_local",
    "usage": "src_local(tbl, pkg = NULL, env = NULL)",
    "pkg": "dplyr",
    "desc": "This is mainly useful for testing, since makes it possible to     refer to local and remote tables using exactly the same syntax."
  },
  {
    "name": "src_mysql",
    "usage": "src_mysql(dbname, host = NULL, port = 0L, username = \"root\",",
    "pkg": "dplyr",
    "desc": "For backward compatibility dplyr provides three srcs for popular     open source databases:        • ‘src_mysql()’ connects to a MySQL or MariaDB database using          ‘RMySQL::MySQL()’.        • ‘src_postgres()’ connects to PostgreSQL using          ‘RPostgreSQL::PostgreSQL()’        • ‘src_sqlite()’ to connect to a SQLite database using          ‘RSQLite::SQLite()’.     However, modern best practice is to use ‘tbl()’ directly on an     ‘DBIConnection’."
  },
  {
    "name": "src_postgres",
    "usage": "src_postgres(dbname = NULL, host = NULL, port = NULL, user = NULL,",
    "pkg": "dplyr",
    "desc": "For backward compatibility dplyr provides three srcs for popular     open source databases:        • ‘src_mysql()’ connects to a MySQL or MariaDB database using          ‘RMySQL::MySQL()’.        • ‘src_postgres()’ connects to PostgreSQL using          ‘RPostgreSQL::PostgreSQL()’        • ‘src_sqlite()’ to connect to a SQLite database using          ‘RSQLite::SQLite()’.     However, modern best practice is to use ‘tbl()’ directly on an     ‘DBIConnection’."
  },
  {
    "name": "src_sqlite",
    "usage": "src_sqlite(path, create = FALSE)",
    "pkg": "dplyr",
    "desc": "For backward compatibility dplyr provides three srcs for popular     open source databases:        • ‘src_mysql()’ connects to a MySQL or MariaDB database using          ‘RMySQL::MySQL()’.        • ‘src_postgres()’ connects to PostgreSQL using          ‘RPostgreSQL::PostgreSQL()’        • ‘src_sqlite()’ to connect to a SQLite database using          ‘RSQLite::SQLite()’.     However, modern best practice is to use ‘tbl()’ directly on an     ‘DBIConnection’."
  },
  {
    "name": "src_tbls",
    "usage": "src_tbls(x)",
    "pkg": "dplyr",
    "desc": "This is a generic method which individual src's will provide     methods for. Most methods will not be documented because it's     usually pretty obvious what possible results will be."
  },
  {
    "name": "starts_with",
    "usage": "starts_with(match, ignore.case = TRUE, vars = current_vars())",
    "pkg": "dplyr",
    "desc": "These functions allow you to select variables based on their     names.        • ‘starts_with()’: starts with a prefix        • ‘ends_with()’: ends with a prefix        • ‘contains()’: contains a literal string        • ‘matches()’: matches a regular expression        • ‘num_range()’: a numerical range like x01, x02, x03.        • ‘one_of()’: variables in character vector.        • ‘everything()’: all variables."
  },
  {
    "name": "summarise",
    "usage": "summarise(.data, ...)",
    "pkg": "dplyr",
    "desc": "‘summarise()’ is typically used on grouped data created by     ‘group_by()’. The output will have one row for each group."
  },
  {
    "name": "summarise_all",
    "usage": "summarise_all(.tbl, .funs, ...)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "summarise_at",
    "usage": "summarise_at(.tbl, .vars, .funs, ..., .cols = NULL)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "summarise_if",
    "usage": "summarise_if(.tbl, .predicate, .funs, ...)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "summarize",
    "usage": "summarize(.data, ...)",
    "pkg": "dplyr",
    "desc": "‘summarise()’ is typically used on grouped data created by     ‘group_by()’. The output will have one row for each group."
  },
  {
    "name": "summarize_all",
    "usage": "summarize_all(.tbl, .funs, ...)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "summarize_at",
    "usage": "summarize_at(.tbl, .vars, .funs, ..., .cols = NULL)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "summarize_if",
    "usage": "summarize_if(.tbl, .predicate, .funs, ...)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "tally",
    "usage": "add_tally(x, wt, sort = FALSE)",
    "pkg": "dplyr",
    "desc": "‘tally()’ is a convenient wrapper for summarise that will either     call ‘n()’ or ‘sum(n)’ depending on whether you're tallying for     the first time, or re-tallying. ‘count()’ is similar but calls     ‘group_by()’ before and ‘ungroup()’ after.     ‘add_tally()’ adds a column \"n\" to a table based on the number of     items within each existing group, while ‘add_count()’ is a     shortcut that does the grouping as well. These functions are to     ‘tally()’ and ‘count()’ as ‘mutate()’ is to ‘summarise()’: they     add an additional column rather than collapsing each group."
  },
  {
    "name": "tbl",
    "usage": "as.tbl(x, ...)",
    "pkg": "dplyr",
    "desc": "This is a generic method that dispatches based on the first     argument."
  },
  {
    "name": "tbl_cube",
    "usage": "tbl_cube(dimensions, measures)",
    "pkg": "dplyr",
    "desc": "A cube tbl stores data in a compact array format where dimension     names are not needlessly repeated. They are particularly     appropriate for experimental data where all combinations of     factors are tried (e.g. complete factorial designs), or for     storing the result of aggregations. Compared to data frames, they     will occupy much less memory when variables are crossed, not     nested."
  },
  {
    "name": "tbl_df",
    "usage": "tbl_df(data)",
    "pkg": "dplyr",
    "desc": "Deprecated: please use ‘tibble::as_tibble()’ instead."
  },
  {
    "name": "tbl_nongroup_vars",
    "usage": "tbl_nongroup_vars(x)",
    "pkg": "dplyr",
    "desc": "‘tbl_vars()’ returns all variables while ‘tbl_nongroup_vars()’     returns only non-grouping variables."
  },
  {
    "name": "tbl_vars",
    "usage": "tbl_vars(x)",
    "pkg": "dplyr",
    "desc": "‘tbl_vars()’ returns all variables while ‘tbl_nongroup_vars()’     returns only non-grouping variables."
  },
  {
    "name": "top_n",
    "usage": "top_n(x, n, wt)",
    "pkg": "dplyr",
    "desc": "This is a convenient wrapper that uses ‘filter()’ and ‘min_rank()’     to select the top or bottom entries in each group, ordered by     ‘wt’."
  },
  {
    "name": "transmute",
    "usage": "transmute(.data, ...)",
    "pkg": "dplyr",
    "desc": "‘mutate()’ adds new variables and preserves existing;     ‘transmute()’ drops existing variables."
  },
  {
    "name": "transmute_all",
    "usage": "transmute_all(.tbl, .funs, ...)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "transmute_at",
    "usage": "transmute_at(.tbl, .vars, .funs, ..., .cols = NULL)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "transmute_if",
    "usage": "transmute_if(.tbl, .predicate, .funs, ...)",
    "pkg": "dplyr",
    "desc": "These verbs are scoped variants of ‘summarise()’, ‘mutate()’ and     ‘transmute()’. They apply operations on a selection of variables.        • ‘summarise_all()’, ‘mutate_all()’ and ‘transmute_all()’ apply          the functions to all (non-grouping) columns.        • ‘summarise_at()’, ‘mutate_at()’ and ‘transmute_at()’ allow          you to select columns using the same name-based          select_helpers just like with ‘select()’.        • ‘summarise_if’(), ‘mutate_if’() and ‘transmute_if()’ operate          on columns for which a predicate returns ‘TRUE’."
  },
  {
    "name": "ungroup",
    "usage": "ungroup(x, ...)",
    "pkg": "dplyr",
    "desc": "Most data operations are done on groups defined by variables.     ‘group_by()’ takes an existing tbl and converts it into a grouped     tbl where operations are performed \"by group\". ‘ungroup()’ removes     grouping."
  },
  {
    "name": "union",
    "usage": "union_all(x, y, ...)",
    "pkg": "dplyr",
    "desc": "These functions override the set functions provided in base to     make them generic so that efficient versions for data frames and     other tables can be provided. The default methods call the base     versions."
  },
  {
    "name": "union_all",
    "usage": "union_all(x, y, ...)",
    "pkg": "dplyr",
    "desc": "These functions override the set functions provided in base to     make them generic so that efficient versions for data frames and     other tables can be provided. The default methods call the base     versions."
  },
  {
    "name": "vars",
    "usage": "vars(...)",
    "pkg": "dplyr",
    "desc": "This helper is intended to provide equivalent semantics to     ‘select()’. It is used for instance in scoped summarising and     mutating verbs (‘mutate_at()’ and ‘summarise_at()’)."
  },
  {
    "name": "with_order",
    "usage": "with_order(order_by, fun, x, ...)",
    "pkg": "dplyr",
    "desc": "This is used to power the ordering parameters of dplyr's window     functions"
  },
  {
    "name": "aareg",
    "usage": "aareg(formula, data, weights, subset, na.action,",
    "pkg": "survival",
    "desc": "Returns an object of class ‘\"aareg\"’ that represents an Aalen     model."
  },
  {
    "name": "aeqSurv",
    "usage": "aeqSurv(x, tolerance = sqrt(.Machine$double.eps))",
    "pkg": "survival",
    "desc": "The check for tied survival times can fail due to floating point     imprecision, which can make actual ties appear to be distinct     values.  Routines that depend on correct identification of ties     pairs will then give incorrect results, e.g., a Cox model.  This     function rectifies these."
  },
  {
    "name": "agreg.fit",
    "usage": "agreg.fit(x, y, strata, offset, init, control, weights, method, rownames)",
    "pkg": "survival",
    "desc": "These are the the functions called by coxph that do the actual     computation.  In certain situations, e.g. a simulation, it may be     advantageous to call these directly rather than the usual ‘coxph’     call using a model formula."
  },
  {
    "name": "attrassign",
    "usage": "attrassign(object,...)",
    "pkg": "survival",
    "desc": "The ‘\"assign\"’ attribute on model matrices describes which columns     come from which terms in the model formula. It has two versions. R     uses the original version, but the alternate version found in     S-plus is sometimes useful."
  },
  {
    "name": "basehaz",
    "usage": "basehaz(fit, centered=TRUE)",
    "pkg": "survival",
    "desc": "Compute the predicted survival curve for a Cox model."
  },
  {
    "name": "cch",
    "usage": "cch(formula, data = sys.parent(), subcoh, id, stratum=NULL, cohort.size,",
    "pkg": "survival",
    "desc": "Returns estimates and standard errors from relative risk     regression fit to data from case-cohort studies. A choice is     available among the Prentice, Self-Prentice and Lin-Ying methods     for unstratified data. For stratified data the choice is between     Borgan I, a generalization of the Self-Prentice estimator for     unstratified case-cohort data, and Borgan II, a generalization of     the Lin-Ying estimator."
  },
  {
    "name": "cipoisson",
    "usage": "cipoisson(k, time = 1, p = 0.95, method = c(\"exact\", \"anscombe\"))",
    "pkg": "survival",
    "desc": "Confidence interval calculation for Poisson rates."
  },
  {
    "name": "clogit",
    "usage": "clogit(formula, data, weights, subset, na.action,",
    "pkg": "survival",
    "desc": "Estimates a logistic regression model by maximising the     conditional likelihood. Uses a model formula of the form     ‘case.status~exposure+strata(matched.set)’.  The default is to use     the exact conditional likelihood, a commonly used approximate     conditional likelihood is provided for compatibility with older     software."
  },
  {
    "name": "cluster",
    "usage": "cluster(x)",
    "pkg": "survival",
    "desc": "This is a special function used in the context of survival models.     It identifies correlated groups of observations, and is used on     the right hand side of a formula. Using ‘cluster()’ in a formula     implies that robust sandwich variance estimators are desired."
  },
  {
    "name": "cox.zph",
    "usage": "cox.zph(fit, transform=\"km\", global=TRUE)",
    "pkg": "survival",
    "desc": "Test the proportional hazards assumption for a Cox regression     model fit (‘coxph’)."
  },
  {
    "name": "coxph",
    "usage": "coxph(formula, data=, weights, subset,",
    "pkg": "survival",
    "desc": "Fits a Cox proportional hazards regression model.  Time dependent     variables, time dependent strata, multiple events per subject, and     other extensions are incorporated using the counting process     formulation of Andersen and Gill."
  },
  {
    "name": "coxph.control",
    "usage": "coxph.control(eps = 1e-09, toler.chol = .Machine$double.eps^0.75,",
    "pkg": "survival",
    "desc": "This is used to set various numeric parameters controlling a Cox     model fit. Typically it would only be used in a call to ‘coxph’."
  },
  {
    "name": "coxph.detail",
    "usage": "coxph.detail(object, riskmat=FALSE)",
    "pkg": "survival",
    "desc": "Returns the individual contributions to the first and second     derivative matrix, at each unique event time."
  },
  {
    "name": "coxph.fit",
    "usage": "coxph.fit(x, y, strata, offset, init, control, weights, method, rownames)",
    "pkg": "survival",
    "desc": "These are the the functions called by coxph that do the actual     computation.  In certain situations, e.g. a simulation, it may be     advantageous to call these directly rather than the usual ‘coxph’     call using a model formula."
  },
  {
    "name": "coxph.wtest",
    "usage": "coxph.wtest(var, b, toler.chol = 1e-09)",
    "pkg": "survival",
    "desc": "This function is used internally by several survival routines.  It     computes a simple quadratic form, while properly dealing with     missings."
  },
  {
    "name": "dsurvreg",
    "usage": "dsurvreg(x, mean, scale=1, distribution='weibull', parms)",
    "pkg": "survival",
    "desc": "Density, cumulative distribution function, quantile function and     random generation for the set of distributions supported by the     ‘survreg’ function."
  },
  {
    "name": "finegray",
    "usage": "finegray(formula, data, subset, na.action= na.pass, etype,",
    "pkg": "survival",
    "desc": "The Fine-Gray model can be fit by first creating a special data     set, and then fitting a weighted Cox model to the result.  This     routine creates the data set."
  },
  {
    "name": "frailty",
    "usage": "frailty.t(x, sparse = (nclass > 5), theta, df, eps = 1e-05, tdf = 5,",
    "pkg": "survival",
    "desc": "The frailty function allows one to add a simple random effects     term to a Cox or survreg model."
  },
  {
    "name": "frailty.gamma",
    "usage": "frailty.gamma(x, sparse = (nclass > 5), theta, df, eps = 1e-05,",
    "pkg": "survival",
    "desc": "The frailty function allows one to add a simple random effects     term to a Cox or survreg model."
  },
  {
    "name": "frailty.gaussian",
    "usage": "frailty.gaussian(x, sparse = (nclass > 5), theta, df,",
    "pkg": "survival",
    "desc": "The frailty function allows one to add a simple random effects     term to a Cox or survreg model."
  },
  {
    "name": "frailty.t",
    "usage": "frailty.t(x, sparse = (nclass > 5), theta, df, eps = 1e-05, tdf = 5,",
    "pkg": "survival",
    "desc": "The frailty function allows one to add a simple random effects     term to a Cox or survreg model."
  },
  {
    "name": "is.ratetable",
    "usage": "is.ratetable(x, verbose=FALSE)",
    "pkg": "survival",
    "desc": "The function verifies not only the ‘class’ attribute, but the     structure of the object."
  },
  {
    "name": "is.Surv",
    "usage": "is.Surv(x)",
    "pkg": "survival",
    "desc": "Create a survival object, usually used as a response variable in a     model formula. Argument matching is special for this function, see     Details below."
  },
  {
    "name": "neardate",
    "usage": "neardate(id1, id2, y1, y2, best = c(\"after\", \"prior\"),",
    "pkg": "survival",
    "desc": "A common task in medical work is to find the closest lab value to     some index date, for each subject."
  },
  {
    "name": "pspline",
    "usage": "psplineinverse(x)",
    "pkg": "survival",
    "desc": "Specifies a penalised spline basis for the predictor.  This is     done by fitting a comparatively small set of splines and     penalising the integrated second derivative.  Traditional     smoothing splines use one basis per observation, but several     authors have pointed out that the final results of the fit are     indistinguishable for any number of basis functions greater than     about 2-3 times the degrees of freedom.  Eilers and Marx point out     that if the basis functions are evenly spaced, this leads to     significant computational simplification, they refer to the result     as a p-spline."
  },
  {
    "name": "psurvreg",
    "usage": "psurvreg(q, mean, scale=1, distribution='weibull', parms)",
    "pkg": "survival",
    "desc": "Density, cumulative distribution function, quantile function and     random generation for the set of distributions supported by the     ‘survreg’ function."
  },
  {
    "name": "pyears",
    "usage": "ratetable, scale=365.25, expect=c('event', 'pyears'),",
    "pkg": "survival",
    "desc": "This function computes the person-years of follow-up time     contributed by a cohort of subjects, stratified into subgroups.     It also computes the number of subjects who contribute to each     cell of the output table, and optionally the number of events     and/or expected number of events in each cell."
  },
  {
    "name": "qsurvreg",
    "usage": "qsurvreg(p, mean, scale=1, distribution='weibull', parms)",
    "pkg": "survival",
    "desc": "Density, cumulative distribution function, quantile function and     random generation for the set of distributions supported by the     ‘survreg’ function."
  },
  {
    "name": "ratetable",
    "usage": "ratetable(...)",
    "pkg": "survival",
    "desc": "This function matches variable names in data to those in a     ratetable for ‘survexp’"
  },
  {
    "name": "ratetableDate",
    "usage": "ratetableDate(x)",
    "pkg": "survival",
    "desc": "This method converts dates from various forms into the internal     form used in ‘ratetable’ objects."
  },
  {
    "name": "ridge",
    "usage": "ridge(..., theta, df=nvar/2, eps=0.1, scale=TRUE)",
    "pkg": "survival",
    "desc": "When used in a coxph or survreg model formula, specifies a ridge     regression term.  The likelihood is penalised by ‘theta’/2 time     the sum of squared coefficients. If ‘scale=T’ the penalty is     calculated for coefficients based on rescaling the predictors to     have unit variance. If ‘df’ is specified then ‘theta’ is chosen     based on an approximate degrees of freedom."
  },
  {
    "name": "rsurvreg",
    "usage": "rsurvreg(n, mean, scale=1, distribution='weibull', parms)",
    "pkg": "survival",
    "desc": "Density, cumulative distribution function, quantile function and     random generation for the set of distributions supported by the     ‘survreg’ function."
  },
  {
    "name": "statefig",
    "usage": "statefig(layout, connect, margin = 0.03, box = TRUE, cex = 1, col = 1,",
    "pkg": "survival",
    "desc": "For multi-state survival models it is useful to have a figure that     shows the states and the possible transitions between them.  This     function creates a simple \"box and arrows\" figure.  It's goal was     simplicity."
  },
  {
    "name": "strata",
    "usage": "strata(..., na.group=FALSE, shortlabel, sep=', ')",
    "pkg": "survival",
    "desc": "This is a special function used in the context of the Cox survival     model.  It identifies stratification variables when they appear on     the right hand side of a formula."
  },
  {
    "name": "Surv",
    "usage": "is.Surv(x)",
    "pkg": "survival",
    "desc": "Create a survival object, usually used as a response variable in a     model formula. Argument matching is special for this function, see     Details below."
  },
  {
    "name": "survConcordance",
    "usage": "survConcordance.fit(y, x, strata, weight)",
    "pkg": "survival",
    "desc": "This function computes the concordance between a right-censored     survival time and a single continuous covariate"
  },
  {
    "name": "survConcordance.fit",
    "usage": "survConcordance.fit(y, x, strata, weight)",
    "pkg": "survival",
    "desc": "This function computes the concordance between a right-censored     survival time and a single continuous covariate"
  },
  {
    "name": "survdiff",
    "usage": "survdiff(formula, data, subset, na.action, rho=0)",
    "pkg": "survival",
    "desc": "Tests if there is a difference between two or more survival curves     using the G-rho family of tests, or for a single curve against a     known alternative."
  },
  {
    "name": "survexp",
    "usage": "ratetable=survival::survexp.us, scale=1,",
    "pkg": "survival",
    "desc": "Returns either the expected survival of a cohort of subjects, or     the individual expected survival for each subject."
  },
  {
    "name": "survfit",
    "usage": "survfit(formula, ...)",
    "pkg": "survival",
    "desc": "This function creates survival curves from either a formula (e.g.     the Kaplan-Meier), a previously fitted Cox model, or a previously     fitted accelerated failure time model."
  },
  {
    "name": "survfitcoxph.fit",
    "usage": "survfitcoxph.fit(y, x, wt, x2, risk, newrisk, strata, se.fit, survtype,",
    "pkg": "survival",
    "desc": "This program is mainly supplied to allow other packages to invoke     the survfit.coxph function at a `data' level rather than a `user'     level.  It does no checks on the input data that is provided,     which can lead to unexpected errors if that data is wrong."
  },
  {
    "name": "survobrien",
    "usage": "survobrien(formula, data, subset, na.action, transform)",
    "pkg": "survival",
    "desc": "Peter O'Brien's test for association of a single variable with     survival This test is proposed in Biometrics, June 1978."
  },
  {
    "name": "survreg",
    "usage": "survreg(formula, data, weights, subset,",
    "pkg": "survival",
    "desc": "Fit a parametric survival regression model. These are     location-scale models for an arbitrary transform of the time     variable; the most common cases use a log transformation, leading     to accelerated failure time models."
  },
  {
    "name": "survreg.control",
    "usage": "survreg.control(maxiter=30, rel.tolerance=1e-09,",
    "pkg": "survival",
    "desc": "This functions checks and packages the fitting options for     ‘survreg’"
  },
  {
    "name": "survregDtest",
    "usage": "survregDtest(dlist, verbose = F)",
    "pkg": "survival",
    "desc": "This routine is called by ‘survreg’ to verify that a distribution     object is valid."
  },
  {
    "name": "survSplit",
    "usage": "survSplit(formula, data, subset, na.action=na.pass,",
    "pkg": "survival",
    "desc": "Given a survival data set and a set of specified cut times, split     each record into multiple subrecords at each cut time.  The new     data set will be in `counting process' format, with a start time,     stop time, and event status for each record."
  },
  {
    "name": "tcut",
    "usage": "## S3 method for class 'tcut'",
    "pkg": "survival",
    "desc": "Attaches categories for person-year calculations to a variable     without losing the underlying continuous representation"
  },
  {
    "name": "tmerge",
    "usage": "tmerge(data1, data2,  id,..., tstart, tstop, options)",
    "pkg": "survival",
    "desc": "A common task in survival analysis is the creation of start,stop     data sets which have multiple intervals for each subject, along     with the covariate values that apply over that interval.  This     function aids in the creation of such data sets."
  },
  {
    "name": "untangle.specials",
    "usage": "untangle.specials(tt, special, order=1)",
    "pkg": "survival",
    "desc": "Given a ‘terms’ structure and a desired special name, this returns     an index appropriate for subscripting the ‘terms’ structure and     another appropriate for the data frame."
  },
  {
    "name": "basis",
    "usage": "basis(knots, x)",
    "pkg": "flexsurv",
    "desc": "Compute a basis for a natural cubic spline, using the     parameterisation described by Royston and Parmar (2002).  Used for     flexible parametric survival models."
  },
  {
    "name": "dgenf",
    "usage": "dgenf(x, mu = 0, sigma = 1, Q, P, log = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized F distribution, using the     reparameterisation by Prentice (1975)."
  },
  {
    "name": "dgenf.orig",
    "usage": "dgenf.orig(x, mu = 0, sigma = 1, s1, s2, log = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, quantile function and random     generation for the generalized F distribution, using the less     flexible original parameterisation described by Prentice (1975)."
  },
  {
    "name": "dgengamma",
    "usage": "dgengamma(x, mu = 0, sigma = 1, Q, log = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the parameterisation originating from Prentice (1974). Also known     as the (generalized) log-gamma distribution."
  },
  {
    "name": "dgengamma.orig",
    "usage": "dgengamma.orig(x, shape, scale = 1, k, log = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the original parameterisation from Stacy (1962)."
  },
  {
    "name": "dgompertz",
    "usage": "dgompertz(x, shape, rate = 1, log = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the Gompertz distribution with unrestricted     shape."
  },
  {
    "name": "flexsurvreg",
    "usage": "flexsurvreg(formula, anc = NULL, data, weights, bhazard, subset, na.action,",
    "pkg": "flexsurv",
    "desc": "Parametric modelling or regression for time-to-event data.     Several built-in distributions are available, and users may supply     their own."
  },
  {
    "name": "flexsurvspline",
    "usage": "flexsurvspline(formula, data, weights, bhazard, subset, k = 0, knots = NULL,",
    "pkg": "flexsurv",
    "desc": "Flexible parametric modelling of time-to-event data using the     spline model of Royston and Parmar (2002)."
  },
  {
    "name": "hgenf",
    "usage": "hgenf(x, mu = 0, sigma = 1, Q, P)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized F distribution, using the     reparameterisation by Prentice (1975)."
  },
  {
    "name": "Hgenf",
    "usage": "Hgenf(x, mu = 0, sigma = 1, Q, P)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized F distribution, using the     reparameterisation by Prentice (1975)."
  },
  {
    "name": "hgenf.orig",
    "usage": "hgenf.orig(x, mu = 0, sigma = 1, s1, s2)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, quantile function and random     generation for the generalized F distribution, using the less     flexible original parameterisation described by Prentice (1975)."
  },
  {
    "name": "Hgenf.orig",
    "usage": "Hgenf.orig(x, mu = 0, sigma = 1, s1, s2)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, quantile function and random     generation for the generalized F distribution, using the less     flexible original parameterisation described by Prentice (1975)."
  },
  {
    "name": "hgengamma",
    "usage": "hgengamma(x, mu = 0, sigma = 1, Q)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the parameterisation originating from Prentice (1974). Also known     as the (generalized) log-gamma distribution."
  },
  {
    "name": "Hgengamma",
    "usage": "Hgengamma(x, mu = 0, sigma = 1, Q)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the parameterisation originating from Prentice (1974). Also known     as the (generalized) log-gamma distribution."
  },
  {
    "name": "hgengamma.orig",
    "usage": "hgengamma.orig(x, shape, scale = 1, k)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the original parameterisation from Stacy (1962)."
  },
  {
    "name": "Hgengamma.orig",
    "usage": "Hgengamma.orig(x, shape, scale = 1, k)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the original parameterisation from Stacy (1962)."
  },
  {
    "name": "hgompertz",
    "usage": "hgompertz(x, shape, rate = 1, log = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the Gompertz distribution with unrestricted     shape."
  },
  {
    "name": "Hgompertz",
    "usage": "Hgompertz(x, shape, rate = 1, log = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the Gompertz distribution with unrestricted     shape."
  },
  {
    "name": "msfit.flexsurvreg",
    "usage": "msfit.flexsurvreg(object, t, newdata = NULL, variance = TRUE,",
    "pkg": "flexsurv",
    "desc": "Cumulative transition-specific intensity/hazard functions for     fully-parametric multi-state or competing risks models, using a     piecewise-constant approximation that will allow prediction using     the functions in the ‘mstate’ package."
  },
  {
    "name": "normboot.flexsurvreg",
    "usage": "normboot.flexsurvreg(x, B, newdata = NULL, X = NULL, transform = FALSE,",
    "pkg": "flexsurv",
    "desc": "Produce a matrix of alternative parameter estimates under sampling     uncertainty, at covariate values supplied by the user.  Used by     ‘summary.flexsurvreg’ for obtaining confidence intervals around     functions of parameters."
  },
  {
    "name": "pars.fmsm",
    "usage": "pars.fmsm(x, trans, newdata = NULL, tvar = \"trans\")",
    "pkg": "flexsurv",
    "desc": "Matrix of maximum likelihood estimates of transition-specific     parameters in a flexible parametric multi-state model, at given     covariate values."
  },
  {
    "name": "pgenf",
    "usage": "pgenf(q, mu = 0, sigma = 1, Q, P, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized F distribution, using the     reparameterisation by Prentice (1975)."
  },
  {
    "name": "pgenf.orig",
    "usage": "pgenf.orig(q, mu = 0, sigma = 1, s1, s2, lower.tail = TRUE,",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, quantile function and random     generation for the generalized F distribution, using the less     flexible original parameterisation described by Prentice (1975)."
  },
  {
    "name": "pgengamma",
    "usage": "pgengamma(q, mu = 0, sigma = 1, Q, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the parameterisation originating from Prentice (1974). Also known     as the (generalized) log-gamma distribution."
  },
  {
    "name": "pgengamma.orig",
    "usage": "pgengamma.orig(q, shape, scale = 1, k, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the original parameterisation from Stacy (1962)."
  },
  {
    "name": "pgompertz",
    "usage": "pgompertz(q, shape, rate = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the Gompertz distribution with unrestricted     shape."
  },
  {
    "name": "pmatrix.fs",
    "usage": "pmatrix.fs(x, trans, t = 1, newdata = NULL, ci = FALSE, tvar = \"trans\",",
    "pkg": "flexsurv",
    "desc": "The transition probability matrix for time-inhomogeneous Markov     multi-state models fitted to time-to-event data with     ‘flexsurvreg’.  This has r,s entry giving the probability that an     individual is in state s at time t, given they are in state r at     time 0."
  },
  {
    "name": "pmatrix.simfs",
    "usage": "pmatrix.simfs(x, trans, t = 1, newdata = NULL, ci = FALSE,",
    "pkg": "flexsurv",
    "desc": "The transition probability matrix for semi-Markov multi-state     models fitted to time-to-event data with ‘flexsurvreg’.  This has     r,s entry giving the probability that an individual is in state s     at time t, given they are in state r at time 0."
  },
  {
    "name": "qgeneric",
    "usage": "qgeneric(pdist, p, matargs = NULL, ...)",
    "pkg": "flexsurv",
    "desc": "Generic function to find the quantiles of a distribution, given     the equivalent probability distribution function."
  },
  {
    "name": "qgenf",
    "usage": "qgenf(p, mu = 0, sigma = 1, Q, P, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized F distribution, using the     reparameterisation by Prentice (1975)."
  },
  {
    "name": "qgenf.orig",
    "usage": "qgenf.orig(p, mu = 0, sigma = 1, s1, s2, lower.tail = TRUE,",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, quantile function and random     generation for the generalized F distribution, using the less     flexible original parameterisation described by Prentice (1975)."
  },
  {
    "name": "qgengamma",
    "usage": "qgengamma(p, mu = 0, sigma = 1, Q, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the parameterisation originating from Prentice (1974). Also known     as the (generalized) log-gamma distribution."
  },
  {
    "name": "qgengamma.orig",
    "usage": "qgengamma.orig(p, shape, scale = 1, k, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the original parameterisation from Stacy (1962)."
  },
  {
    "name": "qgompertz",
    "usage": "qgompertz(p, shape, rate = 1, lower.tail = TRUE, log.p = FALSE)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the Gompertz distribution with unrestricted     shape."
  },
  {
    "name": "rgenf",
    "usage": "rgenf(n, mu = 0, sigma = 1, Q, P)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized F distribution, using the     reparameterisation by Prentice (1975)."
  },
  {
    "name": "rgenf.orig",
    "usage": "rgenf.orig(n, mu = 0, sigma = 1, s1, s2)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, quantile function and random     generation for the generalized F distribution, using the less     flexible original parameterisation described by Prentice (1975)."
  },
  {
    "name": "rgengamma",
    "usage": "rgengamma(n, mu = 0, sigma = 1, Q)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the parameterisation originating from Prentice (1974). Also known     as the (generalized) log-gamma distribution."
  },
  {
    "name": "rgengamma.orig",
    "usage": "rgengamma.orig(n, shape, scale = 1, k)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the generalized gamma distribution, using     the original parameterisation from Stacy (1962)."
  },
  {
    "name": "rgompertz",
    "usage": "rgompertz(n, shape = 1, rate = 1)",
    "pkg": "flexsurv",
    "desc": "Density, distribution function, hazards, quantile function and     random generation for the Gompertz distribution with unrestricted     shape."
  },
  {
    "name": "rmst_generic",
    "usage": "rmst_generic(pdist, t, start = 0, matargs = NULL, ...)",
    "pkg": "flexsurv",
    "desc": "Generic function to find the restricted mean of a distribution,     given the equivalent probability distribution function using     numeric intergration."
  },
  {
    "name": "sim.fmsm",
    "usage": "sim.fmsm(x, trans, t, newdata = NULL, start = 1, M = 10, tvar = \"trans\",",
    "pkg": "flexsurv",
    "desc": "Simulate changes of state and transition times from a semi-Markov     multi-state model fitted using ‘flexsurvreg’."
  },
  {
    "name": "totlos.fs",
    "usage": "totlos.fs(x, trans, t = 1, newdata = NULL, ci = FALSE, tvar = \"trans\",",
    "pkg": "flexsurv",
    "desc": "The matrix whose r,s entry is the expected amount of time spent in     state s for a time-inhomogeneous, continuous-time Markov     multi-state process that starts in state r, up to a maximum time     t. This is defined as the integral of the corresponding transition     probability up to that time."
  },
  {
    "name": "totlos.simfs",
    "usage": "totlos.simfs(x, trans, t = 1, start = 1, newdata = NULL, ci = FALSE,",
    "pkg": "flexsurv",
    "desc": "The expected total time spent in each state for semi-Markov     multi-state models fitted to time-to-event data with     ‘flexsurvreg’.  This is defined by the integral of the transition     probability matrix, though this is not analytically possible and     is computed by simulation."
  },
  {
    "name": "unroll.function",
    "usage": "unroll.function(mat.fn, ...)",
    "pkg": "flexsurv",
    "desc": "Given a function with matrix arguments, construct an equivalent     function which takes vector arguments defined by the columns of     the matrix.  The new function simply uses ‘cbind’ on the vector     arguments to make a matrix, and calls the old one."
  },
  {
    "name": "add_hazards",
    "usage": "add_hazards_(dots)",
    "pkg": "heemod",
    "desc": "Get a survival distribution reflecting the independent hazards     from two or more survival distributions."
  },
  {
    "name": "add_hazards_",
    "usage": "add_hazards_(dots)",
    "pkg": "heemod",
    "desc": "Get a survival distribution reflecting the independent hazards     from two or more survival distributions."
  },
  {
    "name": "apply_af",
    "usage": "apply_af(dist, af, log_af = FALSE)",
    "pkg": "heemod",
    "desc": "Proportionally increase or reduce the time to event of a survival     distribution."
  },
  {
    "name": "apply_hr",
    "usage": "apply_hr(dist, hr, log_hr = FALSE)",
    "pkg": "heemod",
    "desc": "Proportional reduce or increase the hazard rate of a distribution."
  },
  {
    "name": "apply_or",
    "usage": "apply_or(dist, or, log_or = FALSE)",
    "pkg": "heemod",
    "desc": "Proportionally increase or reduce the odds of an event of a     survival distribution."
  },
  {
    "name": "apply_shift",
    "usage": "apply_shift(dist, shift)",
    "pkg": "heemod",
    "desc": "Apply a time shift to a survival distribution"
  },
  {
    "name": "calibrate_model",
    "usage": "calibrate_model(x, parameter_names, fn_values, target_values,",
    "pkg": "heemod",
    "desc": "Search for the appropriate value of unknown parameters to obtain     specific model results."
  },
  {
    "name": "close_cluster",
    "usage": "close_cluster()",
    "pkg": "heemod",
    "desc": "These functions create or delete a cluster for ‘heemod’. When the     cluster is created it is automagically used by ‘heemod’ functions."
  },
  {
    "name": "combine_probs",
    "usage": "combine_probs(...)",
    "pkg": "heemod",
    "desc": "Given several independent probabilities of an event, return the     final probability of the event."
  },
  {
    "name": "compute_surv",
    "usage": "compute_surv(x, time, cycle_length = 1, type = c(\"prob\", \"survival\"), ...)",
    "pkg": "heemod",
    "desc": "Generate either survival probabilities or conditional     probabilities of event for each model cycle."
  },
  {
    "name": "define_calibration_fn",
    "usage": "define_calibration_fn(type, strategy_names, element_names, cycles,",
    "pkg": "heemod",
    "desc": "Define a function to be passed to the ‘fn_values’ argument of     ‘calibrate_model()’."
  },
  {
    "name": "define_correlation",
    "usage": "define_correlation_(.dots)",
    "pkg": "heemod",
    "desc": "Not all correlation need to be specified for all variable     combinations, unspecified correlations are assumed to be 0."
  },
  {
    "name": "define_distribution",
    "usage": "define_distribution(x)",
    "pkg": "heemod",
    "desc": "Define a distribution for PSA parameters."
  },
  {
    "name": "define_dsa",
    "usage": "define_dsa_(par_names, low_dots, high_dots)",
    "pkg": "heemod",
    "desc": "Define parameter variations for a Markov model sensitivity     analysis."
  },
  {
    "name": "define_inflow",
    "usage": "define_inflow_(.dots)",
    "pkg": "heemod",
    "desc": "Define Inflow for a BIA"
  },
  {
    "name": "define_inflow_",
    "usage": "define_inflow_(.dots)",
    "pkg": "heemod",
    "desc": "Define Inflow for a BIA"
  },
  {
    "name": "define_init",
    "usage": "define_init_(.dots)",
    "pkg": "heemod",
    "desc": "Define Initial Counts"
  },
  {
    "name": "define_init_",
    "usage": "define_init_(.dots)",
    "pkg": "heemod",
    "desc": "Define Initial Counts"
  },
  {
    "name": "define_parameters",
    "usage": "define_parameters_(.dots)",
    "pkg": "heemod",
    "desc": "Define parameters called to compute the transition matrix or state     values for a Markov model. Parameters can be time dependent by     using the ‘markov_cycle’ parameter."
  },
  {
    "name": "define_parameters_",
    "usage": "define_parameters_(.dots)",
    "pkg": "heemod",
    "desc": "Define parameters called to compute the transition matrix or state     values for a Markov model. Parameters can be time dependent by     using the ‘markov_cycle’ parameter."
  },
  {
    "name": "define_part_surv",
    "usage": "define_part_surv_(pfs, os, state_names, cycle_length = 1)",
    "pkg": "heemod",
    "desc": "Define a partitioned survival model with progression-free survival     and overall survival."
  },
  {
    "name": "define_part_surv_",
    "usage": "define_part_surv_(pfs, os, state_names, cycle_length = 1)",
    "pkg": "heemod",
    "desc": "Define a partitioned survival model with progression-free survival     and overall survival."
  },
  {
    "name": "define_psa",
    "usage": "define_psa_(.dots = list(), correlation)",
    "pkg": "heemod",
    "desc": "Define the properties of parameter distributions and their     correlation structure for probabilistic uncertainty analysis of     Markov models."
  },
  {
    "name": "define_psa_",
    "usage": "define_psa_(.dots = list(), correlation)",
    "pkg": "heemod",
    "desc": "Define the properties of parameter distributions and their     correlation structure for probabilistic uncertainty analysis of     Markov models."
  },
  {
    "name": "define_spline_survival",
    "usage": "define_spline_survival(scale = c(\"hazard\", \"odds\", \"normal\"), ...)",
    "pkg": "heemod",
    "desc": "Define a restricted cubic spline parametric survival distribution."
  },
  {
    "name": "define_starting_values",
    "usage": "define_starting_values_(.dots)",
    "pkg": "heemod",
    "desc": "Define Starting State Values"
  },
  {
    "name": "define_starting_values_",
    "usage": "define_starting_values_(.dots)",
    "pkg": "heemod",
    "desc": "Define Starting State Values"
  },
  {
    "name": "define_state",
    "usage": "define_state_(.dots)",
    "pkg": "heemod",
    "desc": "Define the values characterising a Markov Model state for 1 cycle."
  },
  {
    "name": "define_state_",
    "usage": "define_state_(.dots)",
    "pkg": "heemod",
    "desc": "Define the values characterising a Markov Model state for 1 cycle."
  },
  {
    "name": "define_strategy",
    "usage": "define_strategy_(transition, states, starting_values)",
    "pkg": "heemod",
    "desc": "Combine information on parameters, transition matrix and states     defined through ‘define_parameters()’, ‘define_transition()’ and     ‘define_state()’ respectively."
  },
  {
    "name": "define_strategy_",
    "usage": "define_strategy_(transition, states, starting_values)",
    "pkg": "heemod",
    "desc": "Combine information on parameters, transition matrix and states     defined through ‘define_parameters()’, ‘define_transition()’ and     ‘define_state()’ respectively."
  },
  {
    "name": "define_surv_table",
    "usage": "define_surv_table(x)",
    "pkg": "heemod",
    "desc": "Define a survival distribution based on explicit survival     probabilities"
  },
  {
    "name": "define_survival",
    "usage": "define_survival(distribution = c(\"exp\", \"weibull\", \"weibullPH\", \"lnorm\",",
    "pkg": "heemod",
    "desc": "Define a parametric survival distribution."
  },
  {
    "name": "define_transition",
    "usage": "define_transition_(.dots, state_names)",
    "pkg": "heemod",
    "desc": "Define a matrix of transition probabilities. Probability can     depend on parameters defined with ‘define_parameters()’, and can     thus be time-dependent."
  },
  {
    "name": "define_transition_",
    "usage": "define_transition_(.dots, state_names)",
    "pkg": "heemod",
    "desc": "Define a matrix of transition probabilities. Probability can     depend on parameters defined with ‘define_parameters()’, and can     thus be time-dependent."
  },
  {
    "name": "define_vbp",
    "usage": "define_vbp_(par_name, low_dots, med_dots, high_dots)",
    "pkg": "heemod",
    "desc": "Define parameter variations for a value-based pricing analysis."
  },
  {
    "name": "discount",
    "usage": "discount(x, r, first = FALSE, period = 1)",
    "pkg": "heemod",
    "desc": "Discount a Quantity Over Time"
  },
  {
    "name": "dispatch_strategy",
    "usage": "dispatch_strategy(.strategy, ...)",
    "pkg": "heemod",
    "desc": "Returns different values depending on the strategy."
  },
  {
    "name": "export_savi",
    "usage": "export_savi(x, folder = \".\")",
    "pkg": "heemod",
    "desc": "Export the result of a PSA in a format compatible with Sheffield     Accelerated Value of Information software."
  },
  {
    "name": "get_who_mr",
    "usage": "get_who_mr(age, sex = NULL, region = NULL, country = NULL,",
    "pkg": "heemod",
    "desc": "Returns age and sex-specific mortality probabilities for a given     country."
  },
  {
    "name": "join",
    "usage": "join_(dots, at)",
    "pkg": "heemod",
    "desc": "Project survival from a survival distribution using one or more     survival distributions using the specified cut points."
  },
  {
    "name": "join_",
    "usage": "join_(dots, at)",
    "pkg": "heemod",
    "desc": "Project survival from a survival distribution using one or more     survival distributions using the specified cut points."
  },
  {
    "name": "load_surv_models",
    "usage": "load_surv_models(location, survival_specs, use_envir)",
    "pkg": "heemod",
    "desc": "Load a set of survival fits"
  },
  {
    "name": "look_up",
    "usage": "look_up(data, ..., bin = FALSE, value = \"value\")",
    "pkg": "heemod",
    "desc": "A convenience function to easily look for values in a data frame."
  },
  {
    "name": "mix",
    "usage": "mix_(dots, weights = 1)",
    "pkg": "heemod",
    "desc": "Mix a set of survival distributions using the specified weights."
  },
  {
    "name": "mix_",
    "usage": "mix_(dots, weights = 1)",
    "pkg": "heemod",
    "desc": "Mix a set of survival distributions using the specified weights."
  },
  {
    "name": "modify",
    "usage": "modify(.OBJECT, ...)",
    "pkg": "heemod",
    "desc": "This generic function allows the modification of various objects     such as parameters, transitions matrix or states."
  },
  {
    "name": "or_to_prob",
    "usage": "or_to_prob(or, p)",
    "pkg": "heemod",
    "desc": "These convienience functions make it easier to compute transition     probabilities from indidence rates, OR, RR, or probabilities     estimated on a different timeframe."
  },
  {
    "name": "part_survs_from_surv_inputs",
    "usage": "part_survs_from_surv_inputs(surv_inputs, state_names)",
    "pkg": "heemod",
    "desc": "Convert saved fits to partitioned survival objects"
  },
  {
    "name": "pool",
    "usage": "pool_(...)",
    "pkg": "heemod",
    "desc": "Mix a set of survival distributions using the specified weights."
  },
  {
    "name": "pool_",
    "usage": "pool_(...)",
    "pkg": "heemod",
    "desc": "Mix a set of survival distributions using the specified weights."
  },
  {
    "name": "prob_to_prob",
    "usage": "prob_to_prob(...)",
    "pkg": "heemod",
    "desc": "These convienience functions make it easier to compute transition     probabilities from indidence rates, OR, RR, or probabilities     estimated on a different timeframe."
  },
  {
    "name": "project",
    "usage": "project_(...)",
    "pkg": "heemod",
    "desc": "Project survival from a survival distribution using one or more     survival distributions using the specified cut points."
  },
  {
    "name": "project_",
    "usage": "project_(...)",
    "pkg": "heemod",
    "desc": "Project survival from a survival distribution using one or more     survival distributions using the specified cut points."
  },
  {
    "name": "rate_to_prob",
    "usage": "rate_to_prob(r, to = 1, per = 1)",
    "pkg": "heemod",
    "desc": "These convienience functions make it easier to compute transition     probabilities from indidence rates, OR, RR, or probabilities     estimated on a different timeframe."
  },
  {
    "name": "reindent_transition",
    "usage": "reindent_transition(x, print = TRUE)",
    "pkg": "heemod",
    "desc": "Reindent Transition Matrix"
  },
  {
    "name": "rescale_discount_rate",
    "usage": "rescale_discount_rate(x, from, to)",
    "pkg": "heemod",
    "desc": "Rescale a discount rate between two time frames."
  },
  {
    "name": "rescale_prob",
    "usage": "rescale_prob(p, to = 1, from = 1)",
    "pkg": "heemod",
    "desc": "These convienience functions make it easier to compute transition     probabilities from indidence rates, OR, RR, or probabilities     estimated on a different timeframe."
  },
  {
    "name": "rr_to_prob",
    "usage": "rr_to_prob(rr, p)",
    "pkg": "heemod",
    "desc": "These convienience functions make it easier to compute transition     probabilities from indidence rates, OR, RR, or probabilities     estimated on a different timeframe."
  },
  {
    "name": "run_bcea",
    "usage": "run_bcea(x, ...)",
    "pkg": "heemod",
    "desc": "Interfaces the output of ‘run_psa()’ into the BCEA package."
  },
  {
    "name": "run_dsa",
    "usage": "run_dsa(model, dsa)",
    "pkg": "heemod",
    "desc": "Run Sensitivity Analysis"
  },
  {
    "name": "run_model",
    "usage": "run_model_(uneval_strategy_list, parameters, init, cycles, method, cost, effect,",
    "pkg": "heemod",
    "desc": "Runs one or more strategy. When more than one strategy is     provided, all strategies should have the same states and state     value names."
  },
  {
    "name": "run_model_",
    "usage": "run_model_(uneval_strategy_list, parameters, init, cycles, method, cost, effect,",
    "pkg": "heemod",
    "desc": "Runs one or more strategy. When more than one strategy is     provided, all strategies should have the same states and state     value names."
  },
  {
    "name": "run_model_tabular",
    "usage": "run_model_tabular(location, reference = \"REFERENCE.csv\", run_dsa = TRUE,",
    "pkg": "heemod",
    "desc": "This function runs a model from tabular input."
  },
  {
    "name": "run_psa",
    "usage": "run_psa(model, psa, N, resample)",
    "pkg": "heemod",
    "desc": "Run Probabilistic Uncertainty Analysis"
  },
  {
    "name": "run_vbp",
    "usage": "run_vbp(model, vbp, strategy_vbp, wtp_thresholds)",
    "pkg": "heemod",
    "desc": "Run Value-Based Price Analysis"
  },
  {
    "name": "set_covariates",
    "usage": "set_covariates_(dist, covariates, data = NULL)",
    "pkg": "heemod",
    "desc": "Set the covariate levels of a survival model to be represented in     survival projections."
  },
  {
    "name": "set_covariates_",
    "usage": "set_covariates_(dist, covariates, data = NULL)",
    "pkg": "heemod",
    "desc": "Set the covariate levels of a survival model to be represented in     survival projections."
  },
  {
    "name": "status_cluster",
    "usage": "status_cluster(verbose = TRUE)",
    "pkg": "heemod",
    "desc": "These functions create or delete a cluster for ‘heemod’. When the     cluster is created it is automagically used by ‘heemod’ functions."
  },
  {
    "name": "use_cluster",
    "usage": "use_cluster(num_cores, cluster = NULL, close = TRUE)",
    "pkg": "heemod",
    "desc": "These functions create or delete a cluster for ‘heemod’. When the     cluster is created it is automagically used by ‘heemod’ functions."
  },
  {
    "name": "use_distribution",
    "usage": "use_distribution(distribution, smooth = TRUE)",
    "pkg": "heemod",
    "desc": "Define a distribution for PSA parameters."
  },
  {
    "name": "%+replace%",
    "usage": "e1 %+replace% e2",
    "pkg": "ggplot2",
    "desc": "The current/active theme is automatically applied to every plot     you draw. Use ‘theme_get’ to get the current theme, and     ‘theme_set’ to completely override it. ‘theme_update’ and     ‘theme_replace’ are shorthands for changing individual elements."
  },
  {
    "name": "aes",
    "usage": "aes(x, y, ...)",
    "pkg": "ggplot2",
    "desc": "Aesthetic mappings describe how variables in the data are mapped     to visual properties (aesthetics) of geoms. Aesthetic mappings can     be set in ‘ggplot2’ and in individual layers."
  },
  {
    "name": "aes_",
    "usage": "aes_q(x, y, ...)",
    "pkg": "ggplot2",
    "desc": "Aesthetic mappings describe how variables in the data are mapped     to visual properties (aesthetics) of geoms. ‘aes’ uses     non-standard evaluation to capture the variable names. ‘aes_’ and     ‘aes_string’ require you to explicitly quote the inputs either     with ‘\"\"’ for ‘aes_string()’, or with ‘quote’ or ‘~’ for ‘aes_()’.     (‘aes_q’ is an alias to ‘aes_’). This makes ‘aes_’ and     ‘aes_string’ easy to program with."
  },
  {
    "name": "aes_all",
    "usage": "aes_all(vars)",
    "pkg": "ggplot2",
    "desc": "Given a character vector, create a set of identity mappings"
  },
  {
    "name": "aes_auto",
    "usage": "aes_auto(data = NULL, ...)",
    "pkg": "ggplot2",
    "desc": "Automatic aesthetic mapping"
  },
  {
    "name": "aes_q",
    "usage": "aes_q(x, y, ...)",
    "pkg": "ggplot2",
    "desc": "Aesthetic mappings describe how variables in the data are mapped     to visual properties (aesthetics) of geoms. ‘aes’ uses     non-standard evaluation to capture the variable names. ‘aes_’ and     ‘aes_string’ require you to explicitly quote the inputs either     with ‘\"\"’ for ‘aes_string()’, or with ‘quote’ or ‘~’ for ‘aes_()’.     (‘aes_q’ is an alias to ‘aes_’). This makes ‘aes_’ and     ‘aes_string’ easy to program with."
  },
  {
    "name": "aes_string",
    "usage": "aes_string(x, y, ...)",
    "pkg": "ggplot2",
    "desc": "Aesthetic mappings describe how variables in the data are mapped     to visual properties (aesthetics) of geoms. ‘aes’ uses     non-standard evaluation to capture the variable names. ‘aes_’ and     ‘aes_string’ require you to explicitly quote the inputs either     with ‘\"\"’ for ‘aes_string()’, or with ‘quote’ or ‘~’ for ‘aes_()’.     (‘aes_q’ is an alias to ‘aes_’). This makes ‘aes_’ and     ‘aes_string’ easy to program with."
  },
  {
    "name": "annotate",
    "usage": "annotate(geom, x = NULL, y = NULL, xmin = NULL, xmax = NULL,",
    "pkg": "ggplot2",
    "desc": "This function adds geoms to a plot, but unlike typical a geom     function, the properties of the geoms are not mapped from     variables of a data frame, but are instead passed in as vectors.     This is useful for adding small annotations (such as text labels)     or if you have your data in vectors, and for some reason don't     want to put them in a data frame."
  },
  {
    "name": "annotation_custom",
    "usage": "annotation_custom(grob, xmin = -Inf, xmax = Inf, ymin = -Inf,",
    "pkg": "ggplot2",
    "desc": "This is a special geom intended for use as static annotations that     are the same in every panel. These annotations will not affect     scales (i.e. the x and y axes will not grow to cover the range of     the grob, and the grob will not be modified by any ggplot settings     or mappings)."
  },
  {
    "name": "annotation_logticks",
    "usage": "annotation_logticks(base = 10, sides = \"bl\", scaled = TRUE,",
    "pkg": "ggplot2",
    "desc": "This annotation adds log tick marks with diminishing spacing.     These tick marks probably make sense only for base 10."
  },
  {
    "name": "annotation_map",
    "usage": "annotation_map(map, ...)",
    "pkg": "ggplot2",
    "desc": "Display a fixed map on a plot."
  },
  {
    "name": "annotation_raster",
    "usage": "annotation_raster(raster, xmin, xmax, ymin, ymax, interpolate = FALSE)",
    "pkg": "ggplot2",
    "desc": "This is a special version of ‘geom_raster’ optimised for static     annotations that are the same in every panel. These annotations     will not affect scales (i.e. the x and y axes will not grow to     cover the range of the raster, and the raster must already have     its own colours). This is useful for adding bitmap images."
  },
  {
    "name": "as_labeller",
    "usage": "as_labeller(x, default = label_value, multi_line = TRUE)",
    "pkg": "ggplot2",
    "desc": "This transforms objects to labeller functions. Used internally by     ‘labeller()’."
  },
  {
    "name": "autoplot",
    "usage": "autoplot(object, ...)",
    "pkg": "ggplot2",
    "desc": "‘autoplot’ uses ggplot2 to draw a particular plot for an object of     a particular class in a single command. This defines the S3     generic that other classes and packages can extend."
  },
  {
    "name": "benchplot",
    "usage": "benchplot(x)",
    "pkg": "ggplot2",
    "desc": "Benchmark plot creation time. Broken down into construct, build,     render and draw times."
  },
  {
    "name": "borders",
    "usage": "borders(database = \"world\", regions = \".\", fill = NA, colour = \"grey50\",",
    "pkg": "ggplot2",
    "desc": "This is a quick and dirty way to get map data (from the maps     package) on to your plot. This is a good place to start if you     need some crude reference lines, but you'll typically want     something more sophisticated for communication graphics."
  },
  {
    "name": "calc_element",
    "usage": "calc_element(element, theme, verbose = FALSE)",
    "pkg": "ggplot2",
    "desc": "Calculate the element properties, by inheriting properties from     its parents"
  },
  {
    "name": "combine_vars",
    "usage": "combine_vars(data, env = emptyenv(), vars = NULL, drop = TRUE)",
    "pkg": "ggplot2",
    "desc": "Take input data and define a mapping between facetting variables     and ROW, COL and PANEL keys"
  },
  {
    "name": "continuous_scale",
    "usage": "continuous_scale(aesthetics, scale_name, palette, name = waiver(),",
    "pkg": "ggplot2",
    "desc": "Continuous scale constructor."
  },
  {
    "name": "coord_cartesian",
    "usage": "coord_cartesian(xlim = NULL, ylim = NULL, expand = TRUE)",
    "pkg": "ggplot2",
    "desc": "The Cartesian coordinate system is the most familiar, and common,     type of coordinate system. Setting limits on the coordinate system     will zoom the plot (like you're looking at it with a magnifying     glass), and will not change the underlying data like setting     limits on a scale will."
  },
  {
    "name": "coord_fixed",
    "usage": "coord_fixed(ratio = 1, xlim = NULL, ylim = NULL, expand = TRUE)",
    "pkg": "ggplot2",
    "desc": "A fixed scale coordinate system forces a specified ratio between     the physical representation of data units on the axes. The ratio     represents the number of units on the y-axis equivalent to one     unit on the x-axis. The default, ‘ratio = 1’, ensures that one     unit on the x-axis is the same length as one unit on the y-axis.     Ratios higher than one make units on the y axis longer than units     on the x-axis, and vice versa. This is similar to ‘eqscplot’, but     it works for all types of graphics."
  },
  {
    "name": "coord_flip",
    "usage": "coord_flip(xlim = NULL, ylim = NULL, expand = TRUE)",
    "pkg": "ggplot2",
    "desc": "Flip cartesian coordinates so that horizontal becomes vertical,     and vertical, horizontal. This is primarily useful for converting     geoms and statistics which display y conditional on x, to x     conditional on y."
  },
  {
    "name": "coord_map",
    "usage": "coord_map(projection = \"mercator\", ..., parameters = NULL,",
    "pkg": "ggplot2",
    "desc": "‘coord_map’ projects a portion of the earth, which is     approximately spherical, onto a flat 2D plane using any projection     defined by the ‘mapproj’ package. Map projections do not, in     general, preserve straight lines, so this requires considerable     computation. ‘coord_quickmap’ is a quick approximation that does     preserve straight lines. It works best for smaller areas closer to     the equator."
  },
  {
    "name": "coord_munch",
    "usage": "coord_munch(coord, data, range, segment_length = 0.01)",
    "pkg": "ggplot2",
    "desc": "This function \"munches\" lines, dividing each line into many small     pieces so they can be transformed independently. Used inside geom     functions."
  },
  {
    "name": "coord_polar",
    "usage": "coord_polar(theta = \"x\", start = 0, direction = 1)",
    "pkg": "ggplot2",
    "desc": "The polar coordinate system is most commonly used for pie charts,     which are a stacked bar chart in polar coordinates."
  },
  {
    "name": "coord_quickmap",
    "usage": "coord_quickmap(xlim = NULL, ylim = NULL, expand = TRUE)",
    "pkg": "ggplot2",
    "desc": "‘coord_map’ projects a portion of the earth, which is     approximately spherical, onto a flat 2D plane using any projection     defined by the ‘mapproj’ package. Map projections do not, in     general, preserve straight lines, so this requires considerable     computation. ‘coord_quickmap’ is a quick approximation that does     preserve straight lines. It works best for smaller areas closer to     the equator."
  },
  {
    "name": "coord_trans",
    "usage": "coord_trans(x = \"identity\", y = \"identity\", limx = NULL, limy = NULL,",
    "pkg": "ggplot2",
    "desc": "‘coord_trans’ is different to scale transformations in that it     occurs after statistical transformation and will affect the visual     appearance of geoms - there is no guarantee that straight lines     will continue to be straight."
  },
  {
    "name": "cut_interval",
    "usage": "cut_interval(x, n = NULL, length = NULL, ...)",
    "pkg": "ggplot2",
    "desc": "‘cut_interval’ makes ‘n’ groups with equal range, ‘cut_number’     makes ‘n’ groups with (approximately) equal numbers of     observations; ‘cut_width’ makes groups of width ‘width’."
  },
  {
    "name": "cut_number",
    "usage": "cut_number(x, n = NULL, ...)",
    "pkg": "ggplot2",
    "desc": "‘cut_interval’ makes ‘n’ groups with equal range, ‘cut_number’     makes ‘n’ groups with (approximately) equal numbers of     observations; ‘cut_width’ makes groups of width ‘width’."
  },
  {
    "name": "cut_width",
    "usage": "cut_width(x, width, center = NULL, boundary = NULL, closed = c(\"right\",",
    "pkg": "ggplot2",
    "desc": "‘cut_interval’ makes ‘n’ groups with equal range, ‘cut_number’     makes ‘n’ groups with (approximately) equal numbers of     observations; ‘cut_width’ makes groups of width ‘width’."
  },
  {
    "name": "derive",
    "usage": "derive()",
    "pkg": "ggplot2",
    "desc": "This function is used in conjunction with a position scale to     create a secondary axis, positioned opposite of the primary axis.     All secondary axes must be based on a one-to-one transformation of     the primary axes."
  },
  {
    "name": "discrete_scale",
    "usage": "discrete_scale(aesthetics, scale_name, palette, name = waiver(),",
    "pkg": "ggplot2",
    "desc": "Discrete scale constructor."
  },
  {
    "name": "draw_key_abline",
    "usage": "draw_key_abline(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_blank",
    "usage": "draw_key_blank(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_boxplot",
    "usage": "draw_key_boxplot(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_crossbar",
    "usage": "draw_key_crossbar(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_dotplot",
    "usage": "draw_key_dotplot(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_label",
    "usage": "draw_key_label(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_path",
    "usage": "draw_key_path(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_point",
    "usage": "draw_key_pointrange(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_pointrange",
    "usage": "draw_key_pointrange(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_polygon",
    "usage": "draw_key_polygon(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_rect",
    "usage": "draw_key_rect(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_smooth",
    "usage": "draw_key_smooth(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_text",
    "usage": "draw_key_text(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_vline",
    "usage": "draw_key_vline(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "draw_key_vpath",
    "usage": "draw_key_vpath(data, params, size)",
    "pkg": "ggplot2",
    "desc": "Each Geom has an associated function that draws the key when the     geom needs to be displayed in a legend. These are the options     built into ggplot2."
  },
  {
    "name": "dup_axis",
    "usage": "dup_axis(trans = ~., name = derive(), breaks = derive(),",
    "pkg": "ggplot2",
    "desc": "This function is used in conjunction with a position scale to     create a secondary axis, positioned opposite of the primary axis.     All secondary axes must be based on a one-to-one transformation of     the primary axes."
  },
  {
    "name": "element_grob",
    "usage": "element_grob(element, ...)",
    "pkg": "ggplot2",
    "desc": "Generate grid grob from theme element"
  },
  {
    "name": "expand_limits",
    "usage": "expand_limits(...)",
    "pkg": "ggplot2",
    "desc": "Sometimes you may want to ensure limits include a single value,     for all panels or all plots.  This function is a thin wrapper     around ‘geom_blank’ that makes it easy to add such values."
  },
  {
    "name": "facet_grid",
    "usage": "facet_grid(facets, margins = FALSE, scales = \"fixed\", space = \"fixed\",",
    "pkg": "ggplot2",
    "desc": "‘facet_grid’ forms a matrix of panels defined by row and column     facetting variables. It is most useful when you have two discrete     variables, and all combinations of the variables exist in the     data."
  },
  {
    "name": "facet_null",
    "usage": "facet_null(shrink = TRUE)",
    "pkg": "ggplot2",
    "desc": "Facet specification: a single panel."
  },
  {
    "name": "facet_wrap",
    "usage": "facet_wrap(facets, nrow = NULL, ncol = NULL, scales = \"fixed\",",
    "pkg": "ggplot2",
    "desc": "‘facet_wrap’ wraps a 1d sequence of panels into 2d. This is     generally a better use of screen space than ‘facet_grid’ because     most displays are roughly rectangular."
  },
  {
    "name": "find_panel",
    "usage": "find_panel(table)",
    "pkg": "ggplot2",
    "desc": "These functions help detect the placement of panels in a gtable,     if they are named with \"panel\" in the beginning. ‘find_panel’     returns the extend of the panel area, while ‘panel_cols’ and     ‘panel_rows’ returns the columns and rows that contains panels     respectively."
  },
  {
    "name": "fortify",
    "usage": "fortify(model, data, ...)",
    "pkg": "ggplot2",
    "desc": "Rather than using this function, I now recommend using the ‘broom’     package, which implements a much wider range of methods. ‘fortify’     may be deprecated in the future."
  },
  {
    "name": "geom_abline",
    "usage": "geom_abline(mapping = NULL, data = NULL, ..., slope, intercept,",
    "pkg": "ggplot2",
    "desc": "These geoms add reference lines (sometimes called rules) to a     plot, either horizontal, vertical, or diagonal (specified by slope     and intercept). These are useful for annotating plots."
  },
  {
    "name": "geom_area",
    "usage": "geom_area(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "For each x value, ‘geom_ribbon’ displays a y interval defined by     ‘ymin’ and ‘ymax’. ‘geom_area’ is a special case of ‘geom_ribbon’,     where the ‘ymin’ is fixed to 0."
  },
  {
    "name": "geom_bar",
    "usage": "geom_bar(mapping = NULL, data = NULL, stat = \"count\",",
    "pkg": "ggplot2",
    "desc": "There are two types of bar charts: ‘geom_bar’ makes the height of     the bar proportional to the number of cases in each group (or if     the ‘weight’ aethetic is supplied, the sum of the weights). If you     want the heights of the bars to represent values in the data, use     geom_col instead. ‘geom_bar’ uses ‘stat_count’ by default: it     counts the number of cases at each x position. ‘geom_col’ uses     ‘stat_identity’: it leaves the data as is."
  },
  {
    "name": "geom_bin2d",
    "usage": "geom_bin2d(mapping = NULL, data = NULL, stat = \"bin2d\",",
    "pkg": "ggplot2",
    "desc": "Divides the plane into rectangles, counts the number of cases in     each rectangle, and then (by default) maps the number of cases to     the rectangle's fill. This is a useful alternative to ‘geom_point’     in the presence of overplotting."
  },
  {
    "name": "geom_blank",
    "usage": "geom_blank(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "The blank geom draws nothing, but can be a useful way of ensuring     common scales between different plots. See ‘expand_limits’ for     more details."
  },
  {
    "name": "geom_boxplot",
    "usage": "geom_boxplot(mapping = NULL, data = NULL, stat = \"boxplot\",",
    "pkg": "ggplot2",
    "desc": "The boxplot compactly displays the distribution of a continuous     variable. It visualises five summary statistics (the median, two     hinges and two whiskers), and all \"outlying\" points individually."
  },
  {
    "name": "geom_col",
    "usage": "geom_col(mapping = NULL, data = NULL, position = \"stack\", ...,",
    "pkg": "ggplot2",
    "desc": "There are two types of bar charts: ‘geom_bar’ makes the height of     the bar proportional to the number of cases in each group (or if     the ‘weight’ aethetic is supplied, the sum of the weights). If you     want the heights of the bars to represent values in the data, use     geom_col instead. ‘geom_bar’ uses ‘stat_count’ by default: it     counts the number of cases at each x position. ‘geom_col’ uses     ‘stat_identity’: it leaves the data as is."
  },
  {
    "name": "geom_contour",
    "usage": "geom_contour(mapping = NULL, data = NULL, stat = \"contour\",",
    "pkg": "ggplot2",
    "desc": "ggplot2 can not draw true 3d surfaces, but you can use     ‘geom_contour’ and ‘geom_tile’ to visualise 3d surfaces in 2d. To     be a valid surface, the data must contain only a single row for     each unique combination of the variables mapped to the ‘x’ and ‘y’     aesthetics. Contouring tends to work best when ‘x’ and ‘y’ form a     (roughly) evenly spaced grid. If you data is not evenly spaced,     you may want to interpolate to a grid before visualising."
  },
  {
    "name": "geom_count",
    "usage": "geom_count(mapping = NULL, data = NULL, stat = \"sum\",",
    "pkg": "ggplot2",
    "desc": "This is a variant ‘geom_point’ that counts the number of     observations at each location, then maps the count to point area.     It useful when you have discrete data and overplotting."
  },
  {
    "name": "geom_curve",
    "usage": "geom_curve(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "‘geom_segment’ draws a straight line between points (x, y) and     (xend, yend). ‘geom_curve’ draws a curved line. See the underlying     drawing function ‘curveGrob’ for the parameters that control the     curve."
  },
  {
    "name": "geom_density",
    "usage": "geom_density(mapping = NULL, data = NULL, stat = \"density\",",
    "pkg": "ggplot2",
    "desc": "Computes and draws kernel density estimate, which is a smoothed     version of the histogram. This is a useful alternative to the     histogram if for continuous data that comes from an underlying     smooth distribution."
  },
  {
    "name": "geom_density_2d",
    "usage": "geom_density_2d(mapping = NULL, data = NULL, stat = \"density2d\",",
    "pkg": "ggplot2",
    "desc": "Perform a 2D kernel density estimation using ‘kde2d’ and display     the results with contours. This can be useful for dealing with     overplotting. This is a 2d version of ‘geom_density’."
  },
  {
    "name": "geom_dotplot",
    "usage": "geom_dotplot(mapping = NULL, data = NULL, position = \"identity\", ...,",
    "pkg": "ggplot2",
    "desc": "In a dot plot, the width of a dot corresponds to the bin width (or     maximum width, depending on the binning algorithm), and dots are     stacked, with each dot representing one observation."
  },
  {
    "name": "geom_errorbarh",
    "usage": "geom_errorbarh(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "A rotated version of ‘geom_errorbar’."
  },
  {
    "name": "geom_hex",
    "usage": "geom_hex(mapping = NULL, data = NULL, stat = \"binhex\",",
    "pkg": "ggplot2",
    "desc": "Divides the plane into regular hexagons, counts the number of     cases in each hexagon, and then (by default) maps the number of     cases to the hexagon fill.  Hexagon bins avoid the visual     artefacts sometimes generated by the very regular alignment of     ‘geom_bin2d’."
  },
  {
    "name": "geom_hline",
    "usage": "geom_hline(mapping = NULL, data = NULL, ..., yintercept, na.rm = FALSE,",
    "pkg": "ggplot2",
    "desc": "These geoms add reference lines (sometimes called rules) to a     plot, either horizontal, vertical, or diagonal (specified by slope     and intercept). These are useful for annotating plots."
  },
  {
    "name": "geom_jitter",
    "usage": "geom_jitter(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "The jitter geom is a convenient shortcut for ‘geom_point(position     = \"jitter\")’. It adds a small amount of random variation to the     location of each point, and is a useful way of handling     overplotting caused by discreteness in smaller datasets."
  },
  {
    "name": "geom_line",
    "usage": "geom_line(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "‘geom_path()’ connects the observations in the order in which they     appear in the data. ‘geom_line()’ connects them in order of the     variable on the x axis. ‘geom_step()’ creates a stairstep plot,     highlighting exactly when changes occur. The ‘group’ aesthetic     determines which cases are connected together."
  },
  {
    "name": "geom_map",
    "usage": "geom_map(mapping = NULL, data = NULL, stat = \"identity\", ..., map,",
    "pkg": "ggplot2",
    "desc": "This is pure annotation, so does not affect position scales."
  },
  {
    "name": "geom_path",
    "usage": "geom_path(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "‘geom_path()’ connects the observations in the order in which they     appear in the data. ‘geom_line()’ connects them in order of the     variable on the x axis. ‘geom_step()’ creates a stairstep plot,     highlighting exactly when changes occur. The ‘group’ aesthetic     determines which cases are connected together."
  },
  {
    "name": "geom_point",
    "usage": "geom_point(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "The point geom is used to create scatterplots. The scatterplot is     most useful for displaying the relationship between two continuous     variables. It can be used to compare one continuous and one     categorical variable, or two categorical variables, but a     variation like ‘geom_jitter’, ‘geom_count’, or ‘geom_bin2d’ is     usually more appropriate."
  },
  {
    "name": "geom_polygon",
    "usage": "geom_polygon(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "Polygons are very similar to paths (as drawn by ‘geom_path’)     except that the start and end points are connected and the inside     is coloured by ‘fill’. The ‘group’ aesthetic determines which     cases are connected together into a polygon."
  },
  {
    "name": "geom_qq",
    "usage": "geom_qq(mapping = NULL, data = NULL, geom = \"point\",",
    "pkg": "ggplot2",
    "desc": "A quantile-quantile plot"
  },
  {
    "name": "geom_quantile",
    "usage": "geom_quantile(mapping = NULL, data = NULL, stat = \"quantile\",",
    "pkg": "ggplot2",
    "desc": "This fits a quantile regression to the data and draws the fitted     quantiles with lines. This is as a continuous analogue to     ‘geom_boxplot’."
  },
  {
    "name": "geom_ribbon",
    "usage": "geom_ribbon(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "For each x value, ‘geom_ribbon’ displays a y interval defined by     ‘ymin’ and ‘ymax’. ‘geom_area’ is a special case of ‘geom_ribbon’,     where the ‘ymin’ is fixed to 0."
  },
  {
    "name": "geom_rug",
    "usage": "geom_rug(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "A rug plot is a compact visualisation designed to supplement a 2d     display with the two 1d marginal distributions. Rug plots display     individual cases so are best used with smaller datasets."
  },
  {
    "name": "geom_segment",
    "usage": "geom_segment(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "‘geom_segment’ draws a straight line between points (x, y) and     (xend, yend). ‘geom_curve’ draws a curved line. See the underlying     drawing function ‘curveGrob’ for the parameters that control the     curve."
  },
  {
    "name": "geom_smooth",
    "usage": "geom_smooth(mapping = NULL, data = NULL, stat = \"smooth\",",
    "pkg": "ggplot2",
    "desc": "Aids the eye in seeing patterns in the presence of overplotting.     ‘geom_smooth’ and ‘stat_smooth’ are effectively aliases: they both     use the same arguments. Use ‘geom_smooth’ unless you want to     display the results with a non-standard geom."
  },
  {
    "name": "geom_spoke",
    "usage": "geom_spoke(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "This is a polar parameterisation of ‘geom_segment’. It is useful     when you have variables that describe direction and distance."
  },
  {
    "name": "geom_step",
    "usage": "geom_step(mapping = NULL, data = NULL, stat = \"identity\",",
    "pkg": "ggplot2",
    "desc": "‘geom_path()’ connects the observations in the order in which they     appear in the data. ‘geom_line()’ connects them in order of the     variable on the x axis. ‘geom_step()’ creates a stairstep plot,     highlighting exactly when changes occur. The ‘group’ aesthetic     determines which cases are connected together."
  },
  {
    "name": "geom_violin",
    "usage": "geom_violin(mapping = NULL, data = NULL, stat = \"ydensity\",",
    "pkg": "ggplot2",
    "desc": "A violin plot is a compact display of a continuous distribution.     It is a blend of ‘geom_boxplot’ and ‘geom_density’: a violin plot     is a mirrored density plot displayed in the same way as a boxplot."
  },
  {
    "name": "geom_vline",
    "usage": "geom_vline(mapping = NULL, data = NULL, ..., xintercept, na.rm = FALSE,",
    "pkg": "ggplot2",
    "desc": "These geoms add reference lines (sometimes called rules) to a     plot, either horizontal, vertical, or diagonal (specified by slope     and intercept). These are useful for annotating plots."
  },
  {
    "name": "gg_dep",
    "usage": "gg_dep(version, msg)",
    "pkg": "ggplot2",
    "desc": "Version numbers have the format <major>.<minor>.<subminor>, like     0.9.2. This function compares the current version number of     ggplot2 against the specified ‘version’, which is the most recent     version before the function (or other object) was deprecated."
  },
  {
    "name": "ggplot",
    "usage": "ggplot(data = NULL, mapping = aes(), ..., environment = parent.frame())",
    "pkg": "ggplot2",
    "desc": "‘ggplot()’ initializes a ggplot object. It can be used to declare     the input data frame for a graphic and to specify the set of plot     aesthetics intended to be common throughout all subsequent layers     unless specifically overridden."
  },
  {
    "name": "ggplot_build",
    "usage": "ggplot_build(plot)",
    "pkg": "ggplot2",
    "desc": "‘ggplot_build’ takes the plot object, and performs all steps     necessary to produce an object that can be rendered.  This     function outputs two pieces: a list of data frames (one for each     layer), and a panel object, which contain all information about     axis limits, breaks etc."
  },
  {
    "name": "ggplot_gtable",
    "usage": "ggplot_gtable(data)",
    "pkg": "ggplot2",
    "desc": "This function builds all grobs necessary for displaying the plot,     and stores them in a special data structure called a ‘gtable’.     This object is amenable to programmatic manipulation, should you     want to (e.g.) make the legend box 2 cm wide, or combine multiple     plots into a single display, preserving aspect ratios across the     plots."
  },
  {
    "name": "ggplotGrob",
    "usage": "ggplotGrob(x)",
    "pkg": "ggplot2",
    "desc": "Generate a ggplot2 plot grob."
  },
  {
    "name": "ggproto",
    "usage": "is.ggproto(x)",
    "pkg": "ggplot2",
    "desc": "Construct a new object with ‘ggproto’, test with ‘is.proto’, and     access parent methods/fields with ‘ggproto_parent’."
  },
  {
    "name": "ggproto_parent",
    "usage": "ggproto_parent(parent, self)",
    "pkg": "ggplot2",
    "desc": "Construct a new object with ‘ggproto’, test with ‘is.proto’, and     access parent methods/fields with ‘ggproto_parent’."
  },
  {
    "name": "ggsave",
    "usage": "ggsave(filename, plot = last_plot(), device = NULL, path = NULL,",
    "pkg": "ggplot2",
    "desc": "‘ggsave()’ is a convenient function for saving a plot. It defaults     to saving the last plot that you displayed, using the size of the     current graphics device. It also guesses the type of graphics     device from the extension."
  },
  {
    "name": "ggtitle",
    "usage": "ggtitle(label, subtitle = NULL)",
    "pkg": "ggplot2",
    "desc": "Good labels are critical for making your plots accessible to a     wider audience. Ensure the axis and legend labels display the full     variable name. Use the plot ‘title’ and ‘subtitle’ to explain the     main findings. It's common to use the ‘caption’ to provide     information about the data source."
  },
  {
    "name": "guide_colorbar",
    "usage": "guide_colorbar(title = waiver(), title.position = NULL,",
    "pkg": "ggplot2",
    "desc": "Colour bar guide shows continuous color scales mapped onto values.     Colour bar is available with ‘scale_fill’ and ‘scale_colour’. For     more information, see the inspiration for this function: Matlab's     colorbar function."
  },
  {
    "name": "guide_colourbar",
    "usage": "guide_colourbar(title = waiver(), title.position = NULL,",
    "pkg": "ggplot2",
    "desc": "Colour bar guide shows continuous color scales mapped onto values.     Colour bar is available with ‘scale_fill’ and ‘scale_colour’. For     more information, see the inspiration for this function: Matlab's     colorbar function."
  },
  {
    "name": "guide_legend",
    "usage": "guide_legend(title = waiver(), title.position = NULL, title.theme = NULL,",
    "pkg": "ggplot2",
    "desc": "Legend type guide shows key (i.e., geoms) mapped onto values.     Legend guides for various scales are integrated if possible."
  },
  {
    "name": "guides",
    "usage": "guides(...)",
    "pkg": "ggplot2",
    "desc": "Guides for each scale can be set scale-by-scale with the ‘guide’     argument, or en masse with ‘guides()’."
  },
  {
    "name": "is.facet",
    "usage": "is.facet(x)",
    "pkg": "ggplot2",
    "desc": "Is this object a facetting specification?"
  },
  {
    "name": "is.ggplot",
    "usage": "is.ggplot(x)",
    "pkg": "ggplot2",
    "desc": "Reports whether x is a ggplot object"
  },
  {
    "name": "is.ggproto",
    "usage": "is.ggproto(x)",
    "pkg": "ggplot2",
    "desc": "Construct a new object with ‘ggproto’, test with ‘is.proto’, and     access parent methods/fields with ‘ggproto_parent’."
  },
  {
    "name": "is.theme",
    "usage": "is.theme(x)",
    "pkg": "ggplot2",
    "desc": "Reports whether x is a theme object"
  },
  {
    "name": "label_both",
    "usage": "label_both(labels, multi_line = TRUE, sep = \": \")",
    "pkg": "ggplot2",
    "desc": "Labeller functions are in charge of formatting the strip labels of     facet grids and wraps. Most of them accept a ‘multi_line’ argument     to control whether multiple factors (defined in formulae such as     ‘~first + second’) should be displayed on a single line separated     with commas, or each on their own line."
  },
  {
    "name": "label_bquote",
    "usage": "label_bquote(rows = NULL, cols = NULL, default = label_value)",
    "pkg": "ggplot2",
    "desc": "‘label_bquote()’ offers a flexible way of labelling facet rows or     columns with plotmath expressions. Backquoted variables will be     replaced with their value in the facet."
  },
  {
    "name": "label_context",
    "usage": "label_context(labels, multi_line = TRUE, sep = \": \")",
    "pkg": "ggplot2",
    "desc": "Labeller functions are in charge of formatting the strip labels of     facet grids and wraps. Most of them accept a ‘multi_line’ argument     to control whether multiple factors (defined in formulae such as     ‘~first + second’) should be displayed on a single line separated     with commas, or each on their own line."
  },
  {
    "name": "label_parsed",
    "usage": "label_parsed(labels, multi_line = TRUE)",
    "pkg": "ggplot2",
    "desc": "Labeller functions are in charge of formatting the strip labels of     facet grids and wraps. Most of them accept a ‘multi_line’ argument     to control whether multiple factors (defined in formulae such as     ‘~first + second’) should be displayed on a single line separated     with commas, or each on their own line."
  },
  {
    "name": "label_value",
    "usage": "label_value(labels, multi_line = TRUE)",
    "pkg": "ggplot2",
    "desc": "Labeller functions are in charge of formatting the strip labels of     facet grids and wraps. Most of them accept a ‘multi_line’ argument     to control whether multiple factors (defined in formulae such as     ‘~first + second’) should be displayed on a single line separated     with commas, or each on their own line."
  },
  {
    "name": "label_wrap_gen",
    "usage": "label_wrap_gen(width = 25, multi_line = TRUE)",
    "pkg": "ggplot2",
    "desc": "Labeller functions are in charge of formatting the strip labels of     facet grids and wraps. Most of them accept a ‘multi_line’ argument     to control whether multiple factors (defined in formulae such as     ‘~first + second’) should be displayed on a single line separated     with commas, or each on their own line."
  },
  {
    "name": "labeller",
    "usage": "labeller(..., .rows = NULL, .cols = NULL, keep.as.numeric = NULL,",
    "pkg": "ggplot2",
    "desc": "This function makes it easy to assign different labellers to     different factors. The labeller can be a function or it can be a     named character vectors that will serve as a lookup table."
  },
  {
    "name": "labs",
    "usage": "labs(...)",
    "pkg": "ggplot2",
    "desc": "Good labels are critical for making your plots accessible to a     wider audience. Ensure the axis and legend labels display the full     variable name. Use the plot ‘title’ and ‘subtitle’ to explain the     main findings. It's common to use the ‘caption’ to provide     information about the data source."
  },
  {
    "name": "layer",
    "usage": "layer(geom = NULL, stat = NULL, data = NULL, mapping = NULL,",
    "pkg": "ggplot2",
    "desc": "A layer is a combination of data, stat and geom with a potential     position adjustment. Usually layers are created using ‘geom_*’ or     ‘stat_*’ calls but it can also be created directly using this     function."
  },
  {
    "name": "layer_data",
    "usage": "layer_data(plot, i = 1L)",
    "pkg": "ggplot2",
    "desc": "‘ggplot_build’ takes the plot object, and performs all steps     necessary to produce an object that can be rendered.  This     function outputs two pieces: a list of data frames (one for each     layer), and a panel object, which contain all information about     axis limits, breaks etc."
  },
  {
    "name": "layer_grob",
    "usage": "layer_grob(plot, i = 1L)",
    "pkg": "ggplot2",
    "desc": "‘ggplot_build’ takes the plot object, and performs all steps     necessary to produce an object that can be rendered.  This     function outputs two pieces: a list of data frames (one for each     layer), and a panel object, which contain all information about     axis limits, breaks etc."
  },
  {
    "name": "layer_scales",
    "usage": "layer_scales(plot, i = 1L, j = 1L)",
    "pkg": "ggplot2",
    "desc": "‘ggplot_build’ takes the plot object, and performs all steps     necessary to produce an object that can be rendered.  This     function outputs two pieces: a list of data frames (one for each     layer), and a panel object, which contain all information about     axis limits, breaks etc."
  },
  {
    "name": "lims",
    "usage": "lims(...)",
    "pkg": "ggplot2",
    "desc": "This is a shortcut for supplying the ‘limits’ argument to the     individual scales. Note that, by default, any values outside the     limits will be replaced with ‘NA’."
  },
  {
    "name": "map_data",
    "usage": "map_data(map, region = \".\", exact = FALSE, ...)",
    "pkg": "ggplot2",
    "desc": "Easily turn data from the ‘maps’ package in to a data frame     suitable for plotting with ggplot2."
  },
  {
    "name": "max_height",
    "usage": "max_height(grobs)",
    "pkg": "ggplot2",
    "desc": "Get the maximal width/length of a list of grobs"
  },
  {
    "name": "max_width",
    "usage": "max_width(grobs)",
    "pkg": "ggplot2",
    "desc": "Get the maximal width/length of a list of grobs"
  },
  {
    "name": "mean_cl_boot",
    "usage": "mean_cl_boot(x, ...)",
    "pkg": "ggplot2",
    "desc": "These are wrappers around functions from ‘Hmsic’ designed to make     them easier to use with ‘stat_summary’. See the Hmisc     documentation for more details:        • ‘smean.cl.boot’        • ‘smean.cl.normal’        • ‘smean.sdl’        • ‘smedian.hilow’"
  },
  {
    "name": "mean_cl_normal",
    "usage": "mean_cl_normal(x, ...)",
    "pkg": "ggplot2",
    "desc": "These are wrappers around functions from ‘Hmsic’ designed to make     them easier to use with ‘stat_summary’. See the Hmisc     documentation for more details:        • ‘smean.cl.boot’        • ‘smean.cl.normal’        • ‘smean.sdl’        • ‘smedian.hilow’"
  },
  {
    "name": "mean_sdl",
    "usage": "mean_sdl(x, ...)",
    "pkg": "ggplot2",
    "desc": "These are wrappers around functions from ‘Hmsic’ designed to make     them easier to use with ‘stat_summary’. See the Hmisc     documentation for more details:        • ‘smean.cl.boot’        • ‘smean.cl.normal’        • ‘smean.sdl’        • ‘smedian.hilow’"
  },
  {
    "name": "mean_se",
    "usage": "mean_se(x, mult = 1)",
    "pkg": "ggplot2",
    "desc": "For use with ‘stat_summary’"
  },
  {
    "name": "median_hilow",
    "usage": "median_hilow(x, ...)",
    "pkg": "ggplot2",
    "desc": "These are wrappers around functions from ‘Hmsic’ designed to make     them easier to use with ‘stat_summary’. See the Hmisc     documentation for more details:        • ‘smean.cl.boot’        • ‘smean.cl.normal’        • ‘smean.sdl’        • ‘smedian.hilow’"
  },
  {
    "name": "panel_cols",
    "usage": "panel_cols(table)",
    "pkg": "ggplot2",
    "desc": "These functions help detect the placement of panels in a gtable,     if they are named with \"panel\" in the beginning. ‘find_panel’     returns the extend of the panel area, while ‘panel_cols’ and     ‘panel_rows’ returns the columns and rows that contains panels     respectively."
  },
  {
    "name": "panel_rows",
    "usage": "panel_rows(table)",
    "pkg": "ggplot2",
    "desc": "These functions help detect the placement of panels in a gtable,     if they are named with \"panel\" in the beginning. ‘find_panel’     returns the extend of the panel area, while ‘panel_cols’ and     ‘panel_rows’ returns the columns and rows that contains panels     respectively."
  },
  {
    "name": "position_dodge",
    "usage": "position_dodge(width = NULL)",
    "pkg": "ggplot2",
    "desc": "Dodging preserves the vertical position of an geom while adjusting     the horizontal position."
  },
  {
    "name": "position_fill",
    "usage": "position_fill(vjust = 1, reverse = FALSE)",
    "pkg": "ggplot2",
    "desc": "‘position_stack()’ stacks bars on top of each other;     ‘position_fill()’ stacks bars and standardises each stack to have     constant height."
  },
  {
    "name": "position_jitter",
    "usage": "position_jitter(width = NULL, height = NULL)",
    "pkg": "ggplot2",
    "desc": "Couterintuitively adding random noise to a plot can sometimes make     it easier to read. Jittering is particularly useful for small     datasets with at least one discrete position."
  },
  {
    "name": "position_jitterdodge",
    "usage": "position_jitterdodge(jitter.width = NULL, jitter.height = 0,",
    "pkg": "ggplot2",
    "desc": "This is primarily used for aligning points generated through     ‘geom_point()’ with dodged boxplots (e.g., a ‘geom_boxplot()’ with     a fill aesthetic supplied)."
  },
  {
    "name": "position_nudge",
    "usage": "position_nudge(x = 0, y = 0)",
    "pkg": "ggplot2",
    "desc": "‘position_nudge’ is generally useful for adjusting the position of     items on discrete scales by a small amount. Nudging is built in to     ‘geom_text’ because it's so useful for moving labels a small     distance from what they're labelling."
  },
  {
    "name": "position_stack",
    "usage": "position_stack(vjust = 1, reverse = FALSE)",
    "pkg": "ggplot2",
    "desc": "‘position_stack()’ stacks bars on top of each other;     ‘position_fill()’ stacks bars and standardises each stack to have     constant height."
  },
  {
    "name": "qplot",
    "usage": "qplot(x, y = NULL, ..., data, facets = NULL, margins = FALSE,",
    "pkg": "ggplot2",
    "desc": "‘qplot’ is a shortcut designed to be familiar if you're used to     base ‘plot()’. It's a convenient wrapper for creating a number of     different types of plots using a consistent calling scheme. It's     great for allowing you to produce plots quickly, but I highly     recommend learning ‘ggplot()’ as it makes it easier to create     complex graphics."
  },
  {
    "name": "quickplot",
    "usage": "quickplot(x, y = NULL, ..., data, facets = NULL, margins = FALSE,",
    "pkg": "ggplot2",
    "desc": "‘qplot’ is a shortcut designed to be familiar if you're used to     base ‘plot()’. It's a convenient wrapper for creating a number of     different types of plots using a consistent calling scheme. It's     great for allowing you to produce plots quickly, but I highly     recommend learning ‘ggplot()’ as it makes it easier to create     complex graphics."
  },
  {
    "name": "remove_missing",
    "usage": "remove_missing(df, na.rm = FALSE, vars = names(df), name = \"\",",
    "pkg": "ggplot2",
    "desc": "Remove all non-complete rows, with a warning if ‘na.rm = FALSE’.     ggplot is somewhat more accommodating of missing values than R     generally. For those stats which require complete data, missing     values will be automatically removed with a warning. If ‘na.rm =     TRUE’ is supplied to the statistic, the warning will be     suppressed."
  },
  {
    "name": "render_axes",
    "usage": "render_axes(x = NULL, y = NULL, coord, theme, transpose = FALSE)",
    "pkg": "ggplot2",
    "desc": "These helpers facilitates generating theme compliant axes when     building up the plot."
  },
  {
    "name": "render_strips",
    "usage": "render_strips(x = NULL, y = NULL, labeller, theme)",
    "pkg": "ggplot2",
    "desc": "All positions are rendered and it is up to the facet to decide     which to use"
  },
  {
    "name": "resolution",
    "usage": "resolution(x, zero = TRUE)",
    "pkg": "ggplot2",
    "desc": "The resolution is the smallest non-zero distance between adjacent     values.  If there is only one unique value, then the resolution is     defined to be one. If x is an integer vector, then it is assumed     to represent a discrete variable, and the resolution is 1."
  },
  {
    "name": "scale_alpha",
    "usage": "scale_alpha_discrete(..., range = c(0.1, 1))",
    "pkg": "ggplot2",
    "desc": "Alpha-transparency scales are not tremendously useful, but can be     a convenient way to visually down-weight less important     observations. ‘scale_alpha’ is an alias for     ‘scale_alpha_continuous’ since that is the most common use of     alpha, and it saves a bit of typing."
  },
  {
    "name": "scale_alpha_continuous",
    "usage": "scale_alpha_continuous(..., range = c(0.1, 1))",
    "pkg": "ggplot2",
    "desc": "Alpha-transparency scales are not tremendously useful, but can be     a convenient way to visually down-weight less important     observations. ‘scale_alpha’ is an alias for     ‘scale_alpha_continuous’ since that is the most common use of     alpha, and it saves a bit of typing."
  },
  {
    "name": "scale_alpha_discrete",
    "usage": "scale_alpha_discrete(..., range = c(0.1, 1))",
    "pkg": "ggplot2",
    "desc": "Alpha-transparency scales are not tremendously useful, but can be     a convenient way to visually down-weight less important     observations. ‘scale_alpha’ is an alias for     ‘scale_alpha_continuous’ since that is the most common use of     alpha, and it saves a bit of typing."
  },
  {
    "name": "scale_alpha_identity",
    "usage": "scale_alpha_identity(..., guide = \"none\")",
    "pkg": "ggplot2",
    "desc": "Use this set of scales when your data has already been scaled,     i.e. it already represents aesthetic values that ggplot2 can     handle directly This will not produce a legend unless you also     supply the ‘breaks’ and ‘labels’."
  },
  {
    "name": "scale_alpha_manual",
    "usage": "scale_alpha_manual(..., values)",
    "pkg": "ggplot2",
    "desc": "This allows you to specify you own set of mappings from levels in     the data to aesthetic values."
  },
  {
    "name": "scale_colour_identity",
    "usage": "scale_colour_identity(..., guide = \"none\")",
    "pkg": "ggplot2",
    "desc": "Use this set of scales when your data has already been scaled,     i.e. it already represents aesthetic values that ggplot2 can     handle directly This will not produce a legend unless you also     supply the ‘breaks’ and ‘labels’."
  },
  {
    "name": "scale_colour_manual",
    "usage": "scale_colour_manual(..., values)",
    "pkg": "ggplot2",
    "desc": "This allows you to specify you own set of mappings from levels in     the data to aesthetic values."
  },
  {
    "name": "scale_fill_identity",
    "usage": "scale_fill_identity(..., guide = \"none\")",
    "pkg": "ggplot2",
    "desc": "Use this set of scales when your data has already been scaled,     i.e. it already represents aesthetic values that ggplot2 can     handle directly This will not produce a legend unless you also     supply the ‘breaks’ and ‘labels’."
  },
  {
    "name": "scale_fill_manual",
    "usage": "scale_fill_manual(..., values)",
    "pkg": "ggplot2",
    "desc": "This allows you to specify you own set of mappings from levels in     the data to aesthetic values."
  },
  {
    "name": "scale_linetype",
    "usage": "scale_linetype_discrete(..., na.value = \"blank\")",
    "pkg": "ggplot2",
    "desc": "Default line types based on a set supplied by Richard Pearson,     University of Manchester. Continuous values can not be mapped to     line types."
  },
  {
    "name": "scale_linetype_continuous",
    "usage": "scale_linetype_continuous(...)",
    "pkg": "ggplot2",
    "desc": "Default line types based on a set supplied by Richard Pearson,     University of Manchester. Continuous values can not be mapped to     line types."
  },
  {
    "name": "scale_linetype_discrete",
    "usage": "scale_linetype_discrete(..., na.value = \"blank\")",
    "pkg": "ggplot2",
    "desc": "Default line types based on a set supplied by Richard Pearson,     University of Manchester. Continuous values can not be mapped to     line types."
  },
  {
    "name": "scale_linetype_identity",
    "usage": "scale_linetype_identity(..., guide = \"none\")",
    "pkg": "ggplot2",
    "desc": "Use this set of scales when your data has already been scaled,     i.e. it already represents aesthetic values that ggplot2 can     handle directly This will not produce a legend unless you also     supply the ‘breaks’ and ‘labels’."
  },
  {
    "name": "scale_linetype_manual",
    "usage": "scale_linetype_manual(..., values)",
    "pkg": "ggplot2",
    "desc": "This allows you to specify you own set of mappings from levels in     the data to aesthetic values."
  },
  {
    "name": "scale_radius",
    "usage": "scale_radius(name = waiver(), breaks = waiver(), labels = waiver(),",
    "pkg": "ggplot2",
    "desc": "‘scale_size’ scales area, ‘scale_radius’ scales radius. The size     aesthetic is most commonly used for points and text, and humans     perceive the area of points (not their radius), so this provides     for optimal perception. ‘scale_size_area’ ensures that a value of     0 is mapped to a size of 0."
  },
  {
    "name": "scale_shape",
    "usage": "scale_shape(..., solid = TRUE)",
    "pkg": "ggplot2",
    "desc": "‘scale_shape’ maps discrete variables to six easily discernible     shapes. If you have more than six levels, you will get a warning     message, and the seventh and subsequence levels will not appear on     the plot. Use ‘scale_shape_manual’ to supply your own values. You     can not map a continuous variable to shape."
  },
  {
    "name": "scale_shape_identity",
    "usage": "scale_shape_identity(..., guide = \"none\")",
    "pkg": "ggplot2",
    "desc": "Use this set of scales when your data has already been scaled,     i.e. it already represents aesthetic values that ggplot2 can     handle directly This will not produce a legend unless you also     supply the ‘breaks’ and ‘labels’."
  },
  {
    "name": "scale_shape_manual",
    "usage": "scale_shape_manual(..., values)",
    "pkg": "ggplot2",
    "desc": "This allows you to specify you own set of mappings from levels in     the data to aesthetic values."
  },
  {
    "name": "scale_size",
    "usage": "scale_size_area(..., max_size = 6)",
    "pkg": "ggplot2",
    "desc": "‘scale_size’ scales area, ‘scale_radius’ scales radius. The size     aesthetic is most commonly used for points and text, and humans     perceive the area of points (not their radius), so this provides     for optimal perception. ‘scale_size_area’ ensures that a value of     0 is mapped to a size of 0."
  },
  {
    "name": "scale_size_area",
    "usage": "scale_size_area(..., max_size = 6)",
    "pkg": "ggplot2",
    "desc": "‘scale_size’ scales area, ‘scale_radius’ scales radius. The size     aesthetic is most commonly used for points and text, and humans     perceive the area of points (not their radius), so this provides     for optimal perception. ‘scale_size_area’ ensures that a value of     0 is mapped to a size of 0."
  },
  {
    "name": "scale_size_identity",
    "usage": "scale_size_identity(..., guide = \"none\")",
    "pkg": "ggplot2",
    "desc": "Use this set of scales when your data has already been scaled,     i.e. it already represents aesthetic values that ggplot2 can     handle directly This will not produce a legend unless you also     supply the ‘breaks’ and ‘labels’."
  },
  {
    "name": "scale_size_manual",
    "usage": "scale_size_manual(..., values)",
    "pkg": "ggplot2",
    "desc": "This allows you to specify you own set of mappings from levels in     the data to aesthetic values."
  },
  {
    "name": "scale_x_continuous",
    "usage": "scale_x_continuous(name = waiver(), breaks = waiver(),",
    "pkg": "ggplot2",
    "desc": "‘scale_x_continuous’ and ‘scale_y_continuous’ are the default     scales for continuous x and y aesthetics. There are three variants     that set the ‘trans’ argument for commonly used transformations:     ‘scale_*_log10’, ‘scale_*_sqrt’ and ‘scale_*_reverse’."
  },
  {
    "name": "scale_x_date",
    "usage": "scale_x_datetime(name = waiver(), breaks = waiver(),",
    "pkg": "ggplot2",
    "desc": "These are the default scales for the three date/time class. These     will usually be added automatically. To override manually, use     ‘scale_*_date’ for dates (class ‘Date’), ‘scale_*_datetime’ for     datetimes (class ‘POSIXct’), and ‘scale_*_time’ for times (class     ‘hms’)."
  },
  {
    "name": "scale_x_datetime",
    "usage": "scale_x_datetime(name = waiver(), breaks = waiver(),",
    "pkg": "ggplot2",
    "desc": "These are the default scales for the three date/time class. These     will usually be added automatically. To override manually, use     ‘scale_*_date’ for dates (class ‘Date’), ‘scale_*_datetime’ for     datetimes (class ‘POSIXct’), and ‘scale_*_time’ for times (class     ‘hms’)."
  },
  {
    "name": "scale_x_log10",
    "usage": "scale_x_log10(...)",
    "pkg": "ggplot2",
    "desc": "‘scale_x_continuous’ and ‘scale_y_continuous’ are the default     scales for continuous x and y aesthetics. There are three variants     that set the ‘trans’ argument for commonly used transformations:     ‘scale_*_log10’, ‘scale_*_sqrt’ and ‘scale_*_reverse’."
  },
  {
    "name": "scale_x_reverse",
    "usage": "scale_x_reverse(...)",
    "pkg": "ggplot2",
    "desc": "‘scale_x_continuous’ and ‘scale_y_continuous’ are the default     scales for continuous x and y aesthetics. There are three variants     that set the ‘trans’ argument for commonly used transformations:     ‘scale_*_log10’, ‘scale_*_sqrt’ and ‘scale_*_reverse’."
  },
  {
    "name": "scale_x_sqrt",
    "usage": "scale_x_sqrt(...)",
    "pkg": "ggplot2",
    "desc": "‘scale_x_continuous’ and ‘scale_y_continuous’ are the default     scales for continuous x and y aesthetics. There are three variants     that set the ‘trans’ argument for commonly used transformations:     ‘scale_*_log10’, ‘scale_*_sqrt’ and ‘scale_*_reverse’."
  },
  {
    "name": "scale_x_time",
    "usage": "scale_x_time(name = waiver(), breaks = waiver(), minor_breaks = waiver(),",
    "pkg": "ggplot2",
    "desc": "These are the default scales for the three date/time class. These     will usually be added automatically. To override manually, use     ‘scale_*_date’ for dates (class ‘Date’), ‘scale_*_datetime’ for     datetimes (class ‘POSIXct’), and ‘scale_*_time’ for times (class     ‘hms’)."
  },
  {
    "name": "scale_y_continuous",
    "usage": "scale_y_continuous(name = waiver(), breaks = waiver(),",
    "pkg": "ggplot2",
    "desc": "‘scale_x_continuous’ and ‘scale_y_continuous’ are the default     scales for continuous x and y aesthetics. There are three variants     that set the ‘trans’ argument for commonly used transformations:     ‘scale_*_log10’, ‘scale_*_sqrt’ and ‘scale_*_reverse’."
  },
  {
    "name": "scale_y_date",
    "usage": "scale_y_datetime(name = waiver(), breaks = waiver(),",
    "pkg": "ggplot2",
    "desc": "These are the default scales for the three date/time class. These     will usually be added automatically. To override manually, use     ‘scale_*_date’ for dates (class ‘Date’), ‘scale_*_datetime’ for     datetimes (class ‘POSIXct’), and ‘scale_*_time’ for times (class     ‘hms’)."
  },
  {
    "name": "scale_y_datetime",
    "usage": "scale_y_datetime(name = waiver(), breaks = waiver(),",
    "pkg": "ggplot2",
    "desc": "These are the default scales for the three date/time class. These     will usually be added automatically. To override manually, use     ‘scale_*_date’ for dates (class ‘Date’), ‘scale_*_datetime’ for     datetimes (class ‘POSIXct’), and ‘scale_*_time’ for times (class     ‘hms’)."
  },
  {
    "name": "scale_y_log10",
    "usage": "scale_y_log10(...)",
    "pkg": "ggplot2",
    "desc": "‘scale_x_continuous’ and ‘scale_y_continuous’ are the default     scales for continuous x and y aesthetics. There are three variants     that set the ‘trans’ argument for commonly used transformations:     ‘scale_*_log10’, ‘scale_*_sqrt’ and ‘scale_*_reverse’."
  },
  {
    "name": "scale_y_reverse",
    "usage": "scale_y_reverse(...)",
    "pkg": "ggplot2",
    "desc": "‘scale_x_continuous’ and ‘scale_y_continuous’ are the default     scales for continuous x and y aesthetics. There are three variants     that set the ‘trans’ argument for commonly used transformations:     ‘scale_*_log10’, ‘scale_*_sqrt’ and ‘scale_*_reverse’."
  },
  {
    "name": "scale_y_sqrt",
    "usage": "scale_y_sqrt(...)",
    "pkg": "ggplot2",
    "desc": "‘scale_x_continuous’ and ‘scale_y_continuous’ are the default     scales for continuous x and y aesthetics. There are three variants     that set the ‘trans’ argument for commonly used transformations:     ‘scale_*_log10’, ‘scale_*_sqrt’ and ‘scale_*_reverse’."
  },
  {
    "name": "scale_y_time",
    "usage": "scale_y_time(name = waiver(), breaks = waiver(), minor_breaks = waiver(),",
    "pkg": "ggplot2",
    "desc": "These are the default scales for the three date/time class. These     will usually be added automatically. To override manually, use     ‘scale_*_date’ for dates (class ‘Date’), ‘scale_*_datetime’ for     datetimes (class ‘POSIXct’), and ‘scale_*_time’ for times (class     ‘hms’)."
  },
  {
    "name": "sec_axis",
    "usage": "sec_axis(trans = NULL, name = waiver(), breaks = waiver(),",
    "pkg": "ggplot2",
    "desc": "This function is used in conjunction with a position scale to     create a secondary axis, positioned opposite of the primary axis.     All secondary axes must be based on a one-to-one transformation of     the primary axes."
  },
  {
    "name": "should_stop",
    "usage": "should_stop(expr)",
    "pkg": "ggplot2",
    "desc": "Used in examples to illustrate when errors should occur."
  },
  {
    "name": "stat_bin_2d",
    "usage": "stat_bin_2d(mapping = NULL, data = NULL, geom = \"tile\",",
    "pkg": "ggplot2",
    "desc": "Divides the plane into rectangles, counts the number of cases in     each rectangle, and then (by default) maps the number of cases to     the rectangle's fill. This is a useful alternative to ‘geom_point’     in the presence of overplotting."
  },
  {
    "name": "stat_bin_hex",
    "usage": "stat_bin_hex(mapping = NULL, data = NULL, geom = \"hex\",",
    "pkg": "ggplot2",
    "desc": "Divides the plane into regular hexagons, counts the number of     cases in each hexagon, and then (by default) maps the number of     cases to the hexagon fill.  Hexagon bins avoid the visual     artefacts sometimes generated by the very regular alignment of     ‘geom_bin2d’."
  },
  {
    "name": "stat_boxplot",
    "usage": "stat_boxplot(mapping = NULL, data = NULL, geom = \"boxplot\",",
    "pkg": "ggplot2",
    "desc": "The boxplot compactly displays the distribution of a continuous     variable. It visualises five summary statistics (the median, two     hinges and two whiskers), and all \"outlying\" points individually."
  },
  {
    "name": "stat_contour",
    "usage": "stat_contour(mapping = NULL, data = NULL, geom = \"contour\",",
    "pkg": "ggplot2",
    "desc": "ggplot2 can not draw true 3d surfaces, but you can use     ‘geom_contour’ and ‘geom_tile’ to visualise 3d surfaces in 2d. To     be a valid surface, the data must contain only a single row for     each unique combination of the variables mapped to the ‘x’ and ‘y’     aesthetics. Contouring tends to work best when ‘x’ and ‘y’ form a     (roughly) evenly spaced grid. If you data is not evenly spaced,     you may want to interpolate to a grid before visualising."
  },
  {
    "name": "stat_count",
    "usage": "stat_count(mapping = NULL, data = NULL, geom = \"bar\",",
    "pkg": "ggplot2",
    "desc": "There are two types of bar charts: ‘geom_bar’ makes the height of     the bar proportional to the number of cases in each group (or if     the ‘weight’ aethetic is supplied, the sum of the weights). If you     want the heights of the bars to represent values in the data, use     geom_col instead. ‘geom_bar’ uses ‘stat_count’ by default: it     counts the number of cases at each x position. ‘geom_col’ uses     ‘stat_identity’: it leaves the data as is."
  },
  {
    "name": "stat_density",
    "usage": "stat_density(mapping = NULL, data = NULL, geom = \"area\",",
    "pkg": "ggplot2",
    "desc": "Computes and draws kernel density estimate, which is a smoothed     version of the histogram. This is a useful alternative to the     histogram if for continuous data that comes from an underlying     smooth distribution."
  },
  {
    "name": "stat_density_2d",
    "usage": "stat_density_2d(mapping = NULL, data = NULL, geom = \"density_2d\",",
    "pkg": "ggplot2",
    "desc": "Perform a 2D kernel density estimation using ‘kde2d’ and display     the results with contours. This can be useful for dealing with     overplotting. This is a 2d version of ‘geom_density’."
  },
  {
    "name": "stat_ecdf",
    "usage": "stat_ecdf(mapping = NULL, data = NULL, geom = \"step\",",
    "pkg": "ggplot2",
    "desc": "The empirical cumulative distribution function (ECDF) provides an     alternative visualisation of distribution. Compared to other     visualisations that rely on density (like ‘geom_histogram’), the     ECDF doesn't require any tuning parameters and handles both     continuous and categorical variables. The downside is that it     requires more training to accurately interpret, and the underlying     visual tasks are somewhat more challenging."
  },
  {
    "name": "stat_ellipse",
    "usage": "stat_ellipse(mapping = NULL, data = NULL, geom = \"path\",",
    "pkg": "ggplot2",
    "desc": "The method for calculating the ellipses has been modified from     ‘car::ellipse’ (Fox and Weisberg, 2011)"
  },
  {
    "name": "stat_function",
    "usage": "stat_function(mapping = NULL, data = NULL, geom = \"path\",",
    "pkg": "ggplot2",
    "desc": "This stat makes it easy to superimpose a function on top of an     existing plot. The function is called with a grid of evenly spaced     values along the x axis, and the results are drawn (by default)     with a line."
  },
  {
    "name": "stat_identity",
    "usage": "stat_identity(mapping = NULL, data = NULL, geom = \"point\",",
    "pkg": "ggplot2",
    "desc": "The identity statistic leaves the data unchanged."
  },
  {
    "name": "stat_qq",
    "usage": "stat_qq(mapping = NULL, data = NULL, geom = \"point\",",
    "pkg": "ggplot2",
    "desc": "A quantile-quantile plot"
  },
  {
    "name": "stat_quantile",
    "usage": "stat_quantile(mapping = NULL, data = NULL, geom = \"quantile\",",
    "pkg": "ggplot2",
    "desc": "This fits a quantile regression to the data and draws the fitted     quantiles with lines. This is as a continuous analogue to     ‘geom_boxplot’."
  },
  {
    "name": "stat_smooth",
    "usage": "stat_smooth(mapping = NULL, data = NULL, geom = \"smooth\",",
    "pkg": "ggplot2",
    "desc": "Aids the eye in seeing patterns in the presence of overplotting.     ‘geom_smooth’ and ‘stat_smooth’ are effectively aliases: they both     use the same arguments. Use ‘geom_smooth’ unless you want to     display the results with a non-standard geom."
  },
  {
    "name": "stat_sum",
    "usage": "stat_sum(mapping = NULL, data = NULL, geom = \"point\",",
    "pkg": "ggplot2",
    "desc": "This is a variant ‘geom_point’ that counts the number of     observations at each location, then maps the count to point area.     It useful when you have discrete data and overplotting."
  },
  {
    "name": "stat_summary_2d",
    "usage": "stat_summary_2d(mapping = NULL, data = NULL, geom = \"tile\",",
    "pkg": "ggplot2",
    "desc": "‘stat_summary_2d’ is a 2d variation of ‘stat_summary’.     ‘stat_summary_hex’ is a hexagonal variation of ‘stat_summary_2d’.     The data are divided into bins defined by ‘x’ and ‘y’, and then     the values of ‘z’ in each cell is are summarised with ‘fun’."
  },
  {
    "name": "stat_summary_hex",
    "usage": "stat_summary_hex(mapping = NULL, data = NULL, geom = \"hex\",",
    "pkg": "ggplot2",
    "desc": "‘stat_summary_2d’ is a 2d variation of ‘stat_summary’.     ‘stat_summary_hex’ is a hexagonal variation of ‘stat_summary_2d’.     The data are divided into bins defined by ‘x’ and ‘y’, and then     the values of ‘z’ in each cell is are summarised with ‘fun’."
  },
  {
    "name": "stat_unique",
    "usage": "stat_unique(mapping = NULL, data = NULL, geom = \"point\",",
    "pkg": "ggplot2",
    "desc": "Remove duplicates"
  },
  {
    "name": "stat_ydensity",
    "usage": "stat_ydensity(mapping = NULL, data = NULL, geom = \"violin\",",
    "pkg": "ggplot2",
    "desc": "A violin plot is a compact display of a continuous distribution.     It is a blend of ‘geom_boxplot’ and ‘geom_density’: a violin plot     is a mirrored density plot displayed in the same way as a boxplot."
  },
  {
    "name": "theme",
    "usage": "theme(line, rect, text, title, aspect.ratio, axis.title, axis.title.x,",
    "pkg": "ggplot2",
    "desc": "Use ‘theme()’ to modify individual components of a theme, allowing     you to control the appearance of all non-data components of the     plot. ‘theme()’ only affects a single plot: see ‘theme_update’ if     you want modify the active theme, to affect all subsequent plots."
  },
  {
    "name": "theme_bw",
    "usage": "theme_bw(base_size = 11, base_family = \"\")",
    "pkg": "ggplot2",
    "desc": "These are complete themes which control all non-data display. Use     ‘theme’ if you just need to tweak the display of an existing     theme."
  },
  {
    "name": "theme_classic",
    "usage": "theme_classic(base_size = 11, base_family = \"\")",
    "pkg": "ggplot2",
    "desc": "These are complete themes which control all non-data display. Use     ‘theme’ if you just need to tweak the display of an existing     theme."
  },
  {
    "name": "theme_dark",
    "usage": "theme_dark(base_size = 11, base_family = \"\")",
    "pkg": "ggplot2",
    "desc": "These are complete themes which control all non-data display. Use     ‘theme’ if you just need to tweak the display of an existing     theme."
  },
  {
    "name": "theme_get",
    "usage": "theme_get()",
    "pkg": "ggplot2",
    "desc": "The current/active theme is automatically applied to every plot     you draw. Use ‘theme_get’ to get the current theme, and     ‘theme_set’ to completely override it. ‘theme_update’ and     ‘theme_replace’ are shorthands for changing individual elements."
  },
  {
    "name": "theme_gray",
    "usage": "theme_gray(base_size = 11, base_family = \"\")",
    "pkg": "ggplot2",
    "desc": "These are complete themes which control all non-data display. Use     ‘theme’ if you just need to tweak the display of an existing     theme."
  },
  {
    "name": "theme_grey",
    "usage": "theme_grey(base_size = 11, base_family = \"\")",
    "pkg": "ggplot2",
    "desc": "These are complete themes which control all non-data display. Use     ‘theme’ if you just need to tweak the display of an existing     theme."
  },
  {
    "name": "theme_light",
    "usage": "theme_light(base_size = 11, base_family = \"\")",
    "pkg": "ggplot2",
    "desc": "These are complete themes which control all non-data display. Use     ‘theme’ if you just need to tweak the display of an existing     theme."
  },
  {
    "name": "theme_linedraw",
    "usage": "theme_linedraw(base_size = 11, base_family = \"\")",
    "pkg": "ggplot2",
    "desc": "These are complete themes which control all non-data display. Use     ‘theme’ if you just need to tweak the display of an existing     theme."
  },
  {
    "name": "theme_minimal",
    "usage": "theme_minimal(base_size = 11, base_family = \"\")",
    "pkg": "ggplot2",
    "desc": "These are complete themes which control all non-data display. Use     ‘theme’ if you just need to tweak the display of an existing     theme."
  },
  {
    "name": "theme_replace",
    "usage": "theme_replace(...)",
    "pkg": "ggplot2",
    "desc": "The current/active theme is automatically applied to every plot     you draw. Use ‘theme_get’ to get the current theme, and     ‘theme_set’ to completely override it. ‘theme_update’ and     ‘theme_replace’ are shorthands for changing individual elements."
  },
  {
    "name": "theme_set",
    "usage": "theme_set(new)",
    "pkg": "ggplot2",
    "desc": "The current/active theme is automatically applied to every plot     you draw. Use ‘theme_get’ to get the current theme, and     ‘theme_set’ to completely override it. ‘theme_update’ and     ‘theme_replace’ are shorthands for changing individual elements."
  },
  {
    "name": "theme_update",
    "usage": "theme_update(...)",
    "pkg": "ggplot2",
    "desc": "The current/active theme is automatically applied to every plot     you draw. Use ‘theme_get’ to get the current theme, and     ‘theme_set’ to completely override it. ‘theme_update’ and     ‘theme_replace’ are shorthands for changing individual elements."
  },
  {
    "name": "theme_void",
    "usage": "theme_void(base_size = 11, base_family = \"\")",
    "pkg": "ggplot2",
    "desc": "These are complete themes which control all non-data display. Use     ‘theme’ if you just need to tweak the display of an existing     theme."
  },
  {
    "name": "transform_position",
    "usage": "transform_position(df, trans_x = NULL, trans_y = NULL, ...)",
    "pkg": "ggplot2",
    "desc": "Convenience function to transform all position variables."
  },
  {
    "name": "update_labels",
    "usage": "update_labels(p, labels)",
    "pkg": "ggplot2",
    "desc": "Update axis/legend labels"
  },
  {
    "name": "wrap_dims",
    "usage": "wrap_dims(n, nrow = NULL, ncol = NULL)",
    "pkg": "ggplot2",
    "desc": "Arrange 1d structure into a grid"
  },
  {
    "name": "xlab",
    "usage": "xlab(label)",
    "pkg": "ggplot2",
    "desc": "Good labels are critical for making your plots accessible to a     wider audience. Ensure the axis and legend labels display the full     variable name. Use the plot ‘title’ and ‘subtitle’ to explain the     main findings. It's common to use the ‘caption’ to provide     information about the data source."
  },
  {
    "name": "xlim",
    "usage": "xlim(...)",
    "pkg": "ggplot2",
    "desc": "This is a shortcut for supplying the ‘limits’ argument to the     individual scales. Note that, by default, any values outside the     limits will be replaced with ‘NA’."
  },
  {
    "name": "ylab",
    "usage": "ylab(label)",
    "pkg": "ggplot2",
    "desc": "Good labels are critical for making your plots accessible to a     wider audience. Ensure the axis and legend labels display the full     variable name. Use the plot ‘title’ and ‘subtitle’ to explain the     main findings. It's common to use the ‘caption’ to provide     information about the data source."
  },
  {
    "name": "ylim",
    "usage": "ylim(...)",
    "pkg": "ggplot2",
    "desc": "This is a shortcut for supplying the ‘limits’ argument to the     individual scales. Note that, by default, any values outside the     limits will be replaced with ‘NA’."
  }
];
