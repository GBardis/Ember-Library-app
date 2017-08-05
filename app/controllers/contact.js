import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',
	message: '',

	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),


	size: Ember.computed.gte('message.length', 5),
	isLongEnough: Ember.computed.and('size', 'isValid'),
	isDisabled: Ember.computed.not('isLongEnough'),


	actions: {
		saveInvitation() {
			alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
			this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
			this.set('emailAddress', '');
		}
	}
});
