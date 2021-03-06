ContactManager.module("Entities", function(Entities, ContactManager,
Backbone, Marionette, $, _){

    Entities.Contact = Backbone.Model.extend({});

    Entities.ContactCollection = Backbone.Collection.extend({
        model: Entities.Contact,
        comparator: "firstName"
    });

    var contacts;

    var initializeContacts = function(){
        contacts = new Entities.ContactCollection([
            {
              firstName: 'Maizy',
              lastName: 'Cat',
              phoneNumber: '524-MEOW'
            },
            {
              firstName: 'Morris',
              lastName: 'Cat',
              phoneNumber: '527-MEOW'
            },
            {
              firstName: 'Croissant',
              lastName: 'Cat',
              phoneNumber: '524-MATT'
            }
        ]);
    };

    var API = {
        getContactEntities: function(){
            if (contacts === undefined){
                initializeContacts();
            }
            return contacts;
        }
    };

    ContactManager.reqres.setHandler('contact:entities', function(){
        return API.getContactEntities();
    });
});
