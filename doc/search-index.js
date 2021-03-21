var searchIndex = JSON.parse('{\
"aper":{"doc":"Aper","t":[0,3,3,3,3,3,12,12,12,4,13,13,13,13,13,13,6,3,8,16,10,24,8,24,3,12,8,11,8,10,3,12,6,3,12,12,12,11,4,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["data_structures","Atom","ReplaceAtom","Constant","List","ListItem","value","location","id","ListOperation","Insert","Append","Prepend","Delete","Move","Apply","OperationWithId","ZenoIndex","StateMachine","Transition","apply","StateMachine","Transition","Transition","StateMachineContainerProgram","0","StateProgram","suspended_event","StateProgramFactory","create","PlayerID","0","Timestamp","TransitionEvent","timestamp","player","transition","new","StateUpdateMessage","ReplaceState","TransitionState","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","to_string","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","apply","apply","apply","apply","clone","clone","clone","clone","clone","clone","clone","clone","clone","default","default","default","default","cmp","cmp","eq","ne","eq","ne","eq","ne","eq","ne","eq","ne","eq","ne","eq","ne","eq","ne","partial_cmp","partial_cmp","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","hash","serialize","serialize","serialize","serialize","serialize","serialize","serialize","serialize","serialize","serialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","new","value","replace","new","value","new","insert_between","append","prepend","insert","delete","move_item","map_item","iter","new_before","new_after","new_between","suspended_event"],"q":["aper","aper::data_structures","","","","","","","","","","","","","","","","","aper","","","","","","","","","","","","","","","","","","","","","","","aper::data_structures","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","aper","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","aper::data_structures","","","aper","aper::data_structures","","","","","","aper","","","aper::data_structures","","","aper","aper::data_structures","aper","aper::data_structures","","","","","","","","","","","","aper","","","","aper::data_structures","aper","aper::data_structures","","","","","","aper","","","","","","aper::data_structures","","","","","","aper","","","","aper::data_structures","","","","","","aper","","","","aper::data_structures","","","","","","","","","","","","","","","","","aper"],"d":["","A [StateMachine] representing a value which is “atomic…","Represents a transition used to change the value of an […","A struct that can wrap a value so that it can be used in …","Represents a list of items, similar to a <code>Vec</code>, but …","Represents a view of an entry in a list during iteration. …","","","","","","","","","","","","A [ZenoIndex] is a binary representation of a fraction …","This trait provides the methods that Aper needs to be …","The [StateMachine::Transition] type associates another …","Update the state machine according to the given […","","This trait indicates that a type can be used as the …","","A [StateProgram] implementation that can be built from …","","This trait can be added to a [StateMachine] which takes a …","A state machine may “suspend” an event which occurs …","A trait indicating that a struct can be used to create a […","","An opaque identifier for a single connected user.","","","","","","","","A message from the server to a client that tells it to …","Instructs the client to completely discard its existing …","Instructs the client to apply the given [TransitionEvent] …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create a new [Atom] with a given initial value.","Retrieve the current value of the atom.","Return a transition which, when processed, will replace …","Create a new [Constant] with a given initial value.","Retrieve the current value of the atom.","","","Construct an [OperationWithId] representing appending the …","Construct a [OperationWithId] representing prepending the …","Construct a [OperationWithId] representing inserting the …","Construct a [ListOperation] representing deleting the …","Construct a [ListOperation] representing moving an object …","","Returns an iterator over [ListItem] views into this list.","","","","A state machine may “suspend” an event which occurs …"],"i":[0,0,0,0,0,0,1,1,1,0,2,2,2,2,2,2,0,0,0,3,3,0,0,0,0,4,0,5,0,6,0,7,0,0,8,8,8,8,0,9,9,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,10,12,13,4,10,11,12,2,13,14,4,7,8,10,13,14,4,14,7,10,10,11,11,12,12,2,2,13,13,14,14,7,7,8,8,14,7,10,11,12,2,13,14,4,7,8,9,7,7,10,11,12,2,13,14,4,7,8,9,10,11,12,2,13,14,4,7,8,9,10,10,10,12,12,13,13,13,13,13,13,13,13,13,14,14,14,5],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],null,null,null,null,null,null,[[],[["transitionevent",3],["option",4]]],null,[[]],null,null,null,null,null,null,null,[[["playerid",3],["timestamp",6],["option",4]],["transitionevent",3]],null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[["invalidtransition",3]]],[[]],[[]],[[],["atom",3]],[[],["replaceatom",3]],[[],["constant",3]],[[],["listoperation",4]],[[],["list",3]],[[],["zenoindex",3]],[[],["statemachinecontainerprogram",3]],[[],["playerid",3]],[[],["transitionevent",3]],[[]],[[]],[[]],[[],["statemachinecontainerprogram",3]],[[],["ordering",4]],[[["playerid",3]],["ordering",4]],[[["atom",3]],["bool",15]],[[["atom",3]],["bool",15]],[[["replaceatom",3]],["bool",15]],[[["replaceatom",3]],["bool",15]],[[["constant",3]],["bool",15]],[[["constant",3]],["bool",15]],[[["listoperation",4]],["bool",15]],[[["listoperation",4]],["bool",15]],[[["list",3]],["bool",15]],[[["list",3]],["bool",15]],[[["zenoindex",3]],["bool",15]],[[["zenoindex",3]],["bool",15]],[[["playerid",3]],["bool",15]],[[["playerid",3]],["bool",15]],[[["transitionevent",3]],["bool",15]],[[["transitionevent",3]],["bool",15]],[[],[["option",4],["ordering",4]]],[[["playerid",3]],[["ordering",4],["option",4]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[]],[[]],[[],["replaceatom",3]],[[]],[[]],[[],["list",3]],[[["uuid",3]],["operationwithid",6]],[[],["operationwithid",6]],[[],["operationwithid",6]],[[["zenoindex",3]],["operationwithid",6]],[[["uuid",3]],["listoperation",4]],[[["zenoindex",3],["uuid",3]],["listoperation",4]],[[["uuid",3]]],[[]],[[["zenoindex",3]],["zenoindex",3]],[[["zenoindex",3]],["zenoindex",3]],[[["zenoindex",3]],["zenoindex",3]],[[],[["transitionevent",3],["option",4]]]],"p":[[3,"ListItem"],[4,"ListOperation"],[8,"StateMachine"],[3,"StateMachineContainerProgram"],[8,"StateProgram"],[8,"StateProgramFactory"],[3,"PlayerID"],[3,"TransitionEvent"],[4,"StateUpdateMessage"],[3,"Atom"],[3,"ReplaceAtom"],[3,"Constant"],[3,"List"],[3,"ZenoIndex"]]},\
"aper_actix":{"doc":"","t":[3,4,13,13,13,3,12,3,12,12,12,3,3,3,12,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["ChannelActor","ChannelMessage","Connect","Event","Tick","WrappedStateUpdateMessage","0","PlayerActor","channel","last_seen","token","ServerBuilder","CreateChannelMessage","GetChannelMessage","channel","ServerActor","from","into","borrow","borrow_mut","try_from","try_into","type_id","vzip","from","into","borrow","borrow_mut","try_from","try_into","type_id","vzip","from","into","borrow","borrow_mut","try_from","try_into","type_id","vzip","from","into","borrow","borrow_mut","try_from","try_into","type_id","vzip","from","into","borrow","borrow_mut","try_from","try_into","type_id","vzip","from","into","borrow","borrow_mut","try_from","try_into","type_id","vzip","from","into","borrow","borrow_mut","try_from","try_into","type_id","vzip","from","into","borrow","borrow_mut","try_from","try_into","type_id","vzip","started","handle","handle","handle","handle","handle","new","new","new","serve","serve_on","new","new"],"q":["aper_actix","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Actor representing a channel, responsible for receiving …","A message received by a [crate::ChannelActor].","A new player has joined this channel.","A transition has been received from a player. Includes …","A transition is occurring because a suspended transition …","A [StateUpdateMessage], wrapped in a new struct so that …","","Actor which owns the connection to the client WebSocket …","","","","Builder for creating a server from a [StateProgram].","Tells the server to create a new channel and return its …","Actix message to request the address of a channel by …","","Responds to messages from the player which are not …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create a new builder with the given initial state.","","","",""],"i":[0,0,1,1,1,0,2,0,3,3,3,0,0,0,4,0,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,8,8,8,8,8,8,8,8,3,5,3,8,8,3,5,3,6,6,6,4,8],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[["context",3],["channelmessage",4]]],[[["wrappedstateupdatemessage",3]]],[[["getchannelmessage",3],["context",3]]],[[["context",3],["createchannelmessage",3]]],[[["message",4],["protocolerror",4],["result",4]]],[[],["channelactor",3]],[[["addr",3],["channelactor",3]],["playeractor",3]],[[],["serverbuilder",3]],[[],["result",6]],[[["u32",15],["str",15]],["result",6]],[[["string",3]],["getchannelmessage",3]],[[]]],"p":[[4,"ChannelMessage"],[3,"WrappedStateUpdateMessage"],[3,"PlayerActor"],[3,"GetChannelMessage"],[3,"ChannelActor"],[3,"ServerBuilder"],[3,"CreateChannelMessage"],[3,"ServerActor"]]},\
"aper_yew":{"doc":"Aper-Yew","t":[8,16,16,10,3,12,12,12,12,3,3,3,12,12,12,4,13,13,13,13,4,13,13,13,13,13,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["View","State","Callback","view","ViewContext","callback","redraw","player","time","UpdateInterval","ClientBuilder","StateProgramComponentProps","websocket_url","onerror","view","Status","WaitingToConnect","WaitingForInitialState","Connected","ErrorConnecting","Msg","StateTransition","ServerMessage","UpdateStatus","Redraw","NoOp","StateProgramComponent","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","render","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","render","clone","fmt","fmt","create","update","change","view","create","update","change","view","builder","new","with_rel_websocket_url","with_abs_websocket_url","mount_to_body"],"q":["aper_yew","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Applies to a struct that can turn a value of the …","","","Turn a value into HTML.","Context passed to a [View].","A function called to invoke a state machine …","A function called to force a redraw.","The ID of the current player.","An estimate of the server’s time as of the call to <code>view</code>.","A Yew component that calls the given callback at a …","","Properties for [StateProgramComponent].","The websocket URL (beginning ws:// or wss://) of the …","A no-argument callback that is invoked if there is a …","An object implementing [View]. From the moment that […","The connection status of the component, and stores the …","The component is in the process of connecting to the …","The component has successfully connected to the server, …","The component has connected to the server and is assumed …","There was some error during the <code>WaitingToConnect</code> or …","Represents a message this component could receive, either …","A [Transition] object was initiated by the view, usually …","A [StateUpdateMessage] was received from the server.","The status of the connection with the remote server has …","Trigger a redraw of this View. Redraws are automatically …","Do nothing.","Yew Component which owns a copy of the state as well as a …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","On creation, we initialize the connection, which starts …","","","","","","","",""],"i":[0,1,1,1,0,2,2,2,2,0,0,0,3,3,3,0,4,4,4,4,0,5,5,5,5,5,0,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,8,8,8,8,8,8,8,8,3,4,5,7,7,7,7,8,8,8,8,3,6,6,6,6],"f":[null,null,null,[[["viewcontext",3]],["html",6]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["vnode",4]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["vnode",4]],[[],["stateprogramcomponentprops",3]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["componentlink",6]]],[[],["shouldrender",6]],[[],["shouldrender",6]],[[],["html",6]],[[["componentlink",6]]],[[],["shouldrender",6]],[[],["shouldrender",6]],[[],["html",6]],[[]],[[],["clientbuilder",3]],[[["str",15]]],[[["str",15]]],[[]]],"p":[[8,"View"],[3,"ViewContext"],[3,"StateProgramComponentProps"],[4,"Status"],[4,"Msg"],[3,"ClientBuilder"],[3,"UpdateInterval"],[3,"StateProgramComponent"]]}\
}');
initSearch(searchIndex);