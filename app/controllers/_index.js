import Ember from 'ember';

export default Ember.Controller.extend({

	// emailAddress: '',
	// isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	// isDisabled: Ember.computed.not('isValid'),

	// actualEmailAddress: Ember.computed('emailAddress', function() {
	// 	console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
	// }),
	//
	// emailAddressChanged: Ember.observer('emailAddress', function() {
	// 	console.log('observer is called', this.get('emailAddress'));
	// }),

	// actions: {
	// 	saveInvitation() {
	// 		const email = this.get('emailAddress');
	// 		const newInvitation = this.store.createRecord('invitation', {
	// 			email: email
	// 		});
	//
	// 		newInvitation.save().then((responce) => {
	// 			alert(`Saving of the following email address is in progress: ${email}`);
	// 			this.set('responseMessage', `Thank you! We've just saved your email address: ${responce.get('id')}`);
	// 			this.set('emailAddress', '');
	// 		});
	// 	}
	// }
});