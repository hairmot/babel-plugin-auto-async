module.exports = function (babel) {
  var t = babel.types
 
  var asyncFunctionVisitor = {
    //all functions within functions mark async
    FunctionExpression: function (path) {
       path.node.async = true;
      },
      FunctionDeclaration: function(path) {
          path.node.async = true;
      }
  }

  return {
    visitor: {
      Function: function (path) {            
          path.traverse(asyncFunctionVisitor)
      },
      //also make functions which are properties of objects async
      ObjectExpression: function(path) {
        path.traverse(asyncFunctionVisitor)
      }
    }
  }
}