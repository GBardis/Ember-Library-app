import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('contact');
	},

	actions: {
		saveContact(newContact) {
			newContact.save().then(() => this.transitionTo('admin.contacts'));
		},

		willTransaction() {
			this.controller.get('model').rollbackAttributes();
		}
	}
});
