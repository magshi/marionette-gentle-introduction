ContactManager.module('ContactsApp.List.Templates', function(Templates, List, ContactManager,
Backbone, Marionette, $, _){
    Templates.listItemView = '<%- firstName %> <%- lastName %>';
});
