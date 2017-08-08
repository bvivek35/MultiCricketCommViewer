A single page mashup of all commentary and score of all live cricket matches.
-- Real time updates from Cricinfo.
-- Uses Yahoo Query Language (YQL) web service to parse the live-matches-XML and individual-match-JSON. This renders the app almost completely serverless.

TODO:
-- Move UI to react.
    -- I didn't know react back then :(. Still, the UI has 4 componentseach with its own update (from YQL) and draw on UI method. This mimics react to a low baseline. Updating to react should not be hard: at least in identifying components.
    -- Try this on a different branch
-- Add a matches-manager: user picks which matches to keep track of.
-- improve UI for space usage.
-- Compare with Cricbuzz JSON.
    -- Check which is faster and migrate to it ?
    -- Maybe let the user choose which of Cricinfo vs Cricbuzz to use ?
