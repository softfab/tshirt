import Color exposing (..)
import Graphics.Collage exposing (..)
import Graphics.Element exposing (..)
import Mouse
import Window
import Debug


main : Signal Element
main =
  Signal.map2 scene Window.dimensions clickLocations


clickLocations : Signal (List (Int, Int))
clickLocations =
  Signal.foldp (::) [] (Signal.sampleOn Mouse.clicks Mouse.position)


scene : (Int, Int) -> List (Int, Int) -> Element
scene (w,h) locs =
  let drawPolygon (locs) =
    filled Color.black (polygon locs)
  in
    Debug.watch (toString locs)
    layers
      [ collage w h [(drawPolygon (mouseToGraphics (w, h) locs))]
      , show "Click to draw a polygon."
      ]

mouseToGraphics : (Int, Int) -> List (Int, Int) -> List (Float, Float)
mouseToGraphics (w, h) mousePositions =
  List.map (\(x, y) -> (toFloat x - toFloat w / 2, toFloat h / 2 - toFloat y)) mousePositions
  