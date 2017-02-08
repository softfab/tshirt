module Pattern exposing (Model, init, Action, update, view)

import Piece

import Html exposing (..)

-- MODEL

type alias Model =
  { pieces : List Piece.Model
  }

init : Model
init =
    { pieces = [Piece.init]
    }

-- UPDATE

type Action
  = ChangePiece Int Piece.Action

update : Action -> Model -> Model
update action model =
  case action of
    ChangePiece id piece ->
      model

-- VIEW

view : Signal.Address Action -> Model -> Html
view address model =
  div []
    (List.append
      [ text "pattern"
      , button [] [ text "+" ]
      ]
      (List.map (viewPiece address) model.pieces)
    )
    
viewPiece : Signal.Address Action -> Piece.Model -> Html
viewPiece address model =
  Piece.view (Signal.forwardTo address (ChangePiece 0)) model
