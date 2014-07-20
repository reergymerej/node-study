// console.log(module.loaded);
console.log(module.children);
exports.loaded = true;
exports.createdTime = Date.now();
// console.log(module.id);
// console.log(module.parent);
// console.log(require.main === module);