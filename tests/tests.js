var $ = quark.$,
	$$ = quark.$$;

QUnit.test('Load images', function(assert) {
	var done = assert.async();
	assert.expect(3);
	var i = 0;
	$$('.test').load(function() {
		assert.ok(true);
		if(++i == 3) {
			done();
		}
	});
});

QUnit.start();