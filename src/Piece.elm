module Piece exposing (Model, init, Msg, update, view)

import Curve

-- import Vector2D exposing (Vector2D, vector2D)
import Html exposing (..)
import Html.App exposing (..)
import Html.Attributes exposing (style)

-- MODEL

type alias Model =
  { position : (Int, Int)
  , curves : List Curve.Model
  }

init : Model
init =
    { position = (50, 50)
    , curves = [Curve.init, Curve.init, Curve.init]
    }

-- UPDATE

type Msg
  = ChangeCurve Int Curve.Msg

update : Msg -> Model -> Model
update action model =
  case action of
    ChangeCurve id curveAction ->
      model

-- VIEW

view : Model -> Html Msg
view model =
  div
    [ style 
        [ ("border", "1px grey solid")
        , ("marginTop", "1em")
        , ("padding", "1em")
        ] 
    ]
    (List.append
      [ text "piece"
      , button [] [ text "+" ]
      , button [] [ text "-" ]
      , div []
        [ text (toString model.position) 
        ]
      ]
      [
        (Html.App.map Curve.view model.curves)
      ]
    )
    