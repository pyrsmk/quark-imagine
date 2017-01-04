quark.$._nodeMethods.load = function(success, fail) {
	if(this.node.nodeName == 'IMG') {
		imagine(this.node).then(success, fail);
	}
	return this;
};