import Pattern exposing (init, update, view)
import Html exposing (App)

main =
  App.program
    { model = init
    , update = update
    , view = view
    }
