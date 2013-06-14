# Interface definition for an angular sync protocol: 

    Constructor(options:Object)

Any pre-configuration necessary before use by the $syncResource service. Should not contain any information about the data, models, resources being synchronized, so that this configuration can be used for multiple resources.

    getCollection (callback:Function)

Callback is supplied by $syncResource
    
    getObject(query:*, callback:Function)

Where query is an id, address, or any protocol-specific way of finding a resource.
    subscribeToCollection(callback:Function)

Subscribes to all changes on a collection, evokes callback with updates.

    subscribeToObject(id:*, callback:Function)
    unsubscribeFromObject(id)
    updateObject(id, value)