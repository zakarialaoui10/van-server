import van from "vanjs-core"
const {div, h2} = van.tags;
export default function RepoCard(repoName, description, starsCount, forksCount){
    return div(
        { style : `
            border : 2px darkblue solid;
            display : flex; 
            flex-direction: column; 
            align-items: center;
            width : 100%;
            min-height : 200px;
            margin : 0 10px;
            `},
        h2(repoName),
        div(
            { style : `
                display : flex; 
                flex-direction: column; 
                align-items: center;
                gap : 1.5em;
            `},
            div(description),
            div(`Stars : ${starsCount}`),
            div(`Forks : ${forksCount}`)
        )
    )
}