import van from "vanjs-core";
import "@styles/app.css"
const {aside, main, div, nav, a} = van.tags;
export default function Layout(Content){
    return div(
        { class : "Layout"},
        aside(
            nav(
                { class : "navigation"},
                a({href : "/me"}, "Home"),
                a({href : "/me"}, "Get Started"),
                a({href : "/me"}, "About"),
                a({href : "/me"}, "More")
            )
        ),
        main(
            Content
        )
    )
}