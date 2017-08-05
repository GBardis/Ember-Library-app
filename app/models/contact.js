import DS from 'ember-data';

export default DS.Model.extend({
	emailAddress: DS.attr('string'),
	message: DS.attr('string'),

	// isValid: function() {
	// 	let email = this.get('emailAddress');
	// 	if (email.match(email, /^.+@.+\..+$/)) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }.property('emailAddress'),

	actions: {
		saveInvitation() {
			//alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
			this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
			this.set('emailAddress', '');
			this.set('message', '');
		}
	}
});
