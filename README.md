# Aper

Aper is a framework for real-time sharing of arbitrary application state
over [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).
Its use-cases include real-time browser-based collaboration tools and
multiplayer in-browser games.

Specifically, Aper provides scaffolding to represent your program as a state
machine, as well as the infrastructure to keep that state machine synchronized
across multiple instances running in your users' browsers.

Aper integrates with [Yew](https://yew.rs/docs/en/) on the client side, and
[Actix](https://actix.rs/) for the server. Although the focus is on browser-based
apps running in WebAssembly and communicating over WebSocket, the core state
machine scaffolding can be used independent of the client/server architecture,
and even with non-WebSocket protocols.

**Aper is rapidly evolving. Consider this a *technology preview*.**

- [Documentation](https://paulgb.github.io/aper/aper/)

## Roadmap

Before the first non-preview release, the following need to be sorted out:

- [x] State transitions that can occur with no user input (e.g. for a timer in a game).
- [ ] Optimistic state updates on the client, with rollback if necessary.
- [ ] Implement graceful reconnection in the client. (e.g. iOS seems to drop
      websocket connections of background tabs, need to auto-reconnect)
- [ ] Allow the state machine to handle disconnection.
- [ ] Allow the state machine to “reject” a transition instead of just treating it
      as a no-op.
- [ ] Use a factory pattern to produce state machines rather than a no-argument
      `new` function, for flexibility.
- [ ] Add turn-key “channel creation” UI.

The immediate roadmap has a strong emphasis on figuring out the right interface
between Aper and application code. Once that's sorted out, longer-term tasks can
focus on scaling Aper up to a production environment:

- Integrating with authentication/permissions. I don't plan for Aper to ever
  be opinionated about an auth framework, but it needs to provide hooks to
  allow it to integrate with other systems.
- Journaled state storage, both indefinitely for state persistence and
  short-term to enable graceful node failure.
- Load balancing rooms between multiple servers.
- “Agents” that are spun up by the server that have the same interface to the
  state machine that users do, but do not have a human attached. These could
  allow a way to access external resources, non-deterministic computation, etc.
  in a way that does not break the restriction that state updates are
  deterministic.
