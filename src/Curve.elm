module Curve exposing (Model, init, Msg, update, view)

-- import Vector2D exposing (Vector2D)
import Basics exposing (turns)
import Html exposing (..)

-- MODEL

type alias Model =
  { angle : Float
  , measure : Float
  -- , points : List Vector2D
  }

init : Model
init =
    { angle = -1/8
    , measure = 50
    -- , points = []
    }

-- UPDATE

type Msg
  = ChangeAngle Float
  | ChangeMeasure Float
  -- | ChangePoint Int Vector2D

update : Msg -> Model -> Model
update action model =
  case action of
    ChangeAngle value ->
      { model | angle = value }

    ChangeMeasure value ->
      { model | measure = value }
      
    -- ChangePoint id vector ->
    --   model

-- VIEW

view : Model -> Html Msg
view model =
  div []
    [ text (toString model)
    , button [] [ text "-" ]
    ]
