/*! quark-imagine 0.1.3 (https://github.com/pyrsmk/quark-imagine) */

quark.$._nodeMethods.load = function(success, fail) {
	if(this.node.nodeName == 'IMG') {
		imagine(this.node).then(success, fail);
	}
	return this;
};