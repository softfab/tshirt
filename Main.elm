import Counter exposing (update, view)
import StartApp.Simple exposing (start)


main =
  start
    { model = 10
    , update = update
    , view = view
    }
    