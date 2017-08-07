import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('invitation');
	},
	//
	// emailAddress: '',
	// isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	// isDisabled: this.computed.not('isValid'),

	actions: {
		saveInvitation(saveInvitation) {

			// let model = this.controller.get('model');
			saveInvitation.save().then(() => this.transitionTo('admin.contacts'));
		},

		willTransaction() {
			this.controller.get('model').rollbackAttributes();
		}
		// newInvitation.save().then((responce) => {
		// 	alert(`Saving of the following email address is in progress: ${email}`);
		// 	this.set('responseMessage', `Thank you! We've just saved your email address: ${responce.get('id')}`);
		// 	this.set('emailAddress', '');
		// });

	}
});
