import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-jumbotron', 'Integration | Component | ui jumbotron', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ui-jumbotron}}`);

  assert.equal(this.$('.jumbotron').length, 1, 'inline component works');

  // Template block usage:"
  this.render(hbs`
    {{#ui-jumbotron as |j|}}
      {{j.title 'hello world'}}
    {{/ui-jumbotron}}
  `);

  assert.equal(this.$('.jumbotron').length, 1, 'block component works');
});
