import van from "vanjs-core";
import "@styles/app.css"
const {aside, main, div, nav, a} = van.tags;
export default function Layout(Content){
    return div(
        { class : "Layout"},
        aside(
            nav(
                { class : "navigation"},
                a({href : "/"}, "Home"),
                a({href : "/"}, "Features"),
                a({href : "/repos/owner/zakarialaoui10/repo/van-mdx"}, "Dynamic Routes"),
                a({href : "/about"}, "About"),
            )
        ),
        main(
            Content
        )
    )
}