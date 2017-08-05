import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',
	message: '',

	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),


	size: Ember.computed.gte('message.length', 5),
	isLongEnough: Ember.computed.and('size', 'isValid'),
	isDisabled: Ember.computed.not('isLongEnough'),



});
