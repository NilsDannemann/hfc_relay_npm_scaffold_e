import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hfc-teaser/hfc-teaser-triple', 'Integration | Component | hfc teaser/hfc teaser triple', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hfc-teaser/hfc-teaser-triple}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hfc-teaser/hfc-teaser-triple}}
      template block text
    {{/hfc-teaser/hfc-teaser-triple}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
