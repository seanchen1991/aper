var searchIndex = JSON.parse('{\
"aper":{"doc":"AperAper is a framework for real-time sharing of …","i":[[0,"data_structures","aper","",null,null],[3,"Atom","aper::data_structures","A [StateMachine] representing a value which is \\\"atomic\\\" …",null,null],[3,"ReplaceAtom","","Represents a transition used to change the value of an […",null,null],[3,"ZenoIndex","","A [ZenoIndex] is a binary representation of a fraction …",null,null],[8,"StateMachine","aper","This trait provides the methods that Aper needs to be …",null,null],[16,"Transition","","The [StateMachine::Transition] type associates another …",0,null],[10,"process_event","","Update the state machine according to the given […",0,[[["transitionevent",3]]]],[11,"suspended_event","","A state machine may \\\"suspend\\\" an event which occurs at a …",0,[[],[["option",4],["suspendedevent",3]]]],[8,"StateMachineFactory","","A trait indicating that a struct can be used to create a […",null,null],[10,"create","","",1,[[]]],[3,"SuspendedEvent","","Represents a transition that a [crate::StateMachine] …",null,null],[12,"time","","When the event should be triggered. Note that this is not …",2,null],[12,"transition","","The transition that should be triggered. This is turned …",2,null],[3,"TransitionEvent","","A transition with associated metadata: which player …",null,null],[12,"player_id","","",3,null],[12,"transition","","",3,null],[12,"timestamp","","",3,null],[3,"PlayerID","","An opaque identifier for a single connected user.",null,null],[12,"0","","",4,null],[4,"StateUpdateMessage","","A message from the server to a client that tells it to …",null,null],[13,"ReplaceState","","Instructs the client to completely discard its existing …",5,null],[13,"TransitionState","","Instructs the client to apply the given [TransitionEvent] …",5,null],[11,"from","aper::data_structures","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","aper","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"process_event","aper::data_structures","",6,[[["transitionevent",3]]]],[11,"clone","","",6,[[],["atom",3]]],[11,"clone","","",7,[[],["replaceatom",3]]],[11,"clone","","",8,[[],["zenoindex",3]]],[11,"clone","aper","",2,[[],["suspendedevent",3]]],[11,"clone","","",3,[[],["transitionevent",3]]],[11,"clone","","",4,[[],["playerid",3]]],[11,"default","aper::data_structures","",8,[[]]],[11,"cmp","","",8,[[],["ordering",4]]],[11,"cmp","aper","",2,[[["suspendedevent",3]],["ordering",4]]],[11,"cmp","","",3,[[["transitionevent",3]],["ordering",4]]],[11,"cmp","","",4,[[["playerid",3]],["ordering",4]]],[11,"eq","aper::data_structures","",6,[[["atom",3]],["bool",15]]],[11,"ne","","",6,[[["atom",3]],["bool",15]]],[11,"eq","","",7,[[["replaceatom",3]],["bool",15]]],[11,"ne","","",7,[[["replaceatom",3]],["bool",15]]],[11,"eq","","",8,[[["zenoindex",3]],["bool",15]]],[11,"ne","","",8,[[["zenoindex",3]],["bool",15]]],[11,"eq","aper","",2,[[["suspendedevent",3]],["bool",15]]],[11,"ne","","",2,[[["suspendedevent",3]],["bool",15]]],[11,"eq","","",3,[[["transitionevent",3]],["bool",15]]],[11,"ne","","",3,[[["transitionevent",3]],["bool",15]]],[11,"eq","","",4,[[["playerid",3]],["bool",15]]],[11,"ne","","",4,[[["playerid",3]],["bool",15]]],[11,"partial_cmp","aper::data_structures","",8,[[],[["ordering",4],["option",4]]]],[11,"partial_cmp","aper","",2,[[["suspendedevent",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",3,[[["transitionevent",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",4,[[["playerid",3]],[["option",4],["ordering",4]]]],[11,"fmt","aper::data_structures","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","aper","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"hash","","",2,[[]]],[11,"hash","","",3,[[]]],[11,"hash","","",4,[[]]],[11,"serialize","aper::data_structures","",6,[[],["result",4]]],[11,"serialize","","",7,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]],[11,"serialize","aper","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",5,[[],["result",4]]],[11,"deserialize","aper::data_structures","",6,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","aper","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]],[11,"new","aper::data_structures","Create a new [Atom] with a given initial value.",6,[[]]],[11,"value","","Retrieve the current value of the atom.",6,[[]]],[11,"replace","","Return a transition which, when processed, will replace …",6,[[],["replaceatom",3]]],[11,"new_before","","",8,[[["zenoindex",3]],["zenoindex",3]]],[11,"new_after","","",8,[[["zenoindex",3]],["zenoindex",3]]],[11,"new_between","","",8,[[["zenoindex",3]],["zenoindex",3]]],[11,"suspended_event","aper","A state machine may \\\"suspend\\\" an event which occurs at a …",0,[[],[["option",4],["suspendedevent",3]]]],[11,"new","","",2,[[["utc",3],["datetime",3]],["suspendedevent",3]]],[11,"map_transition","","Create a new [SuspendedEvent] that has the same time as …",2,[[],["suspendedevent",3]]],[11,"new","","",3,[[["playerid",3]],["transitionevent",3]]],[11,"new_tick_event","","",3,[[],["transitionevent",3]]]],"p":[[8,"StateMachine"],[8,"StateMachineFactory"],[3,"SuspendedEvent"],[3,"TransitionEvent"],[3,"PlayerID"],[4,"StateUpdateMessage"],[3,"Atom"],[3,"ReplaceAtom"],[3,"ZenoIndex"]]},\
"aper_actix":{"doc":"","i":[[3,"ChannelActor","aper_actix","Actor representing a channel, responsible for receiving …",null,null],[4,"ChannelMessage","","A message received by a [crate::ChannelActor].",null,null],[13,"Connect","","A new player has joined this channel.",0,null],[13,"Event","","A transition has been received from a player. Includes …",0,null],[13,"Tick","","A transition is occurring because a suspended transition …",0,null],[3,"WrappedStateUpdateMessage","","A [StateUpdateMessage], wrapped in a new struct so that …",null,null],[12,"0","","",1,null],[3,"PlayerActor","","",null,null],[12,"channel","","",2,null],[12,"last_seen","","",2,null],[12,"token","","",2,null],[3,"CreateChannelMessage","","Tells the server to create a new channel and return its …",null,null],[3,"GetChannelMessage","","Actix message to request the address of a channel by …",null,null],[12,"channel","","",3,null],[3,"ServerActor","","Responds to messages from the player which are not …",null,null],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"started","","",2,[[]]],[11,"handle","","",4,[[["channelmessage",4],["context",3]]]],[11,"handle","","",2,[[["wrappedstateupdatemessage",3]]]],[11,"handle","","",6,[[["context",3],["getchannelmessage",3]]]],[11,"handle","","",6,[[["createchannelmessage",3],["context",3]]]],[11,"handle","","",2,[[["message",4],["result",4],["protocolerror",4]]]],[11,"new","","",4,[[],["channelactor",3]]],[11,"new","","",2,[[["channelactor",3],["addr",3],["string",3]],["playeractor",3]]],[11,"new","","",3,[[["string",3]],["getchannelmessage",3]]],[11,"new","","",6,[[]]]],"p":[[4,"ChannelMessage"],[3,"WrappedStateUpdateMessage"],[3,"PlayerActor"],[3,"GetChannelMessage"],[3,"ChannelActor"],[3,"CreateChannelMessage"],[3,"ServerActor"]]},\
"aper_yew":{"doc":"Aper-YewThis crate provides a Yew component that connects …","i":[[3,"UpdateInterval","aper_yew","A Yew component that calls the given callback at a …",null,null],[3,"Props","","Properties for [StateMachineComponent].",null,null],[12,"websocket_url","","The websocket URL (beginning ws:// or wss://) of the …",0,null],[12,"onerror","","A no-argument callback that is invoked if there is a …",0,null],[12,"view","","An object implementing [StateView]. From the moment that […",0,null],[8,"StateView","","A trait implemented by objects which can render a […",null,null],[16,"State","","Defines the struct used to represent the state that this […",1,null],[10,"view","","Render the given state into a [yew::Html] result.",1,[[["viewcontext",3]],["html",6]]],[4,"Status","","The connection status of the component, and stores the …",null,null],[13,"WaitingToConnect","","The component is in the process of connecting to the …",2,null],[13,"WaitingForInitialState","","The component has successfully connected to the server, …",2,null],[13,"Connected","","The component has connected to the server and is assumed …",2,null],[13,"ErrorConnecting","","There was some error during the <code>WaitingToConnect</code> or …",2,null],[4,"Msg","","Represents a message this component could receive, either …",null,null],[13,"GameStateTransition","","A [StateMachine::Transition] object was initiated by the …",3,null],[13,"ServerMessage","","A [StateUpdateMessage] was received from the server.",3,null],[13,"UpdateStatus","","The status of the connection with the remote server has …",3,null],[13,"Redraw","","Trigger a redraw of this View. Redraws are automatically …",3,null],[13,"NoOp","","Do nothing.",3,null],[3,"StateMachineComponent","","Yew Component which owns a copy of the state as well as a …",null,null],[3,"ViewContext","","Data besides the state which is available to a [StateView]…",null,null],[12,"callback","","A callback for <code>Transition</code> events.",4,null],[12,"redraw","","A callback to force a redraw.",4,null],[12,"player_id","","The ID of the player whose view this is.",4,null],[12,"time","","An estimate of the time on the server\'s clock, accounting …",4,null],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"render","","",5,[[],["vnode",4]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"render","","",6,[[],["vnode",4]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"clone","","",0,[[],["props",3]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"create","","",5,[[["componentlink",6]]]],[11,"update","","",5,[[],["shouldrender",6]]],[11,"change","","",5,[[],["shouldrender",6]]],[11,"view","","",5,[[],["html",6]]],[11,"create","","On creation, we initialize the connection, which starts …",6,[[["componentlink",6]]]],[11,"update","","",6,[[],["shouldrender",6]]],[11,"change","","",6,[[],["shouldrender",6]]],[11,"view","","",6,[[],["html",6]]],[11,"builder","","",0,[[]]]],"p":[[3,"Props"],[8,"StateView"],[4,"Status"],[4,"Msg"],[3,"ViewContext"],[3,"UpdateInterval"],[3,"StateMachineComponent"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);