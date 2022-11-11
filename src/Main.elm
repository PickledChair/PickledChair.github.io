module Main exposing (main)

import Html exposing (Html, div, text)
import Html.Attributes as Attr


type WebServiceName
    = Twitter
    | GitHub


webServiceNameToString : WebServiceName -> String
webServiceNameToString name =
    case name of
        Twitter ->
            "Twitter"

        GitHub ->
            "GitHub"


type alias AccountInfo =
    { serviceName : WebServiceName, accountName : String, accountLink : String }


type alias BlogInfo =
    { blogName : String, blogLink : String }


type alias Model =
    { accountInfos : List AccountInfo
    , blogInfo : BlogInfo
    }


initialAccountInfos : List AccountInfo
initialAccountInfos =
    [ { serviceName = Twitter
      , accountName = "@pickled_chair"
      , accountLink = "https://twitter.com/pickled_chair"
      }
    , { serviceName = GitHub
      , accountName = "@PickledChair"
      , accountLink = "https://github.com/PickledChair"
      }
    ]


initialBlogInfo : BlogInfo
initialBlogInfo =
    { blogName = "酢漬けの雑記帳", blogLink = "https://blog.pickledchair.com" }


initialModel : Model
initialModel =
    { accountInfos = initialAccountInfos
    , blogInfo = initialBlogInfo
    }


blogInfoView : BlogInfo -> Html msg
blogInfoView info =
    div []
        [ Html.h2 [] [ text "Blog" ]
        , div []
            [ Html.a
                [ Attr.href info.blogLink, Attr.target "_blank" ]
                [ text info.blogName ]
            ]
        ]


accountsInfoView : List AccountInfo -> Html msg
accountsInfoView infos =
    div []
        [ Html.h2 [] [ text "Accounts" ]
        , div []
            (List.map
                (\info ->
                    div []
                        [ text (webServiceNameToString info.serviceName ++ ": ")
                        , Html.a
                            [ Attr.href info.accountLink
                            , Attr.target "_blank"
                            ]
                            [ text info.accountName ]
                        ]
                )
                infos
            )
        ]


headerView : Html msg
headerView =
    div [] [ Html.h1 [] [ text "SuitCase's Site" ] ]


view : Model -> Html msg
view model =
    div []
        [ headerView
        , accountsInfoView model.accountInfos
        , blogInfoView model.blogInfo
        ]


main : Html msg
main =
    view initialModel
